"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/todo/page",{

/***/ "(app-pages-browser)/./src/service/TarefasService.js":
/*!***************************************!*\
  !*** ./src/service/TarefasService.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: function() { return /* binding */ createTodo; },\n/* harmony export */   deleteTodo: function() { return /* binding */ deleteTodo; },\n/* harmony export */   getTodos: function() { return /* binding */ getTodos; },\n/* harmony export */   updateTodo: function() { return /* binding */ updateTodo; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nconst API_URL = \"https://todolist-update.onrender.com/todos\"; // URL base da sua API\n// Função para criar um novo Todo\nconst createTodo = async (todo)=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(API_URL, todo);\n        return response.data;\n    } catch (error) {\n        console.error(\"Erro ao criar o Todo:\", error);\n        throw error;\n    }\n};\n// Função para listar todos os Todos\nconst getTodos = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(API_URL);\n        return response.data;\n    } catch (error) {\n        console.error(\"Erro ao listar os Todos:\", error);\n        throw error;\n    }\n};\n// Função para atualizar um Todo\nconst updateTodo = async (todo)=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(API_URL, todo);\n        return response.data;\n    } catch (error) {\n        console.error(\"Erro ao atualizar o Todo:\", error);\n        throw error;\n    }\n};\n// Função para deletar um Todo pelo ID\nconst deleteTodo = async (id)=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(\"\".concat(API_URL, \"/\").concat(id));\n        return response.data;\n    } catch (error) {\n        console.error(\"Erro ao deletar o Todo:\", error);\n        throw error;\n    }\n};\n// Exporta todas as funções para serem usadas em outros lugares do aplicativo\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlL1RhcmVmYXNTZXJ2aWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLFVBQVUsOENBQThDLHNCQUFzQjtBQUVwRixpQ0FBaUM7QUFDakMsTUFBTUMsYUFBYSxPQUFPQztJQUN4QixJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNSiw2Q0FBS0EsQ0FBQ0ssSUFBSSxDQUFDSixTQUFTRTtRQUMzQyxPQUFPQyxTQUFTRSxJQUFJO0lBQ3RCLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtRQUN2QyxNQUFNQTtJQUNSO0FBQ0Y7QUFFQSxvQ0FBb0M7QUFDcEMsTUFBTUUsV0FBVztJQUNmLElBQUk7UUFDRixNQUFNTCxXQUFXLE1BQU1KLDZDQUFLQSxDQUFDVSxHQUFHLENBQUNUO1FBQ2pDLE9BQU9HLFNBQVNFLElBQUk7SUFDdEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzFDLE1BQU1BO0lBQ1I7QUFDRjtBQUVBLGdDQUFnQztBQUNoQyxNQUFNSSxhQUFhLE9BQU9SO0lBQ3hCLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1KLDZDQUFLQSxDQUFDWSxHQUFHLENBQUNYLFNBQVNFO1FBQzFDLE9BQU9DLFNBQVNFLElBQUk7SUFDdEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO1FBQzNDLE1BQU1BO0lBQ1I7QUFDRjtBQUVBLHNDQUFzQztBQUN0QyxNQUFNTSxhQUFhLE9BQU9DO0lBQ3hCLElBQUk7UUFDRixNQUFNVixXQUFXLE1BQU1KLDZDQUFLQSxDQUFDZSxNQUFNLENBQUMsR0FBY0QsT0FBWGIsU0FBUSxLQUFNLE9BQUhhO1FBQ2xELE9BQU9WLFNBQVNFLElBQUk7SUFDdEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1FBQ3pDLE1BQU1BO0lBQ1I7QUFDRjtBQUVBLDZFQUE2RTtBQU0zRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZS9UYXJlZmFzU2VydmljZS5qcz9mZTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEFQSV9VUkwgPSAnaHR0cHM6Ly90b2RvbGlzdC11cGRhdGUub25yZW5kZXIuY29tL3RvZG9zJzsgLy8gVVJMIGJhc2UgZGEgc3VhIEFQSVxuXG4vLyBGdW7Dp8OjbyBwYXJhIGNyaWFyIHVtIG5vdm8gVG9kb1xuY29uc3QgY3JlYXRlVG9kbyA9IGFzeW5jICh0b2RvKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KEFQSV9VUkwsIHRvZG8pO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY3JpYXIgbyBUb2RvOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuLy8gRnVuw6fDo28gcGFyYSBsaXN0YXIgdG9kb3Mgb3MgVG9kb3NcbmNvbnN0IGdldFRvZG9zID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KEFQSV9VUkwpO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gbGlzdGFyIG9zIFRvZG9zOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuLy8gRnVuw6fDo28gcGFyYSBhdHVhbGl6YXIgdW0gVG9kb1xuY29uc3QgdXBkYXRlVG9kbyA9IGFzeW5jICh0b2RvKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoQVBJX1VSTCwgdG9kbyk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJybyBhbyBhdHVhbGl6YXIgbyBUb2RvOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuLy8gRnVuw6fDo28gcGFyYSBkZWxldGFyIHVtIFRvZG8gcGVsbyBJRFxuY29uc3QgZGVsZXRlVG9kbyA9IGFzeW5jIChpZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAke0FQSV9VUkx9LyR7aWR9YCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJybyBhbyBkZWxldGFyIG8gVG9kbzonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbi8vIEV4cG9ydGEgdG9kYXMgYXMgZnVuw6fDtWVzIHBhcmEgc2VyZW0gdXNhZGFzIGVtIG91dHJvcyBsdWdhcmVzIGRvIGFwbGljYXRpdm9cbmV4cG9ydCB7XG4gIGNyZWF0ZVRvZG8sXG4gIGdldFRvZG9zLFxuICB1cGRhdGVUb2RvLFxuICBkZWxldGVUb2RvXG59O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiQVBJX1VSTCIsImNyZWF0ZVRvZG8iLCJ0b2RvIiwicmVzcG9uc2UiLCJwb3N0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImdldFRvZG9zIiwiZ2V0IiwidXBkYXRlVG9kbyIsInB1dCIsImRlbGV0ZVRvZG8iLCJpZCIsImRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/service/TarefasService.js\n"));

/***/ })

});