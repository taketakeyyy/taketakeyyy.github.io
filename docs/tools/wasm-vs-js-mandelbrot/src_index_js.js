"use strict";
(self["webpackChunkwasm_vs_js_mandelbrot"] = self["webpackChunkwasm_vs_js_mandelbrot"] || []).push([["src_index_js"],{

/***/ "../pkg/mandelbrot.js":
/*!****************************!*\
  !*** ../pkg/mandelbrot.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __wbg_call_cb65541d95d71282: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_call_cb65541d95d71282),
/* harmony export */   __wbg_document_f7ace2b956f30a4f: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_document_f7ace2b956f30a4f),
/* harmony export */   __wbg_getContext_7c5944ea807bf5d3: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getContext_7c5944ea807bf5d3),
/* harmony export */   __wbg_getElementById_cc0e0d931b0d9a28: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getElementById_cc0e0d931b0d9a28),
/* harmony export */   __wbg_globalThis_1d39714405582d3c: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_globalThis_1d39714405582d3c),
/* harmony export */   __wbg_global_651f05c6a0944d1c: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_global_651f05c6a0944d1c),
/* harmony export */   __wbg_height_0d36fbbeb60b0661: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_height_0d36fbbeb60b0661),
/* harmony export */   __wbg_instanceof_CanvasRenderingContext2d_bc0a6635c96eca9b: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_instanceof_CanvasRenderingContext2d_bc0a6635c96eca9b),
/* harmony export */   __wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d),
/* harmony export */   __wbg_instanceof_Window_9029196b662bc42a: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_instanceof_Window_9029196b662bc42a),
/* harmony export */   __wbg_log_c801d84ad6d2e8a7: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_log_c801d84ad6d2e8a7),
/* harmony export */   __wbg_newnoargs_581967eacc0e2604: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newnoargs_581967eacc0e2604),
/* harmony export */   __wbg_newwithu8clampedarrayandsh_e2b3fce567acd708: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newwithu8clampedarrayandsh_e2b3fce567acd708),
/* harmony export */   __wbg_now_0cfdc90c97d0c24b: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_now_0cfdc90c97d0c24b),
/* harmony export */   __wbg_performance_2c295061c8b01e0b: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_performance_2c295061c8b01e0b),
/* harmony export */   __wbg_putImageData_f157d52a70a206d5: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_putImageData_f157d52a70a206d5),
/* harmony export */   __wbg_self_1ff1d729e9aae938: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_self_1ff1d729e9aae938),
/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),
/* harmony export */   __wbg_width_2931aaedd21f1fff: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_width_2931aaedd21f1fff),
/* harmony export */   __wbg_window_5f4faef6c12b79ec: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_window_5f4faef6c12b79ec),
/* harmony export */   __wbindgen_debug_string: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_debug_string),
/* harmony export */   __wbindgen_is_undefined: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_is_undefined),
/* harmony export */   __wbindgen_object_clone_ref: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_object_clone_ref),
/* harmony export */   __wbindgen_object_drop_ref: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_object_drop_ref),
/* harmony export */   __wbindgen_throw: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw),
/* harmony export */   draw_mandelbrot_set_rs: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.draw_mandelbrot_set_rs),
/* harmony export */   generate_mandelbrot_set_rs: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.generate_mandelbrot_set_rs),
/* harmony export */   init_func_rs: () => (/* reexport safe */ _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.init_func_rs)
/* harmony export */ });
/* harmony import */ var _mandelbrot_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mandelbrot_bg.wasm */ "../pkg/mandelbrot_bg.wasm");
/* harmony import */ var _mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mandelbrot_bg.js */ "../pkg/mandelbrot_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mandelbrot_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);
_mandelbrot_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


(0,_mandelbrot_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_mandelbrot_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "../pkg/mandelbrot_bg.js":
/*!*******************************!*\
  !*** ../pkg/mandelbrot_bg.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __wbg_call_cb65541d95d71282: () => (/* binding */ __wbg_call_cb65541d95d71282),
/* harmony export */   __wbg_document_f7ace2b956f30a4f: () => (/* binding */ __wbg_document_f7ace2b956f30a4f),
/* harmony export */   __wbg_getContext_7c5944ea807bf5d3: () => (/* binding */ __wbg_getContext_7c5944ea807bf5d3),
/* harmony export */   __wbg_getElementById_cc0e0d931b0d9a28: () => (/* binding */ __wbg_getElementById_cc0e0d931b0d9a28),
/* harmony export */   __wbg_globalThis_1d39714405582d3c: () => (/* binding */ __wbg_globalThis_1d39714405582d3c),
/* harmony export */   __wbg_global_651f05c6a0944d1c: () => (/* binding */ __wbg_global_651f05c6a0944d1c),
/* harmony export */   __wbg_height_0d36fbbeb60b0661: () => (/* binding */ __wbg_height_0d36fbbeb60b0661),
/* harmony export */   __wbg_instanceof_CanvasRenderingContext2d_bc0a6635c96eca9b: () => (/* binding */ __wbg_instanceof_CanvasRenderingContext2d_bc0a6635c96eca9b),
/* harmony export */   __wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d: () => (/* binding */ __wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d),
/* harmony export */   __wbg_instanceof_Window_9029196b662bc42a: () => (/* binding */ __wbg_instanceof_Window_9029196b662bc42a),
/* harmony export */   __wbg_log_c801d84ad6d2e8a7: () => (/* binding */ __wbg_log_c801d84ad6d2e8a7),
/* harmony export */   __wbg_newnoargs_581967eacc0e2604: () => (/* binding */ __wbg_newnoargs_581967eacc0e2604),
/* harmony export */   __wbg_newwithu8clampedarrayandsh_e2b3fce567acd708: () => (/* binding */ __wbg_newwithu8clampedarrayandsh_e2b3fce567acd708),
/* harmony export */   __wbg_now_0cfdc90c97d0c24b: () => (/* binding */ __wbg_now_0cfdc90c97d0c24b),
/* harmony export */   __wbg_performance_2c295061c8b01e0b: () => (/* binding */ __wbg_performance_2c295061c8b01e0b),
/* harmony export */   __wbg_putImageData_f157d52a70a206d5: () => (/* binding */ __wbg_putImageData_f157d52a70a206d5),
/* harmony export */   __wbg_self_1ff1d729e9aae938: () => (/* binding */ __wbg_self_1ff1d729e9aae938),
/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),
/* harmony export */   __wbg_width_2931aaedd21f1fff: () => (/* binding */ __wbg_width_2931aaedd21f1fff),
/* harmony export */   __wbg_window_5f4faef6c12b79ec: () => (/* binding */ __wbg_window_5f4faef6c12b79ec),
/* harmony export */   __wbindgen_debug_string: () => (/* binding */ __wbindgen_debug_string),
/* harmony export */   __wbindgen_is_undefined: () => (/* binding */ __wbindgen_is_undefined),
/* harmony export */   __wbindgen_object_clone_ref: () => (/* binding */ __wbindgen_object_clone_ref),
/* harmony export */   __wbindgen_object_drop_ref: () => (/* binding */ __wbindgen_object_drop_ref),
/* harmony export */   __wbindgen_throw: () => (/* binding */ __wbindgen_throw),
/* harmony export */   draw_mandelbrot_set_rs: () => (/* binding */ draw_mandelbrot_set_rs),
/* harmony export */   generate_mandelbrot_set_rs: () => (/* binding */ generate_mandelbrot_set_rs),
/* harmony export */   init_func_rs: () => (/* binding */ init_func_rs)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
let wasm;
function __wbg_set_wasm(val) {
    wasm = val;
}


const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

let WASM_VECTOR_LEN = 0;

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/
function init_func_rs() {
    wasm.init_func_rs();
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
* @param {number} canvas_w
* @param {number} canvas_h
* @param {number} zoom
* @param {number} c_real
* @param {number} c_image
* @param {number} max_iter
* @param {number} lim_sup
* @param {string} mandelbrot_type
* @returns {Uint8Array}
*/
function generate_mandelbrot_set_rs(canvas_w, canvas_h, zoom, c_real, c_image, max_iter, lim_sup, mandelbrot_type) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(mandelbrot_type, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.generate_mandelbrot_set_rs(retptr, canvas_w, canvas_h, zoom, c_real, c_image, max_iter, lim_sup, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v2 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 1);
        return v2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
*/
function draw_mandelbrot_set_rs() {
    wasm.draw_mandelbrot_set_rs();
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}

let cachedUint8ClampedMemory0 = null;

function getUint8ClampedMemory0() {
    if (cachedUint8ClampedMemory0 === null || cachedUint8ClampedMemory0.byteLength === 0) {
        cachedUint8ClampedMemory0 = new Uint8ClampedArray(wasm.memory.buffer);
    }
    return cachedUint8ClampedMemory0;
}

function getClampedArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ClampedMemory0().subarray(ptr / 1, ptr / 1 + len);
}

function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

function __wbg_log_c801d84ad6d2e8a7(arg0, arg1) {
    console.log(getStringFromWasm0(arg0, arg1));
};

function __wbg_instanceof_Window_9029196b662bc42a(arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof Window;
    } catch {
        result = false;
    }
    const ret = result;
    return ret;
};

function __wbg_document_f7ace2b956f30a4f(arg0) {
    const ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_performance_2c295061c8b01e0b(arg0) {
    const ret = getObject(arg0).performance;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_getElementById_cc0e0d931b0d9a28(arg0, arg1, arg2) {
    const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
};

function __wbg_instanceof_CanvasRenderingContext2d_bc0a6635c96eca9b(arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof CanvasRenderingContext2D;
    } catch {
        result = false;
    }
    const ret = result;
    return ret;
};

function __wbg_putImageData_f157d52a70a206d5() { return handleError(function (arg0, arg1, arg2, arg3) {
    getObject(arg0).putImageData(getObject(arg1), arg2, arg3);
}, arguments) };

function __wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d(arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof HTMLCanvasElement;
    } catch {
        result = false;
    }
    const ret = result;
    return ret;
};

function __wbg_width_2931aaedd21f1fff(arg0) {
    const ret = getObject(arg0).width;
    return ret;
};

function __wbg_height_0d36fbbeb60b0661(arg0) {
    const ret = getObject(arg0).height;
    return ret;
};

function __wbg_getContext_7c5944ea807bf5d3() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

function __wbg_now_0cfdc90c97d0c24b(arg0) {
    const ret = getObject(arg0).now();
    return ret;
};

function __wbg_newwithu8clampedarrayandsh_e2b3fce567acd708() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = new ImageData(getClampedArrayU8FromWasm0(arg0, arg1), arg2 >>> 0, arg3 >>> 0);
    return addHeapObject(ret);
}, arguments) };

function __wbg_newnoargs_581967eacc0e2604(arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

function __wbg_call_cb65541d95d71282() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_self_1ff1d729e9aae938() { return handleError(function () {
    const ret = self.self;
    return addHeapObject(ret);
}, arguments) };

function __wbg_window_5f4faef6c12b79ec() { return handleError(function () {
    const ret = window.window;
    return addHeapObject(ret);
}, arguments) };

function __wbg_globalThis_1d39714405582d3c() { return handleError(function () {
    const ret = globalThis.globalThis;
    return addHeapObject(ret);
}, arguments) };

function __wbg_global_651f05c6a0944d1c() { return handleError(function () {
    const ret = __webpack_require__.g.global;
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_is_undefined(arg0) {
    const ret = getObject(arg0) === undefined;
    return ret;
};

function __wbindgen_object_clone_ref(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
};

function __wbindgen_debug_string(arg0, arg1) {
    const ret = debugString(getObject(arg1));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len1;
    getInt32Memory0()[arg0 / 4 + 0] = ptr1;
};

function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
.container {
  display: flex;
  justify-content: flex-start;
  margin-left: 0px;
  margin-top: 5px;
}

.box {
  flex: 1;
  /* 子要素を均等に伸縮させる */
  padding: 10px;
  border: 1px solid #000;
}`, "",{"version":3,"sources":["webpack://./src/index.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACI,aAAA;EACA,2BAAA;EACA,gBAAA;EACA,eAAA;AAEJ;;AACA;EACI,OAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;AAEJ","sourcesContent":[".container {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    margin-left: 0px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.box {\r\n    flex: 1;\r\n    /* 子要素を均等に伸縮させる */\r\n    padding: 10px;\r\n    border: 1px solid #000;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/footer.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/footer.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer {
  position: relative;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-collapse: collapse;
  border-top: 1px solid rgb(171, 196, 183);
  padding: 10px;
}
.footer__about-area {
  width: 100%;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
}
.footer__item {
  display: flex;
  justify-content: center;
  width: auto;
  margin: 10px;
}`, "",{"version":3,"sources":["webpack://./src/scss/footer.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,qBAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EAGA,yBAAA;EACA,wCAAA;EACA,aAAA;AAHJ;AAKI;EACI,WAAA;EACA,qBAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,oBAAA;AAHR;AAMI;EACI,aAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;AAJR","sourcesContent":["$footer-border-color: rgb(171, 196, 183);\r\n\r\n.footer {\r\n    position: relative;\r\n    display: -webkit-flex;\r\n    display: -moz-flex;\r\n    display: -ms-flex;\r\n    display: -o-flex;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n\r\n    // background-color: rgb(180, 180, 180);\r\n    border-collapse: collapse;\r\n    border-top: 1px solid $footer-border-color;\r\n    padding: 10px;\r\n\r\n    &__about-area {\r\n        width: 100%;\r\n        display: -webkit-flex;\r\n        display: -moz-flex;\r\n        display: -ms-flex;\r\n        display: -o-flex;\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        align-items: stretch;\r\n    }\r\n\r\n    &__item {\r\n        display: flex;\r\n        justify-content: center;\r\n        width: auto;\r\n        margin: 10px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/input.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/input.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.user-input-conteiner {
  width: 50%;
  margin: auto 0;
}

.user-input-row {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  align-items: flex-start;
  padding: 10px;
  border-bottom: 1px solid #f2f4f5;
}
.user-input-row__label {
  display: flex;
  align-items: center;
  width: 200px;
}

.user-input-row:last-child {
  border-bottom: none;
}`, "",{"version":3,"sources":["webpack://./src/scss/input.scss"],"names":[],"mappings":"AAAA;EACI,UAAA;EACA,cAAA;AACJ;;AAEA;EACI,qBAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,aAAA;EACA,gCAAA;AACJ;AACI;EACI,aAAA;EACA,mBAAA;EACA,YAAA;AACR;;AAGA;EACI,mBAAA;AAAJ","sourcesContent":[".user-input-conteiner {\r\n    width: 50%;\r\n    margin: auto 0;\r\n}\r\n\r\n.user-input-row {\r\n    display: -webkit-flex;\r\n    display: -moz-flex;\r\n    display: -ms-flex;\r\n    display: -o-flex;\r\n    display: flex;\r\n    align-items: flex-start;\r\n    padding: 10px;\r\n    border-bottom: 1px solid #f2f4f5;\r\n\r\n    &__label {\r\n        display: flex;\r\n        align-items: center;\r\n        width: 200px;\r\n    }\r\n}\r\n\r\n.user-input-row:last-child {\r\n    border-bottom: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scss/footer.scss":
/*!******************************!*\
  !*** ./src/scss/footer.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scss/input.scss":
/*!*****************************!*\
  !*** ./src/scss/input.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./input.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/input.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   click_render_button: () => (/* binding */ click_render_button)
/* harmony export */ });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _scss_input_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/input.scss */ "./src/scss/input.scss");
/* harmony import */ var _scss_footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/footer.scss */ "./src/scss/footer.scss");
/* harmony import */ var _pkg_mandelbrot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pkg/mandelbrot */ "../pkg/mandelbrot.js");
/* harmony import */ var _js_mandelbrot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/mandelbrot */ "./src/js/mandelbrot.js");
/* harmony import */ var _js_domops__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/domops */ "./src/js/domops.js");
/* harmony import */ var _js_consts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/consts */ "./src/js/consts.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pkg_mandelbrot__WEBPACK_IMPORTED_MODULE_3__]);
_pkg_mandelbrot__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


;







console.log("start loading wasm");
const mandelbrotRsMod = Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../pkg */ "../pkg/mandelbrot.js")).catch(console.error);
const mandelbrotJsMod = Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./js/mandelbrot */ "./src/js/mandelbrot.js")).catch(console.error);


// 配列を描画する関数
function draw(ctx, canvas_w, canvas_h, data) {
    let img = new ImageData(new Uint8ClampedArray(data), canvas_w, canvas_h);
    ctx.putImageData(img, 0, 0);
}

let sumGenerateTimeRs = 0.0;
let sumGenerateTimeJs = 0.0;

// wasmの読み込みは非同期で行われるので、Promiseで読み込み完了を待って、button要素のonClickに登録。
Promise.all([mandelbrotRsMod, mandelbrotJsMod]).then(async function () {
    console.log("finished loading wasm");
    (0,_pkg_mandelbrot__WEBPACK_IMPORTED_MODULE_3__.init_func_rs)();

    // イベント追加
    add_event_render();
    add_event_random_render();

    // クリック実行
    click_render_button();
});

// Renderのイベント追加
const add_event_render = () => {
    const renderBtn = document.getElementById(_js_consts__WEBPACK_IMPORTED_MODULE_6__.ID_RENDER);
    renderBtn.addEventListener("click", click_render_button);
}

// Random Renderのイベント追加
const add_event_random_render = () => {
    const btn = document.getElementById(_js_consts__WEBPACK_IMPORTED_MODULE_6__.ID_RANDOM_RENDER);
    btn.addEventListener("click", () => {
        _js_domops__WEBPACK_IMPORTED_MODULE_5__.random_set();
        click_render_button();
    });
}

// Renderボタンクリックのイベント
const click_render_button = () => {
    // ユーザ入力を取得
    const mandelbrot_type = _js_domops__WEBPACK_IMPORTED_MODULE_5__.get_mandelbrot_type_value();
    const c_real = _js_domops__WEBPACK_IMPORTED_MODULE_5__.get_mandelbrot_c_real_value();
    const c_image = _js_domops__WEBPACK_IMPORTED_MODULE_5__.get_mandelbrot_c_image_value();
    const n_limit = _js_domops__WEBPACK_IMPORTED_MODULE_5__.get_mandelbrot_n_limit_value();
    const lim_sup = _js_domops__WEBPACK_IMPORTED_MODULE_5__.get_mandelbrot_lim_sup_value();
    const zoom = _js_domops__WEBPACK_IMPORTED_MODULE_5__.get_mandelbrot_zoom_value();
    // wasmでマンデルブロ集合作成、wasmで描画
    // draw_mandelbrot_set_rs();

    // wasmでマンデルブロ集合作成、jsで描画
    let hybridResult = null;
    {
        let canvas = document.getElementById(_js_consts__WEBPACK_IMPORTED_MODULE_6__.ID_HYBRID_CANVAS);
        let context = canvas.getContext("2d");
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        const generateStartTime = Date.now();
        hybridResult = (0,_pkg_mandelbrot__WEBPACK_IMPORTED_MODULE_3__.generate_mandelbrot_set_rs)(canvasWidth, canvasHeight, zoom, c_real, c_image, n_limit, lim_sup, mandelbrot_type);
        const generateEndTime = Date.now();
        const generateTime = generateEndTime - generateStartTime;
        sumGenerateTimeRs += generateTime;

        draw(context, canvasWidth, canvasHeight, hybridResult);

        _js_domops__WEBPACK_IMPORTED_MODULE_5__.write_generate_time_rs(generateTime, sumGenerateTimeRs);
    }
    // jsでマンデルブロ集合作成、jsで描画
    let jsResult = null;
    {
        let canvas = document.getElementById(_js_consts__WEBPACK_IMPORTED_MODULE_6__.ID_JS_CANVAS);
        let context = canvas.getContext("2d");
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        const generateStartTime = Date.now();
        jsResult = (0,_js_mandelbrot__WEBPACK_IMPORTED_MODULE_4__.generateMandelbrotSet)(canvasWidth, canvasHeight, zoom, c_real, c_image, n_limit, lim_sup, mandelbrot_type);
        const generateEndTime = Date.now();
        const generateTime = generateEndTime - generateStartTime;
        sumGenerateTimeJs += generateTime;

        draw(context, canvasWidth, canvasHeight, jsResult);

        _js_domops__WEBPACK_IMPORTED_MODULE_5__.write_generate_time_js(generateTime, sumGenerateTimeJs);
    }
    {
        // 答えが等しいことを確認する
        // let isSame = true;
        // for (let i = 0; i < hybridResult.length; i++) {
        //     if (hybridResult[i] !== jsResult[i]) {
        //         console.log(i, hybridResult[i], jsResult[i]);
        //         isSame = false;
        //         break;
        //     }
        // }
        // console.log(`\n(hybridResult === jsResult):${isSame}`);
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./src/js/consts.js":
/*!**************************!*\
  !*** ./src/js/consts.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ID_C_IMAGE: () => (/* binding */ ID_C_IMAGE),
/* harmony export */   ID_C_REAL: () => (/* binding */ ID_C_REAL),
/* harmony export */   ID_GENERATE_TIME_JS: () => (/* binding */ ID_GENERATE_TIME_JS),
/* harmony export */   ID_GENERATE_TIME_RS: () => (/* binding */ ID_GENERATE_TIME_RS),
/* harmony export */   ID_HYBRID_CANVAS: () => (/* binding */ ID_HYBRID_CANVAS),
/* harmony export */   ID_JS_CANVAS: () => (/* binding */ ID_JS_CANVAS),
/* harmony export */   ID_LIM_SUP: () => (/* binding */ ID_LIM_SUP),
/* harmony export */   ID_MANDELBROT_TYPE: () => (/* binding */ ID_MANDELBROT_TYPE),
/* harmony export */   ID_N_LIMIT: () => (/* binding */ ID_N_LIMIT),
/* harmony export */   ID_RANDOM_RENDER: () => (/* binding */ ID_RANDOM_RENDER),
/* harmony export */   ID_RENDER: () => (/* binding */ ID_RENDER),
/* harmony export */   ID_SUM_GENERATE_TIME_JS: () => (/* binding */ ID_SUM_GENERATE_TIME_JS),
/* harmony export */   ID_SUM_GENERATE_TIME_RS: () => (/* binding */ ID_SUM_GENERATE_TIME_RS),
/* harmony export */   ID_ZOOM: () => (/* binding */ ID_ZOOM)
/* harmony export */ });


const ID_RENDER = "id-render";
const ID_RANDOM_RENDER = "id-random_render";
const ID_HYBRID_CANVAS = "id-canvas_hybrid";
const ID_JS_CANVAS = "id-canvas_js";
const ID_C_REAL = "id-mandelbrot_c_real";
const ID_C_IMAGE = "id-mandelbrot_c_image";
const ID_N_LIMIT = "id-mandelbrot_n_limit";
const ID_LIM_SUP = "id-mandelbrot_lim_sup";
const ID_ZOOM = "id-mandelbrot_zoom";
const ID_MANDELBROT_TYPE = "id-mandelbrot_type";
const ID_GENERATE_TIME_RS = "id-generate_time_rs";
const ID_SUM_GENERATE_TIME_RS = "id-sum_generate_time_rs";
const ID_GENERATE_TIME_JS = "id-generate_time_js";
const ID_SUM_GENERATE_TIME_JS = "id-sum_generate_time_js";


/***/ }),

/***/ "./src/js/domops.js":
/*!**************************!*\
  !*** ./src/js/domops.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get_mandelbrot_c_image_value: () => (/* binding */ get_mandelbrot_c_image_value),
/* harmony export */   get_mandelbrot_c_real_value: () => (/* binding */ get_mandelbrot_c_real_value),
/* harmony export */   get_mandelbrot_lim_sup_value: () => (/* binding */ get_mandelbrot_lim_sup_value),
/* harmony export */   get_mandelbrot_n_limit_value: () => (/* binding */ get_mandelbrot_n_limit_value),
/* harmony export */   get_mandelbrot_type_value: () => (/* binding */ get_mandelbrot_type_value),
/* harmony export */   get_mandelbrot_zoom_value: () => (/* binding */ get_mandelbrot_zoom_value),
/* harmony export */   random_set: () => (/* binding */ random_set),
/* harmony export */   write_generate_time_js: () => (/* binding */ write_generate_time_js),
/* harmony export */   write_generate_time_rs: () => (/* binding */ write_generate_time_rs)
/* harmony export */ });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/js/consts.js");


;

// マンデルブロ集合のc_realを取得する
const get_mandelbrot_c_real_value = () => {
    const input = document.getElementById(_consts__WEBPACK_IMPORTED_MODULE_0__.ID_C_REAL);
    const value = Number(input.value);
    if (value === NaN) return 0;
    return value;
}

// マンデルブロ集合のc_imageを取得する
const get_mandelbrot_c_image_value = () => {
    const input = document.getElementById(_consts__WEBPACK_IMPORTED_MODULE_0__.ID_C_IMAGE);
    const value = Number(input.value);
    if (value === NaN) return 0;
    return value;
}

// マンデルブロ集合のn_limitを取得する
const get_mandelbrot_n_limit_value = () => {
    const input = document.getElementById(_consts__WEBPACK_IMPORTED_MODULE_0__.ID_N_LIMIT);
    const value = Number(input.value);
    if (value === NaN) return 1;
    return value;
}

// マンデルブロ集合の発散条件の値を取得する
const get_mandelbrot_lim_sup_value = () => {
    const input = document.getElementById(_consts__WEBPACK_IMPORTED_MODULE_0__.ID_LIM_SUP);
    const value = Number(input.value);
    if (value === NaN) return 0;
    return value;
}

// マンデルブロ集合のzoomの値を取得する
const get_mandelbrot_zoom_value = () => {
    const input = document.getElementById(_consts__WEBPACK_IMPORTED_MODULE_0__.ID_ZOOM);
    const value = Number(input.value);
    if (value === NaN) return 0;
    return value;
}

// マンデルブロ集合の種類の値を取得する
const get_mandelbrot_type_value = () => {
    const selectElem = document.getElementById(_consts__WEBPACK_IMPORTED_MODULE_0__.ID_MANDELBROT_TYPE);
    const selectedValue = selectElem.value;
    return selectedValue;
}

// wasmの生成時間を表示する
const write_generate_time_rs = (generateTime, sumGenerateTime) => {
    {
        const span = document.getElementById(_consts__WEBPACK_IMPORTED_MODULE_0__.ID_GENERATE_TIME_RS);
        span.textContent = generateTime;
    }
    {
        const span = document.getElementById(_consts__WEBPACK_IMPORTED_MODULE_0__.ID_SUM_GENERATE_TIME_RS);
        span.textContent = sumGenerateTime;
    }
}

// jsの生成時間を表示する
const write_generate_time_js = (generateTime, sumGenerateTime) => {
    {
        const span = document.getElementById(_consts__WEBPACK_IMPORTED_MODULE_0__.ID_GENERATE_TIME_JS);
        span.textContent = generateTime;
    }
    {
        const span = document.getElementById(_consts__WEBPACK_IMPORTED_MODULE_0__.ID_SUM_GENERATE_TIME_JS);
        span.textContent = sumGenerateTime;
    }
}

// マンデルブロ集合のタイプをセットする
const set_mandelbrot_type_value = (value) => {
    const elem = document.getElementById(_consts__WEBPACK_IMPORTED_MODULE_0__.ID_MANDELBROT_TYPE);
    elem.value = value;
}

// マンデルブロ集合のRe(C)をセットする
const set_mandelbrot_c_real_value = (value) => {
    const elem = document.getElementById(_consts__WEBPACK_IMPORTED_MODULE_0__.ID_C_REAL);
    elem.value = value;
}

// マンデルブロ集合のIm(C)をセットする
const set_mandelbrot_c_image_value = (value) => {
    const elem = document.getElementById(_consts__WEBPACK_IMPORTED_MODULE_0__.ID_C_IMAGE);
    elem.value = value;
}

// マンデルブロ集合のzoomをセットする
const set_mandelbrot_zoom_value = (value) => {
    const elem = document.getElementById(_consts__WEBPACK_IMPORTED_MODULE_0__.ID_ZOOM);
    elem.value = value;
}

// マンデルブロ集合のn_limitをセットする
const set_mandelbrot_n_limit_value = (value) => {
    const elem = document.getElementById(_consts__WEBPACK_IMPORTED_MODULE_0__.ID_N_LIMIT);
    elem.value = value;
}

// マンデルブロ集合のlim_supをセットする
const set_mandelbrot_lim_sup_value = (value) => {
    const elem = document.getElementById(_consts__WEBPACK_IMPORTED_MODULE_0__.ID_LIM_SUP);
    elem.value = value;
}

// 設定値をランダムセットする
const RANDOM_SET = [
    {
        "type": "mandelbrot_type1",
        "c_real": "0.1120068359375",
        "c_image": "0.638021240234375",
        "zoom": "0.000322265625",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.746684956561724",
        "c_image": "-0.148407254991549",
        "zoom": "0.000304831581",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "0.235162322816695",
        "c_image": "-0.522569730223854",
        "zoom": "0.000274348423",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "0.431444931030272",
        "c_image": "-0.210285568237303",
        "zoom": "0.00000381469726",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.0123701408058467",
        "c_image": "-0.654285235802281",
        "zoom": "0.00000376335285",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.928145631790161",
        "c_image": "-0.241136137008666",
        "zoom": "0.000000514984131",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "0.399156056834167",
        "c_image": "-0.130409942025553",
        "zoom": "0.000000338701755",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "0.373888457566499",
        "c_image": "-0.596176167950033",
        "zoom": "0.0000000074505806",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-1.35814260283019",
        "c_image": "-0.0390835766633972",
        "zoom": "0.000000000139698386",
        "n_limit": "500",
        "lim_sup": "2",
    },
    // wikipedia
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.87591",
        "c_image": "0.20464",
        "zoom": "0.1",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.759856",
        "c_image": "0.125547",
        "zoom": "0.1",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.743030",
        "c_image": "0.126433",
        "zoom": "0.00005",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.7435669",
        "c_image": "0.1314023",
        "zoom": "0.00123",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.743645",
        "c_image": "0.13182733",
        "zoom": "0.000025",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.7436447860",
        "c_image": "0.1318252536",
        "zoom": "0.0000025",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-0.743645",
        "c_image": "0.1318252536",
        "zoom": "0.00000025",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type1",
        "c_real": "-1.5",
        "c_image": "0",
        "zoom": "0.001",
        "n_limit": "500",
        "lim_sup": "2",
    },
    {
        "type": "mandelbrot_type2",
        "c_real": "0.39",
        "c_image": "0.0005",
        "zoom": "0.00005",
        "n_limit": "500",
        "lim_sup": "2",
    },
];

let pre_index = -1;
const random_set = () => {
    const get_random_index = (length) => {
        // Math.random()は0以上1未満のランダムな浮動小数点数を返す
        // かなり適当な実装
        const r = Math.floor(Math.random() * 1000);
        return r % length;
    }

    // ランダムにインデックスを得る
    let rand_index = 0;
    while (1) {
        rand_index = get_random_index(RANDOM_SET.length);
        if (rand_index !== pre_index) {
            pre_index = rand_index;
            break;
        }
    }

    // デバッグ用
    // rand_index = RANDOM_SET.length - 1;

    // 設定値をセットする
    set_mandelbrot_type_value(RANDOM_SET[rand_index].type);
    set_mandelbrot_c_real_value(RANDOM_SET[rand_index].c_real);
    set_mandelbrot_c_image_value(RANDOM_SET[rand_index].c_image);
    set_mandelbrot_zoom_value(RANDOM_SET[rand_index].zoom);
    set_mandelbrot_n_limit_value(RANDOM_SET[rand_index].n_limit);
    set_mandelbrot_lim_sup_value(RANDOM_SET[rand_index].lim_sup);
}

/***/ }),

/***/ "./src/js/mandelbrot.js":
/*!******************************!*\
  !*** ./src/js/mandelbrot.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateMandelbrotSet: () => (/* binding */ generateMandelbrotSet),
/* harmony export */   logic: () => (/* binding */ logic)
/* harmony export */ });


const logic = {
    getNDiverged: function (c_real, c_image, n_limit, lim_sup) {
        let xn = 0.0;
        let yn = 0.0;
        for (let i = 1; i < n_limit; i++) {
            let x_next = xn * xn - yn * yn + c_real;
            let y_next = 2.0 * xn * yn + c_image;
            xn = x_next;
            yn = y_next;
            if (xn * xn + yn * yn > lim_sup * lim_sup) {
                return i;
            }
        }
        return n_limit;
    },
    generateMandelbrotSet: function (
        canvas_w,
        canvas_h,
        zoom,
        c_real,
        c_image,
        n_limit,
        lim_sup,
    ) {
        let y_min = -zoom;
        let y_max = zoom;
        let x_min = -zoom;
        let x_max = zoom;
        let data = [];
        for (let i = 0; i < canvas_h; i++) {
            let y = y_min + (y_max - y_min) * i / canvas_h;
            for (let j = 0; j < canvas_w; j++) {
                let x = x_min + (x_max - x_min) * j / canvas_w;
                let iter_index = this.getNDiverged(x + c_real, y + c_image, n_limit, lim_sup);
                let r_color = 255 - iter_index % 255;
                let g_color = iter_index % 16 * 17;
                let b_color = iter_index % 8 * 32; //8色に塗り分ける
                data.push(r_color); //R
                data.push(g_color); //G
                data.push(b_color); //B
                data.push(255);//A
            }
        }
        return data;
    }
}

// Z = Z^2 + C
function getNDiverged1(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * xn - yn * yn + c_real;
        let y_next = 2.0 * xn * yn + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = Z^3 + C
function getNDiverged2(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * (xn * xn - 3.0 * yn * yn) + c_real;
        let y_next = yn * (3.0 * xn * xn - yn * yn) + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = Z^4 + C
function getNDiverged3(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * xn * xn * xn - 6.0 * xn * xn * yn * yn + yn * yn * yn * yn + c_real;
        let y_next = 4.0 * xn * yn * (xn * xn - yn * yn) + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = Z^5 + C
function getNDiverged4(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * (xn * xn * xn * xn - 10.0 * xn * xn * yn * yn + 5.0 * yn * yn * yn * yn) + c_real;
        let y_next = yn * (5.0 * xn * xn * xn * xn - 10.0 * xn * xn * yn * yn + yn * yn * yn * yn) + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = (Z')^2 + C
function getNDiverged5(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * xn - yn * yn + c_real;
        let y_next = -2.0 * xn * yn + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = (Z')^3 + C
function getNDiverged6(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * (xn * xn - 3.0 * yn * yn) + c_real;
        let y_next = yn * (yn * yn - 3.0 * xn * xn) + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = (Z')^4 + C
function getNDiverged7(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * xn * xn * xn - 6.0 * xn * xn * yn * yn + yn * yn * yn * yn + c_real;
        let y_next = 4.0 * xn * yn * (yn * yn - xn * xn) + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = (Z')^5 + C
function getNDiverged8(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * (xn * xn * xn * xn - 10.0 * xn * xn * yn * yn + 5.0 * yn * yn * yn * yn) + c_real;
        let y_next = -yn * (5.0 * xn * xn * xn * xn - 10.0 * xn * xn * yn * yn + yn * yn * yn * yn) + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = Z^10 + C
function getNDiverged9(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * xn * xn * xn * xn * xn * xn * xn * xn * xn - 45.0 * xn * xn * xn * xn * xn * xn * xn * xn * yn * yn + 210.0 * xn * xn * xn * xn * xn * xn * yn * yn * yn * yn - 210.0 * xn * xn * xn * xn * yn * yn * yn * yn * yn * yn + 45.0 * xn * xn * yn * yn * yn * yn * yn * yn * yn * yn - yn * yn * yn * yn * yn * yn * yn * yn * yn * yn + c_real;
        let y_next = 10.0 * xn * xn * xn * xn * xn * xn * xn * xn * xn * yn - 120.0 * xn * xn * xn * xn * xn * xn * xn * yn * yn * yn + 252.0 * xn * xn * xn * xn * xn * yn * yn * yn * yn * yn - 120.0 * xn * xn * xn * yn * yn * yn * yn * yn * yn * yn + 10.0 * xn * yn * yn * yn * yn * yn * yn * yn * yn * yn + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

// Z = (Z')^10 + C
function getNDiverged10(c_real, c_image, n_limit, lim_sup) {
    let xn = 0.0;
    let yn = 0.0;
    for (let i = 1; i < n_limit; i++) {
        let x_next = xn * xn * xn * xn * xn * xn * xn * xn * xn * xn - 45.0 * xn * xn * xn * xn * xn * xn * xn * xn * yn * yn + 210.0 * xn * xn * xn * xn * xn * xn * yn * yn * yn * yn - 210.0 * xn * xn * xn * xn * yn * yn * yn * yn * yn * yn + 45.0 * xn * xn * yn * yn * yn * yn * yn * yn * yn * yn - yn * yn * yn * yn * yn * yn * yn * yn * yn * yn + c_real;
        let y_next = -10.0 * xn * xn * xn * xn * xn * xn * xn * xn * xn * yn + 120.0 * xn * xn * xn * xn * xn * xn * xn * yn * yn * yn - 252.0 * xn * xn * xn * xn * xn * yn * yn * yn * yn * yn + 120.0 * xn * xn * xn * yn * yn * yn * yn * yn * yn * yn - 10.0 * xn * yn * yn * yn * yn * yn * yn * yn * yn * yn + c_image;
        xn = x_next;
        yn = y_next;
        if (xn * xn + yn * yn > lim_sup * lim_sup) {
            return i;
        }
    }
    return n_limit;
}

const MANDELBROT_FUNC = {
    "mandelbrot_type1": getNDiverged1,
    "mandelbrot_type2": getNDiverged2,
    "mandelbrot_type3": getNDiverged3,
    "mandelbrot_type4": getNDiverged4,
    "mandelbrot_type5": getNDiverged5,
    "mandelbrot_type6": getNDiverged6,
    "mandelbrot_type7": getNDiverged7,
    "mandelbrot_type8": getNDiverged8,
    "mandelbrot_type9": getNDiverged9,
    "mandelbrot_type10": getNDiverged10,
};

function generateMandelbrotSet(
    canvas_w,
    canvas_h,
    zoom,
    c_real,
    c_image,
    n_limit,
    lim_sup,
    mandelbrot_type,
) {
    let y_min = -zoom;
    let y_max = zoom;
    let x_min = -zoom;
    let x_max = zoom;
    let data = [];
    for (let i = 0; i < canvas_h; i++) {
        let y = y_min + (y_max - y_min) * i / canvas_h;
        for (let j = 0; j < canvas_w; j++) {
            let x = x_min + (x_max - x_min) * j / canvas_w;
            let iter_index = MANDELBROT_FUNC[mandelbrot_type](x + c_real, y + c_image, n_limit, lim_sup);
            let r_color = 255 - iter_index % 255;
            let g_color = iter_index % 16 * 17;
            let b_color = iter_index % 8 * 32; //8色に塗り分ける
            data.push(r_color); //R
            data.push(g_color); //G
            data.push(b_color); //B
            data.push(255);//A
        }
    }
    return data;
}


/***/ }),

/***/ "../pkg/mandelbrot_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/mandelbrot_bg.wasm ***!
  \*********************************/
/***/ ((module, exports, __webpack_require__) => {

/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./mandelbrot_bg.js */ "../pkg/mandelbrot_bg.js");
module.exports = __webpack_require__.v(exports, module.id, "4a08073cb1ba404842f1", {
	"./mandelbrot_bg.js": {
		"__wbindgen_object_drop_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,
		"__wbg_log_c801d84ad6d2e8a7": WEBPACK_IMPORTED_MODULE_0.__wbg_log_c801d84ad6d2e8a7,
		"__wbg_instanceof_Window_9029196b662bc42a": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_Window_9029196b662bc42a,
		"__wbg_document_f7ace2b956f30a4f": WEBPACK_IMPORTED_MODULE_0.__wbg_document_f7ace2b956f30a4f,
		"__wbg_performance_2c295061c8b01e0b": WEBPACK_IMPORTED_MODULE_0.__wbg_performance_2c295061c8b01e0b,
		"__wbg_getElementById_cc0e0d931b0d9a28": WEBPACK_IMPORTED_MODULE_0.__wbg_getElementById_cc0e0d931b0d9a28,
		"__wbg_instanceof_CanvasRenderingContext2d_bc0a6635c96eca9b": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_CanvasRenderingContext2d_bc0a6635c96eca9b,
		"__wbg_putImageData_f157d52a70a206d5": WEBPACK_IMPORTED_MODULE_0.__wbg_putImageData_f157d52a70a206d5,
		"__wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d": WEBPACK_IMPORTED_MODULE_0.__wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d,
		"__wbg_width_2931aaedd21f1fff": WEBPACK_IMPORTED_MODULE_0.__wbg_width_2931aaedd21f1fff,
		"__wbg_height_0d36fbbeb60b0661": WEBPACK_IMPORTED_MODULE_0.__wbg_height_0d36fbbeb60b0661,
		"__wbg_getContext_7c5944ea807bf5d3": WEBPACK_IMPORTED_MODULE_0.__wbg_getContext_7c5944ea807bf5d3,
		"__wbg_now_0cfdc90c97d0c24b": WEBPACK_IMPORTED_MODULE_0.__wbg_now_0cfdc90c97d0c24b,
		"__wbg_newwithu8clampedarrayandsh_e2b3fce567acd708": WEBPACK_IMPORTED_MODULE_0.__wbg_newwithu8clampedarrayandsh_e2b3fce567acd708,
		"__wbg_newnoargs_581967eacc0e2604": WEBPACK_IMPORTED_MODULE_0.__wbg_newnoargs_581967eacc0e2604,
		"__wbg_call_cb65541d95d71282": WEBPACK_IMPORTED_MODULE_0.__wbg_call_cb65541d95d71282,
		"__wbg_self_1ff1d729e9aae938": WEBPACK_IMPORTED_MODULE_0.__wbg_self_1ff1d729e9aae938,
		"__wbg_window_5f4faef6c12b79ec": WEBPACK_IMPORTED_MODULE_0.__wbg_window_5f4faef6c12b79ec,
		"__wbg_globalThis_1d39714405582d3c": WEBPACK_IMPORTED_MODULE_0.__wbg_globalThis_1d39714405582d3c,
		"__wbg_global_651f05c6a0944d1c": WEBPACK_IMPORTED_MODULE_0.__wbg_global_651f05c6a0944d1c,
		"__wbindgen_is_undefined": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,
		"__wbindgen_object_clone_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_clone_ref,
		"__wbindgen_debug_string": WEBPACK_IMPORTED_MODULE_0.__wbindgen_debug_string,
		"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw
	}
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx1REFBeUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyw4Q0FBZ0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywrQ0FBaUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyw0Q0FBYztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLCtDQUFpQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLCtDQUFpQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqU1k7QUFDWjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGFBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0Esd0JBQXdCLGNBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0MsZ0NBQWdDO0FBQ2hDLGdDQUFnQztBQUNoQyxnQ0FBZ0M7QUFDaEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FzbS12cy1qcy1tYW5kZWxicm90Ly4uL3BrZy9tYW5kZWxicm90LmpzIiwid2VicGFjazovL3dhc20tdnMtanMtbWFuZGVsYnJvdC8uLi9wa2cvbWFuZGVsYnJvdF9iZy5qcyIsIndlYnBhY2s6Ly93YXNtLXZzLWpzLW1hbmRlbGJyb3QvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly93YXNtLXZzLWpzLW1hbmRlbGJyb3QvLi9zcmMvc2Nzcy9mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly93YXNtLXZzLWpzLW1hbmRlbGJyb3QvLi9zcmMvc2Nzcy9pbnB1dC5zY3NzIiwid2VicGFjazovL3dhc20tdnMtanMtbWFuZGVsYnJvdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2FzbS12cy1qcy1tYW5kZWxicm90Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2FzbS12cy1qcy1tYW5kZWxicm90Ly4vc3JjL2luZGV4LnNjc3M/NzIyMyIsIndlYnBhY2s6Ly93YXNtLXZzLWpzLW1hbmRlbGJyb3QvLi9zcmMvc2Nzcy9mb290ZXIuc2Nzcz9lYWM5Iiwid2VicGFjazovL3dhc20tdnMtanMtbWFuZGVsYnJvdC8uL3NyYy9zY3NzL2lucHV0LnNjc3M/ZTVmYiIsIndlYnBhY2s6Ly93YXNtLXZzLWpzLW1hbmRlbGJyb3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2FzbS12cy1qcy1tYW5kZWxicm90Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93YXNtLXZzLWpzLW1hbmRlbGJyb3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2FzbS12cy1qcy1tYW5kZWxicm90Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dhc20tdnMtanMtbWFuZGVsYnJvdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dhc20tdnMtanMtbWFuZGVsYnJvdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dhc20tdnMtanMtbWFuZGVsYnJvdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93YXNtLXZzLWpzLW1hbmRlbGJyb3QvLi9zcmMvanMvY29uc3RzLmpzIiwid2VicGFjazovL3dhc20tdnMtanMtbWFuZGVsYnJvdC8uL3NyYy9qcy9kb21vcHMuanMiLCJ3ZWJwYWNrOi8vd2FzbS12cy1qcy1tYW5kZWxicm90Ly4vc3JjL2pzL21hbmRlbGJyb3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tIFwiLi9tYW5kZWxicm90X2JnLndhc21cIjtcbmltcG9ydCB7IF9fd2JnX3NldF93YXNtIH0gZnJvbSBcIi4vbWFuZGVsYnJvdF9iZy5qc1wiO1xuX193Ymdfc2V0X3dhc20od2FzbSk7XG5leHBvcnQgKiBmcm9tIFwiLi9tYW5kZWxicm90X2JnLmpzXCI7XG4iLCJsZXQgd2FzbTtcbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfd2FzbSh2YWwpIHtcbiAgICB3YXNtID0gdmFsO1xufVxuXG5cbmNvbnN0IGhlYXAgPSBuZXcgQXJyYXkoMTI4KS5maWxsKHVuZGVmaW5lZCk7XG5cbmhlYXAucHVzaCh1bmRlZmluZWQsIG51bGwsIHRydWUsIGZhbHNlKTtcblxuZnVuY3Rpb24gZ2V0T2JqZWN0KGlkeCkgeyByZXR1cm4gaGVhcFtpZHhdOyB9XG5cbmxldCBoZWFwX25leHQgPSBoZWFwLmxlbmd0aDtcblxuZnVuY3Rpb24gZHJvcE9iamVjdChpZHgpIHtcbiAgICBpZiAoaWR4IDwgMTMyKSByZXR1cm47XG4gICAgaGVhcFtpZHhdID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGlkeDtcbn1cblxuZnVuY3Rpb24gdGFrZU9iamVjdChpZHgpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoaWR4KTtcbiAgICBkcm9wT2JqZWN0KGlkeCk7XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gYWRkSGVhcE9iamVjdChvYmopIHtcbiAgICBpZiAoaGVhcF9uZXh0ID09PSBoZWFwLmxlbmd0aCkgaGVhcC5wdXNoKGhlYXAubGVuZ3RoICsgMSk7XG4gICAgY29uc3QgaWR4ID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGhlYXBbaWR4XTtcblxuICAgIGhlYXBbaWR4XSA9IG9iajtcbiAgICByZXR1cm4gaWR4O1xufVxuXG5mdW5jdGlvbiBkZWJ1Z1N0cmluZyh2YWwpIHtcbiAgICAvLyBwcmltaXRpdmUgdHlwZXNcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcbiAgICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdib29sZWFuJyB8fCB2YWwgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gIGAke3ZhbH1gO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYFwiJHt2YWx9XCJgO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PSAnc3ltYm9sJykge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHZhbC5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAnU3ltYm9sJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgU3ltYm9sKCR7ZGVzY3JpcHRpb259KWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gdmFsLm5hbWU7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyAmJiBuYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBgRnVuY3Rpb24oJHtuYW1lfSlgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdGdW5jdGlvbic7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gb2JqZWN0c1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdmFsLmxlbmd0aDtcbiAgICAgICAgbGV0IGRlYnVnID0gJ1snO1xuICAgICAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGVidWcgKz0gZGVidWdTdHJpbmcodmFsWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlYnVnICs9ICcsICcgKyBkZWJ1Z1N0cmluZyh2YWxbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnICs9ICddJztcbiAgICAgICAgcmV0dXJuIGRlYnVnO1xuICAgIH1cbiAgICAvLyBUZXN0IGZvciBidWlsdC1pblxuICAgIGNvbnN0IGJ1aWx0SW5NYXRjaGVzID0gL1xcW29iamVjdCAoW15cXF1dKylcXF0vLmV4ZWModG9TdHJpbmcuY2FsbCh2YWwpKTtcbiAgICBsZXQgY2xhc3NOYW1lO1xuICAgIGlmIChidWlsdEluTWF0Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IGJ1aWx0SW5NYXRjaGVzWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZhaWxlZCB0byBtYXRjaCB0aGUgc3RhbmRhcmQgJ1tvYmplY3QgQ2xhc3NOYW1lXSdcbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSA9PSAnT2JqZWN0Jykge1xuICAgICAgICAvLyB3ZSdyZSBhIHVzZXIgZGVmaW5lZCBjbGFzcyBvciBPYmplY3RcbiAgICAgICAgLy8gSlNPTi5zdHJpbmdpZnkgYXZvaWRzIHByb2JsZW1zIHdpdGggY3ljbGVzLCBhbmQgaXMgZ2VuZXJhbGx5IG11Y2hcbiAgICAgICAgLy8gZWFzaWVyIHRoYW4gbG9vcGluZyB0aHJvdWdoIG93blByb3BlcnRpZXMgb2YgYHZhbGAuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gJ09iamVjdCgnICsgSlNPTi5zdHJpbmdpZnkodmFsKSArICcpJztcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgcmV0dXJuICdPYmplY3QnO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGVycm9yc1xuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICByZXR1cm4gYCR7dmFsLm5hbWV9OiAke3ZhbC5tZXNzYWdlfVxcbiR7dmFsLnN0YWNrfWA7XG4gICAgfVxuICAgIC8vIFRPRE8gd2UgY291bGQgdGVzdCBmb3IgbW9yZSB0aGluZ3MgaGVyZSwgbGlrZSBgU2V0YHMgYW5kIGBNYXBgcy5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxubGV0IGNhY2hlZFVpbnQ4TWVtb3J5MCA9IG51bGw7XG5cbmZ1bmN0aW9uIGdldFVpbnQ4TWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVkVWludDhNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZFVpbnQ4TWVtb3J5MC5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNhY2hlZFVpbnQ4TWVtb3J5MCA9IG5ldyBVaW50OEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRVaW50OE1lbW9yeTA7XG59XG5cbmNvbnN0IGxUZXh0RW5jb2RlciA9IHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dEVuY29kZXIgOiBUZXh0RW5jb2RlcjtcblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IGxUZXh0RW5jb2RlcigndXRmLTgnKTtcblxuY29uc3QgZW5jb2RlU3RyaW5nID0gKHR5cGVvZiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvID09PSAnZnVuY3Rpb24nXG4gICAgPyBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8oYXJnLCB2aWV3KTtcbn1cbiAgICA6IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICB2aWV3LnNldChidWYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlYWQ6IGFyZy5sZW5ndGgsXG4gICAgICAgIHdyaXR0ZW46IGJ1Zi5sZW5ndGhcbiAgICB9O1xufSk7XG5cbmZ1bmN0aW9uIHBhc3NTdHJpbmdUb1dhc20wKGFyZywgbWFsbG9jLCByZWFsbG9jKSB7XG5cbiAgICBpZiAocmVhbGxvYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgICAgICBjb25zdCBwdHIgPSBtYWxsb2MoYnVmLmxlbmd0aCwgMSkgPj4+IDA7XG4gICAgICAgIGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgYnVmLmxlbmd0aCkuc2V0KGJ1Zik7XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgbGV0IGxlbiA9IGFyZy5sZW5ndGg7XG4gICAgbGV0IHB0ciA9IG1hbGxvYyhsZW4sIDEpID4+PiAwO1xuXG4gICAgY29uc3QgbWVtID0gZ2V0VWludDhNZW1vcnkwKCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgIGZvciAoOyBvZmZzZXQgPCBsZW47IG9mZnNldCsrKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBhcmcuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICBpZiAoY29kZSA+IDB4N0YpIGJyZWFrO1xuICAgICAgICBtZW1bcHRyICsgb2Zmc2V0XSA9IGNvZGU7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldCAhPT0gbGVuKSB7XG4gICAgICAgIGlmIChvZmZzZXQgIT09IDApIHtcbiAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZShvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIGxlbiA9IG9mZnNldCArIGFyZy5sZW5ndGggKiAzLCAxKSA+Pj4gMDtcbiAgICAgICAgY29uc3QgdmlldyA9IGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciArIG9mZnNldCwgcHRyICsgbGVuKTtcbiAgICAgICAgY29uc3QgcmV0ID0gZW5jb2RlU3RyaW5nKGFyZywgdmlldyk7XG5cbiAgICAgICAgb2Zmc2V0ICs9IHJldC53cml0dGVuO1xuICAgIH1cblxuICAgIFdBU01fVkVDVE9SX0xFTiA9IG9mZnNldDtcbiAgICByZXR1cm4gcHRyO1xufVxuXG5sZXQgY2FjaGVkSW50MzJNZW1vcnkwID0gbnVsbDtcblxuZnVuY3Rpb24gZ2V0SW50MzJNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWRJbnQzMk1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVkSW50MzJNZW1vcnkwLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgY2FjaGVkSW50MzJNZW1vcnkwID0gbmV3IEludDMyQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZEludDMyTWVtb3J5MDtcbn1cblxuY29uc3QgbFRleHREZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RGVjb2RlciA6IFRleHREZWNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgbFRleHREZWNvZGVyKCd1dGYtOCcsIHsgaWdub3JlQk9NOiB0cnVlLCBmYXRhbDogdHJ1ZSB9KTtcblxuY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKCk7XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHB0ciA9IHB0ciA+Pj4gMDtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgbGVuKSk7XG59XG4vKipcbiovXG5leHBvcnQgZnVuY3Rpb24gaW5pdF9mdW5jX3JzKCkge1xuICAgIHdhc20uaW5pdF9mdW5jX3JzKCk7XG59XG5cbmZ1bmN0aW9uIGdldEFycmF5VThGcm9tV2FzbTAocHRyLCBsZW4pIHtcbiAgICBwdHIgPSBwdHIgPj4+IDA7XG4gICAgcmV0dXJuIGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciAvIDEsIHB0ciAvIDEgKyBsZW4pO1xufVxuLyoqXG4qIEBwYXJhbSB7bnVtYmVyfSBjYW52YXNfd1xuKiBAcGFyYW0ge251bWJlcn0gY2FudmFzX2hcbiogQHBhcmFtIHtudW1iZXJ9IHpvb21cbiogQHBhcmFtIHtudW1iZXJ9IGNfcmVhbFxuKiBAcGFyYW0ge251bWJlcn0gY19pbWFnZVxuKiBAcGFyYW0ge251bWJlcn0gbWF4X2l0ZXJcbiogQHBhcmFtIHtudW1iZXJ9IGxpbV9zdXBcbiogQHBhcmFtIHtzdHJpbmd9IG1hbmRlbGJyb3RfdHlwZVxuKiBAcmV0dXJucyB7VWludDhBcnJheX1cbiovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVfbWFuZGVsYnJvdF9zZXRfcnMoY2FudmFzX3csIGNhbnZhc19oLCB6b29tLCBjX3JlYWwsIGNfaW1hZ2UsIG1heF9pdGVyLCBsaW1fc3VwLCBtYW5kZWxicm90X3R5cGUpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXRwdHIgPSB3YXNtLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoLTE2KTtcbiAgICAgICAgY29uc3QgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKG1hbmRlbGJyb3RfdHlwZSwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgICAgICBjb25zdCBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgICAgICB3YXNtLmdlbmVyYXRlX21hbmRlbGJyb3Rfc2V0X3JzKHJldHB0ciwgY2FudmFzX3csIGNhbnZhc19oLCB6b29tLCBjX3JlYWwsIGNfaW1hZ2UsIG1heF9pdGVyLCBsaW1fc3VwLCBwdHIwLCBsZW4wKTtcbiAgICAgICAgdmFyIHIwID0gZ2V0SW50MzJNZW1vcnkwKClbcmV0cHRyIC8gNCArIDBdO1xuICAgICAgICB2YXIgcjEgPSBnZXRJbnQzMk1lbW9yeTAoKVtyZXRwdHIgLyA0ICsgMV07XG4gICAgICAgIHZhciB2MiA9IGdldEFycmF5VThGcm9tV2FzbTAocjAsIHIxKS5zbGljZSgpO1xuICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShyMCwgcjEgKiAxKTtcbiAgICAgICAgcmV0dXJuIHYyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcigxNik7XG4gICAgfVxufVxuXG4vKipcbiovXG5leHBvcnQgZnVuY3Rpb24gZHJhd19tYW5kZWxicm90X3NldF9ycygpIHtcbiAgICB3YXNtLmRyYXdfbWFuZGVsYnJvdF9zZXRfcnMoKTtcbn1cblxuZnVuY3Rpb24gaXNMaWtlTm9uZSh4KSB7XG4gICAgcmV0dXJuIHggPT09IHVuZGVmaW5lZCB8fCB4ID09PSBudWxsO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihmLCBhcmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZXhuX3N0b3JlKGFkZEhlYXBPYmplY3QoZSkpO1xuICAgIH1cbn1cblxubGV0IGNhY2hlZFVpbnQ4Q2xhbXBlZE1lbW9yeTAgPSBudWxsO1xuXG5mdW5jdGlvbiBnZXRVaW50OENsYW1wZWRNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWRVaW50OENsYW1wZWRNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZFVpbnQ4Q2xhbXBlZE1lbW9yeTAuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYWNoZWRVaW50OENsYW1wZWRNZW1vcnkwID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRVaW50OENsYW1wZWRNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBnZXRDbGFtcGVkQXJyYXlVOEZyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHB0ciA9IHB0ciA+Pj4gMDtcbiAgICByZXR1cm4gZ2V0VWludDhDbGFtcGVkTWVtb3J5MCgpLnN1YmFycmF5KHB0ciAvIDEsIHB0ciAvIDEgKyBsZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYoYXJnMCkge1xuICAgIHRha2VPYmplY3QoYXJnMCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbG9nX2M4MDFkODRhZDZkMmU4YTcoYXJnMCwgYXJnMSkge1xuICAgIGNvbnNvbGUubG9nKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfaW5zdGFuY2VvZl9XaW5kb3dfOTAyOTE5NmI2NjJiYzQyYShhcmcwKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBnZXRPYmplY3QoYXJnMCkgaW5zdGFuY2VvZiBXaW5kb3c7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19kb2N1bWVudF9mN2FjZTJiOTU2ZjMwYTRmKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuZG9jdW1lbnQ7XG4gICAgcmV0dXJuIGlzTGlrZU5vbmUocmV0KSA/IDAgOiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfcGVyZm9ybWFuY2VfMmMyOTUwNjFjOGIwMWUwYihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnBlcmZvcm1hbmNlO1xuICAgIHJldHVybiBpc0xpa2VOb25lKHJldCkgPyAwIDogYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2dldEVsZW1lbnRCeUlkX2NjMGUwZDkzMWIwZDlhMjgoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5nZXRFbGVtZW50QnlJZChnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMSwgYXJnMikpO1xuICAgIHJldHVybiBpc0xpa2VOb25lKHJldCkgPyAwIDogYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2luc3RhbmNlb2ZfQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJkX2JjMGE2NjM1Yzk2ZWNhOWIoYXJnMCkge1xuICAgIGxldCByZXN1bHQ7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gZ2V0T2JqZWN0KGFyZzApIGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfcHV0SW1hZ2VEYXRhX2YxNTdkNTJhNzBhMjA2ZDUoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIGdldE9iamVjdChhcmcwKS5wdXRJbWFnZURhdGEoZ2V0T2JqZWN0KGFyZzEpLCBhcmcyLCBhcmczKTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2luc3RhbmNlb2ZfSHRtbENhbnZhc0VsZW1lbnRfZGE1ZjllZmEwNjg4Y2Y2ZChhcmcwKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBnZXRPYmplY3QoYXJnMCkgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3dpZHRoXzI5MzFhYWVkZDIxZjFmZmYoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS53aWR0aDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2hlaWdodF8wZDM2ZmJiZWI2MGIwNjYxKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuaGVpZ2h0O1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2V0Q29udGV4dF83YzU5NDRlYTgwN2JmNWQzKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuZ2V0Q29udGV4dChnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMSwgYXJnMikpO1xuICAgIHJldHVybiBpc0xpa2VOb25lKHJldCkgPyAwIDogYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfbm93XzBjZmRjOTBjOTdkMGMyNGIoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5ub3coKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld3dpdGh1OGNsYW1wZWRhcnJheWFuZHNoX2UyYjNmY2U1NjdhY2Q3MDgoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIGNvbnN0IHJldCA9IG5ldyBJbWFnZURhdGEoZ2V0Q2xhbXBlZEFycmF5VThGcm9tV2FzbTAoYXJnMCwgYXJnMSksIGFyZzIgPj4+IDAsIGFyZzMgPj4+IDApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXdub2FyZ3NfNTgxOTY3ZWFjYzBlMjYwNChhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEZ1bmN0aW9uKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19jYWxsX2NiNjU1NDFkOTVkNzEyODIoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5jYWxsKGdldE9iamVjdChhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3NlbGZfMWZmMWQ3MjllOWFhZTkzOCgpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXQgPSBzZWxmLnNlbGY7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3dpbmRvd181ZjRmYWVmNmMxMmI3OWVjKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJldCA9IHdpbmRvdy53aW5kb3c7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2dsb2JhbFRoaXNfMWQzOTcxNDQwNTU4MmQzYygpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXQgPSBnbG9iYWxUaGlzLmdsb2JhbFRoaXM7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2dsb2JhbF82NTFmMDVjNmEwOTQ0ZDFjKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJldCA9IGdsb2JhbC5nbG9iYWw7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5faXNfdW5kZWZpbmVkKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkgPT09IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fb2JqZWN0X2Nsb25lX3JlZihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9kZWJ1Z19zdHJpbmcoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGRlYnVnU3RyaW5nKGdldE9iamVjdChhcmcxKSk7XG4gICAgY29uc3QgcHRyMSA9IHBhc3NTdHJpbmdUb1dhc20wKHJldCwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgIGNvbnN0IGxlbjEgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgZ2V0SW50MzJNZW1vcnkwKClbYXJnMCAvIDQgKyAxXSA9IGxlbjE7XG4gICAgZ2V0SW50MzJNZW1vcnkwKClbYXJnMCAvIDQgKyAwXSA9IHB0cjE7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl90aHJvdyhhcmcwLCBhcmcxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG59O1xuXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYm94IHtcbiAgZmxleDogMTtcbiAgLyog5a2Q6KaB57Sg44KS5Z2H562J44Gr5Ly457iu44GV44Gb44KLICovXG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFDQTtFQUNJLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJveCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIC8qIOWtkOimgee0oOOCkuWdh+etieOBq+S8uOe4ruOBleOBm+OCiyAqL1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5mb290ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgZGlzcGxheTogLW8tZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTcxLCAxOTYsIDE4Myk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uZm9vdGVyX19hYm91dC1hcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgZGlzcGxheTogLW8tZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuLmZvb3Rlcl9faXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiAxMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvZm9vdGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFHQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtBQUhKO0FBS0k7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBSFI7QUFNSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGZvb3Rlci1ib3JkZXItY29sb3I6IHJnYigxNzEsIDE5NiwgMTgzKTtcXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IC1vLWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgwLCAxODAsIDE4MCk7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkZm9vdGVyLWJvcmRlci1jb2xvcjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG5cXHJcXG4gICAgJl9fYWJvdXQtYXJlYSB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IC1tb3otZmxleDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4O1xcclxcbiAgICAgICAgZGlzcGxheTogLW8tZmxleDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19pdGVtIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnVzZXItaW5wdXQtY29udGVpbmVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG5cbi51c2VyLWlucHV0LXJvdyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleDtcbiAgZGlzcGxheTogLW8tZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmNGY1O1xufVxuLnVzZXItaW5wdXQtcm93X19sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnVzZXItaW5wdXQtcm93Omxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvaW5wdXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBR0E7RUFDSSxtQkFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi51c2VyLWlucHV0LWNvbnRlaW5lciB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIG1hcmdpbjogYXV0byAwO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1pbnB1dC1yb3cge1xcclxcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IC1tb3otZmxleDtcXHJcXG4gICAgZGlzcGxheTogLW1zLWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IC1vLWZsZXg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjRmNTtcXHJcXG5cXHJcXG4gICAgJl9fbGFiZWwge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnVzZXItaW5wdXQtcm93Omxhc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2lucHV0LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbnB1dC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIndXNlIHN0cmljdCdcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3Njc3MvaW5wdXQuc2Nzcyc7XG5pbXBvcnQgJy4vc2Nzcy9mb290ZXIuc2Nzcyc7XG5pbXBvcnQgeyBpbml0X2Z1bmNfcnMsIGdlbmVyYXRlX21hbmRlbGJyb3Rfc2V0X3JzIH0gZnJvbSBcIi4uLy4uL3BrZy9tYW5kZWxicm90XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU1hbmRlbGJyb3RTZXQgfSBmcm9tIFwiLi9qcy9tYW5kZWxicm90XCI7XG5pbXBvcnQgKiBhcyBkb21vcHMgZnJvbSBcIi4vanMvZG9tb3BzXCI7XG5pbXBvcnQgKiBhcyBjb25zdHMgZnJvbSBcIi4vanMvY29uc3RzXCI7XG5cbmNvbnNvbGUubG9nKFwic3RhcnQgbG9hZGluZyB3YXNtXCIpO1xuY29uc3QgbWFuZGVsYnJvdFJzTW9kID0gaW1wb3J0KFwiLi4vLi4vcGtnXCIpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuY29uc3QgbWFuZGVsYnJvdEpzTW9kID0gaW1wb3J0KFwiLi9qcy9tYW5kZWxicm90XCIpLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuXG5cbi8vIOmFjeWIl+OCkuaPj+eUu+OBmeOCi+mWouaVsFxuZnVuY3Rpb24gZHJhdyhjdHgsIGNhbnZhc193LCBjYW52YXNfaCwgZGF0YSkge1xuICAgIGxldCBpbWcgPSBuZXcgSW1hZ2VEYXRhKG5ldyBVaW50OENsYW1wZWRBcnJheShkYXRhKSwgY2FudmFzX3csIGNhbnZhc19oKTtcbiAgICBjdHgucHV0SW1hZ2VEYXRhKGltZywgMCwgMCk7XG59XG5cbmxldCBzdW1HZW5lcmF0ZVRpbWVScyA9IDAuMDtcbmxldCBzdW1HZW5lcmF0ZVRpbWVKcyA9IDAuMDtcblxuLy8gd2FzbeOBruiqreOBv+i+vOOBv+OBr+mdnuWQjOacn+OBp+ihjOOCj+OCjOOCi+OBruOBp+OAgVByb21pc2Xjgafoqq3jgb/ovrzjgb/lrozkuobjgpLlvoXjgaPjgabjgIFidXR0b27opoHntKDjga5vbkNsaWNr44Gr55m76Yyy44CCXG5Qcm9taXNlLmFsbChbbWFuZGVsYnJvdFJzTW9kLCBtYW5kZWxicm90SnNNb2RdKS50aGVuKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcImZpbmlzaGVkIGxvYWRpbmcgd2FzbVwiKTtcbiAgICBpbml0X2Z1bmNfcnMoKTtcblxuICAgIC8vIOOCpOODmeODs+ODiOi/veWKoFxuICAgIGFkZF9ldmVudF9yZW5kZXIoKTtcbiAgICBhZGRfZXZlbnRfcmFuZG9tX3JlbmRlcigpO1xuXG4gICAgLy8g44Kv44Oq44OD44Kv5a6f6KGMXG4gICAgY2xpY2tfcmVuZGVyX2J1dHRvbigpO1xufSk7XG5cbi8vIFJlbmRlcuOBruOCpOODmeODs+ODiOi/veWKoFxuY29uc3QgYWRkX2V2ZW50X3JlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCByZW5kZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25zdHMuSURfUkVOREVSKTtcbiAgICByZW5kZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrX3JlbmRlcl9idXR0b24pO1xufVxuXG4vLyBSYW5kb20gUmVuZGVy44Gu44Kk44OZ44Oz44OI6L+95YqgXG5jb25zdCBhZGRfZXZlbnRfcmFuZG9tX3JlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25zdHMuSURfUkFORE9NX1JFTkRFUik7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRvbW9wcy5yYW5kb21fc2V0KCk7XG4gICAgICAgIGNsaWNrX3JlbmRlcl9idXR0b24oKTtcbiAgICB9KTtcbn1cblxuLy8gUmVuZGVy44Oc44K/44Oz44Kv44Oq44OD44Kv44Gu44Kk44OZ44Oz44OIXG5leHBvcnQgY29uc3QgY2xpY2tfcmVuZGVyX2J1dHRvbiA9ICgpID0+IHtcbiAgICAvLyDjg6bjg7zjgrblhaXlipvjgpLlj5blvpdcbiAgICBjb25zdCBtYW5kZWxicm90X3R5cGUgPSBkb21vcHMuZ2V0X21hbmRlbGJyb3RfdHlwZV92YWx1ZSgpO1xuICAgIGNvbnN0IGNfcmVhbCA9IGRvbW9wcy5nZXRfbWFuZGVsYnJvdF9jX3JlYWxfdmFsdWUoKTtcbiAgICBjb25zdCBjX2ltYWdlID0gZG9tb3BzLmdldF9tYW5kZWxicm90X2NfaW1hZ2VfdmFsdWUoKTtcbiAgICBjb25zdCBuX2xpbWl0ID0gZG9tb3BzLmdldF9tYW5kZWxicm90X25fbGltaXRfdmFsdWUoKTtcbiAgICBjb25zdCBsaW1fc3VwID0gZG9tb3BzLmdldF9tYW5kZWxicm90X2xpbV9zdXBfdmFsdWUoKTtcbiAgICBjb25zdCB6b29tID0gZG9tb3BzLmdldF9tYW5kZWxicm90X3pvb21fdmFsdWUoKTtcbiAgICAvLyB3YXNt44Gn44Oe44Oz44OH44Or44OW44Ot6ZuG5ZCI5L2c5oiQ44CBd2FzbeOBp+aPj+eUu1xuICAgIC8vIGRyYXdfbWFuZGVsYnJvdF9zZXRfcnMoKTtcblxuICAgIC8vIHdhc23jgafjg57jg7Pjg4fjg6vjg5bjg63pm4blkIjkvZzmiJDjgIFqc+OBp+aPj+eUu1xuICAgIGxldCBoeWJyaWRSZXN1bHQgPSBudWxsO1xuICAgIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9IWUJSSURfQ0FOVkFTKTtcbiAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjb25zdCBjYW52YXNXaWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblxuICAgICAgICBjb25zdCBnZW5lcmF0ZVN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGh5YnJpZFJlc3VsdCA9IGdlbmVyYXRlX21hbmRlbGJyb3Rfc2V0X3JzKGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIHpvb20sIGNfcmVhbCwgY19pbWFnZSwgbl9saW1pdCwgbGltX3N1cCwgbWFuZGVsYnJvdF90eXBlKTtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVFbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVUaW1lID0gZ2VuZXJhdGVFbmRUaW1lIC0gZ2VuZXJhdGVTdGFydFRpbWU7XG4gICAgICAgIHN1bUdlbmVyYXRlVGltZVJzICs9IGdlbmVyYXRlVGltZTtcblxuICAgICAgICBkcmF3KGNvbnRleHQsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIGh5YnJpZFJlc3VsdCk7XG5cbiAgICAgICAgZG9tb3BzLndyaXRlX2dlbmVyYXRlX3RpbWVfcnMoZ2VuZXJhdGVUaW1lLCBzdW1HZW5lcmF0ZVRpbWVScyk7XG4gICAgfVxuICAgIC8vIGpz44Gn44Oe44Oz44OH44Or44OW44Ot6ZuG5ZCI5L2c5oiQ44CBanPjgafmj4/nlLtcbiAgICBsZXQganNSZXN1bHQgPSBudWxsO1xuICAgIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9KU19DQU5WQVMpO1xuICAgICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgICAgIGNvbnN0IGdlbmVyYXRlU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAganNSZXN1bHQgPSBnZW5lcmF0ZU1hbmRlbGJyb3RTZXQoY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgem9vbSwgY19yZWFsLCBjX2ltYWdlLCBuX2xpbWl0LCBsaW1fc3VwLCBtYW5kZWxicm90X3R5cGUpO1xuICAgICAgICBjb25zdCBnZW5lcmF0ZUVuZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBnZW5lcmF0ZVRpbWUgPSBnZW5lcmF0ZUVuZFRpbWUgLSBnZW5lcmF0ZVN0YXJ0VGltZTtcbiAgICAgICAgc3VtR2VuZXJhdGVUaW1lSnMgKz0gZ2VuZXJhdGVUaW1lO1xuXG4gICAgICAgIGRyYXcoY29udGV4dCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwganNSZXN1bHQpO1xuXG4gICAgICAgIGRvbW9wcy53cml0ZV9nZW5lcmF0ZV90aW1lX2pzKGdlbmVyYXRlVGltZSwgc3VtR2VuZXJhdGVUaW1lSnMpO1xuICAgIH1cbiAgICB7XG4gICAgICAgIC8vIOetlOOBiOOBjOetieOBl+OBhOOBk+OBqOOCkueiuuiqjeOBmeOCi1xuICAgICAgICAvLyBsZXQgaXNTYW1lID0gdHJ1ZTtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBoeWJyaWRSZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIGlmIChoeWJyaWRSZXN1bHRbaV0gIT09IGpzUmVzdWx0W2ldKSB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coaSwgaHlicmlkUmVzdWx0W2ldLCBqc1Jlc3VsdFtpXSk7XG4gICAgICAgIC8vICAgICAgICAgaXNTYW1lID0gZmFsc2U7XG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coYFxcbihoeWJyaWRSZXN1bHQgPT09IGpzUmVzdWx0KToke2lzU2FtZX1gKTtcbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCdcclxuXHJcbmV4cG9ydCBjb25zdCBJRF9SRU5ERVIgPSBcImlkLXJlbmRlclwiO1xyXG5leHBvcnQgY29uc3QgSURfUkFORE9NX1JFTkRFUiA9IFwiaWQtcmFuZG9tX3JlbmRlclwiO1xyXG5leHBvcnQgY29uc3QgSURfSFlCUklEX0NBTlZBUyA9IFwiaWQtY2FudmFzX2h5YnJpZFwiO1xyXG5leHBvcnQgY29uc3QgSURfSlNfQ0FOVkFTID0gXCJpZC1jYW52YXNfanNcIjtcclxuZXhwb3J0IGNvbnN0IElEX0NfUkVBTCA9IFwiaWQtbWFuZGVsYnJvdF9jX3JlYWxcIjtcclxuZXhwb3J0IGNvbnN0IElEX0NfSU1BR0UgPSBcImlkLW1hbmRlbGJyb3RfY19pbWFnZVwiO1xyXG5leHBvcnQgY29uc3QgSURfTl9MSU1JVCA9IFwiaWQtbWFuZGVsYnJvdF9uX2xpbWl0XCI7XHJcbmV4cG9ydCBjb25zdCBJRF9MSU1fU1VQID0gXCJpZC1tYW5kZWxicm90X2xpbV9zdXBcIjtcclxuZXhwb3J0IGNvbnN0IElEX1pPT00gPSBcImlkLW1hbmRlbGJyb3Rfem9vbVwiO1xyXG5leHBvcnQgY29uc3QgSURfTUFOREVMQlJPVF9UWVBFID0gXCJpZC1tYW5kZWxicm90X3R5cGVcIjtcclxuZXhwb3J0IGNvbnN0IElEX0dFTkVSQVRFX1RJTUVfUlMgPSBcImlkLWdlbmVyYXRlX3RpbWVfcnNcIjtcclxuZXhwb3J0IGNvbnN0IElEX1NVTV9HRU5FUkFURV9USU1FX1JTID0gXCJpZC1zdW1fZ2VuZXJhdGVfdGltZV9yc1wiO1xyXG5leHBvcnQgY29uc3QgSURfR0VORVJBVEVfVElNRV9KUyA9IFwiaWQtZ2VuZXJhdGVfdGltZV9qc1wiO1xyXG5leHBvcnQgY29uc3QgSURfU1VNX0dFTkVSQVRFX1RJTUVfSlMgPSBcImlkLXN1bV9nZW5lcmF0ZV90aW1lX2pzXCI7XHJcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0ICogYXMgY29uc3RzIGZyb20gXCIuL2NvbnN0c1wiO1xyXG5cclxuLy8g44Oe44Oz44OH44Or44OW44Ot6ZuG5ZCI44GuY19yZWFs44KS5Y+W5b6X44GZ44KLXHJcbmV4cG9ydCBjb25zdCBnZXRfbWFuZGVsYnJvdF9jX3JlYWxfdmFsdWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9DX1JFQUwpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoaW5wdXQudmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlID09PSBOYU4pIHJldHVybiAwO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vLyDjg57jg7Pjg4fjg6vjg5bjg63pm4blkIjjga5jX2ltYWdl44KS5Y+W5b6X44GZ44KLXHJcbmV4cG9ydCBjb25zdCBnZXRfbWFuZGVsYnJvdF9jX2ltYWdlX3ZhbHVlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25zdHMuSURfQ19JTUFHRSk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihpbnB1dC52YWx1ZSk7XHJcbiAgICBpZiAodmFsdWUgPT09IE5hTikgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbi8vIOODnuODs+ODh+ODq+ODluODrembhuWQiOOBrm5fbGltaXTjgpLlj5blvpfjgZnjgotcclxuZXhwb3J0IGNvbnN0IGdldF9tYW5kZWxicm90X25fbGltaXRfdmFsdWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9OX0xJTUlUKTtcclxuICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGlucHV0LnZhbHVlKTtcclxuICAgIGlmICh2YWx1ZSA9PT0gTmFOKSByZXR1cm4gMTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuLy8g44Oe44Oz44OH44Or44OW44Ot6ZuG5ZCI44Gu55m65pWj5p2h5Lu244Gu5YCk44KS5Y+W5b6X44GZ44KLXHJcbmV4cG9ydCBjb25zdCBnZXRfbWFuZGVsYnJvdF9saW1fc3VwX3ZhbHVlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25zdHMuSURfTElNX1NVUCk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihpbnB1dC52YWx1ZSk7XHJcbiAgICBpZiAodmFsdWUgPT09IE5hTikgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbi8vIOODnuODs+ODh+ODq+ODluODrembhuWQiOOBrnpvb23jga7lgKTjgpLlj5blvpfjgZnjgotcclxuZXhwb3J0IGNvbnN0IGdldF9tYW5kZWxicm90X3pvb21fdmFsdWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9aT09NKTtcclxuICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGlucHV0LnZhbHVlKTtcclxuICAgIGlmICh2YWx1ZSA9PT0gTmFOKSByZXR1cm4gMDtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuLy8g44Oe44Oz44OH44Or44OW44Ot6ZuG5ZCI44Gu56iu6aGe44Gu5YCk44KS5Y+W5b6X44GZ44KLXHJcbmV4cG9ydCBjb25zdCBnZXRfbWFuZGVsYnJvdF90eXBlX3ZhbHVlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9NQU5ERUxCUk9UX1RZUEUpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdEVsZW0udmFsdWU7XHJcbiAgICByZXR1cm4gc2VsZWN0ZWRWYWx1ZTtcclxufVxyXG5cclxuLy8gd2FzbeOBrueUn+aIkOaZgumWk+OCkuihqOekuuOBmeOCi1xyXG5leHBvcnQgY29uc3Qgd3JpdGVfZ2VuZXJhdGVfdGltZV9ycyA9IChnZW5lcmF0ZVRpbWUsIHN1bUdlbmVyYXRlVGltZSkgPT4ge1xyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25zdHMuSURfR0VORVJBVEVfVElNRV9SUyk7XHJcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGdlbmVyYXRlVGltZTtcclxuICAgIH1cclxuICAgIHtcclxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uc3RzLklEX1NVTV9HRU5FUkFURV9USU1FX1JTKTtcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gc3VtR2VuZXJhdGVUaW1lO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBqc+OBrueUn+aIkOaZgumWk+OCkuihqOekuuOBmeOCi1xyXG5leHBvcnQgY29uc3Qgd3JpdGVfZ2VuZXJhdGVfdGltZV9qcyA9IChnZW5lcmF0ZVRpbWUsIHN1bUdlbmVyYXRlVGltZSkgPT4ge1xyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25zdHMuSURfR0VORVJBVEVfVElNRV9KUyk7XHJcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGdlbmVyYXRlVGltZTtcclxuICAgIH1cclxuICAgIHtcclxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uc3RzLklEX1NVTV9HRU5FUkFURV9USU1FX0pTKTtcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gc3VtR2VuZXJhdGVUaW1lO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyDjg57jg7Pjg4fjg6vjg5bjg63pm4blkIjjga7jgr/jgqTjg5fjgpLjgrvjg4Pjg4jjgZnjgotcclxuY29uc3Qgc2V0X21hbmRlbGJyb3RfdHlwZV92YWx1ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9NQU5ERUxCUk9UX1RZUEUpO1xyXG4gICAgZWxlbS52YWx1ZSA9IHZhbHVlO1xyXG59XHJcblxyXG4vLyDjg57jg7Pjg4fjg6vjg5bjg63pm4blkIjjga5SZShDKeOCkuOCu+ODg+ODiOOBmeOCi1xyXG5jb25zdCBzZXRfbWFuZGVsYnJvdF9jX3JlYWxfdmFsdWUgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25zdHMuSURfQ19SRUFMKTtcclxuICAgIGVsZW0udmFsdWUgPSB2YWx1ZTtcclxufVxyXG5cclxuLy8g44Oe44Oz44OH44Or44OW44Ot6ZuG5ZCI44GuSW0oQynjgpLjgrvjg4Pjg4jjgZnjgotcclxuY29uc3Qgc2V0X21hbmRlbGJyb3RfY19pbWFnZV92YWx1ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9DX0lNQUdFKTtcclxuICAgIGVsZW0udmFsdWUgPSB2YWx1ZTtcclxufVxyXG5cclxuLy8g44Oe44Oz44OH44Or44OW44Ot6ZuG5ZCI44Guem9vbeOCkuOCu+ODg+ODiOOBmeOCi1xyXG5jb25zdCBzZXRfbWFuZGVsYnJvdF96b29tX3ZhbHVlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uc3RzLklEX1pPT00pO1xyXG4gICAgZWxlbS52YWx1ZSA9IHZhbHVlO1xyXG59XHJcblxyXG4vLyDjg57jg7Pjg4fjg6vjg5bjg63pm4blkIjjga5uX2xpbWl044KS44K744OD44OI44GZ44KLXHJcbmNvbnN0IHNldF9tYW5kZWxicm90X25fbGltaXRfdmFsdWUgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25zdHMuSURfTl9MSU1JVCk7XHJcbiAgICBlbGVtLnZhbHVlID0gdmFsdWU7XHJcbn1cclxuXHJcbi8vIOODnuODs+ODh+ODq+ODluODrembhuWQiOOBrmxpbV9zdXDjgpLjgrvjg4Pjg4jjgZnjgotcclxuY29uc3Qgc2V0X21hbmRlbGJyb3RfbGltX3N1cF92YWx1ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9MSU1fU1VQKTtcclxuICAgIGVsZW0udmFsdWUgPSB2YWx1ZTtcclxufVxyXG5cclxuLy8g6Kit5a6a5YCk44KS44Op44Oz44OA44Og44K744OD44OI44GZ44KLXHJcbmNvbnN0IFJBTkRPTV9TRVQgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwibWFuZGVsYnJvdF90eXBlMVwiLFxyXG4gICAgICAgIFwiY19yZWFsXCI6IFwiMC4xMTIwMDY4MzU5Mzc1XCIsXHJcbiAgICAgICAgXCJjX2ltYWdlXCI6IFwiMC42MzgwMjEyNDAyMzQzNzVcIixcclxuICAgICAgICBcInpvb21cIjogXCIwLjAwMDMyMjI2NTYyNVwiLFxyXG4gICAgICAgIFwibl9saW1pdFwiOiBcIjUwMFwiLFxyXG4gICAgICAgIFwibGltX3N1cFwiOiBcIjJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwibWFuZGVsYnJvdF90eXBlMVwiLFxyXG4gICAgICAgIFwiY19yZWFsXCI6IFwiLTAuNzQ2Njg0OTU2NTYxNzI0XCIsXHJcbiAgICAgICAgXCJjX2ltYWdlXCI6IFwiLTAuMTQ4NDA3MjU0OTkxNTQ5XCIsXHJcbiAgICAgICAgXCJ6b29tXCI6IFwiMC4wMDAzMDQ4MzE1ODFcIixcclxuICAgICAgICBcIm5fbGltaXRcIjogXCI1MDBcIixcclxuICAgICAgICBcImxpbV9zdXBcIjogXCIyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIm1hbmRlbGJyb3RfdHlwZTFcIixcclxuICAgICAgICBcImNfcmVhbFwiOiBcIjAuMjM1MTYyMzIyODE2Njk1XCIsXHJcbiAgICAgICAgXCJjX2ltYWdlXCI6IFwiLTAuNTIyNTY5NzMwMjIzODU0XCIsXHJcbiAgICAgICAgXCJ6b29tXCI6IFwiMC4wMDAyNzQzNDg0MjNcIixcclxuICAgICAgICBcIm5fbGltaXRcIjogXCI1MDBcIixcclxuICAgICAgICBcImxpbV9zdXBcIjogXCIyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIm1hbmRlbGJyb3RfdHlwZTFcIixcclxuICAgICAgICBcImNfcmVhbFwiOiBcIjAuNDMxNDQ0OTMxMDMwMjcyXCIsXHJcbiAgICAgICAgXCJjX2ltYWdlXCI6IFwiLTAuMjEwMjg1NTY4MjM3MzAzXCIsXHJcbiAgICAgICAgXCJ6b29tXCI6IFwiMC4wMDAwMDM4MTQ2OTcyNlwiLFxyXG4gICAgICAgIFwibl9saW1pdFwiOiBcIjUwMFwiLFxyXG4gICAgICAgIFwibGltX3N1cFwiOiBcIjJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwibWFuZGVsYnJvdF90eXBlMVwiLFxyXG4gICAgICAgIFwiY19yZWFsXCI6IFwiLTAuMDEyMzcwMTQwODA1ODQ2N1wiLFxyXG4gICAgICAgIFwiY19pbWFnZVwiOiBcIi0wLjY1NDI4NTIzNTgwMjI4MVwiLFxyXG4gICAgICAgIFwiem9vbVwiOiBcIjAuMDAwMDAzNzYzMzUyODVcIixcclxuICAgICAgICBcIm5fbGltaXRcIjogXCI1MDBcIixcclxuICAgICAgICBcImxpbV9zdXBcIjogXCIyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIm1hbmRlbGJyb3RfdHlwZTFcIixcclxuICAgICAgICBcImNfcmVhbFwiOiBcIi0wLjkyODE0NTYzMTc5MDE2MVwiLFxyXG4gICAgICAgIFwiY19pbWFnZVwiOiBcIi0wLjI0MTEzNjEzNzAwODY2NlwiLFxyXG4gICAgICAgIFwiem9vbVwiOiBcIjAuMDAwMDAwNTE0OTg0MTMxXCIsXHJcbiAgICAgICAgXCJuX2xpbWl0XCI6IFwiNTAwXCIsXHJcbiAgICAgICAgXCJsaW1fc3VwXCI6IFwiMlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJtYW5kZWxicm90X3R5cGUxXCIsXHJcbiAgICAgICAgXCJjX3JlYWxcIjogXCIwLjM5OTE1NjA1NjgzNDE2N1wiLFxyXG4gICAgICAgIFwiY19pbWFnZVwiOiBcIi0wLjEzMDQwOTk0MjAyNTU1M1wiLFxyXG4gICAgICAgIFwiem9vbVwiOiBcIjAuMDAwMDAwMzM4NzAxNzU1XCIsXHJcbiAgICAgICAgXCJuX2xpbWl0XCI6IFwiNTAwXCIsXHJcbiAgICAgICAgXCJsaW1fc3VwXCI6IFwiMlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJtYW5kZWxicm90X3R5cGUxXCIsXHJcbiAgICAgICAgXCJjX3JlYWxcIjogXCIwLjM3Mzg4ODQ1NzU2NjQ5OVwiLFxyXG4gICAgICAgIFwiY19pbWFnZVwiOiBcIi0wLjU5NjE3NjE2Nzk1MDAzM1wiLFxyXG4gICAgICAgIFwiem9vbVwiOiBcIjAuMDAwMDAwMDA3NDUwNTgwNlwiLFxyXG4gICAgICAgIFwibl9saW1pdFwiOiBcIjUwMFwiLFxyXG4gICAgICAgIFwibGltX3N1cFwiOiBcIjJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwibWFuZGVsYnJvdF90eXBlMVwiLFxyXG4gICAgICAgIFwiY19yZWFsXCI6IFwiLTEuMzU4MTQyNjAyODMwMTlcIixcclxuICAgICAgICBcImNfaW1hZ2VcIjogXCItMC4wMzkwODM1NzY2NjMzOTcyXCIsXHJcbiAgICAgICAgXCJ6b29tXCI6IFwiMC4wMDAwMDAwMDAxMzk2OTgzODZcIixcclxuICAgICAgICBcIm5fbGltaXRcIjogXCI1MDBcIixcclxuICAgICAgICBcImxpbV9zdXBcIjogXCIyXCIsXHJcbiAgICB9LFxyXG4gICAgLy8gd2lraXBlZGlhXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwibWFuZGVsYnJvdF90eXBlMVwiLFxyXG4gICAgICAgIFwiY19yZWFsXCI6IFwiLTAuODc1OTFcIixcclxuICAgICAgICBcImNfaW1hZ2VcIjogXCIwLjIwNDY0XCIsXHJcbiAgICAgICAgXCJ6b29tXCI6IFwiMC4xXCIsXHJcbiAgICAgICAgXCJuX2xpbWl0XCI6IFwiNTAwXCIsXHJcbiAgICAgICAgXCJsaW1fc3VwXCI6IFwiMlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJtYW5kZWxicm90X3R5cGUxXCIsXHJcbiAgICAgICAgXCJjX3JlYWxcIjogXCItMC43NTk4NTZcIixcclxuICAgICAgICBcImNfaW1hZ2VcIjogXCIwLjEyNTU0N1wiLFxyXG4gICAgICAgIFwiem9vbVwiOiBcIjAuMVwiLFxyXG4gICAgICAgIFwibl9saW1pdFwiOiBcIjUwMFwiLFxyXG4gICAgICAgIFwibGltX3N1cFwiOiBcIjJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwibWFuZGVsYnJvdF90eXBlMVwiLFxyXG4gICAgICAgIFwiY19yZWFsXCI6IFwiLTAuNzQzMDMwXCIsXHJcbiAgICAgICAgXCJjX2ltYWdlXCI6IFwiMC4xMjY0MzNcIixcclxuICAgICAgICBcInpvb21cIjogXCIwLjAwMDA1XCIsXHJcbiAgICAgICAgXCJuX2xpbWl0XCI6IFwiNTAwXCIsXHJcbiAgICAgICAgXCJsaW1fc3VwXCI6IFwiMlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJtYW5kZWxicm90X3R5cGUxXCIsXHJcbiAgICAgICAgXCJjX3JlYWxcIjogXCItMC43NDM1NjY5XCIsXHJcbiAgICAgICAgXCJjX2ltYWdlXCI6IFwiMC4xMzE0MDIzXCIsXHJcbiAgICAgICAgXCJ6b29tXCI6IFwiMC4wMDEyM1wiLFxyXG4gICAgICAgIFwibl9saW1pdFwiOiBcIjUwMFwiLFxyXG4gICAgICAgIFwibGltX3N1cFwiOiBcIjJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwibWFuZGVsYnJvdF90eXBlMVwiLFxyXG4gICAgICAgIFwiY19yZWFsXCI6IFwiLTAuNzQzNjQ1XCIsXHJcbiAgICAgICAgXCJjX2ltYWdlXCI6IFwiMC4xMzE4MjczM1wiLFxyXG4gICAgICAgIFwiem9vbVwiOiBcIjAuMDAwMDI1XCIsXHJcbiAgICAgICAgXCJuX2xpbWl0XCI6IFwiNTAwXCIsXHJcbiAgICAgICAgXCJsaW1fc3VwXCI6IFwiMlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJtYW5kZWxicm90X3R5cGUxXCIsXHJcbiAgICAgICAgXCJjX3JlYWxcIjogXCItMC43NDM2NDQ3ODYwXCIsXHJcbiAgICAgICAgXCJjX2ltYWdlXCI6IFwiMC4xMzE4MjUyNTM2XCIsXHJcbiAgICAgICAgXCJ6b29tXCI6IFwiMC4wMDAwMDI1XCIsXHJcbiAgICAgICAgXCJuX2xpbWl0XCI6IFwiNTAwXCIsXHJcbiAgICAgICAgXCJsaW1fc3VwXCI6IFwiMlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJtYW5kZWxicm90X3R5cGUxXCIsXHJcbiAgICAgICAgXCJjX3JlYWxcIjogXCItMC43NDM2NDVcIixcclxuICAgICAgICBcImNfaW1hZ2VcIjogXCIwLjEzMTgyNTI1MzZcIixcclxuICAgICAgICBcInpvb21cIjogXCIwLjAwMDAwMDI1XCIsXHJcbiAgICAgICAgXCJuX2xpbWl0XCI6IFwiNTAwXCIsXHJcbiAgICAgICAgXCJsaW1fc3VwXCI6IFwiMlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJtYW5kZWxicm90X3R5cGUxXCIsXHJcbiAgICAgICAgXCJjX3JlYWxcIjogXCItMS41XCIsXHJcbiAgICAgICAgXCJjX2ltYWdlXCI6IFwiMFwiLFxyXG4gICAgICAgIFwiem9vbVwiOiBcIjAuMDAxXCIsXHJcbiAgICAgICAgXCJuX2xpbWl0XCI6IFwiNTAwXCIsXHJcbiAgICAgICAgXCJsaW1fc3VwXCI6IFwiMlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJtYW5kZWxicm90X3R5cGUyXCIsXHJcbiAgICAgICAgXCJjX3JlYWxcIjogXCIwLjM5XCIsXHJcbiAgICAgICAgXCJjX2ltYWdlXCI6IFwiMC4wMDA1XCIsXHJcbiAgICAgICAgXCJ6b29tXCI6IFwiMC4wMDAwNVwiLFxyXG4gICAgICAgIFwibl9saW1pdFwiOiBcIjUwMFwiLFxyXG4gICAgICAgIFwibGltX3N1cFwiOiBcIjJcIixcclxuICAgIH0sXHJcbl07XHJcblxyXG5sZXQgcHJlX2luZGV4ID0gLTE7XHJcbmV4cG9ydCBjb25zdCByYW5kb21fc2V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0X3JhbmRvbV9pbmRleCA9IChsZW5ndGgpID0+IHtcclxuICAgICAgICAvLyBNYXRoLnJhbmRvbSgp44GvMOS7peS4ijHmnKrmuoDjga7jg6njg7Pjg4Djg6Djgarmta7li5XlsI/mlbDngrnmlbDjgpLov5TjgZlcclxuICAgICAgICAvLyDjgYvjgarjgorpganlvZPjgarlrp/oo4VcclxuICAgICAgICBjb25zdCByID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIHIgJSBsZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g44Op44Oz44OA44Og44Gr44Kk44Oz44OH44OD44Kv44K544KS5b6X44KLXHJcbiAgICBsZXQgcmFuZF9pbmRleCA9IDA7XHJcbiAgICB3aGlsZSAoMSkge1xyXG4gICAgICAgIHJhbmRfaW5kZXggPSBnZXRfcmFuZG9tX2luZGV4KFJBTkRPTV9TRVQubGVuZ3RoKTtcclxuICAgICAgICBpZiAocmFuZF9pbmRleCAhPT0gcHJlX2luZGV4KSB7XHJcbiAgICAgICAgICAgIHByZV9pbmRleCA9IHJhbmRfaW5kZXg7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDjg4fjg5Djg4PjgrDnlKhcclxuICAgIC8vIHJhbmRfaW5kZXggPSBSQU5ET01fU0VULmxlbmd0aCAtIDE7XHJcblxyXG4gICAgLy8g6Kit5a6a5YCk44KS44K744OD44OI44GZ44KLXHJcbiAgICBzZXRfbWFuZGVsYnJvdF90eXBlX3ZhbHVlKFJBTkRPTV9TRVRbcmFuZF9pbmRleF0udHlwZSk7XHJcbiAgICBzZXRfbWFuZGVsYnJvdF9jX3JlYWxfdmFsdWUoUkFORE9NX1NFVFtyYW5kX2luZGV4XS5jX3JlYWwpO1xyXG4gICAgc2V0X21hbmRlbGJyb3RfY19pbWFnZV92YWx1ZShSQU5ET01fU0VUW3JhbmRfaW5kZXhdLmNfaW1hZ2UpO1xyXG4gICAgc2V0X21hbmRlbGJyb3Rfem9vbV92YWx1ZShSQU5ET01fU0VUW3JhbmRfaW5kZXhdLnpvb20pO1xyXG4gICAgc2V0X21hbmRlbGJyb3Rfbl9saW1pdF92YWx1ZShSQU5ET01fU0VUW3JhbmRfaW5kZXhdLm5fbGltaXQpO1xyXG4gICAgc2V0X21hbmRlbGJyb3RfbGltX3N1cF92YWx1ZShSQU5ET01fU0VUW3JhbmRfaW5kZXhdLmxpbV9zdXApO1xyXG59IiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5leHBvcnQgY29uc3QgbG9naWMgPSB7XHJcbiAgICBnZXRORGl2ZXJnZWQ6IGZ1bmN0aW9uIChjX3JlYWwsIGNfaW1hZ2UsIG5fbGltaXQsIGxpbV9zdXApIHtcclxuICAgICAgICBsZXQgeG4gPSAwLjA7XHJcbiAgICAgICAgbGV0IHluID0gMC4wO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbl9saW1pdDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB4X25leHQgPSB4biAqIHhuIC0geW4gKiB5biArIGNfcmVhbDtcclxuICAgICAgICAgICAgbGV0IHlfbmV4dCA9IDIuMCAqIHhuICogeW4gKyBjX2ltYWdlO1xyXG4gICAgICAgICAgICB4biA9IHhfbmV4dDtcclxuICAgICAgICAgICAgeW4gPSB5X25leHQ7XHJcbiAgICAgICAgICAgIGlmICh4biAqIHhuICsgeW4gKiB5biA+IGxpbV9zdXAgKiBsaW1fc3VwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbl9saW1pdDtcclxuICAgIH0sXHJcbiAgICBnZW5lcmF0ZU1hbmRlbGJyb3RTZXQ6IGZ1bmN0aW9uIChcclxuICAgICAgICBjYW52YXNfdyxcclxuICAgICAgICBjYW52YXNfaCxcclxuICAgICAgICB6b29tLFxyXG4gICAgICAgIGNfcmVhbCxcclxuICAgICAgICBjX2ltYWdlLFxyXG4gICAgICAgIG5fbGltaXQsXHJcbiAgICAgICAgbGltX3N1cCxcclxuICAgICkge1xyXG4gICAgICAgIGxldCB5X21pbiA9IC16b29tO1xyXG4gICAgICAgIGxldCB5X21heCA9IHpvb207XHJcbiAgICAgICAgbGV0IHhfbWluID0gLXpvb207XHJcbiAgICAgICAgbGV0IHhfbWF4ID0gem9vbTtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzX2g7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgeSA9IHlfbWluICsgKHlfbWF4IC0geV9taW4pICogaSAvIGNhbnZhc19oO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNhbnZhc193OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB4ID0geF9taW4gKyAoeF9tYXggLSB4X21pbikgKiBqIC8gY2FudmFzX3c7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlcl9pbmRleCA9IHRoaXMuZ2V0TkRpdmVyZ2VkKHggKyBjX3JlYWwsIHkgKyBjX2ltYWdlLCBuX2xpbWl0LCBsaW1fc3VwKTtcclxuICAgICAgICAgICAgICAgIGxldCByX2NvbG9yID0gMjU1IC0gaXRlcl9pbmRleCAlIDI1NTtcclxuICAgICAgICAgICAgICAgIGxldCBnX2NvbG9yID0gaXRlcl9pbmRleCAlIDE2ICogMTc7XHJcbiAgICAgICAgICAgICAgICBsZXQgYl9jb2xvciA9IGl0ZXJfaW5kZXggJSA4ICogMzI7IC8vOOiJsuOBq+Whl+OCiuWIhuOBkeOCi1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKHJfY29sb3IpOyAvL1JcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChnX2NvbG9yKTsgLy9HXHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goYl9jb2xvcik7IC8vQlxyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKDI1NSk7Ly9BXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFogPSBaXjIgKyBDXHJcbmZ1bmN0aW9uIGdldE5EaXZlcmdlZDEoY19yZWFsLCBjX2ltYWdlLCBuX2xpbWl0LCBsaW1fc3VwKSB7XHJcbiAgICBsZXQgeG4gPSAwLjA7XHJcbiAgICBsZXQgeW4gPSAwLjA7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5fbGltaXQ7IGkrKykge1xyXG4gICAgICAgIGxldCB4X25leHQgPSB4biAqIHhuIC0geW4gKiB5biArIGNfcmVhbDtcclxuICAgICAgICBsZXQgeV9uZXh0ID0gMi4wICogeG4gKiB5biArIGNfaW1hZ2U7XHJcbiAgICAgICAgeG4gPSB4X25leHQ7XHJcbiAgICAgICAgeW4gPSB5X25leHQ7XHJcbiAgICAgICAgaWYgKHhuICogeG4gKyB5biAqIHluID4gbGltX3N1cCAqIGxpbV9zdXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5fbGltaXQ7XHJcbn1cclxuXHJcbi8vIFogPSBaXjMgKyBDXHJcbmZ1bmN0aW9uIGdldE5EaXZlcmdlZDIoY19yZWFsLCBjX2ltYWdlLCBuX2xpbWl0LCBsaW1fc3VwKSB7XHJcbiAgICBsZXQgeG4gPSAwLjA7XHJcbiAgICBsZXQgeW4gPSAwLjA7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5fbGltaXQ7IGkrKykge1xyXG4gICAgICAgIGxldCB4X25leHQgPSB4biAqICh4biAqIHhuIC0gMy4wICogeW4gKiB5bikgKyBjX3JlYWw7XHJcbiAgICAgICAgbGV0IHlfbmV4dCA9IHluICogKDMuMCAqIHhuICogeG4gLSB5biAqIHluKSArIGNfaW1hZ2U7XHJcbiAgICAgICAgeG4gPSB4X25leHQ7XHJcbiAgICAgICAgeW4gPSB5X25leHQ7XHJcbiAgICAgICAgaWYgKHhuICogeG4gKyB5biAqIHluID4gbGltX3N1cCAqIGxpbV9zdXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5fbGltaXQ7XHJcbn1cclxuXHJcbi8vIFogPSBaXjQgKyBDXHJcbmZ1bmN0aW9uIGdldE5EaXZlcmdlZDMoY19yZWFsLCBjX2ltYWdlLCBuX2xpbWl0LCBsaW1fc3VwKSB7XHJcbiAgICBsZXQgeG4gPSAwLjA7XHJcbiAgICBsZXQgeW4gPSAwLjA7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5fbGltaXQ7IGkrKykge1xyXG4gICAgICAgIGxldCB4X25leHQgPSB4biAqIHhuICogeG4gKiB4biAtIDYuMCAqIHhuICogeG4gKiB5biAqIHluICsgeW4gKiB5biAqIHluICogeW4gKyBjX3JlYWw7XHJcbiAgICAgICAgbGV0IHlfbmV4dCA9IDQuMCAqIHhuICogeW4gKiAoeG4gKiB4biAtIHluICogeW4pICsgY19pbWFnZTtcclxuICAgICAgICB4biA9IHhfbmV4dDtcclxuICAgICAgICB5biA9IHlfbmV4dDtcclxuICAgICAgICBpZiAoeG4gKiB4biArIHluICogeW4gPiBsaW1fc3VwICogbGltX3N1cCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbl9saW1pdDtcclxufVxyXG5cclxuLy8gWiA9IFpeNSArIENcclxuZnVuY3Rpb24gZ2V0TkRpdmVyZ2VkNChjX3JlYWwsIGNfaW1hZ2UsIG5fbGltaXQsIGxpbV9zdXApIHtcclxuICAgIGxldCB4biA9IDAuMDtcclxuICAgIGxldCB5biA9IDAuMDtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbl9saW1pdDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHhfbmV4dCA9IHhuICogKHhuICogeG4gKiB4biAqIHhuIC0gMTAuMCAqIHhuICogeG4gKiB5biAqIHluICsgNS4wICogeW4gKiB5biAqIHluICogeW4pICsgY19yZWFsO1xyXG4gICAgICAgIGxldCB5X25leHQgPSB5biAqICg1LjAgKiB4biAqIHhuICogeG4gKiB4biAtIDEwLjAgKiB4biAqIHhuICogeW4gKiB5biArIHluICogeW4gKiB5biAqIHluKSArIGNfaW1hZ2U7XHJcbiAgICAgICAgeG4gPSB4X25leHQ7XHJcbiAgICAgICAgeW4gPSB5X25leHQ7XHJcbiAgICAgICAgaWYgKHhuICogeG4gKyB5biAqIHluID4gbGltX3N1cCAqIGxpbV9zdXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5fbGltaXQ7XHJcbn1cclxuXHJcbi8vIFogPSAoWicpXjIgKyBDXHJcbmZ1bmN0aW9uIGdldE5EaXZlcmdlZDUoY19yZWFsLCBjX2ltYWdlLCBuX2xpbWl0LCBsaW1fc3VwKSB7XHJcbiAgICBsZXQgeG4gPSAwLjA7XHJcbiAgICBsZXQgeW4gPSAwLjA7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5fbGltaXQ7IGkrKykge1xyXG4gICAgICAgIGxldCB4X25leHQgPSB4biAqIHhuIC0geW4gKiB5biArIGNfcmVhbDtcclxuICAgICAgICBsZXQgeV9uZXh0ID0gLTIuMCAqIHhuICogeW4gKyBjX2ltYWdlO1xyXG4gICAgICAgIHhuID0geF9uZXh0O1xyXG4gICAgICAgIHluID0geV9uZXh0O1xyXG4gICAgICAgIGlmICh4biAqIHhuICsgeW4gKiB5biA+IGxpbV9zdXAgKiBsaW1fc3VwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuX2xpbWl0O1xyXG59XHJcblxyXG4vLyBaID0gKFonKV4zICsgQ1xyXG5mdW5jdGlvbiBnZXRORGl2ZXJnZWQ2KGNfcmVhbCwgY19pbWFnZSwgbl9saW1pdCwgbGltX3N1cCkge1xyXG4gICAgbGV0IHhuID0gMC4wO1xyXG4gICAgbGV0IHluID0gMC4wO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuX2xpbWl0OyBpKyspIHtcclxuICAgICAgICBsZXQgeF9uZXh0ID0geG4gKiAoeG4gKiB4biAtIDMuMCAqIHluICogeW4pICsgY19yZWFsO1xyXG4gICAgICAgIGxldCB5X25leHQgPSB5biAqICh5biAqIHluIC0gMy4wICogeG4gKiB4bikgKyBjX2ltYWdlO1xyXG4gICAgICAgIHhuID0geF9uZXh0O1xyXG4gICAgICAgIHluID0geV9uZXh0O1xyXG4gICAgICAgIGlmICh4biAqIHhuICsgeW4gKiB5biA+IGxpbV9zdXAgKiBsaW1fc3VwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuX2xpbWl0O1xyXG59XHJcblxyXG4vLyBaID0gKFonKV40ICsgQ1xyXG5mdW5jdGlvbiBnZXRORGl2ZXJnZWQ3KGNfcmVhbCwgY19pbWFnZSwgbl9saW1pdCwgbGltX3N1cCkge1xyXG4gICAgbGV0IHhuID0gMC4wO1xyXG4gICAgbGV0IHluID0gMC4wO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuX2xpbWl0OyBpKyspIHtcclxuICAgICAgICBsZXQgeF9uZXh0ID0geG4gKiB4biAqIHhuICogeG4gLSA2LjAgKiB4biAqIHhuICogeW4gKiB5biArIHluICogeW4gKiB5biAqIHluICsgY19yZWFsO1xyXG4gICAgICAgIGxldCB5X25leHQgPSA0LjAgKiB4biAqIHluICogKHluICogeW4gLSB4biAqIHhuKSArIGNfaW1hZ2U7XHJcbiAgICAgICAgeG4gPSB4X25leHQ7XHJcbiAgICAgICAgeW4gPSB5X25leHQ7XHJcbiAgICAgICAgaWYgKHhuICogeG4gKyB5biAqIHluID4gbGltX3N1cCAqIGxpbV9zdXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5fbGltaXQ7XHJcbn1cclxuXHJcbi8vIFogPSAoWicpXjUgKyBDXHJcbmZ1bmN0aW9uIGdldE5EaXZlcmdlZDgoY19yZWFsLCBjX2ltYWdlLCBuX2xpbWl0LCBsaW1fc3VwKSB7XHJcbiAgICBsZXQgeG4gPSAwLjA7XHJcbiAgICBsZXQgeW4gPSAwLjA7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5fbGltaXQ7IGkrKykge1xyXG4gICAgICAgIGxldCB4X25leHQgPSB4biAqICh4biAqIHhuICogeG4gKiB4biAtIDEwLjAgKiB4biAqIHhuICogeW4gKiB5biArIDUuMCAqIHluICogeW4gKiB5biAqIHluKSArIGNfcmVhbDtcclxuICAgICAgICBsZXQgeV9uZXh0ID0gLXluICogKDUuMCAqIHhuICogeG4gKiB4biAqIHhuIC0gMTAuMCAqIHhuICogeG4gKiB5biAqIHluICsgeW4gKiB5biAqIHluICogeW4pICsgY19pbWFnZTtcclxuICAgICAgICB4biA9IHhfbmV4dDtcclxuICAgICAgICB5biA9IHlfbmV4dDtcclxuICAgICAgICBpZiAoeG4gKiB4biArIHluICogeW4gPiBsaW1fc3VwICogbGltX3N1cCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbl9saW1pdDtcclxufVxyXG5cclxuLy8gWiA9IFpeMTAgKyBDXHJcbmZ1bmN0aW9uIGdldE5EaXZlcmdlZDkoY19yZWFsLCBjX2ltYWdlLCBuX2xpbWl0LCBsaW1fc3VwKSB7XHJcbiAgICBsZXQgeG4gPSAwLjA7XHJcbiAgICBsZXQgeW4gPSAwLjA7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5fbGltaXQ7IGkrKykge1xyXG4gICAgICAgIGxldCB4X25leHQgPSB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAtIDQ1LjAgKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeW4gKiB5biArIDIxMC4wICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeW4gKiB5biAqIHluICogeW4gLSAyMTAuMCAqIHhuICogeG4gKiB4biAqIHhuICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICsgNDUuMCAqIHhuICogeG4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluIC0geW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKyBjX3JlYWw7XHJcbiAgICAgICAgbGV0IHlfbmV4dCA9IDEwLjAgKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB5biAtIDEyMC4wICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB5biAqIHluICogeW4gKyAyNTIuMCAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB5biAqIHluICogeW4gKiB5biAqIHluIC0gMTIwLjAgKiB4biAqIHhuICogeG4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biArIDEwLjAgKiB4biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biArIGNfaW1hZ2U7XHJcbiAgICAgICAgeG4gPSB4X25leHQ7XHJcbiAgICAgICAgeW4gPSB5X25leHQ7XHJcbiAgICAgICAgaWYgKHhuICogeG4gKyB5biAqIHluID4gbGltX3N1cCAqIGxpbV9zdXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5fbGltaXQ7XHJcbn1cclxuXHJcbi8vIFogPSAoWicpXjEwICsgQ1xyXG5mdW5jdGlvbiBnZXRORGl2ZXJnZWQxMChjX3JlYWwsIGNfaW1hZ2UsIG5fbGltaXQsIGxpbV9zdXApIHtcclxuICAgIGxldCB4biA9IDAuMDtcclxuICAgIGxldCB5biA9IDAuMDtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbl9saW1pdDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHhfbmV4dCA9IHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuIC0gNDUuMCAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB5biAqIHluICsgMjEwLjAgKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB5biAqIHluICogeW4gKiB5biAtIDIxMC4wICogeG4gKiB4biAqIHhuICogeG4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKyA0NS4wICogeG4gKiB4biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gLSB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biArIGNfcmVhbDtcclxuICAgICAgICBsZXQgeV9uZXh0ID0gLTEwLjAgKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB5biArIDEyMC4wICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB5biAqIHluICogeW4gLSAyNTIuMCAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB5biAqIHluICogeW4gKiB5biAqIHluICsgMTIwLjAgKiB4biAqIHhuICogeG4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biAtIDEwLjAgKiB4biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biArIGNfaW1hZ2U7XHJcbiAgICAgICAgeG4gPSB4X25leHQ7XHJcbiAgICAgICAgeW4gPSB5X25leHQ7XHJcbiAgICAgICAgaWYgKHhuICogeG4gKyB5biAqIHluID4gbGltX3N1cCAqIGxpbV9zdXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5fbGltaXQ7XHJcbn1cclxuXHJcbmNvbnN0IE1BTkRFTEJST1RfRlVOQyA9IHtcclxuICAgIFwibWFuZGVsYnJvdF90eXBlMVwiOiBnZXRORGl2ZXJnZWQxLFxyXG4gICAgXCJtYW5kZWxicm90X3R5cGUyXCI6IGdldE5EaXZlcmdlZDIsXHJcbiAgICBcIm1hbmRlbGJyb3RfdHlwZTNcIjogZ2V0TkRpdmVyZ2VkMyxcclxuICAgIFwibWFuZGVsYnJvdF90eXBlNFwiOiBnZXRORGl2ZXJnZWQ0LFxyXG4gICAgXCJtYW5kZWxicm90X3R5cGU1XCI6IGdldE5EaXZlcmdlZDUsXHJcbiAgICBcIm1hbmRlbGJyb3RfdHlwZTZcIjogZ2V0TkRpdmVyZ2VkNixcclxuICAgIFwibWFuZGVsYnJvdF90eXBlN1wiOiBnZXRORGl2ZXJnZWQ3LFxyXG4gICAgXCJtYW5kZWxicm90X3R5cGU4XCI6IGdldE5EaXZlcmdlZDgsXHJcbiAgICBcIm1hbmRlbGJyb3RfdHlwZTlcIjogZ2V0TkRpdmVyZ2VkOSxcclxuICAgIFwibWFuZGVsYnJvdF90eXBlMTBcIjogZ2V0TkRpdmVyZ2VkMTAsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVNYW5kZWxicm90U2V0KFxyXG4gICAgY2FudmFzX3csXHJcbiAgICBjYW52YXNfaCxcclxuICAgIHpvb20sXHJcbiAgICBjX3JlYWwsXHJcbiAgICBjX2ltYWdlLFxyXG4gICAgbl9saW1pdCxcclxuICAgIGxpbV9zdXAsXHJcbiAgICBtYW5kZWxicm90X3R5cGUsXHJcbikge1xyXG4gICAgbGV0IHlfbWluID0gLXpvb207XHJcbiAgICBsZXQgeV9tYXggPSB6b29tO1xyXG4gICAgbGV0IHhfbWluID0gLXpvb207XHJcbiAgICBsZXQgeF9tYXggPSB6b29tO1xyXG4gICAgbGV0IGRhdGEgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FudmFzX2g7IGkrKykge1xyXG4gICAgICAgIGxldCB5ID0geV9taW4gKyAoeV9tYXggLSB5X21pbikgKiBpIC8gY2FudmFzX2g7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjYW52YXNfdzsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCB4ID0geF9taW4gKyAoeF9tYXggLSB4X21pbikgKiBqIC8gY2FudmFzX3c7XHJcbiAgICAgICAgICAgIGxldCBpdGVyX2luZGV4ID0gTUFOREVMQlJPVF9GVU5DW21hbmRlbGJyb3RfdHlwZV0oeCArIGNfcmVhbCwgeSArIGNfaW1hZ2UsIG5fbGltaXQsIGxpbV9zdXApO1xyXG4gICAgICAgICAgICBsZXQgcl9jb2xvciA9IDI1NSAtIGl0ZXJfaW5kZXggJSAyNTU7XHJcbiAgICAgICAgICAgIGxldCBnX2NvbG9yID0gaXRlcl9pbmRleCAlIDE2ICogMTc7XHJcbiAgICAgICAgICAgIGxldCBiX2NvbG9yID0gaXRlcl9pbmRleCAlIDggKiAzMjsgLy846Imy44Gr5aGX44KK5YiG44GR44KLXHJcbiAgICAgICAgICAgIGRhdGEucHVzaChyX2NvbG9yKTsgLy9SXHJcbiAgICAgICAgICAgIGRhdGEucHVzaChnX2NvbG9yKTsgLy9HXHJcbiAgICAgICAgICAgIGRhdGEucHVzaChiX2NvbG9yKTsgLy9CXHJcbiAgICAgICAgICAgIGRhdGEucHVzaCgyNTUpOy8vQVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==