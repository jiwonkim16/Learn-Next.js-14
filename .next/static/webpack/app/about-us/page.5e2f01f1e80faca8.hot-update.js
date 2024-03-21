"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/about-us/page",{

/***/ "(app-pages-browser)/./components/navigation.tsx":
/*!***********************************!*\
  !*** ./components/navigation.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Navigation() {\n    _s();\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/\",\n                            children: \"Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jiwonkim/Desktop/nomad/learn-nextjs14/components/navigation.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this),\n                        path === \"/\" ? \"\\uD83D\\uDD25\" : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jiwonkim/Desktop/nomad/learn-nextjs14/components/navigation.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/about-us\",\n                            children: \"About-us\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jiwonkim/Desktop/nomad/learn-nextjs14/components/navigation.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this),\n                        path === \"/about-us\" ? \"\\uD83D\\uDD25\" : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jiwonkim/Desktop/nomad/learn-nextjs14/components/navigation.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jiwonkim/Desktop/nomad/learn-nextjs14/components/navigation.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jiwonkim/Desktop/nomad/learn-nextjs14/components/navigation.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(Navigation, \"kx72sda92+XlSh1QiZvq/YVQxpY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation); // 네비게이션 바에서 각 페이지로 이동하려면 어떻게 해야할까?\n // a 태그를 써도 되지만 Next.js 프레임워크의 네비게이션 기능을 이용하기 위해\n // Link라는 컴포넌트를 사용할 것이다. Link는 next/link에서 import 해온다.\n // 그리고 Link는 반드시 href 속성을 가진다.\n // 만약 네비게이션 요소에 내가 현재 위치하고 있는 페이지면 이모지를 추가하고 싶다면 어떻게 해야할까? (about-us 페이지에 있다면 about-us 텍스트 옆에 이모지 추가)\n // Next.js는 url에 관한 정보를 알려주는 Hook이 있다.\n // 그 Hook은 usePathname 이라는 hook이다.\n // usePathnam은 유저가 현재 머물고 있는 url을 알려준다.\n // 그런데 usePathname 의 값을 콘솔에 찍으려고 하니 에러가 발생했는데 에러 내용인 즉,\n // usePathname은 오직 client Component에서만 동작하며, 이를 위해 use client 라는 문구를 파일 상단에 추가해야 한다고 한다.\n // 에러 코드에서 알려준 것처럼 use client 문구를 추가하니 정상적으로 동작한다. 이에 각 리스트에 해당하는 url에 내가 위치하고 있다면 이모지를 추가하게끔 코드를 작성했다.\n // 그런데 client component 가 무엇이고 왜 use client 를 추가하니 정상적으로 동작하는지에 대해 알기 위해서는\n // client component와 server component의 차이를 알아야 한다.\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDNkI7QUFDaUI7QUFDcEI7QUFFMUIsU0FBU0c7O0lBQ1AsTUFBTUMsT0FBT0gsNERBQVdBO0lBRXhCLHFCQUNFLDhEQUFDSTtrQkFDQyw0RUFBQ0M7OzhCQUNDLDhEQUFDQzs7c0NBQ0MsOERBQUNQLGlEQUFJQTs0QkFBQ1EsTUFBSztzQ0FBSTs7Ozs7O3dCQUNkSixTQUFTLE1BQU0saUJBQU87Ozs7Ozs7OEJBRXpCLDhEQUFDRzs7c0NBQ0MsOERBQUNQLGlEQUFJQTs0QkFBQ1EsTUFBSztzQ0FBWTs7Ozs7O3dCQUN0QkosU0FBUyxjQUFjLGlCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekM7R0FqQlNEOztRQUNNRix3REFBV0E7OztLQURqQkU7QUFtQlQsK0RBQWVBLFVBQVVBLEVBQUMsQ0FFMUIsbUNBQW1DO0NBQ25DLGdEQUFnRDtDQUNoRCxzREFBc0Q7Q0FDdEQsOEJBQThCO0NBRTlCLHFHQUFxRztDQUNyRyxzQ0FBc0M7Q0FDdEMsa0NBQWtDO0NBQ2xDLHVDQUF1QztDQUN2Qyx1REFBdUQ7Q0FDdkQsd0ZBQXdGO0NBQ3hGLHVHQUF1RztDQUV2RywwRUFBMEU7Q0FDMUUsa0RBQWtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi50c3g/ZWRkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xuICBjb25zdCBwYXRoID0gdXNlUGF0aG5hbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXY+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAge3BhdGggPT09IFwiL1wiID8gXCLwn5SlXCIgOiBcIlwifVxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dC11c1wiPkFib3V0LXVzPC9MaW5rPlxuICAgICAgICAgIHtwYXRoID09PSBcIi9hYm91dC11c1wiID8gXCLwn5SlXCIgOiBcIlwifVxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcblxuLy8g64Sk67mE6rKM7J207IWYIOuwlOyXkOyEnCDqsIEg7Y6Y7J207KeA66GcIOydtOuPme2VmOugpOuptCDslrTrlrvqsowg7ZW07JW87ZWg6rmMP1xuLy8gYSDtg5zqt7jrpbwg7I2o64+EIOuQmOyngOunjCBOZXh0LmpzIO2UhOugiOyehOybjO2BrOydmCDrhKTruYTqsozsnbTshZgg6riw64ql7J2EIOydtOyaqe2VmOq4sCDsnITtlbRcbi8vIExpbmvrnbzripQg7Lu07Y+s64SM7Yq466W8IOyCrOyaqe2VoCDqsoPsnbTri6QuIExpbmvripQgbmV4dC9saW5r7JeQ7IScIGltcG9ydCDtlbTsmKjri6QuXG4vLyDqt7jrpqzqs6AgTGlua+uKlCDrsJjrk5zsi5wgaHJlZiDsho3shLHsnYQg6rCA7KeE64ukLlxuXG4vLyDrp4zslb0g64Sk67mE6rKM7J207IWYIOyalOyGjOyXkCDrgrTqsIAg7ZiE7J6sIOychOy5mO2VmOqzoCDsnojripQg7Y6Y7J207KeA66m0IOydtOuqqOyngOulvCDstpTqsIDtlZjqs6Ag7Iu264uk66m0IOyWtOuWu+qyjCDtlbTslbztlaDquYw/IChhYm91dC11cyDtjpjsnbTsp4Dsl5Ag7J6I64uk66m0IGFib3V0LXVzIO2FjeyKpO2KuCDsmIbsl5Ag7J2066qo7KeAIOy2lOqwgClcbi8vIE5leHQuanPripQgdXJs7JeQIOq0gO2VnCDsoJXrs7Trpbwg7JWM66Ck7KO864qUIEhvb2vsnbQg7J6I64ukLlxuLy8g6re4IEhvb2vsnYAgdXNlUGF0aG5hbWUg7J20652864qUIGhvb2vsnbTri6QuXG4vLyB1c2VQYXRobmFt7J2AIOycoOyggOqwgCDtmITsnqwg66i466y86rOgIOyeiOuKlCB1cmzsnYQg7JWM66Ck7KSA64ukLlxuLy8g6re465+w642wIHVzZVBhdGhuYW1lIOydmCDqsJLsnYQg7L2Y7IaU7JeQIOywjeycvOugpOqzoCDtlZjri4gg7JeQ65+s6rCAIOuwnOyDne2WiOuKlOuNsCDsl5Drn6wg64K07Jqp7J24IOymiSxcbi8vIHVzZVBhdGhuYW1l7J2AIOyYpOyngSBjbGllbnQgQ29tcG9uZW507JeQ7ISc66eMIOuPmeyeke2VmOupsCwg7J2066W8IOychO2VtCB1c2UgY2xpZW50IOudvOuKlCDrrLjqtazrpbwg7YyM7J28IOyDgeuLqOyXkCDstpTqsIDtlbTslbwg7ZWc64uk6rOgIO2VnOuLpC5cbi8vIOyXkOufrCDsvZTrk5zsl5DshJwg7JWM66Ck7KSAIOqyg+yymOufvCB1c2UgY2xpZW50IOusuOq1rOulvCDstpTqsIDtlZjri4gg7KCV7IOB7KCB7Jy866GcIOuPmeyeke2VnOuLpC4g7J207JeQIOqwgSDrpqzsiqTtirjsl5Ag7ZW064u57ZWY64qUIHVybOyXkCDrgrTqsIAg7JyE7LmY7ZWY6rOgIOyeiOuLpOuptCDsnbTrqqjsp4Drpbwg7LaU6rCA7ZWY6rKM64GUIOy9lOuTnOulvCDsnpHshLHtlojri6QuXG5cbi8vIOq3uOufsOuNsCBjbGllbnQgY29tcG9uZW50IOqwgCDrrLTsl4fsnbTqs6Ag7JmcIHVzZSBjbGllbnQg66W8IOy2lOqwgO2VmOuLiCDsoJXsg4HsoIHsnLzroZwg64+Z7J6R7ZWY64qU7KeA7JeQIOuMgO2VtCDslYzquLAg7JyE7ZW07ISc64qUXG4vLyBjbGllbnQgY29tcG9uZW507JmAIHNlcnZlciBjb21wb25lbnTsnZgg7LCo7J2066W8IOyVjOyVhOyVvCDtlZzri6QuXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVBhdGhuYW1lIiwiUmVhY3QiLCJOYXZpZ2F0aW9uIiwicGF0aCIsIm5hdiIsInVsIiwibGkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/navigation.tsx\n"));

/***/ })

});