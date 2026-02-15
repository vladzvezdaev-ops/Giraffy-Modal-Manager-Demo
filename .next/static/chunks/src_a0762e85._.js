(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/button/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/components/ui/button/Button.tsx'\n\nExpected ident");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/src/components/ui/dialog/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogTitle",
    ()=>DialogTitle,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Dialog(param) {
    let { open, onOpenChange, children } = param;
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog/index.tsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogOverlay(props) {
    const { children, ...rest } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "giraffy-dialog-overlay",
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog/index.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c1 = DialogOverlay;
function DialogContent(param) {
    let { children, onPointerDownOutside, onEscapeKeyDown, ...rest } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "giraffy-dialog-content",
        onMouseDown: (e)=>e.stopPropagation(),
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog/index.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c2 = DialogContent;
function DialogHeader(props) {
    const { children, ...rest } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "giraffy-dialog-header",
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog/index.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c3 = DialogHeader;
function DialogTitle(props) {
    const { children, ...rest } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: "giraffy-dialog-title",
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog/index.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DialogTitle;
function DialogDescription(props) {
    const { children, ...rest } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "giraffy-dialog-description",
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog/index.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c5 = DialogDescription;
const __TURBOPACK__default__export__ = Dialog;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogOverlay");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogTitle");
__turbopack_context__.k.register(_c5, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/UseModalManager/styles/StatusModal.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttonWrapper": "StatusModal-module-scss-module__uGfTQW__buttonWrapper",
  "description": "StatusModal-module-scss-module__uGfTQW__description",
  "modal": "StatusModal-module-scss-module__uGfTQW__modal",
  "overlay": "StatusModal-module-scss-module__uGfTQW__overlay",
  "timer": "StatusModal-module-scss-module__uGfTQW__timer",
  "title": "StatusModal-module-scss-module__uGfTQW__title",
});
}),
"[project]/src/components/common/UseModalManager/StatusModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusModal",
    ()=>StatusModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$styles$2f$StatusModal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/common/UseModalManager/styles/StatusModal.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const StatusModal = (param)=>{
    let { isOpen, onClose, title, description, buttonText } = param;
    _s();
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatusModal.useEffect": ()=>{
            if (!isOpen) {
                setTimeLeft(5);
                return;
            }
            const timer = setInterval({
                "StatusModal.useEffect.timer": ()=>{
                    setTimeLeft({
                        "StatusModal.useEffect.timer": (prev)=>{
                            if (prev <= 1) {
                                clearInterval(timer);
                                onClose();
                                return 0;
                            }
                            return prev - 1;
                        }
                    }["StatusModal.useEffect.timer"]);
                }
            }["StatusModal.useEffect.timer"], 1000);
            return ({
                "StatusModal.useEffect": ()=>clearInterval(timer)
            })["StatusModal.useEffect"];
        }
    }["StatusModal.useEffect"], [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogOverlay"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$styles$2f$StatusModal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay
            }, void 0, false, {
                fileName: "[project]/src/components/common/UseModalManager/StatusModal.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$styles$2f$StatusModal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                showCloseButton: false,
                onPointerDownOutside: (e)=>e.preventDefault(),
                onEscapeKeyDown: (e)=>e.preventDefault(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$styles$2f$StatusModal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/UseModalManager/StatusModal.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$styles$2f$StatusModal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/UseModalManager/StatusModal.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/UseModalManager/StatusModal.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$styles$2f$StatusModal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttonWrapper,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                text: buttonText,
                                variant: "primary",
                                onClick: onClose
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/UseModalManager/StatusModal.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$styles$2f$StatusModal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timer,
                                children: [
                                    "(Вікно закриється за ",
                                    timeLeft,
                                    " секунд)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/common/UseModalManager/StatusModal.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/common/UseModalManager/StatusModal.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/UseModalManager/StatusModal.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/UseModalManager/StatusModal.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StatusModal, "2aEBwAxPB+2JLmmVtsqK3zUUhMM=");
_c = StatusModal;
var _c;
__turbopack_context__.k.register(_c, "StatusModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/UseModalManager/hooks/useModalManager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useModalManager",
    ()=>useModalManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useModalManager = ()=>{
    _s();
    const [activeModal, setActiveModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const openModal = (type)=>setActiveModal(type);
    const closeModal = ()=>setActiveModal(null);
    return {
        activeModal,
        openModal,
        closeModal,
        isOpen: (type)=>activeModal === type
    };
};
_s(useModalManager, "kAcpyZCE6YA2McoeUdamFLX5os8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/UseModalManager/modals/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MODAL_CONTENTS",
    ()=>MODAL_CONTENTS
]);
const MODAL_CONTENTS = {
    welcome: {
        title: 'Вітаємо в Giraffy!',
        description: 'Реєстрацію завершено успішно. Досліджуй, знаходь і ділись речами легко!',
        buttonText: 'Почати користуватися'
    },
    error: {
        title: 'Щось пішло не так :(',
        description: 'Перевір, чи всі поля заповнено правильно. Якщо помилка повторюється - спробуй пізніше.',
        buttonText: 'Спробувати ще раз'
    },
    sendmessage: {
        title: 'Посилання надіслано',
        description: 'Перевірте пошту - там посилання для скидання пароля',
        buttonText: 'OK'
    },
    successreview: {
        title: 'Відгук опубліковано',
        description: 'Ваш відгук успішно збережено. Інші користувачі вже можуть його прочитати',
        buttonText: 'Повернутися'
    },
    complaint: {
        title: 'Скаргу надіслано',
        description: 'Дякуємо! Ми розглянемо звернення та вживемо заходів, якщо буде потрібно',
        buttonText: 'Зрозуміло'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/common/UseModalManager/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$StatusModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/UseModalManager/StatusModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$hooks$2f$useModalManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/UseModalManager/hooks/useModalManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$modals$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/UseModalManager/modals/constants.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/home/HomePage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/common/UseModalManager/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$hooks$2f$useModalManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/UseModalManager/hooks/useModalManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$StatusModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/UseModalManager/StatusModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$modals$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/UseModalManager/modals/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function HomePage() {
    _s();
    const { activeModal, openModal, closeModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$hooks$2f$useModalManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalManager"])();
    const current = activeModal ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$modals$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MODAL_CONTENTS"][activeModal] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            gap: 20,
            padding: 50,
            alignItems: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Giraffy Modal Manager Demo"
            }, void 0, false, {
                fileName: "[project]/src/views/home/HomePage.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>openModal("welcome"),
                        children: "Тест: Вітаємо"
                    }, void 0, false, {
                        fileName: "[project]/src/views/home/HomePage.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>openModal("error"),
                        children: "Тест: Помилка"
                    }, void 0, false, {
                        fileName: "[project]/src/views/home/HomePage.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>openModal("sendmessage"),
                        children: "Тест: Надіслати повідомлення"
                    }, void 0, false, {
                        fileName: "[project]/src/views/home/HomePage.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>openModal("successreview"),
                        children: "Тест: Відгук"
                    }, void 0, false, {
                        fileName: "[project]/src/views/home/HomePage.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>openModal("complaint"),
                        children: "Тест: Скарга"
                    }, void 0, false, {
                        fileName: "[project]/src/views/home/HomePage.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/home/HomePage.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            current && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$StatusModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusModal"], {
                isOpen: !!activeModal,
                onClose: closeModal,
                title: current.title,
                description: current.description,
                buttonText: current.buttonText
            }, void 0, false, {
                fileName: "[project]/src/views/home/HomePage.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/home/HomePage.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(HomePage, "NSmCc16CeGX6A2KFce26I7mfaR4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$UseModalManager$2f$hooks$2f$useModalManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModalManager"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a0762e85._.js.map