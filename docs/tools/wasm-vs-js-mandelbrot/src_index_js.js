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
    // let hybridResult = null;
    // {
    //     let canvas = document.getElementById(consts.ID_HYBRID_CANVAS);
    //     let context = canvas.getContext("2d");
    //     const canvasWidth = canvas.width;
    //     const canvasHeight = canvas.height;

    //     const generateStartTime = Date.now();
    //     hybridResult = generate_mandelbrot_set_rs(canvasWidth, canvasHeight, zoom, c_real, c_image, n_limit, lim_sup, mandelbrot_type);
    //     const generateEndTime = Date.now();
    //     const generateTime = generateEndTime - generateStartTime;
    //     sumGenerateTimeRs += generateTime;

    //     draw(context, canvasWidth, canvasHeight, hybridResult);

    //     domops.write_generate_time_rs(generateTime, sumGenerateTimeRs);
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDhDQUFnQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLCtDQUFpQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDRDQUFjO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsK0NBQWlCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsK0NBQWlCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pTWTtBQUNaO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsYUFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQsb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQSx3QkFBd0IsY0FBYztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQyxnQ0FBZ0M7QUFDaEMsZ0NBQWdDO0FBQ2hDLGdDQUFnQztBQUNoQywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXNtLXZzLWpzLW1hbmRlbGJyb3QvLi4vcGtnL21hbmRlbGJyb3QuanMiLCJ3ZWJwYWNrOi8vd2FzbS12cy1qcy1tYW5kZWxicm90Ly4uL3BrZy9tYW5kZWxicm90X2JnLmpzIiwid2VicGFjazovL3dhc20tdnMtanMtbWFuZGVsYnJvdC8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL3dhc20tdnMtanMtbWFuZGVsYnJvdC8uL3NyYy9zY3NzL2Zvb3Rlci5zY3NzIiwid2VicGFjazovL3dhc20tdnMtanMtbWFuZGVsYnJvdC8uL3NyYy9zY3NzL2lucHV0LnNjc3MiLCJ3ZWJwYWNrOi8vd2FzbS12cy1qcy1tYW5kZWxicm90Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93YXNtLXZzLWpzLW1hbmRlbGJyb3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93YXNtLXZzLWpzLW1hbmRlbGJyb3QvLi9zcmMvaW5kZXguc2Nzcz83MjIzIiwid2VicGFjazovL3dhc20tdnMtanMtbWFuZGVsYnJvdC8uL3NyYy9zY3NzL2Zvb3Rlci5zY3NzP2VhYzkiLCJ3ZWJwYWNrOi8vd2FzbS12cy1qcy1tYW5kZWxicm90Ly4vc3JjL3Njc3MvaW5wdXQuc2Nzcz9lNWZiIiwid2VicGFjazovL3dhc20tdnMtanMtbWFuZGVsYnJvdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93YXNtLXZzLWpzLW1hbmRlbGJyb3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dhc20tdnMtanMtbWFuZGVsYnJvdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93YXNtLXZzLWpzLW1hbmRlbGJyb3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2FzbS12cy1qcy1tYW5kZWxicm90Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2FzbS12cy1qcy1tYW5kZWxicm90Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2FzbS12cy1qcy1tYW5kZWxicm90Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dhc20tdnMtanMtbWFuZGVsYnJvdC8uL3NyYy9qcy9jb25zdHMuanMiLCJ3ZWJwYWNrOi8vd2FzbS12cy1qcy1tYW5kZWxicm90Ly4vc3JjL2pzL2RvbW9wcy5qcyIsIndlYnBhY2s6Ly93YXNtLXZzLWpzLW1hbmRlbGJyb3QvLi9zcmMvanMvbWFuZGVsYnJvdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3YXNtIGZyb20gXCIuL21hbmRlbGJyb3RfYmcud2FzbVwiO1xuaW1wb3J0IHsgX193Ymdfc2V0X3dhc20gfSBmcm9tIFwiLi9tYW5kZWxicm90X2JnLmpzXCI7XG5fX3diZ19zZXRfd2FzbSh3YXNtKTtcbmV4cG9ydCAqIGZyb20gXCIuL21hbmRlbGJyb3RfYmcuanNcIjtcbiIsImxldCB3YXNtO1xuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3NldF93YXNtKHZhbCkge1xuICAgIHdhc20gPSB2YWw7XG59XG5cblxuY29uc3QgaGVhcCA9IG5ldyBBcnJheSgxMjgpLmZpbGwodW5kZWZpbmVkKTtcblxuaGVhcC5wdXNoKHVuZGVmaW5lZCwgbnVsbCwgdHJ1ZSwgZmFsc2UpO1xuXG5mdW5jdGlvbiBnZXRPYmplY3QoaWR4KSB7IHJldHVybiBoZWFwW2lkeF07IH1cblxubGV0IGhlYXBfbmV4dCA9IGhlYXAubGVuZ3RoO1xuXG5mdW5jdGlvbiBkcm9wT2JqZWN0KGlkeCkge1xuICAgIGlmIChpZHggPCAxMzIpIHJldHVybjtcbiAgICBoZWFwW2lkeF0gPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaWR4O1xufVxuXG5mdW5jdGlvbiB0YWtlT2JqZWN0KGlkeCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChpZHgpO1xuICAgIGRyb3BPYmplY3QoaWR4KTtcbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBhZGRIZWFwT2JqZWN0KG9iaikge1xuICAgIGlmIChoZWFwX25leHQgPT09IGhlYXAubGVuZ3RoKSBoZWFwLnB1c2goaGVhcC5sZW5ndGggKyAxKTtcbiAgICBjb25zdCBpZHggPSBoZWFwX25leHQ7XG4gICAgaGVhcF9uZXh0ID0gaGVhcFtpZHhdO1xuXG4gICAgaGVhcFtpZHhdID0gb2JqO1xuICAgIHJldHVybiBpZHg7XG59XG5cbmZ1bmN0aW9uIGRlYnVnU3RyaW5nKHZhbCkge1xuICAgIC8vIHByaW1pdGl2ZSB0eXBlc1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuICAgIGlmICh0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8IHZhbCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAgYCR7dmFsfWA7XG4gICAgfVxuICAgIGlmICh0eXBlID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBgXCIke3ZhbH1cImA7XG4gICAgfVxuICAgIGlmICh0eXBlID09ICdzeW1ib2wnKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdmFsLmRlc2NyaXB0aW9uO1xuICAgICAgICBpZiAoZGVzY3JpcHRpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuICdTeW1ib2wnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGBTeW1ib2woJHtkZXNjcmlwdGlvbn0pYDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB2YWwubmFtZTtcbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09ICdzdHJpbmcnICYmIG5hbWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGBGdW5jdGlvbigke25hbWV9KWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ0Z1bmN0aW9uJztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBvYmplY3RzXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICBjb25zdCBsZW5ndGggPSB2YWwubGVuZ3RoO1xuICAgICAgICBsZXQgZGVidWcgPSAnWyc7XG4gICAgICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkZWJ1ZyArPSBkZWJ1Z1N0cmluZyh2YWxbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGVidWcgKz0gJywgJyArIGRlYnVnU3RyaW5nKHZhbFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVidWcgKz0gJ10nO1xuICAgICAgICByZXR1cm4gZGVidWc7XG4gICAgfVxuICAgIC8vIFRlc3QgZm9yIGJ1aWx0LWluXG4gICAgY29uc3QgYnVpbHRJbk1hdGNoZXMgPSAvXFxbb2JqZWN0IChbXlxcXV0rKVxcXS8uZXhlYyh0b1N0cmluZy5jYWxsKHZhbCkpO1xuICAgIGxldCBjbGFzc05hbWU7XG4gICAgaWYgKGJ1aWx0SW5NYXRjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY2xhc3NOYW1lID0gYnVpbHRJbk1hdGNoZXNbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRmFpbGVkIHRvIG1hdGNoIHRoZSBzdGFuZGFyZCAnW29iamVjdCBDbGFzc05hbWVdJ1xuICAgICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpO1xuICAgIH1cbiAgICBpZiAoY2xhc3NOYW1lID09ICdPYmplY3QnKSB7XG4gICAgICAgIC8vIHdlJ3JlIGEgdXNlciBkZWZpbmVkIGNsYXNzIG9yIE9iamVjdFxuICAgICAgICAvLyBKU09OLnN0cmluZ2lmeSBhdm9pZHMgcHJvYmxlbXMgd2l0aCBjeWNsZXMsIGFuZCBpcyBnZW5lcmFsbHkgbXVjaFxuICAgICAgICAvLyBlYXNpZXIgdGhhbiBsb29waW5nIHRocm91Z2ggb3duUHJvcGVydGllcyBvZiBgdmFsYC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiAnT2JqZWN0KCcgKyBKU09OLnN0cmluZ2lmeSh2YWwpICsgJyknO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICByZXR1cm4gJ09iamVjdCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZXJyb3JzXG4gICAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHJldHVybiBgJHt2YWwubmFtZX06ICR7dmFsLm1lc3NhZ2V9XFxuJHt2YWwuc3RhY2t9YDtcbiAgICB9XG4gICAgLy8gVE9ETyB3ZSBjb3VsZCB0ZXN0IGZvciBtb3JlIHRoaW5ncyBoZXJlLCBsaWtlIGBTZXRgcyBhbmQgYE1hcGBzLlxuICAgIHJldHVybiBjbGFzc05hbWU7XG59XG5cbmxldCBXQVNNX1ZFQ1RPUl9MRU4gPSAwO1xuXG5sZXQgY2FjaGVkVWludDhNZW1vcnkwID0gbnVsbDtcblxuZnVuY3Rpb24gZ2V0VWludDhNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWRVaW50OE1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVkVWludDhNZW1vcnkwLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgY2FjaGVkVWludDhNZW1vcnkwID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZFVpbnQ4TWVtb3J5MDtcbn1cblxuY29uc3QgbFRleHRFbmNvZGVyID0gdHlwZW9mIFRleHRFbmNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RW5jb2RlciA6IFRleHRFbmNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dEVuY29kZXIgPSBuZXcgbFRleHRFbmNvZGVyKCd1dGYtOCcpO1xuXG5jb25zdCBlbmNvZGVTdHJpbmcgPSAodHlwZW9mIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8gPT09ICdmdW5jdGlvbidcbiAgICA/IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byhhcmcsIHZpZXcpO1xufVxuICAgIDogZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgIHZpZXcuc2V0KGJ1Zik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVhZDogYXJnLmxlbmd0aCxcbiAgICAgICAgd3JpdHRlbjogYnVmLmxlbmd0aFxuICAgIH07XG59KTtcblxuZnVuY3Rpb24gcGFzc1N0cmluZ1RvV2FzbTAoYXJnLCBtYWxsb2MsIHJlYWxsb2MpIHtcblxuICAgIGlmIChyZWFsbG9jID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgICAgIGNvbnN0IHB0ciA9IG1hbGxvYyhidWYubGVuZ3RoLCAxKSA+Pj4gMDtcbiAgICAgICAgZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBidWYubGVuZ3RoKS5zZXQoYnVmKTtcbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gYnVmLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBsZXQgbGVuID0gYXJnLmxlbmd0aDtcbiAgICBsZXQgcHRyID0gbWFsbG9jKGxlbiwgMSkgPj4+IDA7XG5cbiAgICBjb25zdCBtZW0gPSBnZXRVaW50OE1lbW9yeTAoKTtcblxuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgZm9yICg7IG9mZnNldCA8IGxlbjsgb2Zmc2V0KyspIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0ICE9PSBsZW4pIHtcbiAgICAgICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcHRyID0gcmVhbGxvYyhwdHIsIGxlbiwgbGVuID0gb2Zmc2V0ICsgYXJnLmxlbmd0aCAqIDMsIDEpID4+PiAwO1xuICAgICAgICBjb25zdCB2aWV3ID0gZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyICsgb2Zmc2V0LCBwdHIgKyBsZW4pO1xuICAgICAgICBjb25zdCByZXQgPSBlbmNvZGVTdHJpbmcoYXJnLCB2aWV3KTtcblxuICAgICAgICBvZmZzZXQgKz0gcmV0LndyaXR0ZW47XG4gICAgfVxuXG4gICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgIHJldHVybiBwdHI7XG59XG5cbmxldCBjYWNoZWRJbnQzMk1lbW9yeTAgPSBudWxsO1xuXG5mdW5jdGlvbiBnZXRJbnQzMk1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZEludDMyTWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWRJbnQzMk1lbW9yeTAuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYWNoZWRJbnQzMk1lbW9yeTAgPSBuZXcgSW50MzJBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkSW50MzJNZW1vcnkwO1xufVxuXG5jb25zdCBsVGV4dERlY29kZXIgPSB0eXBlb2YgVGV4dERlY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHREZWNvZGVyIDogVGV4dERlY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBsVGV4dERlY29kZXIoJ3V0Zi04JywgeyBpZ25vcmVCT006IHRydWUsIGZhdGFsOiB0cnVlIH0pO1xuXG5jYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoKTtcblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcHRyID0gcHRyID4+PiAwO1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cbi8qKlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0X2Z1bmNfcnMoKSB7XG4gICAgd2FzbS5pbml0X2Z1bmNfcnMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlVOEZyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHB0ciA9IHB0ciA+Pj4gMDtcbiAgICByZXR1cm4gZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyIC8gMSwgcHRyIC8gMSArIGxlbik7XG59XG4vKipcbiogQHBhcmFtIHtudW1iZXJ9IGNhbnZhc193XG4qIEBwYXJhbSB7bnVtYmVyfSBjYW52YXNfaFxuKiBAcGFyYW0ge251bWJlcn0gem9vbVxuKiBAcGFyYW0ge251bWJlcn0gY19yZWFsXG4qIEBwYXJhbSB7bnVtYmVyfSBjX2ltYWdlXG4qIEBwYXJhbSB7bnVtYmVyfSBtYXhfaXRlclxuKiBAcGFyYW0ge251bWJlcn0gbGltX3N1cFxuKiBAcGFyYW0ge3N0cmluZ30gbWFuZGVsYnJvdF90eXBlXG4qIEByZXR1cm5zIHtVaW50OEFycmF5fVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZV9tYW5kZWxicm90X3NldF9ycyhjYW52YXNfdywgY2FudmFzX2gsIHpvb20sIGNfcmVhbCwgY19pbWFnZSwgbWF4X2l0ZXIsIGxpbV9zdXAsIG1hbmRlbGJyb3RfdHlwZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldHB0ciA9IHdhc20uX193YmluZGdlbl9hZGRfdG9fc3RhY2tfcG9pbnRlcigtMTYpO1xuICAgICAgICBjb25zdCBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAobWFuZGVsYnJvdF90eXBlLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgICAgIGNvbnN0IGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgICAgIHdhc20uZ2VuZXJhdGVfbWFuZGVsYnJvdF9zZXRfcnMocmV0cHRyLCBjYW52YXNfdywgY2FudmFzX2gsIHpvb20sIGNfcmVhbCwgY19pbWFnZSwgbWF4X2l0ZXIsIGxpbV9zdXAsIHB0cjAsIGxlbjApO1xuICAgICAgICB2YXIgcjAgPSBnZXRJbnQzMk1lbW9yeTAoKVtyZXRwdHIgLyA0ICsgMF07XG4gICAgICAgIHZhciByMSA9IGdldEludDMyTWVtb3J5MCgpW3JldHB0ciAvIDQgKyAxXTtcbiAgICAgICAgdmFyIHYyID0gZ2V0QXJyYXlVOEZyb21XYXNtMChyMCwgcjEpLnNsaWNlKCk7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9mcmVlKHIwLCByMSAqIDEpO1xuICAgICAgICByZXR1cm4gdjI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKDE2KTtcbiAgICB9XG59XG5cbi8qKlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBkcmF3X21hbmRlbGJyb3Rfc2V0X3JzKCkge1xuICAgIHdhc20uZHJhd19tYW5kZWxicm90X3NldF9ycygpO1xufVxuXG5mdW5jdGlvbiBpc0xpa2VOb25lKHgpIHtcbiAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkIHx8IHggPT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGYsIGFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9leG5fc3RvcmUoYWRkSGVhcE9iamVjdChlKSk7XG4gICAgfVxufVxuXG5sZXQgY2FjaGVkVWludDhDbGFtcGVkTWVtb3J5MCA9IG51bGw7XG5cbmZ1bmN0aW9uIGdldFVpbnQ4Q2xhbXBlZE1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZFVpbnQ4Q2xhbXBlZE1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVkVWludDhDbGFtcGVkTWVtb3J5MC5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNhY2hlZFVpbnQ4Q2xhbXBlZE1lbW9yeTAgPSBuZXcgVWludDhDbGFtcGVkQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZFVpbnQ4Q2xhbXBlZE1lbW9yeTA7XG59XG5cbmZ1bmN0aW9uIGdldENsYW1wZWRBcnJheVU4RnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcHRyID0gcHRyID4+PiAwO1xuICAgIHJldHVybiBnZXRVaW50OENsYW1wZWRNZW1vcnkwKCkuc3ViYXJyYXkocHRyIC8gMSwgcHRyIC8gMSArIGxlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZihhcmcwKSB7XG4gICAgdGFrZU9iamVjdChhcmcwKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19sb2dfYzgwMWQ4NGFkNmQyZThhNyhhcmcwLCBhcmcxKSB7XG4gICAgY29uc29sZS5sb2coZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19pbnN0YW5jZW9mX1dpbmRvd185MDI5MTk2YjY2MmJjNDJhKGFyZzApIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGdldE9iamVjdChhcmcwKSBpbnN0YW5jZW9mIFdpbmRvdztcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2RvY3VtZW50X2Y3YWNlMmI5NTZmMzBhNGYoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5kb2N1bWVudDtcbiAgICByZXR1cm4gaXNMaWtlTm9uZShyZXQpID8gMCA6IGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19wZXJmb3JtYW5jZV8yYzI5NTA2MWM4YjAxZTBiKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkucGVyZm9ybWFuY2U7XG4gICAgcmV0dXJuIGlzTGlrZU5vbmUocmV0KSA/IDAgOiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2V0RWxlbWVudEJ5SWRfY2MwZTBkOTMxYjBkOWEyOChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmdldEVsZW1lbnRCeUlkKGdldFN0cmluZ0Zyb21XYXNtMChhcmcxLCBhcmcyKSk7XG4gICAgcmV0dXJuIGlzTGlrZU5vbmUocmV0KSA/IDAgOiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfaW5zdGFuY2VvZl9DYW52YXNSZW5kZXJpbmdDb250ZXh0MmRfYmMwYTY2MzVjOTZlY2E5YihhcmcwKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBnZXRPYmplY3QoYXJnMCkgaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19wdXRJbWFnZURhdGFfZjE1N2Q1MmE3MGEyMDZkNSgpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLnB1dEltYWdlRGF0YShnZXRPYmplY3QoYXJnMSksIGFyZzIsIGFyZzMpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfaW5zdGFuY2VvZl9IdG1sQ2FudmFzRWxlbWVudF9kYTVmOWVmYTA2ODhjZjZkKGFyZzApIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGdldE9iamVjdChhcmcwKSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfd2lkdGhfMjkzMWFhZWRkMjFmMWZmZihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLndpZHRoO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfaGVpZ2h0XzBkMzZmYmJlYjYwYjA2NjEoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5oZWlnaHQ7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19nZXRDb250ZXh0XzdjNTk0NGVhODA3YmY1ZDMoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5nZXRDb250ZXh0KGdldFN0cmluZ0Zyb21XYXNtMChhcmcxLCBhcmcyKSk7XG4gICAgcmV0dXJuIGlzTGlrZU5vbmUocmV0KSA/IDAgOiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19ub3dfMGNmZGM5MGM5N2QwYzI0YihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLm5vdygpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3d2l0aHU4Y2xhbXBlZGFycmF5YW5kc2hfZTJiM2ZjZTU2N2FjZDcwOCgpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEltYWdlRGF0YShnZXRDbGFtcGVkQXJyYXlVOEZyb21XYXNtMChhcmcwLCBhcmcxKSwgYXJnMiA+Pj4gMCwgYXJnMyA+Pj4gMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld25vYXJnc181ODE5NjdlYWNjMGUyNjA0KGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgRnVuY3Rpb24oZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2NhbGxfY2I2NTU0MWQ5NWQ3MTI4MigpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLmNhbGwoZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2VsZl8xZmYxZDcyOWU5YWFlOTM4KCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJldCA9IHNlbGYuc2VsZjtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfd2luZG93XzVmNGZhZWY2YzEyYjc5ZWMoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV0ID0gd2luZG93LndpbmRvdztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2xvYmFsVGhpc18xZDM5NzE0NDA1NTgyZDNjKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJldCA9IGdsb2JhbFRoaXMuZ2xvYmFsVGhpcztcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2xvYmFsXzY1MWYwNWM2YTA5NDRkMWMoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcmV0ID0gZ2xvYmFsLmdsb2JhbDtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9pc191bmRlZmluZWQoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKSA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9vYmplY3RfY2xvbmVfcmVmKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2RlYnVnX3N0cmluZyhhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gZGVidWdTdHJpbmcoZ2V0T2JqZWN0KGFyZzEpKTtcbiAgICBjb25zdCBwdHIxID0gcGFzc1N0cmluZ1RvV2FzbTAocmV0LCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgY29uc3QgbGVuMSA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICBnZXRJbnQzMk1lbW9yeTAoKVthcmcwIC8gNCArIDFdID0gbGVuMTtcbiAgICBnZXRJbnQzMk1lbW9yeTAoKVthcmcwIC8gNCArIDBdID0gcHRyMTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX3Rocm93KGFyZzAsIGFyZzEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5ib3gge1xuICBmbGV4OiAxO1xuICAvKiDlrZDopoHntKDjgpLlnYfnrYnjgavkvLjnuK7jgZXjgZvjgosgKi9cbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0ksT0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94IHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgLyog5a2Q6KaB57Sg44KS5Z2H562J44Gr5Ly457iu44GV44Gb44KLICovXFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZvb3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xuICBkaXNwbGF5OiAtby1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxNzEsIDE5NiwgMTgzKTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5mb290ZXJfX2Fib3V0LWFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xuICBkaXNwbGF5OiAtby1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4uZm9vdGVyX19pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDEwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9mb290ZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUdBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0FBSEo7QUFLSTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFIUjtBQU1JO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkZm9vdGVyLWJvcmRlci1jb2xvcjogcmdiKDE3MSwgMTk2LCAxODMpO1xcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcXHJcXG4gICAgZGlzcGxheTogLW8tZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsIDE4MCwgMTgwKTtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRmb290ZXItYm9yZGVyLWNvbG9yO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcblxcclxcbiAgICAmX19hYm91dC1hcmVhIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICAgICAgZGlzcGxheTogLW1vei1mbGV4O1xcclxcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXg7XFxyXFxuICAgICAgICBkaXNwbGF5OiAtby1mbGV4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX2l0ZW0ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAudXNlci1pbnB1dC1jb250ZWluZXIge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG8gMDtcbn1cblxuLnVzZXItaW5wdXQtcm93IHtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbW96LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4O1xuICBkaXNwbGF5OiAtby1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMmY0ZjU7XG59XG4udXNlci1pbnB1dC1yb3dfX2xhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4udXNlci1pbnB1dC1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9pbnB1dC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDUjs7QUFHQTtFQUNJLG1CQUFBO0FBQUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnVzZXItaW5wdXQtY29udGVpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvIDA7XFxyXFxufVxcclxcblxcclxcbi51c2VyLWlucHV0LXJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xcclxcbiAgICBkaXNwbGF5OiAtbXMtZmxleDtcXHJcXG4gICAgZGlzcGxheTogLW8tZmxleDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmNGY1O1xcclxcblxcclxcbiAgICAmX19sYWJlbCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4udXNlci1pbnB1dC1yb3c6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5wdXQuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2lucHV0LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vc2Nzcy9pbnB1dC5zY3NzJztcbmltcG9ydCAnLi9zY3NzL2Zvb3Rlci5zY3NzJztcbmltcG9ydCB7IGluaXRfZnVuY19ycywgZ2VuZXJhdGVfbWFuZGVsYnJvdF9zZXRfcnMgfSBmcm9tIFwiLi4vLi4vcGtnL21hbmRlbGJyb3RcIjtcbmltcG9ydCB7IGdlbmVyYXRlTWFuZGVsYnJvdFNldCB9IGZyb20gXCIuL2pzL21hbmRlbGJyb3RcIjtcbmltcG9ydCAqIGFzIGRvbW9wcyBmcm9tIFwiLi9qcy9kb21vcHNcIjtcbmltcG9ydCAqIGFzIGNvbnN0cyBmcm9tIFwiLi9qcy9jb25zdHNcIjtcblxuY29uc29sZS5sb2coXCJzdGFydCBsb2FkaW5nIHdhc21cIik7XG5jb25zdCBtYW5kZWxicm90UnNNb2QgPSBpbXBvcnQoXCIuLi8uLi9wa2dcIikuY2F0Y2goY29uc29sZS5lcnJvcik7XG5jb25zdCBtYW5kZWxicm90SnNNb2QgPSBpbXBvcnQoXCIuL2pzL21hbmRlbGJyb3RcIikuY2F0Y2goY29uc29sZS5lcnJvcik7XG5cblxuLy8g6YWN5YiX44KS5o+P55S744GZ44KL6Zai5pWwXG5mdW5jdGlvbiBkcmF3KGN0eCwgY2FudmFzX3csIGNhbnZhc19oLCBkYXRhKSB7XG4gICAgbGV0IGltZyA9IG5ldyBJbWFnZURhdGEobmV3IFVpbnQ4Q2xhbXBlZEFycmF5KGRhdGEpLCBjYW52YXNfdywgY2FudmFzX2gpO1xuICAgIGN0eC5wdXRJbWFnZURhdGEoaW1nLCAwLCAwKTtcbn1cblxubGV0IHN1bUdlbmVyYXRlVGltZVJzID0gMC4wO1xubGV0IHN1bUdlbmVyYXRlVGltZUpzID0gMC4wO1xuXG4vLyB3YXNt44Gu6Kqt44G/6L6844G/44Gv6Z2e5ZCM5pyf44Gn6KGM44KP44KM44KL44Gu44Gn44CBUHJvbWlzZeOBp+iqreOBv+i+vOOBv+WujOS6huOCkuW+heOBo+OBpuOAgWJ1dHRvbuimgee0oOOBrm9uQ2xpY2vjgavnmbvpjLLjgIJcblByb21pc2UuYWxsKFttYW5kZWxicm90UnNNb2QsIG1hbmRlbGJyb3RKc01vZF0pLnRoZW4oYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiZmluaXNoZWQgbG9hZGluZyB3YXNtXCIpO1xuICAgIGluaXRfZnVuY19ycygpO1xuXG4gICAgLy8g44Kk44OZ44Oz44OI6L+95YqgXG4gICAgYWRkX2V2ZW50X3JlbmRlcigpO1xuICAgIGFkZF9ldmVudF9yYW5kb21fcmVuZGVyKCk7XG5cbiAgICAvLyDjgq/jg6rjg4Pjgq/lrp/ooYxcbiAgICBjbGlja19yZW5kZXJfYnV0dG9uKCk7XG59KTtcblxuLy8gUmVuZGVy44Gu44Kk44OZ44Oz44OI6L+95YqgXG5jb25zdCBhZGRfZXZlbnRfcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlbmRlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9SRU5ERVIpO1xuICAgIHJlbmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tfcmVuZGVyX2J1dHRvbik7XG59XG5cbi8vIFJhbmRvbSBSZW5kZXLjga7jgqTjg5njg7Pjg4jov73liqBcbmNvbnN0IGFkZF9ldmVudF9yYW5kb21fcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9SQU5ET01fUkVOREVSKTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZG9tb3BzLnJhbmRvbV9zZXQoKTtcbiAgICAgICAgY2xpY2tfcmVuZGVyX2J1dHRvbigpO1xuICAgIH0pO1xufVxuXG4vLyBSZW5kZXLjg5zjgr/jg7Pjgq/jg6rjg4Pjgq/jga7jgqTjg5njg7Pjg4hcbmV4cG9ydCBjb25zdCBjbGlja19yZW5kZXJfYnV0dG9uID0gKCkgPT4ge1xuICAgIC8vIOODpuODvOOCtuWFpeWKm+OCkuWPluW+l1xuICAgIGNvbnN0IG1hbmRlbGJyb3RfdHlwZSA9IGRvbW9wcy5nZXRfbWFuZGVsYnJvdF90eXBlX3ZhbHVlKCk7XG4gICAgY29uc3QgY19yZWFsID0gZG9tb3BzLmdldF9tYW5kZWxicm90X2NfcmVhbF92YWx1ZSgpO1xuICAgIGNvbnN0IGNfaW1hZ2UgPSBkb21vcHMuZ2V0X21hbmRlbGJyb3RfY19pbWFnZV92YWx1ZSgpO1xuICAgIGNvbnN0IG5fbGltaXQgPSBkb21vcHMuZ2V0X21hbmRlbGJyb3Rfbl9saW1pdF92YWx1ZSgpO1xuICAgIGNvbnN0IGxpbV9zdXAgPSBkb21vcHMuZ2V0X21hbmRlbGJyb3RfbGltX3N1cF92YWx1ZSgpO1xuICAgIGNvbnN0IHpvb20gPSBkb21vcHMuZ2V0X21hbmRlbGJyb3Rfem9vbV92YWx1ZSgpO1xuICAgIC8vIHdhc23jgafjg57jg7Pjg4fjg6vjg5bjg63pm4blkIjkvZzmiJDjgIF3YXNt44Gn5o+P55S7XG4gICAgLy8gZHJhd19tYW5kZWxicm90X3NldF9ycygpO1xuXG4gICAgLy8gd2FzbeOBp+ODnuODs+ODh+ODq+ODluODrembhuWQiOS9nOaIkOOAgWpz44Gn5o+P55S7XG4gICAgLy8gbGV0IGh5YnJpZFJlc3VsdCA9IG51bGw7XG4gICAgLy8ge1xuICAgIC8vICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uc3RzLklEX0hZQlJJRF9DQU5WQVMpO1xuICAgIC8vICAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy8gICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gY2FudmFzLndpZHRoO1xuICAgIC8vICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuXG4gICAgLy8gICAgIGNvbnN0IGdlbmVyYXRlU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAvLyAgICAgaHlicmlkUmVzdWx0ID0gZ2VuZXJhdGVfbWFuZGVsYnJvdF9zZXRfcnMoY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgem9vbSwgY19yZWFsLCBjX2ltYWdlLCBuX2xpbWl0LCBsaW1fc3VwLCBtYW5kZWxicm90X3R5cGUpO1xuICAgIC8vICAgICBjb25zdCBnZW5lcmF0ZUVuZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIC8vICAgICBjb25zdCBnZW5lcmF0ZVRpbWUgPSBnZW5lcmF0ZUVuZFRpbWUgLSBnZW5lcmF0ZVN0YXJ0VGltZTtcbiAgICAvLyAgICAgc3VtR2VuZXJhdGVUaW1lUnMgKz0gZ2VuZXJhdGVUaW1lO1xuXG4gICAgLy8gICAgIGRyYXcoY29udGV4dCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgaHlicmlkUmVzdWx0KTtcblxuICAgIC8vICAgICBkb21vcHMud3JpdGVfZ2VuZXJhdGVfdGltZV9ycyhnZW5lcmF0ZVRpbWUsIHN1bUdlbmVyYXRlVGltZVJzKTtcbiAgICAvLyB9XG4gICAgLy8ganPjgafjg57jg7Pjg4fjg6vjg5bjg63pm4blkIjkvZzmiJDjgIFqc+OBp+aPj+eUu1xuICAgIGxldCBqc1Jlc3VsdCA9IG51bGw7XG4gICAge1xuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uc3RzLklEX0pTX0NBTlZBUyk7XG4gICAgICAgIGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgY29uc3QgY2FudmFzV2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG5cbiAgICAgICAgY29uc3QgZ2VuZXJhdGVTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBqc1Jlc3VsdCA9IGdlbmVyYXRlTWFuZGVsYnJvdFNldChjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCB6b29tLCBjX3JlYWwsIGNfaW1hZ2UsIG5fbGltaXQsIGxpbV9zdXAsIG1hbmRlbGJyb3RfdHlwZSk7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRlRW5kVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRlVGltZSA9IGdlbmVyYXRlRW5kVGltZSAtIGdlbmVyYXRlU3RhcnRUaW1lO1xuICAgICAgICBzdW1HZW5lcmF0ZVRpbWVKcyArPSBnZW5lcmF0ZVRpbWU7XG5cbiAgICAgICAgZHJhdyhjb250ZXh0LCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBqc1Jlc3VsdCk7XG5cbiAgICAgICAgZG9tb3BzLndyaXRlX2dlbmVyYXRlX3RpbWVfanMoZ2VuZXJhdGVUaW1lLCBzdW1HZW5lcmF0ZVRpbWVKcyk7XG4gICAgfVxuICAgIHtcbiAgICAgICAgLy8g562U44GI44GM562J44GX44GE44GT44Go44KS56K66KqN44GZ44KLXG4gICAgICAgIC8vIGxldCBpc1NhbWUgPSB0cnVlO1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGh5YnJpZFJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgaWYgKGh5YnJpZFJlc3VsdFtpXSAhPT0ganNSZXN1bHRbaV0pIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhpLCBoeWJyaWRSZXN1bHRbaV0sIGpzUmVzdWx0W2ldKTtcbiAgICAgICAgLy8gICAgICAgICBpc1NhbWUgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgXFxuKGh5YnJpZFJlc3VsdCA9PT0ganNSZXN1bHQpOiR7aXNTYW1lfWApO1xuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IElEX1JFTkRFUiA9IFwiaWQtcmVuZGVyXCI7XHJcbmV4cG9ydCBjb25zdCBJRF9SQU5ET01fUkVOREVSID0gXCJpZC1yYW5kb21fcmVuZGVyXCI7XHJcbmV4cG9ydCBjb25zdCBJRF9IWUJSSURfQ0FOVkFTID0gXCJpZC1jYW52YXNfaHlicmlkXCI7XHJcbmV4cG9ydCBjb25zdCBJRF9KU19DQU5WQVMgPSBcImlkLWNhbnZhc19qc1wiO1xyXG5leHBvcnQgY29uc3QgSURfQ19SRUFMID0gXCJpZC1tYW5kZWxicm90X2NfcmVhbFwiO1xyXG5leHBvcnQgY29uc3QgSURfQ19JTUFHRSA9IFwiaWQtbWFuZGVsYnJvdF9jX2ltYWdlXCI7XHJcbmV4cG9ydCBjb25zdCBJRF9OX0xJTUlUID0gXCJpZC1tYW5kZWxicm90X25fbGltaXRcIjtcclxuZXhwb3J0IGNvbnN0IElEX0xJTV9TVVAgPSBcImlkLW1hbmRlbGJyb3RfbGltX3N1cFwiO1xyXG5leHBvcnQgY29uc3QgSURfWk9PTSA9IFwiaWQtbWFuZGVsYnJvdF96b29tXCI7XHJcbmV4cG9ydCBjb25zdCBJRF9NQU5ERUxCUk9UX1RZUEUgPSBcImlkLW1hbmRlbGJyb3RfdHlwZVwiO1xyXG5leHBvcnQgY29uc3QgSURfR0VORVJBVEVfVElNRV9SUyA9IFwiaWQtZ2VuZXJhdGVfdGltZV9yc1wiO1xyXG5leHBvcnQgY29uc3QgSURfU1VNX0dFTkVSQVRFX1RJTUVfUlMgPSBcImlkLXN1bV9nZW5lcmF0ZV90aW1lX3JzXCI7XHJcbmV4cG9ydCBjb25zdCBJRF9HRU5FUkFURV9USU1FX0pTID0gXCJpZC1nZW5lcmF0ZV90aW1lX2pzXCI7XHJcbmV4cG9ydCBjb25zdCBJRF9TVU1fR0VORVJBVEVfVElNRV9KUyA9IFwiaWQtc3VtX2dlbmVyYXRlX3RpbWVfanNcIjtcclxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5pbXBvcnQgKiBhcyBjb25zdHMgZnJvbSBcIi4vY29uc3RzXCI7XHJcblxyXG4vLyDjg57jg7Pjg4fjg6vjg5bjg63pm4blkIjjga5jX3JlYWzjgpLlj5blvpfjgZnjgotcclxuZXhwb3J0IGNvbnN0IGdldF9tYW5kZWxicm90X2NfcmVhbF92YWx1ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uc3RzLklEX0NfUkVBTCk7XHJcbiAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihpbnB1dC52YWx1ZSk7XHJcbiAgICBpZiAodmFsdWUgPT09IE5hTikgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbi8vIOODnuODs+ODh+ODq+ODluODrembhuWQiOOBrmNfaW1hZ2XjgpLlj5blvpfjgZnjgotcclxuZXhwb3J0IGNvbnN0IGdldF9tYW5kZWxicm90X2NfaW1hZ2VfdmFsdWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9DX0lNQUdFKTtcclxuICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGlucHV0LnZhbHVlKTtcclxuICAgIGlmICh2YWx1ZSA9PT0gTmFOKSByZXR1cm4gMDtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuLy8g44Oe44Oz44OH44Or44OW44Ot6ZuG5ZCI44Gubl9saW1pdOOCkuWPluW+l+OBmeOCi1xyXG5leHBvcnQgY29uc3QgZ2V0X21hbmRlbGJyb3Rfbl9saW1pdF92YWx1ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uc3RzLklEX05fTElNSVQpO1xyXG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoaW5wdXQudmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlID09PSBOYU4pIHJldHVybiAxO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vLyDjg57jg7Pjg4fjg6vjg5bjg63pm4blkIjjga7nmbrmlaPmnaHku7bjga7lgKTjgpLlj5blvpfjgZnjgotcclxuZXhwb3J0IGNvbnN0IGdldF9tYW5kZWxicm90X2xpbV9zdXBfdmFsdWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9MSU1fU1VQKTtcclxuICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGlucHV0LnZhbHVlKTtcclxuICAgIGlmICh2YWx1ZSA9PT0gTmFOKSByZXR1cm4gMDtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuLy8g44Oe44Oz44OH44Or44OW44Ot6ZuG5ZCI44Guem9vbeOBruWApOOCkuWPluW+l+OBmeOCi1xyXG5leHBvcnQgY29uc3QgZ2V0X21hbmRlbGJyb3Rfem9vbV92YWx1ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uc3RzLklEX1pPT00pO1xyXG4gICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoaW5wdXQudmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlID09PSBOYU4pIHJldHVybiAwO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG4vLyDjg57jg7Pjg4fjg6vjg5bjg63pm4blkIjjga7nqK7poZ7jga7lgKTjgpLlj5blvpfjgZnjgotcclxuZXhwb3J0IGNvbnN0IGdldF9tYW5kZWxicm90X3R5cGVfdmFsdWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uc3RzLklEX01BTkRFTEJST1RfVFlQRSk7XHJcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gc2VsZWN0RWxlbS52YWx1ZTtcclxuICAgIHJldHVybiBzZWxlY3RlZFZhbHVlO1xyXG59XHJcblxyXG4vLyB3YXNt44Gu55Sf5oiQ5pmC6ZaT44KS6KGo56S644GZ44KLXHJcbmV4cG9ydCBjb25zdCB3cml0ZV9nZW5lcmF0ZV90aW1lX3JzID0gKGdlbmVyYXRlVGltZSwgc3VtR2VuZXJhdGVUaW1lKSA9PiB7XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9HRU5FUkFURV9USU1FX1JTKTtcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gZ2VuZXJhdGVUaW1lO1xyXG4gICAgfVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25zdHMuSURfU1VNX0dFTkVSQVRFX1RJTUVfUlMpO1xyXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBzdW1HZW5lcmF0ZVRpbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGpz44Gu55Sf5oiQ5pmC6ZaT44KS6KGo56S644GZ44KLXHJcbmV4cG9ydCBjb25zdCB3cml0ZV9nZW5lcmF0ZV90aW1lX2pzID0gKGdlbmVyYXRlVGltZSwgc3VtR2VuZXJhdGVUaW1lKSA9PiB7XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9HRU5FUkFURV9USU1FX0pTKTtcclxuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gZ2VuZXJhdGVUaW1lO1xyXG4gICAgfVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25zdHMuSURfU1VNX0dFTkVSQVRFX1RJTUVfSlMpO1xyXG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBzdW1HZW5lcmF0ZVRpbWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIOODnuODs+ODh+ODq+ODluODrembhuWQiOOBruOCv+OCpOODl+OCkuOCu+ODg+ODiOOBmeOCi1xyXG5jb25zdCBzZXRfbWFuZGVsYnJvdF90eXBlX3ZhbHVlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uc3RzLklEX01BTkRFTEJST1RfVFlQRSk7XHJcbiAgICBlbGVtLnZhbHVlID0gdmFsdWU7XHJcbn1cclxuXHJcbi8vIOODnuODs+ODh+ODq+ODluODrembhuWQiOOBrlJlKEMp44KS44K744OD44OI44GZ44KLXHJcbmNvbnN0IHNldF9tYW5kZWxicm90X2NfcmVhbF92YWx1ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9DX1JFQUwpO1xyXG4gICAgZWxlbS52YWx1ZSA9IHZhbHVlO1xyXG59XHJcblxyXG4vLyDjg57jg7Pjg4fjg6vjg5bjg63pm4blkIjjga5JbShDKeOCkuOCu+ODg+ODiOOBmeOCi1xyXG5jb25zdCBzZXRfbWFuZGVsYnJvdF9jX2ltYWdlX3ZhbHVlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uc3RzLklEX0NfSU1BR0UpO1xyXG4gICAgZWxlbS52YWx1ZSA9IHZhbHVlO1xyXG59XHJcblxyXG4vLyDjg57jg7Pjg4fjg6vjg5bjg63pm4blkIjjga56b29t44KS44K744OD44OI44GZ44KLXHJcbmNvbnN0IHNldF9tYW5kZWxicm90X3pvb21fdmFsdWUgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb25zdHMuSURfWk9PTSk7XHJcbiAgICBlbGVtLnZhbHVlID0gdmFsdWU7XHJcbn1cclxuXHJcbi8vIOODnuODs+ODh+ODq+ODluODrembhuWQiOOBrm5fbGltaXTjgpLjgrvjg4Pjg4jjgZnjgotcclxuY29uc3Qgc2V0X21hbmRlbGJyb3Rfbl9saW1pdF92YWx1ZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnN0cy5JRF9OX0xJTUlUKTtcclxuICAgIGVsZW0udmFsdWUgPSB2YWx1ZTtcclxufVxyXG5cclxuLy8g44Oe44Oz44OH44Or44OW44Ot6ZuG5ZCI44GubGltX3N1cOOCkuOCu+ODg+ODiOOBmeOCi1xyXG5jb25zdCBzZXRfbWFuZGVsYnJvdF9saW1fc3VwX3ZhbHVlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29uc3RzLklEX0xJTV9TVVApO1xyXG4gICAgZWxlbS52YWx1ZSA9IHZhbHVlO1xyXG59XHJcblxyXG4vLyDoqK3lrprlgKTjgpLjg6njg7Pjg4Djg6Djgrvjg4Pjg4jjgZnjgotcclxuY29uc3QgUkFORE9NX1NFVCA9IFtcclxuICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJtYW5kZWxicm90X3R5cGUxXCIsXHJcbiAgICAgICAgXCJjX3JlYWxcIjogXCIwLjExMjAwNjgzNTkzNzVcIixcclxuICAgICAgICBcImNfaW1hZ2VcIjogXCIwLjYzODAyMTI0MDIzNDM3NVwiLFxyXG4gICAgICAgIFwiem9vbVwiOiBcIjAuMDAwMzIyMjY1NjI1XCIsXHJcbiAgICAgICAgXCJuX2xpbWl0XCI6IFwiNTAwXCIsXHJcbiAgICAgICAgXCJsaW1fc3VwXCI6IFwiMlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJtYW5kZWxicm90X3R5cGUxXCIsXHJcbiAgICAgICAgXCJjX3JlYWxcIjogXCItMC43NDY2ODQ5NTY1NjE3MjRcIixcclxuICAgICAgICBcImNfaW1hZ2VcIjogXCItMC4xNDg0MDcyNTQ5OTE1NDlcIixcclxuICAgICAgICBcInpvb21cIjogXCIwLjAwMDMwNDgzMTU4MVwiLFxyXG4gICAgICAgIFwibl9saW1pdFwiOiBcIjUwMFwiLFxyXG4gICAgICAgIFwibGltX3N1cFwiOiBcIjJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwibWFuZGVsYnJvdF90eXBlMVwiLFxyXG4gICAgICAgIFwiY19yZWFsXCI6IFwiMC4yMzUxNjIzMjI4MTY2OTVcIixcclxuICAgICAgICBcImNfaW1hZ2VcIjogXCItMC41MjI1Njk3MzAyMjM4NTRcIixcclxuICAgICAgICBcInpvb21cIjogXCIwLjAwMDI3NDM0ODQyM1wiLFxyXG4gICAgICAgIFwibl9saW1pdFwiOiBcIjUwMFwiLFxyXG4gICAgICAgIFwibGltX3N1cFwiOiBcIjJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwibWFuZGVsYnJvdF90eXBlMVwiLFxyXG4gICAgICAgIFwiY19yZWFsXCI6IFwiMC40MzE0NDQ5MzEwMzAyNzJcIixcclxuICAgICAgICBcImNfaW1hZ2VcIjogXCItMC4yMTAyODU1NjgyMzczMDNcIixcclxuICAgICAgICBcInpvb21cIjogXCIwLjAwMDAwMzgxNDY5NzI2XCIsXHJcbiAgICAgICAgXCJuX2xpbWl0XCI6IFwiNTAwXCIsXHJcbiAgICAgICAgXCJsaW1fc3VwXCI6IFwiMlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJtYW5kZWxicm90X3R5cGUxXCIsXHJcbiAgICAgICAgXCJjX3JlYWxcIjogXCItMC4wMTIzNzAxNDA4MDU4NDY3XCIsXHJcbiAgICAgICAgXCJjX2ltYWdlXCI6IFwiLTAuNjU0Mjg1MjM1ODAyMjgxXCIsXHJcbiAgICAgICAgXCJ6b29tXCI6IFwiMC4wMDAwMDM3NjMzNTI4NVwiLFxyXG4gICAgICAgIFwibl9saW1pdFwiOiBcIjUwMFwiLFxyXG4gICAgICAgIFwibGltX3N1cFwiOiBcIjJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJ0eXBlXCI6IFwibWFuZGVsYnJvdF90eXBlMVwiLFxyXG4gICAgICAgIFwiY19yZWFsXCI6IFwiLTAuOTI4MTQ1NjMxNzkwMTYxXCIsXHJcbiAgICAgICAgXCJjX2ltYWdlXCI6IFwiLTAuMjQxMTM2MTM3MDA4NjY2XCIsXHJcbiAgICAgICAgXCJ6b29tXCI6IFwiMC4wMDAwMDA1MTQ5ODQxMzFcIixcclxuICAgICAgICBcIm5fbGltaXRcIjogXCI1MDBcIixcclxuICAgICAgICBcImxpbV9zdXBcIjogXCIyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIm1hbmRlbGJyb3RfdHlwZTFcIixcclxuICAgICAgICBcImNfcmVhbFwiOiBcIjAuMzk5MTU2MDU2ODM0MTY3XCIsXHJcbiAgICAgICAgXCJjX2ltYWdlXCI6IFwiLTAuMTMwNDA5OTQyMDI1NTUzXCIsXHJcbiAgICAgICAgXCJ6b29tXCI6IFwiMC4wMDAwMDAzMzg3MDE3NTVcIixcclxuICAgICAgICBcIm5fbGltaXRcIjogXCI1MDBcIixcclxuICAgICAgICBcImxpbV9zdXBcIjogXCIyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIm1hbmRlbGJyb3RfdHlwZTFcIixcclxuICAgICAgICBcImNfcmVhbFwiOiBcIjAuMzczODg4NDU3NTY2NDk5XCIsXHJcbiAgICAgICAgXCJjX2ltYWdlXCI6IFwiLTAuNTk2MTc2MTY3OTUwMDMzXCIsXHJcbiAgICAgICAgXCJ6b29tXCI6IFwiMC4wMDAwMDAwMDc0NTA1ODA2XCIsXHJcbiAgICAgICAgXCJuX2xpbWl0XCI6IFwiNTAwXCIsXHJcbiAgICAgICAgXCJsaW1fc3VwXCI6IFwiMlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJtYW5kZWxicm90X3R5cGUxXCIsXHJcbiAgICAgICAgXCJjX3JlYWxcIjogXCItMS4zNTgxNDI2MDI4MzAxOVwiLFxyXG4gICAgICAgIFwiY19pbWFnZVwiOiBcIi0wLjAzOTA4MzU3NjY2MzM5NzJcIixcclxuICAgICAgICBcInpvb21cIjogXCIwLjAwMDAwMDAwMDEzOTY5ODM4NlwiLFxyXG4gICAgICAgIFwibl9saW1pdFwiOiBcIjUwMFwiLFxyXG4gICAgICAgIFwibGltX3N1cFwiOiBcIjJcIixcclxuICAgIH0sXHJcbiAgICAvLyB3aWtpcGVkaWFcclxuICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJtYW5kZWxicm90X3R5cGUxXCIsXHJcbiAgICAgICAgXCJjX3JlYWxcIjogXCItMC44NzU5MVwiLFxyXG4gICAgICAgIFwiY19pbWFnZVwiOiBcIjAuMjA0NjRcIixcclxuICAgICAgICBcInpvb21cIjogXCIwLjFcIixcclxuICAgICAgICBcIm5fbGltaXRcIjogXCI1MDBcIixcclxuICAgICAgICBcImxpbV9zdXBcIjogXCIyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIm1hbmRlbGJyb3RfdHlwZTFcIixcclxuICAgICAgICBcImNfcmVhbFwiOiBcIi0wLjc1OTg1NlwiLFxyXG4gICAgICAgIFwiY19pbWFnZVwiOiBcIjAuMTI1NTQ3XCIsXHJcbiAgICAgICAgXCJ6b29tXCI6IFwiMC4xXCIsXHJcbiAgICAgICAgXCJuX2xpbWl0XCI6IFwiNTAwXCIsXHJcbiAgICAgICAgXCJsaW1fc3VwXCI6IFwiMlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJtYW5kZWxicm90X3R5cGUxXCIsXHJcbiAgICAgICAgXCJjX3JlYWxcIjogXCItMC43NDMwMzBcIixcclxuICAgICAgICBcImNfaW1hZ2VcIjogXCIwLjEyNjQzM1wiLFxyXG4gICAgICAgIFwiem9vbVwiOiBcIjAuMDAwMDVcIixcclxuICAgICAgICBcIm5fbGltaXRcIjogXCI1MDBcIixcclxuICAgICAgICBcImxpbV9zdXBcIjogXCIyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIm1hbmRlbGJyb3RfdHlwZTFcIixcclxuICAgICAgICBcImNfcmVhbFwiOiBcIi0wLjc0MzU2NjlcIixcclxuICAgICAgICBcImNfaW1hZ2VcIjogXCIwLjEzMTQwMjNcIixcclxuICAgICAgICBcInpvb21cIjogXCIwLjAwMTIzXCIsXHJcbiAgICAgICAgXCJuX2xpbWl0XCI6IFwiNTAwXCIsXHJcbiAgICAgICAgXCJsaW1fc3VwXCI6IFwiMlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcInR5cGVcIjogXCJtYW5kZWxicm90X3R5cGUxXCIsXHJcbiAgICAgICAgXCJjX3JlYWxcIjogXCItMC43NDM2NDVcIixcclxuICAgICAgICBcImNfaW1hZ2VcIjogXCIwLjEzMTgyNzMzXCIsXHJcbiAgICAgICAgXCJ6b29tXCI6IFwiMC4wMDAwMjVcIixcclxuICAgICAgICBcIm5fbGltaXRcIjogXCI1MDBcIixcclxuICAgICAgICBcImxpbV9zdXBcIjogXCIyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIm1hbmRlbGJyb3RfdHlwZTFcIixcclxuICAgICAgICBcImNfcmVhbFwiOiBcIi0wLjc0MzY0NDc4NjBcIixcclxuICAgICAgICBcImNfaW1hZ2VcIjogXCIwLjEzMTgyNTI1MzZcIixcclxuICAgICAgICBcInpvb21cIjogXCIwLjAwMDAwMjVcIixcclxuICAgICAgICBcIm5fbGltaXRcIjogXCI1MDBcIixcclxuICAgICAgICBcImxpbV9zdXBcIjogXCIyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIm1hbmRlbGJyb3RfdHlwZTFcIixcclxuICAgICAgICBcImNfcmVhbFwiOiBcIi0wLjc0MzY0NVwiLFxyXG4gICAgICAgIFwiY19pbWFnZVwiOiBcIjAuMTMxODI1MjUzNlwiLFxyXG4gICAgICAgIFwiem9vbVwiOiBcIjAuMDAwMDAwMjVcIixcclxuICAgICAgICBcIm5fbGltaXRcIjogXCI1MDBcIixcclxuICAgICAgICBcImxpbV9zdXBcIjogXCIyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIm1hbmRlbGJyb3RfdHlwZTFcIixcclxuICAgICAgICBcImNfcmVhbFwiOiBcIi0xLjVcIixcclxuICAgICAgICBcImNfaW1hZ2VcIjogXCIwXCIsXHJcbiAgICAgICAgXCJ6b29tXCI6IFwiMC4wMDFcIixcclxuICAgICAgICBcIm5fbGltaXRcIjogXCI1MDBcIixcclxuICAgICAgICBcImxpbV9zdXBcIjogXCIyXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwidHlwZVwiOiBcIm1hbmRlbGJyb3RfdHlwZTJcIixcclxuICAgICAgICBcImNfcmVhbFwiOiBcIjAuMzlcIixcclxuICAgICAgICBcImNfaW1hZ2VcIjogXCIwLjAwMDVcIixcclxuICAgICAgICBcInpvb21cIjogXCIwLjAwMDA1XCIsXHJcbiAgICAgICAgXCJuX2xpbWl0XCI6IFwiNTAwXCIsXHJcbiAgICAgICAgXCJsaW1fc3VwXCI6IFwiMlwiLFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmxldCBwcmVfaW5kZXggPSAtMTtcclxuZXhwb3J0IGNvbnN0IHJhbmRvbV9zZXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRfcmFuZG9tX2luZGV4ID0gKGxlbmd0aCkgPT4ge1xyXG4gICAgICAgIC8vIE1hdGgucmFuZG9tKCnjga8w5Lul5LiKMeacqua6gOOBruODqeODs+ODgOODoOOBqua1ruWLleWwj+aVsOeCueaVsOOCkui/lOOBmVxyXG4gICAgICAgIC8vIOOBi+OBquOCiumBqeW9k+OBquWun+ijhVxyXG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTtcclxuICAgICAgICByZXR1cm4gciAlIGxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDjg6njg7Pjg4Djg6DjgavjgqTjg7Pjg4fjg4Pjgq/jgrnjgpLlvpfjgotcclxuICAgIGxldCByYW5kX2luZGV4ID0gMDtcclxuICAgIHdoaWxlICgxKSB7XHJcbiAgICAgICAgcmFuZF9pbmRleCA9IGdldF9yYW5kb21faW5kZXgoUkFORE9NX1NFVC5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChyYW5kX2luZGV4ICE9PSBwcmVfaW5kZXgpIHtcclxuICAgICAgICAgICAgcHJlX2luZGV4ID0gcmFuZF9pbmRleDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOODh+ODkOODg+OCsOeUqFxyXG4gICAgLy8gcmFuZF9pbmRleCA9IFJBTkRPTV9TRVQubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAvLyDoqK3lrprlgKTjgpLjgrvjg4Pjg4jjgZnjgotcclxuICAgIHNldF9tYW5kZWxicm90X3R5cGVfdmFsdWUoUkFORE9NX1NFVFtyYW5kX2luZGV4XS50eXBlKTtcclxuICAgIHNldF9tYW5kZWxicm90X2NfcmVhbF92YWx1ZShSQU5ET01fU0VUW3JhbmRfaW5kZXhdLmNfcmVhbCk7XHJcbiAgICBzZXRfbWFuZGVsYnJvdF9jX2ltYWdlX3ZhbHVlKFJBTkRPTV9TRVRbcmFuZF9pbmRleF0uY19pbWFnZSk7XHJcbiAgICBzZXRfbWFuZGVsYnJvdF96b29tX3ZhbHVlKFJBTkRPTV9TRVRbcmFuZF9pbmRleF0uem9vbSk7XHJcbiAgICBzZXRfbWFuZGVsYnJvdF9uX2xpbWl0X3ZhbHVlKFJBTkRPTV9TRVRbcmFuZF9pbmRleF0ubl9saW1pdCk7XHJcbiAgICBzZXRfbWFuZGVsYnJvdF9saW1fc3VwX3ZhbHVlKFJBTkRPTV9TRVRbcmFuZF9pbmRleF0ubGltX3N1cCk7XHJcbn0iLCIndXNlIHN0cmljdCdcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpYyA9IHtcclxuICAgIGdldE5EaXZlcmdlZDogZnVuY3Rpb24gKGNfcmVhbCwgY19pbWFnZSwgbl9saW1pdCwgbGltX3N1cCkge1xyXG4gICAgICAgIGxldCB4biA9IDAuMDtcclxuICAgICAgICBsZXQgeW4gPSAwLjA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuX2xpbWl0OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHhfbmV4dCA9IHhuICogeG4gLSB5biAqIHluICsgY19yZWFsO1xyXG4gICAgICAgICAgICBsZXQgeV9uZXh0ID0gMi4wICogeG4gKiB5biArIGNfaW1hZ2U7XHJcbiAgICAgICAgICAgIHhuID0geF9uZXh0O1xyXG4gICAgICAgICAgICB5biA9IHlfbmV4dDtcclxuICAgICAgICAgICAgaWYgKHhuICogeG4gKyB5biAqIHluID4gbGltX3N1cCAqIGxpbV9zdXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuX2xpbWl0O1xyXG4gICAgfSxcclxuICAgIGdlbmVyYXRlTWFuZGVsYnJvdFNldDogZnVuY3Rpb24gKFxyXG4gICAgICAgIGNhbnZhc193LFxyXG4gICAgICAgIGNhbnZhc19oLFxyXG4gICAgICAgIHpvb20sXHJcbiAgICAgICAgY19yZWFsLFxyXG4gICAgICAgIGNfaW1hZ2UsXHJcbiAgICAgICAgbl9saW1pdCxcclxuICAgICAgICBsaW1fc3VwLFxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IHlfbWluID0gLXpvb207XHJcbiAgICAgICAgbGV0IHlfbWF4ID0gem9vbTtcclxuICAgICAgICBsZXQgeF9taW4gPSAtem9vbTtcclxuICAgICAgICBsZXQgeF9tYXggPSB6b29tO1xyXG4gICAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNfaDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB5ID0geV9taW4gKyAoeV9tYXggLSB5X21pbikgKiBpIC8gY2FudmFzX2g7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2FudmFzX3c7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSB4X21pbiArICh4X21heCAtIHhfbWluKSAqIGogLyBjYW52YXNfdztcclxuICAgICAgICAgICAgICAgIGxldCBpdGVyX2luZGV4ID0gdGhpcy5nZXRORGl2ZXJnZWQoeCArIGNfcmVhbCwgeSArIGNfaW1hZ2UsIG5fbGltaXQsIGxpbV9zdXApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJfY29sb3IgPSAyNTUgLSBpdGVyX2luZGV4ICUgMjU1O1xyXG4gICAgICAgICAgICAgICAgbGV0IGdfY29sb3IgPSBpdGVyX2luZGV4ICUgMTYgKiAxNztcclxuICAgICAgICAgICAgICAgIGxldCBiX2NvbG9yID0gaXRlcl9pbmRleCAlIDggKiAzMjsgLy846Imy44Gr5aGX44KK5YiG44GR44KLXHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2gocl9jb2xvcik7IC8vUlxyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKGdfY29sb3IpOyAvL0dcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChiX2NvbG9yKTsgLy9CXHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goMjU1KTsvL0FcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gWiA9IFpeMiArIENcclxuZnVuY3Rpb24gZ2V0TkRpdmVyZ2VkMShjX3JlYWwsIGNfaW1hZ2UsIG5fbGltaXQsIGxpbV9zdXApIHtcclxuICAgIGxldCB4biA9IDAuMDtcclxuICAgIGxldCB5biA9IDAuMDtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbl9saW1pdDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHhfbmV4dCA9IHhuICogeG4gLSB5biAqIHluICsgY19yZWFsO1xyXG4gICAgICAgIGxldCB5X25leHQgPSAyLjAgKiB4biAqIHluICsgY19pbWFnZTtcclxuICAgICAgICB4biA9IHhfbmV4dDtcclxuICAgICAgICB5biA9IHlfbmV4dDtcclxuICAgICAgICBpZiAoeG4gKiB4biArIHluICogeW4gPiBsaW1fc3VwICogbGltX3N1cCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbl9saW1pdDtcclxufVxyXG5cclxuLy8gWiA9IFpeMyArIENcclxuZnVuY3Rpb24gZ2V0TkRpdmVyZ2VkMihjX3JlYWwsIGNfaW1hZ2UsIG5fbGltaXQsIGxpbV9zdXApIHtcclxuICAgIGxldCB4biA9IDAuMDtcclxuICAgIGxldCB5biA9IDAuMDtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbl9saW1pdDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHhfbmV4dCA9IHhuICogKHhuICogeG4gLSAzLjAgKiB5biAqIHluKSArIGNfcmVhbDtcclxuICAgICAgICBsZXQgeV9uZXh0ID0geW4gKiAoMy4wICogeG4gKiB4biAtIHluICogeW4pICsgY19pbWFnZTtcclxuICAgICAgICB4biA9IHhfbmV4dDtcclxuICAgICAgICB5biA9IHlfbmV4dDtcclxuICAgICAgICBpZiAoeG4gKiB4biArIHluICogeW4gPiBsaW1fc3VwICogbGltX3N1cCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbl9saW1pdDtcclxufVxyXG5cclxuLy8gWiA9IFpeNCArIENcclxuZnVuY3Rpb24gZ2V0TkRpdmVyZ2VkMyhjX3JlYWwsIGNfaW1hZ2UsIG5fbGltaXQsIGxpbV9zdXApIHtcclxuICAgIGxldCB4biA9IDAuMDtcclxuICAgIGxldCB5biA9IDAuMDtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbl9saW1pdDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHhfbmV4dCA9IHhuICogeG4gKiB4biAqIHhuIC0gNi4wICogeG4gKiB4biAqIHluICogeW4gKyB5biAqIHluICogeW4gKiB5biArIGNfcmVhbDtcclxuICAgICAgICBsZXQgeV9uZXh0ID0gNC4wICogeG4gKiB5biAqICh4biAqIHhuIC0geW4gKiB5bikgKyBjX2ltYWdlO1xyXG4gICAgICAgIHhuID0geF9uZXh0O1xyXG4gICAgICAgIHluID0geV9uZXh0O1xyXG4gICAgICAgIGlmICh4biAqIHhuICsgeW4gKiB5biA+IGxpbV9zdXAgKiBsaW1fc3VwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuX2xpbWl0O1xyXG59XHJcblxyXG4vLyBaID0gWl41ICsgQ1xyXG5mdW5jdGlvbiBnZXRORGl2ZXJnZWQ0KGNfcmVhbCwgY19pbWFnZSwgbl9saW1pdCwgbGltX3N1cCkge1xyXG4gICAgbGV0IHhuID0gMC4wO1xyXG4gICAgbGV0IHluID0gMC4wO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuX2xpbWl0OyBpKyspIHtcclxuICAgICAgICBsZXQgeF9uZXh0ID0geG4gKiAoeG4gKiB4biAqIHhuICogeG4gLSAxMC4wICogeG4gKiB4biAqIHluICogeW4gKyA1LjAgKiB5biAqIHluICogeW4gKiB5bikgKyBjX3JlYWw7XHJcbiAgICAgICAgbGV0IHlfbmV4dCA9IHluICogKDUuMCAqIHhuICogeG4gKiB4biAqIHhuIC0gMTAuMCAqIHhuICogeG4gKiB5biAqIHluICsgeW4gKiB5biAqIHluICogeW4pICsgY19pbWFnZTtcclxuICAgICAgICB4biA9IHhfbmV4dDtcclxuICAgICAgICB5biA9IHlfbmV4dDtcclxuICAgICAgICBpZiAoeG4gKiB4biArIHluICogeW4gPiBsaW1fc3VwICogbGltX3N1cCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbl9saW1pdDtcclxufVxyXG5cclxuLy8gWiA9IChaJyleMiArIENcclxuZnVuY3Rpb24gZ2V0TkRpdmVyZ2VkNShjX3JlYWwsIGNfaW1hZ2UsIG5fbGltaXQsIGxpbV9zdXApIHtcclxuICAgIGxldCB4biA9IDAuMDtcclxuICAgIGxldCB5biA9IDAuMDtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbl9saW1pdDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHhfbmV4dCA9IHhuICogeG4gLSB5biAqIHluICsgY19yZWFsO1xyXG4gICAgICAgIGxldCB5X25leHQgPSAtMi4wICogeG4gKiB5biArIGNfaW1hZ2U7XHJcbiAgICAgICAgeG4gPSB4X25leHQ7XHJcbiAgICAgICAgeW4gPSB5X25leHQ7XHJcbiAgICAgICAgaWYgKHhuICogeG4gKyB5biAqIHluID4gbGltX3N1cCAqIGxpbV9zdXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5fbGltaXQ7XHJcbn1cclxuXHJcbi8vIFogPSAoWicpXjMgKyBDXHJcbmZ1bmN0aW9uIGdldE5EaXZlcmdlZDYoY19yZWFsLCBjX2ltYWdlLCBuX2xpbWl0LCBsaW1fc3VwKSB7XHJcbiAgICBsZXQgeG4gPSAwLjA7XHJcbiAgICBsZXQgeW4gPSAwLjA7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5fbGltaXQ7IGkrKykge1xyXG4gICAgICAgIGxldCB4X25leHQgPSB4biAqICh4biAqIHhuIC0gMy4wICogeW4gKiB5bikgKyBjX3JlYWw7XHJcbiAgICAgICAgbGV0IHlfbmV4dCA9IHluICogKHluICogeW4gLSAzLjAgKiB4biAqIHhuKSArIGNfaW1hZ2U7XHJcbiAgICAgICAgeG4gPSB4X25leHQ7XHJcbiAgICAgICAgeW4gPSB5X25leHQ7XHJcbiAgICAgICAgaWYgKHhuICogeG4gKyB5biAqIHluID4gbGltX3N1cCAqIGxpbV9zdXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5fbGltaXQ7XHJcbn1cclxuXHJcbi8vIFogPSAoWicpXjQgKyBDXHJcbmZ1bmN0aW9uIGdldE5EaXZlcmdlZDcoY19yZWFsLCBjX2ltYWdlLCBuX2xpbWl0LCBsaW1fc3VwKSB7XHJcbiAgICBsZXQgeG4gPSAwLjA7XHJcbiAgICBsZXQgeW4gPSAwLjA7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG5fbGltaXQ7IGkrKykge1xyXG4gICAgICAgIGxldCB4X25leHQgPSB4biAqIHhuICogeG4gKiB4biAtIDYuMCAqIHhuICogeG4gKiB5biAqIHluICsgeW4gKiB5biAqIHluICogeW4gKyBjX3JlYWw7XHJcbiAgICAgICAgbGV0IHlfbmV4dCA9IDQuMCAqIHhuICogeW4gKiAoeW4gKiB5biAtIHhuICogeG4pICsgY19pbWFnZTtcclxuICAgICAgICB4biA9IHhfbmV4dDtcclxuICAgICAgICB5biA9IHlfbmV4dDtcclxuICAgICAgICBpZiAoeG4gKiB4biArIHluICogeW4gPiBsaW1fc3VwICogbGltX3N1cCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbl9saW1pdDtcclxufVxyXG5cclxuLy8gWiA9IChaJyleNSArIENcclxuZnVuY3Rpb24gZ2V0TkRpdmVyZ2VkOChjX3JlYWwsIGNfaW1hZ2UsIG5fbGltaXQsIGxpbV9zdXApIHtcclxuICAgIGxldCB4biA9IDAuMDtcclxuICAgIGxldCB5biA9IDAuMDtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbl9saW1pdDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHhfbmV4dCA9IHhuICogKHhuICogeG4gKiB4biAqIHhuIC0gMTAuMCAqIHhuICogeG4gKiB5biAqIHluICsgNS4wICogeW4gKiB5biAqIHluICogeW4pICsgY19yZWFsO1xyXG4gICAgICAgIGxldCB5X25leHQgPSAteW4gKiAoNS4wICogeG4gKiB4biAqIHhuICogeG4gLSAxMC4wICogeG4gKiB4biAqIHluICogeW4gKyB5biAqIHluICogeW4gKiB5bikgKyBjX2ltYWdlO1xyXG4gICAgICAgIHhuID0geF9uZXh0O1xyXG4gICAgICAgIHluID0geV9uZXh0O1xyXG4gICAgICAgIGlmICh4biAqIHhuICsgeW4gKiB5biA+IGxpbV9zdXAgKiBsaW1fc3VwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBuX2xpbWl0O1xyXG59XHJcblxyXG4vLyBaID0gWl4xMCArIENcclxuZnVuY3Rpb24gZ2V0TkRpdmVyZ2VkOShjX3JlYWwsIGNfaW1hZ2UsIG5fbGltaXQsIGxpbV9zdXApIHtcclxuICAgIGxldCB4biA9IDAuMDtcclxuICAgIGxldCB5biA9IDAuMDtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbl9saW1pdDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHhfbmV4dCA9IHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuIC0gNDUuMCAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB5biAqIHluICsgMjEwLjAgKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB5biAqIHluICogeW4gKiB5biAtIDIxMC4wICogeG4gKiB4biAqIHhuICogeG4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKyA0NS4wICogeG4gKiB4biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gLSB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biArIGNfcmVhbDtcclxuICAgICAgICBsZXQgeV9uZXh0ID0gMTAuMCAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHluIC0gMTIwLjAgKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHluICogeW4gKiB5biArIDI1Mi4wICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHluICogeW4gKiB5biAqIHluICogeW4gLSAxMjAuMCAqIHhuICogeG4gKiB4biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICsgMTAuMCAqIHhuICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICsgY19pbWFnZTtcclxuICAgICAgICB4biA9IHhfbmV4dDtcclxuICAgICAgICB5biA9IHlfbmV4dDtcclxuICAgICAgICBpZiAoeG4gKiB4biArIHluICogeW4gPiBsaW1fc3VwICogbGltX3N1cCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbl9saW1pdDtcclxufVxyXG5cclxuLy8gWiA9IChaJyleMTAgKyBDXHJcbmZ1bmN0aW9uIGdldE5EaXZlcmdlZDEwKGNfcmVhbCwgY19pbWFnZSwgbl9saW1pdCwgbGltX3N1cCkge1xyXG4gICAgbGV0IHhuID0gMC4wO1xyXG4gICAgbGV0IHluID0gMC4wO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBuX2xpbWl0OyBpKyspIHtcclxuICAgICAgICBsZXQgeF9uZXh0ID0geG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gLSA0NS4wICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHluICogeW4gKyAyMTAuMCAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHluICogeW4gKiB5biAqIHluIC0gMjEwLjAgKiB4biAqIHhuICogeG4gKiB4biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biArIDQ1LjAgKiB4biAqIHhuICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biAtIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICsgY19yZWFsO1xyXG4gICAgICAgIGxldCB5X25leHQgPSAtMTAuMCAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHluICsgMTIwLjAgKiB4biAqIHhuICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHluICogeW4gKiB5biAtIDI1Mi4wICogeG4gKiB4biAqIHhuICogeG4gKiB4biAqIHluICogeW4gKiB5biAqIHluICogeW4gKyAxMjAuMCAqIHhuICogeG4gKiB4biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluIC0gMTAuMCAqIHhuICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICogeW4gKiB5biAqIHluICsgY19pbWFnZTtcclxuICAgICAgICB4biA9IHhfbmV4dDtcclxuICAgICAgICB5biA9IHlfbmV4dDtcclxuICAgICAgICBpZiAoeG4gKiB4biArIHluICogeW4gPiBsaW1fc3VwICogbGltX3N1cCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbl9saW1pdDtcclxufVxyXG5cclxuY29uc3QgTUFOREVMQlJPVF9GVU5DID0ge1xyXG4gICAgXCJtYW5kZWxicm90X3R5cGUxXCI6IGdldE5EaXZlcmdlZDEsXHJcbiAgICBcIm1hbmRlbGJyb3RfdHlwZTJcIjogZ2V0TkRpdmVyZ2VkMixcclxuICAgIFwibWFuZGVsYnJvdF90eXBlM1wiOiBnZXRORGl2ZXJnZWQzLFxyXG4gICAgXCJtYW5kZWxicm90X3R5cGU0XCI6IGdldE5EaXZlcmdlZDQsXHJcbiAgICBcIm1hbmRlbGJyb3RfdHlwZTVcIjogZ2V0TkRpdmVyZ2VkNSxcclxuICAgIFwibWFuZGVsYnJvdF90eXBlNlwiOiBnZXRORGl2ZXJnZWQ2LFxyXG4gICAgXCJtYW5kZWxicm90X3R5cGU3XCI6IGdldE5EaXZlcmdlZDcsXHJcbiAgICBcIm1hbmRlbGJyb3RfdHlwZThcIjogZ2V0TkRpdmVyZ2VkOCxcclxuICAgIFwibWFuZGVsYnJvdF90eXBlOVwiOiBnZXRORGl2ZXJnZWQ5LFxyXG4gICAgXCJtYW5kZWxicm90X3R5cGUxMFwiOiBnZXRORGl2ZXJnZWQxMCxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU1hbmRlbGJyb3RTZXQoXHJcbiAgICBjYW52YXNfdyxcclxuICAgIGNhbnZhc19oLFxyXG4gICAgem9vbSxcclxuICAgIGNfcmVhbCxcclxuICAgIGNfaW1hZ2UsXHJcbiAgICBuX2xpbWl0LFxyXG4gICAgbGltX3N1cCxcclxuICAgIG1hbmRlbGJyb3RfdHlwZSxcclxuKSB7XHJcbiAgICBsZXQgeV9taW4gPSAtem9vbTtcclxuICAgIGxldCB5X21heCA9IHpvb207XHJcbiAgICBsZXQgeF9taW4gPSAtem9vbTtcclxuICAgIGxldCB4X21heCA9IHpvb207XHJcbiAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW52YXNfaDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHkgPSB5X21pbiArICh5X21heCAtIHlfbWluKSAqIGkgLyBjYW52YXNfaDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNhbnZhc193OyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IHggPSB4X21pbiArICh4X21heCAtIHhfbWluKSAqIGogLyBjYW52YXNfdztcclxuICAgICAgICAgICAgbGV0IGl0ZXJfaW5kZXggPSBNQU5ERUxCUk9UX0ZVTkNbbWFuZGVsYnJvdF90eXBlXSh4ICsgY19yZWFsLCB5ICsgY19pbWFnZSwgbl9saW1pdCwgbGltX3N1cCk7XHJcbiAgICAgICAgICAgIGxldCByX2NvbG9yID0gMjU1IC0gaXRlcl9pbmRleCAlIDI1NTtcclxuICAgICAgICAgICAgbGV0IGdfY29sb3IgPSBpdGVyX2luZGV4ICUgMTYgKiAxNztcclxuICAgICAgICAgICAgbGV0IGJfY29sb3IgPSBpdGVyX2luZGV4ICUgOCAqIDMyOyAvLzjoibLjgavloZfjgorliIbjgZHjgotcclxuICAgICAgICAgICAgZGF0YS5wdXNoKHJfY29sb3IpOyAvL1JcclxuICAgICAgICAgICAgZGF0YS5wdXNoKGdfY29sb3IpOyAvL0dcclxuICAgICAgICAgICAgZGF0YS5wdXNoKGJfY29sb3IpOyAvL0JcclxuICAgICAgICAgICAgZGF0YS5wdXNoKDI1NSk7Ly9BXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9