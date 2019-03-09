'use strict';

require('@ionic/core/dist/ionic/svg');
var loader = require('@ionic/core/loader');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var OverlayBaseController = /** @class */ (function () {
    function OverlayBaseController(ctrl) {
        this.ctrl = ctrl;
    }
    OverlayBaseController.prototype.create = function (opts) {
        return proxyMethod(this.ctrl, 'create', opts);
    };
    OverlayBaseController.prototype.dismiss = function (data, role, id) {
        return proxyMethod(this.ctrl, 'dismiss', data, role, id);
    };
    OverlayBaseController.prototype.getTop = function () {
        return proxyMethod(this.ctrl, 'getTop');
    };
    return OverlayBaseController;
}());
function proxyMethod(ctrlName, methodName) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var controller = ensureElementInBody(ctrlName);
    return controller.componentOnReady()
        .then(function () { return controller[methodName].apply(controller, args); });
}
function ensureElementInBody(elementName) {
    var element = document.querySelector(elementName);
    if (!element) {
        element = document.createElement(elementName);
        document.body.appendChild(element);
    }
    return element;
}

var CTRL = 'ion-action-sheet-controller';
var ActionSheetController = /** @class */ (function (_super) {
    __extends(ActionSheetController, _super);
    function ActionSheetController() {
        return _super.call(this, CTRL) || this;
    }
    return ActionSheetController;
}(OverlayBaseController));

var CTRL$1 = 'ion-alert-controller';
var AlertController = /** @class */ (function (_super) {
    __extends(AlertController, _super);
    function AlertController() {
        return _super.call(this, CTRL$1) || this;
    }
    return AlertController;
}(OverlayBaseController));

var LoadingController = /** @class */ (function (_super) {
    __extends(LoadingController, _super);
    function LoadingController() {
        return _super.call(this, 'ion-loading-controller') || this;
    }
    return LoadingController;
}(OverlayBaseController));

var CTRL$2 = 'ion-menu-controller';
var MenuController = /** @class */ (function () {
    function MenuController() {
    }
    /**
     * Programmatically open the Menu.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return returns a promise when the menu is fully opened
     */
    MenuController.prototype.open = function (menuId) {
        return proxyMethod(CTRL$2, 'open', menuId);
    };
    /**
     * Programmatically close the Menu. If no `menuId` is given as the first
     * argument then it'll close any menu which is open. If a `menuId`
     * is given then it'll close that exact menu.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return returns a promise when the menu is fully closed
     */
    MenuController.prototype.close = function (menuId) {
        return proxyMethod(CTRL$2, 'close', menuId);
    };
    /**
     * Toggle the menu. If it's closed, it will open, and if opened, it
     * will close.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return returns a promise when the menu has been toggled
     */
    MenuController.prototype.toggle = function (menuId) {
        return proxyMethod(CTRL$2, 'toggle', menuId);
    };
    /**
     * Used to enable or disable a menu. For example, there could be multiple
     * left menus, but only one of them should be able to be opened at the same
     * time. If there are multiple menus on the same side, then enabling one menu
     * will also automatically disable all the others that are on the same side.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return Returns the instance of the menu, which is useful for chaining.
     */
    MenuController.prototype.enable = function (shouldEnable, menuId) {
        return proxyMethod(CTRL$2, 'enable', shouldEnable, menuId);
    };
    /**
     * Used to enable or disable the ability to swipe open the menu.
     * @param shouldEnable  True if it should be swipe-able, false if not.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return Returns the instance of the menu, which is useful for chaining.
     */
    MenuController.prototype.swipeEnable = function (shouldEnable, menuId) {
        return proxyMethod(CTRL$2, 'swipeEnable', shouldEnable, menuId);
    };
    /**
     * @param [menuId] Optionally get the menu by its id, or side.
     * @return Returns true if the specified menu is currently open, otherwise false.
     * If the menuId is not specified, it returns true if ANY menu is currenly open.
     */
    MenuController.prototype.isOpen = function (menuId) {
        return proxyMethod(CTRL$2, 'isOpen', menuId);
    };
    /**
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return Returns true if the menu is currently enabled, otherwise false.
     */
    MenuController.prototype.isEnabled = function (menuId) {
        return proxyMethod(CTRL$2, 'isEnabled', menuId);
    };
    /**
     * Used to get a menu instance. If a `menuId` is not provided then it'll
     * return the first menu found. If a `menuId` is `left` or `right`, then
     * it'll return the enabled menu on that side. Otherwise, if a `menuId` is
     * provided, then it'll try to find the menu using the menu's `id`
     * property. If a menu is not found then it'll return `null`.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return Returns the instance of the menu if found, otherwise `null`.
     */
    MenuController.prototype.get = function (menuId) {
        return proxyMethod(CTRL$2, 'get', menuId);
    };
    /**
     * @return Returns the instance of the menu already opened, otherwise `null`.
     */
    MenuController.prototype.getOpen = function () {
        return proxyMethod(CTRL$2, 'getOpen');
    };
    /**
     * @return Returns an array of all menu instances.
     */
    MenuController.prototype.getMenus = function () {
        return proxyMethod(CTRL$2, 'getMenus');
    };
    return MenuController;
}());

var CTRL$3 = 'ion-modal-controller';
var ModalController = /** @class */ (function (_super) {
    __extends(ModalController, _super);
    function ModalController(delegate) {
        var _this = _super.call(this, CTRL$3) || this;
        _this.delegate = delegate;
        return _this;
    }
    ModalController.prototype.create = function (opts) {
        return _super.prototype.create.call(this, __assign({}, opts, { delegate: this.delegate }));
    };
    return ModalController;
}(OverlayBaseController));

var CTRL$4 = 'ion-modal-controller';
var PopoverController = /** @class */ (function (_super) {
    __extends(PopoverController, _super);
    function PopoverController(delegate) {
        var _this = _super.call(this, CTRL$4) || this;
        _this.delegate = delegate;
        return _this;
    }
    PopoverController.prototype.create = function (opts) {
        return _super.prototype.create.call(this, __assign({}, opts, { delegate: this.delegate }));
    };
    return PopoverController;
}(OverlayBaseController));

var ToastController = /** @class */ (function (_super) {
    __extends(ToastController, _super);
    function ToastController() {
        return _super.call(this, 'ion-toast-controller') || this;
    }
    return ToastController;
}(OverlayBaseController));

// Webpack import for ionicons
function appInitialize(config) {
    var win = window;
    var Ionic = (win.Ionic = win.Ionic || {});
    Ionic.config = config;
    loader.defineCustomElements(window);
}

// Handle creation of sync and async components
function createVueComponent(vue, component) {
    return Promise.resolve(typeof component === 'function' && component.cid === undefined
        ? component().then(function (cmp) { return vue.extend(isESModule(cmp) ? cmp.default : cmp); })
        : vue.extend(component));
}
var VueDelegate = /** @class */ (function () {
    function VueDelegate(vue, $root) {
        this.vue = vue;
        this.$root = $root;
    }
    // Attach the passed Vue component to DOM
    VueDelegate.prototype.attachViewToDom = function (parentElement, component, opts, classes) {
        // Handle HTML elements
        if (isElement(component)) {
            // Add any classes to the element
            addClasses(component, classes);
            // Append the element to DOM
            parentElement.appendChild(component);
            bindLifecycleEvents(component, parentElement);
            return Promise.resolve(component);
        }
        // Get the Vue controller
        return createVueComponent(this.vue, component).then(function (Component) {
            var componentInstance = new Component({
                propsData: opts
            });
            componentInstance.$mount();
            // Add any classes to the Vue component's root element
            addClasses(componentInstance.$el, classes);
            // Append the Vue component to DOM
            parentElement.appendChild(componentInstance.$el);
            return componentInstance.$el;
        });
    };
    // Remove the earlier created Vue component from DOM
    VueDelegate.prototype.removeViewFromDom = function (_parentElement, childElement) {
        // Destroy the Vue component instance
        if (childElement.__vue__) {
            childElement.__vue__.$destroy();
        }
        return Promise.resolve();
    };
    return VueDelegate;
}());
var LIFECYCLES = [
    "ionViewWillEnter" /* WillEnter */,
    "ionViewDidEnter" /* DidEnter */,
    "ionViewWillLeave" /* WillLeave */,
    "ionViewDidLeave" /* DidLeave */,
    "ionViewWillUnload" /* WillUnload */
];
function bindLifecycleEvents(instance, element) {
    LIFECYCLES.forEach(function (eventName) {
        element.addEventListener(eventName, function (ev) {
            if (typeof instance[eventName] === 'function') {
                instance[eventName](ev.detail);
            }
        });
    });
}
// Check Symbol support
var hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
// Check if object is an ES module
function isESModule(obj) {
    return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module');
}
// Check if value is an Element
function isElement(el) {
    return typeof Element !== 'undefined' && el instanceof Element;
}
// Add an array of classes to an element
function addClasses(element, classes) {
    if (classes === void 0) { classes = []; }
    for (var _i = 0, classes_1 = classes; _i < classes_1.length; _i++) {
        var cls = classes_1[_i];
        element.classList.add(cls);
    }
}

function createApi(Vue, $root) {
    var cache = {};
    var vueDelegate = new VueDelegate(Vue, $root);
    var api = {
        get actionSheetController() {
            if (!cache.actionSheetController) {
                cache.actionSheetController = new ActionSheetController();
            }
            return cache.actionSheetController;
        },
        get alertController() {
            if (!cache.alertController) {
                cache.alertController = new AlertController();
            }
            return cache.alertController;
        },
        get loadingController() {
            if (!cache.loadingController) {
                cache.loadingController = new LoadingController();
            }
            return cache.loadingController;
        },
        get menuController() {
            if (!cache.menuController) {
                cache.menuController = new MenuController();
            }
            return cache.menuController;
        },
        get modalController() {
            if (!cache.modalController) {
                cache.modalController = new ModalController(vueDelegate);
            }
            return cache.modalController;
        },
        get popoverController() {
            if (!cache.popoverController) {
                cache.popoverController = new PopoverController(vueDelegate);
            }
            return cache.popoverController;
        },
        get toastController() {
            if (!cache.toastController) {
                cache.toastController = new ToastController();
            }
            return cache.toastController;
        }
    };
    return api;
}
var Vue;
var install = function (_Vue, config) {
    if (Vue && _Vue === Vue) {
        if (process.env.NODE_ENV !== 'production') {
            console.error('[Ionic] already installed. Vue.use(Ionic) should be called only once.');
        }
        return;
    }
    Vue = _Vue;
    Vue.config.ignoredElements.push(/^ion-/);
    appInitialize(config);
    Object.defineProperty(Vue.prototype, '$ionic', {
        get: function () { return createApi(Vue, this.$root); }
    });
};

var index = {
    install: install,
    version: '__VERSION__'
};

module.exports = index;
//# sourceMappingURL=ionic-vue.common.js.map
