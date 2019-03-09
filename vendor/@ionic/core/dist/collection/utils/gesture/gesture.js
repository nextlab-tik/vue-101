import { GESTURE_CONTROLLER } from './gesture-controller';
import { createPointerEvents } from './pointer-events';
import { createPanRecognizer } from './recognizers';
export function createGesture(config) {
    const finalConfig = Object.assign({ disableScroll: false, direction: 'x', gesturePriority: 0, passive: true, maxAngle: 40, threshold: 10 }, config);
    const canStart = finalConfig.canStart;
    const onWillStart = finalConfig.onWillStart;
    const onStart = finalConfig.onStart;
    const onEnd = finalConfig.onEnd;
    const notCaptured = finalConfig.notCaptured;
    const onMove = finalConfig.onMove;
    const threshold = finalConfig.threshold;
    const queue = finalConfig.queue;
    const detail = {
        type: 'pan',
        startX: 0,
        startY: 0,
        startTimeStamp: 0,
        currentX: 0,
        currentY: 0,
        velocityX: 0,
        velocityY: 0,
        deltaX: 0,
        deltaY: 0,
        timeStamp: 0,
        event: undefined,
        data: undefined
    };
    const pointerEvents = createPointerEvents(finalConfig.el, pointerDown, pointerMove, pointerUp, {
        capture: false,
    });
    const pan = createPanRecognizer(finalConfig.direction, finalConfig.threshold, finalConfig.maxAngle);
    const gesture = GESTURE_CONTROLLER.createGesture({
        name: config.gestureName,
        priority: config.gesturePriority,
        disableScroll: config.disableScroll
    });
    let hasCapturedPan = false;
    let hasStartedPan = false;
    let hasFiredStart = true;
    let isMoveQueued = false;
    function pointerDown(ev) {
        const timeStamp = now(ev);
        if (hasStartedPan || !hasFiredStart) {
            return false;
        }
        updateDetail(ev, detail);
        detail.startX = detail.currentX;
        detail.startY = detail.currentY;
        detail.startTimeStamp = detail.timeStamp = timeStamp;
        detail.velocityX = detail.velocityY = detail.deltaX = detail.deltaY = 0;
        detail.event = ev;
        if (canStart && canStart(detail) === false) {
            return false;
        }
        gesture.release();
        if (!gesture.start()) {
            return false;
        }
        hasStartedPan = true;
        if (threshold === 0) {
            return tryToCapturePan();
        }
        pan.start(detail.startX, detail.startY);
        return true;
    }
    function pointerMove(ev) {
        if (hasCapturedPan) {
            if (!isMoveQueued && hasFiredStart) {
                isMoveQueued = true;
                calcGestureData(detail, ev);
                queue.write(fireOnMove);
            }
            return;
        }
        calcGestureData(detail, ev);
        if (pan.detect(detail.currentX, detail.currentY)) {
            if (!pan.isGesture() || !tryToCapturePan()) {
                abortGesture();
            }
        }
    }
    function fireOnMove() {
        if (!hasCapturedPan) {
            return;
        }
        isMoveQueued = false;
        if (onMove) {
            onMove(detail);
        }
    }
    function tryToCapturePan() {
        if (gesture && !gesture.capture()) {
            return false;
        }
        hasCapturedPan = true;
        hasFiredStart = false;
        detail.startX = detail.currentX;
        detail.startY = detail.currentY;
        detail.startTimeStamp = detail.timeStamp;
        if (onWillStart) {
            onWillStart(detail).then(fireOnStart);
        }
        else {
            fireOnStart();
        }
        return true;
    }
    function fireOnStart() {
        if (onStart) {
            onStart(detail);
        }
        hasFiredStart = true;
    }
    function abortGesture() {
        reset();
        pointerEvents.stop();
        if (notCaptured) {
            notCaptured(detail);
        }
    }
    function reset() {
        hasCapturedPan = false;
        hasStartedPan = false;
        isMoveQueued = false;
        hasFiredStart = true;
        gesture.release();
    }
    function pointerUp(ev) {
        const tmpHasCaptured = hasCapturedPan;
        const tmpHasFiredStart = hasFiredStart;
        reset();
        if (!tmpHasFiredStart) {
            return;
        }
        calcGestureData(detail, ev);
        if (tmpHasCaptured) {
            if (onEnd) {
                onEnd(detail);
            }
            return;
        }
        if (notCaptured) {
            notCaptured(detail);
        }
    }
    return {
        setDisabled(disabled) {
            pointerEvents.setDisabled(disabled);
        },
        destroy() {
            gesture.destroy();
            pointerEvents.destroy();
        }
    };
}
function calcGestureData(detail, ev) {
    const prevX = detail.currentX;
    const prevY = detail.currentY;
    const prevT = detail.timeStamp;
    updateDetail(ev, detail);
    const currentX = detail.currentX;
    const currentY = detail.currentY;
    const timestamp = detail.timeStamp = now(ev);
    const timeDelta = timestamp - prevT;
    if (timeDelta > 0 && timeDelta < 100) {
        const velocityX = (currentX - prevX) / timeDelta;
        const velocityY = (currentY - prevY) / timeDelta;
        detail.velocityX = velocityX * 0.7 + detail.velocityX * 0.3;
        detail.velocityY = velocityY * 0.7 + detail.velocityY * 0.3;
    }
    detail.deltaX = currentX - detail.startX;
    detail.deltaY = currentY - detail.startY;
    detail.event = ev;
}
function updateDetail(ev, detail) {
    let x = 0;
    let y = 0;
    if (ev) {
        const changedTouches = ev.changedTouches;
        if (changedTouches && changedTouches.length > 0) {
            const touch = changedTouches[0];
            x = touch.clientX;
            y = touch.clientY;
        }
        else if (ev.pageX !== undefined) {
            x = ev.pageX;
            y = ev.pageY;
        }
    }
    detail.currentX = x;
    detail.currentY = y;
}
function now(ev) {
    return ev.timeStamp || Date.now();
}
