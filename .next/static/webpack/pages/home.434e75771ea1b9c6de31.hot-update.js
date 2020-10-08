webpackHotUpdate_N_E("pages/home",{

/***/ "./src/reducers/users.reducer.js":
/*!***************************************!*\
  !*** ./src/reducers/users.reducer.js ***!
  \***************************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"users\", function() { return users; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nfunction users() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].REGISTER_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addingUser: true,\n        addUserError: false,\n        addUserSuccess: false\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].REGISTER_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addingUser: false,\n        addUserError: false,\n        addUserSuccess: true,\n        allUsers: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.allUsers), [action.user]),\n        filteredUsers: [action.user].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.filteredUsers)),\n        lastAdded: action.user\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].REGISTER_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addingUser: false,\n        addUserError: true,\n        addUserSuccess: false,\n        error: action.error\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].GETALL_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: true\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].GETALL_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        allUsers: action.users,\n        filteredUsers: action.users,\n        loading: false,\n        loadingError: false\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].GETALL_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loading: false,\n        loadingError: true,\n        error: action.error\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].UPDATE_USER_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        updateUserSuccess: false,\n        updateUserError: \"\"\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].UPDATE_USER_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        updateUserSuccess: true,\n        updateUserError: \"\",\n        lastUpdated: state.selectedUser\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].UPDATE_USER_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        updateUserSuccess: false,\n        updateUserError: true,\n        error: action.error\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].SELECT_USER:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        selectedUser: state.allUsers.find(function (user) {\n          return user.id === action.userId;\n        })\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].FILTERED_USER:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        filteredUsers: action.users\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].RESET_FILTER:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        filteredUsers: action.users\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].USER_REPORT_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        uploading: true,\n        reportRequestSuccess: false,\n        reportRequestError: \"\"\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].USER_REPORT_SUCCESS:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        uploading: false,\n        reportRequestSuccess: true,\n        reportRequestError: \"\",\n        selectedReport: action.report\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].USER_REPORT_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        uploading: false,\n        reportRequestSuccess: false,\n        reportRequestError: action.error,\n        selectedReport: null\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].UPDATE_USER_IN_STORE:\n      var currentUser = state.selectedUser;\n      if (currentUser.id === action.user.id) currentUser = action.user;\n      var filteredUsers = state.filteredUsers;\n      var allUsers = state.allUsers;\n      var index = filteredUsers.findIndex(function (x) {\n        return x.id == currentUser.id;\n      });\n      if (index != -1) filteredUsers[index] = action.user;\n      index = allUsers.findIndex(function (x) {\n        return x.id == currentUser.id;\n      });\n      if (index != -1) allUsers[index] = action.user;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        selectedUser: currentUser,\n        filteredUsers: filteredUsers,\n        allUsers: allUsers\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].REPORT_UPLOAD_REQUEST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        uploadReportSuccess: false,\n        uploadReportError: \"\"\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].REPORT_UPLOAD_SUCCESS:\n      var curUser = state.selectedUser;\n      if (curUser.id === action.data.user.id) curUser = action.data.user; //console.log(curUser)\n\n      var ftdUsers = state.filteredUsers;\n      var all = state.allUsers;\n      var ind = ftdUsers.findIndex(function (x) {\n        return x.id == curUser.id;\n      });\n      if (ind != -1) ftdUsers[ind] = action.data.user;\n      ind = all.findIndex(function (x) {\n        return x.id == curUser.id;\n      });\n      if (ind != -1) all[ind] = action.data.user;\n      return _objectSpread(_objectSpread({}, state), {}, {\n        selectedUser: curUser,\n        selectedReport: action.data.report,\n        filteredUsers: ftdUsers,\n        allUsers: all,\n        uploadReportSuccess: true,\n        uploadReportError: \"\"\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].REPORT_UPLOAD_FAILURE:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        uploadReportSuccess: false,\n        uploadReportError: action.error\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].DELETE_REQUEST:\n      // add 'deleting:true' property to user being deleted\n      return _objectSpread(_objectSpread({}, state), {}, {\n        allUsers: state.allUsers.map(function (user) {\n          return user.id === action.id ? _objectSpread(_objectSpread({}, user), {}, {\n            deleting: true\n          }) : user;\n        })\n      });\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].DELETE_SUCCESS:\n      // remove deleted user from state\n      return {\n        allUsers: state.allUsers.filter(function (user) {\n          return user.id !== action.id;\n        })\n      };\n\n    case _constants__WEBPACK_IMPORTED_MODULE_3__[\"userConstants\"].DELETE_FAILURE:\n      // remove 'deleting:true' property and add 'deleteError:[error]' property to user \n      return _objectSpread(_objectSpread({}, state), {}, {\n        allUsers: state.allUsers.map(function (user) {\n          if (user.id === action.id) {\n            // make copy of user without 'deleting:true' property\n            var deleting = user.deleting,\n                userCopy = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(user, [\"deleting\"]); // return copy of user with 'deleteError:[error]' property\n\n\n            return _objectSpread(_objectSpread({}, userCopy), {}, {\n              deleteError: action.error\n            });\n          }\n\n          return user;\n        })\n      });\n\n    default:\n      return state;\n  }\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3VzZXJzLnJlZHVjZXIuanM/MDk4NyJdLCJuYW1lcyI6WyJ1c2VycyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInVzZXJDb25zdGFudHMiLCJSRUdJU1RFUl9SRVFVRVNUIiwiYWRkaW5nVXNlciIsImFkZFVzZXJFcnJvciIsImFkZFVzZXJTdWNjZXNzIiwiUkVHSVNURVJfU1VDQ0VTUyIsImFsbFVzZXJzIiwidXNlciIsImZpbHRlcmVkVXNlcnMiLCJsYXN0QWRkZWQiLCJSRUdJU1RFUl9GQUlMVVJFIiwiZXJyb3IiLCJHRVRBTExfUkVRVUVTVCIsImxvYWRpbmciLCJHRVRBTExfU1VDQ0VTUyIsImxvYWRpbmdFcnJvciIsIkdFVEFMTF9GQUlMVVJFIiwiVVBEQVRFX1VTRVJfUkVRVUVTVCIsInVwZGF0ZVVzZXJTdWNjZXNzIiwidXBkYXRlVXNlckVycm9yIiwiVVBEQVRFX1VTRVJfU1VDQ0VTUyIsImxhc3RVcGRhdGVkIiwic2VsZWN0ZWRVc2VyIiwiVVBEQVRFX1VTRVJfRkFJTFVSRSIsIlNFTEVDVF9VU0VSIiwiZmluZCIsImlkIiwidXNlcklkIiwiRklMVEVSRURfVVNFUiIsIlJFU0VUX0ZJTFRFUiIsIlVTRVJfUkVQT1JUX1JFUVVFU1QiLCJ1cGxvYWRpbmciLCJyZXBvcnRSZXF1ZXN0U3VjY2VzcyIsInJlcG9ydFJlcXVlc3RFcnJvciIsIlVTRVJfUkVQT1JUX1NVQ0NFU1MiLCJzZWxlY3RlZFJlcG9ydCIsInJlcG9ydCIsIlVTRVJfUkVQT1JUX0ZBSUxVUkUiLCJVUERBVEVfVVNFUl9JTl9TVE9SRSIsImN1cnJlbnRVc2VyIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJ4IiwiUkVQT1JUX1VQTE9BRF9SRVFVRVNUIiwidXBsb2FkUmVwb3J0U3VjY2VzcyIsInVwbG9hZFJlcG9ydEVycm9yIiwiUkVQT1JUX1VQTE9BRF9TVUNDRVNTIiwiY3VyVXNlciIsImRhdGEiLCJmdGRVc2VycyIsImFsbCIsImluZCIsIlJFUE9SVF9VUExPQURfRkFJTFVSRSIsIkRFTEVURV9SRVFVRVNUIiwibWFwIiwiZGVsZXRpbmciLCJERUxFVEVfU1VDQ0VTUyIsImZpbHRlciIsIkRFTEVURV9GQUlMVVJFIiwidXNlckNvcHkiLCJkZWxldGVFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLFNBQVNBLEtBQVQsR0FBbUM7QUFBQSxNQUFwQkMsS0FBb0IsdUVBQVosRUFBWTtBQUFBLE1BQVJDLE1BQVE7O0FBQ3hDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLHdEQUFhLENBQUNDLGdCQUFuQjtBQUNFLDZDQUNLSixLQURMO0FBRUVLLGtCQUFVLEVBQUUsSUFGZDtBQUdFQyxvQkFBWSxFQUFFLEtBSGhCO0FBSUVDLHNCQUFjLEVBQUM7QUFKakI7O0FBTUYsU0FBS0osd0RBQWEsQ0FBQ0ssZ0JBQW5CO0FBQ0UsNkNBQ0tSLEtBREw7QUFFRUssa0JBQVUsRUFBRSxLQUZkO0FBR0VDLG9CQUFZLEVBQUUsS0FIaEI7QUFJRUMsc0JBQWMsRUFBQyxJQUpqQjtBQUtFRSxnQkFBUSx5R0FBTVQsS0FBSyxDQUFDUyxRQUFaLElBQXNCUixNQUFNLENBQUNTLElBQTdCLEVBTFY7QUFNRUMscUJBQWEsR0FBR1YsTUFBTSxDQUFDUyxJQUFWLHNHQUFtQlYsS0FBSyxDQUFDVyxhQUF6QixFQU5mO0FBT0VDLGlCQUFTLEVBQUVYLE1BQU0sQ0FBQ1M7QUFQcEI7O0FBU0YsU0FBS1Asd0RBQWEsQ0FBQ1UsZ0JBQW5CO0FBQ0UsNkNBQ0tiLEtBREw7QUFFRUssa0JBQVUsRUFBRSxLQUZkO0FBR0VDLG9CQUFZLEVBQUUsSUFIaEI7QUFJRUMsc0JBQWMsRUFBQyxLQUpqQjtBQUtFTyxhQUFLLEVBQUNiLE1BQU0sQ0FBQ2E7QUFMZjs7QUFRRixTQUFLWCx3REFBYSxDQUFDWSxjQUFuQjtBQUNFLDZDQUNLZixLQURMO0FBRUVnQixlQUFPLEVBQUU7QUFGWDs7QUFLRixTQUFLYix3REFBYSxDQUFDYyxjQUFu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TGxELGdCQUFRLEVBQUVULEtBQUssQ0FBQ1MsUUFBTixDQUFlbUQsTUFBZixDQUFzQixVQUFBbEQsSUFBSTtBQUFBLGlCQUFJQSxJQUFJLENBQUNtQixFQUFMLEtBQVk1QixNQUFNLENBQUM0QixFQUF2QjtBQUFBLFNBQTFCO0FBREwsT0FBUDs7QUFHRixTQUFLMUIsd0RBQWEsQ0FBQzBELGNBQW5CO0FBQ0U7QUFDQSw2Q0FDSzdELEtBREw7QUFFRVMsZ0JBQVEsRUFBRVQsS0FBSyxDQUFDUyxRQUFOLENBQWVnRCxHQUFmLENBQW1CLFVBQUEvQyxJQUFJLEVBQUk7QUFDbkMsY0FBSUEsSUFBSSxDQUFDbUIsRUFBTCxLQUFZNUIsTUFBTSxDQUFDNEIsRUFBdkIsRUFBMkI7QUFDekI7QUFEeUIsZ0JBRWpCNkIsUUFGaUIsR0FFU2hELElBRlQsQ0FFakJnRCxRQUZpQjtBQUFBLGdCQUVKSSxRQUZJLHNHQUVTcEQsSUFGVCxpQkFHekI7OztBQUNBLG1EQUFZb0QsUUFBWjtBQUFzQkMseUJBQVcsRUFBRTlELE1BQU0sQ0FBQ2E7QUFBMUM7QUFDRDs7QUFFRCxpQkFBT0osSUFBUDtBQUNELFNBVFM7QUFGWjs7QUFhRjtBQUNFLGFBQU9WLEtBQVA7QUE3TUo7QUErTUQiLCJmaWxlIjoiLi9zcmMvcmVkdWNlcnMvdXNlcnMucmVkdWNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZXJDb25zdGFudHMgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlcnMoc3RhdGUgPSB7fSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHVzZXJDb25zdGFudHMuUkVHSVNURVJfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRpbmdVc2VyOiB0cnVlLFxuICAgICAgICBhZGRVc2VyRXJyb3I6IGZhbHNlLFxuICAgICAgICBhZGRVc2VyU3VjY2VzczpmYWxzZVxuICAgICAgfTtcbiAgICBjYXNlIHVzZXJDb25zdGFudHMuUkVHSVNURVJfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRpbmdVc2VyOiBmYWxzZSxcbiAgICAgICAgYWRkVXNlckVycm9yOiBmYWxzZSxcbiAgICAgICAgYWRkVXNlclN1Y2Nlc3M6dHJ1ZSxcbiAgICAgICAgYWxsVXNlcnM6IFsuLi5zdGF0ZS5hbGxVc2VycywgYWN0aW9uLnVzZXJdLFxuICAgICAgICBmaWx0ZXJlZFVzZXJzOiBbYWN0aW9uLnVzZXIsIC4uLnN0YXRlLmZpbHRlcmVkVXNlcnMgXSxcbiAgICAgICAgbGFzdEFkZGVkOiBhY3Rpb24udXNlclxuICAgICAgfTtcbiAgICBjYXNlIHVzZXJDb25zdGFudHMuUkVHSVNURVJfRkFJTFVSRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhZGRpbmdVc2VyOiBmYWxzZSxcbiAgICAgICAgYWRkVXNlckVycm9yOiB0cnVlLFxuICAgICAgICBhZGRVc2VyU3VjY2VzczpmYWxzZSxcbiAgICAgICAgZXJyb3I6YWN0aW9uLmVycm9yXG4gICAgICB9O1xuXG4gICAgY2FzZSB1c2VyQ29uc3RhbnRzLkdFVEFMTF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgIH07XG4gICAgXG4gICAgY2FzZSB1c2VyQ29uc3RhbnRzLkdFVEFMTF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFsbFVzZXJzOiBhY3Rpb24udXNlcnMsXG4gICAgICAgIGZpbHRlcmVkVXNlcnM6IGFjdGlvbi51c2VycyxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGxvYWRpbmdFcnJvcjpmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSB1c2VyQ29uc3RhbnRzLkdFVEFMTF9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHsgXG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOmZhbHNlLFxuICAgICAgICBsb2FkaW5nRXJyb3I6dHJ1ZSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvclxuICAgICAgfTtcbiAgICBjYXNlIHVzZXJDb25zdGFudHMuVVBEQVRFX1VTRVJfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1cGRhdGVVc2VyU3VjY2VzczpmYWxzZSxcbiAgICAgICAgdXBkYXRlVXNlckVycm9yOlwiXCIsXG4gICAgICAgIFxuICAgICAgfTtcbiAgICBjYXNlIHVzZXJDb25zdGFudHMuVVBEQVRFX1VTRVJfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1cGRhdGVVc2VyU3VjY2Vzczp0cnVlLFxuICAgICAgICB1cGRhdGVVc2VyRXJyb3I6XCJcIixcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IHN0YXRlLnNlbGVjdGVkVXNlclxuICAgICAgICBcbiAgICAgIH07XG4gICAgY2FzZSB1c2VyQ29uc3RhbnRzLlVQREFURV9VU0VSX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXBkYXRlVXNlclN1Y2Nlc3M6ZmFsc2UsXG4gICAgICAgIHVwZGF0ZVVzZXJFcnJvcjp0cnVlLFxuICAgICAgICBlcnJvcjphY3Rpb24uZXJyb3JcbiAgICAgIFxuICAgICAgfTtcbiAgICBjYXNlIHVzZXJDb25zdGFudHMuU0VMRUNUX1VTRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VsZWN0ZWRVc2VyOiBzdGF0ZS5hbGxVc2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gYWN0aW9uLnVzZXJJZClcbiAgICAgIH07XG4gICAgY2FzZSB1c2VyQ29uc3RhbnRzLkZJTFRFUkVEX1VTRVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyZWRVc2VyczogYWN0aW9uLnVzZXJzXG4gICAgICB9O1xuICAgIGNhc2UgdXNlckNvbnN0YW50cy5SRVNFVF9GSUxURVI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsdGVyZWRVc2VyczogYWN0aW9uLnVzZXJzXG4gICAgICB9O1xuICAgIGNhc2UgdXNlckNvbnN0YW50cy5VU0VSX1JFUE9SVF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVwbG9hZGluZzp0cnVlLFxuICAgICAgICByZXBvcnRSZXF1ZXN0U3VjY2VzczpmYWxzZSxcbiAgICAgICAgcmVwb3J0UmVxdWVzdEVycm9yOlwiXCJcbiAgICAgIH07XG4gICAgY2FzZSB1c2VyQ29uc3RhbnRzLlVTRVJfUkVQT1JUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXBsb2FkaW5nOmZhbHNlLFxuICAgICAgICByZXBvcnRSZXF1ZXN0U3VjY2Vzczp0cnVlLFxuICAgICAgICByZXBvcnRSZXF1ZXN0RXJyb3I6XCJcIixcbiAgICAgICAgc2VsZWN0ZWRSZXBvcnQ6IGFjdGlvbi5yZXBvcnRcbiAgICAgIH07XG4gICAgY2FzZSB1c2VyQ29uc3RhbnRzLlVTRVJfUkVQT1JUX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXBsb2FkaW5nOmZhbHNlLFxuICAgICAgICByZXBvcnRSZXF1ZXN0U3VjY2VzczpmYWxzZSxcbiAgICAgICAgcmVwb3J0UmVxdWVzdEVycm9yOmFjdGlvbi5lcnJvcixcbiAgICAgICAgc2VsZWN0ZWRSZXBvcnQ6IG51bGxcbiAgICAgIH07XG5cbiAgICBjYXNlIHVzZXJDb25zdGFudHMuVVBEQVRFX1VTRVJfSU5fU1RPUkU6XG4gICAgICBsZXQgY3VycmVudFVzZXIgPSBzdGF0ZS5zZWxlY3RlZFVzZXJcblxuICAgICAgaWYoY3VycmVudFVzZXIuaWQgPT09IGFjdGlvbi51c2VyLmlkKVxuICAgICAgICBjdXJyZW50VXNlciA9IGFjdGlvbi51c2VyXG5cbiAgICAgIGNvbnN0IGZpbHRlcmVkVXNlcnMgPSBzdGF0ZS5maWx0ZXJlZFVzZXJzXG4gICAgICBjb25zdCBhbGxVc2VycyA9IHN0YXRlLmFsbFVzZXJzXG5cbiAgICAgIGxldCBpbmRleCA9IGZpbHRlcmVkVXNlcnMuZmluZEluZGV4KHggPT4geC5pZCA9PSBjdXJyZW50VXNlci5pZClcbiAgICAgIGlmIChpbmRleCAhPSAtMSlcbiAgICAgICAgZmlsdGVyZWRVc2Vyc1tpbmRleF0gPSBhY3Rpb24udXNlclxuICAgICAgXG4gICAgICBpbmRleCA9IGFsbFVzZXJzLmZpbmRJbmRleCh4ID0+IHguaWQgPT0gY3VycmVudFVzZXIuaWQpXG4gICAgICBpZiAoaW5kZXggIT0gLTEpXG4gICAgICAgIGFsbFVzZXJzW2luZGV4XSA9IGFjdGlvbi51c2VyXG4gICAgICBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWxlY3RlZFVzZXI6IGN1cnJlbnRVc2VyLFxuICAgICAgICBmaWx0ZXJlZFVzZXJzOiBmaWx0ZXJlZFVzZXJzLFxuICAgICAgICBhbGxVc2VyczogYWxsVXNlcnNcbiAgICAgIH07XG5cbiAgICBjYXNlIHVzZXJDb25zdGFudHMuUkVQT1JUX1VQTE9BRF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVwbG9hZFJlcG9ydFN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICB1cGxvYWRSZXBvcnRFcnJvcjogXCJcIixcbiAgICAgIH1cbiAgICBjYXNlIHVzZXJDb25zdGFudHMuUkVQT1JUX1VQTE9BRF9TVUNDRVNTOlxuXG4gICAgICBsZXQgY3VyVXNlciA9IHN0YXRlLnNlbGVjdGVkVXNlclxuXG4gICAgICBpZihjdXJVc2VyLmlkID09PSBhY3Rpb24uZGF0YS51c2VyLmlkKVxuICAgICAgICBjdXJVc2VyID0gYWN0aW9uLmRhdGEudXNlclxuICAgICAgLy9jb25zb2xlLmxvZyhjdXJVc2VyKVxuXG4gICAgICBjb25zdCBmdGRVc2VycyA9IHN0YXRlLmZpbHRlcmVkVXNlcnNcbiAgICAgIGNvbnN0IGFsbCA9IHN0YXRlLmFsbFVzZXJzXG5cbiAgICAgIGxldCBpbmQgPSBmdGRVc2Vycy5maW5kSW5kZXgoeCA9PiB4LmlkID09IGN1clVzZXIuaWQpXG4gICAgICBpZiAoaW5kICE9IC0xKVxuICAgICAgICBmdGRVc2Vyc1tpbmRdID0gYWN0aW9uLmRhdGEudXNlclxuICAgICAgXG4gICAgICBpbmQgPSBhbGwuZmluZEluZGV4KHggPT4geC5pZCA9PSBjdXJVc2VyLmlkKVxuICAgICAgaWYgKGluZCAhPSAtMSlcbiAgICAgICAgYWxsW2luZF0gPSBhY3Rpb24uZGF0YS51c2VyXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWxlY3RlZFVzZXI6IGN1clVzZXIsXG4gICAgICAgIHNlbGVjdGVkUmVwb3J0OmFjdGlvbi5kYXRhLnJlcG9ydCxcbiAgICAgICAgZmlsdGVyZWRVc2VyczogZnRkVXNlcnMsXG4gICAgICAgIGFsbFVzZXJzOiBhbGwsXG4gICAgICAgIHVwbG9hZFJlcG9ydFN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIHVwbG9hZFJlcG9ydEVycm9yOiBcIlwiLFxuICAgICAgfVxuICAgIGNhc2UgdXNlckNvbnN0YW50cy5SRVBPUlRfVVBMT0FEX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXBsb2FkUmVwb3J0U3VjY2VzczogZmFsc2UsXG4gICAgICAgIHVwbG9hZFJlcG9ydEVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICB9XG4gICAgY2FzZSB1c2VyQ29uc3RhbnRzLkRFTEVURV9SRVFVRVNUOlxuICAgICAgLy8gYWRkICdkZWxldGluZzp0cnVlJyBwcm9wZXJ0eSB0byB1c2VyIGJlaW5nIGRlbGV0ZWRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhbGxVc2Vyczogc3RhdGUuYWxsVXNlcnMubWFwKHVzZXIgPT5cbiAgICAgICAgICB1c2VyLmlkID09PSBhY3Rpb24uaWRcbiAgICAgICAgICAgID8geyAuLi51c2VyLCBkZWxldGluZzogdHJ1ZSB9XG4gICAgICAgICAgICA6IHVzZXJcbiAgICAgICAgKVxuICAgICAgfTtcbiAgICBjYXNlIHVzZXJDb25zdGFudHMuREVMRVRFX1NVQ0NFU1M6XG4gICAgICAvLyByZW1vdmUgZGVsZXRlZCB1c2VyIGZyb20gc3RhdGVcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFsbFVzZXJzOiBzdGF0ZS5hbGxVc2Vycy5maWx0ZXIodXNlciA9PiB1c2VyLmlkICE9PSBhY3Rpb24uaWQpXG4gICAgICB9O1xuICAgIGNhc2UgdXNlckNvbnN0YW50cy5ERUxFVEVfRkFJTFVSRTpcbiAgICAgIC8vIHJlbW92ZSAnZGVsZXRpbmc6dHJ1ZScgcHJvcGVydHkgYW5kIGFkZCAnZGVsZXRlRXJyb3I6W2Vycm9yXScgcHJvcGVydHkgdG8gdXNlciBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhbGxVc2Vyczogc3RhdGUuYWxsVXNlcnMubWFwKHVzZXIgPT4ge1xuICAgICAgICAgIGlmICh1c2VyLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICAgIC8vIG1ha2UgY29weSBvZiB1c2VyIHdpdGhvdXQgJ2RlbGV0aW5nOnRydWUnIHByb3BlcnR5XG4gICAgICAgICAgICBjb25zdCB7IGRlbGV0aW5nLCAuLi51c2VyQ29weSB9ID0gdXNlcjtcbiAgICAgICAgICAgIC8vIHJldHVybiBjb3B5IG9mIHVzZXIgd2l0aCAnZGVsZXRlRXJyb3I6W2Vycm9yXScgcHJvcGVydHlcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnVzZXJDb3B5LCBkZWxldGVFcnJvcjogYWN0aW9uLmVycm9yIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0pXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/reducers/users.reducer.js\n");

/***/ })

})