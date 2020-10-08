webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layouts_loginLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/loginLayout */ \"./src/components/layouts/loginLayout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions */ \"./src/actions/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\nvar _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nvar LoginPage = function LoginPage(_ref) {\n  _s();\n\n  var cleanState = _ref.cleanState,\n      login = _ref.login,\n      loggingIn = _ref.loggingIn,\n      loginError = _ref.loginError,\n      error = _ref.error,\n      pageProps = _ref.pageProps;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  var onSubmit = function onSubmit(formData) {\n    login(formData.email, formData.password);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    cleanState();\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx(\"title\", null, \"Admin | Login\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\"\n  })), __jsx(\"div\", {\n    className: \"content code\"\n  }, __jsx(\"h2\", null, \"Administrative login\"), loginError && __jsx(\"div\", {\n    className: \"panel code error-msg\"\n  }, __jsx(\"ul\", null, __jsx(\"li\", null, \" \", error))), Object.keys(errors).length != 0 && __jsx(\"div\", {\n    className: \"panel code error-msg\"\n  }, __jsx(\"ul\", null, errors.email && __jsx(\"li\", null, \" \", errors.email.message), errors.password && __jsx(\"li\", null, \" \", errors.password.message, \" \"))), __jsx(\"form\", {\n    className: \"pure-form pure-form-aligned\",\n    onSubmit: handleSubmit(onSubmit)\n  }, __jsx(\"fieldset\", null, __jsx(\"div\", {\n    className: \"pure-control-group \".concat(errors.email && 'error-input')\n  }, __jsx(\"label\", {\n    htmlFor: \"email\"\n  }, \"Email Address\"), __jsx(\"input\", {\n    type: \"email\",\n    ref: register({\n      required: \"Email is required\",\n      pattern: {\n        value: _constants__WEBPACK_IMPORTED_MODULE_9__[\"pattern\"].EMAIL,\n        message: _constants__WEBPACK_IMPORTED_MODULE_9__[\"errorMessage\"].INVALID_EMAIL\n      }\n    }),\n    name: \"email\",\n    id: \"email\",\n    placeholder: \"Email Address\"\n  })), __jsx(\"div\", {\n    className: \"pure-control-group \".concat(errors.password && 'error-input')\n  }, __jsx(\"label\", {\n    htmlFor: \"password\"\n  }, \"Password\"), __jsx(\"input\", {\n    className: \" \".concat(errors.password && 'error'),\n    type: \"password\",\n    ref: register({\n      required: \"Password is required\",\n      pattern: {\n        value: _constants__WEBPACK_IMPORTED_MODULE_9__[\"pattern\"].PASSWORD,\n        message: _constants__WEBPACK_IMPORTED_MODULE_9__[\"errorMessage\"].INVALID_PASSWORD\n      }\n    }),\n    name: \"password\",\n    id: \"password\",\n    placeholder: \"Password\"\n  })), __jsx(\"div\", {\n    className: \"pure-controls\"\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    className: \"pure-button button-secondary\"\n  }, __jsx(\"img\", {\n    src: \"/img/45.gif\",\n    style: {\n      width: \"14px\",\n      height: \"14px\",\n      marginRight: \"4px\"\n    }\n  }), \"Submit\"))))));\n};\n\n_s(LoginPage, \"gjCPXZIqi3zyDJihlEh7b1DV7HE=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"]];\n});\n\n_c = LoginPage;\nLoginPage.Layout = _components_layouts_loginLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    loginError: !state.authentication.loggedIn && state.authentication.error,\n    error: state.authentication.error,\n    loggingIn: state.authentication.loggingIn\n  };\n};\n\nvar mapDispatchToProps = {\n  login: _actions__WEBPACK_IMPORTED_MODULE_7__[\"authActions\"].login,\n  cleanState: _actions__WEBPACK_IMPORTED_MODULE_7__[\"authActions\"].cleanState\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(mapStateToProps, mapDispatchToProps)(LoginPage));\n\nvar _c;\n\n$RefreshReg$(_c, \"LoginPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiTG9naW5QYWdlIiwiY2xlYW5TdGF0ZSIsImxvZ2luIiwibG9nZ2luZ0luIiwibG9naW5FcnJvciIsImVycm9yIiwicGFnZVByb3BzIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwib25TdWJtaXQiLCJmb3JtRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VFZmZlY3QiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwibWVzc2FnZSIsInJlcXVpcmVkIiwicGF0dGVybiIsInZhbHVlIiwiRU1BSUwiLCJlcnJvck1lc3NhZ2UiLCJJTlZBTElEX0VNQUlMIiwiUEFTU1dPUkQiLCJJTlZBTElEX1BBU1NXT1JEIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsIkxheW91dCIsIkxvZ2luTGF5b3V0IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJhdXRoZW50aWNhdGlvbiIsImxvZ2dlZEluIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYXV0aEFjdGlvbnMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWlFO0FBQUE7O0FBQUEsTUFBL0RDLFVBQStELFFBQS9EQSxVQUErRDtBQUFBLE1BQW5EQyxLQUFtRCxRQUFuREEsS0FBbUQ7QUFBQSxNQUE1Q0MsU0FBNEMsUUFBNUNBLFNBQTRDO0FBQUEsTUFBbENDLFVBQWtDLFFBQWxDQSxVQUFrQztBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxTQUFlLFFBQWZBLFNBQWU7O0FBQUEsaUJBQ3hDQywrREFBTyxFQURpQztBQUFBLE1BQzFFQyxRQUQwRSxZQUMxRUEs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RUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNoQzlCLGNBQVUsRUFBRSxDQUFDOEIsS0FBSyxDQUFDQyxjQUFOLENBQXFCQyxRQUF0QixJQUFrQ0YsS0FBSyxDQUFDQyxjQUFOLENBQXFCOUIsS0FEbkM7QUFFaENBLFNBQUssRUFBRTZCLEtBQUssQ0FBQ0MsY0FBTixDQUFxQjlCLEtBRkk7QUFHaENGLGFBQVMsRUFBRStCLEtBQUssQ0FBQ0MsY0FBTixDQUFxQmhDO0FBSEEsR0FBTDtBQUFBLENBQTdCOztBQU1BLElBQU1rQyxrQkFBa0IsR0FBRztBQUN6Qm5DLE9BQUssRUFBRW9DLG9EQUFXLENBQUNwQyxLQURNO0FBRXpCRCxZQUFVLEVBQUVxQyxvREFBVyxDQUFDckM7QUFGQyxDQUEzQjtBQUtlc0MsMEhBQU8sQ0FBQ04sZUFBRCxFQUFrQkksa0JBQWxCLENBQVAsQ0FBNkNyQyxTQUE3QyxDQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IExvZ2luTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9sb2dpbkxheW91dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYXV0aEFjdGlvbnMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcGF0dGVybiwgZXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgTG9naW5QYWdlID0gKHtjbGVhblN0YXRlLCBsb2dpbiwgbG9nZ2luZ0luLGxvZ2luRXJyb3IgLGVycm9yLCBwYWdlUHJvcHN9KSA9PiB7XG4gIGNvbnN0IHtyZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnN9ID0gdXNlRm9ybSgpO1xuICBjb25zdCBvblN1Ym1pdCA9IGZvcm1EYXRhID0+IHtcbiAgICBsb2dpbihmb3JtRGF0YS5lbWFpbCwgZm9ybURhdGEucGFzc3dvcmQpO1xuXG4gIH1cblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjbGVhblN0YXRlKClcblxuICB9LFtdKVxuXG4gIFxuICByZXR1cm4gKFxuICAgIFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFkbWluIHwgTG9naW48L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICAgIFxuICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImNvbnRlbnQgY29kZVwiPlxuICAgICAgICAgICAgPGgyPkFkbWluaXN0cmF0aXZlIGxvZ2luPC9oMj5cbiAgICAgICAgICAgIHsgbG9naW5FcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIGNvZGUgZXJyb3ItbXNnXCI+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4ge2Vycm9yfTwvbGk+ICAgIFxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCAhPSAwICYmIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgY29kZSBlcnJvci1tc2dcIj5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiA8bGk+IHtlcnJvcnMuZW1haWwubWVzc2FnZX08L2xpPiB9XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgPGxpPiB7ZXJyb3JzLnBhc3N3b3JkLm1lc3NhZ2V9IDwvbGk+IH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJwdXJlLWZvcm0gcHVyZS1mb3JtLWFsaWduZWRcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwdXJlLWNvbnRyb2wtZ3JvdXAgJHtlcnJvcnMuZW1haWwgJiYgJ2Vycm9yLWlucHV0J31gfSA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiByZWY9e3JlZ2lzdGVyKHtyZXF1aXJlZDpcIkVtYWlsIGlzIHJlcXVpcmVkXCIsIFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOntcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpwYXR0ZXJuLkVNQUlMLFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ZXJyb3JNZXNzYWdlLklOVkFMSURfRU1BSUxcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuIGNsYXNzTmFtZT1cInB1cmUtZm9ybS1tZXNzYWdlLWlubGluZVwiPlRoaXMgaXMgYSByZXF1aXJlZCBmaWVsZC48L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHB1cmUtY29udHJvbC1ncm91cCAke2Vycm9ycy5wYXNzd29yZCAmJiAnZXJyb3ItaW5wdXQnfWB9PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtgICR7ZXJyb3JzLnBhc3N3b3JkICYmICdlcnJvcid9YH0gXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIHJlZj17cmVnaXN0ZXIoe3JlcXVpcmVkOlwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIiwgXG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm46e1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOnBhdHRlcm4uUEFTU1dPUkQsXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTplcnJvck1lc3NhZ2UuSU5WQUxJRF9QQVNTV09SRFxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pfSAgXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInB1cmUtYnV0dG9uIGJ1dHRvbi1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvNDUuZ2lmXCIgc3R5bGU9e3t3aWR0aDpcIjE0cHhcIiwgaGVpZ2h0OlwiMTRweFwiLCBtYXJnaW5SaWdodDpcIjRweFwifX0vPlxuICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgXG4gICAgICAgIFxuICAgICAgXG5cbiAgICA8Lz5cbiAgKVxufVxuXG5cblxuTG9naW5QYWdlLkxheW91dCA9IExvZ2luTGF5b3V0XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxvZ2luRXJyb3I6ICFzdGF0ZS5hdXRoZW50aWNhdGlvbi5sb2dnZWRJbiAmJiBzdGF0ZS5hdXRoZW50aWNhdGlvbi5lcnJvcixcbiAgZXJyb3I6IHN0YXRlLmF1dGhlbnRpY2F0aW9uLmVycm9yLFxuICBsb2dnaW5nSW46IHN0YXRlLmF1dGhlbnRpY2F0aW9uLmxvZ2dpbmdJbixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvZ2luOiBhdXRoQWN0aW9ucy5sb2dpbixcbiAgY2xlYW5TdGF0ZTogYXV0aEFjdGlvbnMuY2xlYW5TdGF0ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW5QYWdlKSAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})