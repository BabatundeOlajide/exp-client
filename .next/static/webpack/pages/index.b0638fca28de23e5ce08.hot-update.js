webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layouts_loginLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/loginLayout */ \"./src/components/layouts/loginLayout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions */ \"./src/actions/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\nvar _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nvar LoginPage = function LoginPage(_ref) {\n  _s();\n\n  var cleanState = _ref.cleanState,\n      login = _ref.login,\n      loginError = _ref.loginError,\n      error = _ref.error,\n      pageProps = _ref.pageProps;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors;\n\n  var onSubmit = function onSubmit(formData) {\n    login(formData.email, formData.password);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    cleanState();\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx(\"title\", null, \"Admin | Login\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\"\n  })), __jsx(\"div\", {\n    className: \"content code\"\n  }, __jsx(\"h2\", null, \"Administrative login\"), loginError && __jsx(\"div\", {\n    className: \"panel code error-msg\"\n  }, __jsx(\"ul\", null, __jsx(\"li\", null, \" \", error))), Object.keys(errors).length != 0 && __jsx(\"div\", {\n    className: \"panel code error-msg\"\n  }, __jsx(\"ul\", null, errors.email && __jsx(\"li\", null, \" \", errors.email.message), errors.password && __jsx(\"li\", null, \" \", errors.password.message, \" \"))), __jsx(\"form\", {\n    className: \"pure-form pure-form-aligned\",\n    onSubmit: handleSubmit(onSubmit)\n  }, __jsx(\"fieldset\", null, __jsx(\"div\", {\n    className: \"pure-control-group \".concat(errors.email && 'error-input')\n  }, __jsx(\"label\", {\n    htmlFor: \"email\"\n  }, \"Email Address\"), __jsx(\"input\", {\n    type: \"email\",\n    ref: register({\n      required: \"Email is required\",\n      pattern: {\n        value: _constants__WEBPACK_IMPORTED_MODULE_9__[\"pattern\"].EMAIL,\n        message: _constants__WEBPACK_IMPORTED_MODULE_9__[\"errorMessage\"].INVALID_EMAIL\n      }\n    }),\n    name: \"email\",\n    id: \"email\",\n    placeholder: \"Email Address\"\n  })), __jsx(\"div\", {\n    className: \"pure-control-group \".concat(errors.password && 'error-input')\n  }, __jsx(\"label\", {\n    htmlFor: \"password\"\n  }, \"Password\"), __jsx(\"input\", {\n    className: \" \".concat(errors.password && 'error'),\n    type: \"password\",\n    ref: register({\n      required: \"Password is required\",\n      pattern: {\n        value: _constants__WEBPACK_IMPORTED_MODULE_9__[\"pattern\"].PASSWORD,\n        message: _constants__WEBPACK_IMPORTED_MODULE_9__[\"errorMessage\"].INVALID_PASSWORD\n      }\n    }),\n    name: \"password\",\n    id: \"password\",\n    placeholder: \"Password\"\n  })), __jsx(\"div\", {\n    className: \"pure-controls\"\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    className: \"pure-button button-secondary\"\n  }, __jsx(\"img\", {\n    src: \"\"\n  }), \"Submit\"))))));\n};\n\n_s(LoginPage, \"gjCPXZIqi3zyDJihlEh7b1DV7HE=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"]];\n});\n\n_c = LoginPage;\nLoginPage.Layout = _components_layouts_loginLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    loginError: !state.authentication.loggedIn && state.authentication.error,\n    error: state.authentication.error\n  };\n};\n\nvar mapDispatchToProps = {\n  login: _actions__WEBPACK_IMPORTED_MODULE_7__[\"authActions\"].login,\n  cleanState: _actions__WEBPACK_IMPORTED_MODULE_7__[\"authActions\"].cleanState\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(mapStateToProps, mapDispatchToProps)(LoginPage));\n\nvar _c;\n\n$RefreshReg$(_c, \"LoginPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiTG9naW5QYWdlIiwiY2xlYW5TdGF0ZSIsImxvZ2luIiwibG9naW5FcnJvciIsImVycm9yIiwicGFnZVByb3BzIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwib25TdWJtaXQiLCJmb3JtRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VFZmZlY3QiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwibWVzc2FnZSIsInJlcXVpcmVkIiwicGF0dGVybiIsInZhbHVlIiwiRU1BSUwiLCJlcnJvck1lc3NhZ2UiLCJJTlZBTElEX0VNQUlMIiwiUEFTU1dPUkQiLCJJTlZBTElEX1BBU1NXT1JEIiwiTGF5b3V0IiwiTG9naW5MYXlvdXQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImF1dGhlbnRpY2F0aW9uIiwibG9nZ2VkSW4iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJhdXRoQWN0aW9ucyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBdUQ7QUFBQTs7QUFBQSxNQUFyREMsVUFBcUQsUUFBckRBLFVBQXFEO0FBQUEsTUFBekNDLEtBQXlDLFFBQXpDQSxLQUF5QztBQUFBLE1BQWxDQyxVQUFrQyxRQUFsQ0EsVUFBa0M7QUFBQSxNQUF0QkMsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEsTUFBZkMsU0FBZSxRQUFmQSxTQUFlOztBQUFBLGlCQUM5QkMsK0RBQU8sRUFEdUI7QUFBQSxNQUNoRUMsUUFEZ0UsWUFDaEVBLFFBRGdFO0FBQUEsTUFDdERDLFlBRHNELFlBQ3REQSxZQURzRDtBQUFBLE1BQ3hDQyxNQUR3QyxZQUN4Q0EsTUFEd0M7O0FBRXZFLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLFFBQVEsRUFBSTtBQUMzQlQsU0FBSyxDQUFDUyxRQUFRLENBQUNDLEtBQVYsRUFBaUJELFFBQVEsQ0FBQ0UsUUFBMUIsQ0FBTDtBQUVELEdBSEQ7O0FBS0FDLHlEQUFTLENBQUMsWUFBSTtBQUNaYixjQUFVO0FBRVgsR0FIUSxFQUdQLEVBSE8sQ0FBVDtBQU1BLFNBRUUsbUVBQ0UsTUFBQyxnREFBRCxRQUNFLHFDQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUM7QUFBdEIsSUFGRixDQURGLEVBTU07QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FDRSx5Q0FERixFQUVJRSxVQUFVLElBQUk7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNWLGtCQUNFLHVCQUFNQyxLQUFOLENBREYsQ0FEVSxDQUZsQixFQVVJVyxNQUFNLENBQUNDLElBQVAsQ0FBWVAsTUFBWixFQUFvQlEsTUFBcEIsSUFBOEIsQ0FBOUIsSUFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0Usa0JBQ0dSLE1BQU0sQ0FBQ0csS0FBUCxJQUFnQix1QkFBTUgsTUFBTSxDQUFDRyxLQUFQLENBQWFNLE9BQW5CLENBRG5CLEVBRUdULE1BQU0sQ0FBQ0ksUUFBUCxJQUFtQix1QkFBTUosTUFBTSxDQUFDSSxRQUFQLENBQWdCSyxPQUF0QixNQUZ0QixDQURGLENBWE4sRUFxQkU7QUFBTSxhQUFTLEVBQUMsNkJBQWhCO0FBQThDLFlBQVEsRUFBRVYsWUFBWSxDQUFDRSxRQUFEO0FBQXBFLEtBQ0Esd0JBR0k7QUFBSyxhQUFTLCtCQUF3QkQsTUFBTSxDQUFDRyxLQUFQLElBQWdCLGFBQXhDO0FBQWQsS0FDSTtBQUFPLFdBQU8sRUFBQztBQUFmLHFCQURKLEVBRUk7QUFDQSxRQUFJLEVBQUMsT0FETDtBQUNhLE9BQUcsRUFBRUwsUUFBUSxDQUFDO0FBQUNZLGNBQVEsRUFBQyxtQkFBVjtBQUMzQkMsYUFBTyxFQUFDO0FBQ05DLGFBQUssRUFBQ0Qsa0RBQU8sQ0FBQ0UsS0FEUjtBQUVOSixlQUFPLEVBQUNLLHVEQUFZLENBQUNDO0FBRmY7QUFEbUIsS0FBRCxDQUQxQjtBQVFBLFFBQUksRUFBQyxPQVJMO0FBUWEsTUFBRSxFQUFDLE9BUmhCO0FBUXdCLGVBQVcsRUFBQztBQVJwQyxJQUZKLENBSEosRUFpQkk7QUFBSyxhQUFTLCtCQUF3QmYsTUFBTSxDQUFDSSxRQUFQLElBQW1CLGFBQTNDO0FBQWQsS0FDSTtBQUFPLFdBQU8sRUFBQztBQUFmLGdCQURKLEVBRUk7QUFBTyxhQUFTLGFBQU1KLE1BQU0sQ0FBQ0ksUUFBUCxJQUFtQixPQUF6QixDQUFoQjtBQUNBLFFBQUksRUFBQyxVQURMO0FBQ2dCLE9BQUcsRUFBRU4sUUFBUSxDQUFDO0FBQUNZLGNBQVEsRUFBQyxzQkFBVjtBQUM5QkMsYUFBTyxFQUFDO0FBQ05DLGFBQUssRUFBQ0Qsa0RBQU8sQ0FBQ0ssUUFEUjtBQUVOUCxlQUFPLEVBQUNLLHVEQUFZLENBQUNHO0FBRmY7QUFEc0IsS0FBRCxDQUQ3QjtBQVFBLFFBQUksRUFBQyxVQVJMO0FBUWdCLE1BQUUsRUFBQyxVQVJuQjtBQVE4QixlQUFXLEVBQUM7QUFSMUMsSUFGSixDQWpCSixFQThCSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBRUk7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUM7QUFBaEMsS0FDRTtBQUFLLE9BQUcsRUFBQztBQUFULElBREYsV0FGSixDQTlCSixDQURBLENBckJGLENBTk4sQ0FGRjtBQThFRCxDQTNGRDs7R0FBTTFCLFM7VUFDcUNNLHVEOzs7S0FEckNOLFM7QUErRk5BLFNBQVMsQ0FBQzJCLE1BQVYsR0FBbUJDLHVFQUFuQjs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ2hDM0IsY0FBVSxFQUFFLENBQUMyQixLQUFLLENBQUNDLGNBQU4sQ0FBcUJDLFFBQXRCLElBQWtDRixLQUFLLENBQUNDLGNBQU4sQ0FBcUIzQixLQURuQztBQUVoQ0EsU0FBSyxFQUFFMEIsS0FBSyxDQUFDQyxjQUFOLENBQXFCM0I7QUFGSSxHQUFMO0FBQUEsQ0FBN0I7O0FBS0EsSUFBTTZCLGtCQUFrQixHQUFHO0FBQ3pCL0IsT0FBSyxFQUFFZ0Msb0RBQVcsQ0FBQ2hDLEtBRE07QUFFekJELFlBQVUsRUFBRWlDLG9EQUFXLENBQUNqQztBQUZDLENBQTNCO0FBS2VrQywwSEFBTyxDQUFDTixlQUFELEVBQWtCSSxrQkFBbEIsQ0FBUCxDQUE2Q2pDLFNBQTdDLENBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgTG9naW5MYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL2xvZ2luTGF5b3V0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhdXRoQWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBwYXR0ZXJuLCBlcnJvck1lc3NhZ2UgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5jb25zdCBMb2dpblBhZ2UgPSAoe2NsZWFuU3RhdGUsIGxvZ2luLCBsb2dpbkVycm9yICxlcnJvciwgcGFnZVByb3BzfSkgPT4ge1xuICBjb25zdCB7cmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzfSA9IHVzZUZvcm0oKTtcbiAgY29uc3Qgb25TdWJtaXQgPSBmb3JtRGF0YSA9PiB7XG4gICAgbG9naW4oZm9ybURhdGEuZW1haWwsIGZvcm1EYXRhLnBhc3N3b3JkKTtcblxuICB9XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY2xlYW5TdGF0ZSgpXG5cbiAgfSxbXSlcblxuICBcbiAgcmV0dXJuIChcbiAgICBcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BZG1pbiB8IExvZ2luPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgICBcbiAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJjb250ZW50IGNvZGVcIj5cbiAgICAgICAgICAgIDxoMj5BZG1pbmlzdHJhdGl2ZSBsb2dpbjwvaDI+XG4gICAgICAgICAgICB7IGxvZ2luRXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBjb2RlIGVycm9yLW1zZ1wiPlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+IHtlcnJvcn08L2xpPiAgICBcbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggIT0gMCAmJiBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIGNvZGUgZXJyb3ItbXNnXCI+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgPGxpPiB7ZXJyb3JzLmVtYWlsLm1lc3NhZ2V9PC9saT4gfVxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmIDxsaT4ge2Vycm9ycy5wYXNzd29yZC5tZXNzYWdlfSA8L2xpPiB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicHVyZS1mb3JtIHB1cmUtZm9ybS1hbGlnbmVkXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHVyZS1jb250cm9sLWdyb3VwICR7ZXJyb3JzLmVtYWlsICYmICdlcnJvci1pbnB1dCd9YH0gPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgcmVmPXtyZWdpc3Rlcih7cmVxdWlyZWQ6XCJFbWFpbCBpcyByZXF1aXJlZFwiLCBcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybjp7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6cGF0dGVybi5FTUFJTCxcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOmVycm9yTWVzc2FnZS5JTlZBTElEX0VNQUlMXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiBjbGFzc05hbWU9XCJwdXJlLWZvcm0tbWVzc2FnZS1pbmxpbmVcIj5UaGlzIGlzIGEgcmVxdWlyZWQgZmllbGQuPC9zcGFuPiovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwdXJlLWNvbnRyb2wtZ3JvdXAgJHtlcnJvcnMucGFzc3dvcmQgJiYgJ2Vycm9yLWlucHV0J31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17YCAke2Vycm9ycy5wYXNzd29yZCAmJiAnZXJyb3InfWB9IFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiByZWY9e3JlZ2lzdGVyKHtyZXF1aXJlZDpcIlBhc3N3b3JkIGlzIHJlcXVpcmVkXCIsIFxuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuOntcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpwYXR0ZXJuLlBBU1NXT1JELFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ZXJyb3JNZXNzYWdlLklOVkFMSURfUEFTU1dPUkRcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KX0gIFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJwdXJlLWJ1dHRvbiBidXR0b24tc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICBcbiAgICAgICAgXG4gICAgICBcblxuICAgIDwvPlxuICApXG59XG5cblxuXG5Mb2dpblBhZ2UuTGF5b3V0ID0gTG9naW5MYXlvdXRcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbG9naW5FcnJvcjogIXN0YXRlLmF1dGhlbnRpY2F0aW9uLmxvZ2dlZEluICYmIHN0YXRlLmF1dGhlbnRpY2F0aW9uLmVycm9yLFxuICBlcnJvcjogc3RhdGUuYXV0aGVudGljYXRpb24uZXJyb3Jcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGxvZ2luOiBhdXRoQWN0aW9ucy5sb2dpbixcbiAgY2xlYW5TdGF0ZTogYXV0aEFjdGlvbnMuY2xlYW5TdGF0ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW5QYWdlKSAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})