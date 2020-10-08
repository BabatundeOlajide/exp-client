webpackHotUpdate_N_E("pages/home",{

/***/ "./src/components/reportDetailModal.js":
/*!*********************************************!*\
  !*** ./src/components/reportDetailModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ \"./src/actions/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/functions */ \"./src/utils/functions.js\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! papaparse */ \"./node_modules/papaparse/papaparse.min.js\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_7__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar ReportDetailModal = function ReportDetailModal(_ref) {\n  var children = _ref.children,\n      pageProps = _ref.pageProps,\n      selectedReport = _ref.selectedReport,\n      selectedUser = _ref.selectedUser;\n  //console.log(selectedReport)\n  return __jsx(\"div\", {\n    id: \"reportDetailModal\",\n    className: \"modal\"\n  }, __jsx(\"div\", {\n    className: \"modal-content\"\n  }, __jsx(\"span\", {\n    className: \"close\",\n    \"data-type\": \"hide-modal\",\n    \"data-target\": \"reportDetailModal\"\n  }, \"\\xD7\"), selectedUser && __jsx(\"h3\", null, \"Report detail for \", __jsx(\"span\", {\n    className: \"blue\"\n  }, selectedUser.firstName + \" \" + selectedUser.lastName)), __jsx(\"hr\", {\n    className: \"divider\"\n  }), __jsx(\"div\", {\n    className: \"card-container\"\n  }, selectedReport && selectedReport.reports.map(function (report, i) {\n    return __jsx(\"div\", {\n      key: i,\n      className: \"card\"\n    }, __jsx(\"p\", null, \"Week \", __jsx(\"br\", null), \" \", __jsx(\"strong\", null, report.Week_Number), \" \"), __jsx(\"p\", null, \"Uploaded On \", __jsx(\"br\", null), \" \", __jsx(\"strong\", null, report.createdAt), \" \"), __jsx(\"p\", null, \"Dispatched Packages \", __jsx(\"br\", null), \" \", __jsx(\"strong\", null, report.Dispatched_Packages), \" \"), __jsx(\"p\", null, \"Delivered Packages \", __jsx(\"br\", null), \" \", __jsx(\"strong\", null, report.Delivered_Packages), \" \"), __jsx(\"p\", null, \"Delivery Success (%) \", __jsx(\"br\", null), \" \", __jsx(\"strong\", null, report.Delivery_Success_P), \" \"));\n  }), selectedselectedReport.reports.length == 0 && __jsx(\"p\", null, \"No report found\"))));\n};\n\n_c = ReportDetailModal;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    selectedUser: state.users.selectedUser,\n    selectedReport: state.users.selectedReport\n  };\n};\n\nvar mapDispatchToProps = {\n  uploadReport: _actions__WEBPACK_IMPORTED_MODULE_2__[\"userActions\"].uploadReport\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, mapDispatchToProps)(ReportDetailModal));\n\nvar _c;\n\n$RefreshReg$(_c, \"ReportDetailModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcmVwb3J0RGV0YWlsTW9kYWwuanM/MDE4NiJdLCJuYW1lcyI6WyJSZXBvcnREZXRhaWxNb2RhbCIsImNoaWxkcmVuIiwicGFnZVByb3BzIiwic2VsZWN0ZWRSZXBvcnQiLCJzZWxlY3RlZFVzZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInJlcG9ydHMiLCJtYXAiLCJyZXBvcnQiLCJpIiwiV2Vla19OdW1iZXIiLCJjcmVhdGVkQXQiLCJEaXNwYXRjaGVkX1BhY2thZ2VzIiwiRGVsaXZlcmVkX1BhY2thZ2VzIiwiRGVsaXZlcnlfU3VjY2Vzc19QIiwic2VsZWN0ZWRzZWxlY3RlZFJlcG9ydCIsImxlbmd0aCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlcnMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJ1cGxvYWRSZXBvcnQiLCJ1c2VyQWN0aW9ucyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQXVEO0FBQUEsTUFBckRDLFFBQXFELFFBQXJEQSxRQUFxRDtBQUFBLE1BQTNDQyxTQUEyQyxRQUEzQ0EsU0FBMkM7QUFBQSxNQUFqQ0MsY0FBaUMsUUFBakNBLGNBQWlDO0FBQUEsTUFBbEJDLFlBQWtCLFFBQWxCQSxZQUFrQjtBQUU3RTtBQUVBLFNBQU87QUFBSyxNQUFFLEVBQUMsbUJBQVI7QUFBNEIsYUFBUyxFQUFDO0FBQXRDLEtBRUg7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNJO0FBQU0sYUFBUyxFQUFDLE9BQWhCO0FBQXdCLGlCQUFVLFlBQWxDO0FBQStDLG1CQUFZO0FBQTNELFlBREosRUFFS0EsWUFBWSxJQUFJLHdDQUFzQjtBQUFNLGFBQVMsRUFBQztBQUFoQixLQUF3QkEsWUFBWSxDQUFDQyxTQUFiLEdBQXlCLEdBQXpCLEdBQStCRCxZQUFZLENBQUNFLFFBQXBFLENBQXRCLENBRnJCLEVBR0k7QUFBSSxhQUFTLEVBQUM7QUFBZCxJQUhKLEVBSUk7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNLSCxjQUFjLElBQUlBLGNBQWMsQ0FBQ0ksT0FBZixDQUF1QkMsR0FBdkIsQ0FBMkIsVUFBQ0MsTUFBRCxFQUFTQyxDQUFUO0FBQUEsV0FDMUM7QUFBSyxTQUFHLEVBQUVBLENBQVY7QUFBYSxlQUFTLEVBQUM7QUFBdkIsT0FDSSwwQkFBUSxpQkFBUixPQUFjLHNCQUFTRCxNQUFNLENBQUNFLFdBQWhCLENBQWQsTUFESixFQUVJLGlDQUFlLGlCQUFmLE9BQXFCLHNCQUFTRixNQUFNLENBQUNHLFNBQWhCLENBQXJCLE1BRkosRUFHSSx5Q0FBdUIsaUJBQXZCLE9BQTZCLHNCQUFTSCxNQUFNLENBQUNJLG1CQUFoQixDQUE3QixNQUhKLEVBSUksd0NBQXNCLGlCQUF0QixPQUE0QixzQkFBU0osTUFBTSxDQUFDSyxrQkFBaEIsQ0FBNUIsTUFKSixFQUtJLDBDQUF3QixpQkFBeEIsT0FBOEIsc0JBQVNMLE1BQU0sQ0FBQ00sa0JBQWhCLENBQTlCLE1BTEosQ0FEMEM7QUFBQSxHQUEzQixDQUR2QixFQVlLQyxzQkFBc0IsQ0FBQ1QsT0FBdkIsQ0FBK0JVLE1BQS9CLElBQXlDLENBQXpDLElBQThDLG1DQVpuRCxDQUpKLENBRkcsQ0FBUDtBQXdCSCxDQTVCRDs7S0FBTWpCLGlCOztBQStCTixJQUFNa0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUM5QmYsZ0JBQVksRUFBRWUsS0FBSyxDQUFDQyxLQUFOLENBQVloQixZQURJO0FBRTlCRCxrQkFBYyxFQUFFZ0IsS0FBSyxDQUFDQyxLQUFOLENBQVlqQjtBQUZFLEdBQUw7QUFBQSxDQUE3Qjs7QUFLQSxJQUFNa0Isa0JBQWtCLEdBQUc7QUFDdkJDLGNBQVksRUFBRUMsb0RBQVcsQ0FBQ0Q7QUFESCxDQUEzQjtBQUllRSwwSEFBTyxDQUFDTixlQUFELEVBQWtCRyxrQkFBbEIsQ0FBUCxDQUE2Q3JCLGlCQUE3QyxDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvcmVwb3J0RGV0YWlsTW9kYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VyQWN0aW9ucyB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHsgcGF0dGVybiwgZXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7ICBjbG9zZU1vZGFsIH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9uc1wiO1xuXG5pbXBvcnQgUGFwYSBmcm9tIFwicGFwYXBhcnNlXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFJlcG9ydERldGFpbE1vZGFsID0gKHtjaGlsZHJlbiwgcGFnZVByb3BzLHNlbGVjdGVkUmVwb3J0LHNlbGVjdGVkVXNlcn0pID0+IHtcbiAgICBcbiAgICAvL2NvbnNvbGUubG9nKHNlbGVjdGVkUmVwb3J0KVxuICAgIFxuICAgIHJldHVybiA8ZGl2IGlkPVwicmVwb3J0RGV0YWlsTW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLXR5cGU9XCJoaWRlLW1vZGFsXCIgZGF0YS10YXJnZXQ9XCJyZXBvcnREZXRhaWxNb2RhbFwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICB7c2VsZWN0ZWRVc2VyICYmIDxoMz5SZXBvcnQgZGV0YWlsIGZvciA8c3BhbiBjbGFzc05hbWU9XCJibHVlXCI+e3NlbGVjdGVkVXNlci5maXJzdE5hbWUgKyBcIiBcIiArIHNlbGVjdGVkVXNlci5sYXN0TmFtZX08L3NwYW4+PC9oMz4gfVxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRpdmlkZXJcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkUmVwb3J0ICYmIHNlbGVjdGVkUmVwb3J0LnJlcG9ydHMubWFwKChyZXBvcnQsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlZWsgPGJyLz4gPHN0cm9uZz57cmVwb3J0LldlZWtfTnVtYmVyfTwvc3Ryb25nPiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5VcGxvYWRlZCBPbiA8YnIvPiA8c3Ryb25nPntyZXBvcnQuY3JlYXRlZEF0fTwvc3Ryb25nPiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EaXNwYXRjaGVkIFBhY2thZ2VzIDxici8+IDxzdHJvbmc+e3JlcG9ydC5EaXNwYXRjaGVkX1BhY2thZ2VzfTwvc3Ryb25nPiA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EZWxpdmVyZWQgUGFja2FnZXMgPGJyLz4gPHN0cm9uZz57cmVwb3J0LkRlbGl2ZXJlZF9QYWNrYWdlc308L3N0cm9uZz4gPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGVsaXZlcnkgU3VjY2VzcyAoJSkgPGJyLz4gPHN0cm9uZz57cmVwb3J0LkRlbGl2ZXJ5X1N1Y2Nlc3NfUH08L3N0cm9uZz4gPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZHNlbGVjdGVkUmVwb3J0LnJlcG9ydHMubGVuZ3RoID09IDAgJiYgPHA+Tm8gcmVwb3J0IGZvdW5kPC9wPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxufVxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gICAgc2VsZWN0ZWRVc2VyOiBzdGF0ZS51c2Vycy5zZWxlY3RlZFVzZXIsXG4gICAgc2VsZWN0ZWRSZXBvcnQ6IHN0YXRlLnVzZXJzLnNlbGVjdGVkUmVwb3J0LFxuICB9KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICAgIHVwbG9hZFJlcG9ydDogdXNlckFjdGlvbnMudXBsb2FkUmVwb3J0XG59O1xuICBcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFJlcG9ydERldGFpbE1vZGFsKSBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/reportDetailModal.js\n");

/***/ })

})