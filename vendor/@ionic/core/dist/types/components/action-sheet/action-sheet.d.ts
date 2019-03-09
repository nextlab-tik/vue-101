import '../../stencil.core';
import { ComponentInterface, EventEmitter } from '../../stencil.core';
import { ActionSheetButton, Animation, AnimationBuilder, Config, Mode, OverlayEventDetail, OverlayInterface } from '../../interface';
export declare class ActionSheet implements ComponentInterface, OverlayInterface {
    presented: boolean;
    animation?: Animation;
    el: HTMLElement;
    animationCtrl: HTMLIonAnimationControllerElement;
    config: Config;
    overlayIndex: number;
    /**
     * The mode determines which platform styles to use.
     * Possible values are: `"ios"` or `"md"`.
     */
    mode: Mode;
    /**
     * If true, the keyboard will be automatically dismissed when the overlay is presented.
     */
    keyboardClose: boolean;
    /**
     * Animation to use when the action sheet is presented.
     */
    enterAnimation?: AnimationBuilder;
    /**
     * Animation to use when the action sheet is dismissed.
     */
    leaveAnimation?: AnimationBuilder;
    /**
     * An array of buttons for the action sheet.
     */
    buttons: (ActionSheetButton | string)[];
    /**
     * Additional classes to apply for custom CSS. If multiple classes are
     * provided they should be separated by spaces.
     */
    cssClass?: string | string[];
    /**
     * If true, the action sheet will be dismissed when the backdrop is clicked. Defaults to `true`.
     */
    backdropDismiss: boolean;
    /**
     * Title for the action sheet.
     */
    header?: string;
    /**
     * Subtitle for the action sheet.
     */
    subHeader?: string;
    /**
     * If true, the action sheet will be translucent. Defaults to `false`.
     */
    translucent: boolean;
    /**
     * If true, the action sheet will animate. Defaults to `true`.
     */
    animated: boolean;
    /**
     * Emitted after the alert has loaded.
     */
    ionActionSheetDidLoad: EventEmitter<void>;
    /**
     * Emitted after the alert has unloaded.
     */
    ionActionSheetDidUnload: EventEmitter<void>;
    /**
     * Emitted after the alert has presented.
     */
    didPresent: EventEmitter<void>;
    /**
     * Emitted before the alert has presented.
     */
    willPresent: EventEmitter<void>;
    /**
     * Emitted before the alert has dismissed.
     */
    willDismiss: EventEmitter<OverlayEventDetail>;
    /**
     * Emitted after the alert has dismissed.
     */
    didDismiss: EventEmitter<OverlayEventDetail>;
    componentDidLoad(): void;
    componentDidUnload(): void;
    protected onBackdropTap(): void;
    protected dispatchCancelHandler(ev: CustomEvent): void;
    /**
     * Present the action sheet overlay after it has been created.
     */
    present(): Promise<void>;
    /**
     * Dismiss the action sheet overlay after it has been presented.
     */
    dismiss(data?: any, role?: string): Promise<boolean>;
    /**
     * Returns a promise that resolves when the action-sheet did dismiss.
     */
    onDidDismiss(): Promise<OverlayEventDetail>;
    /**
     * Returns a promise that resolves when the action-sheet will dismiss.
     *
     */
    onWillDismiss(): Promise<OverlayEventDetail>;
    private buttonClick;
    private callButtonHandler;
    private getButtons;
    hostData(): {
        style: {
            zIndex: number;
        };
        class: {
            'action-sheet-translucent': boolean;
        };
    };
    render(): JSX.Element[];
}
