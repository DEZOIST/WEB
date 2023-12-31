/*! For license information please see index.74ecf734.js.LICENSE.txt */
(() => {
    var e = {
        182: () => {
            const e = window.mdui.$;
            e((() => {
                e("#p-d .p-select").length && new window.mdui.Select("#demo-js")
            }
            ))
        }
        ,
        523: () => {
            const e = window.mdui.$;
            e((() => {
                if (!e("#p-d .p-shadow").length)
                    return;
                const t = e("#example-shadow");
                e("#change-shadow").on("input", (function () {
                    let n = "";
                    const r = `mdui-shadow-${e(this).val()}`;
                    for (let e = 0; e <= 24; e++)
                        n += ` mdui-shadow-${e}`;
                    n = n.trim(),
                        t.removeClass(n).addClass(r)
                }
                ))
            }
            ))
        }
        ,
        525: () => {
            const e = window.mdui.$;
            e((() => {
                e("#p-d .p-snackbar").length && (e("#example-basic").on("click", (() => {
                    window.mdui.snackbar({
                        message: "Message sent"
                    })
                }
                )),
                    e("#example-callback").on("click", (() => {
                        window.mdui.snackbar({
                            message: "Archived",
                            buttonText: "undo",
                            onClick() {
                                window.mdui.alert("点击了 Sanckbar")
                            },
                            onButtonClick() {
                                window.mdui.alert("点击了按钮")
                            },
                            onClose() {
                                window.mdui.alert("关闭了")
                            }
                        })
                    }
                    )),
                    e("#example-top").on("click", (() => {
                        window.mdui.snackbar({
                            message: "top",
                            position: "top"
                        })
                    }
                    )),
                    e("#example-bottom").on("click", (() => {
                        window.mdui.snackbar({
                            message: "bottom",
                            position: "bottom"
                        })
                    }
                    )),
                    e("#example-left-top").on("click", (() => {
                        window.mdui.snackbar({
                            message: "left-top",
                            position: "left-top"
                        })
                    }
                    )),
                    e("#example-left-bottom").on("click", (() => {
                        window.mdui.snackbar({
                            message: "left-bottom",
                            position: "left-bottom"
                        })
                    }
                    )),
                    e("#example-right-top").on("click", (() => {
                        window.mdui.snackbar({
                            message: "right-top",
                            position: "right-top"
                        })
                    }
                    )),
                    e("#example-right-bottom").on("click", (() => {
                        window.mdui.snackbar({
                            message: "right-bottom",
                            position: "right-bottom"
                        })
                    }
                    )))
            }
            ))
        }
        ,
        152: function (e) {
            var t;
            t = function () {
                return function () {
                    var e = {
                        686: function (e, t, n) {
                            "use strict";
                            n.d(t, {
                                default: function () {
                                    return k
                                }
                            });
                            var r = n(279)
                                , i = n.n(r)
                                , o = n(370)
                                , a = n.n(o)
                                , s = n(817)
                                , l = n.n(s);
                            function c(e) {
                                try {
                                    return document.execCommand(e)
                                } catch (e) {
                                    return !1
                                }
                            }
                            var u = function (e) {
                                var t = l()(e);
                                return c("cut"),
                                    t
                            }
                                , d = function (e, t) {
                                    var n = function (e) {
                                        var t = "rtl" === document.documentElement.getAttribute("dir")
                                            , n = document.createElement("textarea");
                                        n.style.fontSize = "12pt",
                                            n.style.border = "0",
                                            n.style.padding = "0",
                                            n.style.margin = "0",
                                            n.style.position = "absolute",
                                            n.style[t ? "right" : "left"] = "-9999px";
                                        var r = window.pageYOffset || document.documentElement.scrollTop;
                                        return n.style.top = "".concat(r, "px"),
                                            n.setAttribute("readonly", ""),
                                            n.value = e,
                                            n
                                    }(e);
                                    t.container.appendChild(n);
                                    var r = l()(n);
                                    return c("copy"),
                                        n.remove(),
                                        r
                                }
                                , f = function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                        container: document.body
                                    }
                                        , n = "";
                                    return "string" == typeof e ? n = d(e, t) : e instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == e ? void 0 : e.type) ? n = d(e.value, t) : (n = l()(e),
                                        c("copy")),
                                        n
                                };
                            function p(e) {
                                return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                                    return typeof e
                                }
                                    : function (e) {
                                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                    }
                                    ,
                                    p(e)
                            }
                            var h = function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                                    , t = e.action
                                    , n = void 0 === t ? "copy" : t
                                    , r = e.container
                                    , i = e.target
                                    , o = e.text;
                                if ("copy" !== n && "cut" !== n)
                                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                                if (void 0 !== i) {
                                    if (!i || "object" !== p(i) || 1 !== i.nodeType)
                                        throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === n && i.hasAttribute("disabled"))
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === n && (i.hasAttribute("readonly") || i.hasAttribute("disabled")))
                                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                                }
                                return o ? f(o, {
                                    container: r
                                }) : i ? "cut" === n ? u(i) : f(i, {
                                    container: r
                                }) : void 0
                            };
                            function g(e) {
                                return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                                    return typeof e
                                }
                                    : function (e) {
                                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                    }
                                    ,
                                    g(e)
                            }
                            function m(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1,
                                        r.configurable = !0,
                                        "value" in r && (r.writable = !0),
                                        Object.defineProperty(e, r.key, r)
                                }
                            }
                            function b(e, t) {
                                return b = Object.setPrototypeOf || function (e, t) {
                                    return e.__proto__ = t,
                                        e
                                }
                                    ,
                                    b(e, t)
                            }
                            function y(e) {
                                var t = function () {
                                    if ("undefined" == typeof Reflect || !Reflect.construct)
                                        return !1;
                                    if (Reflect.construct.sham)
                                        return !1;
                                    if ("function" == typeof Proxy)
                                        return !0;
                                    try {
                                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }
                                        ))),
                                            !0
                                    } catch (e) {
                                        return !1
                                    }
                                }();
                                return function () {
                                    var n, r = w(e);
                                    if (t) {
                                        var i = w(this).constructor;
                                        n = Reflect.construct(r, arguments, i)
                                    } else
                                        n = r.apply(this, arguments);
                                    return v(this, n)
                                }
                            }
                            function v(e, t) {
                                return !t || "object" !== g(t) && "function" != typeof t ? function (e) {
                                    if (void 0 === e)
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e
                                }(e) : t
                            }
                            function w(e) {
                                return w = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                                    return e.__proto__ || Object.getPrototypeOf(e)
                                }
                                    ,
                                    w(e)
                            }
                            function x(e, t) {
                                var n = "data-clipboard-".concat(e);
                                if (t.hasAttribute(n))
                                    return t.getAttribute(n)
                            }
                            var E = function (e) {
                                !function (e, t) {
                                    if ("function" != typeof t && null !== t)
                                        throw new TypeError("Super expression must either be null or a function");
                                    e.prototype = Object.create(t && t.prototype, {
                                        constructor: {
                                            value: e,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }),
                                        t && b(e, t)
                                }(o, e);
                                var t, n, r, i = y(o);
                                function o(e, t) {
                                    var n;
                                    return function (e, t) {
                                        if (!(e instanceof t))
                                            throw new TypeError("Cannot call a class as a function")
                                    }(this, o),
                                        (n = i.call(this)).resolveOptions(t),
                                        n.listenClick(e),
                                        n
                                }
                                return t = o,
                                    n = [{
                                        key: "resolveOptions",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            this.action = "function" == typeof e.action ? e.action : this.defaultAction,
                                                this.target = "function" == typeof e.target ? e.target : this.defaultTarget,
                                                this.text = "function" == typeof e.text ? e.text : this.defaultText,
                                                this.container = "object" === g(e.container) ? e.container : document.body
                                        }
                                    }, {
                                        key: "listenClick",
                                        value: function (e) {
                                            var t = this;
                                            this.listener = a()(e, "click", (function (e) {
                                                return t.onClick(e)
                                            }
                                            ))
                                        }
                                    }, {
                                        key: "onClick",
                                        value: function (e) {
                                            var t = e.delegateTarget || e.currentTarget
                                                , n = this.action(t) || "copy"
                                                , r = h({
                                                    action: n,
                                                    container: this.container,
                                                    target: this.target(t),
                                                    text: this.text(t)
                                                });
                                            this.emit(r ? "success" : "error", {
                                                action: n,
                                                text: r,
                                                trigger: t,
                                                clearSelection: function () {
                                                    t && t.focus(),
                                                        window.getSelection().removeAllRanges()
                                                }
                                            })
                                        }
                                    }, {
                                        key: "defaultAction",
                                        value: function (e) {
                                            return x("action", e)
                                        }
                                    }, {
                                        key: "defaultTarget",
                                        value: function (e) {
                                            var t = x("target", e);
                                            if (t)
                                                return document.querySelector(t)
                                        }
                                    }, {
                                        key: "defaultText",
                                        value: function (e) {
                                            return x("text", e)
                                        }
                                    }, {
                                        key: "destroy",
                                        value: function () {
                                            this.listener.destroy()
                                        }
                                    }],
                                    r = [{
                                        key: "copy",
                                        value: function (e) {
                                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                                container: document.body
                                            };
                                            return f(e, t)
                                        }
                                    }, {
                                        key: "cut",
                                        value: function (e) {
                                            return u(e)
                                        }
                                    }, {
                                        key: "isSupported",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                                                , t = "string" == typeof e ? [e] : e
                                                , n = !!document.queryCommandSupported;
                                            return t.forEach((function (e) {
                                                n = n && !!document.queryCommandSupported(e)
                                            }
                                            )),
                                                n
                                        }
                                    }],
                                    n && m(t.prototype, n),
                                    r && m(t, r),
                                    o
                            }(i())
                                , k = E
                        },
                        828: function (e) {
                            if ("undefined" != typeof Element && !Element.prototype.matches) {
                                var t = Element.prototype;
                                t.matches = t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector
                            }
                            e.exports = function (e, t) {
                                for (; e && 9 !== e.nodeType;) {
                                    if ("function" == typeof e.matches && e.matches(t))
                                        return e;
                                    e = e.parentNode
                                }
                            }
                        },
                        438: function (e, t, n) {
                            var r = n(828);
                            function i(e, t, n, r, i) {
                                var a = o.apply(this, arguments);
                                return e.addEventListener(n, a, i),
                                {
                                    destroy: function () {
                                        e.removeEventListener(n, a, i)
                                    }
                                }
                            }
                            function o(e, t, n, i) {
                                return function (n) {
                                    n.delegateTarget = r(n.target, t),
                                        n.delegateTarget && i.call(e, n)
                                }
                            }
                            e.exports = function (e, t, n, r, o) {
                                return "function" == typeof e.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)),
                                    Array.prototype.map.call(e, (function (e) {
                                        return i(e, t, n, r, o)
                                    }
                                    )))
                            }
                        },
                        879: function (e, t) {
                            t.node = function (e) {
                                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
                            }
                                ,
                                t.nodeList = function (e) {
                                    var n = Object.prototype.toString.call(e);
                                    return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]))
                                }
                                ,
                                t.string = function (e) {
                                    return "string" == typeof e || e instanceof String
                                }
                                ,
                                t.fn = function (e) {
                                    return "[object Function]" === Object.prototype.toString.call(e)
                                }
                        },
                        370: function (e, t, n) {
                            var r = n(879)
                                , i = n(438);
                            e.exports = function (e, t, n) {
                                if (!e && !t && !n)
                                    throw new Error("Missing required arguments");
                                if (!r.string(t))
                                    throw new TypeError("Second argument must be a String");
                                if (!r.fn(n))
                                    throw new TypeError("Third argument must be a Function");
                                if (r.node(e))
                                    return function (e, t, n) {
                                        return e.addEventListener(t, n),
                                        {
                                            destroy: function () {
                                                e.removeEventListener(t, n)
                                            }
                                        }
                                    }(e, t, n);
                                if (r.nodeList(e))
                                    return function (e, t, n) {
                                        return Array.prototype.forEach.call(e, (function (e) {
                                            e.addEventListener(t, n)
                                        }
                                        )),
                                        {
                                            destroy: function () {
                                                Array.prototype.forEach.call(e, (function (e) {
                                                    e.removeEventListener(t, n)
                                                }
                                                ))
                                            }
                                        }
                                    }(e, t, n);
                                if (r.string(e))
                                    return function (e, t, n) {
                                        return i(document.body, e, t, n)
                                    }(e, t, n);
                                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                            }
                        },
                        817: function (e) {
                            e.exports = function (e) {
                                var t;
                                if ("SELECT" === e.nodeName)
                                    e.focus(),
                                        t = e.value;
                                else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                                    var n = e.hasAttribute("readonly");
                                    n || e.setAttribute("readonly", ""),
                                        e.select(),
                                        e.setSelectionRange(0, e.value.length),
                                        n || e.removeAttribute("readonly"),
                                        t = e.value
                                } else {
                                    e.hasAttribute("contenteditable") && e.focus();
                                    var r = window.getSelection()
                                        , i = document.createRange();
                                    i.selectNodeContents(e),
                                        r.removeAllRanges(),
                                        r.addRange(i),
                                        t = r.toString()
                                }
                                return t
                            }
                        },
                        279: function (e) {
                            function t() { }
                            t.prototype = {
                                on: function (e, t, n) {
                                    var r = this.e || (this.e = {});
                                    return (r[e] || (r[e] = [])).push({
                                        fn: t,
                                        ctx: n
                                    }),
                                        this
                                },
                                once: function (e, t, n) {
                                    var r = this;
                                    function i() {
                                        r.off(e, i),
                                            t.apply(n, arguments)
                                    }
                                    return i._ = t,
                                        this.on(e, i, n)
                                },
                                emit: function (e) {
                                    for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, i = n.length; r < i; r++)
                                        n[r].fn.apply(n[r].ctx, t);
                                    return this
                                },
                                off: function (e, t) {
                                    var n = this.e || (this.e = {})
                                        , r = n[e]
                                        , i = [];
                                    if (r && t)
                                        for (var o = 0, a = r.length; o < a; o++)
                                            r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
                                    return i.length ? n[e] = i : delete n[e],
                                        this
                                }
                            },
                                e.exports = t,
                                e.exports.TinyEmitter = t
                        }
                    }
                        , t = {};
                    function n(r) {
                        if (t[r])
                            return t[r].exports;
                        var i = t[r] = {
                            exports: {}
                        };
                        return e[r](i, i.exports, n),
                            i.exports
                    }
                    return n.n = function (e) {
                        var t = e && e.__esModule ? function () {
                            return e.default
                        }
                            : function () {
                                return e
                            }
                            ;
                        return n.d(t, {
                            a: t
                        }),
                            t
                    }
                        ,
                        n.d = function (e, t) {
                            for (var r in t)
                                n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                                    enumerable: !0,
                                    get: t[r]
                                })
                        }
                        ,
                        n.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }
                        ,
                        n(686)
                }().default
            }
                ,
                e.exports = t()
        },
        775: function (e) {
            var t, n;
            !function (e) {
                if (e.document) {
                    var t, n, r = e.document;
                    r.querySelectorAll || (r.querySelectorAll = function (t) {
                        var n, i = r.createElement("style"), o = [];
                        for (r.documentElement.firstChild.appendChild(i),
                            r._qsa = [],
                            i.styleSheet.cssText = t + "{x-qsa:expression(document._qsa && document._qsa.push(this))}",
                            e.scrollBy(0, 0),
                            i.parentNode.removeChild(i); r._qsa.length;)
                            (n = r._qsa.shift()).style.removeAttribute("x-qsa"),
                                o.push(n);
                        return r._qsa = null,
                            o
                    }
                    ),
                        r.querySelector || (r.querySelector = function (e) {
                            var t = r.querySelectorAll(e);
                            return t.length ? t[0] : null
                        }
                        ),
                        r.getElementsByClassName || (r.getElementsByClassName = function (e) {
                            return e = String(e).replace(/^|\s+/g, "."),
                                r.querySelectorAll(e)
                        }
                        ),
                        Object.keys || (Object.keys = function (e) {
                            if (e !== Object(e))
                                throw TypeError("Object.keys called on non-object");
                            var t, n = [];
                            for (t in e)
                                Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                            return n
                        }
                        ),
                        Array.prototype.forEach || (Array.prototype.forEach = function (e) {
                            if (null == this)
                                throw TypeError();
                            var t = Object(this)
                                , n = t.length >>> 0;
                            if ("function" != typeof e)
                                throw TypeError();
                            var r, i = arguments[1];
                            for (r = 0; r < n; r++)
                                r in t && e.call(i, t[r], r, t)
                        }
                        ),
                        n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        (t = e).atob = t.atob || function (e) {
                            var t = 0
                                , r = []
                                , i = 0
                                , o = 0;
                            if ((e = (e = String(e)).replace(/\s/g, "")).length % 4 == 0 && (e = e.replace(/=+$/, "")),
                                e.length % 4 == 1)
                                throw Error("InvalidCharacterError");
                            if (/[^+/0-9A-Za-z]/.test(e))
                                throw Error("InvalidCharacterError");
                            for (; t < e.length;)
                                i = i << 6 | n.indexOf(e.charAt(t)),
                                    24 === (o += 6) && (r.push(String.fromCharCode(i >> 16 & 255)),
                                        r.push(String.fromCharCode(i >> 8 & 255)),
                                        r.push(String.fromCharCode(255 & i)),
                                        o = 0,
                                        i = 0),
                                    t += 1;
                            return 12 === o ? (i >>= 4,
                                r.push(String.fromCharCode(255 & i))) : 18 === o && (i >>= 2,
                                    r.push(String.fromCharCode(i >> 8 & 255)),
                                    r.push(String.fromCharCode(255 & i))),
                                r.join("")
                        }
                        ,
                        t.btoa = t.btoa || function (e) {
                            e = String(e);
                            var t, r, i, o, a, s, l, c = 0, u = [];
                            if (/[^\x00-\xFF]/.test(e))
                                throw Error("InvalidCharacterError");
                            for (; c < e.length;)
                                o = (t = e.charCodeAt(c++)) >> 2,
                                    a = (3 & t) << 4 | (r = e.charCodeAt(c++)) >> 4,
                                    s = (15 & r) << 2 | (i = e.charCodeAt(c++)) >> 6,
                                    l = 63 & i,
                                    c === e.length + 2 ? (s = 64,
                                        l = 64) : c === e.length + 1 && (l = 64),
                                    u.push(n.charAt(o), n.charAt(a), n.charAt(s), n.charAt(l));
                            return u.join("")
                        }
                        ,
                        Object.prototype.hasOwnProperty || (Object.prototype.hasOwnProperty = function (e) {
                            var t = this.__proto__ || this.constructor.prototype;
                            return e in this && (!(e in t) || t[e] !== this[e])
                        }
                        ),
                        function () {
                            if ("performance" in e == !1 && (e.performance = {}),
                                Date.now = Date.now || function () {
                                    return (new Date).getTime()
                                }
                                ,
                                "now" in e.performance == !1) {
                                var t = Date.now();
                                performance.timing && performance.timing.navigationStart && (t = performance.timing.navigationStart),
                                    e.performance.now = function () {
                                        return Date.now() - t
                                    }
                            }
                        }(),
                        e.requestAnimationFrame || (e.webkitRequestAnimationFrame && e.webkitCancelAnimationFrame ? function (e) {
                            e.requestAnimationFrame = function (t) {
                                return webkitRequestAnimationFrame((function () {
                                    t(e.performance.now())
                                }
                                ))
                            }
                                ,
                                e.cancelAnimationFrame = e.webkitCancelAnimationFrame
                        }(e) : e.mozRequestAnimationFrame && e.mozCancelAnimationFrame ? function (e) {
                            e.requestAnimationFrame = function (t) {
                                return mozRequestAnimationFrame((function () {
                                    t(e.performance.now())
                                }
                                ))
                            }
                                ,
                                e.cancelAnimationFrame = e.mozCancelAnimationFrame
                        }(e) : function (e) {
                            e.requestAnimationFrame = function (t) {
                                return e.setTimeout(t, 1e3 / 60)
                            }
                                ,
                                e.cancelAnimationFrame = e.clearTimeout
                        }(e))
                }
            }(this),
                t = function () {
                    return function (e) {
                        var t = {};
                        function n(r) {
                            if (t[r])
                                return t[r].exports;
                            var i = t[r] = {
                                exports: {},
                                id: r,
                                loaded: !1
                            };
                            return e[r].call(i.exports, i, i.exports, n),
                                i.loaded = !0,
                                i.exports
                        }
                        return n.m = e,
                            n.c = t,
                            n.p = "",
                            n(0)
                    }([function (e, t, n) {
                        e.exports = n(1)
                    }
                        , function (e, t, n) {
                            (function (t) {
                                var r = n(2)
                                    , i = n(3)
                                    , o = n(6)
                                    , a = n(7)
                                    , s = n(8)
                                    , l = n(9)
                                    , c = n(10)
                                    , u = n(11)
                                    , d = n(12)
                                    , f = n(27)
                                    , p = a.extend
                                    , h = a.dimensionCheck
                                    , g = u.svg_ns
                                    , m = {
                                        version: u.version,
                                        addTheme: function (e, t) {
                                            return null != e && null != t && (b.settings.themes[e] = t),
                                                delete b.vars.cache.themeKeys,
                                                this
                                        },
                                        addImage: function (e, t) {
                                            return l.getNodeArray(t).forEach((function (t) {
                                                var n = l.newEl("img")
                                                    , r = {};
                                                r[b.setup.dataAttr] = e,
                                                    l.setAttr(n, r),
                                                    t.appendChild(n)
                                            }
                                            )),
                                                this
                                        },
                                        setResizeUpdate: function (e, t) {
                                            e.holderData && (e.holderData.resizeUpdate = !!t,
                                                e.holderData.resizeUpdate && k(e))
                                        },
                                        run: function (e) {
                                            e = e || {};
                                            var n = {}
                                                , r = p(b.settings, e);
                                            b.vars.preempted = !0,
                                                b.vars.dataAttr = r.dataAttr || b.setup.dataAttr,
                                                n.renderer = r.renderer ? r.renderer : b.setup.renderer,
                                                -1 === b.setup.renderers.join(",").indexOf(n.renderer) && (n.renderer = b.setup.supportsSVG ? "svg" : b.setup.supportsCanvas ? "canvas" : "html");
                                            var i = l.getNodeArray(r.images)
                                                , o = l.getNodeArray(r.bgnodes)
                                                , s = l.getNodeArray(r.stylenodes)
                                                , c = l.getNodeArray(r.objects);
                                            return n.stylesheets = [],
                                                n.svgXMLStylesheet = !0,
                                                n.noFontFallback = !!r.noFontFallback,
                                                n.noBackgroundSize = !!r.noBackgroundSize,
                                                s.forEach((function (e) {
                                                    if (e.attributes.rel && e.attributes.href && "stylesheet" == e.attributes.rel.value) {
                                                        var t = e.attributes.href.value
                                                            , r = l.newEl("a");
                                                        r.href = t;
                                                        var i = r.protocol + "//" + r.host + r.pathname + r.search;
                                                        n.stylesheets.push(i)
                                                    }
                                                }
                                                )),
                                                o.forEach((function (e) {
                                                    if (t.getComputedStyle) {
                                                        var i = t.getComputedStyle(e, null).getPropertyValue("background-image")
                                                            , o = e.getAttribute("data-background-src") || i
                                                            , a = null
                                                            , s = r.domain + "/"
                                                            , l = o.indexOf(s);
                                                        if (0 === l)
                                                            a = o;
                                                        else if (1 === l && "?" === o[0])
                                                            a = o.slice(1);
                                                        else {
                                                            var c = o.substr(l).match(/([^"]*)"?\)/);
                                                            if (null !== c)
                                                                a = c[1];
                                                            else if (0 === o.indexOf("url("))
                                                                throw "Holder: unable to parse background URL: " + o
                                                        }
                                                        if (a) {
                                                            var u = v(a, r);
                                                            u && w({
                                                                mode: "background",
                                                                el: e,
                                                                flags: u,
                                                                engineSettings: n
                                                            })
                                                        }
                                                    }
                                                }
                                                )),
                                                c.forEach((function (e) {
                                                    var t = {};
                                                    try {
                                                        t.data = e.getAttribute("data"),
                                                            t.dataSrc = e.getAttribute(b.vars.dataAttr)
                                                    } catch (e) {
                                                        t.error = e
                                                    }
                                                    var i = null != t.data && 0 === t.data.indexOf(r.domain)
                                                        , o = null != t.dataSrc && 0 === t.dataSrc.indexOf(r.domain);
                                                    i ? y(r, n, t.data, e) : o && y(r, n, t.dataSrc, e)
                                                }
                                                )),
                                                i.forEach((function (e) {
                                                    var t = {};
                                                    try {
                                                        t.src = e.getAttribute("src"),
                                                            t.dataSrc = e.getAttribute(b.vars.dataAttr),
                                                            t.rendered = e.getAttribute("data-holder-rendered")
                                                    } catch (e) {
                                                        t.error = e
                                                    }
                                                    var i = null != t.src
                                                        , o = null != t.dataSrc && 0 === t.dataSrc.indexOf(r.domain)
                                                        , s = null != t.rendered && "true" == t.rendered;
                                                    i ? 0 === t.src.indexOf(r.domain) ? y(r, n, t.src, e) : o && (s ? y(r, n, t.dataSrc, e) : function (e, t, n, r, i) {
                                                        a.imageExists(e, (function (e) {
                                                            e || y(t, n, r, i)
                                                        }
                                                        ))
                                                    }(t.src, r, n, t.dataSrc, e)) : o && y(r, n, t.dataSrc, e)
                                                }
                                                )),
                                                this
                                        }
                                    }
                                    , b = {
                                        settings: {
                                            domain: "holder.js",
                                            images: "img",
                                            objects: "object",
                                            bgnodes: "body .holderjs",
                                            stylenodes: "head link.holderjs",
                                            themes: {
                                                gray: {
                                                    bg: "#EEEEEE",
                                                    fg: "#AAAAAA"
                                                },
                                                social: {
                                                    bg: "#3a5a97",
                                                    fg: "#FFFFFF"
                                                },
                                                industrial: {
                                                    bg: "#434A52",
                                                    fg: "#C2F200"
                                                },
                                                sky: {
                                                    bg: "#0D8FDB",
                                                    fg: "#FFFFFF"
                                                },
                                                vine: {
                                                    bg: "#39DBAC",
                                                    fg: "#1E292C"
                                                },
                                                lava: {
                                                    bg: "#F8591A",
                                                    fg: "#1C2846"
                                                }
                                            }
                                        },
                                        defaults: {
                                            size: 10,
                                            units: "pt",
                                            scale: 1 / 16
                                        }
                                    };
                                function y(e, t, n, r) {
                                    var i = v(n.substr(n.lastIndexOf(e.domain)), e);
                                    i && w({
                                        mode: null,
                                        el: r,
                                        flags: i,
                                        engineSettings: t
                                    })
                                }
                                function v(e, t) {
                                    var n = {
                                        theme: p(b.settings.themes.gray, null),
                                        stylesheets: t.stylesheets,
                                        instanceOptions: t
                                    }
                                        , r = e.indexOf("?")
                                        , o = [e];
                                    -1 !== r && (o = [e.slice(0, r), e.slice(r + 1)]);
                                    var s = o[0].split("/");
                                    n.holderURL = e;
                                    var l = s[1]
                                        , c = l.match(/([\d]+p?)x([\d]+p?)/);
                                    if (!c)
                                        return !1;
                                    if (n.fluid = -1 !== l.indexOf("p"),
                                        n.dimensions = {
                                            width: c[1].replace("p", "%"),
                                            height: c[2].replace("p", "%")
                                        },
                                        2 === o.length) {
                                        var u = i.parse(o[1]);
                                        if (a.truthy(u.ratio)) {
                                            n.fluid = !0;
                                            var d = parseFloat(n.dimensions.width.replace("%", ""))
                                                , f = parseFloat(n.dimensions.height.replace("%", ""));
                                            f = Math.floor(f / d * 100),
                                                d = 100,
                                                n.dimensions.width = d + "%",
                                                n.dimensions.height = f + "%"
                                        }
                                        if (n.auto = a.truthy(u.auto),
                                            u.bg && (n.theme.bg = a.parseColor(u.bg)),
                                            u.fg && (n.theme.fg = a.parseColor(u.fg)),
                                            u.bg && !u.fg && (n.autoFg = !0),
                                            u.theme && Object.prototype.hasOwnProperty.call(n.instanceOptions.themes, u.theme) && (n.theme = p(n.instanceOptions.themes[u.theme], null)),
                                            u.text && (n.text = u.text),
                                            u.textmode && (n.textmode = u.textmode),
                                            u.size && parseFloat(u.size) && (n.size = parseFloat(u.size)),
                                            null != u.fixedSize && (n.fixedSize = a.truthy(u.fixedSize)),
                                            u.font && (n.font = u.font),
                                            u.align && (n.align = u.align),
                                            u.lineWrap && (n.lineWrap = u.lineWrap),
                                            n.nowrap = a.truthy(u.nowrap),
                                            n.outline = a.truthy(u.outline),
                                            a.truthy(u.random)) {
                                            b.vars.cache.themeKeys = b.vars.cache.themeKeys || Object.keys(n.instanceOptions.themes);
                                            var h = b.vars.cache.themeKeys[0 | Math.random() * b.vars.cache.themeKeys.length];
                                            n.theme = p(n.instanceOptions.themes[h], null)
                                        }
                                    }
                                    return n
                                }
                                function w(e) {
                                    var t = e.mode
                                        , n = e.el
                                        , r = e.flags
                                        , i = e.engineSettings
                                        , o = r.dimensions
                                        , s = r.theme
                                        , c = o.width + "x" + o.height;
                                    if (t = null == t ? r.fluid ? "fluid" : "image" : t,
                                        null != r.text && (s.text = r.text,
                                            "object" === n.nodeName.toLowerCase())) {
                                        for (var u = s.text.split("\\n"), d = 0; d < u.length; d++)
                                            u[d] = a.encodeHtmlEntity(u[d]);
                                        s.text = u.join("\\n")
                                    }
                                    if (s.text) {
                                        var f = s.text.match(/holder_([a-z]+)/g);
                                        null !== f && f.forEach((function (e) {
                                            "holder_dimensions" === e && (s.text = s.text.replace(e, c))
                                        }
                                        ))
                                    }
                                    var g = r.holderURL
                                        , m = p(i, null);
                                    if (r.font && (s.font = r.font,
                                        !m.noFontFallback && "img" === n.nodeName.toLowerCase() && b.setup.supportsCanvas && "svg" === m.renderer && (m = p(m, {
                                            renderer: "canvas"
                                        }))),
                                        r.font && "canvas" == m.renderer && (m.reRender = !0),
                                        "background" == t)
                                        null == n.getAttribute("data-background-src") && l.setAttr(n, {
                                            "data-background-src": g
                                        });
                                    else {
                                        var y = {};
                                        y[b.vars.dataAttr] = g,
                                            l.setAttr(n, y)
                                    }
                                    r.theme = s,
                                        n.holderData = {
                                            flags: r,
                                            engineSettings: m
                                        },
                                        "image" != t && "fluid" != t || l.setAttr(n, {
                                            alt: s.text ? s.text + " [" + c + "]" : c
                                        });
                                    var v = {
                                        mode: t,
                                        el: n,
                                        holderSettings: {
                                            dimensions: o,
                                            theme: s,
                                            flags: r
                                        },
                                        engineSettings: m
                                    };
                                    "image" == t ? (r.auto || (n.style.width = o.width + "px",
                                        n.style.height = o.height + "px"),
                                        "html" == m.renderer ? n.style.backgroundColor = s.bg : (x(v),
                                            "exact" == r.textmode && (n.holderData.resizeUpdate = !0,
                                                b.vars.resizableImages.push(n),
                                                k(n)))) : "background" == t && "html" != m.renderer ? x(v) : "fluid" == t && (n.holderData.resizeUpdate = !0,
                                                    "%" == o.height.slice(-1) ? n.style.height = o.height : null != r.auto && r.auto || (n.style.height = o.height + "px"),
                                                    "%" == o.width.slice(-1) ? n.style.width = o.width : null != r.auto && r.auto || (n.style.width = o.width + "px"),
                                                    "inline" != n.style.display && "" !== n.style.display && "none" != n.style.display || (n.style.display = "block"),
                                                    function (e) {
                                                        if (e.holderData) {
                                                            var t = h(e);
                                                            if (t) {
                                                                var n = e.holderData.flags
                                                                    , r = {
                                                                        fluidHeight: "%" == n.dimensions.height.slice(-1),
                                                                        fluidWidth: "%" == n.dimensions.width.slice(-1),
                                                                        mode: null,
                                                                        initialDimensions: t
                                                                    };
                                                                r.fluidWidth && !r.fluidHeight ? (r.mode = "width",
                                                                    r.ratio = r.initialDimensions.width / parseFloat(n.dimensions.height)) : !r.fluidWidth && r.fluidHeight && (r.mode = "height",
                                                                        r.ratio = parseFloat(n.dimensions.width) / r.initialDimensions.height),
                                                                    e.holderData.fluidConfig = r
                                                            } else
                                                                A(e)
                                                        }
                                                    }(n),
                                                    "html" == m.renderer ? n.style.backgroundColor = s.bg : (b.vars.resizableImages.push(n),
                                                        k(n)))
                                }
                                function x(e) {
                                    var n, r = e.mode, i = e.el, a = e.holderSettings, s = e.engineSettings;
                                    switch (s.renderer) {
                                        case "svg":
                                            if (!b.setup.supportsSVG)
                                                return;
                                            break;
                                        case "canvas":
                                            if (!b.setup.supportsCanvas)
                                                return;
                                            break;
                                        default:
                                            return
                                    }
                                    var u = {
                                        width: a.dimensions.width,
                                        height: a.dimensions.height,
                                        theme: a.theme,
                                        flags: a.flags
                                    }
                                        , p = function (e) {
                                            var t = b.defaults.size
                                                , n = null != e.flags.fixedSize ? e.flags.fixedSize : e.theme.fixedSize;
                                            switch (parseFloat(e.theme.size) ? t = e.theme.size : parseFloat(e.flags.size) && (t = e.flags.size),
                                            e.font = {
                                                family: e.theme.font ? e.theme.font : "Arial, Helvetica, Open Sans, sans-serif",
                                                size: n ? t : E(e.width, e.height, t, b.defaults.scale),
                                                units: e.theme.units ? e.theme.units : b.defaults.units,
                                                weight: e.theme.fontweight ? e.theme.fontweight : "bold"
                                            },
                                            e.text = e.theme.text || Math.floor(e.width) + "x" + Math.floor(e.height),
                                            e.noWrap = e.theme.nowrap || e.flags.nowrap,
                                            e.align = e.theme.align || e.flags.align || "center",
                                            e.flags.textmode) {
                                                case "literal":
                                                    e.text = e.flags.dimensions.width + "x" + e.flags.dimensions.height;
                                                    break;
                                                case "exact":
                                                    if (!e.flags.exactDimensions)
                                                        break;
                                                    e.text = Math.floor(e.flags.exactDimensions.width) + "x" + Math.floor(e.flags.exactDimensions.height)
                                            }
                                            var r = e.flags.lineWrap || b.setup.lineWrapRatio
                                                , i = e.width * r
                                                , a = i
                                                , s = new o({
                                                    width: e.width,
                                                    height: e.height
                                                })
                                                , l = s.Shape
                                                , u = new l.Rect("holderBg", {
                                                    fill: e.theme.bg
                                                });
                                            if (u.resize(e.width, e.height),
                                                s.root.add(u),
                                                e.flags.outline) {
                                                var d = new c(u.properties.fill);
                                                d = d.lighten(d.lighterThan("7f7f7f") ? -.1 : .1),
                                                    u.properties.outline = {
                                                        fill: d.toHex(!0),
                                                        width: 2
                                                    }
                                            }
                                            var f = e.theme.fg;
                                            if (e.flags.autoFg) {
                                                var p = new c(u.properties.fill)
                                                    , h = new c("fff")
                                                    , g = new c("000", {
                                                        alpha: .285714
                                                    });
                                                f = p.blendAlpha(p.lighterThan("7f7f7f") ? g : h).toHex(!0)
                                            }
                                            var m = new l.Group("holderTextGroup", {
                                                text: e.text,
                                                align: e.align,
                                                font: e.font,
                                                fill: f
                                            });
                                            m.moveTo(null, null, 1),
                                                s.root.add(m);
                                            var y = m.textPositionData = j(s);
                                            if (!y)
                                                throw "Holder: staging fallback not supported yet.";
                                            m.properties.leading = y.boundingBox.height;
                                            var v = null
                                                , w = null;
                                            function x(e, t, n, r) {
                                                t.width = n,
                                                    t.height = r,
                                                    e.width = Math.max(e.width, t.width),
                                                    e.height += t.height
                                            }
                                            if (y.lineCount > 1) {
                                                var k, S = 0, A = 0, O = 0;
                                                w = new l.Group("line" + O),
                                                    "left" !== e.align && "right" !== e.align || (a = e.width * (1 - 2 * (1 - r)));
                                                for (var T = 0; T < y.words.length; T++) {
                                                    var _ = y.words[T];
                                                    v = new l.Text(_.text);
                                                    var N = "\\n" == _.text;
                                                    !e.noWrap && (S + _.width >= a || !0 === N) && (x(m, w, S, m.properties.leading),
                                                        m.add(w),
                                                        S = 0,
                                                        A += m.properties.leading,
                                                        O += 1,
                                                        (w = new l.Group("line" + O)).y = A),
                                                        !0 !== N && (v.moveTo(S, 0),
                                                            S += y.spaceWidth + _.width,
                                                            w.add(v))
                                                }
                                                if (x(m, w, S, m.properties.leading),
                                                    m.add(w),
                                                    "left" === e.align)
                                                    m.moveTo(e.width - i, null, null);
                                                else if ("right" === e.align) {
                                                    for (k in m.children)
                                                        (w = m.children[k]).moveTo(e.width - w.width, null, null);
                                                    m.moveTo(0 - (e.width - i), null, null)
                                                } else {
                                                    for (k in m.children)
                                                        (w = m.children[k]).moveTo((m.width - w.width) / 2, null, null);
                                                    m.moveTo((e.width - m.width) / 2, null, null)
                                                }
                                                m.moveTo(null, (e.height - m.height) / 2, null),
                                                    (e.height - m.height) / 2 < 0 && m.moveTo(null, 0, null)
                                            } else
                                                v = new l.Text(e.text),
                                                    (w = new l.Group("line0")).add(v),
                                                    m.add(w),
                                                    "left" === e.align ? m.moveTo(e.width - i, null, null) : "right" === e.align ? m.moveTo(0 - (e.width - i), null, null) : m.moveTo((e.width - y.boundingBox.width) / 2, null, null),
                                                    m.moveTo(null, (e.height - y.boundingBox.height) / 2, null);
                                            return s
                                        }(u);
                                    function h() {
                                        var t = null;
                                        switch (s.renderer) {
                                            case "canvas":
                                                t = f(p, e);
                                                break;
                                            case "svg":
                                                t = d(p, e);
                                                break;
                                            default:
                                                throw "Holder: invalid renderer: " + s.renderer
                                        }
                                        return t
                                    }
                                    if (null == (n = h()))
                                        throw "Holder: couldn't render placeholder";
                                    "background" == r ? (i.style.backgroundImage = "url(" + n + ")",
                                        s.noBackgroundSize || (i.style.backgroundSize = u.width + "px " + u.height + "px")) : ("img" === i.nodeName.toLowerCase() ? l.setAttr(i, {
                                            src: n
                                        }) : "object" === i.nodeName.toLowerCase() && l.setAttr(i, {
                                            data: n,
                                            type: "image/svg+xml"
                                        }),
                                            s.reRender && t.setTimeout((function () {
                                                var e = h();
                                                if (null == e)
                                                    throw "Holder: couldn't render placeholder";
                                                "img" === i.nodeName.toLowerCase() ? l.setAttr(i, {
                                                    src: e
                                                }) : "object" === i.nodeName.toLowerCase() && l.setAttr(i, {
                                                    data: e,
                                                    type: "image/svg+xml"
                                                })
                                            }
                                            ), 150)),
                                        l.setAttr(i, {
                                            "data-holder-rendered": !0
                                        })
                                }
                                function E(e, t, n, r) {
                                    var i = parseInt(e, 10)
                                        , o = parseInt(t, 10)
                                        , a = Math.max(i, o)
                                        , s = Math.min(i, o)
                                        , l = .8 * Math.min(s, a * r);
                                    return Math.round(Math.max(n, l))
                                }
                                function k(e) {
                                    for (var t, n = 0, r = (t = null == e || null == e.nodeType ? b.vars.resizableImages : [e]).length; n < r; n++) {
                                        var i = t[n];
                                        if (i.holderData) {
                                            var o = i.holderData.flags
                                                , a = h(i);
                                            if (a) {
                                                if (!i.holderData.resizeUpdate)
                                                    continue;
                                                if (o.fluid && o.auto) {
                                                    var s = i.holderData.fluidConfig;
                                                    switch (s.mode) {
                                                        case "width":
                                                            a.height = a.width / s.ratio;
                                                            break;
                                                        case "height":
                                                            a.width = a.height * s.ratio
                                                    }
                                                }
                                                var l = {
                                                    mode: "image",
                                                    holderSettings: {
                                                        dimensions: a,
                                                        theme: o.theme,
                                                        flags: o
                                                    },
                                                    el: i,
                                                    engineSettings: i.holderData.engineSettings
                                                };
                                                "exact" == o.textmode && (o.exactDimensions = a,
                                                    l.holderSettings.dimensions = o.dimensions),
                                                    x(l)
                                            } else
                                                A(i)
                                        }
                                    }
                                }
                                function S() {
                                    var e, n = [];
                                    Object.keys(b.vars.invisibleImages).forEach((function (t) {
                                        e = b.vars.invisibleImages[t],
                                            h(e) && "img" == e.nodeName.toLowerCase() && (n.push(e),
                                                delete b.vars.invisibleImages[t])
                                    }
                                    )),
                                        n.length && m.run({
                                            images: n
                                        }),
                                        setTimeout((function () {
                                            t.requestAnimationFrame(S)
                                        }
                                        ), 10)
                                }
                                function A(e) {
                                    e.holderData.invisibleId || (b.vars.invisibleId += 1,
                                        b.vars.invisibleImages["i" + b.vars.invisibleId] = e,
                                        e.holderData.invisibleId = b.vars.invisibleId)
                                }
                                var O, T, _, N, j = (O = null,
                                    T = null,
                                    _ = null,
                                    function (e) {
                                        var t, n = e.root;
                                        if (b.setup.supportsSVG) {
                                            var r = !1;
                                            null != O && O.parentNode === document.body || (r = !0),
                                                (O = s.initSVG(O, n.properties.width, n.properties.height)).style.display = "block",
                                                r && (T = l.newEl("text", g),
                                                    t = null,
                                                    _ = document.createTextNode(t),
                                                    l.setAttr(T, {
                                                        x: 0
                                                    }),
                                                    T.appendChild(_),
                                                    O.appendChild(T),
                                                    document.body.appendChild(O),
                                                    O.style.visibility = "hidden",
                                                    O.style.position = "absolute",
                                                    O.style.top = "-100%",
                                                    O.style.left = "-100%");
                                            var i = n.children.holderTextGroup.properties;
                                            l.setAttr(T, {
                                                y: i.font.size,
                                                style: a.cssProps({
                                                    "font-weight": i.font.weight,
                                                    "font-size": i.font.size + i.font.units,
                                                    "font-family": i.font.family
                                                })
                                            });
                                            var o = l.newEl("textarea");
                                            o.innerHTML = i.text,
                                                _.nodeValue = o.value;
                                            var c = T.getBBox()
                                                , u = Math.ceil(c.width / n.properties.width)
                                                , d = i.text.split(" ")
                                                , f = i.text.match(/\\n/g);
                                            u += null == f ? 0 : f.length,
                                                _.nodeValue = i.text.replace(/[ ]+/g, "");
                                            var p = T.getComputedTextLength()
                                                , h = c.width - p
                                                , m = Math.round(h / Math.max(1, d.length - 1))
                                                , y = [];
                                            if (u > 1) {
                                                _.nodeValue = "";
                                                for (var v = 0; v < d.length; v++)
                                                    if (0 !== d[v].length) {
                                                        _.nodeValue = a.decodeHtmlEntity(d[v]);
                                                        var w = T.getBBox();
                                                        y.push({
                                                            text: d[v],
                                                            width: w.width
                                                        })
                                                    }
                                            }
                                            return O.style.display = "none",
                                            {
                                                spaceWidth: m,
                                                lineCount: u,
                                                boundingBox: c,
                                                words: y
                                            }
                                        }
                                        return !1
                                    }
                                );
                                function M() {
                                    !function (e) {
                                        b.vars.debounceTimer || e.call(this),
                                            b.vars.debounceTimer && t.clearTimeout(b.vars.debounceTimer),
                                            b.vars.debounceTimer = t.setTimeout((function () {
                                                b.vars.debounceTimer = null,
                                                    e.call(this)
                                            }
                                            ), b.setup.debounce)
                                    }((function () {
                                        k(null)
                                    }
                                    ))
                                }
                                for (var C in b.flags)
                                    Object.prototype.hasOwnProperty.call(b.flags, C) && (b.flags[C].match = function (e) {
                                        return e.match(this.regex)
                                    }
                                    );
                                b.setup = {
                                    renderer: "html",
                                    debounce: 100,
                                    ratio: 1,
                                    supportsCanvas: !1,
                                    supportsSVG: !1,
                                    lineWrapRatio: .9,
                                    dataAttr: "data-src",
                                    renderers: ["html", "canvas", "svg"]
                                },
                                    b.vars = {
                                        preempted: !1,
                                        resizableImages: [],
                                        invisibleImages: {},
                                        invisibleId: 0,
                                        visibilityCheckStarted: !1,
                                        debounceTimer: null,
                                        cache: {}
                                    },
                                    (N = l.newEl("canvas")).getContext && -1 != N.toDataURL("image/png").indexOf("data:image/png") && (b.setup.renderer = "canvas",
                                        b.setup.supportsCanvas = !0),
                                    document.createElementNS && document.createElementNS(g, "svg").createSVGRect && (b.setup.renderer = "svg",
                                        b.setup.supportsSVG = !0),
                                    b.vars.visibilityCheckStarted || (t.requestAnimationFrame(S),
                                        b.vars.visibilityCheckStarted = !0),
                                    r && r((function () {
                                        b.vars.preempted || m.run(),
                                            t.addEventListener ? (t.addEventListener("resize", M, !1),
                                                t.addEventListener("orientationchange", M, !1)) : t.attachEvent("onresize", M),
                                            "object" == typeof t.Turbolinks && t.document.addEventListener("page:change", (function () {
                                                m.run()
                                            }
                                            ))
                                    }
                                    )),
                                    e.exports = m
                            }
                            ).call(t, function () {
                                return this
                            }())
                        }
                        , function (e, t) {
                            e.exports = "undefined" != typeof window && function (e) {
                                null == document.readyState && document.addEventListener && (document.addEventListener("DOMContentLoaded", (function e() {
                                    document.removeEventListener("DOMContentLoaded", e, !1),
                                        document.readyState = "complete"
                                }
                                ), !1),
                                    document.readyState = "loading");
                                var t = e.document
                                    , n = t.documentElement
                                    , r = "load"
                                    , i = !1
                                    , o = "onload"
                                    , a = "complete"
                                    , s = "addEventListener"
                                    , l = "DOMContentLoaded"
                                    , c = "onreadystatechange"
                                    , u = s in t
                                    , d = i
                                    , f = i
                                    , p = [];
                                function h(e) {
                                    if (!f) {
                                        if (!t.body)
                                            return b(h);
                                        for (f = !0; e = p.shift();)
                                            b(e)
                                    }
                                }
                                function g(e) {
                                    (u || e.type === r || t.readyState === a) && (m(),
                                        h())
                                }
                                function m() {
                                    u ? (t.removeEventListener(l, g, i),
                                        e.removeEventListener(r, g, i)) : (t.detachEvent(c, g),
                                            e.detachEvent(o, g))
                                }
                                function b(e, t) {
                                    setTimeout(e, +t >= 0 ? t : 1)
                                }
                                if (t.readyState === a)
                                    b(h);
                                else if (u)
                                    t.addEventListener(l, g, i),
                                        e.addEventListener(r, g, i);
                                else {
                                    t.attachEvent(c, g),
                                        e.attachEvent(o, g);
                                    try {
                                        d = null == e.frameElement && n
                                    } catch (e) { }
                                    d && d.doScroll && function e() {
                                        if (!f) {
                                            try {
                                                d.doScroll("left")
                                            } catch (t) {
                                                return b(e, 50)
                                            }
                                            m(),
                                                h()
                                        }
                                    }()
                                }
                                function y(e) {
                                    f ? b(e) : p.push(e)
                                }
                                return y.version = "1.4.0",
                                    y.isReady = function () {
                                        return f
                                    }
                                    ,
                                    y
                            }(window)
                        }
                        , function (e, t, n) {
                            var r = encodeURIComponent
                                , i = decodeURIComponent
                                , o = n(4)
                                , a = n(5)
                                , s = /(\w+)\[(\d+)\]/
                                , l = /\w+\.\w+/;
                            t.parse = function (e) {
                                if ("string" != typeof e)
                                    return {};
                                if ("" === (e = o(e)))
                                    return {};
                                "?" === e.charAt(0) && (e = e.slice(1));
                                for (var t = {}, n = e.split("&"), r = 0; r < n.length; r++) {
                                    var a, c, u, d = n[r].split("="), f = i(d[0]);
                                    if (a = s.exec(f))
                                        t[a[1]] = t[a[1]] || [],
                                            t[a[1]][a[2]] = i(d[1]);
                                    else if (a = l.test(f)) {
                                        for (a = f.split("."),
                                            c = t; a.length;)
                                            if ((u = a.shift()).length) {
                                                if (c[u]) {
                                                    if (c[u] && "object" != typeof c[u])
                                                        break
                                                } else
                                                    c[u] = {};
                                                a.length || (c[u] = i(d[1])),
                                                    c = c[u]
                                            }
                                    } else
                                        t[d[0]] = null == d[1] ? "" : i(d[1])
                                }
                                return t
                            }
                                ,
                                t.stringify = function (e) {
                                    if (!e)
                                        return "";
                                    var t = [];
                                    for (var n in e) {
                                        var i = e[n];
                                        if ("array" != a(i))
                                            t.push(r(n) + "=" + r(e[n]));
                                        else
                                            for (var o = 0; o < i.length; ++o)
                                                t.push(r(n + "[" + o + "]") + "=" + r(i[o]))
                                    }
                                    return t.join("&")
                                }
                        }
                        , function (e, t) {
                            (t = e.exports = function (e) {
                                return e.replace(/^\s*|\s*$/g, "")
                            }
                            ).left = function (e) {
                                return e.replace(/^\s*/, "")
                            }
                                ,
                                t.right = function (e) {
                                    return e.replace(/\s*$/, "")
                                }
                        }
                        , function (e, t) {
                            var n = Object.prototype.toString;
                            e.exports = function (e) {
                                switch (n.call(e)) {
                                    case "[object Date]":
                                        return "date";
                                    case "[object RegExp]":
                                        return "regexp";
                                    case "[object Arguments]":
                                        return "arguments";
                                    case "[object Array]":
                                        return "array";
                                    case "[object Error]":
                                        return "error"
                                }
                                return null === e ? "null" : void 0 === e ? "undefined" : e != e ? "nan" : e && 1 === e.nodeType ? "element" : typeof (e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e))
                            }
                        }
                        , function (e, t) {
                            e.exports = function (e) {
                                var t = 1
                                    , n = function (e) {
                                        t++,
                                            this.parent = null,
                                            this.children = {},
                                            this.id = t,
                                            this.name = "n" + t,
                                            void 0 !== e && (this.name = e),
                                            this.x = this.y = this.z = 0,
                                            this.width = this.height = 0
                                    };
                                n.prototype.resize = function (e, t) {
                                    null != e && (this.width = e),
                                        null != t && (this.height = t)
                                }
                                    ,
                                    n.prototype.moveTo = function (e, t, n) {
                                        this.x = null != e ? e : this.x,
                                            this.y = null != t ? t : this.y,
                                            this.z = null != n ? n : this.z
                                    }
                                    ,
                                    n.prototype.add = function (e) {
                                        var t = e.name;
                                        if (void 0 !== this.children[t])
                                            throw "SceneGraph: child already exists: " + t;
                                        this.children[t] = e,
                                            e.parent = this
                                    }
                                    ;
                                var r = function () {
                                    n.call(this, "root"),
                                        this.properties = e
                                };
                                r.prototype = new n;
                                var i = function (e, t) {
                                    if (n.call(this, e),
                                        this.properties = {
                                            fill: "#000000"
                                        },
                                        void 0 !== t)
                                        !function (e, t) {
                                            for (var n in t)
                                                e[n] = t[n]
                                        }(this.properties, t);
                                    else if (void 0 !== e && "string" != typeof e)
                                        throw "SceneGraph: invalid node name"
                                };
                                i.prototype = new n;
                                var o = function () {
                                    i.apply(this, arguments),
                                        this.type = "group"
                                };
                                o.prototype = new i;
                                var a = function () {
                                    i.apply(this, arguments),
                                        this.type = "rect"
                                };
                                a.prototype = new i;
                                var s = function (e) {
                                    i.call(this),
                                        this.type = "text",
                                        this.properties.text = e
                                };
                                s.prototype = new i;
                                var l = new r;
                                return this.Shape = {
                                    Rect: a,
                                    Text: s,
                                    Group: o
                                },
                                    this.root = l,
                                    this
                            }
                        }
                        , function (e, t) {
                            (function (e) {
                                t.extend = function (e, t) {
                                    var n = {};
                                    for (var r in e)
                                        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                                    if (null != t)
                                        for (var i in t)
                                            Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
                                    return n
                                }
                                    ,
                                    t.cssProps = function (e) {
                                        var t = [];
                                        for (var n in e)
                                            Object.prototype.hasOwnProperty.call(e, n) && t.push(n + ":" + e[n]);
                                        return t.join(";")
                                    }
                                    ,
                                    t.encodeHtmlEntity = function (e) {
                                        for (var t = [], n = 0, r = e.length - 1; r >= 0; r--)
                                            (n = e.charCodeAt(r)) > 128 ? t.unshift(["&#", n, ";"].join("")) : t.unshift(e[r]);
                                        return t.join("")
                                    }
                                    ,
                                    t.imageExists = function (e, t) {
                                        var n = new Image;
                                        n.onerror = function () {
                                            t.call(this, !1)
                                        }
                                            ,
                                            n.onload = function () {
                                                t.call(this, !0)
                                            }
                                            ,
                                            n.src = e
                                    }
                                    ,
                                    t.decodeHtmlEntity = function (e) {
                                        return e.replace(/&#(\d+);/g, (function (e, t) {
                                            return String.fromCharCode(t)
                                        }
                                        ))
                                    }
                                    ,
                                    t.dimensionCheck = function (e) {
                                        var t = {
                                            height: e.clientHeight,
                                            width: e.clientWidth
                                        };
                                        return !(!t.height || !t.width) && t
                                    }
                                    ,
                                    t.truthy = function (e) {
                                        return "string" == typeof e ? "true" === e || "yes" === e || "1" === e || "on" === e || "✓" === e : !!e
                                    }
                                    ,
                                    t.parseColor = function (e) {
                                        var t, n = e.match(/(^(?:#?)[0-9a-f]{6}$)|(^(?:#?)[0-9a-f]{3}$)/i);
                                        return null !== n ? "#" !== (t = n[1] || n[2])[0] ? "#" + t : t : null !== (n = e.match(/^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/)) ? t = "rgb(" + n.slice(1).join(",") + ")" : null !== (n = e.match(/^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0*\.\d{1,}|1)\)$/)) ? t = "rgba(" + n.slice(1).map((function (e, t) {
                                            return 3 === t ? "0." + e.split(".")[1] : e
                                        }
                                        )).join(",") + ")" : null
                                    }
                                    ,
                                    t.canvasRatio = function () {
                                        var t = 1
                                            , n = 1;
                                        if (e.document) {
                                            var r = e.document.createElement("canvas");
                                            if (r.getContext) {
                                                var i = r.getContext("2d");
                                                t = e.devicePixelRatio || 1,
                                                    n = i.webkitBackingStorePixelRatio || i.mozBackingStorePixelRatio || i.msBackingStorePixelRatio || i.oBackingStorePixelRatio || i.backingStorePixelRatio || 1
                                            }
                                        }
                                        return t / n
                                    }
                            }
                            ).call(t, function () {
                                return this
                            }())
                        }
                        , function (e, t, n) {
                            (function (e) {
                                var r = n(9)
                                    , i = "http://www.w3.org/2000/svg";
                                t.initSVG = function (e, t, n) {
                                    var o, a, s = !1;
                                    e && e.querySelector ? null === (a = e.querySelector("style")) && (s = !0) : (e = r.newEl("svg", i),
                                        s = !0),
                                        s && (o = r.newEl("defs", i),
                                            a = r.newEl("style", i),
                                            r.setAttr(a, {
                                                type: "text/css"
                                            }),
                                            o.appendChild(a),
                                            e.appendChild(o)),
                                        e.webkitMatchesSelector && e.setAttribute("xmlns", i);
                                    for (var l = 0; l < e.childNodes.length; l++)
                                        8 === e.childNodes[l].nodeType && e.removeChild(e.childNodes[l]);
                                    for (; a.childNodes.length;)
                                        a.removeChild(a.childNodes[0]);
                                    return r.setAttr(e, {
                                        width: t,
                                        height: n,
                                        viewBox: "0 0 " + t + " " + n,
                                        preserveAspectRatio: "none"
                                    }),
                                        e
                                }
                                    ,
                                    t.svgStringToDataURI = function (t, n) {
                                        return n ? "data:image/svg+xml;charset=UTF-8;base64," + btoa(e.unescape(encodeURIComponent(t))) : "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(t)
                                    }
                                    ,
                                    t.serializeSVG = function (t, n) {
                                        if (e.XMLSerializer) {
                                            var i = new XMLSerializer
                                                , o = ""
                                                , a = n.stylesheets;
                                            if (n.svgXMLStylesheet) {
                                                for (var s = r.createXML(), l = a.length - 1; l >= 0; l--) {
                                                    var c = s.createProcessingInstruction("xml-stylesheet", 'href="' + a[l] + '" rel="stylesheet"');
                                                    s.insertBefore(c, s.firstChild)
                                                }
                                                s.removeChild(s.documentElement),
                                                    o = i.serializeToString(s)
                                            }
                                            var u = i.serializeToString(t);
                                            return o + (u = u.replace(/&amp;(#[0-9]{2,};)/g, "&$1"))
                                        }
                                    }
                            }
                            ).call(t, function () {
                                return this
                            }())
                        }
                        , function (e, t) {
                            (function (e) {
                                t.newEl = function (t, n) {
                                    if (e.document)
                                        return null == n ? e.document.createElement(t) : e.document.createElementNS(n, t)
                                }
                                    ,
                                    t.setAttr = function (e, t) {
                                        for (var n in t)
                                            e.setAttribute(n, t[n])
                                    }
                                    ,
                                    t.createXML = function () {
                                        if (e.DOMParser)
                                            return (new DOMParser).parseFromString("<xml />", "application/xml")
                                    }
                                    ,
                                    t.getNodeArray = function (t) {
                                        var n = null;
                                        return "string" == typeof t ? n = document.querySelectorAll(t) : e.NodeList && t instanceof e.NodeList ? n = t : e.Node && t instanceof e.Node ? n = [t] : e.HTMLCollection && t instanceof e.HTMLCollection || t instanceof Array ? n = t : null === t && (n = []),
                                            n = Array.prototype.slice.call(n)
                                    }
                            }
                            ).call(t, function () {
                                return this
                            }())
                        }
                        , function (e, t) {
                            var n = function (e, t) {
                                "string" == typeof e && (this.original = e,
                                    "#" === e.charAt(0) && (e = e.slice(1)),
                                    /[^a-f0-9]+/i.test(e) || (3 === e.length && (e = e.replace(/./g, "$&$&")),
                                        6 === e.length && (this.alpha = 1,
                                            t && t.alpha && (this.alpha = t.alpha),
                                            this.set(parseInt(e, 16)))))
                            };
                            n.rgb2hex = function (e, t, n) {
                                return [e, t, n].map((function (e) {
                                    var t = (0 | e).toString(16);
                                    return e < 16 && (t = "0" + t),
                                        t
                                }
                                )).join("")
                            }
                                ,
                                n.hsl2rgb = function (e, t, n) {
                                    var r = e / 60
                                        , i = (1 - Math.abs(2 * n - 1)) * t
                                        , o = i * (1 - Math.abs(parseInt(r) % 2 - 1))
                                        , a = n - i / 2
                                        , s = 0
                                        , l = 0
                                        , c = 0;
                                    return r >= 0 && r < 1 ? (s = i,
                                        l = o) : r >= 1 && r < 2 ? (s = o,
                                            l = i) : r >= 2 && r < 3 ? (l = i,
                                                c = o) : r >= 3 && r < 4 ? (l = o,
                                                    c = i) : r >= 4 && r < 5 ? (s = o,
                                                        c = i) : r >= 5 && r < 6 && (s = i,
                                                            c = o),
                                        s += a,
                                        l += a,
                                        c += a,
                                        [s = parseInt(255 * s), l = parseInt(255 * l), c = parseInt(255 * c)]
                                }
                                ,
                                n.prototype.set = function (e) {
                                    this.raw = e;
                                    var t = (16711680 & this.raw) >> 16
                                        , n = (65280 & this.raw) >> 8
                                        , r = 255 & this.raw
                                        , i = .2126 * t + .7152 * n + .0722 * r
                                        , o = -.09991 * t - .33609 * n + .436 * r
                                        , a = .615 * t - .55861 * n - .05639 * r;
                                    return this.rgb = {
                                        r: t,
                                        g: n,
                                        b: r
                                    },
                                        this.yuv = {
                                            y: i,
                                            u: o,
                                            v: a
                                        },
                                        this
                                }
                                ,
                                n.prototype.lighten = function (e) {
                                    var t = Math.min(1, Math.max(0, Math.abs(e))) * (e < 0 ? -1 : 1) * 255 | 0
                                        , r = Math.min(255, Math.max(0, this.rgb.r + t))
                                        , i = Math.min(255, Math.max(0, this.rgb.g + t))
                                        , o = Math.min(255, Math.max(0, this.rgb.b + t))
                                        , a = n.rgb2hex(r, i, o);
                                    return new n(a)
                                }
                                ,
                                n.prototype.toHex = function (e) {
                                    return (e ? "#" : "") + this.raw.toString(16)
                                }
                                ,
                                n.prototype.lighterThan = function (e) {
                                    return e instanceof n || (e = new n(e)),
                                        this.yuv.y > e.yuv.y
                                }
                                ,
                                n.prototype.blendAlpha = function (e) {
                                    e instanceof n || (e = new n(e));
                                    var t = e
                                        , r = this
                                        , i = t.alpha * t.rgb.r + (1 - t.alpha) * r.rgb.r
                                        , o = t.alpha * t.rgb.g + (1 - t.alpha) * r.rgb.g
                                        , a = t.alpha * t.rgb.b + (1 - t.alpha) * r.rgb.b;
                                    return new n(n.rgb2hex(i, o, a))
                                }
                                ,
                                e.exports = n
                        }
                        , function (e, t) {
                            e.exports = {
                                version: "2.9.9",
                                svg_ns: "http://www.w3.org/2000/svg"
                            }
                        }
                        , function (e, t, n) {
                            var r = n(13).default
                                , i = n(8)
                                , o = n(11)
                                , a = n(7)
                                , s = o.svg_ns
                                , l = function (e) {
                                    var t = e.tag
                                        , n = e.content || "";
                                    return delete e.tag,
                                        delete e.content,
                                        [t, n, e]
                                };
                            e.exports = function (e, t) {
                                var n, o = t.engineSettings.stylesheets.map((function (e) {
                                    return '<?xml-stylesheet rel="stylesheet" href="' + e + '"?>'
                                }
                                )).join("\n"), c = "holder_" + Number(new Date).toString(16), u = e.root, d = u.children.holderTextGroup, f = "#" + c + " text { " + (n = d.properties,
                                    a.cssProps({
                                        fill: n.fill,
                                        "font-weight": n.font.weight,
                                        "font-family": n.font.family + ", monospace",
                                        "font-size": n.font.size + n.font.units
                                    }) + " } ");
                                d.y += .8 * d.textPositionData.boundingBox.height;
                                var p = [];
                                Object.keys(d.children).forEach((function (e) {
                                    var t = d.children[e];
                                    Object.keys(t.children).forEach((function (e) {
                                        var n = t.children[e]
                                            , r = d.x + t.x + n.x
                                            , i = d.y + t.y + n.y
                                            , o = l({
                                                tag: "text",
                                                content: n.properties.text,
                                                x: r,
                                                y: i
                                            });
                                        p.push(o)
                                    }
                                    ))
                                }
                                ));
                                var h, g, m, b, y = l({
                                    tag: "g",
                                    content: p
                                }), v = null;
                                if (u.children.holderBg.properties.outline) {
                                    var w = u.children.holderBg.properties.outline;
                                    v = l({
                                        tag: "path",
                                        d: (h = u.children.holderBg.width,
                                            g = u.children.holderBg.height,
                                            m = w.width,
                                            b = m / 2,
                                            ["M", b, b, "H", h - b, "V", g - b, "H", b, "V", 0, "M", 0, b, "L", h, g - b, "M", 0, g - b, "L", h, b].join(" ")),
                                        "stroke-width": w.width,
                                        stroke: w.fill,
                                        fill: "none"
                                    })
                                }
                                var x, E = (x = u.children.holderBg,
                                    l({
                                        tag: "rect",
                                        width: x.width,
                                        height: x.height,
                                        fill: x.properties.fill
                                    })), k = [];
                                k.push(E),
                                    w && k.push(v),
                                    k.push(y);
                                var S = l({
                                    tag: "g",
                                    id: c,
                                    content: k
                                })
                                    , A = l({
                                        tag: "style",
                                        content: f,
                                        type: "text/css"
                                    })
                                    , O = l({
                                        tag: "defs",
                                        content: A
                                    })
                                    , T = l({
                                        tag: "svg",
                                        content: [O, S],
                                        width: u.properties.width,
                                        height: u.properties.height,
                                        xmlns: s,
                                        viewBox: [0, 0, u.properties.width, u.properties.height].join(" "),
                                        preserveAspectRatio: "none"
                                    })
                                    , _ = String(r(T));
                                return /&amp;(x)?#[0-9A-Fa-f]/.test(_[0]) && (_ = _.replace(/&amp;#/gm, "&#")),
                                    _ = o + _,
                                    i.svgStringToDataURI(_, "background" === t.mode)
                            }
                        }
                        , function (e, t, n) {
                            e.exports = n(14)
                        }
                        , function (e, t, n) {
                            "use strict";
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            });
                            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                                return typeof e
                            }
                                : function (e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                }
                                ;
                            t.default = u;
                            var i = c(n(15))
                                , o = function (e) {
                                    if (e && e.__esModule)
                                        return e;
                                    var t = {};
                                    if (null != e)
                                        for (var n in e)
                                            Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                    return t.default = e,
                                        t
                                }(n(16))
                                , a = c(n(17))
                                , s = c(n(18))
                                , l = c(n(21));
                            function c(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                }
                            }
                            function u(e) {
                                var t = Array.isArray(e)
                                    , n = void 0 === e ? "undefined" : r(e);
                                if (!t && "object" !== n)
                                    throw new Error("Argument must be either an array or an object and not " + JSON.stringify(e));
                                if (t && 0 === e.length)
                                    return {};
                                var c = {}
                                    , u = [];
                                return Array.isArray(e) ? u = e.slice(0) : (u = e.elementArray.slice(0),
                                    delete (c = Object.assign(c, e)).elementArray),
                                    c = Object.assign({}, a.default, c, {
                                        returnObject: {
                                            ids: {},
                                            references: {}
                                        }
                                    }),
                                    function e(t) {
                                        if (Array.isArray(t) && 0 === t.length)
                                            return {};
                                        var n, a, u, d = 1, f = void 0, p = t.slice(0);
                                        if ("string" == typeof p[0])
                                            p[0] = (n = p[0],
                                                a = (0,
                                                    i.default)(n),
                                                u = {
                                                    tag: a.tag,
                                                    attr: {},
                                                    children: []
                                                },
                                                a.id && (u.attr.id = a.id,
                                                    (0,
                                                        l.default)(!c.returnObject.ids.hasOwnProperty(a.id), 'Ids must be unique and "' + a.id + '" is already assigned'),
                                                    c.returnObject.ids[a.id] = u),
                                                a.class && (u.attr.class = a.class),
                                                a.reference && ((0,
                                                    l.default)(!c.returnObject.ids.hasOwnProperty(a.reference), 'References must be unique and "' + a.id + '" is already assigned'),
                                                    c.returnObject.references[a.reference] = u),
                                                c.escapeHTML = null != a.escapeHTML ? a.escapeHTML : c.escapeHTML,
                                                u);
                                        else {
                                            if (!Array.isArray(p[0]))
                                                throw new Error("First element of array must be a string, or an array and not " + JSON.stringify(p[0]));
                                            d = 0
                                        }
                                        for (; d < p.length; d++) {
                                            if (!1 === p[d] || null === p[d]) {
                                                p[0] = !1;
                                                break
                                            }
                                            if (void 0 !== p[d] && !0 !== p[d])
                                                if ("string" == typeof p[d])
                                                    c.escapeHTML && (p[d] = o.HTML(p[d])),
                                                        p[0].children.push(p[d]);
                                                else if ("number" == typeof p[d])
                                                    p[0].children.push(p[d]);
                                                else if (Array.isArray(p[d])) {
                                                    if (Array.isArray(p[d][0])) {
                                                        if (p[d].reverse().forEach((function (e) {
                                                            p.splice(d + 1, 0, e)
                                                        }
                                                        )),
                                                            0 !== d)
                                                            continue;
                                                        d++
                                                    }
                                                    p[d] = e(p[d]),
                                                        p[d][0] && p[0].children.push(p[d][0])
                                                } else if ("function" == typeof p[d])
                                                    f = p[d];
                                                else {
                                                    if ("object" !== r(p[d]))
                                                        throw new TypeError('"' + p[d] + '" is not allowed as a value');
                                                    for (var h in p[d])
                                                        if (p[d].hasOwnProperty(h)) {
                                                            var g = p[d][h];
                                                            p[d].hasOwnProperty(h) && null !== g && !1 !== g && (p[0].attr[h] = (0,
                                                                s.default)(h, g))
                                                        }
                                                }
                                        }
                                        if (!1 !== p[0]) {
                                            var m = "<" + p[0].tag;
                                            for (var b in p[0].attr)
                                                if (p[0].attr.hasOwnProperty(b)) {
                                                    var y = o.attribute(p[0].attr[b])
                                                        , v = y;
                                                    (c.quoteAttributes || /[ "'=<>]/.test(y)) && (v = c.quotationMark + y + c.quotationMark),
                                                        m += " " + b + "=" + v
                                                }
                                            m += ">",
                                                -1 === ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"].indexOf(p[0].tag) && (p[0].children.forEach((function (e) {
                                                    return m += e
                                                }
                                                )),
                                                    m += "</" + p[0].tag + ">"),
                                                p[0] = m
                                        }
                                        return c.returnObject[0] = p[0],
                                            c.returnObject.rootElement = p[0],
                                            c.returnObject.toString = function () {
                                                return p[0]
                                            }
                                            ,
                                            f && f(p[0]),
                                            c.returnObject
                                    }(u)
                            }
                            u.setDefaults = function (e) {
                                return Object.assign(a.default, e),
                                    u
                            }
                        }
                        , function (e, t) {
                            "use strict";
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }),
                                t.default = function (e) {
                                    var t = e.match(/^[\w-]+/)
                                        , n = {
                                            tag: t ? t[0] : "div"
                                        }
                                        , r = e.match(/#([\w-]+)/)
                                        , i = e.match(/\.[\w-]+/g)
                                        , o = e.match(/\$([\w-]+)/);
                                    return r && (n.id = r[1]),
                                        i && (n.class = i.join(" ").replace(/\./g, "")),
                                        o && (n.reference = o[1]),
                                        (e.endsWith("&") || e.endsWith("!")) && (n.escapeHTML = !1),
                                        n
                                }
                        }
                        , function (e, t) {
                            "use strict";
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }),
                                t.attribute = function (e) {
                                    return e || 0 === e ? String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;") : ""
                                }
                                ,
                                t.HTML = function (e) {
                                    return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                                }
                        }
                        , function (e, t) {
                            "use strict";
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }),
                                t.default = {
                                    namespace: "xhtml",
                                    autoNamespacing: !0,
                                    escapeHTML: !0,
                                    quotationMark: '"',
                                    quoteAttributes: !0,
                                    convertTransformArray: !0
                                }
                        }
                        , function (e, t, n) {
                            "use strict";
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            });
                            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                                return typeof e
                            }
                                : function (e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                }
                                , i = a(n(19))
                                , o = a(n(20));
                            function a(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                }
                            }
                            t.default = function (e, t) {
                                return void 0 === t ? "" : "style" === e && "object" === (void 0 === t ? "undefined" : r(t)) ? (0,
                                    o.default)(t) : "transform" === e && Array.isArray(t) ? (0,
                                        i.default)(t) : t
                            }
                        }
                        , function (e, t) {
                            "use strict";
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }),
                                t.default = function (e) {
                                    return e.map((function (e) {
                                        var t = [];
                                        return "rotate" === e.type && e.degrees && t.push(e.degrees),
                                            e.x && t.push(e.x),
                                            e.y && t.push(e.y),
                                            e.type + "(" + t + ")"
                                    }
                                    )).join(" ")
                                }
                        }
                        , function (e, t) {
                            "use strict";
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            });
                            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                                return typeof e
                            }
                                : function (e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                }
                                ;
                            function r(e, t) {
                                if (null !== t && !1 !== t && void 0 !== t)
                                    return "string" == typeof t || "object" === (void 0 === t ? "undefined" : n(t)) ? t : String(t)
                            }
                            t.default = function (e) {
                                return JSON.stringify(e, r).slice(2, -2).replace(/","/g, ";").replace(/":"/g, ":").replace(/\\"/g, "'")
                            }
                        }
                        , function (e, t, n) {
                            (function (t) {
                                "use strict";
                                var r = n(22);
                                function i(e, t) {
                                    if (e === t)
                                        return 0;
                                    for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
                                        if (e[i] !== t[i]) {
                                            n = e[i],
                                                r = t[i];
                                            break
                                        }
                                    return n < r ? -1 : r < n ? 1 : 0
                                }
                                function o(e) {
                                    return t.Buffer && "function" == typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer)
                                }
                                var a = n(23)
                                    , s = Object.prototype.hasOwnProperty
                                    , l = Array.prototype.slice
                                    , c = "foo" === function () { }
                                        .name;
                                function u(e) {
                                    return Object.prototype.toString.call(e)
                                }
                                function d(e) {
                                    return !o(e) && "function" == typeof t.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer)))
                                }
                                var f = e.exports = y
                                    , p = /\s*function\s+([^\(\s]*)\s*/;
                                function h(e) {
                                    if (a.isFunction(e)) {
                                        if (c)
                                            return e.name;
                                        var t = e.toString().match(p);
                                        return t && t[1]
                                    }
                                }
                                function g(e, t) {
                                    return "string" == typeof e ? e.length < t ? e : e.slice(0, t) : e
                                }
                                function m(e) {
                                    if (c || !a.isFunction(e))
                                        return a.inspect(e);
                                    var t = h(e);
                                    return "[Function" + (t ? ": " + t : "") + "]"
                                }
                                function b(e, t, n, r, i) {
                                    throw new f.AssertionError({
                                        message: n,
                                        actual: e,
                                        expected: t,
                                        operator: r,
                                        stackStartFunction: i
                                    })
                                }
                                function y(e, t) {
                                    e || b(e, !0, t, "==", f.ok)
                                }
                                function v(e, t, n, r) {
                                    if (e === t)
                                        return !0;
                                    if (o(e) && o(t))
                                        return 0 === i(e, t);
                                    if (a.isDate(e) && a.isDate(t))
                                        return e.getTime() === t.getTime();
                                    if (a.isRegExp(e) && a.isRegExp(t))
                                        return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
                                    if (null !== e && "object" == typeof e || null !== t && "object" == typeof t) {
                                        if (d(e) && d(t) && u(e) === u(t) && !(e instanceof Float32Array || e instanceof Float64Array))
                                            return 0 === i(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
                                        if (o(e) !== o(t))
                                            return !1;
                                        var s = (r = r || {
                                            actual: [],
                                            expected: []
                                        }).actual.indexOf(e);
                                        return -1 !== s && s === r.expected.indexOf(t) || (r.actual.push(e),
                                            r.expected.push(t),
                                            function (e, t, n, r) {
                                                if (null == e || null == t)
                                                    return !1;
                                                if (a.isPrimitive(e) || a.isPrimitive(t))
                                                    return e === t;
                                                if (n && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t))
                                                    return !1;
                                                var i = w(e)
                                                    , o = w(t);
                                                if (i && !o || !i && o)
                                                    return !1;
                                                if (i)
                                                    return v(e = l.call(e), t = l.call(t), n);
                                                var s, c, u = k(e), d = k(t);
                                                if (u.length !== d.length)
                                                    return !1;
                                                for (u.sort(),
                                                    d.sort(),
                                                    c = u.length - 1; c >= 0; c--)
                                                    if (u[c] !== d[c])
                                                        return !1;
                                                for (c = u.length - 1; c >= 0; c--)
                                                    if (!v(e[s = u[c]], t[s], n, r))
                                                        return !1;
                                                return !0
                                            }(e, t, n, r))
                                    }
                                    return n ? e === t : e == t
                                }
                                function w(e) {
                                    return "[object Arguments]" == Object.prototype.toString.call(e)
                                }
                                function x(e, t) {
                                    if (!e || !t)
                                        return !1;
                                    if ("[object RegExp]" == Object.prototype.toString.call(t))
                                        return t.test(e);
                                    try {
                                        if (e instanceof t)
                                            return !0
                                    } catch (e) { }
                                    return !Error.isPrototypeOf(t) && !0 === t.call({}, e)
                                }
                                function E(e, t, n, r) {
                                    var i;
                                    if ("function" != typeof t)
                                        throw new TypeError('"block" argument must be a function');
                                    "string" == typeof n && (r = n,
                                        n = null),
                                        i = function (e) {
                                            var t;
                                            try {
                                                e()
                                            } catch (e) {
                                                t = e
                                            }
                                            return t
                                        }(t),
                                        r = (n && n.name ? " (" + n.name + ")." : ".") + (r ? " " + r : "."),
                                        e && !i && b(i, n, "Missing expected exception" + r);
                                    var o = "string" == typeof r
                                        , s = !e && i && !n;
                                    if ((!e && a.isError(i) && o && x(i, n) || s) && b(i, n, "Got unwanted exception" + r),
                                        e && i && n && !x(i, n) || !e && i)
                                        throw i
                                }
                                f.AssertionError = function (e) {
                                    var t;
                                    this.name = "AssertionError",
                                        this.actual = e.actual,
                                        this.expected = e.expected,
                                        this.operator = e.operator,
                                        e.message ? (this.message = e.message,
                                            this.generatedMessage = !1) : (this.message = g(m((t = this).actual), 128) + " " + t.operator + " " + g(m(t.expected), 128),
                                                this.generatedMessage = !0);
                                    var n = e.stackStartFunction || b;
                                    if (Error.captureStackTrace)
                                        Error.captureStackTrace(this, n);
                                    else {
                                        var r = new Error;
                                        if (r.stack) {
                                            var i = r.stack
                                                , o = h(n)
                                                , a = i.indexOf("\n" + o);
                                            if (a >= 0) {
                                                var s = i.indexOf("\n", a + 1);
                                                i = i.substring(s + 1)
                                            }
                                            this.stack = i
                                        }
                                    }
                                }
                                    ,
                                    a.inherits(f.AssertionError, Error),
                                    f.fail = b,
                                    f.ok = y,
                                    f.equal = function (e, t, n) {
                                        e != t && b(e, t, n, "==", f.equal)
                                    }
                                    ,
                                    f.notEqual = function (e, t, n) {
                                        e == t && b(e, t, n, "!=", f.notEqual)
                                    }
                                    ,
                                    f.deepEqual = function (e, t, n) {
                                        v(e, t, !1) || b(e, t, n, "deepEqual", f.deepEqual)
                                    }
                                    ,
                                    f.deepStrictEqual = function (e, t, n) {
                                        v(e, t, !0) || b(e, t, n, "deepStrictEqual", f.deepStrictEqual)
                                    }
                                    ,
                                    f.notDeepEqual = function (e, t, n) {
                                        v(e, t, !1) && b(e, t, n, "notDeepEqual", f.notDeepEqual)
                                    }
                                    ,
                                    f.notDeepStrictEqual = function e(t, n, r) {
                                        v(t, n, !0) && b(t, n, r, "notDeepStrictEqual", e)
                                    }
                                    ,
                                    f.strictEqual = function (e, t, n) {
                                        e !== t && b(e, t, n, "===", f.strictEqual)
                                    }
                                    ,
                                    f.notStrictEqual = function (e, t, n) {
                                        e === t && b(e, t, n, "!==", f.notStrictEqual)
                                    }
                                    ,
                                    f.throws = function (e, t, n) {
                                        E(!0, e, t, n)
                                    }
                                    ,
                                    f.doesNotThrow = function (e, t, n) {
                                        E(!1, e, t, n)
                                    }
                                    ,
                                    f.ifError = function (e) {
                                        if (e)
                                            throw e
                                    }
                                    ,
                                    f.strict = r((function e(t, n) {
                                        t || b(t, !0, n, "==", e)
                                    }
                                    ), f, {
                                        equal: f.strictEqual,
                                        deepEqual: f.deepStrictEqual,
                                        notEqual: f.notStrictEqual,
                                        notDeepEqual: f.notDeepStrictEqual
                                    }),
                                    f.strict.strict = f.strict;
                                var k = Object.keys || function (e) {
                                    var t = [];
                                    for (var n in e)
                                        s.call(e, n) && t.push(n);
                                    return t
                                }
                            }
                            ).call(t, function () {
                                return this
                            }())
                        }
                        , function (e, t) {
                            "use strict";
                            var n = Object.getOwnPropertySymbols
                                , r = Object.prototype.hasOwnProperty
                                , i = Object.prototype.propertyIsEnumerable;
                            function o(e) {
                                if (null == e)
                                    throw new TypeError("Object.assign cannot be called with null or undefined");
                                return Object(e)
                            }
                            e.exports = function () {
                                try {
                                    if (!Object.assign)
                                        return !1;
                                    var e = new String("abc");
                                    if (e[5] = "de",
                                        "5" === Object.getOwnPropertyNames(e)[0])
                                        return !1;
                                    for (var t = {}, n = 0; n < 10; n++)
                                        t["_" + String.fromCharCode(n)] = n;
                                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function (e) {
                                        return t[e]
                                    }
                                    )).join(""))
                                        return !1;
                                    var r = {};
                                    return "abcdefghijklmnopqrst".split("").forEach((function (e) {
                                        r[e] = e
                                    }
                                    )),
                                        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                                } catch (e) {
                                    return !1
                                }
                            }() ? Object.assign : function (e, t) {
                                for (var a, s, l = o(e), c = 1; c < arguments.length; c++) {
                                    for (var u in a = Object(arguments[c]))
                                        r.call(a, u) && (l[u] = a[u]);
                                    if (n) {
                                        s = n(a);
                                        for (var d = 0; d < s.length; d++)
                                            i.call(a, s[d]) && (l[s[d]] = a[s[d]])
                                    }
                                }
                                return l
                            }
                        }
                        , function (e, t, n) {
                            (function (e, r) {
                                var i = /%[sdj%]/g;
                                t.format = function (e) {
                                    if (!b(e)) {
                                        for (var t = [], n = 0; n < arguments.length; n++)
                                            t.push(s(arguments[n]));
                                        return t.join(" ")
                                    }
                                    n = 1;
                                    for (var r = arguments, o = r.length, a = String(e).replace(i, (function (e) {
                                        if ("%%" === e)
                                            return "%";
                                        if (n >= o)
                                            return e;
                                        switch (e) {
                                            case "%s":
                                                return String(r[n++]);
                                            case "%d":
                                                return Number(r[n++]);
                                            case "%j":
                                                try {
                                                    return JSON.stringify(r[n++])
                                                } catch (e) {
                                                    return "[Circular]"
                                                }
                                            default:
                                                return e
                                        }
                                    }
                                    )), l = r[n]; n < o; l = r[++n])
                                        g(l) || !w(l) ? a += " " + l : a += " " + s(l);
                                    return a
                                }
                                    ,
                                    t.deprecate = function (n, i) {
                                        if (y(e.process))
                                            return function () {
                                                return t.deprecate(n, i).apply(this, arguments)
                                            }
                                                ;
                                        if (!0 === r.noDeprecation)
                                            return n;
                                        var o = !1;
                                        return function () {
                                            if (!o) {
                                                if (r.throwDeprecation)
                                                    throw new Error(i);
                                                r.traceDeprecation ? console.trace(i) : console.error(i),
                                                    o = !0
                                            }
                                            return n.apply(this, arguments)
                                        }
                                    }
                                    ;
                                var o, a = {};
                                function s(e, n) {
                                    var r = {
                                        seen: [],
                                        stylize: c
                                    };
                                    return arguments.length >= 3 && (r.depth = arguments[2]),
                                        arguments.length >= 4 && (r.colors = arguments[3]),
                                        h(n) ? r.showHidden = n : n && t._extend(r, n),
                                        y(r.showHidden) && (r.showHidden = !1),
                                        y(r.depth) && (r.depth = 2),
                                        y(r.colors) && (r.colors = !1),
                                        y(r.customInspect) && (r.customInspect = !0),
                                        r.colors && (r.stylize = l),
                                        u(r, e, r.depth)
                                }
                                function l(e, t) {
                                    var n = s.styles[t];
                                    return n ? "[" + s.colors[n][0] + "m" + e + "[" + s.colors[n][1] + "m" : e
                                }
                                function c(e, t) {
                                    return e
                                }
                                function u(e, n, r) {
                                    if (e.customInspect && n && k(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                                        var i = n.inspect(r, e);
                                        return b(i) || (i = u(e, i, r)),
                                            i
                                    }
                                    var o = function (e, t) {
                                        if (y(t))
                                            return e.stylize("undefined", "undefined");
                                        if (b(t)) {
                                            var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                                            return e.stylize(n, "string")
                                        }
                                        return m(t) ? e.stylize("" + t, "number") : h(t) ? e.stylize("" + t, "boolean") : g(t) ? e.stylize("null", "null") : void 0
                                    }(e, n);
                                    if (o)
                                        return o;
                                    var a = Object.keys(n)
                                        , s = function (e) {
                                            var t = {};
                                            return e.forEach((function (e, n) {
                                                t[e] = !0
                                            }
                                            )),
                                                t
                                        }(a);
                                    if (e.showHidden && (a = Object.getOwnPropertyNames(n)),
                                        E(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
                                        return d(n);
                                    if (0 === a.length) {
                                        if (k(n)) {
                                            var l = n.name ? ": " + n.name : "";
                                            return e.stylize("[Function" + l + "]", "special")
                                        }
                                        if (v(n))
                                            return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                                        if (x(n))
                                            return e.stylize(Date.prototype.toString.call(n), "date");
                                        if (E(n))
                                            return d(n)
                                    }
                                    var c, w = "", S = !1, A = ["{", "}"];
                                    return p(n) && (S = !0,
                                        A = ["[", "]"]),
                                        k(n) && (w = " [Function" + (n.name ? ": " + n.name : "") + "]"),
                                        v(n) && (w = " " + RegExp.prototype.toString.call(n)),
                                        x(n) && (w = " " + Date.prototype.toUTCString.call(n)),
                                        E(n) && (w = " " + d(n)),
                                        0 !== a.length || S && 0 != n.length ? r < 0 ? v(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n),
                                            c = S ? function (e, t, n, r, i) {
                                                for (var o = [], a = 0, s = t.length; a < s; ++a)
                                                    _(t, String(a)) ? o.push(f(e, t, n, r, String(a), !0)) : o.push("");
                                                return i.forEach((function (i) {
                                                    i.match(/^\d+$/) || o.push(f(e, t, n, r, i, !0))
                                                }
                                                )),
                                                    o
                                            }(e, n, r, s, a) : a.map((function (t) {
                                                return f(e, n, r, s, t, S)
                                            }
                                            )),
                                            e.seen.pop(),
                                            function (e, t, n) {
                                                return e.reduce((function (e, t) {
                                                    return t.indexOf("\n"),
                                                        e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                                                }
                                                ), 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1]
                                            }(c, w, A)) : A[0] + w + A[1]
                                }
                                function d(e) {
                                    return "[" + Error.prototype.toString.call(e) + "]"
                                }
                                function f(e, t, n, r, i, o) {
                                    var a, s, l;
                                    if ((l = Object.getOwnPropertyDescriptor(t, i) || {
                                        value: t[i]
                                    }).get ? s = l.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : l.set && (s = e.stylize("[Setter]", "special")),
                                        _(r, i) || (a = "[" + i + "]"),
                                        s || (e.seen.indexOf(l.value) < 0 ? (s = g(n) ? u(e, l.value, null) : u(e, l.value, n - 1)).indexOf("\n") > -1 && (s = o ? s.split("\n").map((function (e) {
                                            return "  " + e
                                        }
                                        )).join("\n").substr(2) : "\n" + s.split("\n").map((function (e) {
                                            return "   " + e
                                        }
                                        )).join("\n")) : s = e.stylize("[Circular]", "special")),
                                        y(a)) {
                                        if (o && i.match(/^\d+$/))
                                            return s;
                                        (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2),
                                            a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"),
                                                a = e.stylize(a, "string"))
                                    }
                                    return a + ": " + s
                                }
                                function p(e) {
                                    return Array.isArray(e)
                                }
                                function h(e) {
                                    return "boolean" == typeof e
                                }
                                function g(e) {
                                    return null === e
                                }
                                function m(e) {
                                    return "number" == typeof e
                                }
                                function b(e) {
                                    return "string" == typeof e
                                }
                                function y(e) {
                                    return void 0 === e
                                }
                                function v(e) {
                                    return w(e) && "[object RegExp]" === S(e)
                                }
                                function w(e) {
                                    return "object" == typeof e && null !== e
                                }
                                function x(e) {
                                    return w(e) && "[object Date]" === S(e)
                                }
                                function E(e) {
                                    return w(e) && ("[object Error]" === S(e) || e instanceof Error)
                                }
                                function k(e) {
                                    return "function" == typeof e
                                }
                                function S(e) {
                                    return Object.prototype.toString.call(e)
                                }
                                function A(e) {
                                    return e < 10 ? "0" + e.toString(10) : e.toString(10)
                                }
                                t.debuglog = function (e) {
                                    if (y(o) && (o = r.env.NODE_DEBUG || ""),
                                        e = e.toUpperCase(),
                                        !a[e])
                                        if (new RegExp("\\b" + e + "\\b", "i").test(o)) {
                                            var n = r.pid;
                                            a[e] = function () {
                                                var r = t.format.apply(t, arguments);
                                                console.error("%s %d: %s", e, n, r)
                                            }
                                        } else
                                            a[e] = function () { }
                                                ;
                                    return a[e]
                                }
                                    ,
                                    t.inspect = s,
                                    s.colors = {
                                        bold: [1, 22],
                                        italic: [3, 23],
                                        underline: [4, 24],
                                        inverse: [7, 27],
                                        white: [37, 39],
                                        grey: [90, 39],
                                        black: [30, 39],
                                        blue: [34, 39],
                                        cyan: [36, 39],
                                        green: [32, 39],
                                        magenta: [35, 39],
                                        red: [31, 39],
                                        yellow: [33, 39]
                                    },
                                    s.styles = {
                                        special: "cyan",
                                        number: "yellow",
                                        boolean: "yellow",
                                        undefined: "grey",
                                        null: "bold",
                                        string: "green",
                                        date: "magenta",
                                        regexp: "red"
                                    },
                                    t.isArray = p,
                                    t.isBoolean = h,
                                    t.isNull = g,
                                    t.isNullOrUndefined = function (e) {
                                        return null == e
                                    }
                                    ,
                                    t.isNumber = m,
                                    t.isString = b,
                                    t.isSymbol = function (e) {
                                        return "symbol" == typeof e
                                    }
                                    ,
                                    t.isUndefined = y,
                                    t.isRegExp = v,
                                    t.isObject = w,
                                    t.isDate = x,
                                    t.isError = E,
                                    t.isFunction = k,
                                    t.isPrimitive = function (e) {
                                        return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
                                    }
                                    ,
                                    t.isBuffer = n(25);
                                var O = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                                function T() {
                                    var e = new Date
                                        , t = [A(e.getHours()), A(e.getMinutes()), A(e.getSeconds())].join(":");
                                    return [e.getDate(), O[e.getMonth()], t].join(" ")
                                }
                                function _(e, t) {
                                    return Object.prototype.hasOwnProperty.call(e, t)
                                }
                                t.log = function () {
                                    console.log("%s - %s", T(), t.format.apply(t, arguments))
                                }
                                    ,
                                    t.inherits = n(26),
                                    t._extend = function (e, t) {
                                        if (!t || !w(t))
                                            return e;
                                        for (var n = Object.keys(t), r = n.length; r--;)
                                            e[n[r]] = t[n[r]];
                                        return e
                                    }
                            }
                            ).call(t, function () {
                                return this
                            }(), n(24))
                        }
                        , function (e, t) {
                            var n, r, i = e.exports = {};
                            function o() {
                                throw new Error("setTimeout has not been defined")
                            }
                            function a() {
                                throw new Error("clearTimeout has not been defined")
                            }
                            function s(e) {
                                if (n === setTimeout)
                                    return setTimeout(e, 0);
                                if ((n === o || !n) && setTimeout)
                                    return n = setTimeout,
                                        setTimeout(e, 0);
                                try {
                                    return n(e, 0)
                                } catch (t) {
                                    try {
                                        return n.call(null, e, 0)
                                    } catch (t) {
                                        return n.call(this, e, 0)
                                    }
                                }
                            }
                            !function () {
                                try {
                                    n = "function" == typeof setTimeout ? setTimeout : o
                                } catch (e) {
                                    n = o
                                }
                                try {
                                    r = "function" == typeof clearTimeout ? clearTimeout : a
                                } catch (e) {
                                    r = a
                                }
                            }();
                            var l, c = [], u = !1, d = -1;
                            function f() {
                                u && l && (u = !1,
                                    l.length ? c = l.concat(c) : d = -1,
                                    c.length && p())
                            }
                            function p() {
                                if (!u) {
                                    var e = s(f);
                                    u = !0;
                                    for (var t = c.length; t;) {
                                        for (l = c,
                                            c = []; ++d < t;)
                                            l && l[d].run();
                                        d = -1,
                                            t = c.length
                                    }
                                    l = null,
                                        u = !1,
                                        function (e) {
                                            if (r === clearTimeout)
                                                return clearTimeout(e);
                                            if ((r === a || !r) && clearTimeout)
                                                return r = clearTimeout,
                                                    clearTimeout(e);
                                            try {
                                                r(e)
                                            } catch (t) {
                                                try {
                                                    return r.call(null, e)
                                                } catch (t) {
                                                    return r.call(this, e)
                                                }
                                            }
                                        }(e)
                                }
                            }
                            function h(e, t) {
                                this.fun = e,
                                    this.array = t
                            }
                            function g() { }
                            i.nextTick = function (e) {
                                var t = new Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var n = 1; n < arguments.length; n++)
                                        t[n - 1] = arguments[n];
                                c.push(new h(e, t)),
                                    1 !== c.length || u || s(p)
                            }
                                ,
                                h.prototype.run = function () {
                                    this.fun.apply(null, this.array)
                                }
                                ,
                                i.title = "browser",
                                i.browser = !0,
                                i.env = {},
                                i.argv = [],
                                i.version = "",
                                i.versions = {},
                                i.on = g,
                                i.addListener = g,
                                i.once = g,
                                i.off = g,
                                i.removeListener = g,
                                i.removeAllListeners = g,
                                i.emit = g,
                                i.prependListener = g,
                                i.prependOnceListener = g,
                                i.listeners = function (e) {
                                    return []
                                }
                                ,
                                i.binding = function (e) {
                                    throw new Error("process.binding is not supported")
                                }
                                ,
                                i.cwd = function () {
                                    return "/"
                                }
                                ,
                                i.chdir = function (e) {
                                    throw new Error("process.chdir is not supported")
                                }
                                ,
                                i.umask = function () {
                                    return 0
                                }
                        }
                        , function (e, t) {
                            e.exports = function (e) {
                                return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
                            }
                        }
                        , function (e, t) {
                            "function" == typeof Object.create ? e.exports = function (e, t) {
                                e.super_ = t,
                                    e.prototype = Object.create(t.prototype, {
                                        constructor: {
                                            value: e,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    })
                            }
                                : e.exports = function (e, t) {
                                    e.super_ = t;
                                    var n = function () { };
                                    n.prototype = t.prototype,
                                        e.prototype = new n,
                                        e.prototype.constructor = e
                                }
                        }
                        , function (e, t, n) {
                            var r, i, o = n(9), a = n(7);
                            e.exports = (r = o.newEl("canvas"),
                                i = null,
                                function (e) {
                                    null == i && (i = r.getContext("2d"));
                                    var t = a.canvasRatio()
                                        , n = e.root;
                                    r.width = t * n.properties.width,
                                        r.height = t * n.properties.height,
                                        i.textBaseline = "middle";
                                    var o = n.children.holderBg
                                        , s = t * o.width
                                        , l = t * o.height;
                                    i.fillStyle = o.properties.fill,
                                        i.fillRect(0, 0, s, l),
                                        o.properties.outline && (i.strokeStyle = o.properties.outline.fill,
                                            i.lineWidth = o.properties.outline.width,
                                            i.moveTo(1, 1),
                                            i.lineTo(s - 1, 1),
                                            i.lineTo(s - 1, l - 1),
                                            i.lineTo(1, l - 1),
                                            i.lineTo(1, 1),
                                            i.moveTo(0, 1),
                                            i.lineTo(s, l - 1),
                                            i.moveTo(0, l - 1),
                                            i.lineTo(s, 1),
                                            i.stroke());
                                    var c = n.children.holderTextGroup;
                                    for (var u in i.font = c.properties.font.weight + " " + t * c.properties.font.size + c.properties.font.units + " " + c.properties.font.family + ", monospace",
                                        i.fillStyle = c.properties.fill,
                                        c.children) {
                                        var d = c.children[u];
                                        for (var f in d.children) {
                                            var p = d.children[f]
                                                , h = t * (c.x + d.x + p.x)
                                                , g = t * (c.y + d.y + p.y + c.properties.leading / 2);
                                            i.fillText(p.properties.text, h, g)
                                        }
                                    }
                                    return r.toDataURL("image/png")
                                }
                            )
                        }
                    ])
                }
                ,
                e.exports = t(),
                n = this,
                "undefined" != typeof Meteor && "undefined" != typeof Package && (Holder = n.Holder)
        },
        27: e => {
            "use strict";
            e.exports = function (e, t) {
                var n, r, i = {}, o = {}, a = void 0, s = {}, l = {};
                if (s[0] = "HTML_SPECIALCHARS",
                    s[1] = "HTML_ENTITIES",
                    l[0] = "ENT_NOQUOTES",
                    l[2] = "ENT_COMPAT",
                    l[3] = "ENT_QUOTES",
                    n = isNaN(e) ? e ? e.toUpperCase() : "HTML_SPECIALCHARS" : s[e],
                    r = isNaN(t) ? t ? t.toUpperCase() : "ENT_COMPAT" : l[t],
                    "HTML_SPECIALCHARS" !== n && "HTML_ENTITIES" !== n)
                    throw new Error("Table: " + n + " not supported");
                for (a in i[38] = "&amp;",
                    "HTML_ENTITIES" === n && (i[160] = "&nbsp;",
                        i[161] = "&iexcl;",
                        i[162] = "&cent;",
                        i[163] = "&pound;",
                        i[164] = "&curren;",
                        i[165] = "&yen;",
                        i[166] = "&brvbar;",
                        i[167] = "&sect;",
                        i[168] = "&uml;",
                        i[169] = "&copy;",
                        i[170] = "&ordf;",
                        i[171] = "&laquo;",
                        i[172] = "&not;",
                        i[173] = "&shy;",
                        i[174] = "&reg;",
                        i[175] = "&macr;",
                        i[176] = "&deg;",
                        i[177] = "&plusmn;",
                        i[178] = "&sup2;",
                        i[179] = "&sup3;",
                        i[180] = "&acute;",
                        i[181] = "&micro;",
                        i[182] = "&para;",
                        i[183] = "&middot;",
                        i[184] = "&cedil;",
                        i[185] = "&sup1;",
                        i[186] = "&ordm;",
                        i[187] = "&raquo;",
                        i[188] = "&frac14;",
                        i[189] = "&frac12;",
                        i[190] = "&frac34;",
                        i[191] = "&iquest;",
                        i[192] = "&Agrave;",
                        i[193] = "&Aacute;",
                        i[194] = "&Acirc;",
                        i[195] = "&Atilde;",
                        i[196] = "&Auml;",
                        i[197] = "&Aring;",
                        i[198] = "&AElig;",
                        i[199] = "&Ccedil;",
                        i[200] = "&Egrave;",
                        i[201] = "&Eacute;",
                        i[202] = "&Ecirc;",
                        i[203] = "&Euml;",
                        i[204] = "&Igrave;",
                        i[205] = "&Iacute;",
                        i[206] = "&Icirc;",
                        i[207] = "&Iuml;",
                        i[208] = "&ETH;",
                        i[209] = "&Ntilde;",
                        i[210] = "&Ograve;",
                        i[211] = "&Oacute;",
                        i[212] = "&Ocirc;",
                        i[213] = "&Otilde;",
                        i[214] = "&Ouml;",
                        i[215] = "&times;",
                        i[216] = "&Oslash;",
                        i[217] = "&Ugrave;",
                        i[218] = "&Uacute;",
                        i[219] = "&Ucirc;",
                        i[220] = "&Uuml;",
                        i[221] = "&Yacute;",
                        i[222] = "&THORN;",
                        i[223] = "&szlig;",
                        i[224] = "&agrave;",
                        i[225] = "&aacute;",
                        i[226] = "&acirc;",
                        i[227] = "&atilde;",
                        i[228] = "&auml;",
                        i[229] = "&aring;",
                        i[230] = "&aelig;",
                        i[231] = "&ccedil;",
                        i[232] = "&egrave;",
                        i[233] = "&eacute;",
                        i[234] = "&ecirc;",
                        i[235] = "&euml;",
                        i[236] = "&igrave;",
                        i[237] = "&iacute;",
                        i[238] = "&icirc;",
                        i[239] = "&iuml;",
                        i[240] = "&eth;",
                        i[241] = "&ntilde;",
                        i[242] = "&ograve;",
                        i[243] = "&oacute;",
                        i[244] = "&ocirc;",
                        i[245] = "&otilde;",
                        i[246] = "&ouml;",
                        i[247] = "&divide;",
                        i[248] = "&oslash;",
                        i[249] = "&ugrave;",
                        i[250] = "&uacute;",
                        i[251] = "&ucirc;",
                        i[252] = "&uuml;",
                        i[253] = "&yacute;",
                        i[254] = "&thorn;",
                        i[255] = "&yuml;"),
                    "ENT_NOQUOTES" !== r && (i[34] = "&quot;"),
                    "ENT_QUOTES" === r && (i[39] = "&#39;"),
                    i[60] = "&lt;",
                    i[62] = "&gt;",
                    i)
                    i.hasOwnProperty(a) && (o[String.fromCharCode(a)] = i[a]);
                return o
            }
        }
        ,
        66: (e, t, n) => {
            "use strict";
            e.exports = function (e, t, r, i) {
                var o = n(27)("HTML_ENTITIES", t);
                if (e = null === e ? "" : e + "",
                    !o)
                    return !1;
                t && "ENT_QUOTES" === t && (o["'"] = "&#039;"),
                    i = null === i || !!i;
                var a = new RegExp("&(?:#\\d+|#x[\\da-f]+|[a-zA-Z][\\da-z]*);|[" + Object.keys(o).join("").replace(/([()[\]{}\-.*+?^$|/\\])/g, "\\$1") + "]", "g");
                return e.replace(a, (function (e) {
                    return e.length > 1 ? i ? o["&"] + e.substr(1) : e : o[e]
                }
                ))
            }
        }
        ,
        390: e => {
            var t = {
                exports: {}
            };
            function n(e) {
                return e instanceof Map ? e.clear = e.delete = e.set = function () {
                    throw new Error("map is read-only")
                }
                    : e instanceof Set && (e.add = e.clear = e.delete = function () {
                        throw new Error("set is read-only")
                    }
                    ),
                    Object.freeze(e),
                    Object.getOwnPropertyNames(e).forEach((function (t) {
                        var r = e[t];
                        "object" != typeof r || Object.isFrozen(r) || n(r)
                    }
                    )),
                    e
            }
            t.exports = n,
                t.exports.default = n;
            class r {
                constructor(e) {
                    void 0 === e.data && (e.data = {}),
                        this.data = e.data,
                        this.isMatchIgnored = !1
                }
                ignoreMatch() {
                    this.isMatchIgnored = !0
                }
            }
            function i(e) {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
            }
            function o(e, ...t) {
                const n = Object.create(null);
                for (const t in e)
                    n[t] = e[t];
                return t.forEach((function (e) {
                    for (const t in e)
                        n[t] = e[t]
                }
                )),
                    n
            }
            const a = e => !!e.scope || e.sublanguage && e.language;
            class s {
                constructor(e, t) {
                    this.buffer = "",
                        this.classPrefix = t.classPrefix,
                        e.walk(this)
                }
                addText(e) {
                    this.buffer += i(e)
                }
                openNode(e) {
                    if (!a(e))
                        return;
                    let t = "";
                    t = e.sublanguage ? `language-${e.language}` : ((e, { prefix: t }) => {
                        if (e.includes(".")) {
                            const n = e.split(".");
                            return [`${t}${n.shift()}`, ...n.map(((e, t) => `${e}${"_".repeat(t + 1)}`))].join(" ")
                        }
                        return `${t}${e}`
                    }
                    )(e.scope, {
                        prefix: this.classPrefix
                    }),
                        this.span(t)
                }
                closeNode(e) {
                    a(e) && (this.buffer += "</span>")
                }
                value() {
                    return this.buffer
                }
                span(e) {
                    this.buffer += `<span class="${e}">`
                }
            }
            const l = (e = {}) => {
                const t = {
                    children: []
                };
                return Object.assign(t, e),
                    t
            }
                ;
            class c {
                constructor() {
                    this.rootNode = l(),
                        this.stack = [this.rootNode]
                }
                get top() {
                    return this.stack[this.stack.length - 1]
                }
                get root() {
                    return this.rootNode
                }
                add(e) {
                    this.top.children.push(e)
                }
                openNode(e) {
                    const t = l({
                        scope: e
                    });
                    this.add(t),
                        this.stack.push(t)
                }
                closeNode() {
                    if (this.stack.length > 1)
                        return this.stack.pop()
                }
                closeAllNodes() {
                    for (; this.closeNode();)
                        ;
                }
                toJSON() {
                    return JSON.stringify(this.rootNode, null, 4)
                }
                walk(e) {
                    return this.constructor._walk(e, this.rootNode)
                }
                static _walk(e, t) {
                    return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t),
                        t.children.forEach((t => this._walk(e, t))),
                        e.closeNode(t)),
                        e
                }
                static _collapse(e) {
                    "string" != typeof e && e.children && (e.children.every((e => "string" == typeof e)) ? e.children = [e.children.join("")] : e.children.forEach((e => {
                        c._collapse(e)
                    }
                    )))
                }
            }
            class u extends c {
                constructor(e) {
                    super(),
                        this.options = e
                }
                addKeyword(e, t) {
                    "" !== e && (this.openNode(t),
                        this.addText(e),
                        this.closeNode())
                }
                addText(e) {
                    "" !== e && this.add(e)
                }
                addSublanguage(e, t) {
                    const n = e.root;
                    n.sublanguage = !0,
                        n.language = t,
                        this.add(n)
                }
                toHTML() {
                    return new s(this, this.options).value()
                }
                finalize() {
                    return !0
                }
            }
            function d(e) {
                return e ? "string" == typeof e ? e : e.source : null
            }
            function f(e) {
                return g("(?=", e, ")")
            }
            function p(e) {
                return g("(?:", e, ")*")
            }
            function h(e) {
                return g("(?:", e, ")?")
            }
            function g(...e) {
                return e.map((e => d(e))).join("")
            }
            function m(...e) {
                const t = function (e) {
                    const t = e[e.length - 1];
                    return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1),
                        t) : {}
                }(e);
                return "(" + (t.capture ? "" : "?:") + e.map((e => d(e))).join("|") + ")"
            }
            function b(e) {
                return new RegExp(e.toString() + "|").exec("").length - 1
            }
            const y = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
            function v(e, { joinWith: t }) {
                let n = 0;
                return e.map((e => {
                    n += 1;
                    const t = n;
                    let r = d(e)
                        , i = "";
                    for (; r.length > 0;) {
                        const e = y.exec(r);
                        if (!e) {
                            i += r;
                            break
                        }
                        i += r.substring(0, e.index),
                            r = r.substring(e.index + e[0].length),
                            "\\" === e[0][0] && e[1] ? i += "\\" + String(Number(e[1]) + t) : (i += e[0],
                                "(" === e[0] && n++)
                    }
                    return i
                }
                )).map((e => `(${e})`)).join(t)
            }
            const w = "[a-zA-Z]\\w*"
                , x = "[a-zA-Z_]\\w*"
                , E = "\\b\\d+(\\.\\d+)?"
                , k = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"
                , S = "\\b(0b[01]+)"
                , A = {
                    begin: "\\\\[\\s\\S]",
                    relevance: 0
                }
                , O = {
                    scope: "string",
                    begin: "'",
                    end: "'",
                    illegal: "\\n",
                    contains: [A]
                }
                , T = {
                    scope: "string",
                    begin: '"',
                    end: '"',
                    illegal: "\\n",
                    contains: [A]
                }
                , _ = function (e, t, n = {}) {
                    const r = o({
                        scope: "comment",
                        begin: e,
                        end: t,
                        contains: []
                    }, n);
                    r.contains.push({
                        scope: "doctag",
                        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
                        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
                        excludeBegin: !0,
                        relevance: 0
                    });
                    const i = m("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
                    return r.contains.push({
                        begin: g(/[ ]+/, "(", i, /[.]?[:]?([.][ ]|[ ])/, "){3}")
                    }),
                        r
                }
                , N = _("//", "$")
                , j = _("/\\*", "\\*/")
                , M = _("#", "$")
                , C = {
                    scope: "number",
                    begin: E,
                    relevance: 0
                }
                , R = {
                    scope: "number",
                    begin: k,
                    relevance: 0
                }
                , I = {
                    scope: "number",
                    begin: S,
                    relevance: 0
                }
                , L = {
                    begin: /(?=\/[^/\n]*\/)/,
                    contains: [{
                        scope: "regexp",
                        begin: /\//,
                        end: /\/[gimuy]*/,
                        illegal: /\n/,
                        contains: [A, {
                            begin: /\[/,
                            end: /\]/,
                            relevance: 0,
                            contains: [A]
                        }]
                    }]
                }
                , z = {
                    scope: "title",
                    begin: w,
                    relevance: 0
                }
                , D = {
                    scope: "title",
                    begin: x,
                    relevance: 0
                }
                , B = {
                    begin: "\\.\\s*[a-zA-Z_]\\w*",
                    relevance: 0
                };
            var P = Object.freeze({
                __proto__: null,
                MATCH_NOTHING_RE: /\b\B/,
                IDENT_RE: w,
                UNDERSCORE_IDENT_RE: x,
                NUMBER_RE: E,
                C_NUMBER_RE: k,
                BINARY_NUMBER_RE: S,
                RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
                SHEBANG: (e = {}) => {
                    const t = /^#![ ]*\//;
                    return e.binary && (e.begin = g(t, /.*\b/, e.binary, /\b.*/)),
                        o({
                            scope: "meta",
                            begin: t,
                            end: /$/,
                            relevance: 0,
                            "on:begin": (e, t) => {
                                0 !== e.index && t.ignoreMatch()
                            }
                        }, e)
                }
                ,
                BACKSLASH_ESCAPE: A,
                APOS_STRING_MODE: O,
                QUOTE_STRING_MODE: T,
                PHRASAL_WORDS_MODE: {
                    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
                },
                COMMENT: _,
                C_LINE_COMMENT_MODE: N,
                C_BLOCK_COMMENT_MODE: j,
                HASH_COMMENT_MODE: M,
                NUMBER_MODE: C,
                C_NUMBER_MODE: R,
                BINARY_NUMBER_MODE: I,
                REGEXP_MODE: L,
                TITLE_MODE: z,
                UNDERSCORE_TITLE_MODE: D,
                METHOD_GUARD: B,
                END_SAME_AS_BEGIN: function (e) {
                    return Object.assign(e, {
                        "on:begin": (e, t) => {
                            t.data._beginMatch = e[1]
                        }
                        ,
                        "on:end": (e, t) => {
                            t.data._beginMatch !== e[1] && t.ignoreMatch()
                        }
                    })
                }
            });
            function $(e, t) {
                "." === e.input[e.index - 1] && t.ignoreMatch()
            }
            function H(e, t) {
                void 0 !== e.className && (e.scope = e.className,
                    delete e.className)
            }
            function F(e, t) {
                t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)",
                    e.__beforeBegin = $,
                    e.keywords = e.keywords || e.beginKeywords,
                    delete e.beginKeywords,
                    void 0 === e.relevance && (e.relevance = 0))
            }
            function U(e, t) {
                Array.isArray(e.illegal) && (e.illegal = m(...e.illegal))
            }
            function q(e, t) {
                if (e.match) {
                    if (e.begin || e.end)
                        throw new Error("begin & end are not supported with match");
                    e.begin = e.match,
                        delete e.match
                }
            }
            function G(e, t) {
                void 0 === e.relevance && (e.relevance = 1)
            }
            const W = (e, t) => {
                if (!e.beforeMatch)
                    return;
                if (e.starts)
                    throw new Error("beforeMatch cannot be used with starts");
                const n = Object.assign({}, e);
                Object.keys(e).forEach((t => {
                    delete e[t]
                }
                )),
                    e.keywords = n.keywords,
                    e.begin = g(n.beforeMatch, f(n.begin)),
                    e.starts = {
                        relevance: 0,
                        contains: [Object.assign(n, {
                            endsParent: !0
                        })]
                    },
                    e.relevance = 0,
                    delete n.beforeMatch
            }
                , Z = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];
            function K(e, t, n = "keyword") {
                const r = Object.create(null);
                return "string" == typeof e ? i(n, e.split(" ")) : Array.isArray(e) ? i(n, e) : Object.keys(e).forEach((function (n) {
                    Object.assign(r, K(e[n], t, n))
                }
                )),
                    r;
                function i(e, n) {
                    t && (n = n.map((e => e.toLowerCase()))),
                        n.forEach((function (t) {
                            const n = t.split("|");
                            r[n[0]] = [e, V(n[0], n[1])]
                        }
                        ))
                }
            }
            function V(e, t) {
                return t ? Number(t) : function (e) {
                    return Z.includes(e.toLowerCase())
                }(e) ? 0 : 1
            }
            const X = {}
                , J = e => {
                    console.error(e)
                }
                , Q = (e, ...t) => {
                    console.log(`WARN: ${e}`, ...t)
                }
                , Y = (e, t) => {
                    X[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`),
                        X[`${e}/${t}`] = !0)
                }
                , ee = new Error;
            function te(e, t, { key: n }) {
                let r = 0;
                const i = e[n]
                    , o = {}
                    , a = {};
                for (let e = 1; e <= t.length; e++)
                    a[e + r] = i[e],
                        o[e + r] = !0,
                        r += b(t[e - 1]);
                e[n] = a,
                    e[n]._emit = o,
                    e[n]._multi = !0
            }
            function ne(e) {
                !function (e) {
                    e.scope && "object" == typeof e.scope && null !== e.scope && (e.beginScope = e.scope,
                        delete e.scope)
                }(e),
                    "string" == typeof e.beginScope && (e.beginScope = {
                        _wrap: e.beginScope
                    }),
                    "string" == typeof e.endScope && (e.endScope = {
                        _wrap: e.endScope
                    }),
                    function (e) {
                        if (Array.isArray(e.begin)) {
                            if (e.skip || e.excludeBegin || e.returnBegin)
                                throw J("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
                                ee;
                            if ("object" != typeof e.beginScope || null === e.beginScope)
                                throw J("beginScope must be object"),
                                ee;
                            te(e, e.begin, {
                                key: "beginScope"
                            }),
                                e.begin = v(e.begin, {
                                    joinWith: ""
                                })
                        }
                    }(e),
                    function (e) {
                        if (Array.isArray(e.end)) {
                            if (e.skip || e.excludeEnd || e.returnEnd)
                                throw J("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
                                ee;
                            if ("object" != typeof e.endScope || null === e.endScope)
                                throw J("endScope must be object"),
                                ee;
                            te(e, e.end, {
                                key: "endScope"
                            }),
                                e.end = v(e.end, {
                                    joinWith: ""
                                })
                        }
                    }(e)
            }
            function re(e) {
                function t(t, n) {
                    return new RegExp(d(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (n ? "g" : ""))
                }
                class n {
                    constructor() {
                        this.matchIndexes = {},
                            this.regexes = [],
                            this.matchAt = 1,
                            this.position = 0
                    }
                    addRule(e, t) {
                        t.position = this.position++,
                            this.matchIndexes[this.matchAt] = t,
                            this.regexes.push([t, e]),
                            this.matchAt += b(e) + 1
                    }
                    compile() {
                        0 === this.regexes.length && (this.exec = () => null);
                        const e = this.regexes.map((e => e[1]));
                        this.matcherRe = t(v(e, {
                            joinWith: "|"
                        }), !0),
                            this.lastIndex = 0
                    }
                    exec(e) {
                        this.matcherRe.lastIndex = this.lastIndex;
                        const t = this.matcherRe.exec(e);
                        if (!t)
                            return null;
                        const n = t.findIndex(((e, t) => t > 0 && void 0 !== e))
                            , r = this.matchIndexes[n];
                        return t.splice(0, n),
                            Object.assign(t, r)
                    }
                }
                class r {
                    constructor() {
                        this.rules = [],
                            this.multiRegexes = [],
                            this.count = 0,
                            this.lastIndex = 0,
                            this.regexIndex = 0
                    }
                    getMatcher(e) {
                        if (this.multiRegexes[e])
                            return this.multiRegexes[e];
                        const t = new n;
                        return this.rules.slice(e).forEach((([e, n]) => t.addRule(e, n))),
                            t.compile(),
                            this.multiRegexes[e] = t,
                            t
                    }
                    resumingScanAtSamePosition() {
                        return 0 !== this.regexIndex
                    }
                    considerAll() {
                        this.regexIndex = 0
                    }
                    addRule(e, t) {
                        this.rules.push([e, t]),
                            "begin" === t.type && this.count++
                    }
                    exec(e) {
                        const t = this.getMatcher(this.regexIndex);
                        t.lastIndex = this.lastIndex;
                        let n = t.exec(e);
                        if (this.resumingScanAtSamePosition())
                            if (n && n.index === this.lastIndex)
                                ;
                            else {
                                const t = this.getMatcher(0);
                                t.lastIndex = this.lastIndex + 1,
                                    n = t.exec(e)
                            }
                        return n && (this.regexIndex += n.position + 1,
                            this.regexIndex === this.count && this.considerAll()),
                            n
                    }
                }
                if (e.compilerExtensions || (e.compilerExtensions = []),
                    e.contains && e.contains.includes("self"))
                    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
                return e.classNameAliases = o(e.classNameAliases || {}),
                    function n(i, a) {
                        const s = i;
                        if (i.isCompiled)
                            return s;
                        [H, q, ne, W].forEach((e => e(i, a))),
                            e.compilerExtensions.forEach((e => e(i, a))),
                            i.__beforeBegin = null,
                            [F, U, G].forEach((e => e(i, a))),
                            i.isCompiled = !0;
                        let l = null;
                        return "object" == typeof i.keywords && i.keywords.$pattern && (i.keywords = Object.assign({}, i.keywords),
                            l = i.keywords.$pattern,
                            delete i.keywords.$pattern),
                            l = l || /\w+/,
                            i.keywords && (i.keywords = K(i.keywords, e.case_insensitive)),
                            s.keywordPatternRe = t(l, !0),
                            a && (i.begin || (i.begin = /\B|\b/),
                                s.beginRe = t(s.begin),
                                i.end || i.endsWithParent || (i.end = /\B|\b/),
                                i.end && (s.endRe = t(s.end)),
                                s.terminatorEnd = d(s.end) || "",
                                i.endsWithParent && a.terminatorEnd && (s.terminatorEnd += (i.end ? "|" : "") + a.terminatorEnd)),
                            i.illegal && (s.illegalRe = t(i.illegal)),
                            i.contains || (i.contains = []),
                            i.contains = [].concat(...i.contains.map((function (e) {
                                return function (e) {
                                    e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map((function (t) {
                                        return o(e, {
                                            variants: null
                                        }, t)
                                    }
                                    )));
                                    if (e.cachedVariants)
                                        return e.cachedVariants;
                                    if (ie(e))
                                        return o(e, {
                                            starts: e.starts ? o(e.starts) : null
                                        });
                                    if (Object.isFrozen(e))
                                        return o(e);
                                    return e
                                }("self" === e ? i : e)
                            }
                            ))),
                            i.contains.forEach((function (e) {
                                n(e, s)
                            }
                            )),
                            i.starts && n(i.starts, a),
                            s.matcher = function (e) {
                                const t = new r;
                                return e.contains.forEach((e => t.addRule(e.begin, {
                                    rule: e,
                                    type: "begin"
                                }))),
                                    e.terminatorEnd && t.addRule(e.terminatorEnd, {
                                        type: "end"
                                    }),
                                    e.illegal && t.addRule(e.illegal, {
                                        type: "illegal"
                                    }),
                                    t
                            }(s),
                            s
                    }(e)
            }
            function ie(e) {
                return !!e && (e.endsWithParent || ie(e.starts))
            }
            class oe extends Error {
                constructor(e, t) {
                    super(e),
                        this.name = "HTMLInjectionError",
                        this.html = t
                }
            }
            const ae = i
                , se = o
                , le = Symbol("nomatch");
            var ce = function (e) {
                const n = Object.create(null)
                    , i = Object.create(null)
                    , o = [];
                let a = !0;
                const s = "Could not find the language '{}', did you forget to load/include a language module?"
                    , l = {
                        disableAutodetect: !0,
                        name: "Plain text",
                        contains: []
                    };
                let c = {
                    ignoreUnescapedHTML: !1,
                    throwUnescapedHTML: !1,
                    noHighlightRe: /^(no-?highlight)$/i,
                    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                    classPrefix: "hljs-",
                    cssSelector: "pre code",
                    languages: null,
                    __emitter: u
                };
                function d(e) {
                    return c.noHighlightRe.test(e)
                }
                function b(e, t, n) {
                    let r = ""
                        , i = "";
                    "object" == typeof t ? (r = e,
                        n = t.ignoreIllegals,
                        i = t.language) : (Y("10.7.0", "highlight(lang, code, ...args) has been deprecated."),
                            Y("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
                            i = e,
                            r = t),
                        void 0 === n && (n = !0);
                    const o = {
                        code: r,
                        language: i
                    };
                    O("before:highlight", o);
                    const a = o.result ? o.result : y(o.language, o.code, n);
                    return a.code = o.code,
                        O("after:highlight", a),
                        a
                }
                function y(e, t, i, o) {
                    const l = Object.create(null);
                    function u() {
                        if (!A.keywords)
                            return void T.addText(_);
                        let e = 0;
                        A.keywordPatternRe.lastIndex = 0;
                        let t = A.keywordPatternRe.exec(_)
                            , n = "";
                        for (; t;) {
                            n += _.substring(e, t.index);
                            const i = x.case_insensitive ? t[0].toLowerCase() : t[0]
                                , o = (r = i,
                                    A.keywords[r]);
                            if (o) {
                                const [e, r] = o;
                                if (T.addText(n),
                                    n = "",
                                    l[i] = (l[i] || 0) + 1,
                                    l[i] <= 7 && (N += r),
                                    e.startsWith("_"))
                                    n += t[0];
                                else {
                                    const n = x.classNameAliases[e] || e;
                                    T.addKeyword(t[0], n)
                                }
                            } else
                                n += t[0];
                            e = A.keywordPatternRe.lastIndex,
                                t = A.keywordPatternRe.exec(_)
                        }
                        var r;
                        n += _.substring(e),
                            T.addText(n)
                    }
                    function d() {
                        null != A.subLanguage ? function () {
                            if ("" === _)
                                return;
                            let e = null;
                            if ("string" == typeof A.subLanguage) {
                                if (!n[A.subLanguage])
                                    return void T.addText(_);
                                e = y(A.subLanguage, _, !0, O[A.subLanguage]),
                                    O[A.subLanguage] = e._top
                            } else
                                e = v(_, A.subLanguage.length ? A.subLanguage : null);
                            A.relevance > 0 && (N += e.relevance),
                                T.addSublanguage(e._emitter, e.language)
                        }() : u(),
                            _ = ""
                    }
                    function f(e, t) {
                        let n = 1;
                        const r = t.length - 1;
                        for (; n <= r;) {
                            if (!e._emit[n]) {
                                n++;
                                continue
                            }
                            const r = x.classNameAliases[e[n]] || e[n]
                                , i = t[n];
                            r ? T.addKeyword(i, r) : (_ = i,
                                u(),
                                _ = ""),
                                n++
                        }
                    }
                    function p(e, t) {
                        return e.scope && "string" == typeof e.scope && T.openNode(x.classNameAliases[e.scope] || e.scope),
                            e.beginScope && (e.beginScope._wrap ? (T.addKeyword(_, x.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap),
                                _ = "") : e.beginScope._multi && (f(e.beginScope, t),
                                    _ = "")),
                            A = Object.create(e, {
                                parent: {
                                    value: A
                                }
                            }),
                            A
                    }
                    function h(e, t, n) {
                        let i = function (e, t) {
                            const n = e && e.exec(t);
                            return n && 0 === n.index
                        }(e.endRe, n);
                        if (i) {
                            if (e["on:end"]) {
                                const n = new r(e);
                                e["on:end"](t, n),
                                    n.isMatchIgnored && (i = !1)
                            }
                            if (i) {
                                for (; e.endsParent && e.parent;)
                                    e = e.parent;
                                return e
                            }
                        }
                        if (e.endsWithParent)
                            return h(e.parent, t, n)
                    }
                    function g(e) {
                        return 0 === A.matcher.regexIndex ? (_ += e[0],
                            1) : (C = !0,
                                0)
                    }
                    function m(e) {
                        const n = e[0]
                            , r = t.substring(e.index)
                            , i = h(A, e, r);
                        if (!i)
                            return le;
                        const o = A;
                        A.endScope && A.endScope._wrap ? (d(),
                            T.addKeyword(n, A.endScope._wrap)) : A.endScope && A.endScope._multi ? (d(),
                                f(A.endScope, e)) : o.skip ? _ += n : (o.returnEnd || o.excludeEnd || (_ += n),
                                    d(),
                                    o.excludeEnd && (_ = n));
                        do {
                            A.scope && T.closeNode(),
                                A.skip || A.subLanguage || (N += A.relevance),
                                A = A.parent
                        } while (A !== i.parent);
                        return i.starts && p(i.starts, e),
                            o.returnEnd ? 0 : n.length
                    }
                    let b = {};
                    function w(n, o) {
                        const s = o && o[0];
                        if (_ += n,
                            null == s)
                            return d(),
                                0;
                        if ("begin" === b.type && "end" === o.type && b.index === o.index && "" === s) {
                            if (_ += t.slice(o.index, o.index + 1),
                                !a) {
                                const t = new Error(`0 width match regex (${e})`);
                                throw t.languageName = e,
                                t.badRule = b.rule,
                                t
                            }
                            return 1
                        }
                        if (b = o,
                            "begin" === o.type)
                            return function (e) {
                                const t = e[0]
                                    , n = e.rule
                                    , i = new r(n)
                                    , o = [n.__beforeBegin, n["on:begin"]];
                                for (const n of o)
                                    if (n && (n(e, i),
                                        i.isMatchIgnored))
                                        return g(t);
                                return n.skip ? _ += t : (n.excludeBegin && (_ += t),
                                    d(),
                                    n.returnBegin || n.excludeBegin || (_ = t)),
                                    p(n, e),
                                    n.returnBegin ? 0 : t.length
                            }(o);
                        if ("illegal" === o.type && !i) {
                            const e = new Error('Illegal lexeme "' + s + '" for mode "' + (A.scope || "<unnamed>") + '"');
                            throw e.mode = A,
                            e
                        }
                        if ("end" === o.type) {
                            const e = m(o);
                            if (e !== le)
                                return e
                        }
                        if ("illegal" === o.type && "" === s)
                            return 1;
                        if (M > 1e5 && M > 3 * o.index) {
                            throw new Error("potential infinite loop, way more iterations than matches")
                        }
                        return _ += s,
                            s.length
                    }
                    const x = k(e);
                    if (!x)
                        throw J(s.replace("{}", e)),
                        new Error('Unknown language: "' + e + '"');
                    const E = re(x);
                    let S = ""
                        , A = o || E;
                    const O = {}
                        , T = new c.__emitter(c);
                    !function () {
                        const e = [];
                        for (let t = A; t !== x; t = t.parent)
                            t.scope && e.unshift(t.scope);
                        e.forEach((e => T.openNode(e)))
                    }();
                    let _ = ""
                        , N = 0
                        , j = 0
                        , M = 0
                        , C = !1;
                    try {
                        for (A.matcher.considerAll(); ;) {
                            M++,
                                C ? C = !1 : A.matcher.considerAll(),
                                A.matcher.lastIndex = j;
                            const e = A.matcher.exec(t);
                            if (!e)
                                break;
                            const n = w(t.substring(j, e.index), e);
                            j = e.index + n
                        }
                        return w(t.substring(j)),
                            T.closeAllNodes(),
                            T.finalize(),
                            S = T.toHTML(),
                        {
                            language: e,
                            value: S,
                            relevance: N,
                            illegal: !1,
                            _emitter: T,
                            _top: A
                        }
                    } catch (n) {
                        if (n.message && n.message.includes("Illegal"))
                            return {
                                language: e,
                                value: ae(t),
                                illegal: !0,
                                relevance: 0,
                                _illegalBy: {
                                    message: n.message,
                                    index: j,
                                    context: t.slice(j - 100, j + 100),
                                    mode: n.mode,
                                    resultSoFar: S
                                },
                                _emitter: T
                            };
                        if (a)
                            return {
                                language: e,
                                value: ae(t),
                                illegal: !1,
                                relevance: 0,
                                errorRaised: n,
                                _emitter: T,
                                _top: A
                            };
                        throw n
                    }
                }
                function v(e, t) {
                    t = t || c.languages || Object.keys(n);
                    const r = function (e) {
                        const t = {
                            value: ae(e),
                            illegal: !1,
                            relevance: 0,
                            _top: l,
                            _emitter: new c.__emitter(c)
                        };
                        return t._emitter.addText(e),
                            t
                    }(e)
                        , i = t.filter(k).filter(A).map((t => y(t, e, !1)));
                    i.unshift(r);
                    const o = i.sort(((e, t) => {
                        if (e.relevance !== t.relevance)
                            return t.relevance - e.relevance;
                        if (e.language && t.language) {
                            if (k(e.language).supersetOf === t.language)
                                return 1;
                            if (k(t.language).supersetOf === e.language)
                                return -1
                        }
                        return 0
                    }
                    ))
                        , [a, s] = o
                        , u = a;
                    return u.secondBest = s,
                        u
                }
                function w(e) {
                    let t = null;
                    const n = function (e) {
                        let t = e.className + " ";
                        t += e.parentNode ? e.parentNode.className : "";
                        const n = c.languageDetectRe.exec(t);
                        if (n) {
                            const t = k(n[1]);
                            return t || (Q(s.replace("{}", n[1])),
                                Q("Falling back to no-highlight mode for this block.", e)),
                                t ? n[1] : "no-highlight"
                        }
                        return t.split(/\s+/).find((e => d(e) || k(e)))
                    }(e);
                    if (d(n))
                        return;
                    if (O("before:highlightElement", {
                        el: e,
                        language: n
                    }),
                        e.children.length > 0 && (c.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
                            console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
                            console.warn("The element with unescaped HTML:"),
                            console.warn(e)),
                            c.throwUnescapedHTML)) {
                        throw new oe("One of your code blocks includes unescaped HTML.", e.innerHTML)
                    }
                    t = e;
                    const r = t.textContent
                        , o = n ? b(r, {
                            language: n,
                            ignoreIllegals: !0
                        }) : v(r);
                    e.innerHTML = o.value,
                        function (e, t, n) {
                            const r = t && i[t] || n;
                            e.classList.add("hljs"),
                                e.classList.add(`language-${r}`)
                        }(e, n, o.language),
                        e.result = {
                            language: o.language,
                            re: o.relevance,
                            relevance: o.relevance
                        },
                        o.secondBest && (e.secondBest = {
                            language: o.secondBest.language,
                            relevance: o.secondBest.relevance
                        }),
                        O("after:highlightElement", {
                            el: e,
                            result: o,
                            text: r
                        })
                }
                let x = !1;
                function E() {
                    if ("loading" === document.readyState)
                        return void (x = !0);
                    document.querySelectorAll(c.cssSelector).forEach(w)
                }
                function k(e) {
                    return e = (e || "").toLowerCase(),
                        n[e] || n[i[e]]
                }
                function S(e, { languageName: t }) {
                    "string" == typeof e && (e = [e]),
                        e.forEach((e => {
                            i[e.toLowerCase()] = t
                        }
                        ))
                }
                function A(e) {
                    const t = k(e);
                    return t && !t.disableAutodetect
                }
                function O(e, t) {
                    const n = e;
                    o.forEach((function (e) {
                        e[n] && e[n](t)
                    }
                    ))
                }
                "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", (function () {
                    x && E()
                }
                ), !1),
                    Object.assign(e, {
                        highlight: b,
                        highlightAuto: v,
                        highlightAll: E,
                        highlightElement: w,
                        highlightBlock: function (e) {
                            return Y("10.7.0", "highlightBlock will be removed entirely in v12.0"),
                                Y("10.7.0", "Please use highlightElement now."),
                                w(e)
                        },
                        configure: function (e) {
                            c = se(c, e)
                        },
                        initHighlighting: () => {
                            E(),
                                Y("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
                        }
                        ,
                        initHighlightingOnLoad: function () {
                            E(),
                                Y("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
                        },
                        registerLanguage: function (t, r) {
                            let i = null;
                            try {
                                i = r(e)
                            } catch (e) {
                                if (J("Language definition for '{}' could not be registered.".replace("{}", t)),
                                    !a)
                                    throw e;
                                J(e),
                                    i = l
                            }
                            i.name || (i.name = t),
                                n[t] = i,
                                i.rawDefinition = r.bind(null, e),
                                i.aliases && S(i.aliases, {
                                    languageName: t
                                })
                        },
                        unregisterLanguage: function (e) {
                            delete n[e];
                            for (const t of Object.keys(i))
                                i[t] === e && delete i[t]
                        },
                        listLanguages: function () {
                            return Object.keys(n)
                        },
                        getLanguage: k,
                        registerAliases: S,
                        autoDetection: A,
                        inherit: se,
                        addPlugin: function (e) {
                            !function (e) {
                                e["before:highlightBlock"] && !e["before:highlightElement"] && (e["before:highlightElement"] = t => {
                                    e["before:highlightBlock"](Object.assign({
                                        block: t.el
                                    }, t))
                                }
                                ),
                                    e["after:highlightBlock"] && !e["after:highlightElement"] && (e["after:highlightElement"] = t => {
                                        e["after:highlightBlock"](Object.assign({
                                            block: t.el
                                        }, t))
                                    }
                                    )
                            }(e),
                                o.push(e)
                        }
                    }),
                    e.debugMode = function () {
                        a = !1
                    }
                    ,
                    e.safeMode = function () {
                        a = !0
                    }
                    ,
                    e.versionString = "11.6.0",
                    e.regex = {
                        concat: g,
                        lookahead: f,
                        either: m,
                        optional: h,
                        anyNumberOfTimes: p
                    };
                for (const e in P)
                    "object" == typeof P[e] && t.exports(P[e]);
                return Object.assign(e, P),
                    e
            }({});
            e.exports = ce,
                ce.HighlightJS = ce,
                ce.default = ce
        }
    },
        t = {};
    function n(r) {
        var i = t[r];
        if (void 0 !== i)
            return i.exports;
        var o = t[r] = {
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
            o.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }),
            t
    },
        n.d = (e, t) => {
            for (var r in t)
                n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        },
        n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        (() => {
            "use strict";
            var e = n(775), t = n.n(e);
            function r(e) {
                const t = e.regex
                    , n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u)
                    , r = {
                        className: "symbol",
                        begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
                    }
                    , i = {
                        begin: /\s/,
                        contains: [{
                            className: "keyword",
                            begin: /#?[a-z_][a-z1-9_-]+/,
                            illegal: /\n/
                        }]
                    }
                    , o = e.inherit(i, {
                        begin: /\(/,
                        end: /\)/
                    })
                    , a = e.inherit(e.APOS_STRING_MODE, {
                        className: "string"
                    })
                    , s = e.inherit(e.QUOTE_STRING_MODE, {
                        className: "string"
                    })
                    , l = {
                        endsWithParent: !0,
                        illegal: /</,
                        relevance: 0,
                        contains: [{
                            className: "attr",
                            begin: /[\p{L}0-9._:-]+/u,
                            relevance: 0
                        }, {
                            begin: /=\s*/,
                            relevance: 0,
                            contains: [{
                                className: "string",
                                endsParent: !0,
                                variants: [{
                                    begin: /"/,
                                    end: /"/,
                                    contains: [r]
                                }, {
                                    begin: /'/,
                                    end: /'/,
                                    contains: [r]
                                }, {
                                    begin: /[^\s"'=<>`]+/
                                }]
                            }]
                        }]
                    };
                return {
                    name: "HTML, XML",
                    aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
                    case_insensitive: !0,
                    unicodeRegex: !0,
                    contains: [{
                        className: "meta",
                        begin: /<![a-z]/,
                        end: />/,
                        relevance: 10,
                        contains: [i, s, a, o, {
                            begin: /\[/,
                            end: /\]/,
                            contains: [{
                                className: "meta",
                                begin: /<![a-z]/,
                                end: />/,
                                contains: [i, o, s, a]
                            }]
                        }]
                    }, e.COMMENT(/<!--/, /-->/, {
                        relevance: 10
                    }), {
                        begin: /<!\[CDATA\[/,
                        end: /\]\]>/,
                        relevance: 10
                    }, r, {
                        className: "meta",
                        end: /\?>/,
                        variants: [{
                            begin: /<\?xml/,
                            relevance: 10,
                            contains: [s]
                        }, {
                            begin: /<\?[a-z][a-z0-9]+/
                        }]
                    }, {
                        className: "tag",
                        begin: /<style(?=\s|>)/,
                        end: />/,
                        keywords: {
                            name: "style"
                        },
                        contains: [l],
                        starts: {
                            end: /<\/style>/,
                            returnEnd: !0,
                            subLanguage: ["css", "xml"]
                        }
                    }, {
                        className: "tag",
                        begin: /<script(?=\s|>)/,
                        end: />/,
                        keywords: {
                            name: "script"
                        },
                        contains: [l],
                        starts: {
                            end: /<\/script>/,
                            returnEnd: !0,
                            subLanguage: ["javascript", "handlebars", "xml"]
                        }
                    }, {
                        className: "tag",
                        begin: /<>|<\/>/
                    }, {
                        className: "tag",
                        begin: t.concat(/</, t.lookahead(t.concat(n, t.either(/\/>/, />/, /\s/)))),
                        end: /\/?>/,
                        contains: [{
                            className: "name",
                            begin: n,
                            relevance: 0,
                            starts: l
                        }]
                    }, {
                        className: "tag",
                        begin: t.concat(/<\//, t.lookahead(t.concat(n, />/))),
                        contains: [{
                            className: "name",
                            begin: n,
                            relevance: 0
                        }, {
                            begin: />/,
                            relevance: 0,
                            endsParent: !0
                        }]
                    }]
                }
            }
            const i = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
                o = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
                a = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
                s = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
                l = ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse();
            function c(e) {
                const t = e.regex
                    , n = (e => ({
                        IMPORTANT: {
                            scope: "meta",
                            begin: "!important"
                        },
                        BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
                        HEXCOLOR: {
                            scope: "number",
                            begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
                        },
                        FUNCTION_DISPATCH: {
                            className: "built_in",
                            begin: /[\w-]+(?=\()/
                        },
                        ATTRIBUTE_SELECTOR_MODE: {
                            scope: "selector-attr",
                            begin: /\[/,
                            end: /\]/,
                            illegal: "$",
                            contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                        },
                        CSS_NUMBER_MODE: {
                            scope: "number",
                            begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                            relevance: 0
                        },
                        CSS_VARIABLE: {
                            className: "attr",
                            begin: /--[A-Za-z][A-Za-z0-9_-]*/
                        }
                    }))(e)
                    , r = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
                return {
                    name: "CSS",
                    case_insensitive: !0,
                    illegal: /[=|'\$]/,
                    keywords: {
                        keyframePosition: "from to"
                    },
                    classNameAliases: {
                        keyframePosition: "selector-tag"
                    },
                    contains: [n.BLOCK_COMMENT, {
                        begin: /-(webkit|moz|ms|o)-(?=[a-z])/
                    }, n.CSS_NUMBER_MODE, {
                        className: "selector-id",
                        begin: /#[A-Za-z0-9_-]+/,
                        relevance: 0
                    }, {
                        className: "selector-class",
                        begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
                        relevance: 0
                    }, n.ATTRIBUTE_SELECTOR_MODE, {
                        className: "selector-pseudo",
                        variants: [{
                            begin: ":(" + a.join("|") + ")"
                        }, {
                            begin: ":(:)?(" + s.join("|") + ")"
                        }]
                    }, n.CSS_VARIABLE, {
                        className: "attribute",
                        begin: "\\b(" + l.join("|") + ")\\b"
                    }, {
                        begin: /:/,
                        end: /[;}{]/,
                        contains: [n.BLOCK_COMMENT, n.HEXCOLOR, n.IMPORTANT, n.CSS_NUMBER_MODE, ...r, {
                            begin: /(url|data-uri)\(/,
                            end: /\)/,
                            relevance: 0,
                            keywords: {
                                built_in: "url data-uri"
                            },
                            contains: [...r, {
                                className: "string",
                                begin: /[^)]/,
                                endsWithParent: !0,
                                excludeEnd: !0
                            }]
                        }, n.FUNCTION_DISPATCH]
                    }, {
                        begin: t.lookahead(/@/),
                        end: "[{;]",
                        relevance: 0,
                        illegal: /:/,
                        contains: [{
                            className: "keyword",
                            begin: /@-?\w[\w]*(-\w+)*/
                        }, {
                            begin: /\s/,
                            endsWithParent: !0,
                            excludeEnd: !0,
                            relevance: 0,
                            keywords: {
                                $pattern: /[a-z-]+/,
                                keyword: "and or not only",
                                attribute: o.join(" ")
                            },
                            contains: [{
                                begin: /[a-z-]+(?=:)/,
                                className: "attribute"
                            }, ...r, n.CSS_NUMBER_MODE]
                        }]
                    }, {
                        className: "selector-tag",
                        begin: "\\b(" + i.join("|") + ")\\b"
                    }]
                }
            }
            const u = "[A-Za-z$_][0-9A-Za-z$_]*",
                d = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
                f = ["true", "false", "null", "undefined", "NaN", "Infinity"],
                p = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
                h = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
                g = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
                m = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
                b = [].concat(g, p, h);
            function y(e) {
                const t = e.regex
                    , n = u
                    , r = "<>"
                    , i = "</>"
                    , o = {
                        begin: /<[A-Za-z0-9\\._:-]+/,
                        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                        isTrulyOpeningTag: (e, t) => {
                            const n = e[0].length + e.index
                                , r = e.input[n];
                            if ("<" === r || "," === r)
                                return void t.ignoreMatch();
                            let i;
                            ">" === r && (((e, { after: t }) => {
                                const n = "</" + e[0].slice(1);
                                return -1 !== e.input.indexOf(n, t)
                            }
                            )(e, {
                                after: n
                            }) || t.ignoreMatch());
                            (i = e.input.substring(n).match(/^\s+extends\s+/)) && 0 === i.index && t.ignoreMatch()
                        }
                    }
                    , a = {
                        $pattern: u,
                        keyword: d,
                        literal: f,
                        built_in: b,
                        "variable.language": m
                    }
                    , s = "\\.([0-9](_?[0-9])*)"
                    , l = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*"
                    , c = {
                        className: "number",
                        variants: [{
                            begin: `(\\b(${l})((${s})|\\.)?|(${s}))[eE][+-]?([0-9](_?[0-9])*)\\b`
                        }, {
                            begin: `\\b(${l})\\b((${s})\\b|\\.)?|(${s})\\b`
                        }, {
                            begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                        }, {
                            begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                        }, {
                            begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                        }, {
                            begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"
                        }, {
                            begin: "\\b0[0-7]+n?\\b"
                        }],
                        relevance: 0
                    }
                    , y = {
                        className: "subst",
                        begin: "\\$\\{",
                        end: "\\}",
                        keywords: a,
                        contains: []
                    }
                    , v = {
                        begin: "html`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [e.BACKSLASH_ESCAPE, y],
                            subLanguage: "xml"
                        }
                    }
                    , w = {
                        begin: "css`",
                        end: "",
                        starts: {
                            end: "`",
                            returnEnd: !1,
                            contains: [e.BACKSLASH_ESCAPE, y],
                            subLanguage: "css"
                        }
                    }
                    , x = {
                        className: "string",
                        begin: "`",
                        end: "`",
                        contains: [e.BACKSLASH_ESCAPE, y]
                    }
                    , E = {
                        className: "comment",
                        variants: [e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                            relevance: 0,
                            contains: [{
                                begin: "(?=@[A-Za-z]+)",
                                relevance: 0,
                                contains: [{
                                    className: "doctag",
                                    begin: "@[A-Za-z]+"
                                }, {
                                    className: "type",
                                    begin: "\\{",
                                    end: "\\}",
                                    excludeEnd: !0,
                                    excludeBegin: !0,
                                    relevance: 0
                                }, {
                                    className: "variable",
                                    begin: n + "(?=\\s*(-)|$)",
                                    endsParent: !0,
                                    relevance: 0
                                }, {
                                    begin: /(?=[^\n])\s/,
                                    relevance: 0
                                }]
                            }]
                        }), e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]
                    }
                    , k = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, v, w, x, c];
                y.contains = k.concat({
                    begin: /\{/,
                    end: /\}/,
                    keywords: a,
                    contains: ["self"].concat(k)
                });
                const S = [].concat(E, y.contains)
                    , A = S.concat([{
                        begin: /\(/,
                        end: /\)/,
                        keywords: a,
                        contains: ["self"].concat(S)
                    }])
                    , O = {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: a,
                        contains: A
                    }
                    , T = {
                        variants: [{
                            match: [/class/, /\s+/, n, /\s+/, /extends/, /\s+/, t.concat(n, "(", t.concat(/\./, n), ")*")],
                            scope: {
                                1: "keyword",
                                3: "title.class",
                                5: "keyword",
                                7: "title.class.inherited"
                            }
                        }, {
                            match: [/class/, /\s+/, n],
                            scope: {
                                1: "keyword",
                                3: "title.class"
                            }
                        }]
                    }
                    , _ = {
                        relevance: 0,
                        match: t.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
                        className: "title.class",
                        keywords: {
                            _: [...p, ...h]
                        }
                    }
                    , N = {
                        variants: [{
                            match: [/function/, /\s+/, n, /(?=\s*\()/]
                        }, {
                            match: [/function/, /\s*(?=\()/]
                        }],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        label: "func.def",
                        contains: [O],
                        illegal: /%/
                    };
                const j = {
                    match: t.concat(/\b/, (M = [...g, "super"],
                        t.concat("(?!", M.join("|"), ")")), n, t.lookahead(/\(/)),
                    className: "title.function",
                    relevance: 0
                };
                var M;
                const C = {
                    begin: t.concat(/\./, t.lookahead(t.concat(n, /(?![0-9A-Za-z$_(])/))),
                    end: n,
                    excludeBegin: !0,
                    keywords: "prototype",
                    className: "property",
                    relevance: 0
                }
                    , R = {
                        match: [/get|set/, /\s+/, n, /(?=\()/],
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [{
                            begin: /\(\)/
                        }, O]
                    }
                    , I = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>"
                    , L = {
                        match: [/const|var|let/, /\s+/, n, /\s*/, /=\s*/, /(async\s*)?/, t.lookahead(I)],
                        keywords: "async",
                        className: {
                            1: "keyword",
                            3: "title.function"
                        },
                        contains: [O]
                    };
                return {
                    name: "Javascript",
                    aliases: ["js", "jsx", "mjs", "cjs"],
                    keywords: a,
                    exports: {
                        PARAMS_CONTAINS: A,
                        CLASS_REFERENCE: _
                    },
                    illegal: /#(?![$_A-z])/,
                    contains: [e.SHEBANG({
                        label: "shebang",
                        binary: "node",
                        relevance: 5
                    }), {
                        label: "use_strict",
                        className: "meta",
                        relevance: 10,
                        begin: /^\s*['"]use (strict|asm)['"]/
                    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, v, w, x, E, c, _, {
                        className: "attr",
                        begin: n + t.lookahead(":"),
                        relevance: 0
                    }, L, {
                        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                        keywords: "return throw case",
                        relevance: 0,
                        contains: [E, e.REGEXP_MODE, {
                            className: "function",
                            begin: I,
                            returnBegin: !0,
                            end: "\\s*=>",
                            contains: [{
                                className: "params",
                                variants: [{
                                    begin: e.UNDERSCORE_IDENT_RE,
                                    relevance: 0
                                }, {
                                    className: null,
                                    begin: /\(\s*\)/,
                                    skip: !0
                                }, {
                                    begin: /\(/,
                                    end: /\)/,
                                    excludeBegin: !0,
                                    excludeEnd: !0,
                                    keywords: a,
                                    contains: A
                                }]
                            }]
                        }, {
                                begin: /,/,
                                relevance: 0
                            }, {
                                match: /\s+/,
                                relevance: 0
                            }, {
                                variants: [{
                                    begin: r,
                                    end: i
                                }, {
                                    match: /<[A-Za-z0-9\\._:-]+\s*\/>/
                                }, {
                                    begin: o.begin,
                                    "on:begin": o.isTrulyOpeningTag,
                                    end: o.end
                                }],
                                subLanguage: "xml",
                                contains: [{
                                    begin: o.begin,
                                    end: o.end,
                                    skip: !0,
                                    contains: ["self"]
                                }]
                            }]
                    }, N, {
                        beginKeywords: "while if switch catch for"
                    }, {
                        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                        returnBegin: !0,
                        label: "func.def",
                        contains: [O, e.inherit(e.TITLE_MODE, {
                            begin: n,
                            className: "title.function"
                        })]
                    }, {
                        match: /\.\.\./,
                        relevance: 0
                    }, C, {
                        match: "\\$" + n,
                        relevance: 0
                    }, {
                        match: [/\bconstructor(?=\s*\()/],
                        className: {
                            1: "title.function"
                        },
                        contains: [O]
                    }, j, {
                        relevance: 0,
                        match: /\b[A-Z][A-Z_0-9]+\b/,
                        className: "variable.constant"
                    }, T, R, {
                        match: /\$[(.]/
                    }]
                }
            }
            function v(e) {
                const t = e.regex
                    , n = {}
                    , r = {
                        begin: /\$\{/,
                        end: /\}/,
                        contains: ["self", {
                            begin: /:-/,
                            contains: [n]
                        }]
                    };
                Object.assign(n, {
                    className: "variable",
                    variants: [{
                        begin: t.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])")
                    }, r]
                });
                const i = {
                    className: "subst",
                    begin: /\$\(/,
                    end: /\)/,
                    contains: [e.BACKSLASH_ESCAPE]
                }
                    , o = {
                        begin: /<<-?\s*(?=\w+)/,
                        starts: {
                            contains: [e.END_SAME_AS_BEGIN({
                                begin: /(\w+)/,
                                end: /(\w+)/,
                                className: "string"
                            })]
                        }
                    }
                    , a = {
                        className: "string",
                        begin: /"/,
                        end: /"/,
                        contains: [e.BACKSLASH_ESCAPE, n, i]
                    };
                i.contains.push(a);
                const s = {
                    begin: /\$\(\(/,
                    end: /\)\)/,
                    contains: [{
                        begin: /\d+#[0-9a-f]+/,
                        className: "number"
                    }, e.NUMBER_MODE, n]
                }
                    , l = e.SHEBANG({
                        binary: `(${["fish", "bash", "zsh", "sh", "csh", "ksh", "tcsh", "dash", "scsh"].join("|")})`,
                        relevance: 10
                    })
                    , c = {
                        className: "function",
                        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                        returnBegin: !0,
                        contains: [e.inherit(e.TITLE_MODE, {
                            begin: /\w[\w\d_]*/
                        })],
                        relevance: 0
                    };
                return {
                    name: "Bash",
                    aliases: ["sh"],
                    keywords: {
                        $pattern: /\b[a-z][a-z0-9._-]+\b/,
                        keyword: ["if", "then", "else", "elif", "fi", "for", "while", "in", "do", "done", "case", "esac", "function"],
                        literal: ["true", "false"],
                        built_in: ["break", "cd", "continue", "eval", "exec", "exit", "export", "getopts", "hash", "pwd", "readonly", "return", "shift", "test", "times", "trap", "umask", "unset", "alias", "bind", "builtin", "caller", "command", "declare", "echo", "enable", "help", "let", "local", "logout", "mapfile", "printf", "read", "readarray", "source", "type", "typeset", "ulimit", "unalias", "set", "shopt", "autoload", "bg", "bindkey", "bye", "cap", "chdir", "clone", "comparguments", "compcall", "compctl", "compdescribe", "compfiles", "compgroups", "compquote", "comptags", "comptry", "compvalues", "dirs", "disable", "disown", "echotc", "echoti", "emulate", "fc", "fg", "float", "functions", "getcap", "getln", "history", "integer", "jobs", "kill", "limit", "log", "noglob", "popd", "print", "pushd", "pushln", "rehash", "sched", "setcap", "setopt", "stat", "suspend", "ttyctl", "unfunction", "unhash", "unlimit", "unsetopt", "vared", "wait", "whence", "where", "which", "zcompile", "zformat", "zftp", "zle", "zmodload", "zparseopts", "zprof", "zpty", "zregexparse", "zsocket", "zstyle", "ztcp", "chcon", "chgrp", "chown", "chmod", "cp", "dd", "df", "dir", "dircolors", "ln", "ls", "mkdir", "mkfifo", "mknod", "mktemp", "mv", "realpath", "rm", "rmdir", "shred", "sync", "touch", "truncate", "vdir", "b2sum", "base32", "base64", "cat", "cksum", "comm", "csplit", "cut", "expand", "fmt", "fold", "head", "join", "md5sum", "nl", "numfmt", "od", "paste", "ptx", "pr", "sha1sum", "sha224sum", "sha256sum", "sha384sum", "sha512sum", "shuf", "sort", "split", "sum", "tac", "tail", "tr", "tsort", "unexpand", "uniq", "wc", "arch", "basename", "chroot", "date", "dirname", "du", "echo", "env", "expr", "factor", "groups", "hostid", "id", "link", "logname", "nice", "nohup", "nproc", "pathchk", "pinky", "printenv", "printf", "pwd", "readlink", "runcon", "seq", "sleep", "stat", "stdbuf", "stty", "tee", "test", "timeout", "tty", "uname", "unlink", "uptime", "users", "who", "whoami", "yes"]
                    },
                    contains: [l, e.SHEBANG(), c, s, e.HASH_COMMENT_MODE, o, {
                        match: /(\/[a-z._-]+)+/
                    }, a, {
                            className: "",
                            begin: /\\"/
                        }, {
                            className: "string",
                            begin: /'/,
                            end: /'/
                        }, n]
                }
            }
            const w = (e, t) => e.map(t).join(""),
                x = function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return e ? "function" == typeof t ? t() : t : "function" == typeof n ? n() : n
                },
                E = e => {
                    var t;
                    return (null === (t = document.cookie.split(";").map((e => {
                        const t = e.trim().split("=");
                        return {
                            name: t[0],
                            value: t[1]
                        }
                    }
                    )).find((t => t.name === e))) || void 0 === t ? void 0 : t.value) || ""
                },
                k = function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 31536e3;
                    const r = new Date;
                    r.setTime(r.getTime() + 1e3 * n),
                        document.cookie = `${e}=${t}; expires=${r.toUTCString()}; path=/`
                };
            const S = n(390),
                A = (e, t) => {
                    S.registerLanguage(e, t)
                },
                O = window.mdui.$,
                T = () => {
                    A("xml", r),
                        A("css", c),
                        A("javascript", y),
                        A("bash", v),
                        S.highlightAll()
                },
                _ = e => {
                    e.find(".viewsource").on("click", (function () {
                        O(this).parents(".example").eq(0).toggleClass("example-showcode")
                    }
                    ))
                },
                N = e => {
                    const t = t => {
                        const n = e.attr("class").split(" ");
                        Object.keys(t).forEach((r => {
                            const i = t[r];
                            n.forEach((t => {
                                t.startsWith(`mdui-theme-${r}-`) && e.removeClass(t)
                            }
                            )),
                                e.addClass(`mdui-theme-${r}-${i}`),
                                k(`docs-theme-${r}`, i),
                                O(`input[name="theme-${r}"][value="${i}"]`).prop("checked", !0)
                        }
                        ))
                    }
                        ;
                    ["primary", "accent", "layout"].forEach((n => {
                        e.on("change", `input[name="theme-${n}"]`, (function () {
                            t({
                                [n]: O(this).val()
                            })
                        }
                        ))
                    }
                    )),
                        e.on("cancel.mdui.dialog", "#dialog-docs-theme", (() => {
                            t({
                                primary: "indigo",
                                accent: "pink",
                                layout: "auto"
                            })
                        }
                        ))
                }
                ;
            //114514
            O((() => {
                const e = O("#p-d");
                e.length && (T(),
                    (e => {
                        e.find(".appbar .mdui-toolbar-spacer").on("click", (() => {
                            window.scrollTo({
                                top: 0
                            })
                        }
                        ))
                    }
                    )(e),
                    t().addTheme("gray", {
                        bg: "#BCBEC0",
                        fg: "rgba(255, 255, 255, 1)",
                        size: 12,
                        fontweight: "normal"
                    }),
                    _(e),
                    (() => {
                        const e = E("docs-theme-primary") || "indigo"
                            , t = E("docs-theme-accent") || "pink"
                            , n = E("docs-theme-layout") || "auto"
                            , r = [{
                                name: "Amber",
                                value: "amber"
                            }, {
                                name: "Blue",
                                value: "blue"
                            }, {
                                name: "Blue Grey",
                                value: "blue-grey"
                            }, {
                                name: "Brown",
                                value: "brown"
                            }, {
                                name: "Cyan",
                                value: "cyan"
                            }, {
                                name: "Deep Orange",
                                value: "deep-orange"
                            }, {
                                name: "Deep Purple",
                                value: "deep-purple"
                            }, {
                                name: "Green",
                                value: "green"
                            }, {
                                name: "Grey",
                                value: "grey"
                            }, {
                                name: "Indigo",
                                value: "indigo"
                            }, {
                                name: "Light Blue",
                                value: "light-blue"
                            }, {
                                name: "Light Green",
                                value: "light-green"
                            }, {
                                name: "Lime",
                                value: "lime"
                            }, {
                                name: "Orange",
                                value: "orange"
                            }, {
                                name: "Pink",
                                value: "pink"
                            }, {
                                name: "Purple",
                                value: "purple"
                            }, {
                                name: "Red",
                                value: "red"
                            }, {
                                name: "Teal",
                                value: "teal"
                            }, {
                                name: "Yellow",
                                value: "yellow"
                            }]
                            , i = [{
                                name: "Amber",
                                value: "amber"
                            }, {
                                name: "Blue",
                                value: "blue"
                            }, {
                                name: "Cyan",
                                value: "cyan"
                            }, {
                                name: "Deep Orange",
                                value: "deep-orange"
                            }, {
                                name: "Deep Purple",
                                value: "deep-purple"
                            }, {
                                name: "Green",
                                value: "green"
                            }, {
                                name: "Indigo",
                                value: "indigo"
                            }, {
                                name: "Light Blue",
                                value: "light-blue"
                            }, {
                                name: "Light Green",
                                value: "light-green"
                            }, {
                                name: "Lime",
                                value: "lime"
                            }, {
                                name: "Orange",
                                value: "orange"
                            }, {
                                name: "Pink",
                                value: "pink"
                            }, {
                                name: "Purple",
                                value: "purple"
                            }, {
                                name: "Red",
                                value: "red"
                            }, {
                                name: "Teal",
                                value: "teal"
                            }, {
                                name: "Yellow",
                                value: "yellow"
                            }]
                            , o = `<div class="mdui-dialog" id="dialog-docs-theme">\n  <div class="mdui-dialog-title">设置文档主题</div>\n  <div class="mdui-dialog-content">\n\n    <p class="mdui-typo-title">主题色</p>\n    <div class="mdui-row-xs-1 mdui-row-sm-2 mdui-row-md-3">\n      ${w([{
                                name: "Auto",
                                value: "auto"
                            }, {
                                name: "Light",
                                value: "light"
                            }, {
                                name: "Dark",
                                value: "dark"
                            }], (e => `<div class="mdui-col">\n            <label class="mdui-radio mdui-m-b-1">\n              <input\n                type="radio"\n                name="theme-layout"\n                value="${e.value}"\n                ${x(n === e.value, "checked")}\n              />\n              <i class="mdui-radio-icon"></i>\n              ${e.name}\n            </label>\n          </div>`))}\n    </div>\n\n    <p class="mdui-typo-title mdui-text-color-theme">主色</p>\n    <form class="mdui-row-xs-1 mdui-row-sm-2 mdui-row-md-3">\n      ${w(r, (t => `<div class="mdui-col mdui-text-color-${t.value}">\n            <label class="mdui-radio mdui-m-b-1">\n              <input\n                type="radio"\n                name="theme-primary"\n                value="${t.value}"\n                ${x(e === t.value, "checked")}\n              />\n              <i class="mdui-radio-icon"></i>\n              ${t.name}\n            </label>\n          </div>`))}\n    </form>\n\n    <p class="mdui-typo-title mdui-text-color-theme-accent">强调色</p>\n    <form class="mdui-row-xs-1 mdui-row-sm-2 mdui-row-md-3">\n      ${w(i, (e => `<div class="mdui-col mdui-text-color-${e.value}">\n            <label class="mdui-radio mdui-m-b-1">\n              <input\n                type="radio"\n                name="theme-accent"\n                value="${e.value}"\n                ${x(t === e.value, "checked")}\n              />\n              <i class="mdui-radio-icon"></i>\n              ${e.name}\n            </label>\n          </div>`))}\n    </form>\n\n  </div>\n  <div class="mdui-divider"></div>\n  <div class="mdui-dialog-actions">\n    <button class="mdui-btn mdui-ripple mdui-float-left" mdui-dialog-cancel>恢复默认主题</button>\n    <button class="mdui-btn mdui-ripple" mdui-dialog-confirm>ok</button>\n  </div>\n</div>`;
                        O(".footer-nav").after(o)
                    }
                    )(),
                    N(e),
                    (e => {
                        const t = e.find("#main-drawer")
                            , n = t.find(".mdui-list-item-active");
                        if (!n.length)
                            return;
                        const r = n.offset().top
                            , i = t.innerHeight();
                        (r - 64 < 0 || r - 64 + 238 > i) && (t[0].scrollTop = r + t[0].scrollTop - i / 2)
                    }
                    )(e))
            }
            ));
            n(326);
        }
        )()
}
)();
