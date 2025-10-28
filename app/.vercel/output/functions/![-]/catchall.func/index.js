globalThis.global = globalThis;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key2 of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from2[key2], enumerable: !(desc = __getOwnPropDesc(from2, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);

// .svelte-kit/output/server/chunks/false.js
var BROWSER;
var init_false = __esm({
  ".svelte-kit/output/server/chunks/false.js"() {
    BROWSER = false;
  }
});

// node_modules/@sveltejs/kit/src/exports/internal/remote-functions.js
var init_remote_functions = __esm({
  "node_modules/@sveltejs/kit/src/exports/internal/remote-functions.js"() {
  }
});

// node_modules/@sveltejs/kit/src/exports/internal/index.js
var HttpError, Redirect, SvelteKitError, ActionFailure;
var init_internal = __esm({
  "node_modules/@sveltejs/kit/src/exports/internal/index.js"() {
    init_remote_functions();
    HttpError = class {
      /**
       * @param {number} status
       * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
       */
      constructor(status, body2) {
        this.status = status;
        if (typeof body2 === "string") {
          this.body = { message: body2 };
        } else if (body2) {
          this.body = body2;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class {
      /**
       * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
       * @param {string} location
       */
      constructor(status, location2) {
        this.status = status;
        this.location = location2;
      }
    };
    SvelteKitError = class extends Error {
      /**
       * @param {number} status
       * @param {string} text
       * @param {string} message
       */
      constructor(status, text2, message) {
        super(message);
        this.status = status;
        this.text = text2;
      }
    };
    ActionFailure = class {
      /**
       * @param {number} status
       * @param {T} data
       */
      constructor(status, data) {
        this.status = status;
        this.data = data;
      }
    };
  }
});

// node_modules/esm-env/true.js
var true_default;
var init_true = __esm({
  "node_modules/esm-env/true.js"() {
    true_default = true;
  }
});

// node_modules/esm-env/dev-fallback.js
var node_env, dev_fallback_default;
var init_dev_fallback = __esm({
  "node_modules/esm-env/dev-fallback.js"() {
    node_env = globalThis.process?.env?.NODE_ENV;
    dev_fallback_default = node_env && !node_env.toLowerCase().startsWith("prod");
  }
});

// node_modules/esm-env/false.js
var init_false2 = __esm({
  "node_modules/esm-env/false.js"() {
  }
});

// node_modules/esm-env/index.js
var init_esm_env = __esm({
  "node_modules/esm-env/index.js"() {
    init_true();
    init_dev_fallback();
    init_false2();
  }
});

// node_modules/@sveltejs/kit/src/runtime/pathname.js
var init_pathname = __esm({
  "node_modules/@sveltejs/kit/src/runtime/pathname.js"() {
  }
});

// node_modules/@sveltejs/kit/src/runtime/utils.js
var text_encoder, text_decoder;
var init_utils = __esm({
  "node_modules/@sveltejs/kit/src/runtime/utils.js"() {
    init_esm_env();
    text_encoder = new TextEncoder();
    text_decoder = new TextDecoder();
  }
});

// node_modules/@sveltejs/kit/src/version.js
var init_version = __esm({
  "node_modules/@sveltejs/kit/src/version.js"() {
  }
});

// node_modules/@sveltejs/kit/src/exports/index.js
function error(status, body2) {
  if ((!true_default || dev_fallback_default) && (isNaN(status) || status < 400 || status > 599)) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  throw new HttpError(status, body2);
}
function json(data, init2) {
  const body2 = JSON.stringify(data);
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    headers2.set("content-length", text_encoder.encode(body2).byteLength.toString());
  }
  if (!headers2.has("content-type")) {
    headers2.set("content-type", "application/json");
  }
  return new Response(body2, {
    ...init2,
    headers: headers2
  });
}
function text(body2, init2) {
  const headers2 = new Headers(init2?.headers);
  if (!headers2.has("content-length")) {
    const encoded = text_encoder.encode(body2);
    headers2.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init2,
      headers: headers2
    });
  }
  return new Response(body2, {
    ...init2,
    headers: headers2
  });
}
var init_exports = __esm({
  "node_modules/@sveltejs/kit/src/exports/index.js"() {
    init_internal();
    init_esm_env();
    init_pathname();
    init_utils();
    init_version();
  }
});

// node_modules/@sveltejs/kit/src/runtime/server/constants.js
var IN_WEBCONTAINER;
var init_constants = __esm({
  "node_modules/@sveltejs/kit/src/runtime/server/constants.js"() {
    IN_WEBCONTAINER = !!globalThis.process?.versions?.webcontainer;
  }
});

// node_modules/@sveltejs/kit/src/exports/internal/event.js
function with_request_store(store, fn) {
  try {
    sync_store = store;
    return als ? als.run(store, fn) : fn();
  } finally {
    if (!IN_WEBCONTAINER) {
      sync_store = null;
    }
  }
}
var sync_store, als;
var init_event = __esm({
  "node_modules/@sveltejs/kit/src/exports/internal/event.js"() {
    init_constants();
    sync_store = null;
    import("node:async_hooks").then((hooks) => als = new hooks.AsyncLocalStorage()).catch(() => {
    });
  }
});

// node_modules/@sveltejs/kit/src/exports/internal/server.js
function merge_tracing(event_like, current2) {
  return {
    ...event_like,
    tracing: {
      ...event_like.tracing,
      current: current2
    }
  };
}
var init_server = __esm({
  "node_modules/@sveltejs/kit/src/exports/internal/server.js"() {
    init_event();
  }
});

// .svelte-kit/output/server/chunks/exports.js
function resolve(base2, path) {
  if (path[0] === "/" && path[1] === "/") return path;
  let url = new URL(base2, internal);
  url = new URL(path, url);
  return url.protocol === internal.protocol ? url.pathname + url.search + url.hash : url.href;
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore") return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
function make_trackable(url, callback, search_params_callback, allow_hash = false) {
  const tracked = new URL(url);
  Object.defineProperty(tracked, "searchParams", {
    value: new Proxy(tracked.searchParams, {
      get(obj, key2) {
        if (key2 === "get" || key2 === "getAll" || key2 === "has") {
          return (param) => {
            search_params_callback(param);
            return obj[key2](param);
          };
        }
        callback();
        const value = Reflect.get(obj, key2);
        return typeof value === "function" ? value.bind(obj) : value;
      }
    }),
    enumerable: true,
    configurable: true
  });
  const tracked_url_properties = ["href", "pathname", "search", "toString", "toJSON"];
  if (allow_hash) tracked_url_properties.push("hash");
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
    tracked.searchParams[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url.searchParams, opts);
    };
  }
  if (!allow_hash) {
    disable_hash(tracked);
  }
  return tracked;
}
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
function allow_nodejs_console_log(url) {
  {
    url[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
function validator(expected) {
  function validate(module, file) {
    if (!module) return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2)) continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
var internal, valid_layout_exports, valid_page_exports, valid_layout_server_exports, valid_page_server_exports, valid_server_exports, validate_layout_exports, validate_page_exports, validate_layout_server_exports, validate_page_server_exports, validate_server_exports;
var init_exports2 = __esm({
  ".svelte-kit/output/server/chunks/exports.js"() {
    internal = new URL("sveltekit-internal://");
    valid_layout_exports = /* @__PURE__ */ new Set([
      "load",
      "prerender",
      "csr",
      "ssr",
      "trailingSlash",
      "config"
    ]);
    valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
    valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
    valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
    valid_server_exports = /* @__PURE__ */ new Set([
      "GET",
      "POST",
      "PATCH",
      "PUT",
      "DELETE",
      "OPTIONS",
      "HEAD",
      "fallback",
      "prerender",
      "trailingSlash",
      "config",
      "entries"
    ]);
    validate_layout_exports = validator(valid_layout_exports);
    validate_page_exports = validator(valid_page_exports);
    validate_layout_server_exports = validator(valid_layout_server_exports);
    validate_page_server_exports = validator(valid_page_server_exports);
    validate_server_exports = validator(valid_server_exports);
  }
});

// .svelte-kit/output/server/chunks/utils.js
function get_relative_path(from2, to) {
  const from_parts = from2.split(/[/\\]/);
  const to_parts = to.split(/[/\\]/);
  from_parts.pop();
  while (from_parts[0] === to_parts[0]) {
    from_parts.shift();
    to_parts.shift();
  }
  let i2 = from_parts.length;
  while (i2--) from_parts[i2] = "..";
  return from_parts.concat(to_parts).join("/");
}
function base64_encode(bytes) {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(bytes).toString("base64");
  }
  let binary = "";
  for (let i2 = 0; i2 < bytes.length; i2++) {
    binary += String.fromCharCode(bytes[i2]);
  }
  return btoa(binary);
}
function base64_decode(encoded) {
  if (globalThis.Buffer) {
    const buffer = globalThis.Buffer.from(encoded, "base64");
    return new Uint8Array(buffer);
  }
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let i2 = 0; i2 < binary.length; i2++) {
    bytes[i2] = binary.charCodeAt(i2);
  }
  return bytes;
}
var text_encoder2, text_decoder2;
var init_utils2 = __esm({
  ".svelte-kit/output/server/chunks/utils.js"() {
    text_encoder2 = new TextEncoder();
    text_decoder2 = new TextDecoder();
  }
});

// .svelte-kit/output/server/chunks/context.js
function run_all(arr) {
  for (var i2 = 0; i2 < arr.length; i2++) {
    arr[i2]();
  }
}
function deferred() {
  var resolve2;
  var reject;
  var promise = new Promise((res, rej) => {
    resolve2 = res;
    reject = rej;
  });
  return { promise, resolve: resolve2, reject };
}
function fallback(value, fallback2, lazy = false) {
  return value === void 0 ? lazy ? (
    /** @type {() => V} */
    fallback2()
  ) : (
    /** @type {V} */
    fallback2
  ) : value;
}
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a4, b) {
  return a4 != a4 ? b == b : a4 !== b || a4 !== null && typeof a4 === "object" || typeof a4 === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}
function lifecycle_outside_component(name) {
  {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
function escape_html(value, is_attr) {
  const str = String(value ?? "");
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last2 = 0;
  while (pattern2.test(str)) {
    const i2 = pattern2.lastIndex - 1;
    const ch = str[i2];
    escaped2 += str.substring(last2, i2) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last2 = i2 + 1;
  }
  return escaped2 + str.substring(last2);
}
function set_ssr_context(v2) {
  ssr_context = v2;
}
function getContext(key2) {
  const context_map = get_or_init_context_map();
  const result = (
    /** @type {T} */
    context_map.get(key2)
  );
  return result;
}
function setContext(key2, context3) {
  get_or_init_context_map().set(key2, context3);
  return context3;
}
function get_or_init_context_map(name) {
  if (ssr_context === null) {
    lifecycle_outside_component();
  }
  return ssr_context.c ?? (ssr_context.c = new Map(get_parent_context(ssr_context) || void 0));
}
function push(fn) {
  ssr_context = { p: ssr_context, c: null, r: null };
}
function pop() {
  ssr_context = /** @type {SSRContext} */
  ssr_context.p;
}
function get_parent_context(ssr_context2) {
  let parent = ssr_context2.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
var is_array, index_of, array_from, define_property, get_descriptor, object_prototype, array_prototype, get_prototype_of, is_extensible, noop, ATTR_REGEX, CONTENT_REGEX, ssr_context;
var init_context = __esm({
  ".svelte-kit/output/server/chunks/context.js"() {
    is_array = Array.isArray;
    index_of = Array.prototype.indexOf;
    array_from = Array.from;
    define_property = Object.defineProperty;
    get_descriptor = Object.getOwnPropertyDescriptor;
    object_prototype = Object.prototype;
    array_prototype = Array.prototype;
    get_prototype_of = Object.getPrototypeOf;
    is_extensible = Object.isExtensible;
    noop = () => {
    };
    ATTR_REGEX = /[&"<]/g;
    CONTENT_REGEX = /[&<]/g;
    ssr_context = null;
  }
});

// node_modules/clsx/dist/clsx.mjs
function r(e2) {
  var t2, f3, n4 = "";
  if ("string" == typeof e2 || "number" == typeof e2) n4 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) {
    var o3 = e2.length;
    for (t2 = 0; t2 < o3; t2++) e2[t2] && (f3 = r(e2[t2])) && (n4 && (n4 += " "), n4 += f3);
  } else for (f3 in e2) e2[f3] && (n4 && (n4 += " "), n4 += f3);
  return n4;
}
function clsx() {
  for (var e2, t2, f3 = 0, n4 = "", o3 = arguments.length; f3 < o3; f3++) (e2 = arguments[f3]) && (t2 = r(e2)) && (n4 && (n4 += " "), n4 += t2);
  return n4;
}
var init_clsx = __esm({
  "node_modules/clsx/dist/clsx.mjs"() {
  }
});

// .svelte-kit/output/server/chunks/index.js
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i2 = 0; i2 < subscriber_queue.length; i2 += 2) {
            subscriber_queue[i2][0](subscriber_queue[i2 + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set2(fn(
      /** @type {T} */
      value
    ));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set2, update) || noop;
    }
    run(
      /** @type {T} */
      value
    );
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set: set2, update, subscribe };
}
var subscriber_queue;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    init_context();
    init_clsx();
    subscriber_queue = [];
  }
});

// .svelte-kit/output/server/chunks/index2.js
function effect_update_depth_exceeded() {
  {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function hydration_failed() {
  {
    throw new Error(`https://svelte.dev/e/hydration_failed`);
  }
}
function state_descriptors_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
  }
}
function state_prototype_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
  }
}
function state_unsafe_mutation() {
  {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}
function svelte_boundary_reset_onerror() {
  {
    throw new Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
  }
}
function set_component_context(context3) {
  component_context = context3;
}
function push2(props, runes = false, fn) {
  component_context = {
    p: component_context,
    i: false,
    c: null,
    e: null,
    s: props,
    x: null,
    l: null
  };
}
function pop2(component14) {
  var context3 = (
    /** @type {ComponentContext} */
    component_context
  );
  var effects = context3.e;
  if (effects !== null) {
    context3.e = null;
    for (var fn of effects) {
      create_user_effect(fn);
    }
  }
  context3.i = true;
  component_context = context3.p;
  return (
    /** @type {T} */
    {}
  );
}
function is_runes() {
  return true;
}
function run_micro_tasks() {
  var tasks = micro_tasks;
  micro_tasks = [];
  run_all(tasks);
}
function queue_micro_task(fn) {
  if (micro_tasks.length === 0 && !is_flushing_sync) {
    var tasks = micro_tasks;
    queueMicrotask(() => {
      if (tasks === micro_tasks) run_micro_tasks();
    });
  }
  micro_tasks.push(fn);
}
function flush_tasks() {
  while (micro_tasks.length > 0) {
    run_micro_tasks();
  }
}
function handle_error(error2) {
  var effect = active_effect;
  if (effect === null) {
    active_reaction.f |= ERROR_VALUE;
    return error2;
  }
  if ((effect.f & EFFECT_RAN) === 0) {
    if ((effect.f & BOUNDARY_EFFECT) === 0) {
      throw error2;
    }
    effect.b.error(error2);
  } else {
    invoke_error_boundary(error2, effect);
  }
}
function invoke_error_boundary(error2, effect) {
  while (effect !== null) {
    if ((effect.f & BOUNDARY_EFFECT) !== 0) {
      try {
        effect.b.error(error2);
        return;
      } catch (e2) {
        error2 = e2;
      }
    }
    effect = effect.parent;
  }
  throw error2;
}
function flushSync(fn) {
  var was_flushing_sync = is_flushing_sync;
  is_flushing_sync = true;
  try {
    var result;
    if (fn) ;
    while (true) {
      flush_tasks();
      if (queued_root_effects.length === 0) {
        current_batch?.flush();
        if (queued_root_effects.length === 0) {
          last_scheduled_effect = null;
          return (
            /** @type {T} */
            result
          );
        }
      }
      flush_effects();
    }
  } finally {
    is_flushing_sync = was_flushing_sync;
  }
}
function flush_effects() {
  var was_updating_effect = is_updating_effect;
  is_flushing = true;
  try {
    var flush_count = 0;
    set_is_updating_effect(true);
    while (queued_root_effects.length > 0) {
      var batch = Batch.ensure();
      if (flush_count++ > 1e3) {
        var updates, entry;
        if (BROWSER) ;
        infinite_loop_guard();
      }
      batch.process(queued_root_effects);
      old_values.clear();
    }
  } finally {
    is_flushing = false;
    set_is_updating_effect(was_updating_effect);
    last_scheduled_effect = null;
  }
}
function infinite_loop_guard() {
  try {
    effect_update_depth_exceeded();
  } catch (error2) {
    invoke_error_boundary(error2, last_scheduled_effect);
  }
}
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  var i2 = 0;
  while (i2 < length) {
    var effect = effects[i2++];
    if ((effect.f & (DESTROYED | INERT)) === 0 && is_dirty(effect)) {
      eager_block_effects = /* @__PURE__ */ new Set();
      update_effect(effect);
      if (effect.deps === null && effect.first === null && effect.nodes_start === null) {
        if (effect.teardown === null && effect.ac === null) {
          unlink_effect(effect);
        } else {
          effect.fn = null;
        }
      }
      if (eager_block_effects?.size > 0) {
        old_values.clear();
        for (const e2 of eager_block_effects) {
          if ((e2.f & (DESTROYED | INERT)) !== 0) continue;
          const ordered_effects = [e2];
          let ancestor = e2.parent;
          while (ancestor !== null) {
            if (eager_block_effects.has(ancestor)) {
              eager_block_effects.delete(ancestor);
              ordered_effects.push(ancestor);
            }
            ancestor = ancestor.parent;
          }
          for (let j2 = ordered_effects.length - 1; j2 >= 0; j2--) {
            const e22 = ordered_effects[j2];
            if ((e22.f & (DESTROYED | INERT)) !== 0) continue;
            update_effect(e22);
          }
        }
        eager_block_effects.clear();
      }
    }
  }
  eager_block_effects = null;
}
function mark_effects(value, sources, marked, checked) {
  if (marked.has(value)) return;
  marked.add(value);
  if (value.reactions !== null) {
    for (const reaction of value.reactions) {
      const flags2 = reaction.f;
      if ((flags2 & DERIVED) !== 0) {
        mark_effects(
          /** @type {Derived} */
          reaction,
          sources,
          marked,
          checked
        );
      } else if ((flags2 & (ASYNC | BLOCK_EFFECT)) !== 0 && (flags2 & DIRTY) === 0 && // we may have scheduled this one already
      depends_on(reaction, sources, checked)) {
        set_signal_status(reaction, DIRTY);
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}
function depends_on(reaction, sources, checked) {
  const depends = checked.get(reaction);
  if (depends !== void 0) return depends;
  if (reaction.deps !== null) {
    for (const dep of reaction.deps) {
      if (sources.includes(dep)) {
        return true;
      }
      if ((dep.f & DERIVED) !== 0 && depends_on(
        /** @type {Derived} */
        dep,
        sources,
        checked
      )) {
        checked.set(
          /** @type {Derived} */
          dep,
          true
        );
        return true;
      }
    }
  }
  checked.set(reaction, false);
  return false;
}
function schedule_effect(signal) {
  var effect = last_scheduled_effect = signal;
  while (effect.parent !== null) {
    effect = effect.parent;
    var flags2 = effect.f;
    if (is_flushing && effect === active_effect && (flags2 & BLOCK_EFFECT) !== 0) {
      return;
    }
    if ((flags2 & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
      if ((flags2 & CLEAN) === 0) return;
      effect.f ^= CLEAN;
    }
  }
  queued_root_effects.push(effect);
}
function destroy_derived_effects(derived) {
  var effects = derived.effects;
  if (effects !== null) {
    derived.effects = null;
    for (var i2 = 0; i2 < effects.length; i2 += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i2]
      );
    }
  }
}
function get_derived_parent_effect(derived) {
  var parent = derived.parent;
  while (parent !== null) {
    if ((parent.f & DERIVED) === 0) {
      return (
        /** @type {Effect} */
        parent
      );
    }
    parent = parent.parent;
  }
  return null;
}
function execute_derived(derived) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(get_derived_parent_effect(derived));
  {
    try {
      derived.f &= ~WAS_MARKED;
      destroy_derived_effects(derived);
      value = update_reaction(derived);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived) {
  var value = execute_derived(derived);
  if (!derived.equals(value)) {
    derived.v = value;
    derived.wv = increment_write_version();
  }
  if (is_destroying_effect) {
    return;
  }
  if (batch_values !== null) {
    batch_values.set(derived, derived.v);
  } else {
    var status = (skip_reaction || (derived.f & UNOWNED) !== 0) && derived.deps !== null ? MAYBE_DIRTY : CLEAN;
    set_signal_status(derived, status);
  }
}
function source(v2, stack) {
  var signal = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: v2,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  return signal;
}
// @__NO_SIDE_EFFECTS__
function state(v2, stack) {
  const s5 = source(v2);
  push_reaction_value(s5);
  return s5;
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable = false, trackable = true) {
  const s5 = source(initial_value);
  if (!immutable) {
    s5.equals = safe_equals;
  }
  return s5;
}
function set(source2, value, should_proxy = false) {
  if (active_reaction !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!untracking || (active_reaction.f & EAGER_EFFECT) !== 0) && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | EAGER_EFFECT)) !== 0 && !current_sources?.includes(source2)) {
    state_unsafe_mutation();
  }
  let new_value = should_proxy ? proxy(value) : value;
  return internal_set(source2, new_value);
}
function internal_set(source2, value) {
  if (!source2.equals(value)) {
    var old_value = source2.v;
    if (is_destroying_effect) {
      old_values.set(source2, value);
    } else {
      old_values.set(source2, old_value);
    }
    source2.v = value;
    var batch = Batch.ensure();
    batch.capture(source2, old_value);
    if ((source2.f & DERIVED) !== 0) {
      if ((source2.f & DIRTY) !== 0) {
        execute_derived(
          /** @type {Derived} */
          source2
        );
      }
      set_signal_status(source2, (source2.f & UNOWNED) === 0 ? CLEAN : MAYBE_DIRTY);
    }
    source2.wv = increment_write_version();
    mark_reactions(source2, DIRTY);
    if (active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
    if (!batch.is_fork && eager_effects.size > 0 && !eager_effects_deferred) {
      flush_eager_effects();
    }
  }
  return value;
}
function flush_eager_effects() {
  eager_effects_deferred = false;
  const inspects = Array.from(eager_effects);
  for (const effect of inspects) {
    if ((effect.f & CLEAN) !== 0) {
      set_signal_status(effect, MAYBE_DIRTY);
    }
    if (is_dirty(effect)) {
      update_effect(effect);
    }
  }
  eager_effects.clear();
}
function increment(source2) {
  set(source2, source2.v + 1);
}
function mark_reactions(signal, status) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var length = reactions.length;
  for (var i2 = 0; i2 < length; i2++) {
    var reaction = reactions[i2];
    var flags2 = reaction.f;
    var not_dirty = (flags2 & DIRTY) === 0;
    if (not_dirty) {
      set_signal_status(reaction, status);
    }
    if ((flags2 & DERIVED) !== 0) {
      if ((flags2 & WAS_MARKED) === 0) {
        reaction.f |= WAS_MARKED;
        mark_reactions(
          /** @type {Derived} */
          reaction,
          MAYBE_DIRTY
        );
      }
    } else if (not_dirty) {
      if ((flags2 & BLOCK_EFFECT) !== 0) {
        if (eager_block_effects !== null) {
          eager_block_effects.add(
            /** @type {Effect} */
            reaction
          );
        }
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function proxy(value) {
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
    return value;
  }
  const prototype = get_prototype_of(value);
  if (prototype !== object_prototype && prototype !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = /* @__PURE__ */ state(0);
  var parent_version = update_version;
  var with_parent = (fn) => {
    if (update_version === parent_version) {
      return fn();
    }
    var reaction = active_reaction;
    var version2 = update_version;
    set_active_reaction(null);
    set_update_version(parent_version);
    var result = fn();
    set_active_reaction(reaction);
    set_update_version(version2);
    return result;
  };
  if (is_proxied_array) {
    sources.set("length", /* @__PURE__ */ state(
      /** @type {any[]} */
      value.length
    ));
  }
  return new Proxy(
    /** @type {any} */
    value,
    {
      defineProperty(_3, prop, descriptor) {
        if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
          state_descriptors_fixed();
        }
        var s5 = sources.get(prop);
        if (s5 === void 0) {
          s5 = with_parent(() => {
            var s22 = /* @__PURE__ */ state(descriptor.value);
            sources.set(prop, s22);
            return s22;
          });
        } else {
          set(s5, descriptor.value, true);
        }
        return true;
      },
      deleteProperty(target, prop) {
        var s5 = sources.get(prop);
        if (s5 === void 0) {
          if (prop in target) {
            const s22 = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
            sources.set(prop, s22);
            increment(version);
          }
        } else {
          set(s5, UNINITIALIZED);
          increment(version);
        }
        return true;
      },
      get(target, prop, receiver) {
        if (prop === STATE_SYMBOL) {
          return value;
        }
        var s5 = sources.get(prop);
        var exists = prop in target;
        if (s5 === void 0 && (!exists || get_descriptor(target, prop)?.writable)) {
          s5 = with_parent(() => {
            var p3 = proxy(exists ? target[prop] : UNINITIALIZED);
            var s22 = /* @__PURE__ */ state(p3);
            return s22;
          });
          sources.set(prop, s5);
        }
        if (s5 !== void 0) {
          var v2 = get(s5);
          return v2 === UNINITIALIZED ? void 0 : v2;
        }
        return Reflect.get(target, prop, receiver);
      },
      getOwnPropertyDescriptor(target, prop) {
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
        if (descriptor && "value" in descriptor) {
          var s5 = sources.get(prop);
          if (s5) descriptor.value = get(s5);
        } else if (descriptor === void 0) {
          var source2 = sources.get(prop);
          var value2 = source2?.v;
          if (source2 !== void 0 && value2 !== UNINITIALIZED) {
            return {
              enumerable: true,
              configurable: true,
              value: value2,
              writable: true
            };
          }
        }
        return descriptor;
      },
      has(target, prop) {
        if (prop === STATE_SYMBOL) {
          return true;
        }
        var s5 = sources.get(prop);
        var has = s5 !== void 0 && s5.v !== UNINITIALIZED || Reflect.has(target, prop);
        if (s5 !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop)?.writable)) {
          if (s5 === void 0) {
            s5 = with_parent(() => {
              var p3 = has ? proxy(target[prop]) : UNINITIALIZED;
              var s22 = /* @__PURE__ */ state(p3);
              return s22;
            });
            sources.set(prop, s5);
          }
          var value2 = get(s5);
          if (value2 === UNINITIALIZED) {
            return false;
          }
        }
        return has;
      },
      set(target, prop, value2, receiver) {
        var s5 = sources.get(prop);
        var has = prop in target;
        if (is_proxied_array && prop === "length") {
          for (var i2 = value2; i2 < /** @type {Source<number>} */
          s5.v; i2 += 1) {
            var other_s = sources.get(i2 + "");
            if (other_s !== void 0) {
              set(other_s, UNINITIALIZED);
            } else if (i2 in target) {
              other_s = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
              sources.set(i2 + "", other_s);
            }
          }
        }
        if (s5 === void 0) {
          if (!has || get_descriptor(target, prop)?.writable) {
            s5 = with_parent(() => /* @__PURE__ */ state(void 0));
            set(s5, proxy(value2));
            sources.set(prop, s5);
          }
        } else {
          has = s5.v !== UNINITIALIZED;
          var p3 = with_parent(() => proxy(value2));
          set(s5, p3);
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
        if (descriptor?.set) {
          descriptor.set.call(receiver, value2);
        }
        if (!has) {
          if (is_proxied_array && typeof prop === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n4 = Number(prop);
            if (Number.isInteger(n4) && n4 >= ls.v) {
              set(ls, n4 + 1);
            }
          }
          increment(version);
        }
        return true;
      },
      ownKeys(target) {
        get(version);
        var own_keys = Reflect.ownKeys(target).filter((key22) => {
          var source3 = sources.get(key22);
          return source3 === void 0 || source3.v !== UNINITIALIZED;
        });
        for (var [key2, source2] of sources) {
          if (source2.v !== UNINITIALIZED && !(key2 in target)) {
            own_keys.push(key2);
          }
        }
        return own_keys;
      },
      setPrototypeOf() {
        state_prototype_fixed();
      }
    }
  );
}
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  var text_prototype = Text.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  if (is_extensible(element_prototype)) {
    element_prototype.__click = void 0;
    element_prototype.__className = void 0;
    element_prototype.__attributes = null;
    element_prototype.__style = void 0;
    element_prototype.__e = void 0;
  }
  if (is_extensible(text_prototype)) {
    text_prototype.__t = void 0;
  }
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return first_child_getter.call(node);
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return next_sibling_getter.call(node);
}
function clear_text_content(node) {
  node.textContent = "";
}
function without_reactive_context(fn) {
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    return fn();
  } finally {
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function push_effect(effect, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect;
  } else {
    parent_last.next = effect;
    effect.prev = parent_last;
    parent_effect.last = effect;
  }
}
function create_effect(type, fn, sync, push22 = true) {
  var parent = active_effect;
  if (parent !== null && (parent.f & INERT) !== 0) {
    type |= INERT;
  }
  var effect = {
    ctx: component_context,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: type | DIRTY,
    first: null,
    fn,
    last: null,
    next: null,
    parent,
    b: parent && parent.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (sync) {
    try {
      update_effect(effect);
      effect.f |= EFFECT_RAN;
    } catch (e22) {
      destroy_effect(effect);
      throw e22;
    }
  } else if (fn !== null) {
    schedule_effect(effect);
  }
  if (push22) {
    var e2 = effect;
    if (sync && e2.deps === null && e2.teardown === null && e2.nodes_start === null && e2.first === e2.last && // either `null`, or a singular child
    (e2.f & EFFECT_PRESERVED) === 0) {
      e2 = e2.first;
      if ((type & BLOCK_EFFECT) !== 0 && (type & EFFECT_TRANSPARENT) !== 0 && e2 !== null) {
        e2.f |= EFFECT_TRANSPARENT;
      }
    }
    if (e2 !== null) {
      e2.parent = parent;
      if (parent !== null) {
        push_effect(e2, parent);
      }
      if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0 && (type & ROOT_EFFECT) === 0) {
        var derived = (
          /** @type {Derived} */
          active_reaction
        );
        (derived.effects ?? (derived.effects = [])).push(e2);
      }
    }
  }
  return effect;
}
function effect_tracking() {
  return active_reaction !== null && !untracking;
}
function create_user_effect(fn) {
  return create_effect(EFFECT | USER_EFFECT, fn, false);
}
function component_root(fn) {
  Batch.ensure();
  const effect = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn, true);
  return (options2 = {}) => {
    return new Promise((fulfil) => {
      if (options2.outro) {
        pause_effect(effect, () => {
          destroy_effect(effect);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect);
        fulfil(void 0);
      }
    });
  };
}
function render_effect(fn, flags2 = 0) {
  return create_effect(RENDER_EFFECT | flags2, fn, true);
}
function block(fn, flags2 = 0) {
  var effect = create_effect(BLOCK_EFFECT | flags2, fn, true);
  return effect;
}
function branch(fn, push22 = true) {
  return create_effect(BRANCH_EFFECT | EFFECT_PRESERVED, fn, true, push22);
}
function execute_effect_teardown(effect) {
  var teardown = effect.teardown;
  if (teardown !== null) {
    const previously_destroying_effect = is_destroying_effect;
    const previous_reaction = active_reaction;
    set_is_destroying_effect(true);
    set_active_reaction(null);
    try {
      teardown.call(null);
    } finally {
      set_is_destroying_effect(previously_destroying_effect);
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect = signal.first;
  signal.first = signal.last = null;
  while (effect !== null) {
    const controller2 = effect.ac;
    if (controller2 !== null) {
      without_reactive_context(() => {
        controller2.abort(STALE_REACTION);
      });
    }
    var next2 = effect.next;
    if ((effect.f & ROOT_EFFECT) !== 0) {
      effect.parent = null;
    } else {
      destroy_effect(effect, remove_dom);
    }
    effect = next2;
  }
}
function destroy_block_effect_children(signal) {
  var effect = signal.first;
  while (effect !== null) {
    var next2 = effect.next;
    if ((effect.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect);
    }
    effect = next2;
  }
}
function destroy_effect(effect, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect.f & HEAD_EFFECT) !== 0) && effect.nodes_start !== null && effect.nodes_end !== null) {
    remove_effect_dom(
      effect.nodes_start,
      /** @type {TemplateNode} */
      effect.nodes_end
    );
    removed = true;
  }
  destroy_effect_children(effect, remove_dom && !removed);
  remove_reactions(effect, 0);
  set_signal_status(effect, DESTROYED);
  var transitions = effect.transitions;
  if (transitions !== null) {
    for (const transition of transitions) {
      transition.stop();
    }
  }
  execute_effect_teardown(effect);
  var parent = effect.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect);
  }
  effect.next = effect.prev = effect.teardown = effect.ctx = effect.deps = effect.fn = effect.nodes_start = effect.nodes_end = effect.ac = null;
}
function remove_effect_dom(node, end) {
  while (node !== null) {
    var next2 = node === end ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(node)
    );
    node.remove();
    node = next2;
  }
}
function unlink_effect(effect) {
  var parent = effect.parent;
  var prev = effect.prev;
  var next2 = effect.next;
  if (prev !== null) prev.next = next2;
  if (next2 !== null) next2.prev = prev;
  if (parent !== null) {
    if (parent.first === effect) parent.first = next2;
    if (parent.last === effect) parent.last = prev;
  }
}
function pause_effect(effect, callback, destroy = true) {
  var transitions = [];
  pause_children(effect, transitions, true);
  run_out_transitions(transitions, () => {
    if (destroy) destroy_effect(effect);
    if (callback) callback();
  });
}
function run_out_transitions(transitions, fn) {
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = () => --remaining || fn();
    for (var transition of transitions) {
      transition.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect, transitions, local) {
  if ((effect.f & INERT) !== 0) return;
  effect.f ^= INERT;
  if (effect.transitions !== null) {
    for (const transition of effect.transitions) {
      if (transition.is_global || local) {
        transitions.push(transition);
      }
    }
  }
  var child = effect.first;
  while (child !== null) {
    var sibling = child.next;
    var transparent = (child.f & EFFECT_TRANSPARENT) !== 0 || // If this is a branch effect without a block effect parent,
    // it means the parent block effect was pruned. In that case,
    // transparency information was transferred to the branch effect.
    (child.f & BRANCH_EFFECT) !== 0 && (effect.f & BLOCK_EFFECT) !== 0;
    pause_children(child, transitions, transparent ? local : false);
    child = sibling;
  }
}
function move_effect(effect, fragment) {
  var node = effect.nodes_start;
  var end = effect.nodes_end;
  while (node !== null) {
    var next2 = node === end ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(node)
    );
    fragment.append(node);
    node = next2;
  }
}
function set_is_updating_effect(value) {
  is_updating_effect = value;
}
function set_is_destroying_effect(value) {
  is_destroying_effect = value;
}
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
function set_active_effect(effect) {
  active_effect = effect;
}
function push_reaction_value(value) {
  if (active_reaction !== null && true) {
    if (current_sources === null) {
      current_sources = [value];
    } else {
      current_sources.push(value);
    }
  }
}
function set_untracked_writes(value) {
  untracked_writes = value;
}
function set_update_version(value) {
  update_version = value;
}
function increment_write_version() {
  return ++write_version;
}
function is_dirty(reaction) {
  var flags2 = reaction.f;
  if ((flags2 & DIRTY) !== 0) {
    return true;
  }
  if ((flags2 & MAYBE_DIRTY) !== 0) {
    var dependencies = reaction.deps;
    var is_unowned = (flags2 & UNOWNED) !== 0;
    if (flags2 & DERIVED) {
      reaction.f &= ~WAS_MARKED;
    }
    if (dependencies !== null) {
      var i2;
      var dependency;
      var is_disconnected = (flags2 & DISCONNECTED) !== 0;
      var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
      var length = dependencies.length;
      if ((is_disconnected || is_unowned_connected) && (active_effect === null || (active_effect.f & DESTROYED) === 0)) {
        var derived = (
          /** @type {Derived} */
          reaction
        );
        var parent = derived.parent;
        for (i2 = 0; i2 < length; i2++) {
          dependency = dependencies[i2];
          if (is_disconnected || !dependency?.reactions?.includes(derived)) {
            (dependency.reactions ?? (dependency.reactions = [])).push(derived);
          }
        }
        if (is_disconnected) {
          derived.f ^= DISCONNECTED;
        }
        if (is_unowned_connected && parent !== null && (parent.f & UNOWNED) === 0) {
          derived.f ^= UNOWNED;
        }
      }
      for (i2 = 0; i2 < length; i2++) {
        dependency = dependencies[i2];
        if (is_dirty(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
    }
    if (!is_unowned || active_effect !== null && !skip_reaction) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function schedule_possible_effect_self_invalidation(signal, effect, root2 = true) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  if (current_sources?.includes(signal)) {
    return;
  }
  for (var i2 = 0; i2 < reactions.length; i2++) {
    var reaction = reactions[i2];
    if ((reaction.f & DERIVED) !== 0) {
      schedule_possible_effect_self_invalidation(
        /** @type {Derived} */
        reaction,
        effect,
        false
      );
    } else if (effect === reaction) {
      if (root2) {
        set_signal_status(reaction, DIRTY);
      } else if ((reaction.f & CLEAN) !== 0) {
        set_signal_status(reaction, MAYBE_DIRTY);
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function update_reaction(reaction) {
  var _a2;
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_skip_reaction = skip_reaction;
  var previous_sources = current_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var previous_update_version = update_version;
  var flags2 = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  skip_reaction = (flags2 & UNOWNED) !== 0 && (untracking || !is_updating_effect || active_reaction === null);
  active_reaction = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  current_sources = null;
  set_component_context(reaction.ctx);
  untracking = false;
  update_version = ++read_version;
  if (reaction.ac !== null) {
    without_reactive_context(() => {
      reaction.ac.abort(STALE_REACTION);
    });
    reaction.ac = null;
  }
  try {
    reaction.f |= REACTION_IS_UPDATING;
    var fn = (
      /** @type {Function} */
      reaction.fn
    );
    var result = fn();
    var deps = reaction.deps;
    if (new_deps !== null) {
      var i2;
      remove_reactions(reaction, skipped_deps);
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i2 = 0; i2 < new_deps.length; i2++) {
          deps[skipped_deps + i2] = new_deps[i2];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (!skip_reaction || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (flags2 & DERIVED) !== 0 && /** @type {import('#client').Derived} */
      reaction.reactions !== null) {
        for (i2 = skipped_deps; i2 < deps.length; i2++) {
          ((_a2 = deps[i2]).reactions ?? (_a2.reactions = [])).push(reaction);
        }
      }
    } else if (deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (i2 = 0; i2 < /** @type {Source[]} */
      untracked_writes.length; i2++) {
        schedule_possible_effect_self_invalidation(
          untracked_writes[i2],
          /** @type {Effect} */
          reaction
        );
      }
    }
    if (previous_reaction !== null && previous_reaction !== reaction) {
      read_version++;
      if (untracked_writes !== null) {
        if (previous_untracked_writes === null) {
          previous_untracked_writes = untracked_writes;
        } else {
          previous_untracked_writes.push(.../** @type {Source[]} */
          untracked_writes);
        }
      }
    }
    if ((reaction.f & ERROR_VALUE) !== 0) {
      reaction.f ^= ERROR_VALUE;
    }
    return result;
  } catch (error2) {
    return handle_error(error2);
  } finally {
    reaction.f ^= REACTION_IS_UPDATING;
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    skip_reaction = previous_skip_reaction;
    current_sources = previous_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
    update_version = previous_update_version;
  }
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index14 = index_of.call(reactions, signal);
    if (index14 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index14] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !new_deps.includes(dependency))) {
    set_signal_status(dependency, MAYBE_DIRTY);
    if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
      dependency.f ^= DISCONNECTED;
    }
    destroy_derived_effects(
      /** @type {Derived} **/
      dependency
    );
    remove_reactions(
      /** @type {Derived} **/
      dependency,
      0
    );
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i2 = start_index; i2 < dependencies.length; i2++) {
    remove_reaction(signal, dependencies[i2]);
  }
}
function update_effect(effect) {
  var flags2 = effect.f;
  if ((flags2 & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect, CLEAN);
  var previous_effect = active_effect;
  var was_updating_effect = is_updating_effect;
  active_effect = effect;
  is_updating_effect = true;
  try {
    if ((flags2 & BLOCK_EFFECT) !== 0) {
      destroy_block_effect_children(effect);
    } else {
      destroy_effect_children(effect);
    }
    execute_effect_teardown(effect);
    var teardown = update_reaction(effect);
    effect.teardown = typeof teardown === "function" ? teardown : null;
    effect.wv = write_version;
    var dep;
    if (BROWSER && tracing_mode_flag && (effect.f & DIRTY) !== 0 && effect.deps !== null) ;
  } finally {
    is_updating_effect = was_updating_effect;
    active_effect = previous_effect;
  }
}
function get(signal) {
  var flags2 = signal.f;
  var is_derived = (flags2 & DERIVED) !== 0;
  if (active_reaction !== null && !untracking) {
    var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;
    if (!destroyed && !current_sources?.includes(signal)) {
      var deps = active_reaction.deps;
      if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
        if (signal.rv < read_version) {
          signal.rv = read_version;
          if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
            skipped_deps++;
          } else if (new_deps === null) {
            new_deps = [signal];
          } else if (!skip_reaction || !new_deps.includes(signal)) {
            new_deps.push(signal);
          }
        }
      } else {
        (active_reaction.deps ?? (active_reaction.deps = [])).push(signal);
        var reactions = signal.reactions;
        if (reactions === null) {
          signal.reactions = [active_reaction];
        } else if (!reactions.includes(active_reaction)) {
          reactions.push(active_reaction);
        }
      }
    }
  } else if (is_derived && /** @type {Derived} */
  signal.deps === null && /** @type {Derived} */
  signal.effects === null) {
    var derived = (
      /** @type {Derived} */
      signal
    );
    var parent = derived.parent;
    if (parent !== null && (parent.f & UNOWNED) === 0) {
      derived.f ^= UNOWNED;
    }
  }
  if (is_destroying_effect) {
    if (old_values.has(signal)) {
      return old_values.get(signal);
    }
    if (is_derived) {
      derived = /** @type {Derived} */
      signal;
      var value = derived.v;
      if ((derived.f & CLEAN) === 0 && derived.reactions !== null || depends_on_old_values(derived)) {
        value = execute_derived(derived);
      }
      old_values.set(derived, value);
      return value;
    }
  } else if (is_derived) {
    derived = /** @type {Derived} */
    signal;
    if (batch_values?.has(derived)) {
      return batch_values.get(derived);
    }
    if (is_dirty(derived)) {
      update_derived(derived);
    }
  }
  if (batch_values?.has(signal)) {
    return batch_values.get(signal);
  }
  if ((signal.f & ERROR_VALUE) !== 0) {
    throw signal.v;
  }
  return signal.v;
}
function depends_on_old_values(derived) {
  if (derived.v === UNINITIALIZED) return true;
  if (derived.deps === null) return false;
  for (const dep of derived.deps) {
    if (old_values.has(dep)) {
      return true;
    }
    if ((dep.f & DERIVED) !== 0 && depends_on_old_values(
      /** @type {Derived} */
      dep
    )) {
      return true;
    }
  }
  return false;
}
function untrack(fn) {
  var previous_untracking = untracking;
  try {
    untracking = true;
    return fn();
  } finally {
    untracking = previous_untracking;
  }
}
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}
function is_boolean_attribute(name) {
  return DOM_BOOLEAN_ATTRIBUTES.includes(name);
}
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}
function attr(name, value, is_boolean = false) {
  if (name === "hidden" && value !== "until-found") {
    is_boolean = true;
  }
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function clsx2(value) {
  if (typeof value === "object") {
    return clsx(value);
  } else {
    return value ?? "";
  }
}
function to_class(value, hash2, directives) {
  var classname = value == null ? "" : "" + value;
  if (hash2) {
    classname = classname ? classname + " " + hash2 : hash2;
  }
  if (directives) {
    for (var key2 in directives) {
      if (directives[key2]) {
        classname = classname ? classname + " " + key2 : key2;
      } else if (classname.length) {
        var len = key2.length;
        var a4 = 0;
        while ((a4 = classname.indexOf(key2, a4)) >= 0) {
          var b = a4 + len;
          if ((a4 === 0 || whitespace.includes(classname[a4 - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a4 === 0 ? "" : classname.substring(0, a4)) + classname.substring(b + 1);
          } else {
            a4 = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}
function append_styles(styles, important = false) {
  var separator = important ? " !important;" : ";";
  var css = "";
  for (var key2 in styles) {
    var value = styles[key2];
    if (value != null && value !== "") {
      css += " " + key2 + ": " + value + separator;
    }
  }
  return css;
}
function to_css_name(name) {
  if (name[0] !== "-" || name[1] !== "-") {
    return name.toLowerCase();
  }
  return name;
}
function to_style(value, styles) {
  if (styles) {
    var new_style = "";
    var normal_styles;
    var important_styles;
    if (Array.isArray(styles)) {
      normal_styles = styles[0];
      important_styles = styles[1];
    } else {
      normal_styles = styles;
    }
    if (value) {
      value = String(value).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var in_str = false;
      var in_apo = 0;
      var in_comment = false;
      var reserved_names = [];
      if (normal_styles) {
        reserved_names.push(...Object.keys(normal_styles).map(to_css_name));
      }
      if (important_styles) {
        reserved_names.push(...Object.keys(important_styles).map(to_css_name));
      }
      var start_index = 0;
      var name_index = -1;
      const len = value.length;
      for (var i2 = 0; i2 < len; i2++) {
        var c5 = value[i2];
        if (in_comment) {
          if (c5 === "/" && value[i2 - 1] === "*") {
            in_comment = false;
          }
        } else if (in_str) {
          if (in_str === c5) {
            in_str = false;
          }
        } else if (c5 === "/" && value[i2 + 1] === "*") {
          in_comment = true;
        } else if (c5 === '"' || c5 === "'") {
          in_str = c5;
        } else if (c5 === "(") {
          in_apo++;
        } else if (c5 === ")") {
          in_apo--;
        }
        if (!in_comment && in_str === false && in_apo === 0) {
          if (c5 === ":" && name_index === -1) {
            name_index = i2;
          } else if (c5 === ";" || i2 === len - 1) {
            if (name_index !== -1) {
              var name = to_css_name(value.substring(start_index, name_index).trim());
              if (!reserved_names.includes(name)) {
                if (c5 !== ";") {
                  i2++;
                }
                var property = value.substring(start_index, i2).trim();
                new_style += " " + property + ";";
              }
            }
            start_index = i2 + 1;
            name_index = -1;
          }
        }
      }
    }
    if (normal_styles) {
      new_style += append_styles(normal_styles);
    }
    if (important_styles) {
      new_style += append_styles(important_styles, true);
    }
    new_style = new_style.trim();
    return new_style === "" ? null : new_style;
  }
  return value == null ? null : String(value);
}
function subscribe_to_store(store, run, invalidate) {
  if (store == null) {
    run(void 0);
    return noop;
  }
  const unsub = untrack(
    () => store.subscribe(
      run,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function abort() {
  controller?.abort(STALE_REACTION);
  controller = null;
}
function await_invalid() {
  const error2 = new Error(`await_invalid
Encountered asynchronous work while rendering synchronously.
https://svelte.dev/e/await_invalid`);
  error2.name = "Svelte error";
  throw error2;
}
function render(component14, options2 = {}) {
  return Renderer.render(
    /** @type {Component<Props>} */
    component14,
    options2
  );
}
function attributes(attrs, css_hash, classes, styles, flags2 = 0) {
  if (styles) {
    attrs.style = to_style(attrs.style, styles);
  }
  if (attrs.class) {
    attrs.class = clsx2(attrs.class);
  }
  if (css_hash || classes) {
    attrs.class = to_class(attrs.class, css_hash, classes);
  }
  let attr_str = "";
  let name;
  const is_html = (flags2 & ELEMENT_IS_NAMESPACED) === 0;
  const lowercase = (flags2 & ELEMENT_PRESERVE_ATTRIBUTE_CASE) === 0;
  const is_input = (flags2 & ELEMENT_IS_INPUT) !== 0;
  for (name in attrs) {
    if (typeof attrs[name] === "function") continue;
    if (name[0] === "$" && name[1] === "$") continue;
    if (INVALID_ATTR_NAME_CHAR_REGEX.test(name)) continue;
    var value = attrs[name];
    if (lowercase) {
      name = name.toLowerCase();
    }
    if (is_input) {
      if (name === "defaultvalue" || name === "defaultchecked") {
        name = name === "defaultvalue" ? "value" : "checked";
        if (attrs[name]) continue;
      }
    }
    attr_str += attr(name, value, is_html && is_boolean_attribute(name));
  }
  return attr_str;
}
function stringify2(value) {
  return typeof value === "string" ? value : value == null ? "" : value + "";
}
function attr_class(value, hash2, directives) {
  var result = to_class(value, hash2, directives);
  return result ? ` class="${escape_html(result, true)}"` : "";
}
function attr_style(value, directives) {
  var result = to_style(value, directives);
  return result ? ` style="${escape_html(result, true)}"` : "";
}
function store_get(store_values, store_name, store) {
  if (store_name in store_values && store_values[store_name][0] === store) {
    return store_values[store_name][2];
  }
  store_values[store_name]?.[1]();
  store_values[store_name] = [store, null, void 0];
  const unsub = subscribe_to_store(
    store,
    /** @param {any} v */
    (v2) => store_values[store_name][2] = v2
  );
  store_values[store_name][1] = unsub;
  return store_values[store_name][2];
}
function unsubscribe_stores(store_values) {
  for (const store_name in store_values) {
    store_values[store_name][1]();
  }
}
function slot(renderer, $$props, name, slot_props, fallback_fn) {
  var slot_fn = $$props.$$slots?.[name];
  if (slot_fn === true) {
    slot_fn = $$props["children"];
  }
  if (slot_fn !== void 0) {
    slot_fn(renderer, slot_props);
  }
}
function bind_props(props_parent, props_now) {
  for (const key2 in props_now) {
    const initial_value = props_parent[key2];
    const value = props_now[key2];
    if (initial_value === void 0 && value !== void 0 && Object.getOwnPropertyDescriptor(props_parent, key2)?.set) {
      props_parent[key2] = value;
    }
  }
}
function ensure_array_like(array_like_or_iterator) {
  if (array_like_or_iterator) {
    return array_like_or_iterator.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  return [];
}
var DERIVED, EFFECT, RENDER_EFFECT, BLOCK_EFFECT, BRANCH_EFFECT, ROOT_EFFECT, BOUNDARY_EFFECT, CLEAN, DIRTY, MAYBE_DIRTY, INERT, DESTROYED, EFFECT_RAN, EFFECT_TRANSPARENT, EAGER_EFFECT, HEAD_EFFECT, EFFECT_PRESERVED, USER_EFFECT, UNOWNED, DISCONNECTED, WAS_MARKED, REACTION_IS_UPDATING, ASYNC, ERROR_VALUE, STATE_SYMBOL, LEGACY_PROPS, STALE_REACTION, COMMENT_NODE, HYDRATION_START, HYDRATION_START_ELSE, HYDRATION_END, HYDRATION_ERROR, ELEMENT_IS_NAMESPACED, ELEMENT_PRESERVE_ATTRIBUTE_CASE, ELEMENT_IS_INPUT, UNINITIALIZED, tracing_mode_flag, component_context, micro_tasks, batches, current_batch, batch_values, effect_pending_updates, queued_root_effects, last_scheduled_effect, is_flushing, is_flushing_sync, _commit_callbacks, _discard_callbacks, _pending, _blocking_pending, _deferred, _dirty_effects, _maybe_dirty_effects, _Batch_instances, traverse_effect_tree_fn, defer_effects_fn, resolve_fn, commit_fn, _Batch, Batch, eager_block_effects, eager_effects, old_values, eager_effects_deferred, $window, first_child_getter, next_sibling_getter, is_updating_effect, is_destroying_effect, active_reaction, untracking, active_effect, current_sources, new_deps, skipped_deps, untracked_writes, write_version, read_version, update_version, skip_reaction, STATUS_MASK, DOM_BOOLEAN_ATTRIBUTES, PASSIVE_EVENTS, replacements, whitespace, BLOCK_OPEN, BLOCK_CLOSE, controller, _out, _on_destroy, _is_component_body, _parent, _Renderer_instances, collect_on_destroy_fn, traverse_components_fn, collect_ondestroy_fn, _Renderer_static, render_fn, render_async_fn, collect_content_fn, collect_content_async_fn, open_render_fn, close_render_fn, _Renderer, Renderer, _title, SSRState, INVALID_ATTR_NAME_CHAR_REGEX;
var init_index2 = __esm({
  ".svelte-kit/output/server/chunks/index2.js"() {
    init_context();
    init_clsx();
    init_false();
    DERIVED = 1 << 1;
    EFFECT = 1 << 2;
    RENDER_EFFECT = 1 << 3;
    BLOCK_EFFECT = 1 << 4;
    BRANCH_EFFECT = 1 << 5;
    ROOT_EFFECT = 1 << 6;
    BOUNDARY_EFFECT = 1 << 7;
    CLEAN = 1 << 10;
    DIRTY = 1 << 11;
    MAYBE_DIRTY = 1 << 12;
    INERT = 1 << 13;
    DESTROYED = 1 << 14;
    EFFECT_RAN = 1 << 15;
    EFFECT_TRANSPARENT = 1 << 16;
    EAGER_EFFECT = 1 << 17;
    HEAD_EFFECT = 1 << 18;
    EFFECT_PRESERVED = 1 << 19;
    USER_EFFECT = 1 << 20;
    UNOWNED = 1 << 8;
    DISCONNECTED = 1 << 9;
    WAS_MARKED = 1 << 15;
    REACTION_IS_UPDATING = 1 << 21;
    ASYNC = 1 << 22;
    ERROR_VALUE = 1 << 23;
    STATE_SYMBOL = Symbol("$state");
    LEGACY_PROPS = Symbol("legacy props");
    STALE_REACTION = new class StaleReactionError extends Error {
      constructor() {
        super(...arguments);
        __publicField(this, "name", "StaleReactionError");
        __publicField(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
      }
    }();
    COMMENT_NODE = 8;
    HYDRATION_START = "[";
    HYDRATION_START_ELSE = "[!";
    HYDRATION_END = "]";
    HYDRATION_ERROR = {};
    ELEMENT_IS_NAMESPACED = 1;
    ELEMENT_PRESERVE_ATTRIBUTE_CASE = 1 << 1;
    ELEMENT_IS_INPUT = 1 << 2;
    UNINITIALIZED = Symbol();
    tracing_mode_flag = false;
    component_context = null;
    micro_tasks = [];
    batches = /* @__PURE__ */ new Set();
    current_batch = null;
    batch_values = null;
    effect_pending_updates = /* @__PURE__ */ new Set();
    queued_root_effects = [];
    last_scheduled_effect = null;
    is_flushing = false;
    is_flushing_sync = false;
    _Batch = class _Batch {
      constructor() {
        __privateAdd(this, _Batch_instances);
        __publicField(this, "committed", false);
        /**
         * The current values of any sources that are updated in this batch
         * They keys of this map are identical to `this.#previous`
         * @type {Map<Source, any>}
         */
        __publicField(this, "current", /* @__PURE__ */ new Map());
        /**
         * The values of any sources that are updated in this batch _before_ those updates took place.
         * They keys of this map are identical to `this.#current`
         * @type {Map<Source, any>}
         */
        __publicField(this, "previous", /* @__PURE__ */ new Map());
        /**
         * When the batch is committed (and the DOM is updated), we need to remove old branches
         * and append new ones by calling the functions added inside (if/each/key/etc) blocks
         * @type {Set<() => void>}
         */
        __privateAdd(this, _commit_callbacks, /* @__PURE__ */ new Set());
        /**
         * If a fork is discarded, we need to destroy any effects that are no longer needed
         * @type {Set<(batch: Batch) => void>}
         */
        __privateAdd(this, _discard_callbacks, /* @__PURE__ */ new Set());
        /**
         * The number of async effects that are currently in flight
         */
        __privateAdd(this, _pending, 0);
        /**
         * The number of async effects that are currently in flight, _not_ inside a pending boundary
         */
        __privateAdd(this, _blocking_pending, 0);
        /**
         * A deferred that resolves when the batch is committed, used with `settled()`
         * TODO replace with Promise.withResolvers once supported widely enough
         * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
         */
        __privateAdd(this, _deferred, null);
        /**
         * Deferred effects (which run after async work has completed) that are DIRTY
         * @type {Effect[]}
         */
        __privateAdd(this, _dirty_effects, []);
        /**
         * Deferred effects that are MAYBE_DIRTY
         * @type {Effect[]}
         */
        __privateAdd(this, _maybe_dirty_effects, []);
        /**
         * A set of branches that still exist, but will be destroyed when this batch
         * is committed — we skip over these during `process`
         * @type {Set<Effect>}
         */
        __publicField(this, "skipped_effects", /* @__PURE__ */ new Set());
        __publicField(this, "is_fork", false);
      }
      /**
       *
       * @param {Effect[]} root_effects
       */
      process(root_effects) {
        queued_root_effects = [];
        this.apply();
        var target = {
          parent: null,
          effect: null,
          effects: [],
          render_effects: [],
          block_effects: []
        };
        for (const root2 of root_effects) {
          __privateMethod(this, _Batch_instances, traverse_effect_tree_fn).call(this, root2, target);
        }
        if (!this.is_fork) {
          __privateMethod(this, _Batch_instances, resolve_fn).call(this);
        }
        if (__privateGet(this, _blocking_pending) > 0 || this.is_fork) {
          __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, target.effects);
          __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, target.render_effects);
          __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, target.block_effects);
        } else {
          current_batch = null;
          flush_queued_effects(target.render_effects);
          flush_queued_effects(target.effects);
        }
        batch_values = null;
      }
      /**
       * Associate a change to a given source with the current
       * batch, noting its previous and current values
       * @param {Source} source
       * @param {any} value
       */
      capture(source2, value) {
        if (!this.previous.has(source2)) {
          this.previous.set(source2, value);
        }
        this.current.set(source2, source2.v);
        batch_values?.set(source2, source2.v);
      }
      activate() {
        current_batch = this;
      }
      deactivate() {
        current_batch = null;
        batch_values = null;
      }
      flush() {
        this.activate();
        if (queued_root_effects.length > 0) {
          flush_effects();
          if (current_batch !== null && current_batch !== this) {
            return;
          }
        } else if (__privateGet(this, _pending) === 0) {
          this.process([]);
        }
        this.deactivate();
        for (const update of effect_pending_updates) {
          effect_pending_updates.delete(update);
          update();
          if (current_batch !== null) {
            break;
          }
        }
      }
      discard() {
        for (const fn of __privateGet(this, _discard_callbacks)) fn(this);
        __privateGet(this, _discard_callbacks).clear();
      }
      /**
       *
       * @param {boolean} blocking
       */
      increment(blocking) {
        __privateSet(this, _pending, __privateGet(this, _pending) + 1);
        if (blocking) __privateSet(this, _blocking_pending, __privateGet(this, _blocking_pending) + 1);
      }
      /**
       *
       * @param {boolean} blocking
       */
      decrement(blocking) {
        __privateSet(this, _pending, __privateGet(this, _pending) - 1);
        if (blocking) __privateSet(this, _blocking_pending, __privateGet(this, _blocking_pending) - 1);
        this.revive();
      }
      revive() {
        for (const e2 of __privateGet(this, _dirty_effects)) {
          set_signal_status(e2, DIRTY);
          schedule_effect(e2);
        }
        for (const e2 of __privateGet(this, _maybe_dirty_effects)) {
          set_signal_status(e2, MAYBE_DIRTY);
          schedule_effect(e2);
        }
        __privateSet(this, _dirty_effects, []);
        __privateSet(this, _maybe_dirty_effects, []);
        this.flush();
      }
      /** @param {() => void} fn */
      oncommit(fn) {
        __privateGet(this, _commit_callbacks).add(fn);
      }
      /** @param {(batch: Batch) => void} fn */
      ondiscard(fn) {
        __privateGet(this, _discard_callbacks).add(fn);
      }
      settled() {
        return (__privateGet(this, _deferred) ?? __privateSet(this, _deferred, deferred())).promise;
      }
      static ensure() {
        if (current_batch === null) {
          const batch = current_batch = new _Batch();
          batches.add(current_batch);
          if (!is_flushing_sync) {
            _Batch.enqueue(() => {
              if (current_batch !== batch) {
                return;
              }
              batch.flush();
            });
          }
        }
        return current_batch;
      }
      /** @param {() => void} task */
      static enqueue(task) {
        queue_micro_task(task);
      }
      apply() {
        return;
      }
    };
    _commit_callbacks = new WeakMap();
    _discard_callbacks = new WeakMap();
    _pending = new WeakMap();
    _blocking_pending = new WeakMap();
    _deferred = new WeakMap();
    _dirty_effects = new WeakMap();
    _maybe_dirty_effects = new WeakMap();
    _Batch_instances = new WeakSet();
    /**
     * Traverse the effect tree, executing effects or stashing
     * them for later execution as appropriate
     * @param {Effect} root
     * @param {EffectTarget} target
     */
    traverse_effect_tree_fn = function(root2, target) {
      root2.f ^= CLEAN;
      var effect = root2.first;
      while (effect !== null) {
        var flags2 = effect.f;
        var is_branch = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
        var is_skippable_branch = is_branch && (flags2 & CLEAN) !== 0;
        var skip = is_skippable_branch || (flags2 & INERT) !== 0 || this.skipped_effects.has(effect);
        if ((effect.f & BOUNDARY_EFFECT) !== 0 && effect.b?.is_pending()) {
          target = {
            parent: target,
            effect,
            effects: [],
            render_effects: [],
            block_effects: []
          };
        }
        if (!skip && effect.fn !== null) {
          if (is_branch) {
            effect.f ^= CLEAN;
          } else if ((flags2 & EFFECT) !== 0) {
            target.effects.push(effect);
          } else if (is_dirty(effect)) {
            if ((effect.f & BLOCK_EFFECT) !== 0) target.block_effects.push(effect);
            update_effect(effect);
          }
          var child = effect.first;
          if (child !== null) {
            effect = child;
            continue;
          }
        }
        var parent = effect.parent;
        effect = effect.next;
        while (effect === null && parent !== null) {
          if (parent === target.effect) {
            __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, target.effects);
            __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, target.render_effects);
            __privateMethod(this, _Batch_instances, defer_effects_fn).call(this, target.block_effects);
            target = /** @type {EffectTarget} */
            target.parent;
          }
          effect = parent.next;
          parent = parent.parent;
        }
      }
    };
    /**
     * @param {Effect[]} effects
     */
    defer_effects_fn = function(effects) {
      for (const e2 of effects) {
        const target = (e2.f & DIRTY) !== 0 ? __privateGet(this, _dirty_effects) : __privateGet(this, _maybe_dirty_effects);
        target.push(e2);
        set_signal_status(e2, CLEAN);
      }
    };
    resolve_fn = function() {
      if (__privateGet(this, _blocking_pending) === 0) {
        for (const fn of __privateGet(this, _commit_callbacks)) fn();
        __privateGet(this, _commit_callbacks).clear();
      }
      if (__privateGet(this, _pending) === 0) {
        __privateMethod(this, _Batch_instances, commit_fn).call(this);
      }
    };
    commit_fn = function() {
      var _a2;
      if (batches.size > 1) {
        this.previous.clear();
        var previous_batch_values = batch_values;
        var is_earlier = true;
        var dummy_target = {
          parent: null,
          effect: null,
          effects: [],
          render_effects: [],
          block_effects: []
        };
        for (const batch of batches) {
          if (batch === this) {
            is_earlier = false;
            continue;
          }
          const sources = [];
          for (const [source2, value] of this.current) {
            if (batch.current.has(source2)) {
              if (is_earlier && value !== batch.current.get(source2)) {
                batch.current.set(source2, value);
              } else {
                continue;
              }
            }
            sources.push(source2);
          }
          if (sources.length === 0) {
            continue;
          }
          const others = [...batch.current.keys()].filter((s5) => !this.current.has(s5));
          if (others.length > 0) {
            const marked = /* @__PURE__ */ new Set();
            const checked = /* @__PURE__ */ new Map();
            for (const source2 of sources) {
              mark_effects(source2, others, marked, checked);
            }
            if (queued_root_effects.length > 0) {
              current_batch = batch;
              batch.apply();
              for (const root2 of queued_root_effects) {
                __privateMethod(_a2 = batch, _Batch_instances, traverse_effect_tree_fn).call(_a2, root2, dummy_target);
              }
              queued_root_effects = [];
              batch.deactivate();
            }
          }
        }
        current_batch = null;
        batch_values = previous_batch_values;
      }
      this.committed = true;
      batches.delete(this);
      __privateGet(this, _deferred)?.resolve();
    };
    Batch = _Batch;
    eager_block_effects = null;
    eager_effects = /* @__PURE__ */ new Set();
    old_values = /* @__PURE__ */ new Map();
    eager_effects_deferred = false;
    is_updating_effect = false;
    is_destroying_effect = false;
    active_reaction = null;
    untracking = false;
    active_effect = null;
    current_sources = null;
    new_deps = null;
    skipped_deps = 0;
    untracked_writes = null;
    write_version = 1;
    read_version = 0;
    update_version = read_version;
    skip_reaction = false;
    STATUS_MASK = -7169;
    DOM_BOOLEAN_ATTRIBUTES = [
      "allowfullscreen",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "disabled",
      "formnovalidate",
      "indeterminate",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "seamless",
      "selected",
      "webkitdirectory",
      "defer",
      "disablepictureinpicture",
      "disableremoteplayback"
    ];
    PASSIVE_EVENTS = ["touchstart", "touchmove"];
    replacements = {
      translate: /* @__PURE__ */ new Map([
        [true, "yes"],
        [false, "no"]
      ])
    };
    whitespace = [..." 	\n\r\f\xA0\v\uFEFF"];
    BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
    BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
    controller = null;
    _Renderer = class _Renderer {
      /**
       * @param {SSRState} global
       * @param {Renderer | undefined} [parent]
       */
      constructor(global2, parent) {
        __privateAdd(this, _Renderer_instances);
        /**
         * The contents of the renderer.
         * @type {RendererItem[]}
         */
        __privateAdd(this, _out, []);
        /**
         * Any `onDestroy` callbacks registered during execution of this renderer.
         * @type {(() => void)[] | undefined}
         */
        __privateAdd(this, _on_destroy);
        /**
         * Whether this renderer is a component body.
         * @type {boolean}
         */
        __privateAdd(this, _is_component_body, false);
        /**
         * The type of string content that this renderer is accumulating.
         * @type {RendererType}
         */
        __publicField(this, "type");
        /** @type {Renderer | undefined} */
        __privateAdd(this, _parent);
        /**
         * Asynchronous work associated with this renderer
         * @type {Promise<void> | undefined}
         */
        __publicField(this, "promise");
        /**
         * State which is associated with the content tree as a whole.
         * It will be re-exposed, uncopied, on all children.
         * @type {SSRState}
         * @readonly
         */
        __publicField(this, "global");
        /**
         * State that is local to the branch it is declared in.
         * It will be shallow-copied to all children.
         *
         * @type {{ select_value: string | undefined }}
         */
        __publicField(this, "local");
        __privateSet(this, _parent, parent);
        this.global = global2;
        this.local = parent ? { ...parent.local } : { select_value: void 0 };
        this.type = parent ? parent.type : "body";
      }
      /**
       * @param {(renderer: Renderer) => void} fn
       */
      head(fn) {
        const head = new _Renderer(this.global, this);
        head.type = "head";
        __privateGet(this, _out).push(head);
        head.child(fn);
      }
      /**
       * @param {(renderer: Renderer) => void} fn
       */
      async(fn) {
        __privateGet(this, _out).push(BLOCK_OPEN);
        this.child(fn);
        __privateGet(this, _out).push(BLOCK_CLOSE);
      }
      /**
       * Create a child renderer. The child renderer inherits the state from the parent,
       * but has its own content.
       * @param {(renderer: Renderer) => MaybePromise<void>} fn
       */
      child(fn) {
        const child = new _Renderer(this.global, this);
        __privateGet(this, _out).push(child);
        const parent = ssr_context;
        set_ssr_context({
          ...ssr_context,
          p: parent,
          c: null,
          r: child
        });
        const result = fn(child);
        set_ssr_context(parent);
        if (result instanceof Promise) {
          if (child.global.mode === "sync") {
            await_invalid();
          }
          result.catch(() => {
          });
          child.promise = result;
        }
        return child;
      }
      /**
       * Create a component renderer. The component renderer inherits the state from the parent,
       * but has its own content. It is treated as an ordering boundary for ondestroy callbacks.
       * @param {(renderer: Renderer) => MaybePromise<void>} fn
       * @param {Function} [component_fn]
       * @returns {void}
       */
      component(fn, component_fn) {
        push();
        const child = this.child(fn);
        __privateSet(child, _is_component_body, true);
        pop();
      }
      /**
       * @param {Record<string, any>} attrs
       * @param {(renderer: Renderer) => void} fn
       * @param {string | undefined} [css_hash]
       * @param {Record<string, boolean> | undefined} [classes]
       * @param {Record<string, string> | undefined} [styles]
       * @param {number | undefined} [flags]
       * @returns {void}
       */
      select(attrs, fn, css_hash, classes, styles, flags2) {
        const { value, ...select_attrs } = attrs;
        this.push(`<select${attributes(select_attrs, css_hash, classes, styles, flags2)}>`);
        this.child((renderer) => {
          renderer.local.select_value = value;
          fn(renderer);
        });
        this.push("</select>");
      }
      /**
       * @param {Record<string, any>} attrs
       * @param {string | number | boolean | ((renderer: Renderer) => void)} body
       * @param {string | undefined} [css_hash]
       * @param {Record<string, boolean> | undefined} [classes]
       * @param {Record<string, string> | undefined} [styles]
       * @param {number | undefined} [flags]
       */
      option(attrs, body2, css_hash, classes, styles, flags2) {
        __privateGet(this, _out).push(`<option${attributes(attrs, css_hash, classes, styles, flags2)}`);
        const close = (renderer, value, { head, body: body22 }) => {
          if ("value" in attrs) {
            value = attrs.value;
          }
          if (value === this.local.select_value) {
            __privateGet(renderer, _out).push(" selected");
          }
          __privateGet(renderer, _out).push(`>${body22}</option>`);
          if (head) {
            renderer.head((child) => child.push(head));
          }
        };
        if (typeof body2 === "function") {
          this.child((renderer) => {
            var _a2, _b;
            const r3 = new _Renderer(this.global, this);
            body2(r3);
            if (this.global.mode === "async") {
              return __privateMethod(_a2 = r3, _Renderer_instances, collect_content_async_fn).call(_a2).then((content) => {
                close(renderer, content.body.replaceAll("<!---->", ""), content);
              });
            } else {
              const content = __privateMethod(_b = r3, _Renderer_instances, collect_content_fn).call(_b);
              close(renderer, content.body.replaceAll("<!---->", ""), content);
            }
          });
        } else {
          close(this, body2, { body: body2 });
        }
      }
      /**
       * @param {(renderer: Renderer) => void} fn
       */
      title(fn) {
        const path = this.get_path();
        const close = (head) => {
          this.global.set_title(head, path);
        };
        this.child((renderer) => {
          var _a2, _b;
          const r3 = new _Renderer(renderer.global, renderer);
          fn(r3);
          if (renderer.global.mode === "async") {
            return __privateMethod(_a2 = r3, _Renderer_instances, collect_content_async_fn).call(_a2).then((content) => {
              close(content.head);
            });
          } else {
            const content = __privateMethod(_b = r3, _Renderer_instances, collect_content_fn).call(_b);
            close(content.head);
          }
        });
      }
      /**
       * @param {string | (() => Promise<string>)} content
       */
      push(content) {
        if (typeof content === "function") {
          this.child(async (renderer) => renderer.push(await content()));
        } else {
          __privateGet(this, _out).push(content);
        }
      }
      /**
       * @param {() => void} fn
       */
      on_destroy(fn) {
        (__privateGet(this, _on_destroy) ?? __privateSet(this, _on_destroy, [])).push(fn);
      }
      /**
       * @returns {number[]}
       */
      get_path() {
        return __privateGet(this, _parent) ? [...__privateGet(this, _parent).get_path(), __privateGet(__privateGet(this, _parent), _out).indexOf(this)] : [];
      }
      /**
       * @deprecated this is needed for legacy component bindings
       */
      copy() {
        const copy = new _Renderer(this.global, __privateGet(this, _parent));
        __privateSet(copy, _out, __privateGet(this, _out).map((item2) => item2 instanceof _Renderer ? item2.copy() : item2));
        copy.promise = this.promise;
        return copy;
      }
      /**
       * @param {Renderer} other
       * @deprecated this is needed for legacy component bindings
       */
      subsume(other) {
        if (this.global.mode !== other.global.mode) {
          throw new Error(
            "invariant: A renderer cannot switch modes. If you're seeing this, there's a compiler bug. File an issue!"
          );
        }
        this.local = other.local;
        __privateSet(this, _out, __privateGet(other, _out).map((item2) => {
          if (item2 instanceof _Renderer) {
            item2.subsume(item2);
          }
          return item2;
        }));
        this.promise = other.promise;
        this.type = other.type;
      }
      get length() {
        return __privateGet(this, _out).length;
      }
      /**
       * Only available on the server and when compiling with the `server` option.
       * Takes a component and returns an object with `body` and `head` properties on it, which you can use to populate the HTML when server-rendering your app.
       * @template {Record<string, any>} Props
       * @param {Component<Props>} component
       * @param {{ props?: Omit<Props, '$$slots' | '$$events'>; context?: Map<any, any>; idPrefix?: string }} [options]
       * @returns {RenderOutput}
       */
      static render(component14, options2 = {}) {
        let sync;
        const result = (
          /** @type {RenderOutput} */
          {}
        );
        Object.defineProperties(result, {
          html: {
            get: () => {
              var _a2;
              return (sync ?? (sync = __privateMethod(_a2 = _Renderer, _Renderer_static, render_fn).call(_a2, component14, options2))).body;
            }
          },
          head: {
            get: () => {
              var _a2;
              return (sync ?? (sync = __privateMethod(_a2 = _Renderer, _Renderer_static, render_fn).call(_a2, component14, options2))).head;
            }
          },
          body: {
            get: () => {
              var _a2;
              return (sync ?? (sync = __privateMethod(_a2 = _Renderer, _Renderer_static, render_fn).call(_a2, component14, options2))).body;
            }
          },
          then: {
            value: (
              /**
               * this is not type-safe, but honestly it's the best I can do right now, and it's a straightforward function.
               *
               * @template TResult1
               * @template [TResult2=never]
               * @param { (value: SyncRenderOutput) => TResult1 } onfulfilled
               * @param { (reason: unknown) => TResult2 } onrejected
               */
              ((onfulfilled, onrejected) => {
                var _a2;
                {
                  const result2 = sync ?? (sync = __privateMethod(_a2 = _Renderer, _Renderer_static, render_fn).call(_a2, component14, options2));
                  const user_result = onfulfilled({
                    head: result2.head,
                    body: result2.body,
                    html: result2.body
                  });
                  return Promise.resolve(user_result);
                }
              })
            )
          }
        });
        return result;
      }
    };
    _out = new WeakMap();
    _on_destroy = new WeakMap();
    _is_component_body = new WeakMap();
    _parent = new WeakMap();
    _Renderer_instances = new WeakSet();
    collect_on_destroy_fn = function* () {
      var _a2;
      for (const component14 of __privateMethod(this, _Renderer_instances, traverse_components_fn).call(this)) {
        yield* __privateMethod(_a2 = component14, _Renderer_instances, collect_ondestroy_fn).call(_a2);
      }
    };
    traverse_components_fn = function* () {
      var _a2;
      for (const child of __privateGet(this, _out)) {
        if (typeof child !== "string") {
          yield* __privateMethod(_a2 = child, _Renderer_instances, traverse_components_fn).call(_a2);
        }
      }
      if (__privateGet(this, _is_component_body)) {
        yield this;
      }
    };
    collect_ondestroy_fn = function* () {
      var _a2;
      if (__privateGet(this, _on_destroy)) {
        for (const fn of __privateGet(this, _on_destroy)) {
          yield fn;
        }
      }
      for (const child of __privateGet(this, _out)) {
        if (child instanceof _Renderer && !__privateGet(child, _is_component_body)) {
          yield* __privateMethod(_a2 = child, _Renderer_instances, collect_ondestroy_fn).call(_a2);
        }
      }
    };
    _Renderer_static = new WeakSet();
    render_fn = function(component14, options2) {
      var _a2, _b, _c;
      var previous_context = ssr_context;
      try {
        const renderer = __privateMethod(_a2 = _Renderer, _Renderer_static, open_render_fn).call(_a2, "sync", component14, options2);
        const content = __privateMethod(_b = renderer, _Renderer_instances, collect_content_fn).call(_b);
        return __privateMethod(_c = _Renderer, _Renderer_static, close_render_fn).call(_c, content, renderer);
      } finally {
        abort();
        set_ssr_context(previous_context);
      }
    };
    render_async_fn = async function(component14, options2) {
      var _a2, _b, _c;
      var previous_context = ssr_context;
      try {
        const renderer = __privateMethod(_a2 = _Renderer, _Renderer_static, open_render_fn).call(_a2, "async", component14, options2);
        const content = await __privateMethod(_b = renderer, _Renderer_instances, collect_content_async_fn).call(_b);
        return __privateMethod(_c = _Renderer, _Renderer_static, close_render_fn).call(_c, content, renderer);
      } finally {
        abort();
        set_ssr_context(previous_context);
      }
    };
    /**
     * Collect all of the code from the `out` array and return it as a string, or a promise resolving to a string.
     * @param {AccumulatedContent} content
     * @returns {AccumulatedContent}
     */
    collect_content_fn = function(content = { head: "", body: "" }) {
      var _a2;
      for (const item2 of __privateGet(this, _out)) {
        if (typeof item2 === "string") {
          content[this.type] += item2;
        } else if (item2 instanceof _Renderer) {
          __privateMethod(_a2 = item2, _Renderer_instances, collect_content_fn).call(_a2, content);
        }
      }
      return content;
    };
    collect_content_async_fn = async function(content = { head: "", body: "" }) {
      var _a2;
      await this.promise;
      for (const item2 of __privateGet(this, _out)) {
        if (typeof item2 === "string") {
          content[this.type] += item2;
        } else if (item2 instanceof _Renderer) {
          await __privateMethod(_a2 = item2, _Renderer_instances, collect_content_async_fn).call(_a2, content);
        }
      }
      return content;
    };
    open_render_fn = function(mode, component14, options2) {
      const renderer = new _Renderer(
        new SSRState(mode, options2.idPrefix ? options2.idPrefix + "-" : "")
      );
      renderer.push(BLOCK_OPEN);
      if (options2.context) {
        push();
        ssr_context.c = options2.context;
        ssr_context.r = renderer;
      }
      component14(renderer, options2.props ?? {});
      if (options2.context) {
        pop();
      }
      renderer.push(BLOCK_CLOSE);
      return renderer;
    };
    close_render_fn = function(content, renderer) {
      var _a2;
      for (const cleanup of __privateMethod(_a2 = renderer, _Renderer_instances, collect_on_destroy_fn).call(_a2)) {
        cleanup();
      }
      let head = content.head + renderer.global.get_title();
      let body2 = content.body;
      for (const { hash: hash2, code } of renderer.global.css) {
        head += `<style id="${hash2}">${code}</style>`;
      }
      return {
        head,
        body: body2
      };
    };
    __privateAdd(_Renderer, _Renderer_static);
    Renderer = _Renderer;
    SSRState = class {
      /**
       * @param {'sync' | 'async'} mode
       * @param {string} [id_prefix]
       */
      constructor(mode, id_prefix = "") {
        /** @readonly @type {'sync' | 'async'} */
        __publicField(this, "mode");
        /** @readonly @type {() => string} */
        __publicField(this, "uid");
        /** @readonly @type {Set<{ hash: string; code: string }>} */
        __publicField(this, "css", /* @__PURE__ */ new Set());
        /** @type {{ path: number[], value: string }} */
        __privateAdd(this, _title, { path: [], value: "" });
        this.mode = mode;
        let uid = 1;
        this.uid = () => `${id_prefix}s${uid++}`;
      }
      get_title() {
        return __privateGet(this, _title).value;
      }
      /**
       * Performs a depth-first (lexicographic) comparison using the path. Rejects sets
       * from earlier than or equal to the current value.
       * @param {string} value
       * @param {number[]} path
       */
      set_title(value, path) {
        const current2 = __privateGet(this, _title).path;
        let i2 = 0;
        let l3 = Math.min(path.length, current2.length);
        while (i2 < l3 && path[i2] === current2[i2]) i2 += 1;
        if (path[i2] === void 0) return;
        if (current2[i2] === void 0 || path[i2] > current2[i2]) {
          __privateGet(this, _title).path = path;
          __privateGet(this, _title).value = value;
        }
      }
    };
    _title = new WeakMap();
    INVALID_ATTR_NAME_CHAR_REGEX = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode;
      var index14 = 0;
      while (index14 < str.length) {
        var eqIdx = str.indexOf("=", index14);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index14);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index14 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index14, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index14 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e2) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isForbiddenKey(key2) {
      return typeof key2 !== "string" || key2 in {};
    }
    function createNullObj() {
      return /* @__PURE__ */ Object.create(null);
    }
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (isForbiddenKey(name)) {
        return null;
      }
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e2) {
        console.error(
          "set-cookie-parser: failed to decode cookie value. Set options.decodeValues=false to disable decoding.",
          e2
        );
      }
      var cookie = createNullObj();
      cookie.name = name;
      cookie.value = value;
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        if (isForbiddenKey(key2)) {
          return;
        }
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          var n4 = parseInt(value2, 10);
          if (!Number.isNaN(n4)) cookie.maxAge = n4;
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else if (key2 === "partitioned") {
          cookie.partitioned = true;
        } else if (key2) {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return createNullObj();
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key2) {
            return key2.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options2.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        }).filter(Boolean);
      } else {
        var cookies = createNullObj();
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          if (cookie && !isForbiddenKey(cookie.name)) {
            cookies2[cookie.name] = cookie;
          }
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/state.svelte.js
var is_legacy;
var init_state_svelte = __esm({
  ".svelte-kit/output/server/chunks/state.svelte.js"() {
    init_clsx();
    init_context();
    init_server();
    is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
    if (is_legacy) {
      ({
        data: {},
        form: null,
        error: null,
        params: {},
        route: { id: null },
        state: {},
        status: -1,
        url: new URL("https://example.com")
      });
    }
  }
});

// .svelte-kit/output/server/chunks/contactInfo.js
var contactInfo;
var init_contactInfo = __esm({
  ".svelte-kit/output/server/chunks/contactInfo.js"() {
    contactInfo = {
      title: "Kontakt Oss",
      location: {
        Kontoradresse: "Rosenholmveien 12, 1252 Oslo",
        Postadresse: "Postboks 134 Holmlia, 1203 Oslo",
        \u00C5pningstider: "Hverdager 08:00 - 16:00"
      },
      contactOffice: {
        Telefon: "+47 22 76 44 00",
        Epost: "sogb@sogb.no",
        "Org.Nr": "916591144"
      },
      contactOrders: {
        Telefon: "+47 22 76 44 44",
        Epost: "sogb@sogb.no"
      },
      socialMedia: {
        Facebook: "https://www.facebook.com/sorensenogbalchen",
        LinkedIn: "https://www.linkedin.com/company/as-sorensen-og-balchen/"
        // Flere sosiale medier kan legges til
      },
      Aapenhetsloven: {
        Aapenhetsloven: "\xC5penhetsloven",
        AapenhetslovenLink: "/Aapenhetsloven.pdf"
      }
    };
  }
});

// .svelte-kit/output/server/entries/pages/_layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => _layout
});
function NavBar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const navLinks = [
      { name: "Hjem", href: "/" },
      { name: "Om oss", href: "/about" },
      // { name: 'HMS', href: '/hms' },
      { name: "Ansatte", href: "/people" },
      // { name: 'Kontakt', href: '/contact' },
      { name: "BilXtra", href: "/bilxtra" }
    ];
    let currentPage;
    let isOpen;
    {
      currentPage = store_get($$store_subs ?? ($$store_subs = {}), "$page", page).route.id;
      isOpen = false;
    }
    $$renderer2.push(`<nav class="bg-gray-950"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex h-16 justify-between"><div class="flex"><div class="-ml-2 mr-2 flex items-center md:hidden"><button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"><span class="absolute -inset-0.5"></span> <span class="sr-only">Open main menu</span> <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg> <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="flex flex-shrink-0 items-center"><a href="/"><img class="w-64" src="logo.webp" alt="Your Company"/></a></div> <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)}${attr_class(`rounded-md px-3 py-2 text-sm font-medium ${stringify2(currentPage === link.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white")}`)}>${escape_html(link.name)}</a>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div> `);
    if (isOpen) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="md:hidden" id="mobile-menu"><div class="space-y-1 px-2 pb-3 pt-2 sm:px-3"><!--[-->`);
      const each_array_1 = ensure_array_like(navLinks);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let link = each_array_1[$$index_1];
        $$renderer2.push(`<a${attr("href", link.href)}${attr_class(`${stringify2(currentPage === link.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white")} block rounded-md px-3 py-2 text-base font-medium`)}>${escape_html(link.name)}</a>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></nav>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer class="bg-gray-800 text-white py-8"><div class="container mx-auto px-4"><div class="flex flex-wrap -mx-4"><div class="w-full md:w-1/3 px-4 my-16"><h5 class="text-sm font-regular text-red-500/75 mb-2">${escape_html(
      // Footer data structured as an object with arrays
      contactInfo.title
    )}</h5> <ul><!--[-->`);
    const each_array = ensure_array_like(Object.entries(contactInfo.location));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [key2, value] = each_array[$$index];
      $$renderer2.push(`<li class="mb-2 text-gray-400 text-xs">${escape_html(`${key2} : ${value}`)}</li>`);
    }
    $$renderer2.push(`<!--]--> <!--[-->`);
    const each_array_1 = ensure_array_like(Object.entries(contactInfo.contactOffice));
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let [key2, value] = each_array_1[$$index_1];
      $$renderer2.push(`<li class="mb-2 text-gray-400 text-xs">${escape_html(`${key2} : ${value}`)}</li>`);
    }
    $$renderer2.push(`<!--]--> <li><a${attr("href", contactInfo.Aapenhetsloven.AapenhetslovenLink)}>${escape_html(contactInfo.Aapenhetsloven.Aapenhetsloven)}</a></li> <li><a${attr("href", contactInfo.Aapenhetsloven.AapenhetslovenLink)} download="">Last ned</a></li></ul></div> <div class="w-full md:w-1/3 px-4 my-16"><h5 class="text-sm font-regular text-red-500/75 mb-2">Kundesenter</h5> <ul><!--[-->`);
    const each_array_2 = ensure_array_like(Object.entries(contactInfo.contactOrders));
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let [key2, value] = each_array_2[$$index_2];
      $$renderer2.push(`<li class="mb-4 text-gray-400 text-xs">${escape_html(` ${value}`)}</li>`);
    }
    $$renderer2.push(`<!--]--></ul></div> <div class="w-full md:w-1/3 px-4 my-16"><h5 class="text-sm font-regular text-red-500/75 mb-2">Sosiale Medier</h5> <ul><!--[-->`);
    const each_array_3 = ensure_array_like(Object.entries(contactInfo.socialMedia));
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let [key2, value] = each_array_3[$$index_3];
      $$renderer2.push(`<li class="mb-4 text-gray-400 text-xs"><a${attr("href", value)}>${escape_html(key2)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div></div></div></footer>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.push(`<div class="w-full mx-auto max-w-[1800px] bg-gray-100 svelte-12qhfyh"><nav class="svelte-12qhfyh">`);
  NavBar($$renderer);
  $$renderer.push(`<!----></nav> <main class="svelte-12qhfyh"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div>`);
}
var getStores, page;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_index2();
    init_context();
    init_internal();
    init_exports2();
    init_utils2();
    init_clsx();
    init_server();
    init_state_svelte();
    init_contactInfo();
    getStores = () => {
      const stores$1 = getContext("__svelte__");
      return {
        /** @type {typeof page} */
        page: {
          subscribe: stores$1.page.subscribe
        },
        /** @type {typeof navigating} */
        navigating: {
          subscribe: stores$1.navigating.subscribe
        },
        /** @type {typeof updated} */
        updated: stores$1.updated
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component_cache, component, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => component_cache ?? (component_cache = (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default);
    imports = ["_app/immutable/nodes/0.CgIi2TXo.js", "_app/immutable/chunks/BniCQta6.js", "_app/immutable/chunks/LOdgb3q2.js", "_app/immutable/chunks/fLdaqtOV.js", "_app/immutable/chunks/Bl-_U8ph.js", "_app/immutable/chunks/Dskp9KqV.js", "_app/immutable/chunks/7YGlKFBW.js", "_app/immutable/chunks/CsADvZg0.js", "_app/immutable/chunks/eNzDW-GZ.js", "_app/immutable/chunks/Cjsn179y.js", "_app/immutable/chunks/wL22vLqa.js", "_app/immutable/chunks/fFWynACa.js", "_app/immutable/chunks/BSTNQZyB.js", "_app/immutable/chunks/DQc0Uil7.js", "_app/immutable/chunks/DVmcspCf.js", "_app/immutable/chunks/CYahJKwF.js", "_app/immutable/chunks/BUApaBEI.js", "_app/immutable/chunks/Dc7zkNrZ.js"];
    stylesheets = ["_app/immutable/assets/0.BML4LZ44.css"];
    fonts = [];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
function create_updated_store() {
  const { set: set2, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
function context() {
  return getContext("__request__");
}
function Error$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<h1>${escape_html(page2.status)}</h1> <p>${escape_html(page2.error?.message)}</p>`);
  });
}
var stores, page$1, page2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_context();
    init_clsx();
    init_state_svelte();
    init_internal();
    init_exports2();
    init_utils2();
    init_chunks();
    init_server();
    stores = {
      updated: /* @__PURE__ */ create_updated_store()
    };
    ({
      check: stores.updated.check
    });
    page$1 = {
      get error() {
        return context().page.error;
      },
      get status() {
        return context().page.status;
      }
    };
    page2 = page$1;
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component_cache2, component2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => component_cache2 ?? (component_cache2 = (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default);
    imports2 = ["_app/immutable/nodes/1.C84wyABQ.js", "_app/immutable/chunks/BniCQta6.js", "_app/immutable/chunks/LOdgb3q2.js", "_app/immutable/chunks/fLdaqtOV.js", "_app/immutable/chunks/Dskp9KqV.js", "_app/immutable/chunks/BSTNQZyB.js", "_app/immutable/chunks/CYahJKwF.js", "_app/immutable/chunks/DVmcspCf.js", "_app/immutable/chunks/BUApaBEI.js", "_app/immutable/chunks/Bl-_U8ph.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// node_modules/get-it/dist/_chunks-es/_commonjsHelpers.js
function o(e2) {
  return decodeURIComponent(e2.replace(/\+/g, " "));
}
function n(e2) {
  if (false === e2 || 0 === e2) return false;
  if (e2.connect || e2.socket) return e2;
  const r3 = Number(e2);
  return isNaN(r3) ? n(t.timeout) : { connect: r3, socket: r3 };
}
function c(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var e, t, r2, a, s2;
var init_commonjsHelpers = __esm({
  "node_modules/get-it/dist/_chunks-es/_commonjsHelpers.js"() {
    e = !(typeof navigator > "u") && "ReactNative" === navigator.product;
    t = { timeout: e ? 6e4 : 12e4 };
    r2 = function(r3) {
      const a4 = { ...t, ..."string" == typeof r3 ? { url: r3 } : r3 };
      if (a4.timeout = n(a4.timeout), a4.query) {
        const { url: t2, searchParams: r4 } = (function(t3) {
          const r5 = t3.indexOf("?");
          if (-1 === r5) return { url: t3, searchParams: new URLSearchParams() };
          const n4 = t3.slice(0, r5), a5 = t3.slice(r5 + 1);
          if (!e) return { url: n4, searchParams: new URLSearchParams(a5) };
          if ("function" != typeof decodeURIComponent) throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
          const s5 = new URLSearchParams();
          for (const e2 of a5.split("&")) {
            const [t4, r6] = e2.split("=");
            t4 && s5.append(o(t4), o(r6 || ""));
          }
          return { url: n4, searchParams: s5 };
        })(a4.url);
        for (const [e2, o3] of Object.entries(a4.query)) {
          if (void 0 !== o3) if (Array.isArray(o3)) for (const t3 of o3) r4.append(e2, t3);
          else r4.append(e2, o3);
          const n4 = r4.toString();
          n4 && (a4.url = `${t2}?${n4}`);
        }
      }
      return a4.method = a4.body && !a4.method ? "POST" : (a4.method || "GET").toUpperCase(), a4;
    };
    a = /^https?:\/\//i;
    s2 = function(e2) {
      if (!a.test(e2.url)) throw new Error(`"${e2.url}" is not a valid URL`);
    };
  }
});

// node_modules/get-it/dist/index.browser.js
function s3(r3, a4) {
  const i2 = [], u4 = n2.reduce((e2, t2) => (e2[t2] = e2[t2] || [], e2), { processOptions: [r2], validateOptions: [s2] });
  function l3(e2) {
    const t2 = o2.reduce((e3, t3) => (e3[t3] = /* @__PURE__ */ (function() {
      const e4 = /* @__PURE__ */ Object.create(null);
      let t4 = 0;
      return { publish: function(t5) {
        for (const r5 in e4) e4[r5](t5);
      }, subscribe: function(r5) {
        const o3 = t4++;
        return e4[o3] = r5, function() {
          delete e4[o3];
        };
      } };
    })(), e3), {}), r4 = /* @__PURE__ */ ((e3) => function(t3, r5, ...o3) {
      const n5 = "onError" === t3;
      let s6 = r5;
      for (let r6 = 0; r6 < e3[t3].length && (s6 = (0, e3[t3][r6])(s6, ...o3), !n5 || s6); r6++) ;
      return s6;
    })(u4), n4 = r4("processOptions", e2);
    r4("validateOptions", n4);
    const s5 = { options: n4, channels: t2, applyMiddleware: r4 };
    let i3;
    const l4 = t2.request.subscribe((e3) => {
      i3 = a4(e3, (o3, n5) => ((e4, o4, n6) => {
        let s6 = e4, a5 = o4;
        if (!s6) try {
          a5 = r4("onResponse", o4, n6);
        } catch (e5) {
          a5 = null, s6 = e5;
        }
        s6 = s6 && r4("onError", s6, n6), s6 ? t2.error.publish(s6) : a5 && t2.response.publish(a5);
      })(o3, n5, e3));
    });
    t2.abort.subscribe(() => {
      l4(), i3 && i3.abort();
    });
    const c5 = r4("onReturn", t2, s5);
    return c5 === t2 && t2.request.publish(s5), c5;
  }
  return l3.use = function(e2) {
    if (!e2) throw new Error("Tried to add middleware that resolved to falsey value");
    if ("function" == typeof e2) throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
    if (e2.onReturn && u4.onReturn.length > 0) throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
    return n2.forEach((t2) => {
      e2[t2] && u4[t2].push(e2[t2]);
    }), i2.push(e2), l3;
  }, l3.clone = () => s3(i2, a4), r3.forEach(l3.use), l3;
}
var o2, n2, a2, i, u, _e, _t, _r, _o, _n, _s, _a, l, c2, h, d, p;
var init_index_browser = __esm({
  "node_modules/get-it/dist/index.browser.js"() {
    init_commonjsHelpers();
    o2 = ["request", "response", "progress", "error", "abort"];
    n2 = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
    u = /* @__PURE__ */ c((function() {
      if (i) return a2;
      i = 1;
      var e2 = function(e3) {
        return e3.replace(/^\s+|\s+$/g, "");
      }, t2 = function(e3) {
        return "[object Array]" === Object.prototype.toString.call(e3);
      };
      return a2 = function(r3) {
        if (!r3) return {};
        for (var o3 = /* @__PURE__ */ Object.create(null), n4 = e2(r3).split("\n"), s5 = 0; s5 < n4.length; s5++) {
          var a4 = n4[s5], i2 = a4.indexOf(":"), u4 = e2(a4.slice(0, i2)).toLowerCase(), l3 = e2(a4.slice(i2 + 1));
          typeof o3[u4] > "u" ? o3[u4] = l3 : t2(o3[u4]) ? o3[u4].push(l3) : o3[u4] = [o3[u4], l3];
        }
        return o3;
      };
    })());
    l = class {
      constructor() {
        __publicField(this, "onabort");
        __publicField(this, "onerror");
        __publicField(this, "onreadystatechange");
        __publicField(this, "ontimeout");
        __publicField(this, "readyState", 0);
        __publicField(this, "response");
        __publicField(this, "responseText", "");
        __publicField(this, "responseType", "");
        __publicField(this, "status");
        __publicField(this, "statusText");
        __publicField(this, "withCredentials");
        __privateAdd(this, _e);
        __privateAdd(this, _t);
        __privateAdd(this, _r);
        __privateAdd(this, _o, {});
        __privateAdd(this, _n);
        __privateAdd(this, _s, {});
        __privateAdd(this, _a);
      }
      open(e2, t2, r3) {
        __privateSet(this, _e, e2), __privateSet(this, _t, t2), __privateSet(this, _r, ""), this.readyState = 1, this.onreadystatechange?.(), __privateSet(this, _n, void 0);
      }
      abort() {
        __privateGet(this, _n) && __privateGet(this, _n).abort();
      }
      getAllResponseHeaders() {
        return __privateGet(this, _r);
      }
      setRequestHeader(e2, t2) {
        __privateGet(this, _o)[e2] = t2;
      }
      setInit(e2, t2 = true) {
        __privateSet(this, _s, e2), __privateSet(this, _a, t2);
      }
      send(e2) {
        const t2 = "arraybuffer" !== this.responseType, r3 = { ...__privateGet(this, _s), method: __privateGet(this, _e), headers: __privateGet(this, _o), body: e2 };
        "function" == typeof AbortController && __privateGet(this, _a) && (__privateSet(this, _n, new AbortController()), typeof EventTarget < "u" && __privateGet(this, _n).signal instanceof EventTarget && (r3.signal = __privateGet(this, _n).signal)), typeof document < "u" && (r3.credentials = this.withCredentials ? "include" : "omit"), fetch(__privateGet(this, _t), r3).then((e3) => (e3.headers.forEach((e4, t3) => {
          __privateSet(this, _r, __privateGet(this, _r) + `${t3}: ${e4}\r
`);
        }), this.status = e3.status, this.statusText = e3.statusText, this.readyState = 3, this.onreadystatechange?.(), t2 ? e3.text() : e3.arrayBuffer())).then((e3) => {
          "string" == typeof e3 ? this.responseText = e3 : this.response = e3, this.readyState = 4, this.onreadystatechange?.();
        }).catch((e3) => {
          "AbortError" !== e3.name ? this.onerror?.(e3) : this.onabort?.();
        });
      }
    };
    _e = new WeakMap();
    _t = new WeakMap();
    _r = new WeakMap();
    _o = new WeakMap();
    _n = new WeakMap();
    _s = new WeakMap();
    _a = new WeakMap();
    c2 = "function" == typeof XMLHttpRequest ? "xhr" : "fetch";
    h = "xhr" === c2 ? XMLHttpRequest : l;
    d = (e2, t2) => {
      const r3 = e2.options, o3 = e2.applyMiddleware("finalizeOptions", r3), n4 = {}, s5 = e2.applyMiddleware("interceptRequest", void 0, { adapter: c2, context: e2 });
      if (s5) {
        const e3 = setTimeout(t2, 0, null, s5);
        return { abort: () => clearTimeout(e3) };
      }
      let a4 = new h();
      a4 instanceof l && "object" == typeof o3.fetch && a4.setInit(o3.fetch, o3.useAbortSignal ?? true);
      const i2 = o3.headers, d3 = o3.timeout;
      let p3 = false, f3 = false, b = false;
      if (a4.onerror = (e3) => {
        m(a4 instanceof l ? e3 instanceof Error ? e3 : new Error(`Request error while attempting to reach is ${o3.url}`, { cause: e3 }) : new Error(`Request error while attempting to reach is ${o3.url}${e3.lengthComputable ? `(${e3.loaded} of ${e3.total} bytes transferred)` : ""}`));
      }, a4.ontimeout = (e3) => {
        m(new Error(`Request timeout while attempting to reach ${o3.url}${e3.lengthComputable ? `(${e3.loaded} of ${e3.total} bytes transferred)` : ""}`));
      }, a4.onabort = () => {
        w(true), p3 = true;
      }, a4.onreadystatechange = function() {
        d3 && (w(), n4.socket = setTimeout(() => y("ESOCKETTIMEDOUT"), d3.socket)), !p3 && a4 && 4 === a4.readyState && 0 !== a4.status && (function() {
          if (!(p3 || f3 || b)) {
            if (0 === a4.status) return void m(new Error("Unknown XHR error"));
            w(), f3 = true, t2(null, { body: a4.response || ("" === a4.responseType || "text" === a4.responseType ? a4.responseText : ""), url: o3.url, method: o3.method, headers: u(a4.getAllResponseHeaders()), statusCode: a4.status, statusMessage: a4.statusText });
          }
        })();
      }, a4.open(o3.method, o3.url, true), a4.withCredentials = !!o3.withCredentials, i2 && a4.setRequestHeader) for (const e3 in i2) i2.hasOwnProperty(e3) && a4.setRequestHeader(e3, i2[e3]);
      return o3.rawBody && (a4.responseType = "arraybuffer"), e2.applyMiddleware("onRequest", { options: o3, adapter: c2, request: a4, context: e2 }), a4.send(o3.body || null), d3 && (n4.connect = setTimeout(() => y("ETIMEDOUT"), d3.connect)), { abort: function() {
        p3 = true, a4 && a4.abort();
      } };
      function y(t3) {
        b = true, a4.abort();
        const r4 = new Error("ESOCKETTIMEDOUT" === t3 ? `Socket timed out on request to ${o3.url}` : `Connection timed out on request to ${o3.url}`);
        r4.code = t3, e2.channels.error.publish(r4);
      }
      function w(e3) {
        (e3 || p3 || a4 && a4.readyState >= 2 && n4.connect) && clearTimeout(n4.connect), n4.socket && clearTimeout(n4.socket);
      }
      function m(e3) {
        if (f3) return;
        w(true), f3 = true, a4 = null;
        const r4 = e3 || new Error(`Network error while attempting to reach ${o3.url}`);
        r4.isNetworkError = true, r4.request = o3, t2(r4);
      }
    };
    p = (e2 = [], t2 = d) => s3(e2, t2);
  }
});

// node_modules/get-it/dist/middleware.browser.js
function n3(e2) {
  return {};
}
function O(e2) {
  return "[object Object]" === Object.prototype.toString.call(e2);
}
function j(e2) {
  if (false === O(e2)) return false;
  const t2 = e2.constructor;
  if (void 0 === t2) return true;
  const s5 = t2.prototype;
  return !(false === O(s5) || false === s5.hasOwnProperty("isPrototypeOf"));
}
function x() {
  return { processOptions: (e2) => {
    const t2 = e2.body;
    return !t2 || "function" == typeof t2.pipe || F(t2) || -1 === v.indexOf(typeof t2) && !Array.isArray(t2) && !j(t2) ? e2 : Object.assign({}, e2, { body: JSON.stringify(e2.body), headers: Object.assign({}, e2.headers, { "Content-Type": "application/json" }) });
  } };
}
function E(e2) {
  return { onResponse: (s5) => {
    const n4 = s5.headers["content-type"] || "", r3 = e2 && e2.force || -1 !== n4.indexOf("application/json");
    return s5.body && n4 && r3 ? Object.assign({}, s5, { body: t2(s5.body) }) : s5;
  }, processOptions: (e3) => Object.assign({}, e3, { headers: Object.assign({ Accept: "application/json" }, e3.headers) }) };
  function t2(e3) {
    try {
      return JSON.parse(e3);
    } catch (e4) {
      throw e4.message = `Failed to parsed response body as JSON: ${e4.message}`, e4;
    }
  }
}
function A(e2 = {}) {
  const t2 = e2.implementation || q.Observable;
  if (!t2) throw new Error("`Observable` is not available in global scope, and no implementation was passed");
  return { onReturn: (e3, s5) => new t2((t3) => (e3.error.subscribe((e4) => t3.error(e4)), e3.progress.subscribe((e4) => t3.next(Object.assign({ type: "progress" }, e4))), e3.response.subscribe((e4) => {
    t3.next(Object.assign({ type: "response" }, e4)), t3.complete();
  }), e3.request.publish(s5), () => e3.abort.publish())) };
}
function S() {
  return { onRequest: (e2) => {
    if ("xhr" !== e2.adapter) return;
    const t2 = e2.request, s5 = e2.context;
    function n4(e3) {
      return (t3) => {
        const n5 = t3.lengthComputable ? t3.loaded / t3.total * 100 : -1;
        s5.channels.progress.publish({ stage: e3, percent: n5, total: t3.total, loaded: t3.loaded, lengthComputable: t3.lengthComputable });
      };
    }
    "upload" in t2 && "onprogress" in t2.upload && (t2.upload.onprogress = n4("upload")), "onprogress" in t2 && (t2.onprogress = n4("download"));
  } };
}
function _(e2) {
  return 100 * Math.pow(2, e2) + 100 * Math.random();
}
var a3, c3, u2, l2, p2, d2, f, F, v, R, q, N, I, _T, T, $, P, z, B, D;
var init_middleware_browser = __esm({
  "node_modules/get-it/dist/middleware.browser.js"() {
    init_commonjsHelpers();
    d2 = { exports: {} };
    f = /* @__PURE__ */ c((p2 || (p2 = 1, (function(e2, t2) {
      t2.formatArgs = function(t3) {
        if (t3[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t3[0] + (this.useColors ? "%c " : " ") + "+" + e2.exports.humanize(this.diff), !this.useColors) return;
        const s6 = "color: " + this.color;
        t3.splice(1, 0, s6, "color: inherit");
        let n4 = 0, r3 = 0;
        t3[0].replace(/%[a-zA-Z%]/g, (e3) => {
          "%%" !== e3 && (n4++, "%c" === e3 && (r3 = n4));
        }), t3.splice(r3, 0, s6);
      }, t2.save = function(e3) {
        try {
          e3 ? t2.storage.setItem("debug", e3) : t2.storage.removeItem("debug");
        } catch {
        }
      }, t2.load = function() {
        let e3;
        try {
          e3 = t2.storage.getItem("debug") || t2.storage.getItem("DEBUG");
        } catch {
        }
        return !e3 && typeof process < "u" && "env" in process && (e3 = process.env.DEBUG), e3;
      }, t2.useColors = function() {
        if (typeof window < "u" && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return true;
        if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
        let e3;
        return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (e3 = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e3[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }, t2.storage = (function() {
        try {
          return localStorage;
        } catch {
        }
      })(), t2.destroy = /* @__PURE__ */ (() => {
        let e3 = false;
        return () => {
          e3 || (e3 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
      })(), t2.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t2.log = console.debug || console.log || (() => {
      }), e2.exports = (l2 ? u2 : (l2 = 1, u2 = function(e3) {
        function t3(e4) {
          let n5, r3, o3, i2 = null;
          function a4(...e5) {
            if (!a4.enabled) return;
            const s7 = a4, r4 = Number(/* @__PURE__ */ new Date()), o4 = r4 - (n5 || r4);
            s7.diff = o4, s7.prev = n5, s7.curr = r4, n5 = r4, e5[0] = t3.coerce(e5[0]), "string" != typeof e5[0] && e5.unshift("%O");
            let i3 = 0;
            e5[0] = e5[0].replace(/%([a-zA-Z%])/g, (n6, r5) => {
              if ("%%" === n6) return "%";
              i3++;
              const o5 = t3.formatters[r5];
              if ("function" == typeof o5) {
                const t4 = e5[i3];
                n6 = o5.call(s7, t4), e5.splice(i3, 1), i3--;
              }
              return n6;
            }), t3.formatArgs.call(s7, e5), (s7.log || t3.log).apply(s7, e5);
          }
          return a4.namespace = e4, a4.useColors = t3.useColors(), a4.color = t3.selectColor(e4), a4.extend = s6, a4.destroy = t3.destroy, Object.defineProperty(a4, "enabled", { enumerable: true, configurable: false, get: () => null !== i2 ? i2 : (r3 !== t3.namespaces && (r3 = t3.namespaces, o3 = t3.enabled(e4)), o3), set: (e5) => {
            i2 = e5;
          } }), "function" == typeof t3.init && t3.init(a4), a4;
        }
        function s6(e4, s7) {
          const n5 = t3(this.namespace + (typeof s7 > "u" ? ":" : s7) + e4);
          return n5.log = this.log, n5;
        }
        function n4(e4, t4) {
          let s7 = 0, n5 = 0, r3 = -1, o3 = 0;
          for (; s7 < e4.length; ) if (n5 < t4.length && (t4[n5] === e4[s7] || "*" === t4[n5])) "*" === t4[n5] ? (r3 = n5, o3 = s7, n5++) : (s7++, n5++);
          else {
            if (-1 === r3) return false;
            n5 = r3 + 1, o3++, s7 = o3;
          }
          for (; n5 < t4.length && "*" === t4[n5]; ) n5++;
          return n5 === t4.length;
        }
        return t3.debug = t3, t3.default = t3, t3.coerce = function(e4) {
          return e4 instanceof Error ? e4.stack || e4.message : e4;
        }, t3.disable = function() {
          const e4 = [...t3.names, ...t3.skips.map((e5) => "-" + e5)].join(",");
          return t3.enable(""), e4;
        }, t3.enable = function(e4) {
          t3.save(e4), t3.namespaces = e4, t3.names = [], t3.skips = [];
          const s7 = ("string" == typeof e4 ? e4 : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
          for (const e5 of s7) "-" === e5[0] ? t3.skips.push(e5.slice(1)) : t3.names.push(e5);
        }, t3.enabled = function(e4) {
          for (const s7 of t3.skips) if (n4(e4, s7)) return false;
          for (const s7 of t3.names) if (n4(e4, s7)) return true;
          return false;
        }, t3.humanize = (function() {
          if (c3) return a3;
          c3 = 1;
          var e4 = 1e3, t4 = 60 * e4, s7 = 60 * t4, n5 = 24 * s7, r3 = 7 * n5;
          function o3(e5, t5, s8, n6) {
            var r4 = t5 >= 1.5 * s8;
            return Math.round(e5 / s8) + " " + n6 + (r4 ? "s" : "");
          }
          return a3 = function(i2, a4) {
            a4 = a4 || {};
            var c5, u4, l3 = typeof i2;
            if ("string" === l3 && i2.length > 0) return (function(o4) {
              if (!((o4 = String(o4)).length > 100)) {
                var i3 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o4);
                if (i3) {
                  var a5 = parseFloat(i3[1]);
                  switch ((i3[2] || "ms").toLowerCase()) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                      return 315576e5 * a5;
                    case "weeks":
                    case "week":
                    case "w":
                      return a5 * r3;
                    case "days":
                    case "day":
                    case "d":
                      return a5 * n5;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                      return a5 * s7;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                      return a5 * t4;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                      return a5 * e4;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                      return a5;
                    default:
                      return;
                  }
                }
              }
            })(i2);
            if ("number" === l3 && isFinite(i2)) return a4.long ? (c5 = i2, (u4 = Math.abs(c5)) >= n5 ? o3(c5, u4, n5, "day") : u4 >= s7 ? o3(c5, u4, s7, "hour") : u4 >= t4 ? o3(c5, u4, t4, "minute") : u4 >= e4 ? o3(c5, u4, e4, "second") : c5 + " ms") : (function(r4) {
              var o4 = Math.abs(r4);
              return o4 >= n5 ? Math.round(r4 / n5) + "d" : o4 >= s7 ? Math.round(r4 / s7) + "h" : o4 >= t4 ? Math.round(r4 / t4) + "m" : o4 >= e4 ? Math.round(r4 / e4) + "s" : r4 + "ms";
            })(i2);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(i2));
          };
        })(), t3.destroy = function() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }, Object.keys(e3).forEach((s7) => {
          t3[s7] = e3[s7];
        }), t3.names = [], t3.skips = [], t3.formatters = {}, t3.selectColor = function(e4) {
          let s7 = 0;
          for (let t4 = 0; t4 < e4.length; t4++) s7 = (s7 << 5) - s7 + e4.charCodeAt(t4), s7 |= 0;
          return t3.colors[Math.abs(s7) % t3.colors.length];
        }, t3.enable(t3.load()), t3;
      }))(t2);
      const { formatters: s5 } = e2.exports;
      s5.j = function(e3) {
        try {
          return JSON.stringify(e3);
        } catch (e4) {
          return "[UnexpectedJSONParseError]: " + e4.message;
        }
      };
    })(d2, d2.exports)), d2.exports));
    F = typeof Buffer > "u" ? () => false : (e2) => Buffer.isBuffer(e2);
    v = ["boolean", "string", "number"];
    R = {};
    typeof globalThis < "u" ? R = globalThis : typeof window < "u" ? R = window : typeof global < "u" ? R = global : typeof self < "u" && (R = self);
    q = R;
    N = (e2 = {}) => {
      const t2 = e2.implementation || Promise;
      if (!t2) throw new Error("`Promise` is not available in global scope, and no implementation was passed");
      return { onReturn: (s5, n4) => new t2((t3, r3) => {
        const o3 = n4.options.cancelToken;
        o3 && o3.promise.then((e3) => {
          s5.abort.publish(e3), r3(e3);
        }), s5.error.subscribe(r3), s5.response.subscribe((s6) => {
          t3(e2.onlyBody ? s6.body : s6);
        }), setTimeout(() => {
          try {
            s5.request.publish(n4);
          } catch (e3) {
            r3(e3);
          }
        }, 0);
      }) };
    };
    I = class {
      constructor(e2) {
        __publicField(this, "__CANCEL__", true);
        __publicField(this, "message");
        this.message = e2;
      }
      toString() {
        return "Cancel" + (this.message ? `: ${this.message}` : "");
      }
    };
    _T = class _T {
      constructor(e2) {
        __publicField(this, "promise");
        __publicField(this, "reason");
        if ("function" != typeof e2) throw new TypeError("executor must be a function.");
        let t2 = null;
        this.promise = new Promise((e3) => {
          t2 = e3;
        }), e2((e3) => {
          this.reason || (this.reason = new I(e3), t2(this.reason));
        });
      }
    };
    __publicField(_T, "source", () => {
      let e2;
      return { token: new _T((t2) => {
        e2 = t2;
      }), cancel: e2 };
    });
    T = _T;
    N.Cancel = I, N.CancelToken = T, N.isCancel = (e2) => !(!e2 || !e2?.__CANCEL__);
    $ = (e2, t2, s5) => ("GET" === s5.method || "HEAD" === s5.method) && (e2.isNetworkError || false);
    P = (e2 = {}) => ((e3) => {
      const t2 = e3.maxRetries || 5, s5 = e3.retryDelay || _, n4 = e3.shouldRetry;
      return { onError: (e4, r3) => {
        const o3 = r3.options, i2 = o3.maxRetries || t2, a4 = o3.retryDelay || s5, c5 = o3.shouldRetry || n4, u4 = o3.attemptNumber || 0;
        if (null !== (l3 = o3.body) && "object" == typeof l3 && "function" == typeof l3.pipe || !c5(e4, u4, o3) || u4 >= i2) return e4;
        var l3;
        const p3 = Object.assign({}, r3, { options: Object.assign({}, o3, { attemptNumber: u4 + 1 }) });
        return setTimeout(() => r3.channels.request.publish(p3), a4(u4)), null;
      } };
    })({ shouldRetry: $, ...e2 });
    P.shouldRetry = $;
    z = class extends Error {
      constructor(e2, t2) {
        super(e2.message);
        __publicField(this, "request");
        __publicField(this, "code");
        this.request = t2, this.code = e2.code;
      }
    };
    B = (D = n3, function(e2 = {}) {
      const { maxRetries: t2 = 3, ms: s5 = 1e3, maxFree: n4 = 256 } = e2, { finalizeOptions: r3 } = D({ keepAlive: true, keepAliveMsecs: s5, maxFreeSockets: n4 });
      return { finalizeOptions: r3, onError: (e3, s6) => {
        if (("GET" === s6.options.method || "POST" === s6.options.method) && e3 instanceof z && "ECONNRESET" === e3.code && e3.request.reusedSocket) {
          const e4 = s6.options.attemptNumber || 0;
          if (e4 < t2) {
            const t3 = Object.assign({}, s6, { options: Object.assign({}, s6.options, { attemptNumber: e4 + 1 }) });
            return setImmediate(() => s6.channels.request.publish(t3)), null;
          }
        }
        return e3;
      } };
    });
  }
});

// node_modules/tslib/tslib.es6.mjs
function __extends(d3, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d3, b);
  function __() {
    this.constructor = d3;
  }
  d3.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body2) {
  var _3 = { label: 0, sent: function() {
    if (t2[0] & 1) throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f3, y, t2, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n4) {
    return function(v2) {
      return step([n4, v2]);
    };
  }
  function step(op) {
    if (f3) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_3 = 0)), _3) try {
      if (f3 = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done) return t2;
      if (y = 0, t2) op = [op[0] & 2, t2.value];
      switch (op[0]) {
        case 0:
        case 1:
          t2 = op;
          break;
        case 4:
          _3.label++;
          return { value: op[1], done: false };
        case 5:
          _3.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _3.ops.pop();
          _3.trys.pop();
          continue;
        default:
          if (!(t2 = _3.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _3 = 0;
            continue;
          }
          if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
            _3.label = op[1];
            break;
          }
          if (op[0] === 6 && _3.label < t2[1]) {
            _3.label = t2[1];
            t2 = op;
            break;
          }
          if (t2 && _3.label < t2[2]) {
            _3.label = t2[2];
            _3.ops.push(op);
            break;
          }
          if (t2[2]) _3.ops.pop();
          _3.trys.pop();
          continue;
      }
      op = body2.call(thisArg, _3);
    } catch (e2) {
      op = [6, e2];
      y = 0;
    } finally {
      f3 = t2 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o3) {
  var s5 = typeof Symbol === "function" && Symbol.iterator, m = s5 && o3[s5], i2 = 0;
  if (m) return m.call(o3);
  if (o3 && typeof o3.length === "number") return {
    next: function() {
      if (o3 && i2 >= o3.length) o3 = void 0;
      return { value: o3 && o3[i2++], done: !o3 };
    }
  };
  throw new TypeError(s5 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o3, n4) {
  var m = typeof Symbol === "function" && o3[Symbol.iterator];
  if (!m) return o3;
  var i2 = m.call(o3), r3, ar = [], e2;
  try {
    while ((n4 === void 0 || n4-- > 0) && !(r3 = i2.next()).done) ar.push(r3.value);
  } catch (error2) {
    e2 = { error: error2 };
  } finally {
    try {
      if (r3 && !r3.done && (m = i2["return"])) m.call(i2);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar;
}
function __spreadArray(to, from2, pack) {
  if (pack || arguments.length === 2) for (var i2 = 0, l3 = from2.length, ar; i2 < l3; i2++) {
    if (ar || !(i2 in from2)) {
      if (!ar) ar = Array.prototype.slice.call(from2, 0, i2);
      ar[i2] = from2[i2];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from2));
}
function __await(v2) {
  return this instanceof __await ? (this.v = v2, this) : new __await(v2);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i2, q2 = [];
  return i2 = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2;
  function awaitReturn(f3) {
    return function(v2) {
      return Promise.resolve(v2).then(f3, reject);
    };
  }
  function verb(n4, f3) {
    if (g[n4]) {
      i2[n4] = function(v2) {
        return new Promise(function(a4, b) {
          q2.push([n4, v2, a4, b]) > 1 || resume(n4, v2);
        });
      };
      if (f3) i2[n4] = f3(i2[n4]);
    }
  }
  function resume(n4, v2) {
    try {
      step(g[n4](v2));
    } catch (e2) {
      settle(q2[0][3], e2);
    }
  }
  function step(r3) {
    r3.value instanceof __await ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q2[0][2], r3);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f3, v2) {
    if (f3(v2), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
  }
}
function __asyncValues(o3) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o3[Symbol.asyncIterator], i2;
  return m ? m.call(o3) : (o3 = typeof __values === "function" ? __values(o3) : o3[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2);
  function verb(n4) {
    i2[n4] = o3[n4] && function(v2) {
      return new Promise(function(resolve2, reject) {
        v2 = o3[n4](v2), settle(resolve2, reject, v2.done, v2.value);
      });
    };
  }
  function settle(resolve2, reject, d3, v2) {
    Promise.resolve(v2).then(function(v3) {
      resolve2({ value: v3, done: d3 });
    }, reject);
  }
}
var extendStatics;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d3, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d4, b2) {
        d4.__proto__ = b2;
      } || function(d4, b2) {
        for (var p3 in b2) if (Object.prototype.hasOwnProperty.call(b2, p3)) d4[p3] = b2[p3];
      };
      return extendStatics(d3, b);
    };
  }
});

// node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction(value) {
  return typeof value === "function";
}
var init_isFunction = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/isFunction.js"() {
  }
});

// node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
  var _super = function(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };
  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}
var init_createErrorClass = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js"() {
  }
});

// node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js
var UnsubscriptionError;
var init_UnsubscriptionError = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js"() {
    init_createErrorClass();
    UnsubscriptionError = createErrorClass(function(_super) {
      return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i2) {
          return i2 + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
      };
    });
  }
});

// node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item2) {
  if (arr) {
    var index14 = arr.indexOf(item2);
    0 <= index14 && arr.splice(index14, 1);
  }
}
var init_arrRemove = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/arrRemove.js"() {
  }
});

// node_modules/rxjs/dist/esm5/internal/Subscription.js
function isSubscription(value) {
  return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
}
function execFinalizer(finalizer) {
  if (isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}
var Subscription, EMPTY_SUBSCRIPTION;
var init_Subscription = __esm({
  "node_modules/rxjs/dist/esm5/internal/Subscription.js"() {
    init_tslib_es6();
    init_isFunction();
    init_UnsubscriptionError();
    init_arrRemove();
    Subscription = (function() {
      function Subscription2(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
      }
      Subscription2.prototype.unsubscribe = function() {
        var e_1, _a2, e_2, _b;
        var errors;
        if (!this.closed) {
          this.closed = true;
          var _parentage = this._parentage;
          if (_parentage) {
            this._parentage = null;
            if (Array.isArray(_parentage)) {
              try {
                for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                  var parent_1 = _parentage_1_1.value;
                  parent_1.remove(this);
                }
              } catch (e_1_1) {
                e_1 = { error: e_1_1 };
              } finally {
                try {
                  if (_parentage_1_1 && !_parentage_1_1.done && (_a2 = _parentage_1.return)) _a2.call(_parentage_1);
                } finally {
                  if (e_1) throw e_1.error;
                }
              }
            } else {
              _parentage.remove(this);
            }
          }
          var initialFinalizer = this.initialTeardown;
          if (isFunction(initialFinalizer)) {
            try {
              initialFinalizer();
            } catch (e2) {
              errors = e2 instanceof UnsubscriptionError ? e2.errors : [e2];
            }
          }
          var _finalizers = this._finalizers;
          if (_finalizers) {
            this._finalizers = null;
            try {
              for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                var finalizer = _finalizers_1_1.value;
                try {
                  execFinalizer(finalizer);
                } catch (err) {
                  errors = errors !== null && errors !== void 0 ? errors : [];
                  if (err instanceof UnsubscriptionError) {
                    errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                  } else {
                    errors.push(err);
                  }
                }
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
              } finally {
                if (e_2) throw e_2.error;
              }
            }
          }
          if (errors) {
            throw new UnsubscriptionError(errors);
          }
        }
      };
      Subscription2.prototype.add = function(teardown) {
        var _a2;
        if (teardown && teardown !== this) {
          if (this.closed) {
            execFinalizer(teardown);
          } else {
            if (teardown instanceof Subscription2) {
              if (teardown.closed || teardown._hasParent(this)) {
                return;
              }
              teardown._addParent(this);
            }
            (this._finalizers = (_a2 = this._finalizers) !== null && _a2 !== void 0 ? _a2 : []).push(teardown);
          }
        }
      };
      Subscription2.prototype._hasParent = function(parent) {
        var _parentage = this._parentage;
        return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
      };
      Subscription2.prototype._addParent = function(parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
      };
      Subscription2.prototype._removeParent = function(parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
          this._parentage = null;
        } else if (Array.isArray(_parentage)) {
          arrRemove(_parentage, parent);
        }
      };
      Subscription2.prototype.remove = function(teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription2) {
          teardown._removeParent(this);
        }
      };
      Subscription2.EMPTY = (function() {
        var empty = new Subscription2();
        empty.closed = true;
        return empty;
      })();
      return Subscription2;
    })();
    EMPTY_SUBSCRIPTION = Subscription.EMPTY;
  }
});

// node_modules/rxjs/dist/esm5/internal/config.js
var config;
var init_config = __esm({
  "node_modules/rxjs/dist/esm5/internal/config.js"() {
    config = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: void 0,
      useDeprecatedSynchronousErrorHandling: false,
      useDeprecatedNextContext: false
    };
  }
});

// node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js
var timeoutProvider;
var init_timeoutProvider = __esm({
  "node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js"() {
    init_tslib_es6();
    timeoutProvider = {
      setTimeout: function(handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
          return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
      },
      clearTimeout: function(handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
      },
      delegate: void 0
    };
  }
});

// node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js
function reportUnhandledError(err) {
  timeoutProvider.setTimeout(function() {
    var onUnhandledError = config.onUnhandledError;
    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}
var init_reportUnhandledError = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js"() {
    init_config();
    init_timeoutProvider();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop2() {
}
var init_noop = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/noop.js"() {
  }
});

// node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
function errorNotification(error2) {
  return createNotification("E", void 0, error2);
}
function nextNotification(value) {
  return createNotification("N", value, void 0);
}
function createNotification(kind, value, error2) {
  return {
    kind,
    value,
    error: error2
  };
}
var COMPLETE_NOTIFICATION;
var init_NotificationFactories = __esm({
  "node_modules/rxjs/dist/esm5/internal/NotificationFactories.js"() {
    COMPLETE_NOTIFICATION = (function() {
      return createNotification("C", void 0, void 0);
    })();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/errorContext.js
function errorContext(cb) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context2;
    if (isRoot) {
      context2 = { errorThrown: false, error: null };
    }
    cb();
    if (isRoot) {
      var _a2 = context2, errorThrown = _a2.errorThrown, error2 = _a2.error;
      context2 = null;
      if (errorThrown) {
        throw error2;
      }
    }
  } else {
    cb();
  }
}
function captureError(err) {
  if (config.useDeprecatedSynchronousErrorHandling && context2) {
    context2.errorThrown = true;
    context2.error = err;
  }
}
var context2;
var init_errorContext = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/errorContext.js"() {
    init_config();
    context2 = null;
  }
});

// node_modules/rxjs/dist/esm5/internal/Subscriber.js
function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}
function handleUnhandledError(error2) {
  if (config.useDeprecatedSynchronousErrorHandling) {
    captureError(error2);
  } else {
    reportUnhandledError(error2);
  }
}
function defaultErrorHandler(err) {
  throw err;
}
function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = config.onStoppedNotification;
  onStoppedNotification && timeoutProvider.setTimeout(function() {
    return onStoppedNotification(notification, subscriber);
  });
}
var Subscriber, _bind, ConsumerObserver, SafeSubscriber, EMPTY_OBSERVER;
var init_Subscriber = __esm({
  "node_modules/rxjs/dist/esm5/internal/Subscriber.js"() {
    init_tslib_es6();
    init_isFunction();
    init_Subscription();
    init_config();
    init_reportUnhandledError();
    init_noop();
    init_NotificationFactories();
    init_timeoutProvider();
    init_errorContext();
    Subscriber = (function(_super) {
      __extends(Subscriber2, _super);
      function Subscriber2(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
          _this.destination = destination;
          if (isSubscription(destination)) {
            destination.add(_this);
          }
        } else {
          _this.destination = EMPTY_OBSERVER;
        }
        return _this;
      }
      Subscriber2.create = function(next2, error2, complete) {
        return new SafeSubscriber(next2, error2, complete);
      };
      Subscriber2.prototype.next = function(value) {
        if (this.isStopped) {
          handleStoppedNotification(nextNotification(value), this);
        } else {
          this._next(value);
        }
      };
      Subscriber2.prototype.error = function(err) {
        if (this.isStopped) {
          handleStoppedNotification(errorNotification(err), this);
        } else {
          this.isStopped = true;
          this._error(err);
        }
      };
      Subscriber2.prototype.complete = function() {
        if (this.isStopped) {
          handleStoppedNotification(COMPLETE_NOTIFICATION, this);
        } else {
          this.isStopped = true;
          this._complete();
        }
      };
      Subscriber2.prototype.unsubscribe = function() {
        if (!this.closed) {
          this.isStopped = true;
          _super.prototype.unsubscribe.call(this);
          this.destination = null;
        }
      };
      Subscriber2.prototype._next = function(value) {
        this.destination.next(value);
      };
      Subscriber2.prototype._error = function(err) {
        try {
          this.destination.error(err);
        } finally {
          this.unsubscribe();
        }
      };
      Subscriber2.prototype._complete = function() {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      };
      return Subscriber2;
    })(Subscription);
    _bind = Function.prototype.bind;
    ConsumerObserver = (function() {
      function ConsumerObserver2(partialObserver) {
        this.partialObserver = partialObserver;
      }
      ConsumerObserver2.prototype.next = function(value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
          try {
            partialObserver.next(value);
          } catch (error2) {
            handleUnhandledError(error2);
          }
        }
      };
      ConsumerObserver2.prototype.error = function(err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
          try {
            partialObserver.error(err);
          } catch (error2) {
            handleUnhandledError(error2);
          }
        } else {
          handleUnhandledError(err);
        }
      };
      ConsumerObserver2.prototype.complete = function() {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
          try {
            partialObserver.complete();
          } catch (error2) {
            handleUnhandledError(error2);
          }
        }
      };
      return ConsumerObserver2;
    })();
    SafeSubscriber = (function(_super) {
      __extends(SafeSubscriber2, _super);
      function SafeSubscriber2(observerOrNext, error2, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction(observerOrNext) || !observerOrNext) {
          partialObserver = {
            next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
            error: error2 !== null && error2 !== void 0 ? error2 : void 0,
            complete: complete !== null && complete !== void 0 ? complete : void 0
          };
        } else {
          var context_1;
          if (_this && config.useDeprecatedNextContext) {
            context_1 = Object.create(observerOrNext);
            context_1.unsubscribe = function() {
              return _this.unsubscribe();
            };
            partialObserver = {
              next: observerOrNext.next && bind(observerOrNext.next, context_1),
              error: observerOrNext.error && bind(observerOrNext.error, context_1),
              complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
            };
          } else {
            partialObserver = observerOrNext;
          }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
      }
      return SafeSubscriber2;
    })(Subscriber);
    EMPTY_OBSERVER = {
      closed: true,
      next: noop2,
      error: defaultErrorHandler,
      complete: noop2
    };
  }
});

// node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable;
var init_observable = __esm({
  "node_modules/rxjs/dist/esm5/internal/symbol/observable.js"() {
    observable = (function() {
      return typeof Symbol === "function" && Symbol.observable || "@@observable";
    })();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x2) {
  return x2;
}
var init_identity = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/identity.js"() {
  }
});

// node_modules/rxjs/dist/esm5/internal/util/pipe.js
function pipe() {
  var fns = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }
  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity;
  }
  if (fns.length === 1) {
    return fns[0];
  }
  return function piped(input) {
    return fns.reduce(function(prev, fn) {
      return fn(prev);
    }, input);
  };
}
var init_pipe = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/pipe.js"() {
    init_identity();
  }
});

// node_modules/rxjs/dist/esm5/internal/Observable.js
function getPromiseCtor(promiseCtor) {
  var _a2;
  return (_a2 = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a2 !== void 0 ? _a2 : Promise;
}
function isObserver(value) {
  return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
}
function isSubscriber(value) {
  return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
}
var Observable;
var init_Observable = __esm({
  "node_modules/rxjs/dist/esm5/internal/Observable.js"() {
    init_Subscriber();
    init_Subscription();
    init_observable();
    init_pipe();
    init_config();
    init_isFunction();
    init_errorContext();
    Observable = (function() {
      function Observable2(subscribe) {
        if (subscribe) {
          this._subscribe = subscribe;
        }
      }
      Observable2.prototype.lift = function(operator) {
        var observable2 = new Observable2();
        observable2.source = this;
        observable2.operator = operator;
        return observable2;
      };
      Observable2.prototype.subscribe = function(observerOrNext, error2, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error2, complete);
        errorContext(function() {
          var _a2 = _this, operator = _a2.operator, source2 = _a2.source;
          subscriber.add(operator ? operator.call(subscriber, source2) : source2 ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
        });
        return subscriber;
      };
      Observable2.prototype._trySubscribe = function(sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          sink.error(err);
        }
      };
      Observable2.prototype.forEach = function(next2, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve2, reject) {
          var subscriber = new SafeSubscriber({
            next: function(value) {
              try {
                next2(value);
              } catch (err) {
                reject(err);
                subscriber.unsubscribe();
              }
            },
            error: reject,
            complete: resolve2
          });
          _this.subscribe(subscriber);
        });
      };
      Observable2.prototype._subscribe = function(subscriber) {
        var _a2;
        return (_a2 = this.source) === null || _a2 === void 0 ? void 0 : _a2.subscribe(subscriber);
      };
      Observable2.prototype[observable] = function() {
        return this;
      };
      Observable2.prototype.pipe = function() {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
      };
      Observable2.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve2, reject) {
          var value;
          _this.subscribe(function(x2) {
            return value = x2;
          }, function(err) {
            return reject(err);
          }, function() {
            return resolve2(value);
          });
        });
      };
      Observable2.create = function(subscribe) {
        return new Observable2(subscribe);
      };
      return Observable2;
    })();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/lift.js
function hasLift(source2) {
  return isFunction(source2 === null || source2 === void 0 ? void 0 : source2.lift);
}
function operate(init2) {
  return function(source2) {
    if (hasLift(source2)) {
      return source2.lift(function(liftedSource) {
        try {
          return init2(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
var init_lift = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/lift.js"() {
    init_isFunction();
  }
});

// node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js
function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber;
var init_OperatorSubscriber = __esm({
  "node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"() {
    init_tslib_es6();
    init_Subscriber();
    OperatorSubscriber = (function(_super) {
      __extends(OperatorSubscriber2, _super);
      function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext ? function(value) {
          try {
            onNext(value);
          } catch (err) {
            destination.error(err);
          }
        } : _super.prototype._next;
        _this._error = onError ? function(err) {
          try {
            onError(err);
          } catch (err2) {
            destination.error(err2);
          } finally {
            this.unsubscribe();
          }
        } : _super.prototype._error;
        _this._complete = onComplete ? function() {
          try {
            onComplete();
          } catch (err) {
            destination.error(err);
          } finally {
            this.unsubscribe();
          }
        } : _super.prototype._complete;
        return _this;
      }
      OperatorSubscriber2.prototype.unsubscribe = function() {
        var _a2;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var closed_1 = this.closed;
          _super.prototype.unsubscribe.call(this);
          !closed_1 && ((_a2 = this.onFinalize) === null || _a2 === void 0 ? void 0 : _a2.call(this));
        }
      };
      return OperatorSubscriber2;
    })(Subscriber);
  }
});

// node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js
var ObjectUnsubscribedError;
var init_ObjectUnsubscribedError = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js"() {
    init_createErrorClass();
    ObjectUnsubscribedError = createErrorClass(function(_super) {
      return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = "ObjectUnsubscribedError";
        this.message = "object unsubscribed";
      };
    });
  }
});

// node_modules/rxjs/dist/esm5/internal/Subject.js
var Subject, AnonymousSubject;
var init_Subject = __esm({
  "node_modules/rxjs/dist/esm5/internal/Subject.js"() {
    init_tslib_es6();
    init_Observable();
    init_Subscription();
    init_ObjectUnsubscribedError();
    init_arrRemove();
    init_errorContext();
    Subject = (function(_super) {
      __extends(Subject2, _super);
      function Subject2() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
      }
      Subject2.prototype.lift = function(operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
      };
      Subject2.prototype._throwIfClosed = function() {
        if (this.closed) {
          throw new ObjectUnsubscribedError();
        }
      };
      Subject2.prototype.next = function(value) {
        var _this = this;
        errorContext(function() {
          var e_1, _a2;
          _this._throwIfClosed();
          if (!_this.isStopped) {
            if (!_this.currentObservers) {
              _this.currentObservers = Array.from(_this.observers);
            }
            try {
              for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var observer = _c.value;
                observer.next(value);
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
          }
        });
      };
      Subject2.prototype.error = function(err) {
        var _this = this;
        errorContext(function() {
          _this._throwIfClosed();
          if (!_this.isStopped) {
            _this.hasError = _this.isStopped = true;
            _this.thrownError = err;
            var observers = _this.observers;
            while (observers.length) {
              observers.shift().error(err);
            }
          }
        });
      };
      Subject2.prototype.complete = function() {
        var _this = this;
        errorContext(function() {
          _this._throwIfClosed();
          if (!_this.isStopped) {
            _this.isStopped = true;
            var observers = _this.observers;
            while (observers.length) {
              observers.shift().complete();
            }
          }
        });
      };
      Subject2.prototype.unsubscribe = function() {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
      };
      Object.defineProperty(Subject2.prototype, "observed", {
        get: function() {
          var _a2;
          return ((_a2 = this.observers) === null || _a2 === void 0 ? void 0 : _a2.length) > 0;
        },
        enumerable: false,
        configurable: true
      });
      Subject2.prototype._trySubscribe = function(subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
      };
      Subject2.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
      };
      Subject2.prototype._innerSubscribe = function(subscriber) {
        var _this = this;
        var _a2 = this, hasError = _a2.hasError, isStopped = _a2.isStopped, observers = _a2.observers;
        if (hasError || isStopped) {
          return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function() {
          _this.currentObservers = null;
          arrRemove(observers, subscriber);
        });
      };
      Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a2 = this, hasError = _a2.hasError, thrownError = _a2.thrownError, isStopped = _a2.isStopped;
        if (hasError) {
          subscriber.error(thrownError);
        } else if (isStopped) {
          subscriber.complete();
        }
      };
      Subject2.prototype.asObservable = function() {
        var observable2 = new Observable();
        observable2.source = this;
        return observable2;
      };
      Subject2.create = function(destination, source2) {
        return new AnonymousSubject(destination, source2);
      };
      return Subject2;
    })(Observable);
    AnonymousSubject = (function(_super) {
      __extends(AnonymousSubject2, _super);
      function AnonymousSubject2(destination, source2) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source2;
        return _this;
      }
      AnonymousSubject2.prototype.next = function(value) {
        var _a2, _b;
        (_b = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.next) === null || _b === void 0 ? void 0 : _b.call(_a2, value);
      };
      AnonymousSubject2.prototype.error = function(err) {
        var _a2, _b;
        (_b = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.error) === null || _b === void 0 ? void 0 : _b.call(_a2, err);
      };
      AnonymousSubject2.prototype.complete = function() {
        var _a2, _b;
        (_b = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.complete) === null || _b === void 0 ? void 0 : _b.call(_a2);
      };
      AnonymousSubject2.prototype._subscribe = function(subscriber) {
        var _a2, _b;
        return (_b = (_a2 = this.source) === null || _a2 === void 0 ? void 0 : _a2.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
      };
      return AnonymousSubject2;
    })(Subject);
  }
});

// node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider;
var init_dateTimestampProvider = __esm({
  "node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js"() {
    dateTimestampProvider = {
      now: function() {
        return (dateTimestampProvider.delegate || Date).now();
      },
      delegate: void 0
    };
  }
});

// node_modules/rxjs/dist/esm5/internal/ReplaySubject.js
var ReplaySubject;
var init_ReplaySubject = __esm({
  "node_modules/rxjs/dist/esm5/internal/ReplaySubject.js"() {
    init_tslib_es6();
    init_Subject();
    init_dateTimestampProvider();
    ReplaySubject = (function(_super) {
      __extends(ReplaySubject2, _super);
      function ReplaySubject2(_bufferSize, _windowTime, _timestampProvider) {
        if (_bufferSize === void 0) {
          _bufferSize = Infinity;
        }
        if (_windowTime === void 0) {
          _windowTime = Infinity;
        }
        if (_timestampProvider === void 0) {
          _timestampProvider = dateTimestampProvider;
        }
        var _this = _super.call(this) || this;
        _this._bufferSize = _bufferSize;
        _this._windowTime = _windowTime;
        _this._timestampProvider = _timestampProvider;
        _this._buffer = [];
        _this._infiniteTimeWindow = true;
        _this._infiniteTimeWindow = _windowTime === Infinity;
        _this._bufferSize = Math.max(1, _bufferSize);
        _this._windowTime = Math.max(1, _windowTime);
        return _this;
      }
      ReplaySubject2.prototype.next = function(value) {
        var _a2 = this, isStopped = _a2.isStopped, _buffer = _a2._buffer, _infiniteTimeWindow = _a2._infiniteTimeWindow, _timestampProvider = _a2._timestampProvider, _windowTime = _a2._windowTime;
        if (!isStopped) {
          _buffer.push(value);
          !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
        }
        this._trimBuffer();
        _super.prototype.next.call(this, value);
      };
      ReplaySubject2.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._trimBuffer();
        var subscription = this._innerSubscribe(subscriber);
        var _a2 = this, _infiniteTimeWindow = _a2._infiniteTimeWindow, _buffer = _a2._buffer;
        var copy = _buffer.slice();
        for (var i2 = 0; i2 < copy.length && !subscriber.closed; i2 += _infiniteTimeWindow ? 1 : 2) {
          subscriber.next(copy[i2]);
        }
        this._checkFinalizedStatuses(subscriber);
        return subscription;
      };
      ReplaySubject2.prototype._trimBuffer = function() {
        var _a2 = this, _bufferSize = _a2._bufferSize, _timestampProvider = _a2._timestampProvider, _buffer = _a2._buffer, _infiniteTimeWindow = _a2._infiniteTimeWindow;
        var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
        _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
        if (!_infiniteTimeWindow) {
          var now = _timestampProvider.now();
          var last2 = 0;
          for (var i2 = 1; i2 < _buffer.length && _buffer[i2] <= now; i2 += 2) {
            last2 = i2;
          }
          last2 && _buffer.splice(0, last2 + 1);
        }
      };
      return ReplaySubject2;
    })(Subject);
  }
});

// node_modules/rxjs/dist/esm5/internal/scheduler/Action.js
var Action;
var init_Action = __esm({
  "node_modules/rxjs/dist/esm5/internal/scheduler/Action.js"() {
    init_tslib_es6();
    init_Subscription();
    Action = (function(_super) {
      __extends(Action2, _super);
      function Action2(scheduler, work) {
        return _super.call(this) || this;
      }
      Action2.prototype.schedule = function(state2, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return this;
      };
      return Action2;
    })(Subscription);
  }
});

// node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js
var intervalProvider;
var init_intervalProvider = __esm({
  "node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js"() {
    init_tslib_es6();
    intervalProvider = {
      setInterval: function(handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        var delegate = intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
          return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
      },
      clearInterval: function(handle) {
        var delegate = intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
      },
      delegate: void 0
    };
  }
});

// node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js
var AsyncAction;
var init_AsyncAction = __esm({
  "node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js"() {
    init_tslib_es6();
    init_Action();
    init_intervalProvider();
    init_arrRemove();
    AsyncAction = (function(_super) {
      __extends(AsyncAction2, _super);
      function AsyncAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
      }
      AsyncAction2.prototype.schedule = function(state2, delay) {
        var _a2;
        if (delay === void 0) {
          delay = 0;
        }
        if (this.closed) {
          return this;
        }
        this.state = state2;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a2 = this.id) !== null && _a2 !== void 0 ? _a2 : this.requestAsyncId(scheduler, this.id, delay);
        return this;
      };
      AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
      };
      AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null && this.delay === delay && this.pending === false) {
          return id;
        }
        if (id != null) {
          intervalProvider.clearInterval(id);
        }
        return void 0;
      };
      AsyncAction2.prototype.execute = function(state2, delay) {
        if (this.closed) {
          return new Error("executing a cancelled action");
        }
        this.pending = false;
        var error2 = this._execute(state2, delay);
        if (error2) {
          return error2;
        } else if (this.pending === false && this.id != null) {
          this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
      };
      AsyncAction2.prototype._execute = function(state2, _delay) {
        var errored = false;
        var errorValue;
        try {
          this.work(state2);
        } catch (e2) {
          errored = true;
          errorValue = e2 ? e2 : new Error("Scheduled action threw falsy error");
        }
        if (errored) {
          this.unsubscribe();
          return errorValue;
        }
      };
      AsyncAction2.prototype.unsubscribe = function() {
        if (!this.closed) {
          var _a2 = this, id = _a2.id, scheduler = _a2.scheduler;
          var actions = scheduler.actions;
          this.work = this.state = this.scheduler = null;
          this.pending = false;
          arrRemove(actions, this);
          if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
          }
          this.delay = null;
          _super.prototype.unsubscribe.call(this);
        }
      };
      return AsyncAction2;
    })(Action);
  }
});

// node_modules/rxjs/dist/esm5/internal/Scheduler.js
var Scheduler;
var init_Scheduler = __esm({
  "node_modules/rxjs/dist/esm5/internal/Scheduler.js"() {
    init_dateTimestampProvider();
    Scheduler = (function() {
      function Scheduler2(schedulerActionCtor, now) {
        if (now === void 0) {
          now = Scheduler2.now;
        }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
      }
      Scheduler2.prototype.schedule = function(work, delay, state2) {
        if (delay === void 0) {
          delay = 0;
        }
        return new this.schedulerActionCtor(this, work).schedule(state2, delay);
      };
      Scheduler2.now = dateTimestampProvider.now;
      return Scheduler2;
    })();
  }
});

// node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js
var AsyncScheduler;
var init_AsyncScheduler = __esm({
  "node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js"() {
    init_tslib_es6();
    init_Scheduler();
    AsyncScheduler = (function(_super) {
      __extends(AsyncScheduler2, _super);
      function AsyncScheduler2(SchedulerAction, now) {
        if (now === void 0) {
          now = Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
      }
      AsyncScheduler2.prototype.flush = function(action) {
        var actions = this.actions;
        if (this._active) {
          actions.push(action);
          return;
        }
        var error2;
        this._active = true;
        do {
          if (error2 = action.execute(action.state, action.delay)) {
            break;
          }
        } while (action = actions.shift());
        this._active = false;
        if (error2) {
          while (action = actions.shift()) {
            action.unsubscribe();
          }
          throw error2;
        }
      };
      return AsyncScheduler2;
    })(Scheduler);
  }
});

// node_modules/rxjs/dist/esm5/internal/scheduler/async.js
var asyncScheduler, async;
var init_async = __esm({
  "node_modules/rxjs/dist/esm5/internal/scheduler/async.js"() {
    init_AsyncAction();
    init_AsyncScheduler();
    asyncScheduler = new AsyncScheduler(AsyncAction);
    async = asyncScheduler;
  }
});

// node_modules/rxjs/dist/esm5/internal/observable/empty.js
var EMPTY;
var init_empty = __esm({
  "node_modules/rxjs/dist/esm5/internal/observable/empty.js"() {
    init_Observable();
    EMPTY = new Observable(function(subscriber) {
      return subscriber.complete();
    });
  }
});

// node_modules/rxjs/dist/esm5/internal/util/isScheduler.js
function isScheduler(value) {
  return value && isFunction(value.schedule);
}
var init_isScheduler = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/isScheduler.js"() {
    init_isFunction();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/args.js
function last(arr) {
  return arr[arr.length - 1];
}
function popResultSelector(args) {
  return isFunction(last(args)) ? args.pop() : void 0;
}
function popScheduler(args) {
  return isScheduler(last(args)) ? args.pop() : void 0;
}
function popNumber(args, defaultValue) {
  return typeof last(args) === "number" ? args.pop() : defaultValue;
}
var init_args = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/args.js"() {
    init_isFunction();
    init_isScheduler();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike;
var init_isArrayLike = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js"() {
    isArrayLike = (function(x2) {
      return x2 && typeof x2.length === "number" && typeof x2 !== "function";
    });
  }
});

// node_modules/rxjs/dist/esm5/internal/util/isPromise.js
function isPromise(value) {
  return isFunction(value === null || value === void 0 ? void 0 : value.then);
}
var init_isPromise = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/isPromise.js"() {
    init_isFunction();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js
function isInteropObservable(input) {
  return isFunction(input[observable]);
}
var init_isInteropObservable = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js"() {
    init_observable();
    init_isFunction();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js
function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
var init_isAsyncIterable = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js"() {
    init_isFunction();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var init_throwUnobservableError = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js"() {
  }
});

// node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
  if (typeof Symbol !== "function" || !Symbol.iterator) {
    return "@@iterator";
  }
  return Symbol.iterator;
}
var iterator;
var init_iterator = __esm({
  "node_modules/rxjs/dist/esm5/internal/symbol/iterator.js"() {
    iterator = getSymbolIterator();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/isIterable.js
function isIterable(input) {
  return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
}
var init_isIterable = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/isIterable.js"() {
    init_iterator();
    init_isFunction();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js
function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a2, value, done;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader();
          _b.label = 1;
        case 1:
          _b.trys.push([1, , 9, 10]);
          _b.label = 2;
        case 2:
          if (false) return [3, 8];
          return [4, __await(reader.read())];
        case 3:
          _a2 = _b.sent(), value = _a2.value, done = _a2.done;
          if (!done) return [3, 5];
          return [4, __await(void 0)];
        case 4:
          return [2, _b.sent()];
        case 5:
          return [4, __await(value)];
        case 6:
          return [4, _b.sent()];
        case 7:
          _b.sent();
          return [3, 2];
        case 8:
          return [3, 10];
        case 9:
          reader.releaseLock();
          return [7];
        case 10:
          return [2];
      }
    });
  });
}
function isReadableStreamLike(obj) {
  return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
var init_isReadableStreamLike = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js"() {
    init_tslib_es6();
    init_isFunction();
  }
});

// node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js
function innerFrom(input) {
  if (input instanceof Observable) {
    return input;
  }
  if (input != null) {
    if (isInteropObservable(input)) {
      return fromInteropObservable(input);
    }
    if (isArrayLike(input)) {
      return fromArrayLike(input);
    }
    if (isPromise(input)) {
      return fromPromise(input);
    }
    if (isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }
    if (isIterable(input)) {
      return fromIterable(input);
    }
    if (isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }
  throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
  return new Observable(function(subscriber) {
    var obs = obj[observable]();
    if (isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function fromArrayLike(array2) {
  return new Observable(function(subscriber) {
    for (var i2 = 0; i2 < array2.length && !subscriber.closed; i2++) {
      subscriber.next(array2[i2]);
    }
    subscriber.complete();
  });
}
function fromPromise(promise) {
  return new Observable(function(subscriber) {
    promise.then(function(value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function(err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError);
  });
}
function fromIterable(iterable) {
  return new Observable(function(subscriber) {
    var e_1, _a2;
    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);
        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a2 = iterable_1.return)) _a2.call(iterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    subscriber.complete();
  });
}
function fromAsyncIterable(asyncIterable) {
  return new Observable(function(subscriber) {
    process2(asyncIterable, subscriber).catch(function(err) {
      return subscriber.error(err);
    });
  });
}
function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process2(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;
  var e_2, _a2;
  return __awaiter(this, void 0, void 0, function() {
    var value, e_2_1;
    return __generator(this, function(_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]);
          asyncIterable_1 = __asyncValues(asyncIterable);
          _b.label = 1;
        case 1:
          return [4, asyncIterable_1.next()];
        case 2:
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return [2];
          }
          _b.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          e_2_1 = _b.sent();
          e_2 = { error: e_2_1 };
          return [3, 11];
        case 6:
          _b.trys.push([6, , 9, 10]);
          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a2 = asyncIterable_1.return))) return [3, 8];
          return [4, _a2.call(asyncIterable_1)];
        case 7:
          _b.sent();
          _b.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (e_2) throw e_2.error;
          return [7];
        case 10:
          return [7];
        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}
var init_innerFrom = __esm({
  "node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"() {
    init_tslib_es6();
    init_isArrayLike();
    init_isPromise();
    init_Observable();
    init_isInteropObservable();
    init_isAsyncIterable();
    init_throwUnobservableError();
    init_isIterable();
    init_isReadableStreamLike();
    init_isFunction();
    init_reportUnhandledError();
    init_observable();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
  if (delay === void 0) {
    delay = 0;
  }
  if (repeat === void 0) {
    repeat = false;
  }
  var scheduleSubscription = scheduler.schedule(function() {
    work();
    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);
  if (!repeat) {
    return scheduleSubscription;
  }
}
var init_executeSchedule = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js"() {
  }
});

// node_modules/rxjs/dist/esm5/internal/operators/observeOn.js
function observeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return operate(function(source2, subscriber) {
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.next(value);
      }, delay);
    }, function() {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.complete();
      }, delay);
    }, function(err) {
      return executeSchedule(subscriber, scheduler, function() {
        return subscriber.error(err);
      }, delay);
    }));
  });
}
var init_observeOn = __esm({
  "node_modules/rxjs/dist/esm5/internal/operators/observeOn.js"() {
    init_executeSchedule();
    init_lift();
    init_OperatorSubscriber();
  }
});

// node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js
function subscribeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return operate(function(source2, subscriber) {
    subscriber.add(scheduler.schedule(function() {
      return source2.subscribe(subscriber);
    }, delay));
  });
}
var init_subscribeOn = __esm({
  "node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js"() {
    init_lift();
  }
});

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js
function scheduleObservable(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
var init_scheduleObservable = __esm({
  "node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js"() {
    init_innerFrom();
    init_observeOn();
    init_subscribeOn();
  }
});

// node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js
function schedulePromise(input, scheduler) {
  return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
var init_schedulePromise = __esm({
  "node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js"() {
    init_innerFrom();
    init_observeOn();
    init_subscribeOn();
  }
});

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js
function scheduleArray(input, scheduler) {
  return new Observable(function(subscriber) {
    var i2 = 0;
    return scheduler.schedule(function() {
      if (i2 === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i2++]);
        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}
var init_scheduleArray = __esm({
  "node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js"() {
    init_Observable();
  }
});

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js
function scheduleIterable(input, scheduler) {
  return new Observable(function(subscriber) {
    var iterator2;
    executeSchedule(subscriber, scheduler, function() {
      iterator2 = input[iterator]();
      executeSchedule(subscriber, scheduler, function() {
        var _a2;
        var value;
        var done;
        try {
          _a2 = iterator2.next(), value = _a2.value, done = _a2.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }
        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return function() {
      return isFunction(iterator2 === null || iterator2 === void 0 ? void 0 : iterator2.return) && iterator2.return();
    };
  });
}
var init_scheduleIterable = __esm({
  "node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js"() {
    init_Observable();
    init_iterator();
    init_isFunction();
    init_executeSchedule();
  }
});

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js
function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error("Iterable cannot be null");
  }
  return new Observable(function(subscriber) {
    executeSchedule(subscriber, scheduler, function() {
      var iterator2 = input[Symbol.asyncIterator]();
      executeSchedule(subscriber, scheduler, function() {
        iterator2.next().then(function(result) {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}
var init_scheduleAsyncIterable = __esm({
  "node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js"() {
    init_Observable();
    init_executeSchedule();
  }
});

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js
function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}
var init_scheduleReadableStreamLike = __esm({
  "node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js"() {
    init_scheduleAsyncIterable();
    init_isReadableStreamLike();
  }
});

// node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js
function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable(input)) {
      return scheduleObservable(input, scheduler);
    }
    if (isArrayLike(input)) {
      return scheduleArray(input, scheduler);
    }
    if (isPromise(input)) {
      return schedulePromise(input, scheduler);
    }
    if (isAsyncIterable(input)) {
      return scheduleAsyncIterable(input, scheduler);
    }
    if (isIterable(input)) {
      return scheduleIterable(input, scheduler);
    }
    if (isReadableStreamLike(input)) {
      return scheduleReadableStreamLike(input, scheduler);
    }
  }
  throw createInvalidObservableTypeError(input);
}
var init_scheduled = __esm({
  "node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js"() {
    init_scheduleObservable();
    init_schedulePromise();
    init_scheduleArray();
    init_scheduleIterable();
    init_scheduleAsyncIterable();
    init_isInteropObservable();
    init_isPromise();
    init_isArrayLike();
    init_isIterable();
    init_isAsyncIterable();
    init_throwUnobservableError();
    init_isReadableStreamLike();
    init_scheduleReadableStreamLike();
  }
});

// node_modules/rxjs/dist/esm5/internal/observable/from.js
function from(input, scheduler) {
  return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
var init_from = __esm({
  "node_modules/rxjs/dist/esm5/internal/observable/from.js"() {
    init_scheduled();
    init_innerFrom();
  }
});

// node_modules/rxjs/dist/esm5/internal/observable/of.js
function of() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  return from(args, scheduler);
}
var init_of = __esm({
  "node_modules/rxjs/dist/esm5/internal/observable/of.js"() {
    init_args();
    init_from();
  }
});

// node_modules/rxjs/dist/esm5/internal/observable/throwError.js
function throwError(errorOrErrorFactory, scheduler) {
  var errorFactory = isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
    return errorOrErrorFactory;
  };
  var init2 = function(subscriber) {
    return subscriber.error(errorFactory());
  };
  return new Observable(scheduler ? function(subscriber) {
    return scheduler.schedule(init2, 0, subscriber);
  } : init2);
}
var init_throwError = __esm({
  "node_modules/rxjs/dist/esm5/internal/observable/throwError.js"() {
    init_Observable();
    init_isFunction();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/isObservable.js
function isObservable(obj) {
  return !!obj && (obj instanceof Observable || isFunction(obj.lift) && isFunction(obj.subscribe));
}
var init_isObservable = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/isObservable.js"() {
    init_Observable();
    init_isFunction();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/EmptyError.js
var EmptyError;
var init_EmptyError = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/EmptyError.js"() {
    init_createErrorClass();
    EmptyError = createErrorClass(function(_super) {
      return function EmptyErrorImpl() {
        _super(this);
        this.name = "EmptyError";
        this.message = "no elements in sequence";
      };
    });
  }
});

// node_modules/rxjs/dist/esm5/internal/lastValueFrom.js
function lastValueFrom(source2, config2) {
  var hasConfig = typeof config2 === "object";
  return new Promise(function(resolve2, reject) {
    var _hasValue = false;
    var _value;
    source2.subscribe({
      next: function(value) {
        _value = value;
        _hasValue = true;
      },
      error: reject,
      complete: function() {
        if (_hasValue) {
          resolve2(_value);
        } else if (hasConfig) {
          resolve2(config2.defaultValue);
        } else {
          reject(new EmptyError());
        }
      }
    });
  });
}
var init_lastValueFrom = __esm({
  "node_modules/rxjs/dist/esm5/internal/lastValueFrom.js"() {
    init_EmptyError();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/isDate.js
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}
var init_isDate = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/isDate.js"() {
  }
});

// node_modules/rxjs/dist/esm5/internal/operators/map.js
function map(project, thisArg) {
  return operate(function(source2, subscriber) {
    var index14 = 0;
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      subscriber.next(project.call(thisArg, value, index14++));
    }));
  });
}
var init_map = __esm({
  "node_modules/rxjs/dist/esm5/internal/operators/map.js"() {
    init_lift();
    init_OperatorSubscriber();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js
function callOrApply(fn, args) {
  return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
  return map(function(args) {
    return callOrApply(fn, args);
  });
}
var isArray;
var init_mapOneOrManyArgs = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"() {
    init_tslib_es6();
    init_map();
    isArray = Array.isArray;
  }
});

// node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js
function combineLatestInit(observables, scheduler, valueTransform) {
  if (valueTransform === void 0) {
    valueTransform = identity;
  }
  return function(subscriber) {
    maybeSchedule(scheduler, function() {
      var length = observables.length;
      var values = new Array(length);
      var active = length;
      var remainingFirstValues = length;
      var _loop_1 = function(i3) {
        maybeSchedule(scheduler, function() {
          var source2 = from(observables[i3], scheduler);
          var hasFirstValue = false;
          source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
            values[i3] = value;
            if (!hasFirstValue) {
              hasFirstValue = true;
              remainingFirstValues--;
            }
            if (!remainingFirstValues) {
              subscriber.next(valueTransform(values.slice()));
            }
          }, function() {
            if (!--active) {
              subscriber.complete();
            }
          }));
        }, subscriber);
      };
      for (var i2 = 0; i2 < length; i2++) {
        _loop_1(i2);
      }
    }, subscriber);
  };
}
function maybeSchedule(scheduler, execute, subscription) {
  if (scheduler) {
    executeSchedule(subscription, scheduler, execute);
  } else {
    execute();
  }
}
var init_combineLatest = __esm({
  "node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js"() {
    init_from();
    init_identity();
    init_OperatorSubscriber();
    init_executeSchedule();
  }
});

// node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js
function mergeInternals(source2, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  var buffer = [];
  var active = 0;
  var index14 = 0;
  var isComplete = false;
  var checkComplete = function() {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };
  var outerNext = function(value) {
    return active < concurrent ? doInnerSub(value) : buffer.push(value);
  };
  var doInnerSub = function(value) {
    expand && subscriber.next(value);
    active++;
    var innerComplete = false;
    innerFrom(project(value, index14++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, function() {
      innerComplete = true;
    }, void 0, function() {
      if (innerComplete) {
        try {
          active--;
          var _loop_1 = function() {
            var bufferedValue = buffer.shift();
            if (innerSubScheduler) {
              executeSchedule(subscriber, innerSubScheduler, function() {
                return doInnerSub(bufferedValue);
              });
            } else {
              doInnerSub(bufferedValue);
            }
          };
          while (buffer.length && active < concurrent) {
            _loop_1();
          }
          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };
  source2.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
    isComplete = true;
    checkComplete();
  }));
  return function() {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}
var init_mergeInternals = __esm({
  "node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js"() {
    init_innerFrom();
    init_executeSchedule();
    init_OperatorSubscriber();
  }
});

// node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js
function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  if (isFunction(resultSelector)) {
    return mergeMap(function(a4, i2) {
      return map(function(b, ii) {
        return resultSelector(a4, b, i2, ii);
      })(innerFrom(project(a4, i2)));
    }, concurrent);
  } else if (typeof resultSelector === "number") {
    concurrent = resultSelector;
  }
  return operate(function(source2, subscriber) {
    return mergeInternals(source2, subscriber, project, concurrent);
  });
}
var init_mergeMap = __esm({
  "node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"() {
    init_map();
    init_innerFrom();
    init_lift();
    init_mergeInternals();
    init_isFunction();
  }
});

// node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }
  return mergeMap(identity, concurrent);
}
var init_mergeAll = __esm({
  "node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js"() {
    init_mergeMap();
    init_identity();
  }
});

// node_modules/rxjs/dist/esm5/internal/operators/concatAll.js
function concatAll() {
  return mergeAll(1);
}
var init_concatAll = __esm({
  "node_modules/rxjs/dist/esm5/internal/operators/concatAll.js"() {
    init_mergeAll();
  }
});

// node_modules/rxjs/dist/esm5/internal/observable/concat.js
function concat() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return concatAll()(from(args, popScheduler(args)));
}
var init_concat = __esm({
  "node_modules/rxjs/dist/esm5/internal/observable/concat.js"() {
    init_concatAll();
    init_args();
    init_from();
  }
});

// node_modules/rxjs/dist/esm5/internal/observable/defer.js
function defer(observableFactory) {
  return new Observable(function(subscriber) {
    innerFrom(observableFactory()).subscribe(subscriber);
  });
}
var init_defer = __esm({
  "node_modules/rxjs/dist/esm5/internal/observable/defer.js"() {
    init_Observable();
    init_innerFrom();
  }
});

// node_modules/rxjs/dist/esm5/internal/observable/timer.js
function timer(dueTime, intervalOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }
  if (scheduler === void 0) {
    scheduler = async;
  }
  var intervalDuration = -1;
  if (intervalOrScheduler != null) {
    if (isScheduler(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }
  return new Observable(function(subscriber) {
    var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
    if (due < 0) {
      due = 0;
    }
    var n4 = 0;
    return scheduler.schedule(function() {
      if (!subscriber.closed) {
        subscriber.next(n4++);
        if (0 <= intervalDuration) {
          this.schedule(void 0, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}
var init_timer = __esm({
  "node_modules/rxjs/dist/esm5/internal/observable/timer.js"() {
    init_Observable();
    init_async();
    init_isScheduler();
    init_isDate();
  }
});

// node_modules/rxjs/dist/esm5/internal/observable/merge.js
function merge() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var scheduler = popScheduler(args);
  var concurrent = popNumber(args, Infinity);
  var sources = args;
  return !sources.length ? EMPTY : sources.length === 1 ? innerFrom(sources[0]) : mergeAll(concurrent)(from(sources, scheduler));
}
var init_merge = __esm({
  "node_modules/rxjs/dist/esm5/internal/observable/merge.js"() {
    init_mergeAll();
    init_innerFrom();
    init_empty();
    init_args();
    init_from();
  }
});

// node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js
function argsOrArgArray(args) {
  return args.length === 1 && isArray2(args[0]) ? args[0] : args;
}
var isArray2;
var init_argsOrArgArray = __esm({
  "node_modules/rxjs/dist/esm5/internal/util/argsOrArgArray.js"() {
    isArray2 = Array.isArray;
  }
});

// node_modules/rxjs/dist/esm5/internal/operators/filter.js
function filter(predicate, thisArg) {
  return operate(function(source2, subscriber) {
    var index14 = 0;
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      return predicate.call(thisArg, value, index14++) && subscriber.next(value);
    }));
  });
}
var init_filter = __esm({
  "node_modules/rxjs/dist/esm5/internal/operators/filter.js"() {
    init_lift();
    init_OperatorSubscriber();
  }
});

// node_modules/rxjs/dist/esm5/internal/types.js
var init_types = __esm({
  "node_modules/rxjs/dist/esm5/internal/types.js"() {
  }
});

// node_modules/rxjs/dist/esm5/internal/operators/catchError.js
function catchError(selector) {
  return operate(function(source2, subscriber) {
    var innerSub = null;
    var syncUnsub = false;
    var handledResult;
    innerSub = source2.subscribe(createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
      handledResult = innerFrom(selector(err, catchError(selector)(source2)));
      if (innerSub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      } else {
        syncUnsub = true;
      }
    }));
    if (syncUnsub) {
      innerSub.unsubscribe();
      innerSub = null;
      handledResult.subscribe(subscriber);
    }
  });
}
var init_catchError = __esm({
  "node_modules/rxjs/dist/esm5/internal/operators/catchError.js"() {
    init_innerFrom();
    init_OperatorSubscriber();
    init_lift();
  }
});

// node_modules/rxjs/dist/esm5/internal/operators/combineLatest.js
function combineLatest() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var resultSelector = popResultSelector(args);
  return resultSelector ? pipe(combineLatest.apply(void 0, __spreadArray([], __read(args))), mapOneOrManyArgs(resultSelector)) : operate(function(source2, subscriber) {
    combineLatestInit(__spreadArray([source2], __read(argsOrArgArray(args))))(subscriber);
  });
}
var init_combineLatest2 = __esm({
  "node_modules/rxjs/dist/esm5/internal/operators/combineLatest.js"() {
    init_tslib_es6();
    init_combineLatest();
    init_lift();
    init_argsOrArgArray();
    init_mapOneOrManyArgs();
    init_pipe();
    init_args();
  }
});

// node_modules/rxjs/dist/esm5/internal/operators/combineLatestWith.js
function combineLatestWith() {
  var otherSources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    otherSources[_i] = arguments[_i];
  }
  return combineLatest.apply(void 0, __spreadArray([], __read(otherSources)));
}
var init_combineLatestWith = __esm({
  "node_modules/rxjs/dist/esm5/internal/operators/combineLatestWith.js"() {
    init_tslib_es6();
    init_combineLatest2();
  }
});

// node_modules/rxjs/dist/esm5/internal/operators/finalize.js
function finalize(callback) {
  return operate(function(source2, subscriber) {
    try {
      source2.subscribe(subscriber);
    } finally {
      subscriber.add(callback);
    }
  });
}
var init_finalize = __esm({
  "node_modules/rxjs/dist/esm5/internal/operators/finalize.js"() {
    init_lift();
  }
});

// node_modules/rxjs/dist/esm5/internal/operators/share.js
function share(options2) {
  if (options2 === void 0) {
    options2 = {};
  }
  var _a2 = options2.connector, connector = _a2 === void 0 ? function() {
    return new Subject();
  } : _a2, _b = options2.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options2.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options2.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
  return function(wrapperSource) {
    var connection;
    var resetConnection;
    var subject;
    var refCount = 0;
    var hasCompleted = false;
    var hasErrored = false;
    var cancelReset = function() {
      resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
      resetConnection = void 0;
    };
    var reset2 = function() {
      cancelReset();
      connection = subject = void 0;
      hasCompleted = hasErrored = false;
    };
    var resetAndUnsubscribe = function() {
      var conn = connection;
      reset2();
      conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
    };
    return operate(function(source2, subscriber) {
      refCount++;
      if (!hasErrored && !hasCompleted) {
        cancelReset();
      }
      var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
      subscriber.add(function() {
        refCount--;
        if (refCount === 0 && !hasErrored && !hasCompleted) {
          resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
        }
      });
      dest.subscribe(subscriber);
      if (!connection && refCount > 0) {
        connection = new SafeSubscriber({
          next: function(value) {
            return dest.next(value);
          },
          error: function(err) {
            hasErrored = true;
            cancelReset();
            resetConnection = handleReset(reset2, resetOnError, err);
            dest.error(err);
          },
          complete: function() {
            hasCompleted = true;
            cancelReset();
            resetConnection = handleReset(reset2, resetOnComplete);
            dest.complete();
          }
        });
        innerFrom(source2).subscribe(connection);
      }
    })(wrapperSource);
  };
}
function handleReset(reset2, on) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  if (on === true) {
    reset2();
    return;
  }
  if (on === false) {
    return;
  }
  var onSubscriber = new SafeSubscriber({
    next: function() {
      onSubscriber.unsubscribe();
      reset2();
    }
  });
  return innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
}
var init_share = __esm({
  "node_modules/rxjs/dist/esm5/internal/operators/share.js"() {
    init_tslib_es6();
    init_innerFrom();
    init_Subject();
    init_Subscriber();
    init_lift();
  }
});

// node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js
function shareReplay(configOrBufferSize, windowTime, scheduler) {
  var _a2, _b, _c;
  var bufferSize;
  var refCount = false;
  if (configOrBufferSize && typeof configOrBufferSize === "object") {
    _a2 = configOrBufferSize.bufferSize, bufferSize = _a2 === void 0 ? Infinity : _a2, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler;
  } else {
    bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
  }
  return share({
    connector: function() {
      return new ReplaySubject(bufferSize, windowTime, scheduler);
    },
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: refCount
  });
}
var init_shareReplay = __esm({
  "node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js"() {
    init_ReplaySubject();
    init_share();
  }
});

// node_modules/rxjs/dist/esm5/internal/operators/tap.js
function tap(observerOrNext, error2, complete) {
  var tapObserver = isFunction(observerOrNext) || error2 || complete ? { next: observerOrNext, error: error2, complete } : observerOrNext;
  return tapObserver ? operate(function(source2, subscriber) {
    var _a2;
    (_a2 = tapObserver.subscribe) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
    var isUnsub = true;
    source2.subscribe(createOperatorSubscriber(subscriber, function(value) {
      var _a3;
      (_a3 = tapObserver.next) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver, value);
      subscriber.next(value);
    }, function() {
      var _a3;
      isUnsub = false;
      (_a3 = tapObserver.complete) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver);
      subscriber.complete();
    }, function(err) {
      var _a3;
      isUnsub = false;
      (_a3 = tapObserver.error) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver, err);
      subscriber.error(err);
    }, function() {
      var _a3, _b;
      if (isUnsub) {
        (_a3 = tapObserver.unsubscribe) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver);
      }
      (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
    }));
  }) : identity;
}
var init_tap = __esm({
  "node_modules/rxjs/dist/esm5/internal/operators/tap.js"() {
    init_isFunction();
    init_lift();
    init_OperatorSubscriber();
    init_identity();
  }
});

// node_modules/rxjs/dist/esm5/index.js
var init_esm5 = __esm({
  "node_modules/rxjs/dist/esm5/index.js"() {
    init_Observable();
    init_isObservable();
    init_lastValueFrom();
    init_concat();
    init_defer();
    init_from();
    init_merge();
    init_of();
    init_throwError();
    init_timer();
    init_empty();
    init_types();
    init_catchError();
    init_finalize();
    init_mergeMap();
    init_share();
    init_shareReplay();
    init_tap();
  }
});

// node_modules/@sanity/client/dist/_chunks-es/stegaClean.js
function E2(t2) {
  let e2 = JSON.stringify(t2);
  return `${u3}${Array.from(e2).map((r3) => {
    let n4 = r3.charCodeAt(0);
    if (n4 > 255) throw new Error(`Only ASCII edit info can be encoded. Error attempting to encode ${e2} on character ${r3} (${n4})`);
    return Array.from(n4.toString(4).padStart(4, "0")).map((o3) => String.fromCodePoint(c4[o3])).join("");
  }).join("")}`;
}
function I2(t2) {
  return !Number.isNaN(Number(t2)) || /[a-z]/i.test(t2) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(t2) ? false : !!Date.parse(t2);
}
function T2(t2) {
  try {
    new URL(t2, t2.startsWith("/") ? "https://acme.com" : void 0);
  } catch {
    return false;
  }
  return true;
}
function C(t2, e2, r3 = "auto") {
  return r3 === true || r3 === "auto" && (I2(t2) || T2(t2)) ? t2 : `${t2}${E2(e2)}`;
}
function _2(t2) {
  var e2;
  return { cleaned: t2.replace(f2, ""), encoded: ((e2 = t2.match(f2)) == null ? void 0 : e2[0]) || "" };
}
function O2(t2) {
  return t2 && JSON.parse(_2(JSON.stringify(t2)).cleaned);
}
function stegaClean(result) {
  return O2(result);
}
var s4, c4, u3, S2, f2;
var init_stegaClean = __esm({
  "node_modules/@sanity/client/dist/_chunks-es/stegaClean.js"() {
    s4 = { 0: 8203, 1: 8204, 2: 8205, 3: 8290, 4: 8291, 5: 8288, 6: 65279, 7: 8289, 8: 119155, 9: 119156, a: 119157, b: 119158, c: 119159, d: 119160, e: 119161, f: 119162 };
    c4 = { 0: 8203, 1: 8204, 2: 8205, 3: 65279 };
    u3 = new Array(4).fill(String.fromCodePoint(c4[0])).join("");
    Object.fromEntries(Object.entries(c4).map((t2) => t2.reverse()));
    Object.fromEntries(Object.entries(s4).map((t2) => t2.reverse()));
    S2 = `${Object.values(s4).map((t2) => `\\u{${t2.toString(16)}}`).join("")}`;
    f2 = new RegExp(`[${S2}]{4,}`, "gu");
  }
});

// node_modules/rxjs/dist/esm5/operators/index.js
var init_operators = __esm({
  "node_modules/rxjs/dist/esm5/operators/index.js"() {
    init_combineLatestWith();
    init_filter();
    init_finalize();
    init_map();
  }
});

// node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js
var stegaEncodeSourceMap_exports = {};
__export(stegaEncodeSourceMap_exports, {
  encodeIntoResult: () => encodeIntoResult,
  stegaEncodeSourceMap: () => stegaEncodeSourceMap,
  stegaEncodeSourceMap$1: () => stegaEncodeSourceMap$1
});
function isKeySegment(segment) {
  return typeof segment == "string" ? reKeySegment.test(segment.trim()) : typeof segment == "object" && "_key" in segment;
}
function toString(path) {
  if (!Array.isArray(path))
    throw new Error("Path is not an array");
  return path.reduce((target, segment, i2) => {
    const segmentType = typeof segment;
    if (segmentType === "number")
      return `${target}[${segment}]`;
    if (segmentType === "string")
      return `${target}${i2 === 0 ? "" : "."}${segment}`;
    if (isKeySegment(segment) && segment._key)
      return `${target}[_key=="${segment._key}"]`;
    if (Array.isArray(segment)) {
      const [from2, to] = segment;
      return `${target}[${from2}:${to}]`;
    }
    throw new Error(`Unsupported path segment \`${JSON.stringify(segment)}\``);
  }, "");
}
function jsonPath(path) {
  return `$${path.map((segment) => typeof segment == "string" ? `['${segment.replace(/[\f\n\r\t'\\]/g, (match) => ESCAPE[match])}']` : typeof segment == "number" ? `[${segment}]` : segment._key !== "" ? `[?(@._key=='${segment._key.replace(/['\\]/g, (match) => ESCAPE[match])}')]` : `[${segment._index}]`).join("")}`;
}
function parseJsonPath(path) {
  const parsed = [], parseRe = /\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;
  let match;
  for (; (match = parseRe.exec(path)) !== null; ) {
    if (match[1] !== void 0) {
      const key2 = match[1].replace(/\\(\\|f|n|r|t|')/g, (m) => UNESCAPE[m]);
      parsed.push(key2);
      continue;
    }
    if (match[2] !== void 0) {
      parsed.push(parseInt(match[2], 10));
      continue;
    }
    if (match[3] !== void 0) {
      const _key = match[3].replace(/\\(\\')/g, (m) => UNESCAPE[m]);
      parsed.push({
        _key,
        _index: -1
      });
      continue;
    }
  }
  return parsed;
}
function jsonPathToStudioPath(path) {
  return path.map((segment) => {
    if (typeof segment == "string" || typeof segment == "number")
      return segment;
    if (segment._key !== "")
      return { _key: segment._key };
    if (segment._index !== -1)
      return segment._index;
    throw new Error(`invalid segment:${JSON.stringify(segment)}`);
  });
}
function jsonPathToMappingPath(path) {
  return path.map((segment) => {
    if (typeof segment == "string" || typeof segment == "number")
      return segment;
    if (segment._index !== -1)
      return segment._index;
    throw new Error(`invalid segment:${JSON.stringify(segment)}`);
  });
}
function resolveMapping(resultPath, csm) {
  if (!csm?.mappings)
    return;
  const resultMappingPath = jsonPath(jsonPathToMappingPath(resultPath));
  if (csm.mappings[resultMappingPath] !== void 0)
    return {
      mapping: csm.mappings[resultMappingPath],
      matchedPath: resultMappingPath,
      pathSuffix: ""
    };
  const mappings = Object.entries(csm.mappings).filter(([key2]) => resultMappingPath.startsWith(key2)).sort(([key1], [key2]) => key2.length - key1.length);
  if (mappings.length == 0)
    return;
  const [matchedPath, mapping] = mappings[0], pathSuffix = resultMappingPath.substring(matchedPath.length);
  return { mapping, matchedPath, pathSuffix };
}
function isArray3(value) {
  return value !== null && Array.isArray(value);
}
function isRecord(value) {
  return typeof value == "object" && value !== null;
}
function walkMap(value, mappingFn, path = []) {
  if (isArray3(value))
    return value.map((v2, idx) => {
      if (isRecord(v2)) {
        const _key = v2._key;
        if (typeof _key == "string")
          return walkMap(v2, mappingFn, path.concat({ _key, _index: idx }));
      }
      return walkMap(v2, mappingFn, path.concat(idx));
    });
  if (isRecord(value)) {
    if (value._type === "block" || value._type === "span") {
      const result = { ...value };
      return value._type === "block" ? result.children = walkMap(value.children, mappingFn, path.concat("children")) : value._type === "span" && (result.text = walkMap(value.text, mappingFn, path.concat("text"))), result;
    }
    return Object.fromEntries(
      Object.entries(value).map(([k, v2]) => [k, walkMap(v2, mappingFn, path.concat(k))])
    );
  }
  return mappingFn(value, path);
}
function encodeIntoResult(result, csm, encoder) {
  return walkMap(result, (value, path) => {
    if (typeof value != "string")
      return value;
    const resolveMappingResult = resolveMapping(path, csm);
    if (!resolveMappingResult)
      return value;
    const { mapping, matchedPath } = resolveMappingResult;
    if (mapping.type !== "value" || mapping.source.type !== "documentValue")
      return value;
    const sourceDocument = csm.documents[mapping.source.document], sourcePath = csm.paths[mapping.source.path], matchPathSegments = parseJsonPath(matchedPath), fullSourceSegments = parseJsonPath(sourcePath).concat(path.slice(matchPathSegments.length));
    return encoder({
      sourcePath: fullSourceSegments,
      sourceDocument,
      resultPath: path,
      value
    });
  });
}
function isDraftId(id) {
  return id.startsWith(DRAFTS_PREFIX);
}
function isVersionId(id) {
  return id.startsWith(VERSION_PREFIX);
}
function isPublishedId(id) {
  return !isDraftId(id) && !isVersionId(id);
}
function getVersionFromId(id) {
  if (!isVersionId(id)) return;
  const [_versionPrefix, versionId, ..._publishedId] = id.split(PATH_SEPARATOR);
  return versionId;
}
function getPublishedId(id) {
  return isVersionId(id) ? id.split(PATH_SEPARATOR).slice(2).join(PATH_SEPARATOR) : isDraftId(id) ? id.slice(DRAFTS_PREFIX.length) : id;
}
function createEditUrl(options2) {
  const {
    baseUrl,
    workspace: _workspace = "default",
    tool: _tool = "default",
    id: _id,
    type,
    path,
    projectId: projectId2,
    dataset: dataset2
  } = options2;
  if (!baseUrl)
    throw new Error("baseUrl is required");
  if (!path)
    throw new Error("path is required");
  if (!_id)
    throw new Error("id is required");
  if (baseUrl !== "/" && baseUrl.endsWith("/"))
    throw new Error("baseUrl must not end with a slash");
  const workspace = _workspace === "default" ? void 0 : _workspace, tool = _tool === "default" ? void 0 : _tool, id = getPublishedId(_id), stringifiedPath = Array.isArray(path) ? toString(jsonPathToStudioPath(path)) : path, searchParams = new URLSearchParams({
    baseUrl,
    id,
    type,
    path: stringifiedPath
  });
  if (workspace && searchParams.set("workspace", workspace), tool && searchParams.set("tool", tool), projectId2 && searchParams.set("projectId", projectId2), dataset2 && searchParams.set("dataset", dataset2), isPublishedId(_id))
    searchParams.set("perspective", "published");
  else if (isVersionId(_id)) {
    const versionId = getVersionFromId(_id);
    searchParams.set("perspective", versionId);
  }
  const segments = [baseUrl === "/" ? "" : baseUrl];
  workspace && segments.push(workspace);
  const routerParams = [
    "mode=presentation",
    `id=${id}`,
    `type=${type}`,
    `path=${encodeURIComponent(stringifiedPath)}`
  ];
  return tool && routerParams.push(`tool=${tool}`), segments.push("intent", "edit", `${routerParams.join(";")}?${searchParams}`), segments.join("/");
}
function resolveStudioBaseRoute(studioUrl) {
  let baseUrl = typeof studioUrl == "string" ? studioUrl : studioUrl.baseUrl;
  return baseUrl !== "/" && (baseUrl = baseUrl.replace(/\/$/, "")), typeof studioUrl == "string" ? { baseUrl } : { ...studioUrl, baseUrl };
}
function isValidDate2(dateString) {
  return /^\d{4}-\d{2}-\d{2}/.test(dateString) ? !!Date.parse(dateString) : false;
}
function isValidURL(url) {
  try {
    new URL(url, url.startsWith("/") ? "https://acme.com" : void 0);
  } catch {
    return false;
  }
  return true;
}
function hasTypeLike(path) {
  return path.some((segment) => typeof segment == "string" && segment.match(/type/i) !== null);
}
function stegaEncodeSourceMap(result, resultSourceMap, config2) {
  const { filter: filter2, logger, enabled } = config2;
  if (!enabled) {
    const msg = "config.enabled must be true, don't call this function otherwise";
    throw logger?.error?.(`[@sanity/client]: ${msg}`, { result, resultSourceMap, config: config2 }), new TypeError(msg);
  }
  if (!resultSourceMap)
    return logger?.error?.("[@sanity/client]: Missing Content Source Map from response body", {
      result,
      resultSourceMap,
      config: config2
    }), result;
  if (!config2.studioUrl) {
    const msg = "config.studioUrl must be defined";
    throw logger?.error?.(`[@sanity/client]: ${msg}`, { result, resultSourceMap, config: config2 }), new TypeError(msg);
  }
  const report = {
    encoded: [],
    skipped: []
  }, resultWithStega = encodeIntoResult(
    result,
    resultSourceMap,
    ({ sourcePath, sourceDocument, resultPath, value }) => {
      if ((typeof filter2 == "function" ? filter2({ sourcePath, resultPath, filterDefault, sourceDocument, value }) : filterDefault({ sourcePath, resultPath, value })) === false)
        return logger && report.skipped.push({
          path: prettyPathForLogging(sourcePath),
          value: `${value.slice(0, TRUNCATE_LENGTH)}${value.length > TRUNCATE_LENGTH ? "..." : ""}`,
          length: value.length
        }), value;
      logger && report.encoded.push({
        path: prettyPathForLogging(sourcePath),
        value: `${value.slice(0, TRUNCATE_LENGTH)}${value.length > TRUNCATE_LENGTH ? "..." : ""}`,
        length: value.length
      });
      const { baseUrl, workspace, tool } = resolveStudioBaseRoute(
        typeof config2.studioUrl == "function" ? config2.studioUrl(sourceDocument) : config2.studioUrl
      );
      if (!baseUrl) return value;
      const { _id: id, _type: type, _projectId: projectId2, _dataset: dataset2 } = sourceDocument;
      return C(
        value,
        {
          origin: "sanity.io",
          href: createEditUrl({
            baseUrl,
            workspace,
            tool,
            id,
            type,
            path: sourcePath,
            ...!config2.omitCrossDatasetReferenceData && { dataset: dataset2, projectId: projectId2 }
          })
        },
        // We use custom logic to determine if we should skip encoding
        false
      );
    }
  );
  if (logger) {
    const isSkipping = report.skipped.length, isEncoding = report.encoded.length;
    if ((isSkipping || isEncoding) && ((logger?.groupCollapsed || logger.log)?.("[@sanity/client]: Encoding source map into result"), logger.log?.(
      `[@sanity/client]: Paths encoded: ${report.encoded.length}, skipped: ${report.skipped.length}`
    )), report.encoded.length > 0 && (logger?.log?.("[@sanity/client]: Table of encoded paths"), (logger?.table || logger.log)?.(report.encoded)), report.skipped.length > 0) {
      const skipped = /* @__PURE__ */ new Set();
      for (const { path } of report.skipped)
        skipped.add(path.replace(reKeySegment, "0").replace(/\[\d+\]/g, "[]"));
      logger?.log?.("[@sanity/client]: List of skipped paths", [...skipped.values()]);
    }
    (isSkipping || isEncoding) && logger?.groupEnd?.();
  }
  return resultWithStega;
}
function prettyPathForLogging(path) {
  return toString(jsonPathToStudioPath(path));
}
var reKeySegment, ESCAPE, UNESCAPE, DRAFTS_FOLDER, VERSION_FOLDER, PATH_SEPARATOR, DRAFTS_PREFIX, VERSION_PREFIX, filterDefault, denylist, TRUNCATE_LENGTH, stegaEncodeSourceMap$1;
var init_stegaEncodeSourceMap = __esm({
  "node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js"() {
    init_stegaClean();
    reKeySegment = /_key\s*==\s*['"](.*)['"]/;
    ESCAPE = {
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "	": "\\t",
      "'": "\\'",
      "\\": "\\\\"
    };
    UNESCAPE = {
      "\\f": "\f",
      "\\n": `
`,
      "\\r": "\r",
      "\\t": "	",
      "\\'": "'",
      "\\\\": "\\"
    };
    DRAFTS_FOLDER = "drafts";
    VERSION_FOLDER = "versions";
    PATH_SEPARATOR = ".";
    DRAFTS_PREFIX = `${DRAFTS_FOLDER}${PATH_SEPARATOR}`;
    VERSION_PREFIX = `${VERSION_FOLDER}${PATH_SEPARATOR}`;
    filterDefault = ({ sourcePath, resultPath, value }) => {
      if (isValidDate2(value) || isValidURL(value))
        return false;
      const endPath = sourcePath.at(-1);
      return !(sourcePath.at(-2) === "slug" && endPath === "current" || typeof endPath == "string" && (endPath.startsWith("_") || endPath.endsWith("Id")) || sourcePath.some(
        (path) => path === "meta" || path === "metadata" || path === "openGraph" || path === "seo"
      ) || hasTypeLike(sourcePath) || hasTypeLike(resultPath) || typeof endPath == "string" && denylist.has(endPath));
    };
    denylist = /* @__PURE__ */ new Set([
      "color",
      "colour",
      "currency",
      "email",
      "format",
      "gid",
      "hex",
      "href",
      "hsl",
      "hsla",
      "icon",
      "id",
      "index",
      "key",
      "language",
      "layout",
      "link",
      "linkAction",
      "locale",
      "lqip",
      "page",
      "path",
      "ref",
      "rgb",
      "rgba",
      "route",
      "secret",
      "slug",
      "status",
      "tag",
      "template",
      "theme",
      "type",
      "textTheme",
      "unit",
      "url",
      "username",
      "variant",
      "website"
    ]);
    TRUNCATE_LENGTH = 20;
    stegaEncodeSourceMap$1 = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      stegaEncodeSourceMap
    });
  }
});

// node_modules/event-source-polyfill/src/eventsource.js
var require_eventsource = __commonJS({
  "node_modules/event-source-polyfill/src/eventsource.js"(exports, module) {
    (function(global2) {
      "use strict";
      var setTimeout2 = global2.setTimeout;
      var clearTimeout2 = global2.clearTimeout;
      var XMLHttpRequest2 = global2.XMLHttpRequest;
      var XDomainRequest = global2.XDomainRequest;
      var ActiveXObject = global2.ActiveXObject;
      var NativeEventSource = global2.EventSource;
      var document2 = global2.document;
      var Promise2 = global2.Promise;
      var fetch2 = global2.fetch;
      var Response2 = global2.Response;
      var TextDecoder2 = global2.TextDecoder;
      var TextEncoder2 = global2.TextEncoder;
      var AbortController2 = global2.AbortController;
      if (typeof window !== "undefined" && typeof document2 !== "undefined" && !("readyState" in document2) && document2.body == null) {
        document2.readyState = "loading";
        window.addEventListener("load", function(event) {
          document2.readyState = "complete";
        }, false);
      }
      if (XMLHttpRequest2 == null && ActiveXObject != null) {
        XMLHttpRequest2 = function() {
          return new ActiveXObject("Microsoft.XMLHTTP");
        };
      }
      if (Object.create == void 0) {
        Object.create = function(C2) {
          function F2() {
          }
          F2.prototype = C2;
          return new F2();
        };
      }
      if (!Date.now) {
        Date.now = function now() {
          return (/* @__PURE__ */ new Date()).getTime();
        };
      }
      if (AbortController2 == void 0) {
        var originalFetch2 = fetch2;
        fetch2 = function(url, options2) {
          var signal = options2.signal;
          return originalFetch2(url, { headers: options2.headers, credentials: options2.credentials, cache: options2.cache }).then(function(response) {
            var reader = response.body.getReader();
            signal._reader = reader;
            if (signal._aborted) {
              signal._reader.cancel();
            }
            return {
              status: response.status,
              statusText: response.statusText,
              headers: response.headers,
              body: {
                getReader: function() {
                  return reader;
                }
              }
            };
          });
        };
        AbortController2 = function() {
          this.signal = {
            _reader: null,
            _aborted: false
          };
          this.abort = function() {
            if (this.signal._reader != null) {
              this.signal._reader.cancel();
            }
            this.signal._aborted = true;
          };
        };
      }
      function TextDecoderPolyfill() {
        this.bitsNeeded = 0;
        this.codePoint = 0;
      }
      TextDecoderPolyfill.prototype.decode = function(octets) {
        function valid(codePoint2, shift, octetsCount2) {
          if (octetsCount2 === 1) {
            return codePoint2 >= 128 >> shift && codePoint2 << shift <= 2047;
          }
          if (octetsCount2 === 2) {
            return codePoint2 >= 2048 >> shift && codePoint2 << shift <= 55295 || codePoint2 >= 57344 >> shift && codePoint2 << shift <= 65535;
          }
          if (octetsCount2 === 3) {
            return codePoint2 >= 65536 >> shift && codePoint2 << shift <= 1114111;
          }
          throw new Error();
        }
        function octetsCount(bitsNeeded2, codePoint2) {
          if (bitsNeeded2 === 6 * 1) {
            return codePoint2 >> 6 > 15 ? 3 : codePoint2 > 31 ? 2 : 1;
          }
          if (bitsNeeded2 === 6 * 2) {
            return codePoint2 > 15 ? 3 : 2;
          }
          if (bitsNeeded2 === 6 * 3) {
            return 3;
          }
          throw new Error();
        }
        var REPLACER = 65533;
        var string = "";
        var bitsNeeded = this.bitsNeeded;
        var codePoint = this.codePoint;
        for (var i2 = 0; i2 < octets.length; i2 += 1) {
          var octet = octets[i2];
          if (bitsNeeded !== 0) {
            if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
              bitsNeeded = 0;
              codePoint = REPLACER;
              string += String.fromCharCode(codePoint);
            }
          }
          if (bitsNeeded === 0) {
            if (octet >= 0 && octet <= 127) {
              bitsNeeded = 0;
              codePoint = octet;
            } else if (octet >= 192 && octet <= 223) {
              bitsNeeded = 6 * 1;
              codePoint = octet & 31;
            } else if (octet >= 224 && octet <= 239) {
              bitsNeeded = 6 * 2;
              codePoint = octet & 15;
            } else if (octet >= 240 && octet <= 247) {
              bitsNeeded = 6 * 3;
              codePoint = octet & 7;
            } else {
              bitsNeeded = 0;
              codePoint = REPLACER;
            }
            if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
              bitsNeeded = 0;
              codePoint = REPLACER;
            }
          } else {
            bitsNeeded -= 6;
            codePoint = codePoint << 6 | octet & 63;
          }
          if (bitsNeeded === 0) {
            if (codePoint <= 65535) {
              string += String.fromCharCode(codePoint);
            } else {
              string += String.fromCharCode(55296 + (codePoint - 65535 - 1 >> 10));
              string += String.fromCharCode(56320 + (codePoint - 65535 - 1 & 1023));
            }
          }
        }
        this.bitsNeeded = bitsNeeded;
        this.codePoint = codePoint;
        return string;
      };
      var supportsStreamOption = function() {
        try {
          return new TextDecoder2().decode(new TextEncoder2().encode("test"), { stream: true }) === "test";
        } catch (error2) {
          console.debug("TextDecoder does not support streaming option. Using polyfill instead: " + error2);
        }
        return false;
      };
      if (TextDecoder2 == void 0 || TextEncoder2 == void 0 || !supportsStreamOption()) {
        TextDecoder2 = TextDecoderPolyfill;
      }
      var k = function() {
      };
      function XHRWrapper(xhr) {
        this.withCredentials = false;
        this.readyState = 0;
        this.status = 0;
        this.statusText = "";
        this.responseText = "";
        this.onprogress = k;
        this.onload = k;
        this.onerror = k;
        this.onreadystatechange = k;
        this._contentType = "";
        this._xhr = xhr;
        this._sendTimeout = 0;
        this._abort = k;
      }
      XHRWrapper.prototype.open = function(method, url) {
        this._abort(true);
        var that = this;
        var xhr = this._xhr;
        var state2 = 1;
        var timeout = 0;
        this._abort = function(silent) {
          if (that._sendTimeout !== 0) {
            clearTimeout2(that._sendTimeout);
            that._sendTimeout = 0;
          }
          if (state2 === 1 || state2 === 2 || state2 === 3) {
            state2 = 4;
            xhr.onload = k;
            xhr.onerror = k;
            xhr.onabort = k;
            xhr.onprogress = k;
            xhr.onreadystatechange = k;
            xhr.abort();
            if (timeout !== 0) {
              clearTimeout2(timeout);
              timeout = 0;
            }
            if (!silent) {
              that.readyState = 4;
              that.onabort(null);
              that.onreadystatechange();
            }
          }
          state2 = 0;
        };
        var onStart = function() {
          if (state2 === 1) {
            var status = 0;
            var statusText = "";
            var contentType = void 0;
            if (!("contentType" in xhr)) {
              try {
                status = xhr.status;
                statusText = xhr.statusText;
                contentType = xhr.getResponseHeader("Content-Type");
              } catch (error2) {
                status = 0;
                statusText = "";
                contentType = void 0;
              }
            } else {
              status = 200;
              statusText = "OK";
              contentType = xhr.contentType;
            }
            if (status !== 0) {
              state2 = 2;
              that.readyState = 2;
              that.status = status;
              that.statusText = statusText;
              that._contentType = contentType;
              that.onreadystatechange();
            }
          }
        };
        var onProgress = function() {
          onStart();
          if (state2 === 2 || state2 === 3) {
            state2 = 3;
            var responseText = "";
            try {
              responseText = xhr.responseText;
            } catch (error2) {
            }
            that.readyState = 3;
            that.responseText = responseText;
            that.onprogress();
          }
        };
        var onFinish = function(type, event) {
          if (event == null || event.preventDefault == null) {
            event = {
              preventDefault: k
            };
          }
          onProgress();
          if (state2 === 1 || state2 === 2 || state2 === 3) {
            state2 = 4;
            if (timeout !== 0) {
              clearTimeout2(timeout);
              timeout = 0;
            }
            that.readyState = 4;
            if (type === "load") {
              that.onload(event);
            } else if (type === "error") {
              that.onerror(event);
            } else if (type === "abort") {
              that.onabort(event);
            } else {
              throw new TypeError();
            }
            that.onreadystatechange();
          }
        };
        var onReadyStateChange = function(event) {
          if (xhr != void 0) {
            if (xhr.readyState === 4) {
              if (!("onload" in xhr) || !("onerror" in xhr) || !("onabort" in xhr)) {
                onFinish(xhr.responseText === "" ? "error" : "load", event);
              }
            } else if (xhr.readyState === 3) {
              if (!("onprogress" in xhr)) {
                onProgress();
              }
            } else if (xhr.readyState === 2) {
              onStart();
            }
          }
        };
        var onTimeout = function() {
          timeout = setTimeout2(function() {
            onTimeout();
          }, 500);
          if (xhr.readyState === 3) {
            onProgress();
          }
        };
        if ("onload" in xhr) {
          xhr.onload = function(event) {
            onFinish("load", event);
          };
        }
        if ("onerror" in xhr) {
          xhr.onerror = function(event) {
            onFinish("error", event);
          };
        }
        if ("onabort" in xhr) {
          xhr.onabort = function(event) {
            onFinish("abort", event);
          };
        }
        if ("onprogress" in xhr) {
          xhr.onprogress = onProgress;
        }
        if ("onreadystatechange" in xhr) {
          xhr.onreadystatechange = function(event) {
            onReadyStateChange(event);
          };
        }
        if ("contentType" in xhr || !("ontimeout" in XMLHttpRequest2.prototype)) {
          url += (url.indexOf("?") === -1 ? "?" : "&") + "padding=true";
        }
        xhr.open(method, url, true);
        if ("readyState" in xhr) {
          timeout = setTimeout2(function() {
            onTimeout();
          }, 0);
        }
      };
      XHRWrapper.prototype.abort = function() {
        this._abort(false);
      };
      XHRWrapper.prototype.getResponseHeader = function(name) {
        return this._contentType;
      };
      XHRWrapper.prototype.setRequestHeader = function(name, value) {
        var xhr = this._xhr;
        if ("setRequestHeader" in xhr) {
          xhr.setRequestHeader(name, value);
        }
      };
      XHRWrapper.prototype.getAllResponseHeaders = function() {
        return this._xhr.getAllResponseHeaders != void 0 ? this._xhr.getAllResponseHeaders() || "" : "";
      };
      XHRWrapper.prototype.send = function() {
        if ((!("ontimeout" in XMLHttpRequest2.prototype) || !("sendAsBinary" in XMLHttpRequest2.prototype) && !("mozAnon" in XMLHttpRequest2.prototype)) && document2 != void 0 && document2.readyState != void 0 && document2.readyState !== "complete") {
          var that = this;
          that._sendTimeout = setTimeout2(function() {
            that._sendTimeout = 0;
            that.send();
          }, 4);
          return;
        }
        var xhr = this._xhr;
        if ("withCredentials" in xhr) {
          xhr.withCredentials = this.withCredentials;
        }
        try {
          xhr.send(void 0);
        } catch (error1) {
          throw error1;
        }
      };
      function toLowerCase(name) {
        return name.replace(/[A-Z]/g, function(c5) {
          return String.fromCharCode(c5.charCodeAt(0) + 32);
        });
      }
      function HeadersPolyfill(all) {
        var map2 = /* @__PURE__ */ Object.create(null);
        var array2 = all.split("\r\n");
        for (var i2 = 0; i2 < array2.length; i2 += 1) {
          var line = array2[i2];
          var parts = line.split(": ");
          var name = parts.shift();
          var value = parts.join(": ");
          map2[toLowerCase(name)] = value;
        }
        this._map = map2;
      }
      HeadersPolyfill.prototype.get = function(name) {
        return this._map[toLowerCase(name)];
      };
      if (XMLHttpRequest2 != null && XMLHttpRequest2.HEADERS_RECEIVED == null) {
        XMLHttpRequest2.HEADERS_RECEIVED = 2;
      }
      function XHRTransport() {
      }
      XHRTransport.prototype.open = function(xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers2) {
        xhr.open("GET", url);
        var offset = 0;
        xhr.onprogress = function() {
          var responseText = xhr.responseText;
          var chunk = responseText.slice(offset);
          offset += chunk.length;
          onProgressCallback(chunk);
        };
        xhr.onerror = function(event) {
          event.preventDefault();
          onFinishCallback(new Error("NetworkError"));
        };
        xhr.onload = function() {
          onFinishCallback(null);
        };
        xhr.onabort = function() {
          onFinishCallback(null);
        };
        xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest2.HEADERS_RECEIVED) {
            var status = xhr.status;
            var statusText = xhr.statusText;
            var contentType = xhr.getResponseHeader("Content-Type");
            var headers3 = xhr.getAllResponseHeaders();
            onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers3));
          }
        };
        xhr.withCredentials = withCredentials;
        for (var name in headers2) {
          if (Object.prototype.hasOwnProperty.call(headers2, name)) {
            xhr.setRequestHeader(name, headers2[name]);
          }
        }
        xhr.send();
        return xhr;
      };
      function HeadersWrapper(headers2) {
        this._headers = headers2;
      }
      HeadersWrapper.prototype.get = function(name) {
        return this._headers.get(name);
      };
      function FetchTransport() {
      }
      FetchTransport.prototype.open = function(xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers2) {
        var reader = null;
        var controller2 = new AbortController2();
        var signal = controller2.signal;
        var textDecoder = new TextDecoder2();
        fetch2(url, {
          headers: headers2,
          credentials: withCredentials ? "include" : "same-origin",
          signal,
          cache: "no-store"
        }).then(function(response) {
          reader = response.body.getReader();
          onStartCallback(response.status, response.statusText, response.headers.get("Content-Type"), new HeadersWrapper(response.headers));
          return new Promise2(function(resolve2, reject) {
            var readNextChunk = function() {
              reader.read().then(function(result) {
                if (result.done) {
                  resolve2(void 0);
                } else {
                  var chunk = textDecoder.decode(result.value, { stream: true });
                  onProgressCallback(chunk);
                  readNextChunk();
                }
              })["catch"](function(error2) {
                reject(error2);
              });
            };
            readNextChunk();
          });
        })["catch"](function(error2) {
          if (error2.name === "AbortError") {
            return void 0;
          } else {
            return error2;
          }
        }).then(function(error2) {
          onFinishCallback(error2);
        });
        return {
          abort: function() {
            if (reader != null) {
              reader.cancel();
            }
            controller2.abort();
          }
        };
      };
      function EventTarget2() {
        this._listeners = /* @__PURE__ */ Object.create(null);
      }
      function throwError2(e2) {
        setTimeout2(function() {
          throw e2;
        }, 0);
      }
      EventTarget2.prototype.dispatchEvent = function(event) {
        event.target = this;
        var typeListeners = this._listeners[event.type];
        if (typeListeners != void 0) {
          var length = typeListeners.length;
          for (var i2 = 0; i2 < length; i2 += 1) {
            var listener = typeListeners[i2];
            try {
              if (typeof listener.handleEvent === "function") {
                listener.handleEvent(event);
              } else {
                listener.call(this, event);
              }
            } catch (e2) {
              throwError2(e2);
            }
          }
        }
      };
      EventTarget2.prototype.addEventListener = function(type, listener) {
        type = String(type);
        var listeners = this._listeners;
        var typeListeners = listeners[type];
        if (typeListeners == void 0) {
          typeListeners = [];
          listeners[type] = typeListeners;
        }
        var found = false;
        for (var i2 = 0; i2 < typeListeners.length; i2 += 1) {
          if (typeListeners[i2] === listener) {
            found = true;
          }
        }
        if (!found) {
          typeListeners.push(listener);
        }
      };
      EventTarget2.prototype.removeEventListener = function(type, listener) {
        type = String(type);
        var listeners = this._listeners;
        var typeListeners = listeners[type];
        if (typeListeners != void 0) {
          var filtered = [];
          for (var i2 = 0; i2 < typeListeners.length; i2 += 1) {
            if (typeListeners[i2] !== listener) {
              filtered.push(typeListeners[i2]);
            }
          }
          if (filtered.length === 0) {
            delete listeners[type];
          } else {
            listeners[type] = filtered;
          }
        }
      };
      function Event(type) {
        this.type = type;
        this.target = void 0;
      }
      function MessageEvent(type, options2) {
        Event.call(this, type);
        this.data = options2.data;
        this.lastEventId = options2.lastEventId;
      }
      MessageEvent.prototype = Object.create(Event.prototype);
      function ConnectionEvent(type, options2) {
        Event.call(this, type);
        this.status = options2.status;
        this.statusText = options2.statusText;
        this.headers = options2.headers;
      }
      ConnectionEvent.prototype = Object.create(Event.prototype);
      function ErrorEvent(type, options2) {
        Event.call(this, type);
        this.error = options2.error;
      }
      ErrorEvent.prototype = Object.create(Event.prototype);
      var WAITING = -1;
      var CONNECTING = 0;
      var OPEN = 1;
      var CLOSED = 2;
      var AFTER_CR = -1;
      var FIELD_START = 0;
      var FIELD = 1;
      var VALUE_START = 2;
      var VALUE = 3;
      var contentTypeRegExp = /^text\/event\-stream(;.*)?$/i;
      var MINIMUM_DURATION = 1e3;
      var MAXIMUM_DURATION = 18e6;
      var parseDuration = function(value, def) {
        var n4 = value == null ? def : parseInt(value, 10);
        if (n4 !== n4) {
          n4 = def;
        }
        return clampDuration(n4);
      };
      var clampDuration = function(n4) {
        return Math.min(Math.max(n4, MINIMUM_DURATION), MAXIMUM_DURATION);
      };
      var fire = function(that, f3, event) {
        try {
          if (typeof f3 === "function") {
            f3.call(that, event);
          }
        } catch (e2) {
          throwError2(e2);
        }
      };
      function EventSourcePolyfill(url, options2) {
        EventTarget2.call(this);
        options2 = options2 || {};
        this.onopen = void 0;
        this.onmessage = void 0;
        this.onerror = void 0;
        this.url = void 0;
        this.readyState = void 0;
        this.withCredentials = void 0;
        this.headers = void 0;
        this._close = void 0;
        start(this, url, options2);
      }
      function getBestXHRTransport() {
        return XMLHttpRequest2 != void 0 && "withCredentials" in XMLHttpRequest2.prototype || XDomainRequest == void 0 ? new XMLHttpRequest2() : new XDomainRequest();
      }
      var isFetchSupported = fetch2 != void 0 && Response2 != void 0 && "body" in Response2.prototype;
      function start(es, url, options2) {
        url = String(url);
        var withCredentials = Boolean(options2.withCredentials);
        var lastEventIdQueryParameterName = options2.lastEventIdQueryParameterName || "lastEventId";
        var initialRetry = clampDuration(1e3);
        var heartbeatTimeout = parseDuration(options2.heartbeatTimeout, 45e3);
        var lastEventId = "";
        var retry = initialRetry;
        var wasActivity = false;
        var textLength = 0;
        var headers2 = options2.headers || {};
        var TransportOption = options2.Transport;
        var xhr = isFetchSupported && TransportOption == void 0 ? void 0 : new XHRWrapper(TransportOption != void 0 ? new TransportOption() : getBestXHRTransport());
        var transport = TransportOption != null && typeof TransportOption !== "string" ? new TransportOption() : xhr == void 0 ? new FetchTransport() : new XHRTransport();
        var abortController = void 0;
        var timeout = 0;
        var currentState = WAITING;
        var dataBuffer = "";
        var lastEventIdBuffer = "";
        var eventTypeBuffer = "";
        var textBuffer = "";
        var state2 = FIELD_START;
        var fieldStart = 0;
        var valueStart = 0;
        var onStart = function(status, statusText, contentType, headers3) {
          if (currentState === CONNECTING) {
            if (status === 200 && contentType != void 0 && contentTypeRegExp.test(contentType)) {
              currentState = OPEN;
              wasActivity = Date.now();
              retry = initialRetry;
              es.readyState = OPEN;
              var event = new ConnectionEvent("open", {
                status,
                statusText,
                headers: headers3
              });
              es.dispatchEvent(event);
              fire(es, es.onopen, event);
            } else {
              var message = "";
              if (status !== 200) {
                if (statusText) {
                  statusText = statusText.replace(/\s+/g, " ");
                }
                message = "EventSource's response has a status " + status + " " + statusText + " that is not 200. Aborting the connection.";
              } else {
                message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == void 0 ? "-" : contentType.replace(/\s+/g, " ")) + ". Aborting the connection.";
              }
              close();
              var event = new ConnectionEvent("error", {
                status,
                statusText,
                headers: headers3
              });
              es.dispatchEvent(event);
              fire(es, es.onerror, event);
              console.error(message);
            }
          }
        };
        var onProgress = function(textChunk) {
          if (currentState === OPEN) {
            var n4 = -1;
            for (var i2 = 0; i2 < textChunk.length; i2 += 1) {
              var c5 = textChunk.charCodeAt(i2);
              if (c5 === "\n".charCodeAt(0) || c5 === "\r".charCodeAt(0)) {
                n4 = i2;
              }
            }
            var chunk = (n4 !== -1 ? textBuffer : "") + textChunk.slice(0, n4 + 1);
            textBuffer = (n4 === -1 ? textBuffer : "") + textChunk.slice(n4 + 1);
            if (textChunk !== "") {
              wasActivity = Date.now();
              textLength += textChunk.length;
            }
            for (var position = 0; position < chunk.length; position += 1) {
              var c5 = chunk.charCodeAt(position);
              if (state2 === AFTER_CR && c5 === "\n".charCodeAt(0)) {
                state2 = FIELD_START;
              } else {
                if (state2 === AFTER_CR) {
                  state2 = FIELD_START;
                }
                if (c5 === "\r".charCodeAt(0) || c5 === "\n".charCodeAt(0)) {
                  if (state2 !== FIELD_START) {
                    if (state2 === FIELD) {
                      valueStart = position + 1;
                    }
                    var field = chunk.slice(fieldStart, valueStart - 1);
                    var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === " ".charCodeAt(0) ? 1 : 0), position);
                    if (field === "data") {
                      dataBuffer += "\n";
                      dataBuffer += value;
                    } else if (field === "id") {
                      lastEventIdBuffer = value;
                    } else if (field === "event") {
                      eventTypeBuffer = value;
                    } else if (field === "retry") {
                      initialRetry = parseDuration(value, initialRetry);
                      retry = initialRetry;
                    } else if (field === "heartbeatTimeout") {
                      heartbeatTimeout = parseDuration(value, heartbeatTimeout);
                      if (timeout !== 0) {
                        clearTimeout2(timeout);
                        timeout = setTimeout2(function() {
                          onTimeout();
                        }, heartbeatTimeout);
                      }
                    }
                  }
                  if (state2 === FIELD_START) {
                    if (dataBuffer !== "") {
                      lastEventId = lastEventIdBuffer;
                      if (eventTypeBuffer === "") {
                        eventTypeBuffer = "message";
                      }
                      var event = new MessageEvent(eventTypeBuffer, {
                        data: dataBuffer.slice(1),
                        lastEventId: lastEventIdBuffer
                      });
                      es.dispatchEvent(event);
                      if (eventTypeBuffer === "open") {
                        fire(es, es.onopen, event);
                      } else if (eventTypeBuffer === "message") {
                        fire(es, es.onmessage, event);
                      } else if (eventTypeBuffer === "error") {
                        fire(es, es.onerror, event);
                      }
                      if (currentState === CLOSED) {
                        return;
                      }
                    }
                    dataBuffer = "";
                    eventTypeBuffer = "";
                  }
                  state2 = c5 === "\r".charCodeAt(0) ? AFTER_CR : FIELD_START;
                } else {
                  if (state2 === FIELD_START) {
                    fieldStart = position;
                    state2 = FIELD;
                  }
                  if (state2 === FIELD) {
                    if (c5 === ":".charCodeAt(0)) {
                      valueStart = position + 1;
                      state2 = VALUE_START;
                    }
                  } else if (state2 === VALUE_START) {
                    state2 = VALUE;
                  }
                }
              }
            }
          }
        };
        var onFinish = function(error2) {
          if (currentState === OPEN || currentState === CONNECTING) {
            currentState = WAITING;
            if (timeout !== 0) {
              clearTimeout2(timeout);
              timeout = 0;
            }
            timeout = setTimeout2(function() {
              onTimeout();
            }, retry);
            retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
            es.readyState = CONNECTING;
            var event = new ErrorEvent("error", { error: error2 });
            es.dispatchEvent(event);
            fire(es, es.onerror, event);
            if (error2 != void 0) {
              console.error(error2);
            }
          }
        };
        var close = function() {
          currentState = CLOSED;
          if (abortController != void 0) {
            abortController.abort();
            abortController = void 0;
          }
          if (timeout !== 0) {
            clearTimeout2(timeout);
            timeout = 0;
          }
          es.readyState = CLOSED;
        };
        var onTimeout = function() {
          timeout = 0;
          if (currentState !== WAITING) {
            if (!wasActivity && abortController != void 0) {
              onFinish(new Error("No activity within " + heartbeatTimeout + " milliseconds. " + (currentState === CONNECTING ? "No response received." : textLength + " chars received.") + " Reconnecting."));
              if (abortController != void 0) {
                abortController.abort();
                abortController = void 0;
              }
            } else {
              var nextHeartbeat = Math.max((wasActivity || Date.now()) + heartbeatTimeout - Date.now(), 1);
              wasActivity = false;
              timeout = setTimeout2(function() {
                onTimeout();
              }, nextHeartbeat);
            }
            return;
          }
          wasActivity = false;
          textLength = 0;
          timeout = setTimeout2(function() {
            onTimeout();
          }, heartbeatTimeout);
          currentState = CONNECTING;
          dataBuffer = "";
          eventTypeBuffer = "";
          lastEventIdBuffer = lastEventId;
          textBuffer = "";
          fieldStart = 0;
          valueStart = 0;
          state2 = FIELD_START;
          var requestURL = url;
          if (url.slice(0, 5) !== "data:" && url.slice(0, 5) !== "blob:") {
            if (lastEventId !== "") {
              var i2 = url.indexOf("?");
              requestURL = i2 === -1 ? url : url.slice(0, i2 + 1) + url.slice(i2 + 1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g, function(p3, paramName) {
                return paramName === lastEventIdQueryParameterName ? "" : p3;
              });
              requestURL += (url.indexOf("?") === -1 ? "?" : "&") + lastEventIdQueryParameterName + "=" + encodeURIComponent(lastEventId);
            }
          }
          var withCredentials2 = es.withCredentials;
          var requestHeaders = {};
          requestHeaders["Accept"] = "text/event-stream";
          var headers3 = es.headers;
          if (headers3 != void 0) {
            for (var name in headers3) {
              if (Object.prototype.hasOwnProperty.call(headers3, name)) {
                requestHeaders[name] = headers3[name];
              }
            }
          }
          try {
            abortController = transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials2, requestHeaders);
          } catch (error2) {
            close();
            throw error2;
          }
        };
        es.url = url;
        es.readyState = CONNECTING;
        es.withCredentials = withCredentials;
        es.headers = headers2;
        es._close = close;
        onTimeout();
      }
      EventSourcePolyfill.prototype = Object.create(EventTarget2.prototype);
      EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
      EventSourcePolyfill.prototype.OPEN = OPEN;
      EventSourcePolyfill.prototype.CLOSED = CLOSED;
      EventSourcePolyfill.prototype.close = function() {
        this._close();
      };
      EventSourcePolyfill.CONNECTING = CONNECTING;
      EventSourcePolyfill.OPEN = OPEN;
      EventSourcePolyfill.CLOSED = CLOSED;
      EventSourcePolyfill.prototype.withCredentials = void 0;
      var R2 = NativeEventSource;
      if (XMLHttpRequest2 != void 0 && (NativeEventSource == void 0 || !("withCredentials" in NativeEventSource.prototype))) {
        R2 = EventSourcePolyfill;
      }
      (function(factory) {
        if (typeof module === "object" && typeof module.exports === "object") {
          var v2 = factory(exports);
          if (v2 !== void 0) module.exports = v2;
        } else if (typeof define === "function" && define.amd) {
          define(["exports"], factory);
        } else {
          factory(global2);
        }
      })(function(exports2) {
        exports2.EventSourcePolyfill = EventSourcePolyfill;
        exports2.NativeEventSource = NativeEventSource;
        exports2.EventSource = R2;
      });
    })(typeof globalThis === "undefined" ? typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : exports : globalThis);
  }
});

// node_modules/@sanity/eventsource/browser.js
var require_browser = __commonJS({
  "node_modules/@sanity/eventsource/browser.js"(exports, module) {
    module.exports = require_eventsource().EventSourcePolyfill;
  }
});

// node_modules/@sanity/client/dist/index.browser.js
function extractErrorProps(res) {
  const body2 = res.body, props = {
    response: res,
    statusCode: res.statusCode,
    responseBody: stringifyBody(body2, res),
    message: "",
    details: void 0
  };
  if (body2.error && body2.message)
    return props.message = `${body2.error} - ${body2.message}`, props;
  if (isMutationError(body2) || isActionError(body2)) {
    const allItems = body2.error.items || [], items = allItems.slice(0, 5).map((item2) => item2.error?.description).filter(Boolean);
    let itemsStr = items.length ? `:
- ${items.join(`
- `)}` : "";
    return allItems.length > 5 && (itemsStr += `
...and ${allItems.length - 5} more`), props.message = `${body2.error.description}${itemsStr}`, props.details = body2.error, props;
  }
  return body2.error && body2.error.description ? (props.message = body2.error.description, props.details = body2.error, props) : (props.message = body2.error || body2.message || httpErrorMessage(res), props);
}
function isMutationError(body2) {
  return isPlainObject(body2) && isPlainObject(body2.error) && body2.error.type === "mutationError" && typeof body2.error.description == "string";
}
function isActionError(body2) {
  return isPlainObject(body2) && isPlainObject(body2.error) && body2.error.type === "actionError" && typeof body2.error.description == "string";
}
function isPlainObject(obj) {
  return typeof obj == "object" && obj !== null && !Array.isArray(obj);
}
function httpErrorMessage(res) {
  const statusMessage = res.statusMessage ? ` ${res.statusMessage}` : "";
  return `${res.method}-request to ${res.url} resulted in HTTP ${res.statusCode}${statusMessage}`;
}
function stringifyBody(body2, res) {
  return (res.headers["content-type"] || "").toLowerCase().indexOf("application/json") !== -1 ? JSON.stringify(body2, null, 2) : body2;
}
function printWarnings() {
  const seen = {};
  return {
    onResponse: (res) => {
      const warn = res.headers["x-sanity-warning"], warnings = Array.isArray(warn) ? warn : [warn];
      for (const msg of warnings)
        !msg || seen[msg] || (seen[msg] = true, console.warn(msg));
      return res;
    }
  };
}
function defineHttpRequest(envMiddleware2) {
  return p([
    P({ shouldRetry }),
    ...envMiddleware2,
    printWarnings(),
    x(),
    E(),
    S(),
    httpError,
    A({ implementation: Observable })
  ]);
}
function shouldRetry(err, attempt, options2) {
  if (options2.maxRetries === 0) return false;
  const isSafe = options2.method === "GET" || options2.method === "HEAD", isQuery2 = (options2.uri || options2.url).startsWith("/data/query"), isRetriableResponse = err.response && (err.response.statusCode === 429 || err.response.statusCode === 502 || err.response.statusCode === 503);
  return (isSafe || isQuery2) && isRetriableResponse ? true : P.shouldRetry(err, attempt, options2);
}
function generateHelpUrl(slug) {
  return BASE_URL + slug;
}
function once2(fn) {
  let didCall = false, returnValue;
  return (...args) => (didCall || (returnValue = fn(...args), didCall = true), returnValue);
}
function validateApiVersion(apiVersion) {
  if (apiVersion === "1" || apiVersion === "X")
    return;
  const apiDate = new Date(apiVersion);
  if (!(/^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0))
    throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
}
function validateApiPerspective(perspective) {
  if (Array.isArray(perspective) && perspective.length > 1 && perspective.includes("raw"))
    throw new TypeError(
      'Invalid API perspective value: "raw". The raw-perspective can not be combined with other perspectives'
    );
}
function connectEventSource(initEventSource, events) {
  return defer(() => {
    const es = initEventSource();
    return isObservable(es) ? es : of(es);
  }).pipe(mergeMap((es) => connectWithESInstance(es, events)));
}
function connectWithESInstance(es, events) {
  return new Observable((observer) => {
    const emitOpen = events.includes("open"), emitReconnect = events.includes("reconnect");
    function onError(evt) {
      if ("data" in evt) {
        const [parseError, event] = parseEvent(evt);
        observer.error(
          parseError ? new MessageParseError("Unable to parse EventSource error message", { cause: event }) : new MessageError((event?.data).message, event)
        );
        return;
      }
      es.readyState === es.CLOSED ? observer.error(new ConnectionFailedError("EventSource connection failed")) : emitReconnect && observer.next({ type: "reconnect" });
    }
    function onOpen() {
      observer.next({ type: "open" });
    }
    function onMessage(message) {
      const [parseError, event] = parseEvent(message);
      if (parseError) {
        observer.error(
          new MessageParseError("Unable to parse EventSource message", { cause: parseError })
        );
        return;
      }
      if (message.type === "channelError") {
        observer.error(new ChannelError(extractErrorMessage(event?.data), event.data));
        return;
      }
      if (message.type === "disconnect") {
        observer.error(
          new DisconnectError(
            `Server disconnected client: ${event.data?.reason || "unknown error"}`
          )
        );
        return;
      }
      observer.next({
        type: message.type,
        id: message.lastEventId,
        ...event.data ? { data: event.data } : {}
      });
    }
    es.addEventListener("error", onError), emitOpen && es.addEventListener("open", onOpen);
    const cleanedEvents = [.../* @__PURE__ */ new Set([...REQUIRED_EVENTS, ...events])].filter((type) => type !== "error" && type !== "open" && type !== "reconnect");
    return cleanedEvents.forEach((type) => es.addEventListener(type, onMessage)), () => {
      es.removeEventListener("error", onError), emitOpen && es.removeEventListener("open", onOpen), cleanedEvents.forEach((type) => es.removeEventListener(type, onMessage)), es.close();
    };
  });
}
function parseEvent(message) {
  try {
    const data = typeof message.data == "string" && JSON.parse(message.data);
    return [
      null,
      {
        type: message.type,
        id: message.lastEventId,
        ...isEmptyObject(data) ? {} : { data }
      }
    ];
  } catch (err) {
    return [err, null];
  }
}
function extractErrorMessage(err) {
  return err.error ? err.error.description ? err.error.description : typeof err.error == "string" ? err.error : JSON.stringify(err.error, null, 2) : err.message || "Unknown listener error";
}
function isEmptyObject(data) {
  for (const _3 in data)
    return false;
  return true;
}
function getSelection(sel) {
  if (typeof sel == "string")
    return { id: sel };
  if (Array.isArray(sel))
    return { query: "*[_id in $ids]", params: { ids: sel } };
  if (typeof sel == "object" && sel !== null && "query" in sel && typeof sel.query == "string")
    return "params" in sel && typeof sel.params == "object" && sel.params !== null ? { query: sel.query, params: sel.params } : { query: sel.query };
  const selectionOpts = [
    "* Document ID (<docId>)",
    "* Array of document IDs",
    "* Object containing `query`"
  ].join(`
`);
  throw new Error(`Unknown selection - must be one of:

${selectionOpts}`);
}
function requestOptions(config2, overrides = {}) {
  const headers2 = {}, token = overrides.token || config2.token;
  token && (headers2.Authorization = `Bearer ${token}`), !overrides.useGlobalApi && !config2.useProjectHostname && config2.projectId && (headers2[projectHeader] = config2.projectId);
  const withCredentials = !!(typeof overrides.withCredentials > "u" ? config2.withCredentials : overrides.withCredentials), timeout = typeof overrides.timeout > "u" ? config2.timeout : overrides.timeout;
  return Object.assign({}, overrides, {
    headers: Object.assign({}, headers2, overrides.headers || {}),
    timeout: typeof timeout > "u" ? 5 * 60 * 1e3 : timeout,
    proxy: overrides.proxy || config2.proxy,
    json: true,
    withCredentials,
    fetch: typeof overrides.fetch == "object" && typeof config2.fetch == "object" ? { ...config2.fetch, ...overrides.fetch } : overrides.fetch || config2.fetch
  });
}
function _fetch(client2, httpRequest, _stega, query, _params = {}, options2 = {}) {
  const stega = "stega" in options2 ? {
    ..._stega || {},
    ...typeof options2.stega == "boolean" ? { enabled: options2.stega } : options2.stega || {}
  } : _stega, params = stega.enabled ? stegaClean(_params) : _params, mapResponse = options2.filterResponse === false ? (res) => res : (res) => res.result, { cache, next: next2, ...opts } = {
    // Opt out of setting a `signal` on an internal `fetch` if one isn't provided.
    // This is necessary in React Server Components to avoid opting out of Request Memoization.
    useAbortSignal: typeof options2.signal < "u",
    // Set `resultSourceMap' when stega is enabled, as it's required for encoding.
    resultSourceMap: stega.enabled ? "withKeyArraySelector" : options2.resultSourceMap,
    ...options2,
    // Default to not returning the query, unless `filterResponse` is `false`,
    // or `returnQuery` is explicitly set. `true` is the default in Content Lake, so skip if truthy
    returnQuery: options2.filterResponse === false && options2.returnQuery !== false
  }, reqOpts = typeof cache < "u" || typeof next2 < "u" ? { ...opts, fetch: { cache, next: next2 } } : opts, $request = _dataRequest(client2, httpRequest, "query", { query, params }, reqOpts);
  return stega.enabled ? $request.pipe(
    combineLatestWith(
      from(
        Promise.resolve().then(() => (init_stegaEncodeSourceMap(), stegaEncodeSourceMap_exports)).then(function(n4) {
          return n4.stegaEncodeSourceMap$1;
        }).then(
          ({ stegaEncodeSourceMap: stegaEncodeSourceMap2 }) => stegaEncodeSourceMap2
        )
      )
    ),
    map(
      ([res, stegaEncodeSourceMap2]) => {
        const result = stegaEncodeSourceMap2(res.result, res.resultSourceMap, stega);
        return mapResponse({ ...res, result });
      }
    )
  ) : $request.pipe(map(mapResponse));
}
function _getDocument(client2, httpRequest, id, opts = {}) {
  const options2 = {
    uri: _getDataUrl(client2, "doc", id),
    json: true,
    tag: opts.tag,
    signal: opts.signal
  };
  return _requestObservable(client2, httpRequest, options2).pipe(
    filter(isResponse),
    map((event) => event.body.documents && event.body.documents[0])
  );
}
function _getDocuments(client2, httpRequest, ids, opts = {}) {
  const options2 = {
    uri: _getDataUrl(client2, "doc", ids.join(",")),
    json: true,
    tag: opts.tag,
    signal: opts.signal
  };
  return _requestObservable(client2, httpRequest, options2).pipe(
    filter(isResponse),
    map((event) => {
      const indexed = indexBy(event.body.documents || [], (doc) => doc._id);
      return ids.map((id) => indexed[id] || null);
    })
  );
}
function _createIfNotExists(client2, httpRequest, doc, options2) {
  return requireDocumentId("createIfNotExists", doc), _create(client2, httpRequest, doc, "createIfNotExists", options2);
}
function _createOrReplace(client2, httpRequest, doc, options2) {
  return requireDocumentId("createOrReplace", doc), _create(client2, httpRequest, doc, "createOrReplace", options2);
}
function _delete(client2, httpRequest, selection, options2) {
  return _dataRequest(
    client2,
    httpRequest,
    "mutate",
    { mutations: [{ delete: getSelection(selection) }] },
    options2
  );
}
function _mutate(client2, httpRequest, mutations, options2) {
  let mut;
  mutations instanceof Patch || mutations instanceof ObservablePatch ? mut = { patch: mutations.serialize() } : mutations instanceof Transaction || mutations instanceof ObservableTransaction ? mut = mutations.serialize() : mut = mutations;
  const muts = Array.isArray(mut) ? mut : [mut], transactionId = options2 && options2.transactionId || void 0;
  return _dataRequest(client2, httpRequest, "mutate", { mutations: muts, transactionId }, options2);
}
function _action(client2, httpRequest, actions, options2) {
  const acts = Array.isArray(actions) ? actions : [actions], transactionId = options2 && options2.transactionId || void 0, skipCrossDatasetReferenceValidation = options2 && options2.skipCrossDatasetReferenceValidation || void 0, dryRun = options2 && options2.dryRun || void 0;
  return _dataRequest(
    client2,
    httpRequest,
    "actions",
    { actions: acts, transactionId, skipCrossDatasetReferenceValidation, dryRun },
    options2
  );
}
function _dataRequest(client2, httpRequest, endpoint, body2, options2 = {}) {
  const isMutation = endpoint === "mutate", isAction = endpoint === "actions", isQuery2 = endpoint === "query", strQuery = isMutation || isAction ? "" : encodeQueryString(body2), useGet = !isMutation && !isAction && strQuery.length < getQuerySizeLimit, stringQuery = useGet ? strQuery : "", returnFirst = options2.returnFirst, { timeout, token, tag, headers: headers2, returnQuery, lastLiveEventId, cacheMode } = options2, uri = _getDataUrl(client2, endpoint, stringQuery), reqOptions = {
    method: useGet ? "GET" : "POST",
    uri,
    json: true,
    body: useGet ? void 0 : body2,
    query: isMutation && getMutationQuery(options2),
    timeout,
    headers: headers2,
    token,
    tag,
    returnQuery,
    perspective: options2.perspective,
    resultSourceMap: options2.resultSourceMap,
    lastLiveEventId: Array.isArray(lastLiveEventId) ? lastLiveEventId[0] : lastLiveEventId,
    cacheMode,
    canUseCdn: isQuery2,
    signal: options2.signal,
    fetch: options2.fetch,
    useAbortSignal: options2.useAbortSignal,
    useCdn: options2.useCdn
  };
  return _requestObservable(client2, httpRequest, reqOptions).pipe(
    filter(isResponse),
    map(getBody),
    map((res) => {
      if (!isMutation)
        return res;
      const results = res.results || [];
      if (options2.returnDocuments)
        return returnFirst ? results[0] && results[0].document : results.map((mut) => mut.document);
      const key2 = returnFirst ? "documentId" : "documentIds", ids = returnFirst ? results[0] && results[0].id : results.map((mut) => mut.id);
      return {
        transactionId: res.transactionId,
        results,
        [key2]: ids
      };
    })
  );
}
function _create(client2, httpRequest, doc, op, options2 = {}) {
  const mutation = { [op]: doc }, opts = Object.assign({ returnFirst: true, returnDocuments: true }, options2);
  return _dataRequest(client2, httpRequest, "mutate", { mutations: [mutation] }, opts);
}
function _requestObservable(client2, httpRequest, options2) {
  const uri = options2.url || options2.uri, config2 = client2.config(), canUseCdn = typeof options2.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(options2.method || "GET") >= 0 && isData(client2, uri) : options2.canUseCdn;
  let useCdn = (options2.useCdn ?? config2.useCdn) && canUseCdn;
  const tag = options2.tag && config2.requestTagPrefix ? [config2.requestTagPrefix, options2.tag].join(".") : options2.tag || config2.requestTagPrefix;
  if (tag && options2.tag !== null && (options2.query = { tag: requestTag(tag), ...options2.query }), ["GET", "HEAD", "POST"].indexOf(options2.method || "GET") >= 0 && isQuery(client2, uri)) {
    const resultSourceMap = options2.resultSourceMap ?? config2.resultSourceMap;
    resultSourceMap !== void 0 && resultSourceMap !== false && (options2.query = { resultSourceMap, ...options2.query });
    const perspectiveOption = options2.perspective || config2.perspective;
    typeof perspectiveOption < "u" && (perspectiveOption === "previewDrafts" && printPreviewDraftsDeprecationWarning(), validateApiPerspective(perspectiveOption), options2.query = {
      perspective: Array.isArray(perspectiveOption) ? perspectiveOption.join(",") : perspectiveOption,
      ...options2.query
    }, (Array.isArray(perspectiveOption) && perspectiveOption.length > 0 || // previewDrafts was renamed to drafts, but keep for backwards compat
    perspectiveOption === "previewDrafts" || perspectiveOption === "drafts") && useCdn && (useCdn = false, printCdnPreviewDraftsWarning())), options2.lastLiveEventId && (options2.query = { ...options2.query, lastLiveEventId: options2.lastLiveEventId }), options2.returnQuery === false && (options2.query = { returnQuery: "false", ...options2.query }), useCdn && options2.cacheMode == "noStale" && (options2.query = { cacheMode: "noStale", ...options2.query });
  }
  const reqOptions = requestOptions(
    config2,
    Object.assign({}, options2, {
      url: _getUrl(client2, uri, useCdn)
    })
  ), request = new Observable(
    (subscriber) => httpRequest(reqOptions, config2.requester).subscribe(subscriber)
  );
  return options2.signal ? request.pipe(_withAbortSignal(options2.signal)) : request;
}
function _request(client2, httpRequest, options2) {
  return _requestObservable(client2, httpRequest, options2).pipe(
    filter((event) => event.type === "response"),
    map((event) => event.body)
  );
}
function _getDataUrl(client2, operation, path) {
  const config2 = client2.config();
  if (config2["~experimental_resource"]) {
    resourceConfig(config2);
    const resourceBase = resourceDataBase(config2), uri2 = path !== void 0 ? `${operation}/${path}` : operation;
    return `${resourceBase}/${uri2}`.replace(/\/($|\?)/, "$1");
  }
  const catalog = hasDataset(config2), baseUri = `/${operation}/${catalog}`;
  return `/data${path !== void 0 ? `${baseUri}/${path}` : baseUri}`.replace(/\/($|\?)/, "$1");
}
function _getUrl(client2, uri, canUseCdn = false) {
  const { url, cdnUrl } = client2.config();
  return `${canUseCdn ? cdnUrl : url}/${uri.replace(/^\//, "")}`;
}
function _withAbortSignal(signal) {
  return (input) => new Observable((observer) => {
    const abort2 = () => observer.error(_createAbortError(signal));
    if (signal && signal.aborted) {
      abort2();
      return;
    }
    const subscription = input.subscribe(observer);
    return signal.addEventListener("abort", abort2), () => {
      signal.removeEventListener("abort", abort2), subscription.unsubscribe();
    };
  });
}
function _createAbortError(signal) {
  if (isDomExceptionSupported)
    return new DOMException(signal?.reason ?? "The operation was aborted.", "AbortError");
  const error2 = new Error(signal?.reason ?? "The operation was aborted.");
  return error2.name = "AbortError", error2;
}
function _upload(client2, httpRequest, assetType, body2, opts = {}) {
  validateAssetType(assetType);
  let meta = opts.extract || void 0;
  meta && !meta.length && (meta = ["none"]);
  const config2 = client2.config(), options2 = optionsFromFile(opts, body2), { tag, label, title, description, creditLine, filename, source: source2 } = options2, query = {
    label,
    title,
    description,
    filename,
    meta,
    creditLine
  };
  return source2 && (query.sourceId = source2.id, query.sourceName = source2.name, query.sourceUrl = source2.url), _requestObservable(client2, httpRequest, {
    tag,
    method: "POST",
    timeout: options2.timeout || 0,
    uri: buildAssetUploadUrl(config2, assetType),
    headers: options2.contentType ? { "Content-Type": options2.contentType } : {},
    query,
    body: body2
  });
}
function buildAssetUploadUrl(config2, assetType) {
  const assetTypeEndpoint = assetType === "image" ? "images" : "files";
  if (config2["~experimental_resource"]) {
    const { type, id } = config2["~experimental_resource"];
    switch (type) {
      case "dataset":
        throw new Error(
          "Assets are not supported for dataset resources, yet. Configure the client with `{projectId: <projectId>, dataset: <datasetId>}` instead."
        );
      case "canvas":
        return `/canvases/${id}/assets/${assetTypeEndpoint}`;
      case "media-library":
        return `/media-libraries/${id}/upload`;
      case "dashboard":
        return `/dashboards/${id}/assets/${assetTypeEndpoint}`;
      default:
        throw new Error(`Unsupported resource type: ${type.toString()}`);
    }
  }
  const dataset2 = hasDataset(config2);
  return `assets/${assetTypeEndpoint}/${dataset2}`;
}
function optionsFromFile(opts, file) {
  return typeof File > "u" || !(file instanceof File) ? opts : Object.assign(
    {
      filename: opts.preserveFilename === false ? void 0 : file.name,
      contentType: file.type
    },
    opts
  );
}
function reconnectOnConnectionFailure() {
  return function(source2) {
    return source2.pipe(
      catchError((err, caught) => err instanceof ConnectionFailedError ? concat(of({ type: "reconnect" }), timer(1e3).pipe(mergeMap(() => caught))) : throwError(() => err))
    );
  };
}
function _listen(query, params, opts = {}) {
  const { url, token, withCredentials, requestTagPrefix } = this.config(), tag = opts.tag && requestTagPrefix ? [requestTagPrefix, opts.tag].join(".") : opts.tag, options2 = { ...defaults(opts, defaultOptions), tag }, listenOpts = pick(options2, possibleOptions), qs = encodeQueryString({ query, params, options: { tag, ...listenOpts } }), uri = `${url}${_getDataUrl(this, "listen", qs)}`;
  if (uri.length > MAX_URL_LENGTH)
    return throwError(() => new Error("Query too large for listener"));
  const listenFor = options2.events ? options2.events : ["mutation"], esOptions = {};
  return withCredentials && (esOptions.withCredentials = true), token && (esOptions.headers = {
    Authorization: `Bearer ${token}`
  }), connectEventSource(() => (
    // use polyfill if there is no global EventSource or if we need to set headers
    (typeof EventSource > "u" || esOptions.headers ? eventSourcePolyfill : of(EventSource)).pipe(map((EventSource2) => new EventSource2(uri, esOptions)))
  ), listenFor).pipe(
    reconnectOnConnectionFailure(),
    filter((event) => listenFor.includes(event.type)),
    map(
      (event) => ({
        type: event.type,
        ..."data" in event ? event.data : {}
      })
    )
  );
}
function shareReplayLatest(configOrPredicate, config2) {
  return _shareReplayLatest(
    typeof configOrPredicate == "function" ? { predicate: configOrPredicate, ...config2 } : configOrPredicate
  );
}
function _shareReplayLatest(config2) {
  return (source2) => {
    let latest, emitted = false;
    const { predicate, ...shareConfig } = config2, wrapped = source2.pipe(
      tap((value) => {
        config2.predicate(value) && (emitted = true, latest = value);
      }),
      finalize(() => {
        emitted = false, latest = void 0;
      }),
      share(shareConfig)
    ), emitLatest = new Observable((subscriber) => {
      emitted && subscriber.next(
        // this cast is safe because of the emitted check which asserts that we got T from the source
        latest
      ), subscriber.complete();
    });
    return merge(wrapped, emitLatest);
  };
}
function fetchObservable(url, init2) {
  return new Observable((observer) => {
    const controller2 = new AbortController(), signal = controller2.signal;
    return fetch(url, { ...init2, signal: controller2.signal }).then(
      (response) => {
        observer.next(response), observer.complete();
      },
      (err) => {
        signal.aborted || observer.error(err);
      }
    ), () => controller2.abort();
  });
}
function _modify(client2, httpRequest, method, name, options2) {
  return resourceGuard("dataset", client2.config()), dataset(name), _request(client2, httpRequest, {
    method,
    uri: `/datasets/${name}`,
    body: options2,
    tag: null
  });
}
function defineCreateClientExports(envMiddleware2, ClassConstructor) {
  return { requester: defineHttpRequest(envMiddleware2), createClient: (config2) => {
    const clientRequester = defineHttpRequest(envMiddleware2);
    return new ClassConstructor(
      (options2, requester2) => (requester2 || clientRequester)({
        maxRedirects: 0,
        maxRetries: config2.maxRetries,
        retryDelay: config2.retryDelay,
        ...options2
      }),
      config2
    );
  } };
}
function defineDeprecatedCreateClient(createClient2) {
  return function(config2) {
    return printNoDefaultExport(), createClient2(config2);
  };
}
var ClientError, ServerError, CorsOriginError, httpError, BASE_URL, VALID_ASSET_TYPES, VALID_INSERT_LOCATIONS, dataset, projectId, validateAssetType, validateObject, validateDocumentId, requireDocumentId, validateInsert, hasDataset, requestTag, resourceConfig, resourceGuard, createWarningPrinter, printCdnAndWithCredentialsWarning, printCdnWarning, printCdnPreviewDraftsWarning, printPreviewDraftsDeprecationWarning, printBrowserTokenWarning, printCredentialedTokenWarning, printNoApiVersionSpecifiedWarning, printNoDefaultExport, defaultCdnHost, defaultConfig, LOCALHOSTS, isLocal, initConfig, ConnectionFailedError, DisconnectError, ChannelError, MessageError, MessageParseError, REQUIRED_EVENTS, BasePatch, _client, _ObservablePatch, ObservablePatch, _client2, _Patch, Patch, defaultMutateOptions, BaseTransaction, _client3, _Transaction, Transaction, _client4, _ObservableTransaction, ObservableTransaction, projectHeader, encodeQueryString, excludeFalsey, getMutationQuery, isResponse, getBody, indexBy, getQuerySizeLimit, hasDataConfig, isQuery, isMutate, isDoc, isListener, isHistory, isData, isDomExceptionSupported, resourceDataBase, _client5, _httpRequest, ObservableAssetsClient, _client6, _httpRequest2, AssetsClient, defaults, pick, eventSourcePolyfill, MAX_URL_LENGTH, possibleOptions, defaultOptions, requiredApiVersion, _client7, LiveClient, eventsCache, _client8, _httpRequest3, ObservableDatasetsClient, _client9, _httpRequest4, DatasetsClient, _client10, _httpRequest5, ObservableProjectsClient, _client11, _httpRequest6, ProjectsClient, _client12, _httpRequest7, ObservableUsersClient, _client13, _httpRequest8, UsersClient, _clientConfig, _httpRequest9, _ObservableSanityClient, ObservableSanityClient, _clientConfig2, _httpRequest10, _SanityClient, SanityClient, envMiddleware, exp, requester, createClient, deprecatedCreateClient;
var init_index_browser2 = __esm({
  "node_modules/@sanity/client/dist/index.browser.js"() {
    init_index_browser();
    init_middleware_browser();
    init_esm5();
    init_stegaClean();
    init_operators();
    ClientError = class extends Error {
      constructor(res) {
        const props = extractErrorProps(res);
        super(props.message);
        __publicField(this, "response");
        __publicField(this, "statusCode", 400);
        __publicField(this, "responseBody");
        __publicField(this, "details");
        Object.assign(this, props);
      }
    };
    ServerError = class extends Error {
      constructor(res) {
        const props = extractErrorProps(res);
        super(props.message);
        __publicField(this, "response");
        __publicField(this, "statusCode", 500);
        __publicField(this, "responseBody");
        __publicField(this, "details");
        Object.assign(this, props);
      }
    };
    CorsOriginError = class extends Error {
      constructor({ projectId: projectId2 }) {
        super("CorsOriginError");
        __publicField(this, "projectId");
        __publicField(this, "addOriginUrl");
        this.name = "CorsOriginError", this.projectId = projectId2;
        const url = new URL(`https://sanity.io/manage/project/${projectId2}/api`);
        if (typeof location < "u") {
          const { origin: origin2 } = location;
          url.searchParams.set("cors", "add"), url.searchParams.set("origin", origin2), this.addOriginUrl = url, this.message = `The current origin is not allowed to connect to the Live Content API. Add it here: ${url}`;
        } else
          this.message = `The current origin is not allowed to connect to the Live Content API. Change your configuration here: ${url}`;
      }
    };
    httpError = {
      onResponse: (res) => {
        if (res.statusCode >= 500)
          throw new ServerError(res);
        if (res.statusCode >= 400)
          throw new ClientError(res);
        return res;
      }
    };
    BASE_URL = "https://www.sanity.io/help/";
    VALID_ASSET_TYPES = ["image", "file"];
    VALID_INSERT_LOCATIONS = ["before", "after", "replace"];
    dataset = (name) => {
      if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(name))
        throw new Error(
          "Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters"
        );
    };
    projectId = (id) => {
      if (!/^[-a-z0-9]+$/i.test(id))
        throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
    };
    validateAssetType = (type) => {
      if (VALID_ASSET_TYPES.indexOf(type) === -1)
        throw new Error(`Invalid asset type: ${type}. Must be one of ${VALID_ASSET_TYPES.join(", ")}`);
    };
    validateObject = (op, val) => {
      if (val === null || typeof val != "object" || Array.isArray(val))
        throw new Error(`${op}() takes an object of properties`);
    };
    validateDocumentId = (op, id) => {
      if (typeof id != "string" || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(id) || id.includes(".."))
        throw new Error(`${op}(): "${id}" is not a valid document ID`);
    };
    requireDocumentId = (op, doc) => {
      if (!doc._id)
        throw new Error(`${op}() requires that the document contains an ID ("_id" property)`);
      validateDocumentId(op, doc._id);
    };
    validateInsert = (at, selector, items) => {
      const signature = "insert(at, selector, items)";
      if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
        const valid = VALID_INSERT_LOCATIONS.map((loc) => `"${loc}"`).join(", ");
        throw new Error(`${signature} takes an "at"-argument which is one of: ${valid}`);
      }
      if (typeof selector != "string")
        throw new Error(`${signature} takes a "selector"-argument which must be a string`);
      if (!Array.isArray(items))
        throw new Error(`${signature} takes an "items"-argument which must be an array`);
    };
    hasDataset = (config2) => {
      if (!config2.dataset)
        throw new Error("`dataset` must be provided to perform queries");
      return config2.dataset || "";
    };
    requestTag = (tag) => {
      if (typeof tag != "string" || !/^[a-z0-9._-]{1,75}$/i.test(tag))
        throw new Error(
          "Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long."
        );
      return tag;
    };
    resourceConfig = (config2) => {
      if (!config2["~experimental_resource"])
        throw new Error("`resource` must be provided to perform resource queries");
      const { type, id } = config2["~experimental_resource"];
      switch (type) {
        case "dataset": {
          if (id.split(".").length !== 2)
            throw new Error('Dataset resource ID must be in the format "project.dataset"');
          return;
        }
        case "dashboard":
        case "media-library":
        case "canvas":
          return;
        default:
          throw new Error(`Unsupported resource type: ${type.toString()}`);
      }
    };
    resourceGuard = (service, config2) => {
      if (config2["~experimental_resource"])
        throw new Error(`\`${service}\` does not support resource-based operations`);
    };
    createWarningPrinter = (message) => (
      // eslint-disable-next-line no-console
      once2((...args) => console.warn(message.join(" "), ...args))
    );
    printCdnAndWithCredentialsWarning = createWarningPrinter([
      "Because you set `withCredentials` to true, we will override your `useCdn`",
      "setting to be false since (cookie-based) credentials are never set on the CDN"
    ]);
    printCdnWarning = createWarningPrinter([
      "Since you haven't set a value for `useCdn`, we will deliver content using our",
      "global, edge-cached API-CDN. If you wish to have content delivered faster, set",
      "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."
    ]);
    printCdnPreviewDraftsWarning = createWarningPrinter([
      "The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.",
      "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."
    ]);
    printPreviewDraftsDeprecationWarning = createWarningPrinter([
      "The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version"
    ]);
    printBrowserTokenWarning = createWarningPrinter([
      "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
      `See ${generateHelpUrl(
        "js-client-browser-token"
      )} for more information and how to hide this warning.`
    ]);
    printCredentialedTokenWarning = createWarningPrinter([
      "You have configured Sanity client to use a token, but also provided `withCredentials: true`.",
      "This is no longer supported - only token will be used - remove `withCredentials: true`."
    ]);
    printNoApiVersionSpecifiedWarning = createWarningPrinter([
      "Using the Sanity client without specifying an API version is deprecated.",
      `See ${generateHelpUrl("js-client-api-version")}`
    ]);
    printNoDefaultExport = createWarningPrinter([
      "The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."
    ]);
    defaultCdnHost = "apicdn.sanity.io";
    defaultConfig = {
      apiHost: "https://api.sanity.io",
      apiVersion: "1",
      useProjectHostname: true,
      stega: { enabled: false }
    };
    LOCALHOSTS = ["localhost", "127.0.0.1", "0.0.0.0"];
    isLocal = (host) => LOCALHOSTS.indexOf(host) !== -1;
    initConfig = (config2, prevConfig) => {
      const specifiedConfig = {
        ...prevConfig,
        ...config2,
        stega: {
          ...typeof prevConfig.stega == "boolean" ? { enabled: prevConfig.stega } : prevConfig.stega || defaultConfig.stega,
          ...typeof config2.stega == "boolean" ? { enabled: config2.stega } : config2.stega || {}
        }
      };
      specifiedConfig.apiVersion || printNoApiVersionSpecifiedWarning();
      const newConfig = {
        ...defaultConfig,
        ...specifiedConfig
      }, projectBased = newConfig.useProjectHostname && !newConfig["~experimental_resource"];
      if (typeof Promise > "u") {
        const helpUrl = generateHelpUrl("js-client-promise-polyfill");
        throw new Error(`No native Promise-implementation found, polyfill needed - see ${helpUrl}`);
      }
      if (projectBased && !newConfig.projectId)
        throw new Error("Configuration must contain `projectId`");
      if (newConfig["~experimental_resource"] && resourceConfig(newConfig), typeof newConfig.perspective < "u" && validateApiPerspective(newConfig.perspective), "encodeSourceMap" in newConfig)
        throw new Error(
          "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?"
        );
      if ("encodeSourceMapAtPath" in newConfig)
        throw new Error(
          "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?"
        );
      if (typeof newConfig.stega.enabled != "boolean")
        throw new Error(`stega.enabled must be a boolean, received ${newConfig.stega.enabled}`);
      if (newConfig.stega.enabled && newConfig.stega.studioUrl === void 0)
        throw new Error("stega.studioUrl must be defined when stega.enabled is true");
      if (newConfig.stega.enabled && typeof newConfig.stega.studioUrl != "string" && typeof newConfig.stega.studioUrl != "function")
        throw new Error(
          `stega.studioUrl must be a string or a function, received ${newConfig.stega.studioUrl}`
        );
      const isBrowser = typeof window < "u" && window.location && window.location.hostname, isLocalhost = isBrowser && isLocal(window.location.hostname), hasToken = !!newConfig.token;
      newConfig.withCredentials && hasToken && (printCredentialedTokenWarning(), newConfig.withCredentials = false), isBrowser && isLocalhost && hasToken && newConfig.ignoreBrowserTokenWarning !== true ? printBrowserTokenWarning() : typeof newConfig.useCdn > "u" && printCdnWarning(), projectBased && projectId(newConfig.projectId), newConfig.dataset && dataset(newConfig.dataset), "requestTagPrefix" in newConfig && (newConfig.requestTagPrefix = newConfig.requestTagPrefix ? requestTag(newConfig.requestTagPrefix).replace(/\.+$/, "") : void 0), newConfig.apiVersion = `${newConfig.apiVersion}`.replace(/^v/, ""), newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost, newConfig.useCdn === true && newConfig.withCredentials && printCdnAndWithCredentialsWarning(), newConfig.useCdn = newConfig.useCdn !== false && !newConfig.withCredentials, validateApiVersion(newConfig.apiVersion);
      const hostParts = newConfig.apiHost.split("://", 2), protocol = hostParts[0], host = hostParts[1], cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;
      return projectBased ? (newConfig.url = `${protocol}://${newConfig.projectId}.${host}/v${newConfig.apiVersion}`, newConfig.cdnUrl = `${protocol}://${newConfig.projectId}.${cdnHost}/v${newConfig.apiVersion}`) : (newConfig.url = `${newConfig.apiHost}/v${newConfig.apiVersion}`, newConfig.cdnUrl = newConfig.url), newConfig;
    };
    ConnectionFailedError = class extends Error {
      constructor() {
        super(...arguments);
        __publicField(this, "name", "ConnectionFailedError");
      }
    };
    DisconnectError = class extends Error {
      constructor(message, reason, options2 = {}) {
        super(message, options2);
        __publicField(this, "name", "DisconnectError");
        __publicField(this, "reason");
        this.reason = reason;
      }
    };
    ChannelError = class extends Error {
      constructor(message, data) {
        super(message);
        __publicField(this, "name", "ChannelError");
        __publicField(this, "data");
        this.data = data;
      }
    };
    MessageError = class extends Error {
      constructor(message, data, options2 = {}) {
        super(message, options2);
        __publicField(this, "name", "MessageError");
        __publicField(this, "data");
        this.data = data;
      }
    };
    MessageParseError = class extends Error {
      constructor() {
        super(...arguments);
        __publicField(this, "name", "MessageParseError");
      }
    };
    REQUIRED_EVENTS = ["channelError", "disconnect"];
    BasePatch = class {
      constructor(selection, operations = {}) {
        __publicField(this, "selection");
        __publicField(this, "operations");
        this.selection = selection, this.operations = operations;
      }
      /**
       * Sets the given attributes to the document. Does NOT merge objects.
       * The operation is added to the current patch, ready to be commited by `commit()`
       *
       * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
       */
      set(attrs) {
        return this._assign("set", attrs);
      }
      /**
       * Sets the given attributes to the document if they are not currently set. Does NOT merge objects.
       * The operation is added to the current patch, ready to be commited by `commit()`
       *
       * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
       */
      setIfMissing(attrs) {
        return this._assign("setIfMissing", attrs);
      }
      /**
       * Performs a "diff-match-patch" operation on the string attributes provided.
       * The operation is added to the current patch, ready to be commited by `commit()`
       *
       * @param attrs - Attributes to perform operation on. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "dmp"\}
       */
      diffMatchPatch(attrs) {
        return validateObject("diffMatchPatch", attrs), this._assign("diffMatchPatch", attrs);
      }
      /**
       * Unsets the attribute paths provided.
       * The operation is added to the current patch, ready to be commited by `commit()`
       *
       * @param attrs - Attribute paths to unset.
       */
      unset(attrs) {
        if (!Array.isArray(attrs))
          throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
        return this.operations = Object.assign({}, this.operations, { unset: attrs }), this;
      }
      /**
       * Increment a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
       *
       * @param attrs - Object of attribute paths to increment, values representing the number to increment by.
       */
      inc(attrs) {
        return this._assign("inc", attrs);
      }
      /**
       * Decrement a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
       *
       * @param attrs - Object of attribute paths to decrement, values representing the number to decrement by.
       */
      dec(attrs) {
        return this._assign("dec", attrs);
      }
      /**
       * Provides methods for modifying arrays, by inserting, appending and replacing elements via a JSONPath expression.
       *
       * @param at - Location to insert at, relative to the given selector, or 'replace' the matched path
       * @param selector - JSONPath expression, eg `comments[-1]` or `blocks[_key=="abc123"]`
       * @param items - Array of items to insert/replace
       */
      insert(at, selector, items) {
        return validateInsert(at, selector, items), this._assign("insert", { [at]: selector, items });
      }
      /**
       * Append the given items to the array at the given JSONPath
       *
       * @param selector - Attribute/path to append to, eg `comments` or `person.hobbies`
       * @param items - Array of items to append to the array
       */
      append(selector, items) {
        return this.insert("after", `${selector}[-1]`, items);
      }
      /**
       * Prepend the given items to the array at the given JSONPath
       *
       * @param selector - Attribute/path to prepend to, eg `comments` or `person.hobbies`
       * @param items - Array of items to prepend to the array
       */
      prepend(selector, items) {
        return this.insert("before", `${selector}[0]`, items);
      }
      /**
       * Change the contents of an array by removing existing elements and/or adding new elements.
       *
       * @param selector - Attribute or JSONPath expression for array
       * @param start - Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.x
       * @param deleteCount - An integer indicating the number of old array elements to remove.
       * @param items - The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
       */
      splice(selector, start, deleteCount, items) {
        const delAll = typeof deleteCount > "u" || deleteCount === -1, startIndex = start < 0 ? start - 1 : start, delCount = delAll ? -1 : Math.max(0, start + deleteCount), delRange = startIndex < 0 && delCount >= 0 ? "" : delCount, rangeSelector = `${selector}[${startIndex}:${delRange}]`;
        return this.insert("replace", rangeSelector, items || []);
      }
      /**
       * Adds a revision clause, preventing the document from being patched if the `_rev` property does not match the given value
       *
       * @param rev - Revision to lock the patch to
       */
      ifRevisionId(rev) {
        return this.operations.ifRevisionID = rev, this;
      }
      /**
       * Return a plain JSON representation of the patch
       */
      serialize() {
        return { ...getSelection(this.selection), ...this.operations };
      }
      /**
       * Return a plain JSON representation of the patch
       */
      toJSON() {
        return this.serialize();
      }
      /**
       * Clears the patch of all operations
       */
      reset() {
        return this.operations = {}, this;
      }
      _assign(op, props, merge2 = true) {
        return validateObject(op, props), this.operations = Object.assign({}, this.operations, {
          [op]: Object.assign({}, merge2 && this.operations[op] || {}, props)
        }), this;
      }
      _set(op, props) {
        return this._assign(op, props, false);
      }
    };
    _ObservablePatch = class _ObservablePatch extends BasePatch {
      constructor(selection, operations, client2) {
        super(selection, operations);
        __privateAdd(this, _client);
        __privateSet(this, _client, client2);
      }
      /**
       * Clones the patch
       */
      clone() {
        return new _ObservablePatch(this.selection, { ...this.operations }, __privateGet(this, _client));
      }
      commit(options2) {
        if (!__privateGet(this, _client))
          throw new Error(
            "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
          );
        const returnFirst = typeof this.selection == "string", opts = Object.assign({ returnFirst, returnDocuments: true }, options2);
        return __privateGet(this, _client).mutate({ patch: this.serialize() }, opts);
      }
    };
    _client = new WeakMap();
    ObservablePatch = _ObservablePatch;
    _Patch = class _Patch extends BasePatch {
      constructor(selection, operations, client2) {
        super(selection, operations);
        __privateAdd(this, _client2);
        __privateSet(this, _client2, client2);
      }
      /**
       * Clones the patch
       */
      clone() {
        return new _Patch(this.selection, { ...this.operations }, __privateGet(this, _client2));
      }
      commit(options2) {
        if (!__privateGet(this, _client2))
          throw new Error(
            "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
          );
        const returnFirst = typeof this.selection == "string", opts = Object.assign({ returnFirst, returnDocuments: true }, options2);
        return __privateGet(this, _client2).mutate({ patch: this.serialize() }, opts);
      }
    };
    _client2 = new WeakMap();
    Patch = _Patch;
    defaultMutateOptions = { returnDocuments: false };
    BaseTransaction = class {
      constructor(operations = [], transactionId) {
        __publicField(this, "operations");
        __publicField(this, "trxId");
        this.operations = operations, this.trxId = transactionId;
      }
      /**
       * Creates a new Sanity document. If `_id` is provided and already exists, the mutation will fail. If no `_id` is given, one will automatically be generated by the database.
       * The operation is added to the current transaction, ready to be commited by `commit()`
       *
       * @param doc - Document to create. Requires a `_type` property.
       */
      create(doc) {
        return validateObject("create", doc), this._add({ create: doc });
      }
      /**
       * Creates a new Sanity document. If a document with the same `_id` already exists, the create operation will be ignored.
       * The operation is added to the current transaction, ready to be commited by `commit()`
       *
       * @param doc - Document to create if it does not already exist. Requires `_id` and `_type` properties.
       */
      createIfNotExists(doc) {
        const op = "createIfNotExists";
        return validateObject(op, doc), requireDocumentId(op, doc), this._add({ [op]: doc });
      }
      /**
       * Creates a new Sanity document, or replaces an existing one if the same `_id` is already used.
       * The operation is added to the current transaction, ready to be commited by `commit()`
       *
       * @param doc - Document to create or replace. Requires `_id` and `_type` properties.
       */
      createOrReplace(doc) {
        const op = "createOrReplace";
        return validateObject(op, doc), requireDocumentId(op, doc), this._add({ [op]: doc });
      }
      /**
       * Deletes the document with the given document ID
       * The operation is added to the current transaction, ready to be commited by `commit()`
       *
       * @param documentId - Document ID to delete
       */
      delete(documentId) {
        return validateDocumentId("delete", documentId), this._add({ delete: { id: documentId } });
      }
      transactionId(id) {
        return id ? (this.trxId = id, this) : this.trxId;
      }
      /**
       * Return a plain JSON representation of the transaction
       */
      serialize() {
        return [...this.operations];
      }
      /**
       * Return a plain JSON representation of the transaction
       */
      toJSON() {
        return this.serialize();
      }
      /**
       * Clears the transaction of all operations
       */
      reset() {
        return this.operations = [], this;
      }
      _add(mut) {
        return this.operations.push(mut), this;
      }
    };
    _Transaction = class _Transaction extends BaseTransaction {
      constructor(operations, client2, transactionId) {
        super(operations, transactionId);
        __privateAdd(this, _client3);
        __privateSet(this, _client3, client2);
      }
      /**
       * Clones the transaction
       */
      clone() {
        return new _Transaction([...this.operations], __privateGet(this, _client3), this.trxId);
      }
      commit(options2) {
        if (!__privateGet(this, _client3))
          throw new Error(
            "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
          );
        return __privateGet(this, _client3).mutate(
          this.serialize(),
          Object.assign({ transactionId: this.trxId }, defaultMutateOptions, options2 || {})
        );
      }
      patch(patchOrDocumentId, patchOps) {
        const isBuilder = typeof patchOps == "function", isPatch = typeof patchOrDocumentId != "string" && patchOrDocumentId instanceof Patch, isMutationSelection = typeof patchOrDocumentId == "object" && ("query" in patchOrDocumentId || "id" in patchOrDocumentId);
        if (isPatch)
          return this._add({ patch: patchOrDocumentId.serialize() });
        if (isBuilder) {
          const patch = patchOps(new Patch(patchOrDocumentId, {}, __privateGet(this, _client3)));
          if (!(patch instanceof Patch))
            throw new Error("function passed to `patch()` must return the patch");
          return this._add({ patch: patch.serialize() });
        }
        if (isMutationSelection) {
          const patch = new Patch(patchOrDocumentId, patchOps || {}, __privateGet(this, _client3));
          return this._add({ patch: patch.serialize() });
        }
        return this._add({ patch: { id: patchOrDocumentId, ...patchOps } });
      }
    };
    _client3 = new WeakMap();
    Transaction = _Transaction;
    _ObservableTransaction = class _ObservableTransaction extends BaseTransaction {
      constructor(operations, client2, transactionId) {
        super(operations, transactionId);
        __privateAdd(this, _client4);
        __privateSet(this, _client4, client2);
      }
      /**
       * Clones the transaction
       */
      clone() {
        return new _ObservableTransaction([...this.operations], __privateGet(this, _client4), this.trxId);
      }
      commit(options2) {
        if (!__privateGet(this, _client4))
          throw new Error(
            "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
          );
        return __privateGet(this, _client4).mutate(
          this.serialize(),
          Object.assign({ transactionId: this.trxId }, defaultMutateOptions, options2 || {})
        );
      }
      patch(patchOrDocumentId, patchOps) {
        const isBuilder = typeof patchOps == "function";
        if (typeof patchOrDocumentId != "string" && patchOrDocumentId instanceof ObservablePatch)
          return this._add({ patch: patchOrDocumentId.serialize() });
        if (isBuilder) {
          const patch = patchOps(new ObservablePatch(patchOrDocumentId, {}, __privateGet(this, _client4)));
          if (!(patch instanceof ObservablePatch))
            throw new Error("function passed to `patch()` must return the patch");
          return this._add({ patch: patch.serialize() });
        }
        return this._add({ patch: { id: patchOrDocumentId, ...patchOps } });
      }
    };
    _client4 = new WeakMap();
    ObservableTransaction = _ObservableTransaction;
    projectHeader = "X-Sanity-Project-ID";
    encodeQueryString = ({
      query,
      params = {},
      options: options2 = {}
    }) => {
      const searchParams = new URLSearchParams(), { tag, includeMutations, returnQuery, ...opts } = options2;
      tag && searchParams.append("tag", tag), searchParams.append("query", query);
      for (const [key2, value] of Object.entries(params))
        searchParams.append(`$${key2}`, JSON.stringify(value));
      for (const [key2, value] of Object.entries(opts))
        value && searchParams.append(key2, `${value}`);
      return returnQuery === false && searchParams.append("returnQuery", "false"), includeMutations === false && searchParams.append("includeMutations", "false"), `?${searchParams}`;
    };
    excludeFalsey = (param, defValue) => param === false ? void 0 : typeof param > "u" ? defValue : param;
    getMutationQuery = (options2 = {}) => ({
      dryRun: options2.dryRun,
      returnIds: true,
      returnDocuments: excludeFalsey(options2.returnDocuments, true),
      visibility: options2.visibility || "sync",
      autoGenerateArrayKeys: options2.autoGenerateArrayKeys,
      skipCrossDatasetReferenceValidation: options2.skipCrossDatasetReferenceValidation
    });
    isResponse = (event) => event.type === "response";
    getBody = (event) => event.body;
    indexBy = (docs, attr2) => docs.reduce((indexed, doc) => (indexed[attr2(doc)] = doc, indexed), /* @__PURE__ */ Object.create(null));
    getQuerySizeLimit = 11264;
    hasDataConfig = (client2) => client2.config().dataset !== void 0 && client2.config().projectId !== void 0 || client2.config()["~experimental_resource"] !== void 0;
    isQuery = (client2, uri) => hasDataConfig(client2) && uri.startsWith(_getDataUrl(client2, "query"));
    isMutate = (client2, uri) => hasDataConfig(client2) && uri.startsWith(_getDataUrl(client2, "mutate"));
    isDoc = (client2, uri) => hasDataConfig(client2) && uri.startsWith(_getDataUrl(client2, "doc", ""));
    isListener = (client2, uri) => hasDataConfig(client2) && uri.startsWith(_getDataUrl(client2, "listen"));
    isHistory = (client2, uri) => hasDataConfig(client2) && uri.startsWith(_getDataUrl(client2, "history", ""));
    isData = (client2, uri) => uri.startsWith("/data/") || isQuery(client2, uri) || isMutate(client2, uri) || isDoc(client2, uri) || isListener(client2, uri) || isHistory(client2, uri);
    isDomExceptionSupported = !!globalThis.DOMException;
    resourceDataBase = (config2) => {
      if (!config2["~experimental_resource"])
        throw new Error("`resource` must be provided to perform resource queries");
      const { type, id } = config2["~experimental_resource"];
      switch (type) {
        case "dataset": {
          const segments = id.split(".");
          if (segments.length !== 2)
            throw new Error('Dataset ID must be in the format "project.dataset"');
          return `/projects/${segments[0]}/datasets/${segments[1]}`;
        }
        case "canvas":
          return `/canvases/${id}`;
        case "media-library":
          return `/media-libraries/${id}`;
        case "dashboard":
          return `/dashboards/${id}`;
        default:
          throw new Error(`Unsupported resource type: ${type.toString()}`);
      }
    };
    ObservableAssetsClient = class {
      constructor(client2, httpRequest) {
        __privateAdd(this, _client5);
        __privateAdd(this, _httpRequest);
        __privateSet(this, _client5, client2), __privateSet(this, _httpRequest, httpRequest);
      }
      upload(assetType, body2, options2) {
        return _upload(__privateGet(this, _client5), __privateGet(this, _httpRequest), assetType, body2, options2);
      }
    };
    _client5 = new WeakMap();
    _httpRequest = new WeakMap();
    AssetsClient = class {
      constructor(client2, httpRequest) {
        __privateAdd(this, _client6);
        __privateAdd(this, _httpRequest2);
        __privateSet(this, _client6, client2), __privateSet(this, _httpRequest2, httpRequest);
      }
      upload(assetType, body2, options2) {
        const observable2 = _upload(__privateGet(this, _client6), __privateGet(this, _httpRequest2), assetType, body2, options2);
        return lastValueFrom(
          observable2.pipe(
            filter((event) => event.type === "response"),
            map(
              (event) => event.body.document
            )
          )
        );
      }
    };
    _client6 = new WeakMap();
    _httpRequest2 = new WeakMap();
    defaults = (obj, defaults2) => Object.keys(defaults2).concat(Object.keys(obj)).reduce((target, prop) => (target[prop] = typeof obj[prop] > "u" ? defaults2[prop] : obj[prop], target), {});
    pick = (obj, props) => props.reduce((selection, prop) => (typeof obj[prop] > "u" || (selection[prop] = obj[prop]), selection), {});
    eventSourcePolyfill = defer(() => Promise.resolve().then(() => __toESM(require_browser(), 1))).pipe(
      map(({ default: EventSource2 }) => EventSource2),
      shareReplay(1)
    );
    MAX_URL_LENGTH = 14800;
    possibleOptions = [
      "includePreviousRevision",
      "includeResult",
      "includeMutations",
      "includeAllVersions",
      "visibility",
      "effectFormat",
      "tag"
    ];
    defaultOptions = {
      includeResult: true
    };
    requiredApiVersion = "2021-03-25";
    LiveClient = class {
      constructor(client2) {
        __privateAdd(this, _client7);
        __privateSet(this, _client7, client2);
      }
      /**
       * Requires `apiVersion` to be `2021-03-25` or later.
       */
      events({
        includeDrafts = false,
        tag: _tag
      } = {}) {
        resourceGuard("live", __privateGet(this, _client7).config());
        const {
          projectId: projectId2,
          apiVersion: _apiVersion,
          token,
          withCredentials,
          requestTagPrefix
        } = __privateGet(this, _client7).config(), apiVersion = _apiVersion.replace(/^v/, "");
        if (apiVersion !== "X" && apiVersion < requiredApiVersion)
          throw new Error(
            `The live events API requires API version ${requiredApiVersion} or later. The current API version is ${apiVersion}. Please update your API version to use this feature.`
          );
        if (includeDrafts && !token && !withCredentials)
          throw new Error(
            "The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role."
          );
        const path = _getDataUrl(__privateGet(this, _client7), "live/events"), url = new URL(__privateGet(this, _client7).getUrl(path, false)), tag = _tag && requestTagPrefix ? [requestTagPrefix, _tag].join(".") : _tag;
        tag && url.searchParams.set("tag", tag), includeDrafts && url.searchParams.set("includeDrafts", "true");
        const esOptions = {};
        includeDrafts && token && (esOptions.headers = {
          Authorization: `Bearer ${token}`
        }), includeDrafts && withCredentials && (esOptions.withCredentials = true);
        const key2 = `${url.href}::${JSON.stringify(esOptions)}`, existing = eventsCache.get(key2);
        if (existing)
          return existing;
        const events = connectEventSource(() => (
          // use polyfill if there is no global EventSource or if we need to set headers
          (typeof EventSource > "u" || esOptions.headers ? eventSourcePolyfill : of(EventSource)).pipe(map((EventSource2) => new EventSource2(url.href, esOptions)))
        ), [
          "message",
          "restart",
          "welcome",
          "reconnect",
          "goaway"
        ]).pipe(
          reconnectOnConnectionFailure(),
          map((event) => {
            if (event.type === "message") {
              const { data, ...rest } = event;
              return { ...rest, tags: data.tags };
            }
            return event;
          })
        ), checkCors = fetchObservable(url, {
          method: "OPTIONS",
          mode: "cors",
          credentials: esOptions.withCredentials ? "include" : "omit",
          headers: esOptions.headers
        }).pipe(
          mergeMap(() => EMPTY),
          catchError(() => {
            throw new CorsOriginError({ projectId: projectId2 });
          })
        ), observable2 = concat(checkCors, events).pipe(
          finalize(() => eventsCache.delete(key2)),
          shareReplayLatest({
            predicate: (event) => event.type === "welcome"
          })
        );
        return eventsCache.set(key2, observable2), observable2;
      }
    };
    _client7 = new WeakMap();
    eventsCache = /* @__PURE__ */ new Map();
    ObservableDatasetsClient = class {
      constructor(client2, httpRequest) {
        __privateAdd(this, _client8);
        __privateAdd(this, _httpRequest3);
        __privateSet(this, _client8, client2), __privateSet(this, _httpRequest3, httpRequest);
      }
      /**
       * Create a new dataset with the given name
       *
       * @param name - Name of the dataset to create
       * @param options - Options for the dataset
       */
      create(name, options2) {
        return _modify(__privateGet(this, _client8), __privateGet(this, _httpRequest3), "PUT", name, options2);
      }
      /**
       * Edit a dataset with the given name
       *
       * @param name - Name of the dataset to edit
       * @param options - New options for the dataset
       */
      edit(name, options2) {
        return _modify(__privateGet(this, _client8), __privateGet(this, _httpRequest3), "PATCH", name, options2);
      }
      /**
       * Delete a dataset with the given name
       *
       * @param name - Name of the dataset to delete
       */
      delete(name) {
        return _modify(__privateGet(this, _client8), __privateGet(this, _httpRequest3), "DELETE", name);
      }
      /**
       * Fetch a list of datasets for the configured project
       */
      list() {
        return _request(__privateGet(this, _client8), __privateGet(this, _httpRequest3), {
          uri: "/datasets",
          tag: null
        });
      }
    };
    _client8 = new WeakMap();
    _httpRequest3 = new WeakMap();
    DatasetsClient = class {
      constructor(client2, httpRequest) {
        __privateAdd(this, _client9);
        __privateAdd(this, _httpRequest4);
        __privateSet(this, _client9, client2), __privateSet(this, _httpRequest4, httpRequest);
      }
      /**
       * Create a new dataset with the given name
       *
       * @param name - Name of the dataset to create
       * @param options - Options for the dataset
       */
      create(name, options2) {
        return resourceGuard("dataset", __privateGet(this, _client9).config()), lastValueFrom(
          _modify(__privateGet(this, _client9), __privateGet(this, _httpRequest4), "PUT", name, options2)
        );
      }
      /**
       * Edit a dataset with the given name
       *
       * @param name - Name of the dataset to edit
       * @param options - New options for the dataset
       */
      edit(name, options2) {
        return resourceGuard("dataset", __privateGet(this, _client9).config()), lastValueFrom(
          _modify(__privateGet(this, _client9), __privateGet(this, _httpRequest4), "PATCH", name, options2)
        );
      }
      /**
       * Delete a dataset with the given name
       *
       * @param name - Name of the dataset to delete
       */
      delete(name) {
        return resourceGuard("dataset", __privateGet(this, _client9).config()), lastValueFrom(_modify(__privateGet(this, _client9), __privateGet(this, _httpRequest4), "DELETE", name));
      }
      /**
       * Fetch a list of datasets for the configured project
       */
      list() {
        return resourceGuard("dataset", __privateGet(this, _client9).config()), lastValueFrom(
          _request(__privateGet(this, _client9), __privateGet(this, _httpRequest4), { uri: "/datasets", tag: null })
        );
      }
    };
    _client9 = new WeakMap();
    _httpRequest4 = new WeakMap();
    ObservableProjectsClient = class {
      constructor(client2, httpRequest) {
        __privateAdd(this, _client10);
        __privateAdd(this, _httpRequest5);
        __privateSet(this, _client10, client2), __privateSet(this, _httpRequest5, httpRequest);
      }
      list(options2) {
        resourceGuard("projects", __privateGet(this, _client10).config());
        const uri = options2?.includeMembers === false ? "/projects?includeMembers=false" : "/projects";
        return _request(__privateGet(this, _client10), __privateGet(this, _httpRequest5), { uri });
      }
      /**
       * Fetch a project by project ID
       *
       * @param projectId - ID of the project to fetch
       */
      getById(projectId2) {
        return resourceGuard("projects", __privateGet(this, _client10).config()), _request(__privateGet(this, _client10), __privateGet(this, _httpRequest5), { uri: `/projects/${projectId2}` });
      }
    };
    _client10 = new WeakMap();
    _httpRequest5 = new WeakMap();
    ProjectsClient = class {
      constructor(client2, httpRequest) {
        __privateAdd(this, _client11);
        __privateAdd(this, _httpRequest6);
        __privateSet(this, _client11, client2), __privateSet(this, _httpRequest6, httpRequest);
      }
      list(options2) {
        resourceGuard("projects", __privateGet(this, _client11).config());
        const uri = options2?.includeMembers === false ? "/projects?includeMembers=false" : "/projects";
        return lastValueFrom(_request(__privateGet(this, _client11), __privateGet(this, _httpRequest6), { uri }));
      }
      /**
       * Fetch a project by project ID
       *
       * @param projectId - ID of the project to fetch
       */
      getById(projectId2) {
        return resourceGuard("projects", __privateGet(this, _client11).config()), lastValueFrom(
          _request(__privateGet(this, _client11), __privateGet(this, _httpRequest6), { uri: `/projects/${projectId2}` })
        );
      }
    };
    _client11 = new WeakMap();
    _httpRequest6 = new WeakMap();
    ObservableUsersClient = class {
      constructor(client2, httpRequest) {
        __privateAdd(this, _client12);
        __privateAdd(this, _httpRequest7);
        __privateSet(this, _client12, client2), __privateSet(this, _httpRequest7, httpRequest);
      }
      /**
       * Fetch a user by user ID
       *
       * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
       */
      getById(id) {
        return _request(
          __privateGet(this, _client12),
          __privateGet(this, _httpRequest7),
          { uri: `/users/${id}` }
        );
      }
    };
    _client12 = new WeakMap();
    _httpRequest7 = new WeakMap();
    UsersClient = class {
      constructor(client2, httpRequest) {
        __privateAdd(this, _client13);
        __privateAdd(this, _httpRequest8);
        __privateSet(this, _client13, client2), __privateSet(this, _httpRequest8, httpRequest);
      }
      /**
       * Fetch a user by user ID
       *
       * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
       */
      getById(id) {
        return lastValueFrom(
          _request(__privateGet(this, _client13), __privateGet(this, _httpRequest8), {
            uri: `/users/${id}`
          })
        );
      }
    };
    _client13 = new WeakMap();
    _httpRequest8 = new WeakMap();
    _ObservableSanityClient = class _ObservableSanityClient {
      constructor(httpRequest, config2 = defaultConfig) {
        __publicField(this, "assets");
        __publicField(this, "datasets");
        __publicField(this, "live");
        __publicField(this, "projects");
        __publicField(this, "users");
        /**
         * Private properties
         */
        __privateAdd(this, _clientConfig);
        __privateAdd(this, _httpRequest9);
        /**
         * Instance properties
         */
        __publicField(this, "listen", _listen);
        this.config(config2), __privateSet(this, _httpRequest9, httpRequest), this.assets = new ObservableAssetsClient(this, __privateGet(this, _httpRequest9)), this.datasets = new ObservableDatasetsClient(this, __privateGet(this, _httpRequest9)), this.live = new LiveClient(this), this.projects = new ObservableProjectsClient(this, __privateGet(this, _httpRequest9)), this.users = new ObservableUsersClient(this, __privateGet(this, _httpRequest9));
      }
      /**
       * Clone the client - returns a new instance
       */
      clone() {
        return new _ObservableSanityClient(__privateGet(this, _httpRequest9), this.config());
      }
      config(newConfig) {
        if (newConfig === void 0)
          return { ...__privateGet(this, _clientConfig) };
        if (__privateGet(this, _clientConfig) && __privateGet(this, _clientConfig).allowReconfigure === false)
          throw new Error(
            "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
          );
        return __privateSet(this, _clientConfig, initConfig(newConfig, __privateGet(this, _clientConfig) || {})), this;
      }
      /**
       * Clone the client with a new (partial) configuration.
       *
       * @param newConfig - New client configuration properties, shallowly merged with existing configuration
       */
      withConfig(newConfig) {
        const thisConfig = this.config();
        return new _ObservableSanityClient(__privateGet(this, _httpRequest9), {
          ...thisConfig,
          ...newConfig,
          stega: {
            ...thisConfig.stega || {},
            ...typeof newConfig?.stega == "boolean" ? { enabled: newConfig.stega } : newConfig?.stega || {}
          }
        });
      }
      fetch(query, params, options2) {
        return _fetch(
          this,
          __privateGet(this, _httpRequest9),
          __privateGet(this, _clientConfig).stega,
          query,
          params,
          options2
        );
      }
      /**
       * Fetch a single document with the given ID.
       *
       * @param id - Document ID to fetch
       * @param options - Request options
       */
      getDocument(id, options2) {
        return _getDocument(this, __privateGet(this, _httpRequest9), id, options2);
      }
      /**
       * Fetch multiple documents in one request.
       * Should be used sparingly - performing a query is usually a better option.
       * The order/position of documents is preserved based on the original array of IDs.
       * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
       *
       * @param ids - Document IDs to fetch
       * @param options - Request options
       */
      getDocuments(ids, options2) {
        return _getDocuments(this, __privateGet(this, _httpRequest9), ids, options2);
      }
      create(document2, options2) {
        return _create(this, __privateGet(this, _httpRequest9), document2, "create", options2);
      }
      createIfNotExists(document2, options2) {
        return _createIfNotExists(this, __privateGet(this, _httpRequest9), document2, options2);
      }
      createOrReplace(document2, options2) {
        return _createOrReplace(this, __privateGet(this, _httpRequest9), document2, options2);
      }
      delete(selection, options2) {
        return _delete(this, __privateGet(this, _httpRequest9), selection, options2);
      }
      mutate(operations, options2) {
        return _mutate(this, __privateGet(this, _httpRequest9), operations, options2);
      }
      /**
       * Create a new buildable patch of operations to perform
       *
       * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
       * @param operations - Optional object of patch operations to initialize the patch instance with
       * @returns Patch instance - call `.commit()` to perform the operations defined
       */
      patch(selection, operations) {
        return new ObservablePatch(selection, operations, this);
      }
      /**
       * Create a new transaction of mutations
       *
       * @param operations - Optional array of mutation operations to initialize the transaction instance with
       */
      transaction(operations) {
        return new ObservableTransaction(operations, this);
      }
      /**
       * Perform action operations against the configured dataset
       *
       * @param operations - Action operation(s) to execute
       * @param options - Action options
       */
      action(operations, options2) {
        return _action(this, __privateGet(this, _httpRequest9), operations, options2);
      }
      /**
       * Perform an HTTP request against the Sanity API
       *
       * @param options - Request options
       */
      request(options2) {
        return _request(this, __privateGet(this, _httpRequest9), options2);
      }
      /**
       * Get a Sanity API URL for the URI provided
       *
       * @param uri - URI/path to build URL for
       * @param canUseCdn - Whether or not to allow using the API CDN for this route
       */
      getUrl(uri, canUseCdn) {
        return _getUrl(this, uri, canUseCdn);
      }
      /**
       * Get a Sanity API URL for the data operation and path provided
       *
       * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
       * @param path - Path to append after the operation
       */
      getDataUrl(operation, path) {
        return _getDataUrl(this, operation, path);
      }
    };
    _clientConfig = new WeakMap();
    _httpRequest9 = new WeakMap();
    ObservableSanityClient = _ObservableSanityClient;
    _SanityClient = class _SanityClient {
      constructor(httpRequest, config2 = defaultConfig) {
        __publicField(this, "assets");
        __publicField(this, "datasets");
        __publicField(this, "live");
        __publicField(this, "projects");
        __publicField(this, "users");
        /**
         * Observable version of the Sanity client, with the same configuration as the promise-based one
         */
        __publicField(this, "observable");
        /**
         * Private properties
         */
        __privateAdd(this, _clientConfig2);
        __privateAdd(this, _httpRequest10);
        /**
         * Instance properties
         */
        __publicField(this, "listen", _listen);
        this.config(config2), __privateSet(this, _httpRequest10, httpRequest), this.assets = new AssetsClient(this, __privateGet(this, _httpRequest10)), this.datasets = new DatasetsClient(this, __privateGet(this, _httpRequest10)), this.live = new LiveClient(this), this.projects = new ProjectsClient(this, __privateGet(this, _httpRequest10)), this.users = new UsersClient(this, __privateGet(this, _httpRequest10)), this.observable = new ObservableSanityClient(httpRequest, config2);
      }
      /**
       * Clone the client - returns a new instance
       */
      clone() {
        return new _SanityClient(__privateGet(this, _httpRequest10), this.config());
      }
      config(newConfig) {
        if (newConfig === void 0)
          return { ...__privateGet(this, _clientConfig2) };
        if (__privateGet(this, _clientConfig2) && __privateGet(this, _clientConfig2).allowReconfigure === false)
          throw new Error(
            "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
          );
        return this.observable && this.observable.config(newConfig), __privateSet(this, _clientConfig2, initConfig(newConfig, __privateGet(this, _clientConfig2) || {})), this;
      }
      /**
       * Clone the client with a new (partial) configuration.
       *
       * @param newConfig - New client configuration properties, shallowly merged with existing configuration
       */
      withConfig(newConfig) {
        const thisConfig = this.config();
        return new _SanityClient(__privateGet(this, _httpRequest10), {
          ...thisConfig,
          ...newConfig,
          stega: {
            ...thisConfig.stega || {},
            ...typeof newConfig?.stega == "boolean" ? { enabled: newConfig.stega } : newConfig?.stega || {}
          }
        });
      }
      fetch(query, params, options2) {
        return lastValueFrom(
          _fetch(
            this,
            __privateGet(this, _httpRequest10),
            __privateGet(this, _clientConfig2).stega,
            query,
            params,
            options2
          )
        );
      }
      /**
       * Fetch a single document with the given ID.
       *
       * @param id - Document ID to fetch
       * @param options - Request options
       */
      getDocument(id, options2) {
        return lastValueFrom(_getDocument(this, __privateGet(this, _httpRequest10), id, options2));
      }
      /**
       * Fetch multiple documents in one request.
       * Should be used sparingly - performing a query is usually a better option.
       * The order/position of documents is preserved based on the original array of IDs.
       * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
       *
       * @param ids - Document IDs to fetch
       * @param options - Request options
       */
      getDocuments(ids, options2) {
        return lastValueFrom(_getDocuments(this, __privateGet(this, _httpRequest10), ids, options2));
      }
      create(document2, options2) {
        return lastValueFrom(
          _create(this, __privateGet(this, _httpRequest10), document2, "create", options2)
        );
      }
      createIfNotExists(document2, options2) {
        return lastValueFrom(
          _createIfNotExists(this, __privateGet(this, _httpRequest10), document2, options2)
        );
      }
      createOrReplace(document2, options2) {
        return lastValueFrom(
          _createOrReplace(this, __privateGet(this, _httpRequest10), document2, options2)
        );
      }
      delete(selection, options2) {
        return lastValueFrom(_delete(this, __privateGet(this, _httpRequest10), selection, options2));
      }
      mutate(operations, options2) {
        return lastValueFrom(_mutate(this, __privateGet(this, _httpRequest10), operations, options2));
      }
      /**
       * Create a new buildable patch of operations to perform
       *
       * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
       * @param operations - Optional object of patch operations to initialize the patch instance with
       * @returns Patch instance - call `.commit()` to perform the operations defined
       */
      patch(documentId, operations) {
        return new Patch(documentId, operations, this);
      }
      /**
       * Create a new transaction of mutations
       *
       * @param operations - Optional array of mutation operations to initialize the transaction instance with
       */
      transaction(operations) {
        return new Transaction(operations, this);
      }
      /**
       * Perform action operations against the configured dataset
       * Returns a promise that resolves to the transaction result
       *
       * @param operations - Action operation(s) to execute
       * @param options - Action options
       */
      action(operations, options2) {
        return lastValueFrom(_action(this, __privateGet(this, _httpRequest10), operations, options2));
      }
      /**
       * Perform a request against the Sanity API
       * NOTE: Only use this for Sanity API endpoints, not for your own APIs!
       *
       * @param options - Request options
       * @returns Promise resolving to the response body
       */
      request(options2) {
        return lastValueFrom(_request(this, __privateGet(this, _httpRequest10), options2));
      }
      /**
       * Perform an HTTP request a `/data` sub-endpoint
       * NOTE: Considered internal, thus marked as deprecated. Use `request` instead.
       *
       * @deprecated - Use `request()` or your own HTTP library instead
       * @param endpoint - Endpoint to hit (mutate, query etc)
       * @param body - Request body
       * @param options - Request options
       * @internal
       */
      dataRequest(endpoint, body2, options2) {
        return lastValueFrom(_dataRequest(this, __privateGet(this, _httpRequest10), endpoint, body2, options2));
      }
      /**
       * Get a Sanity API URL for the URI provided
       *
       * @param uri - URI/path to build URL for
       * @param canUseCdn - Whether or not to allow using the API CDN for this route
       */
      getUrl(uri, canUseCdn) {
        return _getUrl(this, uri, canUseCdn);
      }
      /**
       * Get a Sanity API URL for the data operation and path provided
       *
       * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
       * @param path - Path to append after the operation
       */
      getDataUrl(operation, path) {
        return _getDataUrl(this, operation, path);
      }
    };
    _clientConfig2 = new WeakMap();
    _httpRequest10 = new WeakMap();
    SanityClient = _SanityClient;
    envMiddleware = [];
    exp = defineCreateClientExports(envMiddleware, SanityClient);
    requester = exp.requester;
    createClient = exp.createClient;
    deprecatedCreateClient = defineDeprecatedCreateClient(createClient);
  }
});

// node_modules/groq/lib/groq.js
function groq(strings, ...keys) {
  const lastIndex = strings.length - 1;
  return strings.slice(0, lastIndex).reduce((acc, str, i2) => acc + str + keys[i2], "") + strings[lastIndex];
}
var init_groq = __esm({
  "node_modules/groq/lib/groq.js"() {
  }
});

// .svelte-kit/output/server/chunks/sanity.js
async function getPosts() {
  return await client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}
async function getPostPage(page3) {
  return await client.fetch(groq`*[_type == "post" && slug.current == $page][0]`, { page: page3 });
}
async function getHomePage() {
  let query = groq`*[_type == "homepage"] {
		title,
		"pageBuilderContent": pageBuilder[] {
		  _key,
		  _type,
		  // Resolve references for 'postsGrid'
          _type == "brands" => {
            "brands": @-> {
              title,
              "selectedBrands": selectedBrands[]-> {
                brandLogo,
                brandName,
                brandUrl,
                productType
              }
            }
          },
          _type == "banner" => {
            "banner": @-> {
              ...
            }
          },
          _type == "salesTeamBlock" => {
            ...
          },
          _type == "hero" => {
              "hero": @-> {
                ...
              }
          },
		  _type == "postsGrid" => {
			"selectedPosts": selectedPosts[]-> {
			  _id,
			  title,
			  slug,
			  excerpt,
			  mainImage {
				asset->{
				  _id,
				  url
				}
			  }
			  // Add other fields as needed
			}
		  },
		  // Resolve references for 'customerGrid'
		  _type == "customerGrid" => {
			"selectedCustomers": selectedCustomers[]-> {
			  _id,
			  kundeNavn, // Assuming this is the customer name
			  kundeLogo, // Assuming this is the customer logo
			  kundeLink  // Assuming this is the link to the customer
			}
		  },
		  // Resolve 'existingPost' reference
		  _type == "existingPost" => {
			
			"existingPostContent": @-> {
			  ...
			} 
			// Add other fields as needed
		  },
		  // Resolve 'salesPeople' reference
		  _type == "salesPeople" => {
			"salesPeopleBlock": @->{
				...,
				link -> {
				  slug    
				},
				"salesPeople": salesPeople[]{
				  ...,
				  "link": link-> {
					slug
				  }
				}
			  }  
		  }
		  // Other types can be added here
		}
	  }
	  `;
  return await client.fetch(query);
}
async function getBanner() {
  return await client.fetch(groq`*[_type == "banner"][0]`);
}
async function getHero() {
  try {
    return await client.fetch(groq`*[_type == "hero"][0]`);
  } catch (error2) {
    console.error("Error fetching sales team:", error2);
    throw error2;
  }
}
async function getEmployees() {
  return await client.fetch(groq`*[_type == "profile" && !(_id match "drafts.*")]`);
}
async function getSalesTeam() {
  try {
    return await client.fetch(groq`*[_type == "salesTeamBlock"] {
			...,
			link -> {
			  slug    
			},
			"salesPeople": salesPeople[]{
			  ...,
			  "link": link-> {
				slug
			  }
			}
		  }
		  `);
  } catch (error2) {
    console.error("Error fetching sales team:", error2);
    throw error2;
  }
}
async function getContactDetails() {
  try {
    return await client.fetch(groq`*[_type == "contactDetails"][0]`);
  } catch (error2) {
    console.error("Error fetching contact details:", error2);
    throw error2;
  }
}
async function getForms() {
  try {
    return await client.fetch(groq`
		*[_type == "forms"]{
        _type,
        _createdAt,
        _id,
        _rev,
        _updatedAt,
        title,
        description,
        file {
          _type,
          "asset": asset->{
            _id,
            url,
            _type
          }
        }
      }`);
  } catch (error2) {
    console.error("Error fetching forms:", error2);
    throw error2;
  }
}
var PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, client;
var init_sanity = __esm({
  ".svelte-kit/output/server/chunks/sanity.js"() {
    init_index_browser2();
    init_groq();
    PUBLIC_SANITY_PROJECT_ID = "84mcj5o9";
    PUBLIC_SANITY_DATASET = "production";
    client = createClient({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
      // `false` if you want to ensure fresh data
      apiVersion: "2023-03-20"
      // date of setup
    });
  }
});

// .svelte-kit/output/server/entries/pages/_page.ts.js
var page_ts_exports = {};
__export(page_ts_exports, {
  load: () => load
});
var load;
var init_page_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_page.ts.js"() {
    init_sanity();
    init_exports();
    load = async () => {
      try {
        const [posts, banner, hero, salesTeam, homepage] = await Promise.all([getPosts(), getBanner(), getHero(), getSalesTeam(), getHomePage()]);
        ["posts", "banner", "hero", "salesTeam"].forEach((item) => {
          if (!eval(item)) {
            throw error(404, `${item.charAt(0).toUpperCase() + item.slice(1)} not found`);
          }
        });
        return {
          props: {
            posts,
            banner,
            hero,
            salesTeam,
            homepage
          }
        };
      } catch (err) {
        console.error(err);
        throw error(500, "Internal server error");
      }
    };
  }
});

// node_modules/@sanity/image-url/lib/browser/image-url.umd.js
var require_image_url_umd = __commonJS({
  "node_modules/@sanity/image-url/lib/browser/image-url.umd.js"(exports, module) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = global2 || self, global2.SanityImageUrlBuilder = factory());
    })(exports, (function() {
      function _arrayLikeToArray(r3, a4) {
        (null == a4 || a4 > r3.length) && (a4 = r3.length);
        for (var e2 = 0, n4 = Array(a4); e2 < a4; e2++) n4[e2] = r3[e2];
        return n4;
      }
      function _createForOfIteratorHelperLoose(r3, e2) {
        var t2 = "undefined" != typeof Symbol && r3[Symbol.iterator] || r3["@@iterator"];
        if (t2) return (t2 = t2.call(r3)).next.bind(t2);
        if (Array.isArray(r3) || (t2 = _unsupportedIterableToArray(r3)) || e2 && r3 && "number" == typeof r3.length) {
          t2 && (r3 = t2);
          var o3 = 0;
          return function() {
            return o3 >= r3.length ? {
              done: true
            } : {
              done: false,
              value: r3[o3++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _extends() {
        return _extends = Object.assign ? Object.assign.bind() : function(n4) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var t2 = arguments[e2];
            for (var r3 in t2) ({}).hasOwnProperty.call(t2, r3) && (n4[r3] = t2[r3]);
          }
          return n4;
        }, _extends.apply(null, arguments);
      }
      function _unsupportedIterableToArray(r3, a4) {
        if (r3) {
          if ("string" == typeof r3) return _arrayLikeToArray(r3, a4);
          var t2 = {}.toString.call(r3).slice(8, -1);
          return "Object" === t2 && r3.constructor && (t2 = r3.constructor.name), "Map" === t2 || "Set" === t2 ? Array.from(r3) : "Arguments" === t2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t2) ? _arrayLikeToArray(r3, a4) : void 0;
        }
      }
      var example = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
      function parseAssetId(ref) {
        var _ref$split = ref.split("-"), id = _ref$split[1], dimensionString = _ref$split[2], format = _ref$split[3];
        if (!id || !dimensionString || !format) {
          throw new Error("Malformed asset _ref '" + ref + `'. Expected an id like "` + example + '".');
        }
        var _dimensionString$spli = dimensionString.split("x"), imgWidthStr = _dimensionString$spli[0], imgHeightStr = _dimensionString$spli[1];
        var width = +imgWidthStr;
        var height = +imgHeightStr;
        var isValidAssetId = isFinite(width) && isFinite(height);
        if (!isValidAssetId) {
          throw new Error("Malformed asset _ref '" + ref + `'. Expected an id like "` + example + '".');
        }
        return {
          id,
          width,
          height,
          format
        };
      }
      var isRef = function isRef2(src) {
        var source2 = src;
        return source2 ? typeof source2._ref === "string" : false;
      };
      var isAsset = function isAsset2(src) {
        var source2 = src;
        return source2 ? typeof source2._id === "string" : false;
      };
      var isAssetStub = function isAssetStub2(src) {
        var source2 = src;
        return source2 && source2.asset ? typeof source2.asset.url === "string" : false;
      };
      var isInProgressUpload = function isInProgressUpload2(src) {
        if (typeof src === "object" && src !== null) {
          var obj = src;
          return obj._upload && (!obj.asset || !obj.asset._ref);
        }
        return false;
      };
      function parseSource(source2) {
        if (!source2) {
          return null;
        }
        var image;
        if (typeof source2 === "string" && isUrl(source2)) {
          image = {
            asset: {
              _ref: urlToId(source2)
            }
          };
        } else if (typeof source2 === "string") {
          image = {
            asset: {
              _ref: source2
            }
          };
        } else if (isRef(source2)) {
          image = {
            asset: source2
          };
        } else if (isAsset(source2)) {
          image = {
            asset: {
              _ref: source2._id || ""
            }
          };
        } else if (isAssetStub(source2)) {
          image = {
            asset: {
              _ref: urlToId(source2.asset.url)
            }
          };
        } else if (typeof source2.asset === "object") {
          image = _extends({}, source2);
        } else {
          return null;
        }
        var img = source2;
        if (img.crop) {
          image.crop = img.crop;
        }
        if (img.hotspot) {
          image.hotspot = img.hotspot;
        }
        return applyDefaults(image);
      }
      function isUrl(url) {
        return /^https?:\/\//.test("" + url);
      }
      function urlToId(url) {
        var parts = url.split("/").slice(-1);
        return ("image-" + parts[0]).replace(/\.([a-z]+)$/, "-$1");
      }
      function applyDefaults(image) {
        if (image.crop && image.hotspot) {
          return image;
        }
        var result = _extends({}, image);
        if (!result.crop) {
          result.crop = {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
          };
        }
        if (!result.hotspot) {
          result.hotspot = {
            x: 0.5,
            y: 0.5,
            height: 1,
            width: 1
          };
        }
        return result;
      }
      var SPEC_NAME_TO_URL_NAME_MAPPINGS = [["width", "w"], ["height", "h"], ["format", "fm"], ["download", "dl"], ["blur", "blur"], ["sharpen", "sharp"], ["invert", "invert"], ["orientation", "or"], ["minHeight", "min-h"], ["maxHeight", "max-h"], ["minWidth", "min-w"], ["maxWidth", "max-w"], ["quality", "q"], ["fit", "fit"], ["crop", "crop"], ["saturation", "sat"], ["auto", "auto"], ["dpr", "dpr"], ["pad", "pad"], ["frame", "frame"]];
      function urlForImage(options2) {
        var spec = _extends({}, options2 || {});
        var source2 = spec.source;
        delete spec.source;
        var image = parseSource(source2);
        if (!image) {
          if (source2 && isInProgressUpload(source2)) {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
          }
          throw new Error("Unable to resolve image URL from source (" + JSON.stringify(source2) + ")");
        }
        var id = image.asset._ref || image.asset._id || "";
        var asset = parseAssetId(id);
        var cropLeft = Math.round(image.crop.left * asset.width);
        var cropTop = Math.round(image.crop.top * asset.height);
        var crop = {
          left: cropLeft,
          top: cropTop,
          width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
          height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
        };
        var hotSpotVerticalRadius = image.hotspot.height * asset.height / 2;
        var hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2;
        var hotSpotCenterX = image.hotspot.x * asset.width;
        var hotSpotCenterY = image.hotspot.y * asset.height;
        var hotspot = {
          left: hotSpotCenterX - hotSpotHorizontalRadius,
          top: hotSpotCenterY - hotSpotVerticalRadius,
          right: hotSpotCenterX + hotSpotHorizontalRadius,
          bottom: hotSpotCenterY + hotSpotVerticalRadius
        };
        if (!(spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop)) {
          spec = _extends({}, spec, fit({
            crop,
            hotspot
          }, spec));
        }
        return specToImageUrl(_extends({}, spec, {
          asset
        }));
      }
      function specToImageUrl(spec) {
        var cdnUrl = (spec.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, "");
        var vanityStub = spec.vanityName ? "/" + spec.vanityName : "";
        var filename = spec.asset.id + "-" + spec.asset.width + "x" + spec.asset.height + "." + spec.asset.format + vanityStub;
        var baseUrl = cdnUrl + "/images/" + spec.projectId + "/" + spec.dataset + "/" + filename;
        var params = [];
        if (spec.rect) {
          var _spec$rect = spec.rect, left = _spec$rect.left, top = _spec$rect.top, width = _spec$rect.width, height = _spec$rect.height;
          var isEffectiveCrop = left !== 0 || top !== 0 || height !== spec.asset.height || width !== spec.asset.width;
          if (isEffectiveCrop) {
            params.push("rect=" + left + "," + top + "," + width + "," + height);
          }
        }
        if (spec.bg) {
          params.push("bg=" + spec.bg);
        }
        if (spec.focalPoint) {
          params.push("fp-x=" + spec.focalPoint.x);
          params.push("fp-y=" + spec.focalPoint.y);
        }
        var flip = [spec.flipHorizontal && "h", spec.flipVertical && "v"].filter(Boolean).join("");
        if (flip) {
          params.push("flip=" + flip);
        }
        SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function(mapping) {
          var specName = mapping[0], param = mapping[1];
          if (typeof spec[specName] !== "undefined") {
            params.push(param + "=" + encodeURIComponent(spec[specName]));
          } else if (typeof spec[param] !== "undefined") {
            params.push(param + "=" + encodeURIComponent(spec[param]));
          }
        });
        if (params.length === 0) {
          return baseUrl;
        }
        return baseUrl + "?" + params.join("&");
      }
      function fit(source2, spec) {
        var cropRect;
        var imgWidth = spec.width;
        var imgHeight = spec.height;
        if (!(imgWidth && imgHeight)) {
          return {
            width: imgWidth,
            height: imgHeight,
            rect: source2.crop
          };
        }
        var crop = source2.crop;
        var hotspot = source2.hotspot;
        var desiredAspectRatio = imgWidth / imgHeight;
        var cropAspectRatio = crop.width / crop.height;
        if (cropAspectRatio > desiredAspectRatio) {
          var height = Math.round(crop.height);
          var width = Math.round(height * desiredAspectRatio);
          var top = Math.max(0, Math.round(crop.top));
          var hotspotXCenter = Math.round((hotspot.right - hotspot.left) / 2 + hotspot.left);
          var left = Math.max(0, Math.round(hotspotXCenter - width / 2));
          if (left < crop.left) {
            left = crop.left;
          } else if (left + width > crop.left + crop.width) {
            left = crop.left + crop.width - width;
          }
          cropRect = {
            left,
            top,
            width,
            height
          };
        } else {
          var _width = crop.width;
          var _height = Math.round(_width / desiredAspectRatio);
          var _left = Math.max(0, Math.round(crop.left));
          var hotspotYCenter = Math.round((hotspot.bottom - hotspot.top) / 2 + hotspot.top);
          var _top = Math.max(0, Math.round(hotspotYCenter - _height / 2));
          if (_top < crop.top) {
            _top = crop.top;
          } else if (_top + _height > crop.top + crop.height) {
            _top = crop.top + crop.height - _height;
          }
          cropRect = {
            left: _left,
            top: _top,
            width: _width,
            height: _height
          };
        }
        return {
          width: imgWidth,
          height: imgHeight,
          rect: cropRect
        };
      }
      var validFits = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"];
      var validCrops = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"];
      var validAutoModes = ["format"];
      function isSanityModernClientLike(client2) {
        return client2 && "config" in client2 ? typeof client2.config === "function" : false;
      }
      function isSanityClientLike(client2) {
        return client2 && "clientConfig" in client2 ? typeof client2.clientConfig === "object" : false;
      }
      function rewriteSpecName(key2) {
        var specs = SPEC_NAME_TO_URL_NAME_MAPPINGS;
        for (var _iterator = _createForOfIteratorHelperLoose(specs), _step; !(_step = _iterator()).done; ) {
          var entry = _step.value;
          var specName = entry[0], param = entry[1];
          if (key2 === specName || key2 === param) {
            return specName;
          }
        }
        return key2;
      }
      function urlBuilder(options2) {
        if (isSanityModernClientLike(options2)) {
          var _options$config = options2.config(), apiUrl = _options$config.apiHost, projectId2 = _options$config.projectId, dataset2 = _options$config.dataset;
          var apiHost = apiUrl || "https://api.sanity.io";
          return new ImageUrlBuilder(null, {
            baseUrl: apiHost.replace(/^https:\/\/api\./, "https://cdn."),
            projectId: projectId2,
            dataset: dataset2
          });
        }
        if (isSanityClientLike(options2)) {
          var _options$clientConfig = options2.clientConfig, _apiUrl = _options$clientConfig.apiHost, _projectId = _options$clientConfig.projectId, _dataset = _options$clientConfig.dataset;
          var _apiHost = _apiUrl || "https://api.sanity.io";
          return new ImageUrlBuilder(null, {
            baseUrl: _apiHost.replace(/^https:\/\/api\./, "https://cdn."),
            projectId: _projectId,
            dataset: _dataset
          });
        }
        return new ImageUrlBuilder(null, options2 || {});
      }
      var ImageUrlBuilder = /* @__PURE__ */ (function() {
        function ImageUrlBuilder2(parent, options2) {
          this.options = void 0;
          this.options = parent ? _extends({}, parent.options || {}, options2 || {}) : _extends({}, options2 || {});
        }
        var _proto = ImageUrlBuilder2.prototype;
        _proto.withOptions = function withOptions(options2) {
          var baseUrl = options2.baseUrl || this.options.baseUrl;
          var newOptions = {
            baseUrl
          };
          for (var key2 in options2) {
            if (options2.hasOwnProperty(key2)) {
              var specKey = rewriteSpecName(key2);
              newOptions[specKey] = options2[key2];
            }
          }
          return new ImageUrlBuilder2(this, _extends({
            baseUrl
          }, newOptions));
        };
        _proto.image = function image(source2) {
          return this.withOptions({
            source: source2
          });
        };
        _proto.dataset = function dataset2(_dataset2) {
          return this.withOptions({
            dataset: _dataset2
          });
        };
        _proto.projectId = function projectId2(_projectId2) {
          return this.withOptions({
            projectId: _projectId2
          });
        };
        _proto.bg = function bg(_bg) {
          return this.withOptions({
            bg: _bg
          });
        };
        _proto.dpr = function dpr(_dpr) {
          return this.withOptions(_dpr && _dpr !== 1 ? {
            dpr: _dpr
          } : {});
        };
        _proto.width = function width(_width) {
          return this.withOptions({
            width: _width
          });
        };
        _proto.height = function height(_height) {
          return this.withOptions({
            height: _height
          });
        };
        _proto.focalPoint = function focalPoint(x2, y) {
          return this.withOptions({
            focalPoint: {
              x: x2,
              y
            }
          });
        };
        _proto.maxWidth = function maxWidth(_maxWidth) {
          return this.withOptions({
            maxWidth: _maxWidth
          });
        };
        _proto.minWidth = function minWidth(_minWidth) {
          return this.withOptions({
            minWidth: _minWidth
          });
        };
        _proto.maxHeight = function maxHeight(_maxHeight) {
          return this.withOptions({
            maxHeight: _maxHeight
          });
        };
        _proto.minHeight = function minHeight(_minHeight) {
          return this.withOptions({
            minHeight: _minHeight
          });
        };
        _proto.size = function size(width, height) {
          return this.withOptions({
            width,
            height
          });
        };
        _proto.blur = function blur(_blur) {
          return this.withOptions({
            blur: _blur
          });
        };
        _proto.sharpen = function sharpen(_sharpen) {
          return this.withOptions({
            sharpen: _sharpen
          });
        };
        _proto.rect = function rect(left, top, width, height) {
          return this.withOptions({
            rect: {
              left,
              top,
              width,
              height
            }
          });
        };
        _proto.format = function format(_format) {
          return this.withOptions({
            format: _format
          });
        };
        _proto.invert = function invert(_invert) {
          return this.withOptions({
            invert: _invert
          });
        };
        _proto.orientation = function orientation(_orientation) {
          return this.withOptions({
            orientation: _orientation
          });
        };
        _proto.quality = function quality(_quality) {
          return this.withOptions({
            quality: _quality
          });
        };
        _proto.forceDownload = function forceDownload(download) {
          return this.withOptions({
            download
          });
        };
        _proto.flipHorizontal = function flipHorizontal() {
          return this.withOptions({
            flipHorizontal: true
          });
        };
        _proto.flipVertical = function flipVertical() {
          return this.withOptions({
            flipVertical: true
          });
        };
        _proto.ignoreImageParams = function ignoreImageParams() {
          return this.withOptions({
            ignoreImageParams: true
          });
        };
        _proto.fit = function fit2(value) {
          if (validFits.indexOf(value) === -1) {
            throw new Error('Invalid fit mode "' + value + '"');
          }
          return this.withOptions({
            fit: value
          });
        };
        _proto.crop = function crop(value) {
          if (validCrops.indexOf(value) === -1) {
            throw new Error('Invalid crop mode "' + value + '"');
          }
          return this.withOptions({
            crop: value
          });
        };
        _proto.saturation = function saturation(_saturation) {
          return this.withOptions({
            saturation: _saturation
          });
        };
        _proto.auto = function auto(value) {
          if (validAutoModes.indexOf(value) === -1) {
            throw new Error('Invalid auto mode "' + value + '"');
          }
          return this.withOptions({
            auto: value
          });
        };
        _proto.pad = function pad(_pad) {
          return this.withOptions({
            pad: _pad
          });
        };
        _proto.vanityName = function vanityName(value) {
          return this.withOptions({
            vanityName: value
          });
        };
        _proto.frame = function frame(_frame) {
          if (_frame !== 1) {
            throw new Error('Invalid frame value "' + _frame + '"');
          }
          return this.withOptions({
            frame: _frame
          });
        };
        _proto.url = function url() {
          return urlForImage(this.options);
        };
        _proto.toString = function toString2() {
          return this.url();
        };
        return ImageUrlBuilder2;
      })();
      return urlBuilder;
    }));
  }
});

// .svelte-kit/output/server/chunks/image.js
function urlFor(source2) {
  return builder.image(source2);
}
var import_image_url, builder;
var init_image = __esm({
  ".svelte-kit/output/server/chunks/image.js"() {
    import_image_url = __toESM(require_image_url_umd(), 1);
    init_sanity();
    builder = (0, import_image_url.default)(client);
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => _page
});
function HighlightedPeople($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let content = $$props["content"];
    const salesPeople = content.salesPeopleBlock;
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="py-8 md:px-14"><div class="grid grid-cols-1 md:grid-cols-4 gap-4 py-8"><div class="md:col-span-3 p-4"><h2 class="text-3xl md:text-5xl font-black text-gray-700 w-12/12 md:w-10/12">${escape_html(salesPeople.mainTitle)}</h2></div> `);
    if (salesPeople.subTitle != null) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="p-4"><h3 class="text-2xl text-gray-400 font-extrabold md:text-3xl">${escape_html(salesPeople.subTitle)}</h3></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto"><div class="p-4 md:col-span-2 h-[500px] md:h-[500]"><img class="w-full h-2/3 object-cover object-top mb-4"${attr("src", urlFor(salesPeople.salesPeople[0].image).width(500).url())} alt=""/> `);
    if (salesPeople.salesPeople[0].description != null) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<h3 class="text-3xl font-semibold text-gray-500 py-4">${escape_html(salesPeople.salesPeople[0].description)}</h3>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (salesPeople.salesPeople[0].link.slug.current) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", `/post/${stringify2(salesPeople.salesPeople[0].link.slug.current)}`)} class="py-2 text-base font-semibold text-slate-900 hover:text-black underline">Les mer</a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="p-4 md:col-span-1 h-[500px] md:h-[500]"><img class="w-full h-3/4 object-cover object-top"${attr("src", urlFor(salesPeople.salesPeople[1].image).width(250).url())} alt=""/> <div class="bg-gray-800 h-1/4"><p class="text-white p-4">${escape_html(salesPeople.salesPeople[1].description)}</p> `);
    if (salesPeople.salesPeople[1].link.slug.current) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", `/post/${stringify2(salesPeople.salesPeople[1].link.slug.current)}`)} class="py-2 px-4 text-base font-semibold text-white underline">Les mer</a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div> <div class="p-4 md:col-span-1 h-[500px] md:h-[500]"><img class="w-full h-3/4 object-cover object-top"${attr("src", urlFor(salesPeople.salesPeople[2].image).width(250).url())} alt=""/> <div class="bg-gray-800 h-1/4"><p class="text-white p-4">${escape_html(salesPeople.salesPeople[2].description)}</p> `);
    if (salesPeople.salesPeople[2].link.slug.current) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", `/post/${stringify2(salesPeople.salesPeople[2].link.slug.current)}`)} class="py-2 px-4 text-base font-semibold text-white underline">Les mer</a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></div></div>`);
    bind_props($$props, { content });
  });
}
function CustomerGrid($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let content = $$props["content"];
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(content);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item2 = each_array[$$index];
      $$renderer2.push(`<p>${escape_html(item2.brandName)}</p> <img${attr("src", urlFor(item2.brandLogo).url())}${attr("alt", item2.brandName)}/>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { content });
  });
}
function PostGrid($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let content = $$props["content"];
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4 mx-4"><!--[-->`);
    const each_array = ensure_array_like(content.selectedPosts);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item2 = each_array[$$index];
      $$renderer2.push(`<div class="bg-white"><div class="aspect-w-1 aspect-h-1 w-full"><img class="object-cover h-[300px] w-full"${attr("src", urlFor(item2.mainImage).url())} alt="Post image"/></div> <div class="p-6"><h2 class="text-2xl font-bold mb-2">${escape_html(item2.title)}</h2> <p class="text-gray-700 text-base">${escape_html(item2.excerpt)}</p> <button class="font-bold text-lg text-gray-800 underline mt-4 hover:font-extrabold text-black"><a${attr("href", `/post/${item2.slug.current}`)}>Les mer</a></button></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { content });
  });
}
function ExistingPost($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let content = $$props["content"];
    let post = content.existingPostContent;
    $$renderer2.push(`<div class="p-4 bg-gray-700 flex flex-col sm:flex-row"><div class="aspect-w-1 aspect-h-1 w-full sm:w-1/2"><img class="object-cover"${attr("src", urlFor(post.mainImage).width(850).quality(60).url())} alt="Post image"/></div> <div class="p-6 w-full my-auto mx-auto md:w-1/3"><h2 class="text-2xl text-white font-bold mb-2">${escape_html(post.title)}</h2> <p class="text-gray-100 text-base">${escape_html(post.excerpt)}</p> <button class="rounded-md bg-blue-500 px-3.5 my-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><a${attr("href", `/post/${post.slug.current}`)}>Les mer</a></button></div></div>`);
    bind_props($$props, { content });
  });
}
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let content = $$props["content"];
    $$renderer2.push(`<div class="bg-slate-950 w-full relative"><img${attr("src", urlFor(content.hero.backgroundImage).width(1e3).quality(30).url())} alt="Background" class="absolute inset-0 w-full h-full object-cover z--10 opacity-50"/> <div class="relative isolate px-6 pt-14 lg:px-8"><div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"></div> <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"><div class="max-w-s mx-auto my-2 sm:mb-8 sm:flex sm:justify-center gap-2"><div class="text-center md:text-left relative rounded-full px-3 my-2 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-100/70 hover:ring-gray-900/20">Finn sikkerhetsdatablad. <a href="https://app.ecoonline.com/public/search-configuration/search?companyID=1002502&amp;prodType=er&amp;descrLang=1" class="font-bold text-white"><span class="absolute inset-0" aria-hidden="true"></span>Les mer <span aria-hidden="true">\u2192</span></a></div> <div class="text-center md:text-left relative rounded-full px-3 my-2 py-1 text-sm leading-6 text-gray-100 ring-1 ring-gray-100/70 hover:ring-gray-900/20">Reklamasjon. <a href="/skjema" class="font-bold text-white"><span class="absolute inset-0" aria-hidden="true"></span>Finn skjema <span aria-hidden="true">\u2192</span></a></div></div> <div class="text-center"><h1 class="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">${escape_html(content.hero.heading)}</h1> <p class="mt-6 text-lg leading-8 text-gray-200">${escape_html(content.hero.subheading)}</p> <div class="mt-10 flex items-center justify-center gap-x-6"><a${attr("href", content.hero.primaryCta.link)} class="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">${escape_html(content.hero.primaryCta.label)}</a></div></div></div> <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true"></div></div></div>`);
    bind_props($$props, { content });
  });
}
function Banner($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let banner2, hotspot, objectPositionStyle;
    let content = $$props["content"];
    let x2, y;
    banner2 = content && content.banner ? content.banner : null;
    hotspot = banner2 && banner2.mainImage && banner2.mainImage.hotspot ? banner2.mainImage.hotspot : null;
    if (hotspot) {
      x2 = hotspot.x * 100;
      y = hotspot.y * 100;
    }
    objectPositionStyle = `object-fit: cover; background-position: ${x2}% ${y}%;`;
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="opacity-80 banner bg-cover bg-center h-[500px] flex items-center justify-center"${attr_style(`${stringify2(objectPositionStyle)} background-image: url(${stringify2(urlFor(banner2.mainImage).url())})`)}><div class="text-white p-5 w-10/12 md:w-6/12 mx-auto bg-black opacity-90"><h2 class="text-4xl font-bold mb-4">${escape_html(banner2.bannerTitle)}</h2> <div class="mb-8">`);
    if (banner2.bannerBody) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(banner2.bannerBody);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let block2 = each_array[$$index_1];
        $$renderer2.push(`<!--[-->`);
        const each_array_1 = ensure_array_like(block2.children);
        for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
          let child = each_array_1[$$index];
          $$renderer2.push(`<p class="mb-2">${escape_html(child.text)}</p>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    if (banner2.bannerLink) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", banner2.bannerLink)} class="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">${escape_html(banner2.bannerCTA)}</a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
    bind_props($$props, { content });
  });
}
function BrandGrid($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let content = $$props["content"];
    let brands = content.brands.selectedBrands;
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="my-8 mx-4"><div class="w-full text-center"><h2 class="text-4xl w-full font-bold">${escape_html(content.brands.title)}</h2></div> <div class="flex flex-wrap justify-center py-6"><!--[-->`);
    const each_array = ensure_array_like(brands);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item2 = each_array[$$index];
      $$renderer2.push(`<div class="w-1/2 h-12 md:h-24 md:w-1/3 lg:w-1/5 xl:w-1/6 2xl:w-1/7 flex justify-center items-end"><img class="w-full object-contain filter grayscale mx-4 my-2 px-2 md:px-8"${attr("src", urlFor(item2.brandLogo).url())}${attr("alt", item2.brandName)}/></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    bind_props($$props, { content });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const content = data.props.homepage[0] ?? [];
    const componentMap = {
      postsGrid: PostGrid,
      existingPost: ExistingPost,
      salesPeople: HighlightedPeople,
      customerGrid: CustomerGrid,
      hero: Hero,
      banner: Banner,
      brands: BrandGrid
    };
    if (content && content.pageBuilderContent) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(content.pageBuilderContent);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let component14 = each_array[$$index];
        if (componentMap[component14._type]) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<!---->`);
          componentMap[component14._type]?.($$renderer2, { content: component14 });
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<p>Component of type "${escape_html(component14._type)}" not found.</p>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p>No content available to display.</p>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { data });
  });
}
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_index2();
    init_image();
    init_context();
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3,
  universal: () => page_ts_exports,
  universal_id: () => universal_id
});
var index3, component_cache3, component3, universal_id, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_page_ts();
    index3 = 2;
    component3 = async () => component_cache3 ?? (component_cache3 = (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default);
    universal_id = "src/routes/+page.ts";
    imports3 = ["_app/immutable/nodes/2.CJ_z0RW3.js", "_app/immutable/chunks/DXnBOYcI.js", "_app/immutable/chunks/Dp1pzeXC.js", "_app/immutable/chunks/CBbuBPfZ.js", "_app/immutable/chunks/BUApaBEI.js", "_app/immutable/chunks/BniCQta6.js", "_app/immutable/chunks/LOdgb3q2.js", "_app/immutable/chunks/fLdaqtOV.js", "_app/immutable/chunks/Dskp9KqV.js", "_app/immutable/chunks/7YGlKFBW.js", "_app/immutable/chunks/CsADvZg0.js", "_app/immutable/chunks/5-z_T_YA.js", "_app/immutable/chunks/BSTNQZyB.js", "_app/immutable/chunks/CrqJEF-O.js", "_app/immutable/chunks/DQc0Uil7.js", "_app/immutable/chunks/DVmcspCf.js", "_app/immutable/chunks/eNzDW-GZ.js", "_app/immutable/chunks/D4hICAc4.js", "_app/immutable/chunks/BE3ftbkZ.js", "_app/immutable/chunks/wL22vLqa.js"];
    stylesheets3 = [];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/entries/pages/about/_page.ts.js
var page_ts_exports2 = {};
__export(page_ts_exports2, {
  load: () => load2
});
var load2;
var init_page_ts2 = __esm({
  ".svelte-kit/output/server/entries/pages/about/_page.ts.js"() {
    init_exports();
    init_sanity();
    load2 = async () => {
      const page3 = await getPostPage("about");
      if (page3) {
        return {
          page: page3
        };
      }
      throw error(404, "Not found");
    };
  }
});

// .svelte-kit/output/server/chunks/RichText.js
function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
function RichText($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let blocks = $$props["blocks"];
    let customStyles = fallback($$props["customStyles"], () => ({}), true);
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(blocks);
    for (let $$index_3 = 0, $$length = each_array.length; $$index_3 < $$length; $$index_3++) {
      let item2 = each_array[$$index_3];
      if (item2.style === "h1") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<h1 class="text-4xl font-semibold">${escape_html(item2.children[0].text)}</h1>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (item2.style === "h2") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<h2 class="text-3xl font-semibold">${escape_html(item2.children[0].text)}</h2>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (item2.style === "h3") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<h3 class="text-2xl font-semibold">${escape_html(item2.children[0].text)}</h3>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (item2.style === "h4") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<h4 class="text-xl font-semibold">${escape_html(item2.children[0].text)}</h4>`);
            } else {
              $$renderer2.push("<!--[!-->");
              if (item2.style === "strong") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<p class="py-2 font-bold">${escape_html(item2.children[0].text)}</p>`);
              } else {
                $$renderer2.push("<!--[!-->");
                if (item2.style === "blockquote") {
                  $$renderer2.push("<!--[-->");
                  $$renderer2.push(`<blockquote${attr_class(`
        py-2 italic text-lg border-l-4 border-gray-500 pl-4
        ${customStyles.width ? `${customStyles.width}` : "w-full"}
      `)}>${escape_html(item2.children[0].text)}</blockquote>`);
                } else {
                  $$renderer2.push("<!--[!-->");
                  if (item2.listItem === "bullet") {
                    $$renderer2.push("<!--[-->");
                    $$renderer2.push(`<ul class="list-disc list-inside"><!--[-->`);
                    const each_array_1 = ensure_array_like(item2.children);
                    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
                      let child = each_array_1[$$index];
                      $$renderer2.push(`<li>${escape_html(child.text)}</li>`);
                    }
                    $$renderer2.push(`<!--]--></ul>`);
                  } else {
                    $$renderer2.push("<!--[!-->");
                    if (item2.markDefs && item2.markDefs.length > 0 && item2.markDefs[0]._type === "link") {
                      $$renderer2.push("<!--[-->");
                      $$renderer2.push(`<a${attr("href", item2.markDefs[0].href)}${attr_class(clsx2(customStyles.linkColor || "text-blue-500"))}><!--[-->`);
                      const each_array_2 = ensure_array_like(item2.children);
                      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
                        let child = each_array_2[$$index_1];
                        $$renderer2.push(`<!---->${escape_html(child.text)}`);
                      }
                      $$renderer2.push(`<!--]--></a>`);
                    } else {
                      $$renderer2.push("<!--[!-->");
                      $$renderer2.push(`<p class="py-2"><!--[-->`);
                      const each_array_3 = ensure_array_like(item2.children);
                      for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
                        let child = each_array_3[$$index_2];
                        if (child.marks && child.marks.includes("strong")) {
                          $$renderer2.push("<!--[-->");
                          $$renderer2.push(`<strong>${escape_html(child.text)}</strong>`);
                        } else {
                          $$renderer2.push("<!--[!-->");
                          if (child.marks && child.marks.includes("em")) {
                            $$renderer2.push("<!--[-->");
                            $$renderer2.push(`<em>${escape_html(child.text)}</em>`);
                          } else {
                            $$renderer2.push("<!--[!-->");
                            $$renderer2.push(`${escape_html(child.text)}`);
                          }
                          $$renderer2.push(`<!--]-->`);
                        }
                        $$renderer2.push(`<!--]-->`);
                      }
                      $$renderer2.push(`<!--]--></p>`);
                    }
                    $$renderer2.push(`<!--]-->`);
                  }
                  $$renderer2.push(`<!--]-->`);
                }
                $$renderer2.push(`<!--]-->`);
              }
              $$renderer2.push(`<!--]-->`);
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { blocks, customStyles });
  });
}
var init_RichText = __esm({
  ".svelte-kit/output/server/chunks/RichText.js"() {
    init_index2();
    init_context();
  }
});

// .svelte-kit/output/server/entries/pages/about/_page.svelte.js
var page_svelte_exports2 = {};
__export(page_svelte_exports2, {
  default: () => _page2
});
function _page2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let imagePosition;
    let data = $$props["data"];
    let post = data.page;
    let blocks = post.body;
    let x2;
    let y;
    if (post && post.mainImage && post.mainImage.hotspot) {
      x2 = post.mainImage.hotspot.x * 100;
      y = post.mainImage.hotspot.y * 100;
    }
    imagePosition = `object-fit: cover; object-position: ${x2}% ${y}%;`;
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <section>`);
    if (post.mainImage) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img class="w-full h-[400px] object-cover"${attr("src", urlFor(post.mainImage).width(800).url())}${attr("alt", `Cover image for ${post.title}`)}${attr_style(imagePosition)}/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="mx-auto max-w-[80%] md:w-[480px] py-24"><h1 class="text-4xl font-bold">${escape_html(post.title)}</h1> <p class="text-sm text-gray-500 pb-4 pt-1">${escape_html(formatDate(post._createdAt))}</p> `);
    if (post.excerpt) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-lg mb-4 font-semibold">${escape_html(post.excerpt)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    RichText($$renderer2, { blocks });
    $$renderer2.push(`<!----></div></section>`);
    bind_props($$props, { data });
  });
}
var init_page_svelte2 = __esm({
  ".svelte-kit/output/server/entries/pages/about/_page.svelte.js"() {
    init_index2();
    init_RichText();
    init_image();
    init_context();
  }
});

// .svelte-kit/output/server/nodes/3.js
var __exports4 = {};
__export(__exports4, {
  component: () => component4,
  fonts: () => fonts4,
  imports: () => imports4,
  index: () => index4,
  stylesheets: () => stylesheets4,
  universal: () => page_ts_exports2,
  universal_id: () => universal_id2
});
var index4, component_cache4, component4, universal_id2, imports4, stylesheets4, fonts4;
var init__4 = __esm({
  ".svelte-kit/output/server/nodes/3.js"() {
    init_page_ts2();
    index4 = 3;
    component4 = async () => component_cache4 ?? (component_cache4 = (await Promise.resolve().then(() => (init_page_svelte2(), page_svelte_exports2))).default);
    universal_id2 = "src/routes/about/+page.ts";
    imports4 = ["_app/immutable/nodes/3.kzBIytFk.js", "_app/immutable/chunks/CBbuBPfZ.js", "_app/immutable/chunks/BUApaBEI.js", "_app/immutable/chunks/DXnBOYcI.js", "_app/immutable/chunks/Dp1pzeXC.js", "_app/immutable/chunks/BniCQta6.js", "_app/immutable/chunks/LOdgb3q2.js", "_app/immutable/chunks/fLdaqtOV.js", "_app/immutable/chunks/Dskp9KqV.js", "_app/immutable/chunks/7YGlKFBW.js", "_app/immutable/chunks/eNzDW-GZ.js", "_app/immutable/chunks/BE3ftbkZ.js", "_app/immutable/chunks/wL22vLqa.js", "_app/immutable/chunks/BSTNQZyB.js", "_app/immutable/chunks/CrqJEF-O.js", "_app/immutable/chunks/DQc0Uil7.js", "_app/immutable/chunks/DVmcspCf.js", "_app/immutable/chunks/vg7xR3Ys.js", "_app/immutable/chunks/CsADvZg0.js", "_app/immutable/chunks/Cjsn179y.js", "_app/immutable/chunks/D4hICAc4.js"];
    stylesheets4 = [];
    fonts4 = [];
  }
});

// .svelte-kit/output/server/entries/pages/bilxtra/_page.ts.js
var page_ts_exports3 = {};
__export(page_ts_exports3, {
  load: () => load3
});
var load3;
var init_page_ts3 = __esm({
  ".svelte-kit/output/server/entries/pages/bilxtra/_page.ts.js"() {
    init_exports();
    init_sanity();
    load3 = async () => {
      const page3 = await getPostPage("bilxtra");
      if (page3) {
        return {
          page: page3
        };
      }
      throw error(404, "Not found");
    };
  }
});

// .svelte-kit/output/server/entries/pages/bilxtra/_page.svelte.js
var page_svelte_exports3 = {};
__export(page_svelte_exports3, {
  default: () => _page3
});
function _page3($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let imagePosition;
    let data = $$props["data"];
    let post = data.page;
    let blocks = post.body;
    let x2;
    let y;
    if (post && post.mainImage && post.mainImage.hotspot) {
      x2 = post.mainImage.hotspot.x * 100;
      y = post.mainImage.hotspot.y * 100;
    }
    imagePosition = `object-fit: cover; object-position: ${x2}% ${y}%;`;
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <section>`);
    if (post.mainImage) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img class="w-8/12 md:w-4/12 mx-auto object-scale-down py-4"${attr("src", urlFor(post.mainImage).width(800).url())}${attr("alt", `Cover image for ${post.title}`)}${attr_style(imagePosition)}/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="mx-auto max-w-[80%] md:w-[480px] py-4 md:py-24"><h1 class="text-4xl font-bold">${escape_html(post.title)}</h1> <p class="text-sm text-gray-500 pb-4 pt-1">${escape_html(formatDate(post._createdAt))}</p> `);
    if (post.excerpt) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-lg mb-4 font-semibold">${escape_html(post.excerpt)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    RichText($$renderer2, { blocks });
    $$renderer2.push(`<!----></div></section>`);
    bind_props($$props, { data });
  });
}
var init_page_svelte3 = __esm({
  ".svelte-kit/output/server/entries/pages/bilxtra/_page.svelte.js"() {
    init_index2();
    init_RichText();
    init_image();
    init_context();
  }
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  component: () => component5,
  fonts: () => fonts5,
  imports: () => imports5,
  index: () => index5,
  stylesheets: () => stylesheets5,
  universal: () => page_ts_exports3,
  universal_id: () => universal_id3
});
var index5, component_cache5, component5, universal_id3, imports5, stylesheets5, fonts5;
var init__5 = __esm({
  ".svelte-kit/output/server/nodes/4.js"() {
    init_page_ts3();
    index5 = 4;
    component5 = async () => component_cache5 ?? (component_cache5 = (await Promise.resolve().then(() => (init_page_svelte3(), page_svelte_exports3))).default);
    universal_id3 = "src/routes/bilxtra/+page.ts";
    imports5 = ["_app/immutable/nodes/4.hSV4_Y25.js", "_app/immutable/chunks/CBbuBPfZ.js", "_app/immutable/chunks/BUApaBEI.js", "_app/immutable/chunks/DXnBOYcI.js", "_app/immutable/chunks/Dp1pzeXC.js", "_app/immutable/chunks/BniCQta6.js", "_app/immutable/chunks/LOdgb3q2.js", "_app/immutable/chunks/fLdaqtOV.js", "_app/immutable/chunks/Dskp9KqV.js", "_app/immutable/chunks/7YGlKFBW.js", "_app/immutable/chunks/eNzDW-GZ.js", "_app/immutable/chunks/BE3ftbkZ.js", "_app/immutable/chunks/wL22vLqa.js", "_app/immutable/chunks/BSTNQZyB.js", "_app/immutable/chunks/CrqJEF-O.js", "_app/immutable/chunks/DQc0Uil7.js", "_app/immutable/chunks/DVmcspCf.js", "_app/immutable/chunks/vg7xR3Ys.js", "_app/immutable/chunks/CsADvZg0.js", "_app/immutable/chunks/Cjsn179y.js", "_app/immutable/chunks/D4hICAc4.js"];
    stylesheets5 = [];
    fonts5 = [];
  }
});

// .svelte-kit/output/server/entries/pages/contact/_page.ts.js
var page_ts_exports4 = {};
__export(page_ts_exports4, {
  load: () => load4
});
var load4;
var init_page_ts4 = __esm({
  ".svelte-kit/output/server/entries/pages/contact/_page.ts.js"() {
    init_sanity();
    init_exports();
    load4 = (async () => {
      const data = await getContactDetails();
      if (!data) {
        throw error(404, "Posts not found");
      }
      return {
        data
      };
    });
  }
});

// .svelte-kit/output/server/entries/pages/contact/_page.svelte.js
var page_svelte_exports4 = {};
__export(page_svelte_exports4, {
  default: () => _page4
});
function _page4($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<head><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/></head> <div class="p-6"><h1 class="text-2xl font-bold mb-4">Kontakt Oss</h1> <div class="flex flex-col md:flex-row md:space-x-6"><section class="mb-6 md:w-1/4"><h2 class="text-xl font-semibold mb-2">Adresse</h2> <p class="mb-2">${escape_html(contactInfo.location.kontoradresse)}</p> <p>\xC5pningstider: ${escape_html(contactInfo.location.\u00E5pningstider)}</p></section> <section class="mb-6 md:w-1/4"><section class="pb-4"><h2 class="text-xl font-semibold mb-2">Kontakt - Kontor</h2> <p>Telefon: ${escape_html(contactInfo.contactOffice.Telefon)}</p> <p>E-post: <a${attr("href", `mailto:${stringify2(contactInfo.contactOffice.epost)}`)} class="text-blue-500 underline">${escape_html(contactInfo.contactOffice.epost)}</a></p> <p>Org.nr: ${escape_html(contactInfo.contactOffice.orgNumber)}</p></section> <section class="pt-8"><h2 class="text-xl font-semibold mb-2">Kontakt - Ordre</h2> <p>Telefon: ${escape_html(contactInfo.contactOrders.telefon)}</p></section> <section class="my-6"></section></section> <section class="mb-6 md:w-1/4"><div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2005.3214341171545!2d10.794365677885205!3d59.82719217106928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464168ed44619aa5%3A0xb8fcbd241e975ce1!2sRosenholmveien%2012%2C%201252%20Oslo!5e0!3m2!1sno!2sno!4v1702986133504!5m2!1sno!2sno" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></section></div></div>`);
  });
}
var init_page_svelte4 = __esm({
  ".svelte-kit/output/server/entries/pages/contact/_page.svelte.js"() {
    init_index2();
    init_contactInfo();
    init_context();
  }
});

// .svelte-kit/output/server/nodes/5.js
var __exports6 = {};
__export(__exports6, {
  component: () => component6,
  fonts: () => fonts6,
  imports: () => imports6,
  index: () => index6,
  stylesheets: () => stylesheets6,
  universal: () => page_ts_exports4,
  universal_id: () => universal_id4
});
var index6, component_cache6, component6, universal_id4, imports6, stylesheets6, fonts6;
var init__6 = __esm({
  ".svelte-kit/output/server/nodes/5.js"() {
    init_page_ts4();
    index6 = 5;
    component6 = async () => component_cache6 ?? (component_cache6 = (await Promise.resolve().then(() => (init_page_svelte4(), page_svelte_exports4))).default);
    universal_id4 = "src/routes/contact/+page.ts";
    imports6 = ["_app/immutable/nodes/5.CUOigD8n.js", "_app/immutable/chunks/DXnBOYcI.js", "_app/immutable/chunks/Dp1pzeXC.js", "_app/immutable/chunks/CBbuBPfZ.js", "_app/immutable/chunks/BUApaBEI.js", "_app/immutable/chunks/BniCQta6.js", "_app/immutable/chunks/LOdgb3q2.js", "_app/immutable/chunks/fLdaqtOV.js", "_app/immutable/chunks/Dskp9KqV.js", "_app/immutable/chunks/eNzDW-GZ.js", "_app/immutable/chunks/BSTNQZyB.js", "_app/immutable/chunks/Dc7zkNrZ.js"];
    stylesheets6 = [];
    fonts6 = [];
  }
});

// .svelte-kit/output/server/entries/pages/hms/_page.svelte.js
var page_svelte_exports5 = {};
__export(page_svelte_exports5, {
  default: () => _page5
});
function _page5($$renderer, $$props) {
  let data = $$props["data"];
  $$renderer.push(`<div><h1>HMS</h1> <p>Dette er en side om HMS</p></div>`);
  bind_props($$props, { data });
}
var init_page_svelte5 = __esm({
  ".svelte-kit/output/server/entries/pages/hms/_page.svelte.js"() {
    init_index2();
  }
});

// .svelte-kit/output/server/nodes/6.js
var __exports7 = {};
__export(__exports7, {
  component: () => component7,
  fonts: () => fonts7,
  imports: () => imports7,
  index: () => index7,
  stylesheets: () => stylesheets7
});
var index7, component_cache7, component7, imports7, stylesheets7, fonts7;
var init__7 = __esm({
  ".svelte-kit/output/server/nodes/6.js"() {
    index7 = 6;
    component7 = async () => component_cache7 ?? (component_cache7 = (await Promise.resolve().then(() => (init_page_svelte5(), page_svelte_exports5))).default);
    imports7 = ["_app/immutable/nodes/6.mr5-F2Eq.js", "_app/immutable/chunks/BniCQta6.js", "_app/immutable/chunks/LOdgb3q2.js", "_app/immutable/chunks/fLdaqtOV.js", "_app/immutable/chunks/CrqJEF-O.js", "_app/immutable/chunks/DQc0Uil7.js", "_app/immutable/chunks/DVmcspCf.js"];
    stylesheets7 = [];
    fonts7 = [];
  }
});

// .svelte-kit/output/server/entries/pages/investors/_page.svelte.js
var page_svelte_exports6 = {};
__export(page_svelte_exports6, {
  default: () => _page6
});
function _page6($$renderer, $$props) {
  let data = $$props["data"];
  $$renderer.push(`<h1>Investor</h1>`);
  bind_props($$props, { data });
}
var init_page_svelte6 = __esm({
  ".svelte-kit/output/server/entries/pages/investors/_page.svelte.js"() {
    init_index2();
  }
});

// .svelte-kit/output/server/nodes/7.js
var __exports8 = {};
__export(__exports8, {
  component: () => component8,
  fonts: () => fonts8,
  imports: () => imports8,
  index: () => index8,
  stylesheets: () => stylesheets8
});
var index8, component_cache8, component8, imports8, stylesheets8, fonts8;
var init__8 = __esm({
  ".svelte-kit/output/server/nodes/7.js"() {
    index8 = 7;
    component8 = async () => component_cache8 ?? (component_cache8 = (await Promise.resolve().then(() => (init_page_svelte6(), page_svelte_exports6))).default);
    imports8 = ["_app/immutable/nodes/7.DH57GT4f.js", "_app/immutable/chunks/BniCQta6.js", "_app/immutable/chunks/LOdgb3q2.js", "_app/immutable/chunks/fLdaqtOV.js", "_app/immutable/chunks/CrqJEF-O.js", "_app/immutable/chunks/DQc0Uil7.js", "_app/immutable/chunks/DVmcspCf.js"];
    stylesheets8 = [];
    fonts8 = [];
  }
});

// .svelte-kit/output/server/entries/pages/people/_page.ts.js
var page_ts_exports5 = {};
__export(page_ts_exports5, {
  load: () => load5
});
var load5;
var init_page_ts5 = __esm({
  ".svelte-kit/output/server/entries/pages/people/_page.ts.js"() {
    init_sanity();
    init_exports();
    load5 = async () => {
      try {
        const [employees] = await Promise.all([getEmployees()]);
        if (!employees) {
          throw error(404, "Posts not found");
        }
        return {
          props: {
            employees
          }
        };
      } catch (err) {
        console.error(err);
        throw error(500, "Internal server error");
      }
    };
  }
});

// .svelte-kit/output/server/entries/pages/people/_page.svelte.js
var page_svelte_exports7 = {};
__export(page_svelte_exports7, {
  default: () => _page7
});
function Profile($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let fullName;
    let employee = $$props["employee"];
    fullName = `${employee.firstName} ${employee.lastName}`;
    $$renderer2.push(`<li class="bg-white/5 rounded-2xl overflow-hidden"><img class="aspect-[1/1] w-full rounded-2xl object-cover object-top"${attr("src", employee.profilePicture ? urlFor(employee.profilePicture).width(400).height(400).quality(10).url() : "default_profile.jpg")}${attr("alt", fullName)} loading="lazy"/> <div class="p-6"><h3 class="mt-2 text-lg font-semibold leading-8 tracking-tight text-white">${escape_html(fullName)}</h3> <p class="mt-1 text-base leading-7 text-gray-300 font-semibold">${escape_html(employee.department)}</p> <p class="mt-1 text-base leading-7 text-gray-300 font-light">${escape_html(employee.position)}</p> <div class="mt-0"><a${attr("href", `tel:${stringify2(employee.phone)}`)} class="text-white text-base font-light">Tlf: ${escape_html(employee.phone)}</a> <a${attr("href", `mailto:${stringify2(employee.email)}`)} class="text-blue-500 hover:text-blue-700 text-base underline">${escape_html(employee.email)}</a></div></div></li>`);
    bind_props($$props, { employee });
  });
}
function _page7($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let departments, filteredEmployees;
    let data = $$props["data"];
    const { employees } = data.props;
    let searchQuery = "";
    let selectedDepartment = null;
    departments = [...new Set(employees.map((employee) => employee.department))];
    filteredEmployees = employees.filter((employee) => {
      const fullName = `${employee.firstName} ${employee.lastName}`.toLowerCase();
      return fullName.includes(searchQuery.toLowerCase()) && selectedDepartment === null;
    });
    $$renderer2.push(`<div class="bg-gray-900 py-24 sm:py-32"><div class="mx-auto max-w-7xl px-6 lg:px-8"><div class="mx-auto lg:mx-0"><div class="w-full md:w-6/12"><h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Dette er oss</h2> <p class="mt-6 text-lg leading-8 text-gray-300">Vi er en dynamisk gruppe individer som er lidenskapelig opptatt av det vi gj\xF8r og dedikert til \xE5 levere de beste resultatene for v\xE5re kunder.</p></div> <input type="text"${attr("value", searchQuery)} placeholder="Finn ansatt" class="mt-6 w-full md:w-3/12 p-2 rounded border border-gray-300"/> <div class="mt-6 flex w-full flex-wrap gap-2"><button class="px-4 py-2 rounded bg-blue-500 text-white w-[140px]">Alle avdelinger</button> `);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(departments);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let department = each_array_1[$$index_1];
        $$renderer2.push(`<button${attr_class(`px-4 py-2 rounded text-white ${stringify2(department === selectedDepartment ? "bg-blue-700" : "bg-blue-500")}`)} style="width: 140px;">${escape_html(department)}</button>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div> <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl mt-6">`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`Alle avdelinger`);
    }
    $$renderer2.push(`<!--]--> <ul class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"><!--[-->`);
    const each_array_2 = ensure_array_like(filteredEmployees);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let employee = each_array_2[$$index_2];
      $$renderer2.push(`<li>`);
      Profile($$renderer2, { employee });
      $$renderer2.push(`<!----></li>`);
    }
    $$renderer2.push(`<!--]--></ul></h2></div></div>`);
    bind_props($$props, { data });
  });
}
var init_page_svelte7 = __esm({
  ".svelte-kit/output/server/entries/pages/people/_page.svelte.js"() {
    init_index2();
    init_image();
    init_context();
  }
});

// .svelte-kit/output/server/nodes/8.js
var __exports9 = {};
__export(__exports9, {
  component: () => component9,
  fonts: () => fonts9,
  imports: () => imports9,
  index: () => index9,
  stylesheets: () => stylesheets9,
  universal: () => page_ts_exports5,
  universal_id: () => universal_id5
});
var index9, component_cache9, component9, universal_id5, imports9, stylesheets9, fonts9;
var init__9 = __esm({
  ".svelte-kit/output/server/nodes/8.js"() {
    init_page_ts5();
    index9 = 8;
    component9 = async () => component_cache9 ?? (component_cache9 = (await Promise.resolve().then(() => (init_page_svelte7(), page_svelte_exports7))).default);
    universal_id5 = "src/routes/people/+page.ts";
    imports9 = ["_app/immutable/nodes/8.NqSRhM-z.js", "_app/immutable/chunks/DXnBOYcI.js", "_app/immutable/chunks/Dp1pzeXC.js", "_app/immutable/chunks/CBbuBPfZ.js", "_app/immutable/chunks/BUApaBEI.js", "_app/immutable/chunks/BniCQta6.js", "_app/immutable/chunks/LOdgb3q2.js", "_app/immutable/chunks/fLdaqtOV.js", "_app/immutable/chunks/Bl-_U8ph.js", "_app/immutable/chunks/Dskp9KqV.js", "_app/immutable/chunks/7YGlKFBW.js", "_app/immutable/chunks/CsADvZg0.js", "_app/immutable/chunks/eNzDW-GZ.js", "_app/immutable/chunks/Cjsn179y.js", "_app/immutable/chunks/wL22vLqa.js", "_app/immutable/chunks/BSTNQZyB.js", "_app/immutable/chunks/CrqJEF-O.js", "_app/immutable/chunks/DQc0Uil7.js", "_app/immutable/chunks/DVmcspCf.js", "_app/immutable/chunks/D4hICAc4.js"];
    stylesheets9 = [];
    fonts9 = [];
  }
});

// .svelte-kit/output/server/entries/pages/post/_slug_/_page.svelte.js
var page_svelte_exports8 = {};
__export(page_svelte_exports8, {
  default: () => _page8
});
function _page8($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let imagePosition;
    let data = $$props["data"];
    let blocks = data.body;
    let x2 = 50;
    let y = 50;
    if (data.mainImage?.hotspot) {
      x2 = data.mainImage.hotspot.x * 100;
      y = data.mainImage.hotspot.y * 100;
    }
    imagePosition = `object-fit: cover; object-position: ${x2}% ${y}%;`;
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <section>`);
    if (data.mainImage) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img class="w-full h-[400px] object-cover"${attr("src", urlFor(data.mainImage.asset).url())}${attr("alt", `Cover image for ${data.title}`)}${attr_style(imagePosition)}/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="mx-auto max-w-[80%] md:max-w-[640px] py-24"><div class="flex items-start gap-4">`);
    if (data.pdfFile && data.pdfFile.asset) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button class="flex-shrink-0 border border-black text-black font-bold py-4 px-4 rounded-sm hover:bg-gray-200 transition-colors duration-200 whitespace-nowrap">LAST NED PDF</button>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex-grow"><h1 class="text-4xl font-bold">${escape_html(data.title)}</h1> <p class="text-sm text-gray-500 pb-4 pt-1">${escape_html(formatDate(data._createdAt))}</p> `);
    if (data.excerpt) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-lg mb-4 font-semibold">${escape_html(data.excerpt)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    RichText($$renderer2, {
      blocks,
      customStyles: { linkColor: "text-red-500", width: "w-full" }
    });
    $$renderer2.push(`<!----></div></div></div></section>`);
    bind_props($$props, { data });
  });
}
var init_page_svelte8 = __esm({
  ".svelte-kit/output/server/entries/pages/post/_slug_/_page.svelte.js"() {
    init_index2();
    init_RichText();
    init_image();
    init_context();
  }
});

// .svelte-kit/output/server/nodes/9.js
var __exports10 = {};
__export(__exports10, {
  component: () => component10,
  fonts: () => fonts10,
  imports: () => imports10,
  index: () => index10,
  stylesheets: () => stylesheets10,
  universal: () => universal,
  universal_id: () => universal_id6
});
var index10, component_cache10, component10, universal, universal_id6, imports10, stylesheets10, fonts10;
var init__10 = __esm({
  ".svelte-kit/output/server/nodes/9.js"() {
    index10 = 9;
    component10 = async () => component_cache10 ?? (component_cache10 = (await Promise.resolve().then(() => (init_page_svelte8(), page_svelte_exports8))).default);
    universal = {
      "ssr": false,
      "load": null
    };
    universal_id6 = "src/routes/post/[slug]/+page.ts";
    imports10 = ["_app/immutable/nodes/9.BLJxYZm-.js", "_app/immutable/chunks/CBbuBPfZ.js", "_app/immutable/chunks/BUApaBEI.js", "_app/immutable/chunks/DXnBOYcI.js", "_app/immutable/chunks/Dp1pzeXC.js", "_app/immutable/chunks/BniCQta6.js", "_app/immutable/chunks/LOdgb3q2.js", "_app/immutable/chunks/fLdaqtOV.js", "_app/immutable/chunks/Dskp9KqV.js", "_app/immutable/chunks/7YGlKFBW.js", "_app/immutable/chunks/eNzDW-GZ.js", "_app/immutable/chunks/BE3ftbkZ.js", "_app/immutable/chunks/wL22vLqa.js", "_app/immutable/chunks/BSTNQZyB.js", "_app/immutable/chunks/CrqJEF-O.js", "_app/immutable/chunks/DQc0Uil7.js", "_app/immutable/chunks/DVmcspCf.js", "_app/immutable/chunks/vg7xR3Ys.js", "_app/immutable/chunks/CsADvZg0.js", "_app/immutable/chunks/Cjsn179y.js", "_app/immutable/chunks/D4hICAc4.js"];
    stylesheets10 = [];
    fonts10 = [];
  }
});

// .svelte-kit/output/server/entries/pages/reklamasjon/_page.svelte.js
var page_svelte_exports9 = {};
__export(page_svelte_exports9, {
  default: () => _page9
});
function _page9($$renderer, $$props) {
  let data = $$props["data"];
  $$renderer.push(`<h1>Reklamasjon</h1>`);
  bind_props($$props, { data });
}
var init_page_svelte9 = __esm({
  ".svelte-kit/output/server/entries/pages/reklamasjon/_page.svelte.js"() {
    init_index2();
  }
});

// .svelte-kit/output/server/nodes/10.js
var __exports11 = {};
__export(__exports11, {
  component: () => component11,
  fonts: () => fonts11,
  imports: () => imports11,
  index: () => index11,
  stylesheets: () => stylesheets11
});
var index11, component_cache11, component11, imports11, stylesheets11, fonts11;
var init__11 = __esm({
  ".svelte-kit/output/server/nodes/10.js"() {
    index11 = 10;
    component11 = async () => component_cache11 ?? (component_cache11 = (await Promise.resolve().then(() => (init_page_svelte9(), page_svelte_exports9))).default);
    imports11 = ["_app/immutable/nodes/10.Cubeu219.js", "_app/immutable/chunks/BniCQta6.js", "_app/immutable/chunks/LOdgb3q2.js", "_app/immutable/chunks/fLdaqtOV.js", "_app/immutable/chunks/CrqJEF-O.js", "_app/immutable/chunks/DQc0Uil7.js", "_app/immutable/chunks/DVmcspCf.js"];
    stylesheets11 = [];
    fonts11 = [];
  }
});

// .svelte-kit/output/server/entries/pages/skjema/_page.ts.js
var page_ts_exports6 = {};
__export(page_ts_exports6, {
  load: () => load6
});
var load6;
var init_page_ts6 = __esm({
  ".svelte-kit/output/server/entries/pages/skjema/_page.ts.js"() {
    init_sanity();
    load6 = (async () => {
      const forms = await getForms();
      return { forms };
    });
  }
});

// .svelte-kit/output/server/entries/pages/skjema/_page.svelte.js
var page_svelte_exports10 = {};
__export(page_svelte_exports10, {
  default: () => _page10
});
function _page10($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const forms = data.forms;
    console.log(forms);
    $$renderer2.push(`<div class="container mx-auto py-8"><h1 class="text-3xl font-bold text-center mb-8">Skjema</h1> <div class="flex flex-col items-center"><ul class="w-full max-w-lg"><!--[-->`);
    const each_array = ensure_array_like(forms);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let form = each_array[$$index];
      $$renderer2.push(`<li class="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center"><div class="flex-1"><span class="text-lg font-medium">${escape_html(form.title)}</span> `);
      if (form.description) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="text-sm text-gray-600">${escape_html(form.description)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> `);
      if (form.file?.asset?.url) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a${attr("href", form.file.asset.url)} download="" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors hover:cursor-pointer">Last ned</a>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<span class="text-sm text-red-500">Skjema ikke tilgjengelig</span>`);
      }
      $$renderer2.push(`<!--]--></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div></div>`);
    bind_props($$props, { data });
  });
}
var init_page_svelte10 = __esm({
  ".svelte-kit/output/server/entries/pages/skjema/_page.svelte.js"() {
    init_index2();
    init_context();
  }
});

// .svelte-kit/output/server/nodes/11.js
var __exports12 = {};
__export(__exports12, {
  component: () => component12,
  fonts: () => fonts12,
  imports: () => imports12,
  index: () => index12,
  stylesheets: () => stylesheets12,
  universal: () => page_ts_exports6,
  universal_id: () => universal_id7
});
var index12, component_cache12, component12, universal_id7, imports12, stylesheets12, fonts12;
var init__12 = __esm({
  ".svelte-kit/output/server/nodes/11.js"() {
    init_page_ts6();
    index12 = 11;
    component12 = async () => component_cache12 ?? (component_cache12 = (await Promise.resolve().then(() => (init_page_svelte10(), page_svelte_exports10))).default);
    universal_id7 = "src/routes/skjema/+page.ts";
    imports12 = ["_app/immutable/nodes/11.DqZPl06M.js", "_app/immutable/chunks/DXnBOYcI.js", "_app/immutable/chunks/Dp1pzeXC.js", "_app/immutable/chunks/BniCQta6.js", "_app/immutable/chunks/LOdgb3q2.js", "_app/immutable/chunks/fLdaqtOV.js", "_app/immutable/chunks/Dskp9KqV.js", "_app/immutable/chunks/7YGlKFBW.js", "_app/immutable/chunks/CsADvZg0.js", "_app/immutable/chunks/eNzDW-GZ.js", "_app/immutable/chunks/BSTNQZyB.js", "_app/immutable/chunks/CrqJEF-O.js", "_app/immutable/chunks/DQc0Uil7.js", "_app/immutable/chunks/DVmcspCf.js"];
    stylesheets12 = [];
    fonts12 = [];
  }
});

// .svelte-kit/output/server/entries/pages/subsidiaries/_page.svelte.js
var page_svelte_exports11 = {};
__export(page_svelte_exports11, {
  default: () => _page11
});
function _page11($$renderer, $$props) {
  let data = $$props["data"];
  $$renderer.push(`<h1>Subsidiaries</h1>`);
  bind_props($$props, { data });
}
var init_page_svelte11 = __esm({
  ".svelte-kit/output/server/entries/pages/subsidiaries/_page.svelte.js"() {
    init_index2();
  }
});

// .svelte-kit/output/server/nodes/12.js
var __exports13 = {};
__export(__exports13, {
  component: () => component13,
  fonts: () => fonts13,
  imports: () => imports13,
  index: () => index13,
  stylesheets: () => stylesheets13
});
var index13, component_cache13, component13, imports13, stylesheets13, fonts13;
var init__13 = __esm({
  ".svelte-kit/output/server/nodes/12.js"() {
    index13 = 12;
    component13 = async () => component_cache13 ?? (component_cache13 = (await Promise.resolve().then(() => (init_page_svelte11(), page_svelte_exports11))).default);
    imports13 = ["_app/immutable/nodes/12.9ZMlsHrT.js", "_app/immutable/chunks/BniCQta6.js", "_app/immutable/chunks/LOdgb3q2.js", "_app/immutable/chunks/fLdaqtOV.js", "_app/immutable/chunks/CrqJEF-O.js", "_app/immutable/chunks/DQc0Uil7.js", "_app/immutable/chunks/DVmcspCf.js"];
    stylesheets13 = [];
    fonts13 = [];
  }
});

// .svelte-kit/output/server/index.js
init_false();
init_exports();
init_internal();
init_server();

// .svelte-kit/output/server/chunks/environment.js
var base = "";
var assets = base;
var app_dir = "_app";
var relative = true;
var initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getPrototypeOf(proto) === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i2 = 0; i2 < len; i2 += 1) {
    const char = str[i2];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i2) + replacement;
      last_pos = i2 + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
function enumerable_symbols(object) {
  return Object.getOwnPropertySymbols(object).filter(
    (symbol) => Object.getOwnPropertyDescriptor(object, symbol).enumerable
  );
}
var is_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function stringify_key(key2) {
  return is_identifier.test(key2) ? "." + key2 : "[" + JSON.stringify(key2) + "]";
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing, (value2) => uneval(value2, replacer));
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
        case "URL":
        case "URLSearchParams":
          return;
        case "Array":
          thing.forEach((value2, i2) => {
            keys.push(`[${i2}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array":
          walk(thing.buffer);
          return;
        case "ArrayBuffer":
          return;
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          return;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(stringify_key(key2));
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a4, b) => b[1] - a4[1]).forEach((entry, i2) => {
    names.set(entry[0], get_name(i2));
  });
  function stringify4(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify4(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "URL":
        return `new URL(${stringify_string(thing.toString())})`;
      case "URLSearchParams":
        return `new URLSearchParams(${stringify_string(thing.toString())})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v2, i2) => i2 in thing ? stringify4(v2) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify4).join(",")}])`;
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "BigInt64Array":
      case "BigUint64Array": {
        let str2 = `new ${type}`;
        if (counts.get(thing.buffer) === 1) {
          const array2 = new thing.constructor(thing.buffer);
          str2 += `([${array2}])`;
        } else {
          str2 += `([${stringify4(thing.buffer)}])`;
        }
        const a4 = thing.byteOffset;
        const b = a4 + thing.byteLength;
        if (a4 > 0 || b !== thing.buffer.byteLength) {
          const m = +/(\d+)/.exec(type)[1] / 8;
          str2 += `.subarray(${a4 / m},${b / m})`;
        }
        return str2;
      }
      case "ArrayBuffer": {
        const ui8 = new Uint8Array(thing);
        return `new Uint8Array([${ui8.toString()}]).buffer`;
      }
      case "Temporal.Duration":
      case "Temporal.Instant":
      case "Temporal.PlainDate":
      case "Temporal.PlainTime":
      case "Temporal.PlainDateTime":
      case "Temporal.PlainMonthDay":
      case "Temporal.PlainYearMonth":
      case "Temporal.ZonedDateTime":
        return `${type}.from(${stringify_string(thing.toString())})`;
      default:
        const keys2 = Object.keys(thing);
        const obj = keys2.map((key2) => `${safe_key(key2)}:${stringify4(thing[key2])}`).join(",");
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return keys2.length > 0 ? `{${obj},__proto__:null}` : `{__proto__:null}`;
        }
        return `{${obj}}`;
    }
  }
  const str = stringify4(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify4(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v2, i2) => {
            statements.push(`${name}[${i2}]=${stringify4(v2)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v2) => `add(${stringify4(v2)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v2]) => `set(${stringify4(k)}, ${stringify4(v2)})`).join(".")}`
          );
          break;
        case "ArrayBuffer":
          values.push(
            `new Uint8Array([${new Uint8Array(thing).join(",")}]).buffer`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify4(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c5) {
  return escaped[c5] || c5;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string") return stringify_string(thing);
  if (thing === void 0) return "void 0";
  if (thing === 0 && 1 / thing < 0) return "-0";
  const str = String(thing);
  if (typeof thing === "number") return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint") return thing + "n";
  return str;
}

// node_modules/devalue/src/base64.js
function encode64(arraybuffer) {
  const dv = new DataView(arraybuffer);
  let binaryString = "";
  for (let i2 = 0; i2 < arraybuffer.byteLength; i2++) {
    binaryString += String.fromCharCode(dv.getUint8(i2));
  }
  return binaryToAscii(binaryString);
}
function decode64(string) {
  const binaryString = asciiToBinary(string);
  const arraybuffer = new ArrayBuffer(binaryString.length);
  const dv = new DataView(arraybuffer);
  for (let i2 = 0; i2 < arraybuffer.byteLength; i2++) {
    dv.setUint8(i2, binaryString.charCodeAt(i2));
  }
  return arraybuffer;
}
var KEY_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function asciiToBinary(data) {
  if (data.length % 4 === 0) {
    data = data.replace(/==?$/, "");
  }
  let output = "";
  let buffer = 0;
  let accumulatedBits = 0;
  for (let i2 = 0; i2 < data.length; i2++) {
    buffer <<= 6;
    buffer |= KEY_STRING.indexOf(data[i2]);
    accumulatedBits += 6;
    if (accumulatedBits === 24) {
      output += String.fromCharCode((buffer & 16711680) >> 16);
      output += String.fromCharCode((buffer & 65280) >> 8);
      output += String.fromCharCode(buffer & 255);
      buffer = accumulatedBits = 0;
    }
  }
  if (accumulatedBits === 12) {
    buffer >>= 4;
    output += String.fromCharCode(buffer);
  } else if (accumulatedBits === 18) {
    buffer >>= 2;
    output += String.fromCharCode((buffer & 65280) >> 8);
    output += String.fromCharCode(buffer & 255);
  }
  return output;
}
function binaryToAscii(str) {
  let out = "";
  for (let i2 = 0; i2 < str.length; i2 += 3) {
    const groupsOfSix = [void 0, void 0, void 0, void 0];
    groupsOfSix[0] = str.charCodeAt(i2) >> 2;
    groupsOfSix[1] = (str.charCodeAt(i2) & 3) << 4;
    if (str.length > i2 + 1) {
      groupsOfSix[1] |= str.charCodeAt(i2 + 1) >> 4;
      groupsOfSix[2] = (str.charCodeAt(i2 + 1) & 15) << 2;
    }
    if (str.length > i2 + 2) {
      groupsOfSix[2] |= str.charCodeAt(i2 + 2) >> 6;
      groupsOfSix[3] = str.charCodeAt(i2 + 2) & 63;
    }
    for (let j2 = 0; j2 < groupsOfSix.length; j2++) {
      if (typeof groupsOfSix[j2] === "undefined") {
        out += "=";
      } else {
        out += KEY_STRING[groupsOfSix[j2]];
      }
    }
  }
  return out;
}

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/parse.js
function parse(serialized, revivers) {
  return unflatten(JSON.parse(serialized), revivers);
}
function unflatten(parsed, revivers) {
  if (typeof parsed === "number") return hydrate2(parsed, true);
  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error("Invalid input");
  }
  const values = (
    /** @type {any[]} */
    parsed
  );
  const hydrated = Array(values.length);
  function hydrate2(index14, standalone = false) {
    if (index14 === UNDEFINED) return void 0;
    if (index14 === NAN) return NaN;
    if (index14 === POSITIVE_INFINITY) return Infinity;
    if (index14 === NEGATIVE_INFINITY) return -Infinity;
    if (index14 === NEGATIVE_ZERO) return -0;
    if (standalone || typeof index14 !== "number") {
      throw new Error(`Invalid input`);
    }
    if (index14 in hydrated) return hydrated[index14];
    const value = values[index14];
    if (!value || typeof value !== "object") {
      hydrated[index14] = value;
    } else if (Array.isArray(value)) {
      if (typeof value[0] === "string") {
        const type = value[0];
        const reviver = revivers?.[type];
        if (reviver) {
          let i2 = value[1];
          if (typeof i2 !== "number") {
            i2 = values.push(value[1]) - 1;
          }
          return hydrated[index14] = reviver(hydrate2(i2));
        }
        switch (type) {
          case "Date":
            hydrated[index14] = new Date(value[1]);
            break;
          case "Set":
            const set2 = /* @__PURE__ */ new Set();
            hydrated[index14] = set2;
            for (let i2 = 1; i2 < value.length; i2 += 1) {
              set2.add(hydrate2(value[i2]));
            }
            break;
          case "Map":
            const map2 = /* @__PURE__ */ new Map();
            hydrated[index14] = map2;
            for (let i2 = 1; i2 < value.length; i2 += 2) {
              map2.set(hydrate2(value[i2]), hydrate2(value[i2 + 1]));
            }
            break;
          case "RegExp":
            hydrated[index14] = new RegExp(value[1], value[2]);
            break;
          case "Object":
            hydrated[index14] = Object(value[1]);
            break;
          case "BigInt":
            hydrated[index14] = BigInt(value[1]);
            break;
          case "null":
            const obj = /* @__PURE__ */ Object.create(null);
            hydrated[index14] = obj;
            for (let i2 = 1; i2 < value.length; i2 += 2) {
              obj[value[i2]] = hydrate2(value[i2 + 1]);
            }
            break;
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array": {
            const TypedArrayConstructor = globalThis[type];
            const typedArray = new TypedArrayConstructor(hydrate2(value[1]));
            hydrated[index14] = value[2] !== void 0 ? typedArray.subarray(value[2], value[3]) : typedArray;
            break;
          }
          case "ArrayBuffer": {
            const base64 = value[1];
            const arraybuffer = decode64(base64);
            hydrated[index14] = arraybuffer;
            break;
          }
          case "Temporal.Duration":
          case "Temporal.Instant":
          case "Temporal.PlainDate":
          case "Temporal.PlainTime":
          case "Temporal.PlainDateTime":
          case "Temporal.PlainMonthDay":
          case "Temporal.PlainYearMonth":
          case "Temporal.ZonedDateTime": {
            const temporalName = type.slice(9);
            hydrated[index14] = Temporal[temporalName].from(value[1]);
            break;
          }
          case "URL": {
            const url = new URL(value[1]);
            hydrated[index14] = url;
            break;
          }
          case "URLSearchParams": {
            const url = new URLSearchParams(value[1]);
            hydrated[index14] = url;
            break;
          }
          default:
            throw new Error(`Unknown type ${type}`);
        }
      } else {
        const array2 = new Array(value.length);
        hydrated[index14] = array2;
        for (let i2 = 0; i2 < value.length; i2 += 1) {
          const n4 = value[i2];
          if (n4 === HOLE) continue;
          array2[i2] = hydrate2(n4);
        }
      }
    } else {
      const object = {};
      hydrated[index14] = object;
      for (const key2 in value) {
        if (key2 === "__proto__") {
          throw new Error("Cannot parse an object with a `__proto__` property");
        }
        const n4 = value[key2];
        object[key2] = hydrate2(n4);
      }
    }
    return hydrated[index14];
  }
  return hydrate2(0);
}

// node_modules/devalue/src/stringify.js
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  if (reducers) {
    for (const key2 of Object.getOwnPropertyNames(reducers)) {
      custom.push({ key: key2, fn: reducers[key2] });
    }
  }
  const keys = [];
  let p3 = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (thing === void 0) return UNDEFINED;
    if (Number.isNaN(thing)) return NAN;
    if (thing === Infinity) return POSITIVE_INFINITY;
    if (thing === -Infinity) return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO;
    if (indexes.has(thing)) return indexes.get(thing);
    const index15 = p3++;
    indexes.set(thing, index15);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index15] = `["${key2}",${flatten(value2)}]`;
        return index15;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          const valid = !isNaN(thing.getDate());
          str = `["Date","${valid ? thing.toISOString() : ""}"]`;
          break;
        case "URL":
          str = `["URL",${stringify_string(thing.toString())}]`;
          break;
        case "URLSearchParams":
          str = `["URLSearchParams",${stringify_string(thing.toString())}]`;
          break;
        case "RegExp":
          const { source: source2, flags: flags2 } = thing;
          str = flags2 ? `["RegExp",${stringify_string(source2)},"${flags2}"]` : `["RegExp",${stringify_string(source2)}]`;
          break;
        case "Array":
          str = "[";
          for (let i2 = 0; i2 < thing.length; i2 += 1) {
            if (i2 > 0) str += ",";
            if (i2 in thing) {
              keys.push(`[${i2}]`);
              str += flatten(thing[i2]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
            keys.pop();
          }
          str += "]";
          break;
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "BigInt64Array":
        case "BigUint64Array": {
          const typedArray = thing;
          str = '["' + type + '",' + flatten(typedArray.buffer);
          const a4 = thing.byteOffset;
          const b = a4 + thing.byteLength;
          if (a4 > 0 || b !== typedArray.buffer.byteLength) {
            const m = +/(\d+)/.exec(type)[1] / 8;
            str += `,${a4 / m},${b / m}`;
          }
          str += "]";
          break;
        }
        case "ArrayBuffer": {
          const arraybuffer = thing;
          const base64 = encode64(arraybuffer);
          str = `["ArrayBuffer","${base64}"]`;
          break;
        }
        case "Temporal.Duration":
        case "Temporal.Instant":
        case "Temporal.PlainDate":
        case "Temporal.PlainTime":
        case "Temporal.PlainDateTime":
        case "Temporal.PlainMonthDay":
        case "Temporal.PlainYearMonth":
        case "Temporal.ZonedDateTime":
          str = `["${type}",${stringify_string(thing.toString())}]`;
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (enumerable_symbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(stringify_key(key2));
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started) str += ",";
              started = true;
              keys.push(stringify_key(key2));
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index15] = str;
    return index15;
  }
  const index14 = flatten(value);
  if (index14 < 0) return `${index14}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string") return stringify_string(thing);
  if (thing instanceof String) return stringify_string(thing.toString());
  if (thing === void 0) return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0) return NEGATIVE_ZERO.toString();
  if (type === "bigint") return `["BigInt","${thing}"]`;
  return String(thing);
}

// .svelte-kit/output/server/index.js
init_exports2();
init_utils2();
init_chunks();

// .svelte-kit/output/server/chunks/internal.js
init_index2();
init_context();
init_clsx();
var public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function hydration_mismatch(location2) {
  {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
function svelte_boundary_reset_noop() {
  {
    console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
  }
}
var hydrating = false;
function set_hydrating(value) {
  hydrating = value;
}
var hydrate_node;
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
function hydrate_next() {
  return set_hydrate_node(
    /** @type {TemplateNode} */
    get_next_sibling(hydrate_node)
  );
}
function next(count = 1) {
  if (hydrating) {
    var i2 = count;
    var node = hydrate_node;
    while (i2--) {
      node = /** @type {TemplateNode} */
      get_next_sibling(node);
    }
    hydrate_node = node;
  }
}
function skip_nodes(remove = true) {
  var depth = 0;
  var node = hydrate_node;
  while (true) {
    if (node.nodeType === COMMENT_NODE) {
      var data = (
        /** @type {Comment} */
        node.data
      );
      if (data === HYDRATION_END) {
        if (depth === 0) return node;
        depth -= 1;
      } else if (data === HYDRATION_START || data === HYDRATION_START_ELSE) {
        depth += 1;
      }
    }
    var next2 = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    if (remove) node.remove();
    node = next2;
  }
}
function createSubscriber(start) {
  let subscribers = 0;
  let version = source(0);
  let stop;
  return () => {
    if (effect_tracking()) {
      get(version);
      render_effect(() => {
        if (subscribers === 0) {
          stop = untrack(() => start(() => increment(version)));
        }
        subscribers += 1;
        return () => {
          queue_micro_task(() => {
            subscribers -= 1;
            if (subscribers === 0) {
              stop?.();
              stop = void 0;
              increment(version);
            }
          });
        };
      });
    }
  };
}
var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED | BOUNDARY_EFFECT;
function boundary(node, props, children) {
  new Boundary(node, props, children);
}
var _pending2, _anchor, _hydrate_open, _props, _children, _effect, _main_effect, _pending_effect, _failed_effect, _offscreen_fragment, _pending_anchor, _local_pending_count, _pending_count, _is_creating_fallback, _effect_pending, _effect_pending_update, _effect_pending_subscriber, _Boundary_instances, hydrate_resolved_content_fn, hydrate_pending_content_fn, get_anchor_fn, run_fn, show_pending_snippet_fn, update_pending_count_fn;
var Boundary = class {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(node, props, children) {
    __privateAdd(this, _Boundary_instances);
    /** @type {Boundary | null} */
    __publicField(this, "parent");
    __privateAdd(this, _pending2, false);
    /** @type {TemplateNode} */
    __privateAdd(this, _anchor);
    /** @type {TemplateNode | null} */
    __privateAdd(this, _hydrate_open, hydrating ? hydrate_node : null);
    /** @type {BoundaryProps} */
    __privateAdd(this, _props);
    /** @type {((anchor: Node) => void)} */
    __privateAdd(this, _children);
    /** @type {Effect} */
    __privateAdd(this, _effect);
    /** @type {Effect | null} */
    __privateAdd(this, _main_effect, null);
    /** @type {Effect | null} */
    __privateAdd(this, _pending_effect, null);
    /** @type {Effect | null} */
    __privateAdd(this, _failed_effect, null);
    /** @type {DocumentFragment | null} */
    __privateAdd(this, _offscreen_fragment, null);
    /** @type {TemplateNode | null} */
    __privateAdd(this, _pending_anchor, null);
    __privateAdd(this, _local_pending_count, 0);
    __privateAdd(this, _pending_count, 0);
    __privateAdd(this, _is_creating_fallback, false);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    __privateAdd(this, _effect_pending, null);
    __privateAdd(this, _effect_pending_update, () => {
      if (__privateGet(this, _effect_pending)) {
        internal_set(__privateGet(this, _effect_pending), __privateGet(this, _local_pending_count));
      }
    });
    __privateAdd(this, _effect_pending_subscriber, createSubscriber(() => {
      __privateSet(this, _effect_pending, source(__privateGet(this, _local_pending_count)));
      return () => {
        __privateSet(this, _effect_pending, null);
      };
    }));
    __privateSet(this, _anchor, node);
    __privateSet(this, _props, props);
    __privateSet(this, _children, children);
    this.parent = /** @type {Effect} */
    active_effect.b;
    __privateSet(this, _pending2, !!__privateGet(this, _props).pending);
    __privateSet(this, _effect, block(() => {
      active_effect.b = this;
      if (hydrating) {
        const comment = __privateGet(this, _hydrate_open);
        hydrate_next();
        const server_rendered_pending = (
          /** @type {Comment} */
          comment.nodeType === COMMENT_NODE && /** @type {Comment} */
          comment.data === HYDRATION_START_ELSE
        );
        if (server_rendered_pending) {
          __privateMethod(this, _Boundary_instances, hydrate_pending_content_fn).call(this);
        } else {
          __privateMethod(this, _Boundary_instances, hydrate_resolved_content_fn).call(this);
        }
      } else {
        var anchor = __privateMethod(this, _Boundary_instances, get_anchor_fn).call(this);
        try {
          __privateSet(this, _main_effect, branch(() => children(anchor)));
        } catch (error2) {
          this.error(error2);
        }
        if (__privateGet(this, _pending_count) > 0) {
          __privateMethod(this, _Boundary_instances, show_pending_snippet_fn).call(this);
        } else {
          __privateSet(this, _pending2, false);
        }
      }
      return () => {
        __privateGet(this, _pending_anchor)?.remove();
      };
    }, flags));
    if (hydrating) {
      __privateSet(this, _anchor, hydrate_node);
    }
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return __privateGet(this, _pending2) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!__privateGet(this, _props).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(d3) {
    __privateMethod(this, _Boundary_instances, update_pending_count_fn).call(this, d3);
    __privateSet(this, _local_pending_count, __privateGet(this, _local_pending_count) + d3);
    effect_pending_updates.add(__privateGet(this, _effect_pending_update));
  }
  get_effect_pending() {
    __privateGet(this, _effect_pending_subscriber).call(this);
    return get(
      /** @type {Source<number>} */
      __privateGet(this, _effect_pending)
    );
  }
  /** @param {unknown} error */
  error(error2) {
    var onerror = __privateGet(this, _props).onerror;
    let failed = __privateGet(this, _props).failed;
    if (__privateGet(this, _is_creating_fallback) || !onerror && !failed) {
      throw error2;
    }
    if (__privateGet(this, _main_effect)) {
      destroy_effect(__privateGet(this, _main_effect));
      __privateSet(this, _main_effect, null);
    }
    if (__privateGet(this, _pending_effect)) {
      destroy_effect(__privateGet(this, _pending_effect));
      __privateSet(this, _pending_effect, null);
    }
    if (__privateGet(this, _failed_effect)) {
      destroy_effect(__privateGet(this, _failed_effect));
      __privateSet(this, _failed_effect, null);
    }
    if (hydrating) {
      set_hydrate_node(
        /** @type {TemplateNode} */
        __privateGet(this, _hydrate_open)
      );
      next();
      set_hydrate_node(skip_nodes());
    }
    var did_reset = false;
    var calling_on_error = false;
    const reset2 = () => {
      if (did_reset) {
        svelte_boundary_reset_noop();
        return;
      }
      did_reset = true;
      if (calling_on_error) {
        svelte_boundary_reset_onerror();
      }
      Batch.ensure();
      __privateSet(this, _local_pending_count, 0);
      if (__privateGet(this, _failed_effect) !== null) {
        pause_effect(__privateGet(this, _failed_effect), () => {
          __privateSet(this, _failed_effect, null);
        });
      }
      __privateSet(this, _pending2, this.has_pending_snippet());
      __privateSet(this, _main_effect, __privateMethod(this, _Boundary_instances, run_fn).call(this, () => {
        __privateSet(this, _is_creating_fallback, false);
        return branch(() => __privateGet(this, _children).call(this, __privateGet(this, _anchor)));
      }));
      if (__privateGet(this, _pending_count) > 0) {
        __privateMethod(this, _Boundary_instances, show_pending_snippet_fn).call(this);
      } else {
        __privateSet(this, _pending2, false);
      }
    };
    var previous_reaction = active_reaction;
    try {
      set_active_reaction(null);
      calling_on_error = true;
      onerror?.(error2, reset2);
      calling_on_error = false;
    } catch (error22) {
      invoke_error_boundary(error22, __privateGet(this, _effect) && __privateGet(this, _effect).parent);
    } finally {
      set_active_reaction(previous_reaction);
    }
    if (failed) {
      queue_micro_task(() => {
        __privateSet(this, _failed_effect, __privateMethod(this, _Boundary_instances, run_fn).call(this, () => {
          Batch.ensure();
          __privateSet(this, _is_creating_fallback, true);
          try {
            return branch(() => {
              failed(
                __privateGet(this, _anchor),
                () => error2,
                () => reset2
              );
            });
          } catch (error22) {
            invoke_error_boundary(
              error22,
              /** @type {Effect} */
              __privateGet(this, _effect).parent
            );
            return null;
          } finally {
            __privateSet(this, _is_creating_fallback, false);
          }
        }));
      });
    }
  }
};
_pending2 = new WeakMap();
_anchor = new WeakMap();
_hydrate_open = new WeakMap();
_props = new WeakMap();
_children = new WeakMap();
_effect = new WeakMap();
_main_effect = new WeakMap();
_pending_effect = new WeakMap();
_failed_effect = new WeakMap();
_offscreen_fragment = new WeakMap();
_pending_anchor = new WeakMap();
_local_pending_count = new WeakMap();
_pending_count = new WeakMap();
_is_creating_fallback = new WeakMap();
_effect_pending = new WeakMap();
_effect_pending_update = new WeakMap();
_effect_pending_subscriber = new WeakMap();
_Boundary_instances = new WeakSet();
hydrate_resolved_content_fn = function() {
  try {
    __privateSet(this, _main_effect, branch(() => __privateGet(this, _children).call(this, __privateGet(this, _anchor))));
  } catch (error2) {
    this.error(error2);
  }
  __privateSet(this, _pending2, false);
};
hydrate_pending_content_fn = function() {
  const pending = __privateGet(this, _props).pending;
  if (!pending) {
    return;
  }
  __privateSet(this, _pending_effect, branch(() => pending(__privateGet(this, _anchor))));
  Batch.enqueue(() => {
    var anchor = __privateMethod(this, _Boundary_instances, get_anchor_fn).call(this);
    __privateSet(this, _main_effect, __privateMethod(this, _Boundary_instances, run_fn).call(this, () => {
      Batch.ensure();
      return branch(() => __privateGet(this, _children).call(this, anchor));
    }));
    if (__privateGet(this, _pending_count) > 0) {
      __privateMethod(this, _Boundary_instances, show_pending_snippet_fn).call(this);
    } else {
      pause_effect(
        /** @type {Effect} */
        __privateGet(this, _pending_effect),
        () => {
          __privateSet(this, _pending_effect, null);
        }
      );
      __privateSet(this, _pending2, false);
    }
  });
};
get_anchor_fn = function() {
  var anchor = __privateGet(this, _anchor);
  if (__privateGet(this, _pending2)) {
    __privateSet(this, _pending_anchor, create_text());
    __privateGet(this, _anchor).before(__privateGet(this, _pending_anchor));
    anchor = __privateGet(this, _pending_anchor);
  }
  return anchor;
};
/**
 * @param {() => Effect | null} fn
 */
run_fn = function(fn) {
  var previous_effect = active_effect;
  var previous_reaction = active_reaction;
  var previous_ctx = component_context;
  set_active_effect(__privateGet(this, _effect));
  set_active_reaction(__privateGet(this, _effect));
  set_component_context(__privateGet(this, _effect).ctx);
  try {
    return fn();
  } catch (e2) {
    handle_error(e2);
    return null;
  } finally {
    set_active_effect(previous_effect);
    set_active_reaction(previous_reaction);
    set_component_context(previous_ctx);
  }
};
show_pending_snippet_fn = function() {
  const pending = (
    /** @type {(anchor: Node) => void} */
    __privateGet(this, _props).pending
  );
  if (__privateGet(this, _main_effect) !== null) {
    __privateSet(this, _offscreen_fragment, document.createDocumentFragment());
    __privateGet(this, _offscreen_fragment).append(
      /** @type {TemplateNode} */
      __privateGet(this, _pending_anchor)
    );
    move_effect(__privateGet(this, _main_effect), __privateGet(this, _offscreen_fragment));
  }
  if (__privateGet(this, _pending_effect) === null) {
    __privateSet(this, _pending_effect, branch(() => pending(__privateGet(this, _anchor))));
  }
};
/**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
update_pending_count_fn = function(d3) {
  var _a2;
  if (!this.has_pending_snippet()) {
    if (this.parent) {
      __privateMethod(_a2 = this.parent, _Boundary_instances, update_pending_count_fn).call(_a2, d3);
    }
    return;
  }
  __privateSet(this, _pending_count, __privateGet(this, _pending_count) + d3);
  if (__privateGet(this, _pending_count) === 0) {
    __privateSet(this, _pending2, false);
    if (__privateGet(this, _pending_effect)) {
      pause_effect(__privateGet(this, _pending_effect), () => {
        __privateSet(this, _pending_effect, null);
      });
    }
    if (__privateGet(this, _offscreen_fragment)) {
      __privateGet(this, _anchor).before(__privateGet(this, _offscreen_fragment));
      __privateSet(this, _offscreen_fragment, null);
    }
  }
};
var all_registered_events = /* @__PURE__ */ new Set();
var root_event_handles = /* @__PURE__ */ new Set();
var last_propagated_event = null;
function handle_event_propagation(event) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event.type;
  var path = event.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event.target
  );
  last_propagated_event = event;
  var path_idx = 0;
  var handled_at = last_propagated_event === event && event.__root;
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event.__root = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event.target;
  if (current_target === handler_element) return;
  define_property(event, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated = current_target["__" + event_name];
        if (delegated != null && (!/** @type {any} */
        current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        event.target === current_target)) {
          delegated.call(current_target, event);
        }
      } catch (error2) {
        if (throw_error) {
          other_errors.push(error2);
        } else {
          throw_error = error2;
        }
      }
      if (event.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
    }
    if (throw_error) {
      for (let error2 of other_errors) {
        queueMicrotask(() => {
          throw error2;
        });
      }
      throw throw_error;
    }
  } finally {
    event.__root = handler_element;
    delete event.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function assign_nodes(start, end) {
  var effect = (
    /** @type {Effect} */
    active_effect
  );
  if (effect.nodes_start === null) {
    effect.nodes_start = start;
    effect.nodes_end = end;
  }
}
function mount(component14, options2) {
  return _mount(component14, options2);
}
function hydrate(component14, options2) {
  init_operations();
  options2.intro = options2.intro ?? false;
  const target = options2.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = (
      /** @type {TemplateNode} */
      get_first_child(target)
    );
    while (anchor && (anchor.nodeType !== COMMENT_NODE || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = /** @type {TemplateNode} */
      get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    const instance = _mount(component14, { ...options2, anchor });
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error2) {
    if (error2 instanceof Error && error2.message.split("\n").some((line) => line.startsWith("https://svelte.dev/e/"))) {
      throw error2;
    }
    if (error2 !== HYDRATION_ERROR) {
      console.warn("Failed to hydrate: ", error2);
    }
    if (options2.recover === false) {
      hydration_failed();
    }
    init_operations();
    clear_text_content(target);
    set_hydrating(false);
    return mount(component14, options2);
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
  }
}
var document_listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context: context3, intro = true }) {
  init_operations();
  var registered_events = /* @__PURE__ */ new Set();
  var event_handle = (events2) => {
    for (var i2 = 0; i2 < events2.length; i2++) {
      var event_name = events2[i2];
      if (registered_events.has(event_name)) continue;
      registered_events.add(event_name);
      var passive = is_passive_event(event_name);
      target.addEventListener(event_name, handle_event_propagation, { passive });
      var n4 = document_listeners.get(event_name);
      if (n4 === void 0) {
        document.addEventListener(event_name, handle_event_propagation, { passive });
        document_listeners.set(event_name, 1);
      } else {
        document_listeners.set(event_name, n4 + 1);
      }
    }
  };
  event_handle(array_from(all_registered_events));
  root_event_handles.add(event_handle);
  var component14 = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    boundary(
      /** @type {TemplateNode} */
      anchor_node,
      {
        pending: () => {
        }
      },
      (anchor_node2) => {
        if (context3) {
          push2({});
          var ctx = (
            /** @type {ComponentContext} */
            component_context
          );
          ctx.c = context3;
        }
        if (events) {
          props.$$events = events;
        }
        if (hydrating) {
          assign_nodes(
            /** @type {TemplateNode} */
            anchor_node2,
            null
          );
        }
        component14 = Component(anchor_node2, props) || {};
        if (hydrating) {
          active_effect.nodes_end = hydrate_node;
          if (hydrate_node === null || hydrate_node.nodeType !== COMMENT_NODE || /** @type {Comment} */
          hydrate_node.data !== HYDRATION_END) {
            hydration_mismatch();
            throw HYDRATION_ERROR;
          }
        }
        if (context3) {
          pop2();
        }
      }
    );
    return () => {
      for (var event_name of registered_events) {
        target.removeEventListener(event_name, handle_event_propagation);
        var n4 = (
          /** @type {number} */
          document_listeners.get(event_name)
        );
        if (--n4 === 0) {
          document.removeEventListener(event_name, handle_event_propagation);
          document_listeners.delete(event_name);
        } else {
          document_listeners.set(event_name, n4);
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component14, unmount2);
  return component14;
}
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component14, options2) {
  const fn = mounted_components.get(component14);
  if (fn) {
    mounted_components.delete(component14);
    return fn(options2);
  }
  return Promise.resolve();
}
function asClassComponent$1(component14) {
  return class extends Svelte4Component {
    /** @param {any} options */
    constructor(options2) {
      super({
        component: component14,
        ...options2
      });
    }
  };
}
var _events, _instance;
var Svelte4Component = class {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options2) {
    /** @type {any} */
    __privateAdd(this, _events);
    /** @type {Record<string, any>} */
    __privateAdd(this, _instance);
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key2, value) => {
      var s5 = mutable_source(value, false, false);
      sources.set(key2, s5);
      return s5;
    };
    const props = new Proxy(
      { ...options2.props || {}, $$events: {} },
      {
        get(target, prop) {
          return get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
        },
        has(target, prop) {
          if (prop === LEGACY_PROPS) return true;
          get(sources.get(prop) ?? add_source(prop, Reflect.get(target, prop)));
          return Reflect.has(target, prop);
        },
        set(target, prop, value) {
          set(sources.get(prop) ?? add_source(prop, value), value);
          return Reflect.set(target, prop, value);
        }
      }
    );
    __privateSet(this, _instance, (options2.hydrate ? hydrate : mount)(options2.component, {
      target: options2.target,
      anchor: options2.anchor,
      props,
      context: options2.context,
      intro: options2.intro ?? false,
      recover: options2.recover
    }));
    if (!options2?.props?.$$host || options2.sync === false) {
      flushSync();
    }
    __privateSet(this, _events, props.$$events);
    for (const key2 of Object.keys(__privateGet(this, _instance))) {
      if (key2 === "$set" || key2 === "$destroy" || key2 === "$on") continue;
      define_property(this, key2, {
        get() {
          return __privateGet(this, _instance)[key2];
        },
        /** @param {any} value */
        set(value) {
          __privateGet(this, _instance)[key2] = value;
        },
        enumerable: true
      });
    }
    __privateGet(this, _instance).$set = /** @param {Record<string, any>} next */
    (next2) => {
      Object.assign(props, next2);
    };
    __privateGet(this, _instance).$destroy = () => {
      unmount(__privateGet(this, _instance));
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    __privateGet(this, _instance).$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event, callback) {
    __privateGet(this, _events)[event] = __privateGet(this, _events)[event] || [];
    const cb = (...args) => callback.call(this, ...args);
    __privateGet(this, _events)[event].push(cb);
    return () => {
      __privateGet(this, _events)[event] = __privateGet(this, _events)[event].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    __privateGet(this, _instance).$destroy();
  }
};
_events = new WeakMap();
_instance = new WeakMap();
var read_implementation = null;
function set_read_implementation(fn) {
  read_implementation = fn;
}
function asClassComponent(component14) {
  const component_constructor = asClassComponent$1(component14);
  const _render = (props, { context: context3 } = {}) => {
    const result = render(component14, { props, context: context3 });
    const munged = Object.defineProperties(
      /** @type {LegacyRenderResult & PromiseLike<LegacyRenderResult>} */
      {},
      {
        css: {
          value: { code: "", map: null }
        },
        head: {
          get: () => result.head
        },
        html: {
          get: () => result.body
        },
        then: {
          /**
           * this is not type-safe, but honestly it's the best I can do right now, and it's a straightforward function.
           *
           * @template TResult1
           * @template [TResult2=never]
           * @param { (value: LegacyRenderResult) => TResult1 } onfulfilled
           * @param { (reason: unknown) => TResult2 } onrejected
           */
          value: (onfulfilled, onrejected) => {
            {
              const user_result = onfulfilled({
                css: munged.css,
                head: munged.head,
                html: munged.html
              });
              return Promise.resolve(user_result);
            }
          }
        }
      }
    );
    return munged;
  };
  component_constructor.render = _render;
  return component_constructor;
}
function Root($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      stores: stores2,
      page: page3,
      constructors,
      components = [],
      form,
      data_0 = null,
      data_1 = null
    } = $$props;
    {
      setContext("__svelte__", stores2);
    }
    {
      stores2.page.set(page3);
    }
    const Pyramid_1 = constructors[1];
    if (constructors[1]) {
      $$renderer2.push("<!--[-->");
      const Pyramid_0 = constructors[0];
      $$renderer2.push(`<!---->`);
      Pyramid_0($$renderer2, {
        data: data_0,
        form,
        params: page3.params,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->`);
          Pyramid_1($$renderer3, { data: data_1, form, params: page3.params });
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      const Pyramid_0 = constructors[0];
      $$renderer2.push(`<!---->`);
      Pyramid_0($$renderer2, { data: data_0, form, params: page3.params });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
var root = asClassComponent(Root);
var options = {
  app_template_contains_nonce: false,
  async: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  csrf_trusted_origins: [],
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hash_routing: false,
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root,
  service_worker: false,
  service_worker_options: void 0,
  templates: {
    app: ({ head, body: body2, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<link rel="stylesheet" href="' + assets2 + '/global.css" />\n		<meta name="viewport" content="width=device-width" />\n\n		<!-- Google fonts -->\n		<link rel="preconnect" href="https://fonts.googleapis.com" />\n		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n		<link\n			href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;700&family=Inter:wght@500;700;800&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"\n			rel="stylesheet"\n		/>\n\n		' + head + '\n	</head>\n	<body   data-sveltekit-preload-data="hover" >\n		<div  style="display: contents">' + body2 + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "zzjvsv"
};
async function get_hooks() {
  let handle;
  let handleFetch;
  let handleError;
  let handleValidationError;
  let init2;
  let reroute;
  let transport;
  return {
    handle,
    handleFetch,
    handleError,
    handleValidationError,
    init: init2,
    reroute,
    transport
  };
}

// .svelte-kit/output/server/chunks/shared.js
init_utils2();
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
function stringify3(data, transport) {
  const encoders = Object.fromEntries(Object.entries(transport).map(([k, v2]) => [k, v2.encode]));
  return stringify(data, encoders);
}
function parse_remote_arg(string, transport) {
  if (!string) return void 0;
  const json_string = text_decoder2.decode(
    // no need to add back `=` characters, atob can handle it
    base64_decode(string.replaceAll("-", "+").replaceAll("_", "/"))
  );
  const decoders = Object.fromEntries(Object.entries(transport).map(([k, v2]) => [k, v2.decode]));
  return parse(json_string, decoders);
}
function create_remote_cache_key(id, payload) {
  return id + "/" + payload;
}

// .svelte-kit/output/server/index.js
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
function with_resolvers() {
  let resolve2;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve2 = res;
    reject = rej;
  });
  return { promise, resolve: resolve2, reject };
}
var NULL_BODY_STATUS = [101, 103, 204, 205, 304];
var IN_WEBCONTAINER2 = !!globalThis.process?.versions?.webcontainer;
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
var PAGE_METHODS = ["GET", "POST", "HEAD"];
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i2) => {
    const match = /([^/ \t]+)\/([^; \t]+)[ \t]*(?:;[ \t]*q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q2 = "1"] = match;
      parts.push({ type, subtype, q: +q2, i: i2 });
    }
  });
  parts.sort((a4, b) => {
    if (a4.q !== b.q) {
      return b.q - a4.q;
    }
    if (a4.subtype === "*" !== (b.subtype === "*")) {
      return a4.subtype === "*" ? 1 : -1;
    }
    if (a4.type === "*" !== (b.type === "*")) {
      return a4.type === "*" ? 1 : -1;
    }
    return a4.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type.toLowerCase());
}
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return (
    /** @type {import('../exports/internal/index.js').Redirect | HttpError | SvelteKitError | Error} */
    error2
  );
}
function get_status(error2) {
  return error2 instanceof HttpError || error2 instanceof SvelteKitError ? error2.status : 500;
}
function get_message(error2) {
  return error2 instanceof SvelteKitError ? error2.text : "Internal Error";
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
  // Svelte also escapes < because the escape function could be called inside a `noscript` there
  // https://github.com/sveltejs/svelte/security/advisories/GHSA-8266-84wp-wv5c
  // However, that doesn't apply in SvelteKit
};
var escape_html_dict = {
  "&": "&amp;",
  "<": "&lt;"
};
var surrogates = (
  // high surrogate without paired low surrogate
  "[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]"
);
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|` + surrogates,
  "g"
);
var escape_html_regex = new RegExp(
  `[${Object.keys(escape_html_dict).join("")}]|` + surrogates,
  "g"
);
function escape_html2(str, is_attr) {
  const dict = is_attr ? escape_html_attr_dict : escape_html_dict;
  const escaped_str = str.replace(is_attr ? escape_html_attr_regex : escape_html_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return escaped_str;
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = ENDPOINT_METHODS.filter((method) => method in mod);
  if ("GET" in mod && !("HEAD" in mod)) {
    allowed.push("HEAD");
  }
  return allowed;
}
function get_global_name(options2) {
  return `__sveltekit_${options2.version_hash}`;
}
function static_error_page(options2, status, message) {
  let page3 = options2.templates.error({ status, message: escape_html2(message) });
  return text(page3, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, state2, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = get_status(error2);
  const body2 = await handle_error_and_jsonify(event, state2, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body2, {
      status
    });
  }
  return static_error_page(options2, status, body2.message);
}
async function handle_error_and_jsonify(event, state2, options2, error2) {
  if (error2 instanceof HttpError) {
    return { message: "Unknown Error", ...error2.body };
  }
  const status = get_status(error2);
  const message = get_message(error2);
  return await with_request_store(
    { event, state: state2 },
    () => options2.hooks.handleError({ error: error2, event, status, message })
  ) ?? { message };
}
function redirect_response(status, location2) {
  const response = new Response(void 0, {
    status,
    headers: { location: location2 }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (${error2.path}). If you need to serialize/deserialize custom types, use transport hooks: https://svelte.dev/docs/kit/hooks#Universal-hooks-transport.`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function serialize_uses(node) {
  const uses = {};
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.dependencies = Array.from(node.uses.dependencies);
  }
  if (node.uses && node.uses.search_params.size > 0) {
    uses.search_params = Array.from(node.uses.search_params);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.params = Array.from(node.uses.params);
  }
  if (node.uses?.parent) uses.parent = 1;
  if (node.uses?.route) uses.route = 1;
  if (node.uses?.url) uses.url = 1;
  return uses;
}
function has_prerendered_path(manifest2, pathname) {
  return manifest2._.prerendered_routes.has(pathname) || pathname.at(-1) === "/" && manifest2._.prerendered_routes.has(pathname.slice(0, -1));
}
function format_server_error(status, error2, event) {
  const formatted_text = `
\x1B[1;31m[${status}] ${event.request.method} ${event.url.pathname}\x1B[0m`;
  if (status === 404) {
    return formatted_text;
  }
  return `${formatted_text}
${error2.stack}`;
}
function get_node_type(node_id) {
  const parts = node_id?.split("/");
  const filename = parts?.at(-1);
  if (!filename) return "unknown";
  const dot_parts = filename.split(".");
  return dot_parts.slice(0, -1).join(".");
}
async function render_endpoint(event, event_state, mod, state2) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method] || mod.fallback;
  if (method === "HEAD" && !mod.HEAD && mod.GET) {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state2.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state2.prerendering && !state2.prerendering.inside_reroute && !prerender) {
    if (state2.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  event_state.is_endpoint_request = true;
  try {
    const response = await with_request_store(
      { event, state: event_state },
      () => handler(
        /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
        event
      )
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state2.prerendering && (!state2.prerendering.inside_reroute || prerender)) {
      const cloned = new Response(response.clone().body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      cloned.headers.set("x-sveltekit-prerender", String(prerender));
      if (state2.prerendering.inside_reroute && prerender) {
        cloned.headers.set(
          "x-sveltekit-routeid",
          encodeURI(
            /** @type {string} */
            event.route.id
          )
        );
        state2.prerendering.dependencies.set(event.url.pathname, { response: cloned, body: null });
      } else {
        return cloned;
      }
    }
    return response;
  } catch (e2) {
    if (e2 instanceof Redirect) {
      return new Response(void 0, {
        status: e2.status,
        headers: { location: e2.location }
      });
    }
    throw e2;
  }
}
function is_endpoint_request(event) {
  const { method, headers: headers2 } = event.request;
  if (ENDPOINT_METHODS.includes(method) && !PAGE_METHODS.includes(method)) {
    return true;
  }
  if (method === "POST" && headers2.get("x-sveltekit-action") === "true") return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
var DATA_SUFFIX = "/__data.json";
var HTML_DATA_SUFFIX = ".html__data.json";
function has_data_suffix2(pathname) {
  return pathname.endsWith(DATA_SUFFIX) || pathname.endsWith(HTML_DATA_SUFFIX);
}
function add_data_suffix2(pathname) {
  if (pathname.endsWith(".html")) return pathname.replace(/\.html$/, HTML_DATA_SUFFIX);
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix2(pathname) {
  if (pathname.endsWith(HTML_DATA_SUFFIX)) {
    return pathname.slice(0, -HTML_DATA_SUFFIX.length) + ".html";
  }
  return pathname.slice(0, -DATA_SUFFIX.length);
}
var ROUTE_SUFFIX = "/__route.js";
function has_resolution_suffix2(pathname) {
  return pathname.endsWith(ROUTE_SUFFIX);
}
function add_resolution_suffix2(pathname) {
  return pathname.replace(/\/$/, "") + ROUTE_SUFFIX;
}
function strip_resolution_suffix2(pathname) {
  return pathname.slice(0, -ROUTE_SUFFIX.length);
}
var noop_span = {
  spanContext() {
    return noop_span_context;
  },
  setAttribute() {
    return this;
  },
  setAttributes() {
    return this;
  },
  addEvent() {
    return this;
  },
  setStatus() {
    return this;
  },
  updateName() {
    return this;
  },
  end() {
    return this;
  },
  isRecording() {
    return false;
  },
  recordException() {
    return this;
  },
  addLink() {
    return this;
  },
  addLinks() {
    return this;
  }
};
var noop_span_context = {
  traceId: "",
  spanId: "",
  traceFlags: 0
};
async function record_span({ name, attributes: attributes2, fn }) {
  {
    return fn(noop_span);
  }
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, event_state, options2, server2) {
  const actions = server2?.actions;
  if (!actions) {
    const no_actions_error = new SvelteKitError(
      405,
      "Method Not Allowed",
      `POST method not allowed. No form actions exist for ${"this page"}`
    );
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, event_state, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, event_state, actions);
    if (BROWSER) ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        )
      });
    }
  } catch (e2) {
    const err = normalize_error(e2);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(
          event,
          event_state,
          options2,
          check_incorrect_fail_use(err)
        )
      },
      {
        status: get_status(err)
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error2;
}
function action_json_redirect(redirect) {
  return action_json({
    type: "redirect",
    status: redirect.status,
    location: redirect.location
  });
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, event_state, server2) {
  const actions = server2?.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: new SvelteKitError(
        405,
        "Method Not Allowed",
        `POST method not allowed. No form actions exist for ${"this page"}`
      )
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, event_state, actions);
    if (BROWSER) ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e2) {
    const err = normalize_error(e2);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://svelte.dev/docs/kit/form-actions#named-actions"
    );
  }
}
async function call_action(event, event_state, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new SvelteKitError(404, "Not Found", `No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new SvelteKitError(
      415,
      "Unsupported Media Type",
      `Form actions expect form-encoded data \u2014 received ${event.request.headers.get(
        "content-type"
      )}`
    );
  }
  return record_span({
    name: "sveltekit.form_action",
    attributes: {
      "http.route": event.route.id || "unknown"
    },
    fn: async (current2) => {
      const traced_event = merge_tracing(event, current2);
      const result = await with_request_store(
        { event: traced_event, state: event_state },
        () => action(traced_event)
      );
      if (result instanceof ActionFailure) {
        current2.setAttributes({
          "sveltekit.form_action.result.type": "failure",
          "sveltekit.form_action.result.status": result.status
        });
      }
      return result;
    }
  });
}
function uneval_action_response(data, route_id, transport) {
  const replacer = (thing) => {
    for (const key2 in transport) {
      const encoded = transport[key2].encode(thing);
      if (encoded) {
        return `app.decode('${key2}', ${uneval(encoded, replacer)})`;
      }
    }
  };
  return try_serialize(data, (value) => uneval(value, replacer), route_id);
}
function stringify_action_response(data, route_id, transport) {
  const encoders = Object.fromEntries(
    Object.entries(transport).map(([key2, value]) => [key2, value.encode])
  );
  return try_serialize(data, (value) => stringify(value, encoders), route_id);
}
function try_serialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e2) {
    const error2 = (
      /** @type {any} */
      e2
    );
    if (data instanceof Response) {
      throw new Error(
        `Data returned from action inside ${route_id} is not serializable. Form actions need to return plain objects or fail(). E.g. return { success: true } or return fail(400, { message: "invalid" });`
      );
    }
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "") message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
function create_async_iterator() {
  let resolved = -1;
  let returned = -1;
  const deferred2 = [];
  return {
    iterate: (transform = (x2) => x2) => {
      return {
        [Symbol.asyncIterator]() {
          return {
            next: async () => {
              const next2 = deferred2[++returned];
              if (!next2) return { value: null, done: true };
              const value = await next2.promise;
              return { value: transform(value), done: false };
            }
          };
        }
      };
    },
    add: (promise) => {
      deferred2.push(with_resolvers());
      void promise.then((value) => {
        deferred2[++resolved].resolve(value);
      });
    }
  };
}
function server_data_serializer(event, event_state, options2) {
  let promise_id = 1;
  let max_nodes = -1;
  const iterator2 = create_async_iterator();
  const global2 = get_global_name(options2);
  function get_replacer(index14) {
    return function replacer(thing) {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        const promise = thing.then(
          /** @param {any} data */
          (data) => ({ data })
        ).catch(
          /** @param {any} error */
          async (error2) => ({
            error: await handle_error_and_jsonify(event, event_state, options2, error2)
          })
        ).then(
          /**
           * @param {{data: any; error: any}} result
           */
          async ({ data, error: error2 }) => {
            let str;
            try {
              str = uneval(error2 ? [, error2] : [data], replacer);
            } catch {
              error2 = await handle_error_and_jsonify(
                event,
                event_state,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              data = void 0;
              str = uneval([, error2], replacer);
            }
            return {
              index: index14,
              str: `${global2}.resolve(${id}, ${str.includes("app.decode") ? `(app) => ${str}` : `() => ${str}`})`
            };
          }
        );
        iterator2.add(promise);
        return `${global2}.defer(${id})`;
      } else {
        for (const key2 in options2.hooks.transport) {
          const encoded = options2.hooks.transport[key2].encode(thing);
          if (encoded) {
            return `app.decode('${key2}', ${uneval(encoded, replacer)})`;
          }
        }
      }
    };
  }
  const strings = (
    /** @type {string[]} */
    []
  );
  return {
    set_max_nodes(i2) {
      max_nodes = i2;
    },
    add_node(i2, node) {
      try {
        if (!node) {
          strings[i2] = "null";
          return;
        }
        const payload = { type: "data", data: node.data, uses: serialize_uses(node) };
        if (node.slash) payload.slash = node.slash;
        strings[i2] = uneval(payload, get_replacer(i2));
      } catch (e2) {
        e2.path = e2.path.slice(1);
        throw new Error(clarify_devalue_error(
          event,
          /** @type {any} */
          e2
        ));
      }
    },
    get_data(csp) {
      const open = `<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>`;
      const close = `<\/script>
`;
      return {
        data: `[${compact(max_nodes > -1 ? strings.slice(0, max_nodes) : strings).join(",")}]`,
        chunks: promise_id > 1 ? iterator2.iterate(({ index: index14, str }) => {
          if (max_nodes > -1 && index14 >= max_nodes) {
            return "";
          }
          return open + str + close;
        }) : null
      };
    }
  };
}
function server_data_serializer_json(event, event_state, options2) {
  let promise_id = 1;
  const iterator2 = create_async_iterator();
  const reducers = {
    ...Object.fromEntries(
      Object.entries(options2.hooks.transport).map(([key2, value]) => [key2, value.encode])
    ),
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof thing?.then !== "function") {
        return;
      }
      const id = promise_id++;
      let key2 = "data";
      const promise = thing.catch(
        /** @param {any} e */
        async (e2) => {
          key2 = "error";
          return handle_error_and_jsonify(
            event,
            event_state,
            options2,
            /** @type {any} */
            e2
          );
        }
      ).then(
        /** @param {any} value */
        async (value) => {
          let str;
          try {
            str = stringify(value, reducers);
          } catch {
            const error2 = await handle_error_and_jsonify(
              event,
              event_state,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            key2 = "error";
            str = stringify(error2, reducers);
          }
          return `{"type":"chunk","id":${id},"${key2}":${str}}
`;
        }
      );
      iterator2.add(promise);
      return id;
    }
  };
  const strings = (
    /** @type {string[]} */
    []
  );
  return {
    add_node(i2, node) {
      try {
        if (!node) {
          strings[i2] = "null";
          return;
        }
        if (node.type === "error" || node.type === "skip") {
          strings[i2] = JSON.stringify(node);
          return;
        }
        strings[i2] = `{"type":"data","data":${stringify(node.data, reducers)},"uses":${JSON.stringify(
          serialize_uses(node)
        )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
      } catch (e2) {
        e2.path = "data" + e2.path;
        throw new Error(clarify_devalue_error(
          event,
          /** @type {any} */
          e2
        ));
      }
    },
    get_data() {
      return {
        data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
        chunks: promise_id > 1 ? iterator2.iterate() : null
      };
    }
  };
}
async function load_server_data({ event, event_state, state: state2, node, parent }) {
  if (!node?.server) return null;
  let is_tracking = true;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false,
    search_params: /* @__PURE__ */ new Set()
  };
  const load7 = node.server.load;
  const slash = node.server.trailingSlash;
  if (!load7) {
    return { type: "data", data: null, uses, slash };
  }
  const url = make_trackable(
    event.url,
    () => {
      if (is_tracking) {
        uses.url = true;
      }
    },
    (param) => {
      if (is_tracking) {
        uses.search_params.add(param);
      }
    }
  );
  if (state2.prerendering) {
    disable_search(url);
  }
  const result = await record_span({
    name: "sveltekit.load",
    attributes: {
      "sveltekit.load.node_id": node.server_id || "unknown",
      "sveltekit.load.node_type": get_node_type(node.server_id),
      "http.route": event.route.id || "unknown"
    },
    fn: async (current2) => {
      const traced_event = merge_tracing(event, current2);
      const result2 = await with_request_store(
        { event: traced_event, state: event_state },
        () => load7.call(null, {
          ...traced_event,
          fetch: (info, init2) => {
            new URL(info instanceof Request ? info.url : info, event.url);
            return event.fetch(info, init2);
          },
          /** @param {string[]} deps */
          depends: (...deps) => {
            for (const dep of deps) {
              const { href } = new URL(dep, event.url);
              uses.dependencies.add(href);
            }
          },
          params: new Proxy(event.params, {
            get: (target, key2) => {
              if (is_tracking) {
                uses.params.add(key2);
              }
              return target[
                /** @type {string} */
                key2
              ];
            }
          }),
          parent: async () => {
            if (is_tracking) {
              uses.parent = true;
            }
            return parent();
          },
          route: new Proxy(event.route, {
            get: (target, key2) => {
              if (is_tracking) {
                uses.route = true;
              }
              return target[
                /** @type {'id'} */
                key2
              ];
            }
          }),
          url,
          untrack(fn) {
            is_tracking = false;
            try {
              return fn();
            } finally {
              is_tracking = true;
            }
          }
        })
      );
      return result2;
    }
  });
  return {
    type: "data",
    data: result ?? null,
    uses,
    slash
  };
}
async function load_data({
  event,
  event_state,
  fetched,
  node,
  parent,
  server_data_promise,
  state: state2,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  const load7 = node?.universal?.load;
  if (!load7) {
    return server_data_node?.data ?? null;
  }
  const result = await record_span({
    name: "sveltekit.load",
    attributes: {
      "sveltekit.load.node_id": node.universal_id || "unknown",
      "sveltekit.load.node_type": get_node_type(node.universal_id),
      "http.route": event.route.id || "unknown"
    },
    fn: async (current2) => {
      const traced_event = merge_tracing(event, current2);
      return await with_request_store(
        { event: traced_event, state: event_state },
        () => load7.call(null, {
          url: event.url,
          params: event.params,
          data: server_data_node?.data ?? null,
          route: event.route,
          fetch: create_universal_fetch(event, state2, fetched, csr, resolve_opts),
          setHeaders: event.setHeaders,
          depends: () => {
          },
          parent,
          untrack: (fn) => fn(),
          tracing: traced_event.tracing
        })
      );
    }
  });
  return result ?? null;
}
function create_universal_fetch(event, state2, fetched, csr, resolve_opts) {
  const universal_fetch = async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init2?.headers;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state2.prerendering) {
        dependency = { response, body: null };
        state2.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else if (url.protocol === "https:" || url.protocol === "http:") {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    let teed_body;
    const proxy2 = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function push_fetched(body2, is_b64) {
          const status_number = Number(response2.status);
          if (isNaN(status_number)) {
            throw new Error(
              `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
            );
          }
          fetched.push({
            url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
            method: event.request.method,
            request_body: (
              /** @type {string | ArrayBufferView | undefined} */
              input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
            ),
            request_headers: cloned_headers,
            response_body: body2,
            response: response2,
            is_b64
          });
        }
        if (key2 === "body") {
          if (response2.body === null) {
            return null;
          }
          if (teed_body) {
            return teed_body;
          }
          const [a4, b] = response2.body.tee();
          void (async () => {
            let result = new Uint8Array();
            for await (const chunk of a4) {
              const combined = new Uint8Array(result.length + chunk.length);
              combined.set(result, 0);
              combined.set(chunk, result.length);
              result = combined;
            }
            if (dependency) {
              dependency.body = new Uint8Array(result);
            }
            void push_fetched(base64_encode(result), true);
          })();
          return teed_body = b;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            const bytes = new Uint8Array(buffer);
            if (dependency) {
              dependency.body = bytes;
            }
            if (buffer instanceof ArrayBuffer) {
              await push_fetched(base64_encode(bytes), true);
            }
            return buffer;
          };
        }
        async function text2() {
          const body2 = await response2.text();
          if (body2 === "" && NULL_BODY_STATUS.includes(response2.status)) {
            await push_fetched(void 0, false);
            return void 0;
          }
          if (!body2 || typeof body2 === "string") {
            await push_fetched(body2, false);
          }
          if (dependency) {
            dependency.body = body2;
          }
          return body2;
        }
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            const body2 = await text2();
            return body2 ? JSON.parse(body2) : void 0;
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get2 = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get2.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://svelte.dev/docs/kit/hooks#Server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy2;
  };
  return (input, init2) => {
    const response = universal_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += text_decoder2.decode(value);
  }
  return result;
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i2 = value.length;
      while (i2) hash2 = hash2 * 33 ^ value.charCodeAt(--i2);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i2 = buffer.length;
      while (i2) hash2 = hash2 * 33 ^ buffer[--i2];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var replacements2 = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements2).join("")}]`, "g");
function serialize_data(fetched, filter2, prerendering = false) {
  const headers2 = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter2(key2, value)) {
      headers2[key2] = value;
    }
    if (key2 === "cache-control") cache_control = value;
    else if (key2 === "age") age = value;
    else if (key2 === "vary" && value.trim() === "*") varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers: headers2,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements2[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url="${escape_html2(fetched.url, true)}"`
  ];
  if (fetched.is_b64) {
    attrs.push("data-b64");
  }
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
function sha256(data) {
  if (!key[0]) precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i2 = 0; i2 < array2.length; i2 += 16) {
    const w = array2.subarray(i2, i2 + 16);
    let tmp;
    let a4;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i22 = 0; i22 < 64; i22++) {
      if (i22 < 16) {
        tmp = w[i22];
      } else {
        a4 = w[i22 + 1 & 15];
        b = w[i22 + 14 & 15];
        tmp = w[i22 & 15] = (a4 >>> 7 ^ a4 >>> 18 ^ a4 >>> 3 ^ a4 << 25 ^ a4 << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i22 & 15] + w[i22 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i22];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return btoa(String.fromCharCode(...bytes));
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x2) {
    return (x2 - Math.floor(x2)) * 4294967296;
  }
  let prime = 2;
  for (let i2 = 0; i2 < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i2 < 8) {
        init[i2] = frac(prime ** (1 / 2));
      }
      key[i2] = frac(prime ** (1 / 3));
      i2++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i2 = 0; i2 < bytes.length; i2 += 4) {
    const a4 = bytes[i2 + 0];
    const b = bytes[i2 + 1];
    const c5 = bytes[i2 + 2];
    const d3 = bytes[i2 + 3];
    bytes[i2 + 0] = d3;
    bytes[i2 + 1] = c5;
    bytes[i2 + 2] = b;
    bytes[i2 + 3] = a4;
  }
}
function encode(str) {
  const encoded = text_encoder2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array));
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _script_src_needs_csp, _script_src_elem_needs_csp, _style_needs_csp, _style_src_needs_csp, _style_src_attr_needs_csp, _style_src_elem_needs_csp, _directives, _script_src, _script_src_elem, _style_src, _style_src_attr, _style_src_elem, _nonce;
var BaseProvider = class {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    /** @type {boolean} */
    __privateAdd(this, _use_hashes);
    /** @type {boolean} */
    __privateAdd(this, _script_needs_csp);
    /** @type {boolean} */
    __privateAdd(this, _script_src_needs_csp);
    /** @type {boolean} */
    __privateAdd(this, _script_src_elem_needs_csp);
    /** @type {boolean} */
    __privateAdd(this, _style_needs_csp);
    /** @type {boolean} */
    __privateAdd(this, _style_src_needs_csp);
    /** @type {boolean} */
    __privateAdd(this, _style_src_attr_needs_csp);
    /** @type {boolean} */
    __privateAdd(this, _style_src_elem_needs_csp);
    /** @type {import('types').CspDirectives} */
    __privateAdd(this, _directives);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src_elem);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src_attr);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src_elem);
    /** @type {string} */
    __privateAdd(this, _nonce);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, directives);
    const d3 = __privateGet(this, _directives);
    __privateSet(this, _script_src, []);
    __privateSet(this, _script_src_elem, []);
    __privateSet(this, _style_src, []);
    __privateSet(this, _style_src_attr, []);
    __privateSet(this, _style_src_elem, []);
    const effective_script_src = d3["script-src"] || d3["default-src"];
    const script_src_elem = d3["script-src-elem"];
    const effective_style_src = d3["style-src"] || d3["default-src"];
    const style_src_attr = d3["style-src-attr"];
    const style_src_elem = d3["style-src-elem"];
    const needs_csp = (directive) => !!directive && !directive.some((value) => value === "unsafe-inline");
    __privateSet(this, _script_src_needs_csp, needs_csp(effective_script_src));
    __privateSet(this, _script_src_elem_needs_csp, needs_csp(script_src_elem));
    __privateSet(this, _style_src_needs_csp, needs_csp(effective_style_src));
    __privateSet(this, _style_src_attr_needs_csp, needs_csp(style_src_attr));
    __privateSet(this, _style_src_elem_needs_csp, needs_csp(style_src_elem));
    __privateSet(this, _script_needs_csp, __privateGet(this, _script_src_needs_csp) || __privateGet(this, _script_src_elem_needs_csp));
    __privateSet(this, _style_needs_csp, __privateGet(this, _style_src_needs_csp) || __privateGet(this, _style_src_attr_needs_csp) || __privateGet(this, _style_src_elem_needs_csp));
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  /** @param {string} content */
  add_script(content) {
    if (!__privateGet(this, _script_needs_csp)) return;
    const source2 = __privateGet(this, _use_hashes) ? `sha256-${sha256(content)}` : `nonce-${__privateGet(this, _nonce)}`;
    if (__privateGet(this, _script_src_needs_csp)) {
      __privateGet(this, _script_src).push(source2);
    }
    if (__privateGet(this, _script_src_elem_needs_csp)) {
      __privateGet(this, _script_src_elem).push(source2);
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (!__privateGet(this, _style_needs_csp)) return;
    const source2 = __privateGet(this, _use_hashes) ? `sha256-${sha256(content)}` : `nonce-${__privateGet(this, _nonce)}`;
    if (__privateGet(this, _style_src_needs_csp)) {
      __privateGet(this, _style_src).push(source2);
    }
    if (__privateGet(this, _style_src_attr_needs_csp)) {
      __privateGet(this, _style_src_attr).push(source2);
    }
    if (__privateGet(this, _style_src_elem_needs_csp)) {
      const sha256_empty_comment_hash = "sha256-9OlNO0DNEeaVzHL4RZwCLsBHA8WBQ8toBp/4F5XV2nc=";
      const d3 = __privateGet(this, _directives);
      if (d3["style-src-elem"] && !d3["style-src-elem"].includes(sha256_empty_comment_hash) && !__privateGet(this, _style_src_elem).includes(sha256_empty_comment_hash)) {
        __privateGet(this, _style_src_elem).push(sha256_empty_comment_hash);
      }
      if (source2 !== sha256_empty_comment_hash) {
        __privateGet(this, _style_src_elem).push(source2);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _style_src_attr).length > 0) {
      directives["style-src-attr"] = [
        ...directives["style-src-attr"] || [],
        ...__privateGet(this, _style_src_attr)
      ];
    }
    if (__privateGet(this, _style_src_elem).length > 0) {
      directives["style-src-elem"] = [
        ...directives["style-src-elem"] || [],
        ...__privateGet(this, _style_src_elem)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    if (__privateGet(this, _script_src_elem).length > 0) {
      directives["script-src-elem"] = [
        ...directives["script-src-elem"] || [],
        ...__privateGet(this, _script_src_elem)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value) continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_script_src_needs_csp = new WeakMap();
_script_src_elem_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_style_src_needs_csp = new WeakMap();
_style_src_attr_needs_csp = new WeakMap();
_style_src_elem_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_script_src_elem = new WeakMap();
_style_src = new WeakMap();
_style_src_attr = new WeakMap();
_style_src_elem = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content="${escape_html2(content, true)}">`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v2) => !!v2).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /**
   * @param {import('./types.js').CspConfig} config
   * @param {import('./types.js').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    /** @readonly */
    __publicField(this, "nonce", generate_nonce());
    /** @type {CspProvider} */
    __publicField(this, "csp_provider");
    /** @type {CspReportOnlyProvider} */
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i2 = 0; i2 < params.length; i2 += 1) {
    const param = params[i2];
    let value = values[i2 - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i2 - buffered, i2 + 1).filter((s22) => s22).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest) result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i2 + 1];
      const next_value = values[i2 + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered) return;
  return result;
}
function generate_route_object(route, url, manifest2) {
  const { errors, layouts, leaf } = route;
  const nodes = [...errors, ...layouts.map((l3) => l3?.[1]), leaf[1]].filter((n4) => typeof n4 === "number").map((n4) => `'${n4}': () => ${create_client_import(manifest2._.client.nodes?.[n4], url)}`).join(",\n		");
  return [
    `{
	id: ${s(route.id)}`,
    `errors: ${s(route.errors)}`,
    `layouts: ${s(route.layouts)}`,
    `leaf: ${s(route.leaf)}`,
    `nodes: {
		${nodes}
	}
}`
  ].join(",\n	");
}
function create_client_import(import_path, url) {
  if (!import_path) return "Promise.resolve({})";
  if (import_path[0] === "/") {
    return `import('${import_path}')`;
  }
  if (assets !== "") {
    return `import('${assets}/${import_path}')`;
  }
  let path = get_relative_path(url.pathname, `${base}/${import_path}`);
  if (path[0] !== ".") path = `./${path}`;
  return `import('${path}')`;
}
async function resolve_route(resolved_path, url, manifest2) {
  if (!manifest2._.client.routes) {
    return text("Server-side route resolution disabled", { status: 400 });
  }
  let route = null;
  let params = {};
  const matchers = await manifest2._.matchers();
  for (const candidate of manifest2._.client.routes) {
    const match = candidate.pattern.exec(resolved_path);
    if (!match) continue;
    const matched = exec(match, candidate.params, matchers);
    if (matched) {
      route = candidate;
      params = decode_params(matched);
      break;
    }
  }
  return create_server_routing_response(route, params, url, manifest2).response;
}
function create_server_routing_response(route, params, url, manifest2) {
  const headers2 = new Headers({
    "content-type": "application/javascript; charset=utf-8"
  });
  if (route) {
    const csr_route = generate_route_object(route, url, manifest2);
    const body2 = `${create_css_import(route, url, manifest2)}
export const route = ${csr_route}; export const params = ${JSON.stringify(params)};`;
    return { response: text(body2, { headers: headers2 }), body: body2 };
  } else {
    return { response: text("", { headers: headers2 }), body: "" };
  }
}
function create_css_import(route, url, manifest2) {
  const { errors, layouts, leaf } = route;
  let css = "";
  for (const node of [...errors, ...layouts.map((l3) => l3?.[1]), leaf[1]]) {
    if (typeof node !== "number") continue;
    const node_css = manifest2._.client.css?.[node];
    for (const css_path of node_css ?? []) {
      css += `'${assets || base}/${css_path}',`;
    }
  }
  if (!css) return "";
  return `${create_client_import(
    /** @type {string} */
    manifest2._.client.start,
    url
  )}.then(x => x.load_css([${css}]));`;
}
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch: branch2,
  fetched,
  options: options2,
  manifest: manifest2,
  state: state2,
  page_config,
  status,
  error: error2 = null,
  event,
  event_state,
  resolve_opts,
  action_result,
  data_serializer
}) {
  if (state2.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client: client2 } = manifest2._;
  const modulepreloads = new Set(client2.imports);
  const stylesheets14 = new Set(client2.stylesheets);
  const fonts14 = new Set(client2.fonts);
  const link_headers = /* @__PURE__ */ new Set();
  const link_tags = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  {
    if (!state2.prerendering?.fallback) {
      const segments = event.url.pathname.slice(base.length).split("/").slice(2);
      base$1 = segments.map(() => "..").join("/") || ".";
      base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
      if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
        assets$1 = base$1;
      }
    } else if (options2.hash_routing) {
      base_expression = "new URL('.', location).pathname.slice(0, -1)";
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(
        branch2.map(({ node }) => {
          if (!node.component) {
            throw new Error(`Missing +page.svelte component for route ${event.route.id}`);
          }
          return node.component();
        })
      ),
      form: form_value
    };
    let data2 = {};
    for (let i2 = 0; i2 < branch2.length; i2 += 1) {
      data2 = { ...data2, ...branch2[i2].data };
      props[`data_${i2}`] = data2;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value,
      state: {}
    };
    const render_opts = {
      context: /* @__PURE__ */ new Map([
        [
          "__request__",
          {
            page: props.page
          }
        ]
      ])
    };
    const fetch2 = globalThis.fetch;
    try {
      if (BROWSER) ;
      rendered = await with_request_store({ event, state: event_state }, async () => {
        if (relative) override({ base: base$1, assets: assets$1 });
        const maybe_promise = options2.root.render(props, render_opts);
        const rendered2 = options2.async && "then" in maybe_promise ? (
          /** @type {ReturnType<typeof options.root.render> & Promise<any>} */
          maybe_promise.then((r3) => r3)
        ) : maybe_promise;
        if (options2.async) {
          reset();
        }
        const { head: head2, html: html2, css } = options2.async ? await rendered2 : rendered2;
        return { head: head2, html: html2, css };
      });
    } finally {
      reset();
    }
    for (const { node } of branch2) {
      for (const url of node.imports) modulepreloads.add(url);
      for (const url of node.stylesheets) stylesheets14.add(url);
      for (const url of node.fonts) fonts14.add(url);
      if (node.inline_styles && !client2.inline) {
        Object.entries(await node.inline_styles()).forEach(([k, v2]) => inline_styles.set(k, v2));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body2 = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state2.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  const style = client2.inline ? client2.inline?.style : Array.from(inline_styles.values()).join("\n");
  if (style) {
    const attributes2 = [];
    if (csp.style_needs_nonce) attributes2.push(` nonce="${csp.nonce}"`);
    csp.add_style(style);
    head += `
	<style${attributes2.join("")}>${style}</style>`;
  }
  for (const dep of stylesheets14) {
    const path = prefixed(dep);
    const attributes2 = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes2.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        link_headers.add(`<${encodeURI(path)}>; rel="preload"; as="style"; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes2.join(" ")}>`;
  }
  for (const dep of fonts14) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      link_tags.add(`<link rel="preload" as="font" type="font/${ext}" href="${path}" crossorigin>`);
      link_headers.add(
        `<${encodeURI(path)}>; rel="preload"; as="font"; type="font/${ext}"; crossorigin; nopush`
      );
    }
  }
  const global2 = get_global_name(options2);
  const { data, chunks } = data_serializer.get_data(csp);
  if (page_config.ssr && page_config.csr) {
    body2 += `
			${fetched.map(
      (item2) => serialize_data(item2, resolve_opts.filterSerializedResponseHeaders, !!state2.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    const route = manifest2._.client.routes?.find((r3) => r3.id === event.route.id) ?? null;
    if (client2.uses_env_dynamic_public && state2.prerendering) {
      modulepreloads.add(`${app_dir}/env.js`);
    }
    if (!client2.inline) {
      const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
        (path) => resolve_opts.preload({ type: "js", path })
      );
      for (const path of included_modulepreloads) {
        link_headers.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
        if (options2.preload_strategy !== "modulepreload") {
          head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
        } else {
          link_tags.add(`<link rel="modulepreload" href="${path}">`);
        }
      }
    }
    if (state2.prerendering && link_tags.size > 0) {
      head += Array.from(link_tags).map((tag) => `
		${tag}`).join("");
    }
    if (manifest2._.client.routes && state2.prerendering && !state2.prerendering.fallback) {
      const pathname = add_resolution_suffix2(event.url.pathname);
      state2.prerendering.dependencies.set(
        pathname,
        create_server_routing_response(route, event.params, new URL(pathname, event.url), manifest2)
      );
    }
    const blocks = [];
    const load_env_eagerly = client2.uses_env_dynamic_public && state2.prerendering;
    const properties = [`base: ${base_expression}`];
    if (assets) {
      properties.push(`assets: ${s(assets)}`);
    }
    if (client2.uses_env_dynamic_public) {
      properties.push(`env: ${load_env_eagerly ? "null" : s(public_env)}`);
    }
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      let app_declaration = "";
      if (Object.keys(options2.hooks.transport).length > 0) {
        if (client2.inline) {
          app_declaration = `const app = __sveltekit_${options2.version_hash}.app.app;`;
        } else if (client2.app) {
          app_declaration = `const app = await import(${s(prefixed(client2.app))});`;
        } else {
          app_declaration = `const { app } = await import(${s(prefixed(client2.start))});`;
        }
      }
      const prelude = app_declaration ? `${app_declaration}
							const [data, error] = fn(app);` : `const [data, error] = fn();`;
      properties.push(`resolve: async (id, fn) => {
							${prelude}

							const try_to_resolve = () => {
								if (!deferred.has(id)) {
									setTimeout(try_to_resolve, 0);
									return;
								}
								const { fulfil, reject } = deferred.get(id);
								deferred.delete(id);
								if (error) reject(error);
								else fulfil(data);
							}
							try_to_resolve();
						}`);
    }
    blocks.push(`${global2} = {
						${properties.join(",\n						")}
					};`);
    const args = ["element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id,
          options2.hooks.transport
        );
      }
      if (error2) {
        serialized.error = uneval(error2);
      }
      const hydrate2 = [
        `node_ids: [${branch2.map(({ node }) => node.index).join(", ")}]`,
        `data: ${data}`,
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate2.push(`status: ${status}`);
      }
      if (manifest2._.client.routes) {
        if (route) {
          const stringified = generate_route_object(route, event.url, manifest2).replaceAll(
            "\n",
            "\n							"
          );
          hydrate2.push(`params: ${uneval(event.params)}`, `server_route: ${stringified}`);
        }
      } else if (options2.embedded) {
        hydrate2.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      const indent = "	".repeat(load_env_eagerly ? 7 : 6);
      args.push(`{
${indent}	${hydrate2.join(`,
${indent}	`)}
${indent}}`);
    }
    const { remote_data: remote_cache } = event_state;
    let serialized_remote_data = "";
    if (remote_cache) {
      const remote = {};
      for (const [info, cache] of remote_cache) {
        if (!info.id) continue;
        for (const key2 in cache) {
          remote[create_remote_cache_key(info.id, key2)] = await cache[key2];
        }
      }
      const replacer = (thing) => {
        for (const key2 in options2.hooks.transport) {
          const encoded = options2.hooks.transport[key2].encode(thing);
          if (encoded) {
            return `app.decode('${key2}', ${uneval(encoded, replacer)})`;
          }
        }
      };
      serialized_remote_data = `${global2}.data = ${uneval(remote, replacer)};

						`;
    }
    const boot = client2.inline ? `${client2.inline.script}

					${serialized_remote_data}${global2}.app.start(${args.join(", ")});` : client2.app ? `Promise.all([
						import(${s(prefixed(client2.start))}),
						import(${s(prefixed(client2.app))})
					]).then(([kit, app]) => {
						${serialized_remote_data}kit.start(app, ${args.join(", ")});
					});` : `import(${s(prefixed(client2.start))}).then((app) => {
						${serialized_remote_data}app.start(${args.join(", ")})
					});`;
    if (load_env_eagerly) {
      blocks.push(`import(${s(`${base$1}/${app_dir}/env.js`)}).then(({ env }) => {
						${global2}.env = env;

						${boot.replace(/\n/g, "\n	")}
					});`);
    } else {
      blocks.push(boot);
    }
    if (options2.service_worker) {
      let opts = "";
      if (options2.service_worker_options != null) {
        const service_worker_options = { ...options2.service_worker_options };
        opts = `, ${s(service_worker_options)}`;
      }
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body2 += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers2 = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state2.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state2.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state2.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers2.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers2.set("content-security-policy-report-only", report_only_header);
    }
    if (link_headers.size) {
      headers2.set("link", Array.from(link_headers).join(", "));
    }
  }
  head += rendered.head;
  const html = options2.templates.app({
    head,
    body: body2,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  if (!chunks) {
    headers2.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers: headers2
  }) : new Response(
    new ReadableStream({
      async start(controller2) {
        controller2.enqueue(text_encoder2.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          if (chunk.length) controller2.enqueue(text_encoder2.encode(chunk));
        }
        controller2.close();
      },
      type: "bytes"
    }),
    {
      headers: headers2
    }
  );
}
var _PageNodes_instances, get_option_fn;
var PageNodes = class {
  /**
   * @param {Array<import('types').SSRNode | undefined>} nodes
   */
  constructor(nodes) {
    __privateAdd(this, _PageNodes_instances);
    __publicField(this, "data");
    this.data = nodes;
  }
  layouts() {
    return this.data.slice(0, -1);
  }
  page() {
    return this.data.at(-1);
  }
  validate() {
    for (const layout of this.layouts()) {
      if (layout) {
        validate_layout_server_exports(
          layout.server,
          /** @type {string} */
          layout.server_id
        );
        validate_layout_exports(
          layout.universal,
          /** @type {string} */
          layout.universal_id
        );
      }
    }
    const page3 = this.page();
    if (page3) {
      validate_page_server_exports(
        page3.server,
        /** @type {string} */
        page3.server_id
      );
      validate_page_exports(
        page3.universal,
        /** @type {string} */
        page3.universal_id
      );
    }
  }
  csr() {
    return __privateMethod(this, _PageNodes_instances, get_option_fn).call(this, "csr") ?? true;
  }
  ssr() {
    return __privateMethod(this, _PageNodes_instances, get_option_fn).call(this, "ssr") ?? true;
  }
  prerender() {
    return __privateMethod(this, _PageNodes_instances, get_option_fn).call(this, "prerender") ?? false;
  }
  trailing_slash() {
    return __privateMethod(this, _PageNodes_instances, get_option_fn).call(this, "trailingSlash") ?? "never";
  }
  get_config() {
    let current2 = {};
    for (const node of this.data) {
      if (!node?.universal?.config && !node?.server?.config) continue;
      current2 = {
        ...current2,
        // TODO: should we override the server config value with the universal value similar to other page options?
        ...node?.universal?.config,
        ...node?.server?.config
      };
    }
    return Object.keys(current2).length ? current2 : void 0;
  }
  should_prerender_data() {
    return this.data.some(
      // prerender in case of trailingSlash because the client retrieves that value from the server
      (node) => node?.server?.load || node?.server?.trailingSlash !== void 0
    );
  }
};
_PageNodes_instances = new WeakSet();
/**
 * @template {'prerender' | 'ssr' | 'csr' | 'trailingSlash'} Option
 * @param {Option} option
 * @returns {Value | undefined}
 */
get_option_fn = function(option) {
  return this.data.reduce(
    (value, node) => {
      return node?.universal?.[option] ?? node?.server?.[option] ?? value;
    },
    /** @type {Value | undefined} */
    void 0
  );
};
async function respond_with_error({
  event,
  event_state,
  options: options2,
  manifest: manifest2,
  state: state2,
  status,
  error: error2,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error2.message
    );
  }
  const fetched = [];
  try {
    const branch2 = [];
    const default_layout = await manifest2._.nodes[0]();
    const nodes = new PageNodes([default_layout]);
    const ssr = nodes.ssr();
    const csr = nodes.csr();
    const data_serializer = server_data_serializer(event, event_state, options2);
    if (ssr) {
      state2.error = true;
      const server_data_promise = load_server_data({
        event,
        event_state,
        state: state2,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      data_serializer.add_node(0, server_data);
      const data = await load_data({
        event,
        event_state,
        fetched,
        node: default_layout,
        // eslint-disable-next-line @typescript-eslint/require-await
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state: state2,
        csr
      });
      branch2.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state: state2,
      page_config: {
        ssr,
        csr
      },
      status,
      error: await handle_error_and_jsonify(event, event_state, options2, error2),
      branch: branch2,
      fetched,
      event,
      event_state,
      resolve_opts,
      data_serializer
    });
  } catch (e2) {
    if (e2 instanceof Redirect) {
      return redirect_response(e2.status, e2.location);
    }
    return static_error_page(
      options2,
      get_status(e2),
      (await handle_error_and_jsonify(event, event_state, options2, e2)).message
    );
  }
}
async function handle_remote_call(event, state2, options2, manifest2, id) {
  return record_span({
    name: "sveltekit.remote.call",
    attributes: {},
    fn: (current2) => {
      const traced_event = merge_tracing(event, current2);
      return with_request_store(
        { event: traced_event, state: state2 },
        () => handle_remote_call_internal(traced_event, state2, options2, manifest2, id)
      );
    }
  });
}
async function handle_remote_call_internal(event, state2, options2, manifest2, id) {
  const [hash2, name, additional_args] = id.split("/");
  const remotes = manifest2._.remotes;
  if (!remotes[hash2]) error(404);
  const module = await remotes[hash2]();
  const fn = module.default[name];
  if (!fn) error(404);
  const info = fn.__;
  const transport = options2.hooks.transport;
  event.tracing.current.setAttributes({
    "sveltekit.remote.call.type": info.type,
    "sveltekit.remote.call.name": info.name
  });
  let form_client_refreshes;
  try {
    if (info.type === "query_batch") {
      if (event.request.method !== "POST") {
        throw new SvelteKitError(
          405,
          "Method Not Allowed",
          `\`query.batch\` functions must be invoked via POST request, not ${event.request.method}`
        );
      }
      const { payloads } = await event.request.json();
      const args = payloads.map((payload2) => parse_remote_arg(payload2, transport));
      const get_result = await with_request_store({ event, state: state2 }, () => info.run(args));
      const results = await Promise.all(
        args.map(async (arg, i2) => {
          try {
            return { type: "result", data: get_result(arg, i2) };
          } catch (error2) {
            return {
              type: "error",
              error: await handle_error_and_jsonify(event, state2, options2, error2),
              status: error2 instanceof HttpError || error2 instanceof SvelteKitError ? error2.status : 500
            };
          }
        })
      );
      return json(
        /** @type {RemoteFunctionResponse} */
        {
          type: "result",
          result: stringify3(results, transport)
        }
      );
    }
    if (info.type === "form") {
      if (event.request.method !== "POST") {
        throw new SvelteKitError(
          405,
          "Method Not Allowed",
          `\`form\` functions must be invoked via POST request, not ${event.request.method}`
        );
      }
      if (!is_form_content_type(event.request)) {
        throw new SvelteKitError(
          415,
          "Unsupported Media Type",
          `\`form\` functions expect form-encoded data \u2014 received ${event.request.headers.get(
            "content-type"
          )}`
        );
      }
      const form_data = await event.request.formData();
      form_client_refreshes = /** @type {string[]} */
      JSON.parse(
        /** @type {string} */
        form_data.get("sveltekit:remote_refreshes") ?? "[]"
      );
      form_data.delete("sveltekit:remote_refreshes");
      if (additional_args) {
        form_data.set("sveltekit:id", decodeURIComponent(additional_args));
      }
      const fn2 = info.fn;
      const data2 = await with_request_store({ event, state: state2 }, () => fn2(form_data));
      return json(
        /** @type {RemoteFunctionResponse} */
        {
          type: "result",
          result: stringify3(data2, transport),
          refreshes: data2.issues ? {} : await serialize_refreshes(form_client_refreshes)
        }
      );
    }
    if (info.type === "command") {
      const { payload: payload2, refreshes } = await event.request.json();
      const arg = parse_remote_arg(payload2, transport);
      const data2 = await with_request_store({ event, state: state2 }, () => fn(arg));
      return json(
        /** @type {RemoteFunctionResponse} */
        {
          type: "result",
          result: stringify3(data2, transport),
          refreshes: await serialize_refreshes(refreshes)
        }
      );
    }
    const payload = info.type === "prerender" ? additional_args : (
      /** @type {string} */
      // new URL(...) necessary because we're hiding the URL from the user in the event object
      new URL(event.request.url).searchParams.get("payload")
    );
    const data = await with_request_store(
      { event, state: state2 },
      () => fn(parse_remote_arg(payload, transport))
    );
    return json(
      /** @type {RemoteFunctionResponse} */
      {
        type: "result",
        result: stringify3(data, transport)
      }
    );
  } catch (error2) {
    if (error2 instanceof Redirect) {
      return json(
        /** @type {RemoteFunctionResponse} */
        {
          type: "redirect",
          location: error2.location,
          refreshes: await serialize_refreshes(form_client_refreshes ?? [])
        }
      );
    }
    const status = error2 instanceof HttpError || error2 instanceof SvelteKitError ? error2.status : 500;
    return json(
      /** @type {RemoteFunctionResponse} */
      {
        type: "error",
        error: await handle_error_and_jsonify(event, state2, options2, error2),
        status
      },
      {
        // By setting a non-200 during prerendering we fail the prerender process (unless handleHttpError handles it).
        // Errors at runtime will be passed to the client and are handled there
        status: state2.prerendering ? status : void 0,
        headers: {
          "cache-control": "private, no-store"
        }
      }
    );
  }
  async function serialize_refreshes(client_refreshes) {
    const refreshes = state2.refreshes ?? {};
    for (const key2 of client_refreshes) {
      if (refreshes[key2] !== void 0) continue;
      const [hash3, name2, payload] = key2.split("/");
      const loader = manifest2._.remotes[hash3];
      const fn2 = (await loader?.())?.default?.[name2];
      if (!fn2) error(400, "Bad Request");
      refreshes[key2] = with_request_store(
        { event, state: state2 },
        () => fn2(parse_remote_arg(payload, transport))
      );
    }
    if (Object.keys(refreshes).length === 0) {
      return void 0;
    }
    return stringify3(
      Object.fromEntries(
        await Promise.all(
          Object.entries(refreshes).map(async ([key2, promise]) => [key2, await promise])
        )
      ),
      transport
    );
  }
}
async function handle_remote_form_post(event, state2, manifest2, id) {
  return record_span({
    name: "sveltekit.remote.form.post",
    attributes: {},
    fn: (current2) => {
      const traced_event = merge_tracing(event, current2);
      return with_request_store(
        { event: traced_event, state: state2 },
        () => handle_remote_form_post_internal(traced_event, state2, manifest2, id)
      );
    }
  });
}
async function handle_remote_form_post_internal(event, state2, manifest2, id) {
  const [hash2, name, action_id] = id.split("/");
  const remotes = manifest2._.remotes;
  const module = await remotes[hash2]?.();
  let form = (
    /** @type {RemoteForm<any, any>} */
    module?.default[name]
  );
  if (!form) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: new SvelteKitError(
        405,
        "Method Not Allowed",
        `POST method not allowed. No form actions exist for ${"this page"}`
      )
    };
  }
  if (action_id) {
    form = with_request_store({ event, state: state2 }, () => form.for(JSON.parse(action_id)));
  }
  try {
    const form_data = await event.request.formData();
    const fn = (
      /** @type {RemoteInfo & { type: 'form' }} */
      /** @type {any} */
      form.__.fn
    );
    if (action_id && !form_data.has("id")) {
      form_data.set("sveltekit:id", decodeURIComponent(action_id));
    }
    await with_request_store({ event, state: state2 }, () => fn(form_data));
    return {
      type: "success",
      status: 200
    };
  } catch (e2) {
    const err = normalize_error(e2);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function get_remote_id(url) {
  return url.pathname.startsWith(`${base}/${app_dir}/remote/`) && url.pathname.replace(`${base}/${app_dir}/remote/`, "");
}
function get_remote_action(url) {
  return url.searchParams.get("/remote");
}
var MAX_DEPTH = 10;
async function render_page(event, event_state, page3, options2, manifest2, state2, nodes, resolve_opts) {
  if (state2.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page3.leaf]();
    return handle_action_json_request(event, event_state, options2, node?.server);
  }
  try {
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.page()
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      const remote_id = get_remote_action(event.url);
      if (remote_id) {
        action_result = await handle_remote_form_post(event, event_state, manifest2, remote_id);
      } else {
        action_result = await handle_action_request(event, event_state, leaf_node.server);
      }
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        status = get_status(action_result.error);
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender = nodes.prerender();
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state2.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state2.prerender_default = should_prerender;
    const should_prerender_data = nodes.should_prerender_data();
    const data_pathname = add_data_suffix2(event.url.pathname);
    const fetched = [];
    const ssr = nodes.ssr();
    const csr = nodes.csr();
    if (ssr === false && !(state2.prerendering && should_prerender_data)) {
      if (BROWSER && action_result && !event.request.headers.has("x-sveltekit-action")) ;
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr
        },
        status,
        error: null,
        event,
        event_state,
        options: options2,
        manifest: manifest2,
        state: state2,
        resolve_opts,
        data_serializer: server_data_serializer(event, event_state, options2)
      });
    }
    const branch2 = [];
    let load_error = null;
    const data_serializer = server_data_serializer(event, event_state, options2);
    const data_serializer_json = state2.prerendering && should_prerender_data ? server_data_serializer_json(event, event_state, options2) : null;
    const server_promises = nodes.data.map((node, i2) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          const server_data = await load_server_data({
            event,
            event_state,
            state: state2,
            node,
            parent: async () => {
              const data = {};
              for (let j2 = 0; j2 < i2; j2 += 1) {
                const parent = await server_promises[j2];
                if (parent) Object.assign(data, parent.data);
              }
              return data;
            }
          });
          if (node) {
            data_serializer.add_node(i2, server_data);
          }
          data_serializer_json?.add_node(i2, server_data);
          return server_data;
        } catch (e2) {
          load_error = /** @type {Error} */
          e2;
          throw load_error;
        }
      });
    });
    const load_promises = nodes.data.map((node, i2) => {
      if (load_error) throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            event_state,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j2 = 0; j2 < i2; j2 += 1) {
                Object.assign(data, await load_promises[j2]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i2],
            state: state2,
            csr
          });
        } catch (e2) {
          load_error = /** @type {Error} */
          e2;
          throw load_error;
        }
      });
    });
    for (const p3 of server_promises) p3.catch(() => {
    });
    for (const p3 of load_promises) p3.catch(() => {
    });
    for (let i2 = 0; i2 < nodes.data.length; i2 += 1) {
      const node = nodes.data[i2];
      if (node) {
        try {
          const server_data = await server_promises[i2];
          const data = await load_promises[i2];
          branch2.push({ node, server_data, data });
        } catch (e2) {
          const err = normalize_error(e2);
          if (err instanceof Redirect) {
            if (state2.prerendering && should_prerender_data) {
              const body2 = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state2.prerendering.dependencies.set(data_pathname, {
                response: text(body2),
                body: body2
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = get_status(err);
          const error2 = await handle_error_and_jsonify(event, event_state, options2, err);
          while (i2--) {
            if (page3.errors[i2]) {
              const index14 = (
                /** @type {number} */
                page3.errors[i2]
              );
              const node2 = await manifest2._.nodes[index14]();
              let j2 = i2;
              while (!branch2[j2]) j2 -= 1;
              data_serializer.set_max_nodes(j2 + 1);
              const layouts = compact(branch2.slice(0, j2 + 1));
              const nodes2 = new PageNodes(layouts.map((layout) => layout.node));
              return await render_response({
                event,
                event_state,
                options: options2,
                manifest: manifest2,
                state: state2,
                resolve_opts,
                page_config: {
                  ssr: nodes2.ssr(),
                  csr: nodes2.csr()
                },
                status: status2,
                error: error2,
                branch: layouts.concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched,
                data_serializer
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch2.push(null);
      }
    }
    if (state2.prerendering && data_serializer_json) {
      let { data, chunks } = data_serializer_json.get_data();
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state2.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    return await render_response({
      event,
      event_state,
      options: options2,
      manifest: manifest2,
      state: state2,
      resolve_opts,
      page_config: {
        csr,
        ssr
      },
      status,
      error: null,
      branch: ssr === false ? [] : compact(branch2),
      action_result,
      fetched,
      data_serializer: ssr === false ? server_data_serializer(event, event_state, options2) : data_serializer
    });
  } catch (e2) {
    return await respond_with_error({
      event,
      event_state,
      options: options2,
      manifest: manifest2,
      state: state2,
      status: 500,
      error: e2,
      resolve_opts
    });
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done) return result;
    done = true;
    return result = fn();
  };
}
async function render_data(event, event_state, route, options2, manifest2, state2, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n4, i2) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n4 == void 0 ? n4 : await manifest2._.nodes[n4]();
          return load_server_data({
            event: new_event,
            event_state,
            state: state2,
            node,
            parent: async () => {
              const data2 = {};
              for (let j2 = 0; j2 < i2; j2 += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j2]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            }
          });
        } catch (e2) {
          aborted = true;
          throw e2;
        }
      });
    });
    const promises = functions.map(async (fn, i2) => {
      if (!invalidated[i2]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p3, i2) => p3.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i2 + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, event_state, options2, error2),
              status: error2 instanceof HttpError || error2 instanceof SvelteKitError ? error2.status : void 0
            }
          );
        })
      )
    );
    const data_serializer = server_data_serializer_json(event, event_state, options2);
    for (let i2 = 0; i2 < nodes.length; i2++) data_serializer.add_node(i2, nodes[i2]);
    const { data, chunks } = data_serializer.get_data();
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller2) {
          controller2.enqueue(text_encoder2.encode(data));
          for await (const chunk of chunks) {
            controller2.enqueue(text_encoder2.encode(chunk));
          }
          controller2.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e2) {
    const error2 = normalize_error(e2);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(await handle_error_and_jsonify(event, event_state, options2, error2), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response(
    /** @type {import('types').ServerRedirectNode} */
    {
      type: "redirect",
      location: redirect.location
    }
  );
}
var INVALID_COOKIE_CHARACTER_REGEX = /[\x00-\x1F\x7F()<>@,;:"/[\]?={} \t]/;
function validate_options(options2) {
  if (options2?.path === void 0) {
    throw new Error("You must specify a `path` when setting, deleting or serializing cookies");
  }
}
function generate_cookie_key(domain, path, name) {
  return `${domain || ""}${path}?${encodeURIComponent(name)}`;
}
function get_cookies(request, url) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: (value) => value });
  let normalized_url;
  const new_cookies = /* @__PURE__ */ new Map();
  const defaults2 = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} [opts]
     */
    get(name, opts) {
      const best_match = Array.from(new_cookies.values()).filter((c5) => {
        return c5.name === name && domain_matches(url.hostname, c5.options.domain) && path_matches(url.pathname, c5.options.path);
      }).sort((a4, b) => b.options.path.length - a4.options.path.length)[0];
      if (best_match) {
        return best_match.options.maxAge === 0 ? void 0 : best_match.value;
      }
      const req_cookies = (0, import_cookie.parse)(header, { decode: opts?.decode });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} [opts]
     */
    getAll(opts) {
      const cookies2 = (0, import_cookie.parse)(header, { decode: opts?.decode });
      const lookup = /* @__PURE__ */ new Map();
      for (const c5 of new_cookies.values()) {
        if (domain_matches(url.hostname, c5.options.domain) && path_matches(url.pathname, c5.options.path)) {
          const existing = lookup.get(c5.name);
          if (!existing || c5.options.path.length > existing.options.path.length) {
            lookup.set(c5.name, c5);
          }
        }
      }
      for (const c5 of lookup.values()) {
        cookies2[c5.name] = c5.value;
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('./page/types.js').Cookie['options']} options
     */
    set(name, value, options2) {
      const illegal_characters = name.match(INVALID_COOKIE_CHARACTER_REGEX);
      if (illegal_characters) {
        console.warn(
          `The cookie name "${name}" will be invalid in SvelteKit 3.0 as it contains ${illegal_characters.join(
            " and "
          )}. See RFC 2616 for more details https://datatracker.ietf.org/doc/html/rfc2616#section-2.2`
        );
      }
      validate_options(options2);
      set_internal(name, value, { ...defaults2, ...options2 });
    },
    /**
     * @param {string} name
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    delete(name, options2) {
      validate_options(options2);
      cookies.set(name, "", { ...options2, maxAge: 0 });
    },
    /**
     * @param {string} name
     * @param {string} value
     *  @param {import('./page/types.js').Cookie['options']} options
     */
    serialize(name, value, options2) {
      validate_options(options2);
      let path = options2.path;
      if (!options2.domain || options2.domain === url.hostname) {
        if (!normalized_url) {
          throw new Error("Cannot serialize cookies until after the route is determined");
        }
        path = resolve(normalized_url, path);
      }
      return (0, import_cookie.serialize)(name, value, { ...defaults2, ...options2, path });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const cookie of new_cookies.values()) {
      if (!domain_matches(destination.hostname, cookie.options.domain)) continue;
      if (!path_matches(destination.pathname, cookie.options.path)) continue;
      const encoder = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  const internal_queue = [];
  function set_internal(name, value, options2) {
    if (!normalized_url) {
      internal_queue.push(() => set_internal(name, value, options2));
      return;
    }
    let path = options2.path;
    if (!options2.domain || options2.domain === url.hostname) {
      path = resolve(normalized_url, path);
    }
    const cookie_key = generate_cookie_key(options2.domain, path, name);
    const cookie = { name, value, options: { ...options2, path } };
    new_cookies.set(cookie_key, cookie);
  }
  function set_trailing_slash(trailing_slash) {
    normalized_url = normalize_path(url.pathname, trailing_slash);
    internal_queue.forEach((fn) => fn());
  }
  return { cookies, new_cookies, get_cookie_header, set_internal, set_trailing_slash };
}
function domain_matches(hostname, constraint) {
  if (!constraint) return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized) return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint) return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized) return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers2, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers2.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
    if (options2.path.endsWith(".html")) {
      const path = add_data_suffix2(options2.path);
      headers2.append("set-cookie", (0, import_cookie.serialize)(name, value, { ...options2, path }));
    }
  }
}
function create_fetch({ event, options: options2, manifest: manifest2, state: state2, get_cookie_header, set_internal }) {
  const server_fetch = async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie) request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename) || filename in manifest2._.server_assets;
        const is_asset_html = manifest2.assets.has(filename_html) || filename_html in manifest2._.server_assets;
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state2.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state2.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          } else if (read_implementation && file in manifest2._.server_assets) {
            const length = manifest2._.server_assets[file];
            const type = manifest2.mimeTypes[file.slice(file.lastIndexOf("."))];
            return new Response(read_implementation(file), {
              headers: {
                "Content-Length": "" + length,
                "Content-Type": type
              }
            });
          }
          return await fetch(request);
        }
        if (has_prerendered_path(manifest2, base + decoded)) {
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await internal_fetch(request, options2, manifest2, state2);
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str, {
              decodeValues: false
            });
            const path = options3.path ?? (url.pathname.split("/").slice(0, -1).join("/") || "/");
            set_internal(name, value, {
              path,
              encode: (value2) => value2,
              .../** @type {import('cookie').CookieSerializeOptions} */
              options3
            });
          }
        }
        return response;
      }
    });
  };
  return (input, init2) => {
    const response = server_fetch(input, init2);
    response.catch(() => {
    });
    return response;
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
async function internal_fetch(request, options2, manifest2, state2) {
  if (request.signal) {
    if (request.signal.aborted) {
      throw new DOMException("The operation was aborted.", "AbortError");
    }
    let remove_abort_listener = () => {
    };
    const abort_promise = new Promise((_3, reject) => {
      const on_abort = () => {
        reject(new DOMException("The operation was aborted.", "AbortError"));
      };
      request.signal.addEventListener("abort", on_abort, { once: true });
      remove_abort_listener = () => request.signal.removeEventListener("abort", on_abort);
    });
    const result = await Promise.race([
      respond(request, options2, manifest2, {
        ...state2,
        depth: state2.depth + 1
      }),
      abort_promise
    ]);
    remove_abort_listener();
    return result;
  } else {
    return await respond(request, options2, manifest2, {
      ...state2,
      depth: state2.depth + 1
    });
  }
}
var body;
var etag;
var headers;
function get_public_env(request) {
  body ?? (body = `export const env=${JSON.stringify(public_env)}`);
  etag ?? (etag = `W/${Date.now()}`);
  headers ?? (headers = new Headers({
    "content-type": "application/javascript; charset=utf-8",
    etag
  }));
  if (request.headers.get("if-none-match") === etag) {
    return new Response(void 0, { status: 304, headers });
  }
  return new Response(body, { headers });
}
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
var respond = propagate_context(internal_respond);
async function internal_respond(request, options2, manifest2, state2) {
  const url = new URL(request.url);
  const is_route_resolution_request = has_resolution_suffix2(url.pathname);
  const is_data_request = has_data_suffix2(url.pathname);
  const remote_id = get_remote_id(url);
  {
    const request_origin = request.headers.get("origin");
    if (remote_id) {
      if (request.method !== "GET" && request_origin !== url.origin) {
        const message = "Cross-site remote requests are forbidden";
        return json({ message }, { status: 403 });
      }
    } else if (options2.csrf_check_origin) {
      const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request_origin !== url.origin && (!request_origin || !options2.csrf_trusted_origins.includes(request_origin));
      if (forbidden) {
        const message = `Cross-site ${request.method} form submissions are forbidden`;
        const opts = { status: 403 };
        if (request.headers.get("accept") === "application/json") {
          return json({ message }, opts);
        }
        return text(message, opts);
      }
    }
  }
  if (options2.hash_routing && url.pathname !== base + "/" && url.pathname !== "/[fallback]") {
    return text("Not found", { status: 404 });
  }
  let invalidated_data_nodes;
  if (is_route_resolution_request) {
    url.pathname = strip_resolution_suffix2(url.pathname);
  } else if (is_data_request) {
    url.pathname = strip_data_suffix2(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  } else if (remote_id) {
    url.pathname = request.headers.get("x-sveltekit-pathname") ?? base;
    url.search = request.headers.get("x-sveltekit-search") ?? "";
  }
  const headers2 = {};
  const { cookies, new_cookies, get_cookie_header, set_internal, set_trailing_slash } = get_cookies(
    request,
    url
  );
  const event_state = {
    prerendering: state2.prerendering,
    transport: options2.hooks.transport,
    handleValidationError: options2.hooks.handleValidationError,
    tracing: {
      record_span
    },
    is_in_remote_function: false
  };
  const event = {
    cookies,
    // @ts-expect-error `fetch` needs to be created after the `event` itself
    fetch: null,
    getClientAddress: state2.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-vercel"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params: {},
    platform: state2.platform,
    request,
    route: { id: null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers2) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers2[lower] = value;
          if (state2.prerendering && lower === "cache-control") {
            state2.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request,
    isSubRequest: state2.depth > 0,
    isRemoteRequest: !!remote_id
  };
  event.fetch = create_fetch({
    event,
    options: options2,
    manifest: manifest2,
    state: state2,
    get_cookie_header,
    set_internal
  });
  if (state2.emulator?.platform) {
    event.platform = await state2.emulator.platform({
      config: {},
      prerender: !!state2.prerendering?.fallback
    });
  }
  let resolved_path = url.pathname;
  if (!remote_id) {
    const prerendering_reroute_state = state2.prerendering?.inside_reroute;
    try {
      if (state2.prerendering) state2.prerendering.inside_reroute = true;
      resolved_path = await options2.hooks.reroute({ url: new URL(url), fetch: event.fetch }) ?? url.pathname;
    } catch {
      return text("Internal Server Error", {
        status: 500
      });
    } finally {
      if (state2.prerendering) state2.prerendering.inside_reroute = prerendering_reroute_state;
    }
  }
  try {
    resolved_path = decode_pathname(resolved_path);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  if (resolved_path !== url.pathname && !state2.prerendering?.fallback && has_prerendered_path(manifest2, resolved_path)) {
    const url2 = new URL(request.url);
    url2.pathname = is_data_request ? add_data_suffix2(resolved_path) : is_route_resolution_request ? add_resolution_suffix2(resolved_path) : resolved_path;
    const response = await fetch(url2, request);
    const headers22 = new Headers(response.headers);
    if (headers22.has("content-encoding")) {
      headers22.delete("content-encoding");
      headers22.delete("content-length");
    }
    return new Response(response.body, {
      headers: headers22,
      status: response.status,
      statusText: response.statusText
    });
  }
  let route = null;
  if (base && !state2.prerendering?.fallback) {
    if (!resolved_path.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    resolved_path = resolved_path.slice(base.length) || "/";
  }
  if (is_route_resolution_request) {
    return resolve_route(resolved_path, new URL(request.url), manifest2);
  }
  if (resolved_path === `/${app_dir}/env.js`) {
    return get_public_env(request);
  }
  if (!remote_id && resolved_path.startsWith(`/${app_dir}`)) {
    const headers22 = new Headers();
    headers22.set("cache-control", "public, max-age=0, must-revalidate");
    return text("Not found", { status: 404, headers: headers22 });
  }
  if (!state2.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(resolved_path);
      if (!match) continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        event.route = { id: route.id };
        event.params = decode_params(matched);
        break;
      }
    }
  }
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  let trailing_slash = "never";
  try {
    const page_nodes = route?.page ? new PageNodes(await load_page_nodes(route.page, manifest2)) : void 0;
    if (route && !remote_id) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (page_nodes) {
        if (BROWSER) ;
        trailing_slash = page_nodes.trailing_slash();
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash ?? "never";
        if (BROWSER) ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash);
        if (normalized !== url.pathname && !state2.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
      if (state2.before_handle || state2.emulator?.platform) {
        let config2 = {};
        let prerender = false;
        if (route.endpoint) {
          const node = await route.endpoint();
          config2 = node.config ?? config2;
          prerender = node.prerender ?? prerender;
        } else if (page_nodes) {
          config2 = page_nodes.get_config() ?? config2;
          prerender = page_nodes.prerender();
        }
        if (state2.before_handle) {
          state2.before_handle(event, config2, prerender);
        }
        if (state2.emulator?.platform) {
          event.platform = await state2.emulator.platform({ config: config2, prerender });
        }
      }
    }
    set_trailing_slash(trailing_slash);
    if (state2.prerendering && !state2.prerendering.fallback && !state2.prerendering.inside_reroute) {
      disable_search(url);
    }
    const response = await record_span({
      name: "sveltekit.handle.root",
      attributes: {
        "http.route": event.route.id || "unknown",
        "http.method": event.request.method,
        "http.url": event.url.href,
        "sveltekit.is_data_request": is_data_request,
        "sveltekit.is_sub_request": event.isSubRequest
      },
      fn: async (root_span) => {
        const traced_event = {
          ...event,
          tracing: {
            enabled: false,
            root: root_span,
            current: root_span
          }
        };
        return await with_request_store(
          { event: traced_event, state: event_state },
          () => options2.hooks.handle({
            event: traced_event,
            resolve: (event2, opts) => {
              return record_span({
                name: "sveltekit.resolve",
                attributes: {
                  "http.route": event2.route.id || "unknown"
                },
                fn: (resolve_span) => {
                  return with_request_store(
                    null,
                    () => resolve2(merge_tracing(event2, resolve_span), page_nodes, opts).then(
                      (response2) => {
                        for (const key2 in headers2) {
                          const value = headers2[key2];
                          response2.headers.set(
                            key2,
                            /** @type {string} */
                            value
                          );
                        }
                        add_cookies_to_headers(response2.headers, new_cookies.values());
                        if (state2.prerendering && event2.route.id !== null) {
                          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
                        }
                        resolve_span.setAttributes({
                          "http.response.status_code": response2.status,
                          "http.response.body.size": response2.headers.get("content-length") || "unknown"
                        });
                        return response2;
                      }
                    )
                  );
                }
              });
            }
          })
        );
      }
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag2 = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag2) {
        const headers22 = new Headers({ etag: etag2 });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value) headers22.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers22
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location2 = response.headers.get("location");
      if (location2) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location2
        ));
      }
    }
    return response;
  } catch (e2) {
    if (e2 instanceof Redirect) {
      const response = is_data_request || remote_id ? redirect_json_response(e2) : route?.page && is_action_json_request(event) ? action_json_redirect(e2) : redirect_response(e2.status, e2.location);
      add_cookies_to_headers(response.headers, new_cookies.values());
      return response;
    }
    return await handle_fatal_error(event, event_state, options2, e2);
  }
  async function resolve2(event2, page_nodes, opts) {
    try {
      if (opts) {
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (options2.hash_routing || state2.prerendering?.fallback) {
        return await render_response({
          event: event2,
          event_state,
          options: options2,
          manifest: manifest2,
          state: state2,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts,
          data_serializer: server_data_serializer(event2, event_state, options2)
        });
      }
      if (remote_id) {
        return await handle_remote_call(event2, event_state, options2, manifest2, remote_id);
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response2;
        if (is_data_request) {
          response2 = await render_data(
            event2,
            event_state,
            route,
            options2,
            manifest2,
            state2,
            invalidated_data_nodes,
            trailing_slash
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response2 = await render_endpoint(event2, event_state, await route.endpoint(), state2);
        } else if (route.page) {
          if (!page_nodes) {
            throw new Error("page_nodes not found. This should never happen");
          } else if (page_methods.has(method)) {
            response2 = await render_page(
              event2,
              event_state,
              route.page,
              options2,
              manifest2,
              state2,
              page_nodes,
              resolve_opts
            );
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest2._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response2 = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response2 = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("Route is neither page nor endpoint. This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response2.headers.get("vary")?.split(",")?.map((v2) => v2.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response2 = new Response(response2.body, {
              status: response2.status,
              statusText: response2.statusText,
              headers: new Headers(response2.headers)
            });
            response2.headers.append("Vary", "Accept");
          }
        }
        return response2;
      }
      if (state2.error && event2.isSubRequest) {
        const headers22 = new Headers(request.headers);
        headers22.set("x-sveltekit-error", "true");
        return await fetch(request, { headers: headers22 });
      }
      if (state2.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state2.depth === 0) {
        if (BROWSER && event2.url.pathname === "/.well-known/appspecific/com.chrome.devtools.json") ;
        return await respond_with_error({
          event: event2,
          event_state,
          options: options2,
          manifest: manifest2,
          state: state2,
          status: 404,
          error: new SvelteKitError(404, "Not Found", `Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state2.prerendering) {
        return text("not found", { status: 404 });
      }
      const response = await fetch(request);
      return new Response(response.body, response);
    } catch (e2) {
      return await handle_fatal_error(event2, event_state, options2, e2);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
function load_page_nodes(page3, manifest2) {
  return Promise.all([
    // we use == here rather than === because [undefined] serializes as "[null]"
    ...page3.layouts.map((n4) => n4 == void 0 ? n4 : manifest2._.nodes[n4]()),
    manifest2._.nodes[page3.leaf]()
  ]);
}
function propagate_context(fn) {
  return async (req, ...rest) => {
    {
      return fn(req, ...rest);
    }
  };
}
function filter_env(env, allowed, disallowed) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k]) => k.startsWith(allowed) && (disallowed === "" || !k.startsWith(disallowed))
    )
  );
}
function set_app(value) {
}
var init_promise;
var current = null;
var _options, _manifest;
var Server = class {
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    /** @type {import('types').SSROptions} */
    __privateAdd(this, _options);
    /** @type {import('@sveltejs/kit').SSRManifest} */
    __privateAdd(this, _manifest);
    __privateSet(this, _options, options);
    __privateSet(this, _manifest, manifest2);
    if (IN_WEBCONTAINER2) {
      const respond2 = this.respond.bind(this);
      this.respond = async (...args) => {
        const { promise, resolve: resolve2 } = (
          /** @type {PromiseWithResolvers<void>} */
          with_resolvers()
        );
        const previous = current;
        current = promise;
        await previous;
        return respond2(...args).finally(resolve2);
      };
    }
  }
  /**
   * @param {import('@sveltejs/kit').ServerInitOptions} opts
   */
  async init({ env, read }) {
    const { env_public_prefix, env_private_prefix } = __privateGet(this, _options);
    set_private_env(filter_env(env, env_private_prefix, env_public_prefix));
    set_public_env(filter_env(env, env_public_prefix, env_private_prefix));
    if (read) {
      const wrapped_read = (file) => {
        const result = read(file);
        if (result instanceof ReadableStream) {
          return result;
        } else {
          return new ReadableStream({
            async start(controller2) {
              try {
                const stream = await Promise.resolve(result);
                if (!stream) {
                  controller2.close();
                  return;
                }
                const reader = stream.getReader();
                while (true) {
                  const { done, value } = await reader.read();
                  if (done) break;
                  controller2.enqueue(value);
                }
                controller2.close();
              } catch (error2) {
                controller2.error(error2);
              }
            }
          });
        }
      };
      set_read_implementation(wrapped_read);
    }
    await (init_promise ?? (init_promise = (async () => {
      try {
        const module = await get_hooks();
        __privateGet(this, _options).hooks = {
          handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
          handleError: module.handleError || (({ status, error: error2, event }) => {
            const error_message = format_server_error(
              status,
              /** @type {Error} */
              error2,
              event
            );
            console.error(error_message);
          }),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request)),
          handleValidationError: module.handleValidationError || (({ issues }) => {
            console.error("Remote function schema validation failed:", issues);
            return { message: "Bad Request" };
          }),
          reroute: module.reroute || (() => {
          }),
          transport: module.transport || {}
        };
        set_app({
          decoders: module.transport ? Object.fromEntries(Object.entries(module.transport).map(([k, v2]) => [k, v2.decode])) : {}
        });
        if (module.init) {
          await module.init();
        }
      } catch (e2) {
        {
          throw e2;
        }
      }
    })()));
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    return respond(request, __privateGet(this, _options), __privateGet(this, _manifest), {
      ...options2,
      error: false,
      depth: 0
    });
  }
};
_options = new WeakMap();
_manifest = new WeakMap();

// .svelte-kit/vercel-tmp/![-]/catchall/manifest.js
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ?? (value = value = fn());
  }
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set([".DS_Store", "Aapenhetsloven.pdf", "TeamPicture.png", "bilXtra_logo.png", "default_profile.jpg", "favicon.png", "global.css", "image_1.png", "image_2.png", "image_3.png", "image_4.png", "image_5.png", "logo.webp", "profilePic_1.png", "profilePic_2.png", "profilePic_3.png", "profilePic_4.png", "sanity.svg", "svelte.svg"]),
    mimeTypes: { ".pdf": "application/pdf", ".png": "image/png", ".jpg": "image/jpeg", ".css": "text/css", ".webp": "image/webp", ".svg": "image/svg+xml" },
    _: {
      client: { start: "_app/immutable/entry/start.C6crTfh6.js", app: "_app/immutable/entry/app.DE0a-hMS.js", imports: ["_app/immutable/entry/start.C6crTfh6.js", "_app/immutable/chunks/CYahJKwF.js", "_app/immutable/chunks/LOdgb3q2.js", "_app/immutable/chunks/DVmcspCf.js", "_app/immutable/chunks/BUApaBEI.js", "_app/immutable/chunks/Bl-_U8ph.js", "_app/immutable/entry/app.DE0a-hMS.js", "_app/immutable/chunks/Dp1pzeXC.js", "_app/immutable/chunks/LOdgb3q2.js", "_app/immutable/chunks/Dskp9KqV.js", "_app/immutable/chunks/BniCQta6.js", "_app/immutable/chunks/Bl-_U8ph.js", "_app/immutable/chunks/7YGlKFBW.js", "_app/immutable/chunks/5-z_T_YA.js", "_app/immutable/chunks/fFWynACa.js", "_app/immutable/chunks/CrqJEF-O.js", "_app/immutable/chunks/DQc0Uil7.js", "_app/immutable/chunks/DVmcspCf.js"], stylesheets: [], fonts: [], uses_env_dynamic_public: false },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2))),
        __memo(() => Promise.resolve().then(() => (init__3(), __exports3))),
        __memo(() => Promise.resolve().then(() => (init__4(), __exports4))),
        __memo(() => Promise.resolve().then(() => (init__5(), __exports5))),
        __memo(() => Promise.resolve().then(() => (init__6(), __exports6))),
        __memo(() => Promise.resolve().then(() => (init__7(), __exports7))),
        __memo(() => Promise.resolve().then(() => (init__8(), __exports8))),
        __memo(() => Promise.resolve().then(() => (init__9(), __exports9))),
        __memo(() => Promise.resolve().then(() => (init__10(), __exports10))),
        __memo(() => Promise.resolve().then(() => (init__11(), __exports11))),
        __memo(() => Promise.resolve().then(() => (init__12(), __exports12))),
        __memo(() => Promise.resolve().then(() => (init__13(), __exports13)))
      ],
      remotes: {},
      routes: [
        {
          id: "/",
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: "/about",
          pattern: /^\/about\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        },
        {
          id: "/bilxtra",
          pattern: /^\/bilxtra\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 4 },
          endpoint: null
        },
        {
          id: "/contact",
          pattern: /^\/contact\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 5 },
          endpoint: null
        },
        {
          id: "/hms",
          pattern: /^\/hms\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 6 },
          endpoint: null
        },
        {
          id: "/investors",
          pattern: /^\/investors\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 7 },
          endpoint: null
        },
        {
          id: "/people",
          pattern: /^\/people\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 8 },
          endpoint: null
        },
        {
          id: "/post/[slug]",
          pattern: /^\/post\/([^/]+?)\/?$/,
          params: [{ "name": "slug", "optional": false, "rest": false, "chained": false }],
          page: { layouts: [0], errors: [1], leaf: 9 },
          endpoint: null
        },
        {
          id: "/reklamasjon",
          pattern: /^\/reklamasjon\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 10 },
          endpoint: null
        },
        {
          id: "/skjema",
          pattern: /^\/skjema\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 11 },
          endpoint: null
        },
        {
          id: "/subsidiaries",
          pattern: /^\/subsidiaries\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 12 },
          endpoint: null
        }
      ],
      prerendered_routes: /* @__PURE__ */ new Set([]),
      matchers: async () => {
        return {};
      },
      server_assets: {}
    }
  };
})();

// .svelte-kit/vercel-tmp/![-]/catchall/edge.js
var server = new Server(manifest);
var read_headers;
if (process.env.VERCEL_AUTOMATION_BYPASS_SECRET) {
  read_headers = {
    "x-vercel-protection-bypass": process.env.VERCEL_AUTOMATION_BYPASS_SECRET
  };
}
var origin;
var initialized = server.init({
  env: (
    /** @type {Record<string, string>} */
    process.env
  ),
  read: async (file) => {
    const url = `${origin}/${file}`;
    const response = await fetch(url, {
      // we need to add a bypass header if the user has deployment protection enabled
      // see https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation
      headers: read_headers
    });
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(
          `Please enable Protection Bypass for Automation: https://svelte.dev/docs/kit/adapter-vercel#Troubleshooting-Deployment-protection`
        );
      }
      throw new Error(
        `read(...) failed: could not fetch ${url} (${response.status} ${response.statusText})`
      );
    }
    return response.body;
  }
});
var edge_default = async (request, context3) => {
  if (!origin) {
    origin = new URL(request.url).origin;
    await initialized;
  }
  return server.respond(request, {
    getClientAddress() {
      return (
        /** @type {string} */
        request.headers.get("x-forwarded-for")
      );
    },
    platform: {
      context: context3
    }
  });
};
export {
  edge_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

event-source-polyfill/src/eventsource.js:
  (** @license
   * eventsource.js
   * Available under MIT License (MIT)
   * https://github.com/Yaffle/EventSource/
   *)
*/
//# sourceMappingURL=index.js.map
