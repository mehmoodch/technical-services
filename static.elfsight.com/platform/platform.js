/*!
 * 
 * 	elfsight.com
 * 	
 * 	Copyright (c) 2025 Elfsight, LLC. ALL RIGHTS RESERVED
 * 
 */
!function(e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var o = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(o.exports, o, o.exports, t),
        o.loaded = !0,
        o.exports
    }
    var n = {};
    return t.m = e,
    t.c = n,
    t.p = "/dev/",
    t(0)
}([function(e, t, n) {
    n(1),
    n(2)(window),
    n(64)
}
, function(e, t, n) {
    e.exports = n.p + "index.html"
}
, function(e, t, n) {
    function i(e) {
        if (!e.eapps) {
            var t = {}
              , n = new r
              , i = new o(e,e.document.body,n)
              , s = new a;
            t.platform = i.facade(),
            t.apps = n.facade(),
            t.analytics = s.facade(),
            e.eapps = t
        }
    }
    n(3);
    var o = n(52)
      , r = n(59)
      , a = n(62);
    e.exports = i
}
, function(e, t, n) {
    n(4),
    n(42),
    n(49)
}
, function(e, t, n) {
    var i = n(5);
    i(i.S + i.F, "Object", {
        assign: n(26)
    })
}
, function(e, t, n) {
    var i = n(6)
      , o = n(7)
      , r = n(8)
      , a = n(18)
      , s = n(24)
      , c = "prototype"
      , l = function e(t, n, l) {
        var p, u, f, d, g = t & e.F, h = t & e.G, v = t & e.S, b = t & e.P, w = t & e.B, m = h ? i : v ? i[n] || (i[n] = {}) : (i[n] || {})[c], y = h ? o : o[n] || (o[n] = {}), x = y[c] || (y[c] = {});
        h && (l = n);
        for (p in l)
            u = !g && m && void 0 !== m[p],
            f = (u ? m : l)[p],
            d = w && u ? s(f, i) : b && "function" == typeof f ? s(Function.call, f) : f,
            m && a(m, p, f, t & e.U),
            y[p] != f && r(y, p, d),
            b && x[p] != f && (x[p] = f)
    };
    i.core = o,
    l.F = 1,
    l.G = 2,
    l.S = 4,
    l.P = 8,
    l.B = 16,
    l.W = 32,
    l.U = 64,
    l.R = 128,
    e.exports = l
}
, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}
, function(e, t) {
    var n = e.exports = {
        version: "2.6.5"
    };
    "number" == typeof __e && (__e = n)
}
, function(e, t, n) {
    var i = n(9)
      , o = n(17);
    e.exports = n(13) ? function(e, t, n) {
        return i.f(e, t, o(1, n))
    }
    : function(e, t, n) {
        return e[t] = n,
        e
    }
}
, function(e, t, n) {
    var i = n(10)
      , o = n(12)
      , r = n(16)
      , a = Object.defineProperty;
    t.f = n(13) ? Object.defineProperty : function(e, t, n) {
        if (i(e),
        t = r(t, !0),
        i(n),
        o)
            try {
                return a(e, t, n)
            } catch (e) {}
        if ("get"in n || "set"in n)
            throw TypeError("Accessors not supported!");
        return "value"in n && (e[t] = n.value),
        e
    }
}
, function(e, t, n) {
    var i = n(11);
    e.exports = function(e) {
        if (!i(e))
            throw TypeError(e + " is not an object!");
        return e
    }
}
, function(e, t) {
    function n(e) {
        "@babel/helpers - typeof";
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    e.exports = function(e) {
        return "object" === n(e) ? null !== e : "function" == typeof e
    }
}
, function(e, t, n) {
    e.exports = !n(13) && !n(14)(function() {
        return 7 != Object.defineProperty(n(15)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(e, t, n) {
    e.exports = !n(14)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}
, function(e, t, n) {
    var i = n(11)
      , o = n(6).document
      , r = i(o) && i(o.createElement);
    e.exports = function(e) {
        return r ? o.createElement(e) : {}
    }
}
, function(e, t, n) {
    var i = n(11);
    e.exports = function(e, t) {
        if (!i(e))
            return e;
        var n, o;
        if (t && "function" == typeof (n = e.toString) && !i(o = n.call(e)))
            return o;
        if ("function" == typeof (n = e.valueOf) && !i(o = n.call(e)))
            return o;
        if (!t && "function" == typeof (n = e.toString) && !i(o = n.call(e)))
            return o;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}
, function(e, t, n) {
    var i = n(6)
      , o = n(8)
      , r = n(19)
      , a = n(20)("src")
      , s = n(21)
      , c = "toString"
      , l = ("" + s).split(c);
    n(7).inspectSource = function(e) {
        return s.call(e)
    }
    ,
    (e.exports = function(e, t, n, s) {
        var c = "function" == typeof n;
        c && (r(n, "name") || o(n, "name", t)),
        e[t] !== n && (c && (r(n, a) || o(n, a, e[t] ? "" + e[t] : l.join(String(t)))),
        e === i ? e[t] = n : s ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t],
        o(e, t, n)))
    }
    )(Function.prototype, c, function() {
        return "function" == typeof this && this[a] || s.call(this)
    })
}
, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}
, function(e, t) {
    var n = 0
      , i = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
    }
}
, function(e, t, n) {
    e.exports = n(22)("native-function-to-string", Function.toString)
}
, function(e, t, n) {
    var i = n(7)
      , o = n(6)
      , r = "__core-js_shared__"
      , a = o[r] || (o[r] = {});
    (e.exports = function(e, t) {
        return a[e] || (a[e] = void 0 !== t ? t : {})
    }
    )("versions", []).push({
        version: i.version,
        mode: n(23) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}
, function(e, t) {
    e.exports = !1
}
, function(e, t, n) {
    var i = n(25);
    e.exports = function(e, t, n) {
        if (i(e),
        void 0 === t)
            return e;
        switch (n) {
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 2:
            return function(n, i) {
                return e.call(t, n, i)
            }
            ;
        case 3:
            return function(n, i, o) {
                return e.call(t, n, i, o)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}
, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
        return e
    }
}
, function(e, t, n) {
    "use strict";
    var i = n(27)
      , o = n(39)
      , r = n(40)
      , a = n(41)
      , s = n(30)
      , c = Object.assign;
    e.exports = !c || n(14)(function() {
        var e = {}
          , t = {}
          , n = Symbol()
          , i = "abcdefghijklmnopqrst";
        return e[n] = 7,
        i.split("").forEach(function(e) {
            t[e] = e
        }),
        7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != i
    }) ? function(e, t) {
        for (var n = a(e), c = arguments.length, l = 1, p = o.f, u = r.f; c > l; )
            for (var f, d = s(arguments[l++]), g = p ? i(d).concat(p(d)) : i(d), h = g.length, v = 0; h > v; )
                u.call(d, f = g[v++]) && (n[f] = d[f]);
        return n
    }
    : c
}
, function(e, t, n) {
    var i = n(28)
      , o = n(38);
    e.exports = Object.keys || function(e) {
        return i(e, o)
    }
}
, function(e, t, n) {
    var i = n(19)
      , o = n(29)
      , r = n(33)(!1)
      , a = n(37)("IE_PROTO");
    e.exports = function(e, t) {
        var n, s = o(e), c = 0, l = [];
        for (n in s)
            n != a && i(s, n) && l.push(n);
        for (; t.length > c; )
            i(s, n = t[c++]) && (~r(l, n) || l.push(n));
        return l
    }
}
, function(e, t, n) {
    var i = n(30)
      , o = n(32);
    e.exports = function(e) {
        return i(o(e))
    }
}
, function(e, t, n) {
    var i = n(31);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == i(e) ? e.split("") : Object(e)
    }
}
, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}
, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e)
            throw TypeError("Can't call method on  " + e);
        return e
    }
}
, function(e, t, n) {
    var i = n(29)
      , o = n(34)
      , r = n(36);
    e.exports = function(e) {
        return function(t, n, a) {
            var s, c = i(t), l = o(c.length), p = r(a, l);
            if (e && n != n) {
                for (; l > p; )
                    if (s = c[p++],
                    s != s)
                        return !0
            } else
                for (; l > p; p++)
                    if ((e || p in c) && c[p] === n)
                        return e || p || 0;
            return !e && -1
        }
    }
}
, function(e, t, n) {
    var i = n(35)
      , o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(i(e), 9007199254740991) : 0
    }
}
, function(e, t) {
    var n = Math.ceil
      , i = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
    }
}
, function(e, t, n) {
    var i = n(35)
      , o = Math.max
      , r = Math.min;
    e.exports = function(e, t) {
        return e = i(e),
        e < 0 ? o(e + t, 0) : r(e, t)
    }
}
, function(e, t, n) {
    var i = n(22)("keys")
      , o = n(20);
    e.exports = function(e) {
        return i[e] || (i[e] = o(e))
    }
}
, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}
, function(e, t) {
    t.f = {}.propertyIsEnumerable
}
, function(e, t, n) {
    var i = n(32);
    e.exports = function(e) {
        return Object(i(e))
    }
}
, function(e, t, n) {
    "use strict";
    var i = n(5)
      , o = n(43)(2);
    i(i.P + i.F * !n(48)([].filter, !0), "Array", {
        filter: function(e) {
            return o(this, e, arguments[1])
        }
    })
}
, function(e, t, n) {
    var i = n(24)
      , o = n(30)
      , r = n(41)
      , a = n(34)
      , s = n(44);
    e.exports = function(e, t) {
        var n = 1 == e
          , c = 2 == e
          , l = 3 == e
          , p = 4 == e
          , u = 6 == e
          , f = 5 == e || u
          , d = t || s;
        return function(t, s, g) {
            for (var h, v, b = r(t), w = o(b), m = i(s, g, 3), y = a(w.length), x = 0, C = n ? d(t, y) : c ? d(t, 0) : void 0; y > x; x++)
                if ((f || x in w) && (h = w[x],
                v = m(h, x, b),
                e))
                    if (n)
                        C[x] = v;
                    else if (v)
                        switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return h;
                        case 6:
                            return x;
                        case 2:
                            C.push(h)
                        }
                    else if (p)
                        return !1;
            return u ? -1 : l || p ? p : C
        }
    }
}
, function(e, t, n) {
    var i = n(45);
    e.exports = function(e, t) {
        return new (i(e))(t)
    }
}
, function(e, t, n) {
    var i = n(11)
      , o = n(46)
      , r = n(47)("species");
    e.exports = function(e) {
        var t;
        return o(e) && (t = e.constructor,
        "function" != typeof t || t !== Array && !o(t.prototype) || (t = void 0),
        i(t) && (t = t[r],
        null === t && (t = void 0))),
        void 0 === t ? Array : t
    }
}
, function(e, t, n) {
    var i = n(31);
    e.exports = Array.isArray || function(e) {
        return "Array" == i(e)
    }
}
, function(e, t, n) {
    var i = n(22)("wks")
      , o = n(20)
      , r = n(6).Symbol
      , a = "function" == typeof r
      , s = e.exports = function(e) {
        return i[e] || (i[e] = a && r[e] || (a ? r : o)("Symbol." + e))
    }
    ;
    s.store = i
}
, function(e, t, n) {
    "use strict";
    var i = n(14);
    e.exports = function(e, t) {
        return !!e && i(function() {
            t ? e.call(null, function() {}, 1) : e.call(null)
        })
    }
}
, function(e, t, n) {
    var i = n(5);
    i(i.P, "Function", {
        bind: n(50)
    })
}
, function(e, t, n) {
    "use strict";
    var i = n(25)
      , o = n(11)
      , r = n(51)
      , a = [].slice
      , s = {}
      , c = function(e, t, n) {
        if (!(t in s)) {
            for (var i = [], o = 0; o < t; o++)
                i[o] = "a[" + o + "]";
            s[t] = Function("F,a", "return new F(" + i.join(",") + ")")
        }
        return s[t](e, n)
    };
    e.exports = Function.bind || function(e) {
        var t = i(this)
          , n = a.call(arguments, 1)
          , s = function i() {
            var o = n.concat(a.call(arguments));
            return this instanceof i ? c(t, o.length, o) : r(t, o, e)
        };
        return o(t.prototype) && (s.prototype = t.prototype),
        s
    }
}
, function(e, t) {
    e.exports = function(e, t, n) {
        var i = void 0 === n;
        switch (t.length) {
        case 0:
            return i ? e() : e.call(n);
        case 1:
            return i ? e(t[0]) : e.call(n, t[0]);
        case 2:
            return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
            return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
            return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}
, function(e, t, n) {
    var i = n(53)
      , o = n(54)
      , r = n(57)
      , a = n(58)
      , s = "eapps.Platform"
      , c = "disabled"
      , l = "enabled"
      , p = "first-activity"
      , u = "in-viewport"
      , f = [c, l, p, u]
      , d = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
      , g = "https://core.service.elfsight.com"
      , h = function(e, t, n) {
        var h, v = this, b = {}, w = [], m = [], y = [], x = [];
        v.initialize = function() {
            v.logError = r.withModule(s),
            i(function() {
                t = t || e.document.body,
                v.establishPreconnections(),
                v.observe(),
                v.collectWidgets(t),
                v.boot(),
                v.watchWidgetReset()
            })
        }
        ,
        v.establishPreconnections = function() {
            v.preconnect(v.getPlatformUrl()),
            v.preconnect("https://static.elfsight.com"),
            v.preconnect("https://service-reviews-ultimate.elfsight.com"),
            v.preconnect("https://storage.elfsight.com")
        }
        ,
        v.preconnect = function(e) {
            var t = document.createElement("link");
            t.href = e,
            t.rel = "preconnect",
            t.crossOrigin = "",
            document.head.appendChild(t)
        }
        ,
        v.facade = function() {
            return new a(v)
        }
        ,
        v.requireWidget = function(e) {
            "string" != typeof e && v.logError("Widget Public ID required and should be a string", {
                pid: e
            }),
            ~w.indexOf(e) || w.push(e)
        }
        ,
        v.addPlaceholder = function(e) {
            ~m.indexOf(e) || m.push(e)
        }
        ,
        v.getEappsClass = function(e) {
            var t = e.className.split(" ");
            return 1 === t.length ? e.className : t.length > 1 ? (t.filter(function(e) {
                return /elfsight-app-[\S]+/.test(e)
            }),
            t[0]) : void 0
        }
        ,
        v.getWidgetIdByElement = function(e) {
            return "div" === e.tagName.toLowerCase() ? v.getEappsClass(e).replace("elfsight-app-", "") : e.getAttribute("data-id")
        }
        ,
        v.getLazyMode = function(e) {
            var t = e.getAttribute("data-elfsight-app-lazy");
            return "" === t ? l : null !== t && f.includes(t) ? t : c
        }
        ,
        v.getWidgetsElements = function(e) {
            if (e = e || t,
            !e || "function" != typeof e.getElementsByTagName || "function" != typeof e.querySelectorAll)
                return [];
            var n = Array.prototype.slice.call(e.getElementsByTagName("elfsight-app"))
              , i = Array.prototype.slice.call(e.querySelectorAll('*[class^="elfsight-app"]'))
              , o = i.concat(n);
            return e instanceof HTMLElement && ~e.className.indexOf("elfsight-app") && o.push(e),
            o
        }
        ,
        v.collectWidgets = function(e) {
            v.getWidgetsElements(e).forEach(function(e) {
                var t = v.getWidgetIdByElement(e);
                if (t) {
                    var n = v.getLazyMode(e);
                    n === c ? v.requireWidget(t) : v.bootWidgetDeferredly(e, t, n),
                    v.addPlaceholder(e)
                }
            })
        }
        ,
        v.bootWidgetDeferredly = function(e, t, n) {
            function i() {
                s.splice(0, s.length).forEach(function(e) {
                    e()
                })
            }
            function o() {
                i(),
                v.requireWidget(t),
                v.revise()
            }
            function r() {
                var e = ["scroll", "mousemove", "touchstart", "keydown", "click"]
                  , t = {
                    capture: !0,
                    passive: !0
                };
                return e.forEach(function(e) {
                    window.addEventListener(e, o, t)
                }),
                function() {
                    e.forEach(function(e) {
                        window.removeEventListener(e, o, t)
                    })
                }
            }
            function a() {
                if ("undefined" == typeof window.IntersectionObserver)
                    return function() {}
                    ;
                var t = new IntersectionObserver(function(e) {
                    for (var t = 0; t < e.length; ++t)
                        if (e[t].isIntersecting) {
                            o();
                            break
                        }
                }
                );
                return t.observe(e),
                function() {
                    t.disconnect()
                }
            }
            var s = []
              , c = [l, u].includes(n);
            c && s.push(a());
            var f = [l, p].includes(n);
            f && s.push(r())
        }
        ,
        v.watchWidgetReset = function() {
            window.addEventListener("message", function(e) {
                var t = e.data;
                t.action && "EappsPlatform.widgetReset" === t.action && v.resetWidget(t.widgetId)
            })
        }
        ,
        v.resetWidget = function(e) {
            var t = function e(t) {
                var e = document.createElement("div");
                return e.className = "elfsight-app-" + t,
                e
            };
            v.getWidgetsElements().forEach(function(n) {
                v.getWidgetIdByElement(n) === e && (delete b[e],
                n.parentNode.replaceChild(t(e), n))
            })
        }
        ,
        v.initWidget = function(e) {
            var t = v.getWidgetIdByElement(e)
              , i = b[t];
            if (i) {
                if (!i.status || !i.data)
                    return void v.logError('Widget "' + t + '" can`t be initialized because ' + i.reason, e);
                i.data.id = t,
                i.data.platform = !0;
                var o = i.user || i.data.user;
                o && (i.data.isOwner = o.owner),
                n.initWidget(e, i.data)
            }
        }
        ,
        v.boot = function(e, t) {
            var n = t || w
              , i = [];
            if (n.forEach(function(e) {
                x.includes(e) || (x.push(e),
                i.push(e))
            }),
            i.length) {
                var r = new XMLHttpRequest
                  , a = v.getPlatformUrl();
                a += "/p/boot/";
                var s = o.stringify({
                    w: i.join(","),
                    page: v.getPage()
                });
                r.open("get", a + "?" + s),
                r.withCredentials = !0,
                r.onload = function() {
                    var t = JSON.parse(r.response);
                    t.status || v.logError("Boot failed because " + t.reason, t.data),
                    b = Object.assign({}, b, t.data.widgets),
                    v.loadAssets(t.data.assets),
                    m.forEach(v.initWidget.bind(v)),
                    x = x.filter(function(e) {
                        return !i.includes(e)
                    }),
                    e && e()
                }
                ,
                r.send()
            }
        }
        ,
        v.getPage = function() {
            try {
                var e = document.location.href;
                if (d.test(e))
                    return new URL(e).toString()
            } catch (e) {}
        }
        ,
        v.getPlatformUrl = function() {
            return e.eappsCustomPlatformUrl ? e.eappsCustomPlatformUrl : g
        }
        ,
        v.revise = function() {
            var e = w.filter(function(e) {
                return !(e in b)
            });
            e.length > 0 ? v.boot(null, e) : m.forEach(v.initWidget.bind(v))
        }
        ,
        v.loadAssets = function(t) {
            t && t.length && t.filter(function(e) {
                return y.indexOf(e) === -1
            }).forEach(function(t) {
                var n = e.document.createElement("script");
                n.src = t,
                n.setAttribute("defer", "defer"),
                n.setAttribute("charset", "UTF-8"),
                e.document.head.appendChild(n),
                y.push(t)
            })
        }
        ,
        v.observe = function() {
            if (e.MutationObserver && !h) {
                var t = {
                    childList: !0,
                    subtree: !0,
                    characterData: !0
                }
                  , n = null;
                h = new MutationObserver(function(e) {
                    var t = function(e) {
                        v.requireWidget(v.getWidgetIdByElement(e)),
                        v.addPlaceholder(e)
                    };
                    e.forEach(function(e) {
                        var i = function(e) {
                            var i = v.getWidgetsElements(e);
                            i.forEach(t),
                            i.length > 0 && (n && clearTimeout(n),
                            n = setTimeout(function() {
                                v.revise()
                            }, 1e3))
                        };
                        Array.prototype.forEach.call(e.addedNodes, i)
                    })
                }
                ),
                h.observe(e.document, t)
            }
        }
        ,
        v.initialize()
    };
    e.exports = h
}
, function(e, t, n) {
    /*!
	  * domready (c) Dustin Diaz 2014 - License MIT
	  */
    !function(t, n) {
        e.exports = n()
    }("domready", function() {
        var e, t = [], n = document, i = n.documentElement.doScroll, o = "DOMContentLoaded", r = (i ? /^loaded|^c/ : /^loaded|^i|^c/).test(n.readyState);
        return r || n.addEventListener(o, e = function() {
            for (n.removeEventListener(o, e),
            r = 1; e = t.shift(); )
                e()
        }
        ),
        function(e) {
            r ? setTimeout(e, 0) : t.push(e)
        }
    })
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        "@babel/helpers - typeof";
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function o(e) {
        switch (e.arrayFormat) {
        case "index":
            return function(t, n, i) {
                return null === n ? [a(t, e), "[", i, "]"].join("") : [a(t, e), "[", a(i, e), "]=", a(n, e)].join("")
            }
            ;
        case "bracket":
            return function(t, n) {
                return null === n ? a(t, e) : [a(t, e), "[]=", a(n, e)].join("")
            }
            ;
        default:
            return function(t, n) {
                return null === n ? a(t, e) : [a(t, e), "=", a(n, e)].join("")
            }
        }
    }
    function r(e) {
        var t;
        switch (e.arrayFormat) {
        case "index":
            return function(e, n, i) {
                return t = /\[(\d*)\]$/.exec(e),
                e = e.replace(/\[\d*\]$/, ""),
                t ? (void 0 === i[e] && (i[e] = {}),
                void (i[e][t[1]] = n)) : void (i[e] = n)
            }
            ;
        case "bracket":
            return function(e, n, i) {
                return t = /(\[\])$/.exec(e),
                e = e.replace(/\[\]$/, ""),
                t ? void 0 === i[e] ? void (i[e] = [n]) : void (i[e] = [].concat(i[e], n)) : void (i[e] = n)
            }
            ;
        default:
            return function(e, t, n) {
                return void 0 === n[e] ? void (n[e] = t) : void (n[e] = [].concat(n[e], t))
            }
        }
    }
    function a(e, t) {
        return t.encode ? t.strict ? c(e) : encodeURIComponent(e) : e
    }
    function s(e) {
        return Array.isArray(e) ? e.sort() : "object" === i(e) ? s(Object.keys(e)).sort(function(e, t) {
            return Number(e) - Number(t)
        }).map(function(t) {
            return e[t]
        }) : e
    }
    var c = n(55)
      , l = n(56);
    t.extract = function(e) {
        return e.split("?")[1] || ""
    }
    ,
    t.parse = function(e, t) {
        t = l({
            arrayFormat: "none"
        }, t);
        var n = r(t)
          , o = Object.create(null);
        return "string" != typeof e ? o : (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function(e) {
            var t = e.replace(/\+/g, " ").split("=")
              , i = t.shift()
              , r = t.length > 0 ? t.join("=") : void 0;
            r = void 0 === r ? null : decodeURIComponent(r),
            n(decodeURIComponent(i), r, o)
        }),
        Object.keys(o).sort().reduce(function(e, t) {
            var n = o[t];
            return Boolean(n) && "object" === i(n) && !Array.isArray(n) ? e[t] = s(n) : e[t] = n,
            e
        }, Object.create(null))) : o
    }
    ,
    t.stringify = function(e, t) {
        var n = {
            encode: !0,
            strict: !0,
            arrayFormat: "none"
        };
        t = l(n, t);
        var i = o(t);
        return e ? Object.keys(e).sort().map(function(n) {
            var o = e[n];
            if (void 0 === o)
                return "";
            if (null === o)
                return a(n, t);
            if (Array.isArray(o)) {
                var r = [];
                return o.slice().forEach(function(e) {
                    void 0 !== e && r.push(i(n, e, r.length))
                }),
                r.join("&")
            }
            return a(n, t) + "=" + a(o, t)
        }).filter(function(e) {
            return e.length > 0
        }).join("&") : ""
    }
}
, function(e, t) {
    "use strict";
    e.exports = function(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
            return "%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
    }
}
, function(e, t) {
    /*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
    "use strict";
    function n(e) {
        if (null === e || void 0 === e)
            throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    function i() {
        try {
            if (!Object.assign)
                return !1;
            var e = new String("abc");
            if (e[5] = "de",
            "5" === Object.getOwnPropertyNames(e)[0])
                return !1;
            for (var t = {}, n = 0; n < 10; n++)
                t["_" + String.fromCharCode(n)] = n;
            var i = Object.getOwnPropertyNames(t).map(function(e) {
                return t[e]
            });
            if ("0123456789" !== i.join(""))
                return !1;
            var o = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                o[e] = e
            }),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
        } catch (e) {
            return !1
        }
    }
    var o = Object.getOwnPropertySymbols
      , r = Object.prototype.hasOwnProperty
      , a = Object.prototype.propertyIsEnumerable;
    e.exports = i() ? Object.assign : function(e, t) {
        for (var i, s, c = n(e), l = 1; l < arguments.length; l++) {
            i = Object(arguments[l]);
            for (var p in i)
                r.call(i, p) && (c[p] = i[p]);
            if (o) {
                s = o(i);
                for (var u = 0; u < s.length; u++)
                    a.call(i, s[u]) && (c[s[u]] = i[s[u]])
            }
        }
        return c
    }
}
, function(e, t) {
    function n(e, t, n) {
        var i = [n + ' throws: "' + e + '"'];
        t && (i.push("with \n\t ->"),
        i.push(t)),
        console.error.apply(console, i)
    }
    n.withModule = function(e) {
        return function(t, i) {
            return n(t, i, e)
        }
    }
    ,
    e.exports = n
}
, function(e, t) {
    var n = function(e) {
        var t = this;
        t.initialize = function() {}
        ,
        t.requireWidget = function(t) {
            return e.requireWidget(t)
        }
        ,
        t.resetWidget = function(t) {
            return e.resetWidget(t)
        }
        ,
        t.initialize()
    };
    e.exports = n
}
, function(e, t, n) {
    var i = n(57)
      , o = n(60)
      , r = n(61)
      , a = "eapps.AppsManager"
      , s = function() {
        var e = this
          , t = {}
          , n = []
          , s = [];
        e.initialize = function() {
            e.logError = i.withModule(a)
        }
        ,
        e.facade = function() {
            return new o(e)
        }
        ,
        e.register = function(n, i) {
            if (t.name)
                return void e.logError('Application "' + n + '" is already registered');
            var o = new i;
            t[n] = new r(o),
            e.initWidgetsFromBuffer(n)
        }
        ,
        e.app = function(e) {
            return t[e]
        }
        ,
        e.initWidget = function(t, i) {
            var o = e.app(i.app);
            if (o) {
                if (s.indexOf(t) !== -1)
                    return;
                s.push(t),
                o.initWidget(t, i),
                e.sendExtensionPostMessage(t, i)
            } else
                n.push({
                    element: t,
                    config: i,
                    initialized: !1
                })
        }
        ,
        e.initWidgetsFromBuffer = function(t) {
            n && n.length && n.forEach(function(n) {
                t !== n.config.app || n.initialized || (n.initialized = !0,
                e.initWidget(n.element, n.config))
            })
        }
        ,
        e.sendExtensionPostMessage = function(e, t) {
            var n = window.self !== window.top ? window.top : window;
            n.postMessage({
                method: "postMessagePlatformWidget",
                data: {
                    settings: t.settings,
                    app_slug: t.app,
                    public_id: t.id,
                    platform: "core"
                }
            }, "*")
        }
        ,
        e.initialize()
    };
    e.exports = s
}
, function(e, t) {
    var n = function(e) {
        var t = this;
        t.initialize = function() {}
        ,
        t.register = function(t, n) {
            return e.register(t, n)
        }
        ,
        t.initialize()
    };
    e.exports = n
}
, function(e, t) {
    var n = "https://dash.elfsight.com"
      , i = function(e) {
        var t = this
          , i = !1
          , o = [];
        t.initialize = function() {
            e.whenReady(t.ready.bind(t))
        }
        ,
        t.ready = function() {
            i = !0,
            t.initWidgetsFromBuffer()
        }
        ,
        t.initWidget = function(n, r) {
            if (i) {
                r.websiteUrl = window.location.host || "undefined";
                var a = {
                    widgetId: r.id || null,
                    widgetToken: r.public_widget_token || null,
                    widgetOrigin: "apps.elfsight.com",
                    websiteUrl: r.websiteUrl,
                    deactivate: 1 === r.preferences.disable_widget,
                    deactivatedWidgetUrl: r.preferences.deactivated_widget_url,
                    showElfsightLogo: !r.preferences.hide_elfsight_logo,
                    owner: r.isOwner,
                    platform: r.platform,
                    freeLinkUrl: r.preferences.free_link_url,
                    displayFreeLink: !!r.preferences.display_free_link,
                    displayFreeLinkRemove: !!r.preferences.display_free_link_remove,
                    freeLinkURL: r.preferences.free_link_url,
                    freeLinkRemoveURL: r.preferences.free_link_remove_url,
                    freeLinkAnchor: r.preferences.free_link_anchor,
                    displayDeactivation: !!r.preferences.display_deactivation,
                    deactivationURL: r.preferences.deactivation_url
                }
                  , s = t.getAttributeSettings(n)
                  , c = [r.settings, a, s].reduce(function(e, t) {
                    return Object.keys(t).forEach(function(n) {
                        e[n] = t[n]
                    }),
                    e
                }, {});
                e.initWidget(n, c, r),
                r.isOwner && setTimeout(function() {
                    t.initToolbar(n, r)
                }, 500)
            } else
                o.push({
                    element: n,
                    config: r,
                    initialized: !1
                })
        }
        ,
        t.initToolbar = function(e, t) {
            var i = 0;
            t.usageStatus = function() {
                var e = "green";
                return i = 100 * t.percentage,
                i >= 100 && (e = "red"),
                i >= 90 && i < 100 && (e = "orange"),
                e
            }
            ;
            var o = document.implementation.createHTMLDocument()
              , r = "".concat(n, "/apps/").concat(t.app)
              , a = "".concat(n, "/apps/").concat(t.app, "/pricing")
              , s = "".concat(n, "/widget/").concat(t.id)
              , c = function(e, n) {
                var i = new URLSearchParams({
                    utm_source: "clients",
                    utm_medium: "user-panel",
                    utm_campaign: n,
                    utm_content: t.app,
                    utm_term: t.websiteUrl
                })
                  , o = e.includes("?") ? "&" : "?";
                return "".concat(e).concat(o).concat(i.toString())
            };
            o.body.innerHTML = '<div class="eapps-widget-toolbar">\n                <div class="eapps-widget-toolbar-panel-wrapper">\n                    <div class="eapps-widget-toolbar-panel-only-you">Panel only seen by widget owner</div>\n                    \n                    <div class="eapps-widget-toolbar-panel">\n                        <a href="'.concat(c(r, "elfsight-icon"), '" target="_blank" title="Panel only seen by widget owner"> \n                            <div class="eapps-widget-toolbar-panel-logo">\n                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="222" height="197" viewBox="0 0 222 197">                    <image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADFCAYAAAA7dkzvAAAAAXNSR0IArs4c6QAAIABJREFUeF7svWdzZNeZJvhcmz6BhAcKqEI5VtFKFCW11D3aVvdMdMTMxH7diP2H+3W/bexMdM/2znbLkKJEslgsb1DwPn1eu/G855zMiyRMGUlFoPJSqSxk3rzm3POc1z+vlSRJitE2GoHRCPxVR8AaAe+vOt6jk41GQEZgBLzRRBiNwFsYgRHw3sKgj045GoER8EZzYDQCb2EERsB7C4M+OuVoBEbAG82B0Qi8hREYAe8tDProlKMRGAFvNAdGI/AWRmAEvLcw6KNTjkZgBLzRHBiNwFsYgRHw3sKgj045GoER8EZzYDQCb2EERsB7C4M+OuVoBEbAG82B0Qi8hREYAe8tDPoP65THVYVZP6xLvIBXcwGAd9IkOanMcPhz+40eq4UU/N+53KwUicWLNzdgQf4Ex/T4cZX7zWzpCfudy/H4K170Owq8wUQD3jLw3lS4vAnoLSCxktcEHk9MGL7pDfwVZ/sP6FQj4L31ifMmyOFMepOFQ0s7irk0C6CTwSTfpGlfII6A93pofseAZyZ5VuK9zRU7q+a9zgM0KuGb3AMlnlEvz74GdabBYjEC3tljdtweFxR4x0mRYdCdbsu8/HC+icSi5HiD34uUehOJ9zJ3eZqtfLIt+DJHfpf3uYDAe1nQmcf+phM3OckP8ZLz6g2ARzVZwPcmEu+4y8xc0wkLg9qDzpg/97lfctjO+W4XDHivALq+XUPgve7kSZEecU68zmx4U+C/zjkHv/k+cJT6q/B0cqghC7zXHb03u/Lz/esLBLxXAB0nFGdLX1V73aljgGfspFedDEZVfN3zG3C8rtQ8TmIp9Zf/fX8beDGVT1OFH97k6l91xC7K/hcAeCc9Cr0mUxsTLxzdABaSNEEcx3AcB7ZlKwedNZA63Ff258SyzppSKRJk3fHfvxZzrOOv8mzgnXUNtlzjGwBP1FV9dTJW6n54Z/xYxggA6VejOJGxsR0XruOotSvhuKoxSxK1APGaXdeVf59+/xcFRq9+HxcUeANHCicBJxMBxzmaBZZt2zKxjmyvDLzTJ/33jn/kZH8u++z1gXc0jGDEl/G2WgijELbtwLY9kXGEVhwnSGIFtnzO7Uu8YfCdtWi8+nS9OL+4gMA76r0UsHH9ThLYtihH8vTiJEYchnDtFDb1JduW+FSaJEdW7tMf9dkB5LMm31nfnz3VTpfKWYlz3L8dS0kupbSmsOyjuSkSLrBsWJajg+XqncMlv6HE4y5aO+A4ZzWGN7+/s0fgPO5xwYD3/ZCBmg+plngKeFzFDw8P0TzcRylvKfDpmWRWbTN5zOcnqYpKuzp58p+qasmEVdf3uhulz1GpdfRI2esfBp66av3/5hYsS8CnvrIxMTEJy3YAm6qjgzS1kSYEJ8FoIU5jeTcvnoP/zo7n697bRf7dBQDe8KQ9+reZ2FzNoyhCHEdotVrY2NjA9uYL5O0uPDsWm0SppUqFejk772x3PiXoyRsljFHrjt/rLBsxik537CgbcLAl2n7VIu6IdDcST60GStJVquMoFEooV8ZQKo8h5xdhuzkFRMuROKIJoptxGwHv7CXjggDv5CAvVUrHsfuOFUqXbreL7e1t7Gw+x+y4g5wTwfM8cbiI/MlMzjNVpTN6vpz+exNAP1niGYfFSY+SjqLTJO7w74elXqyBa0xdWQZEEitAPV9Zhe348L0CcvkSSsUxVKvjqI7VYOXLgJUTSWi2rIPFLGRnT8N3b4+LCzwd+O31esjl/L5tZ9S6XtBDfW8VvYOnyLkRfN/vSz3Rss70aKoU4ZSq1imq4lnHUV7EkzcFrJO3JInO+F4d3wBuWILSW6k+M7E7gFJRSTEbjuujF8RotwN0OiHixIHv5VEqVeDlq6hMLsHxijJ+XLyGtYbTVfV3D3Dmji8I8IYfoJYgViqhA9dRru0ojsTBQk9jEAZoHWzicPMBCh6B58H3HTiOBB1kf+MFHQ4y973vAu7TgXeWxDrr+9OBR6cRgflyNuLpjhajYiuJRyxKAMamCk7bzkEUA91ehF4vQhCECGIXk7PXkCuMoVypolQqw/F8ASwBTWXAkbEftoFf7novMiwvAPCOezyDB3uajWQjRO9wE3tbL9Bo7qFU9DBRK8L36K2LkCaxBIhVMr4lHrxUOxLUXKKLQce9tHo6fL7T/s7aksMq7nHXfRxwKHFP+62RuMdJPCOxze/lHmXoBjI8FhvVkvsmEAkm5em0ECcuNjbq8HIVVKo1jE9MY6w2Da9UBSwOoo0wNuBTsUBuanFT4/qyi8ZFA+EFBd7gMZ0KvDRG2DpEu7mHZnMXcdhCsQCUSx48J0USBzozg4VrakL2TTpxp8tU7AeQzVlPA81xQDzL5Z+ddMP7moD3SeAbBt7R/ZSqLJNf53xSuhsTVxRQqsLMZBH1U+0mqqg4olx0uwzNMMTgwvWLKJRrqNamUapOwfIKiGNKTcYACTy9WInWoYD4Ehr9RcOc0qYuemPK04GXIAm6sNIArdY+9nfXkEQtVMouSgUXVhoOfHYaeKKC9W0gisKjqt5JIDoJGCdJxJcF71nA+54SnnEcSXxTbFQiSjmgBGdaNexnsWjwCXgEdFrqgap5Ab0gQasTIAhTOH5JgFebWkC5OgnYOVgOHTAWYh10l3iqAC+W4Py7uL3TwBPliTYSY+e9BvZ219E43IJrhSgVbeQ8wHW44DNWlkomvgIeVVGJDopHPesgeTXgHa8SnyUBj4LyaF7ly6qoCkQqLYy/sRiX0/dn8i95X8reVTavSo/j74w6aotKmaYWemEswIsp+XIlFMoTyBfHMTl9Ca5fAij1Esb9mEFE4Ckpmk3Xe5cA+I4DT+dpUt2Kewi6DRzsraNV34HrhCgXXfhuAttKYDFHkROGgEuU2sSJSDc8AXicmnmWfad+czr4jrfrjndOnOS5PAnIhJ2SeibhWXlVFPD06tLPRVXnVMdS9h7/GUaJOFBs10WcWghiIKTqyTCDXcDlK7fE+eLlKzruZzEBtH/f2bDiCHgXaAROUzV5m3R3x2GkwGXF6DT2sLezhrB7iJyfIOelcKwIjsV3CkflZOF8lGC0PZAEw+rkaX+b6zI2zkmgyXo9T9on+7jOAurweMRMhhaJp5MB5N8En34fch4J6IyDRdRHqos2LNtGYlkIE6AXAVFCIOYwPXMFpcoUytUpsQEhWTA0kA2QL9Bke4VbeaclnowTcxMpzfQ6ngQdtBp7onL22vvI+wk8BtidpA8+EXd9W0+pXSfZcKdLQuVcOE21FHsya5d9T0QMXPWvAjo5LlnGEAsE5ChacIu001UHkseqbTt1L8b5YpI1uSvhy5cl4EtSB0HsIEp8WE4Z4xMLmJhaRKE0LlkvlkNnjFq4hjNrXmHunutd32ngyZSimaL/S7l687O4J1JvZ2sFxVwK1w7guQSfCh9ICEH86gTFUYf4aVLpuO/6KW0ngMtIvOPBR1uJpU0nh09OylyR3xB4aaRKpkwlubkhse8GXkdlC5pFRpVTCVzTFHESIuZx6DSxHSRwEMY2gshBu2ejNrmEmbnlgdRzXOULTlM4Jtv6XMPo1S/+wgMvmzXPSWiSedUCnwC2NvLpodMOhjgI0G0fIuw1sLP1FI7VQyGfolRw4FgxoqADJDF8z0UYRi8dijoOIFEcnvrUzgqwszzndKmqvs2Cvi9FLVXWw/zVJI6l1EfGR9t3sl9fJVRyMUm5NJn8TJNskGjpqZ01sBGnBGAOYZJDp2chX5zEpcs3MTlzCaml7EGp2XtHjbwLD7zspBxOX1LTiqoW7RmWx9Czp34Rd7uIwzY2N54g6B4gTVrI+6l4Ohl4txDDsS1EwenAGUbVsNR7s5QxJTVOU3W/f76Bk4QA81wbcRwiiWLtZbTkvlSBAqWZ4pTpO1VSG8kRkiVKTp1EIJ5Kgo/AdBCnLqI0h1YXcPwqZuaXMT23DD9fkdge7cIR8F5dWp6LXwycGKp0JbtRzaJbW00VxpN0bZroVRSJIdqNHRzub4jNZ6GLfA7I+ZyLkUg9VZ998naa/ZaVRCcd4axcTQbVjhQcDKmdx0nM/pgYz6Vx0/bvJZGsHb5EE+wXqfNc6iVST6r3+b0MVj+somJ9VMgJPh/tHgSAlfE5zMxfw8TUJQk5qOO8m+ljF17inZS5wQnJAK7raakhATlb2RzZuZAGqO9tYn93Hd3OPmyL9h4tFKaUMcCuVbMTkDMMnKMSSHkFXxa4x+1n0rBOAvhZqipo11qMV9pwXVaaqzrzhFIwDqRIeBCk1yBnTZ52sqjaPbVSqbjfIMtFrGHLRTe00AlsOP4YpueuYWHxPRQqkzLedPC8i9s7AzwzwbNST7yZGSGo/AoKeIbLhJOw22mgcbiDen0Hvc4hkqTLclpJt0pYiPoS24nAyNhoxwPrrOMf9agOhwuyx/z+d8qryLxUempdG/A9B55rKUeS2LNtXYGhr0Oi50oMyj+l/NxgTwGPgU5R4yVC4SBIbJF6QZLH+ORlLF6+jYmpJcDN67r3lxjAC7bLhQdeVp3LOlbkczpbVPFZf/KIJBRvnq6iFrd6gqDXQqOxh2ZjD3HUBQR4pJOginpyBTpLZbLXcHTy05Y6PWXqLIloSIWG1VZznmwluHGqDKSuUg973Ta67aa8p1FPHEgMn7gsELYZOqFNq0HFMdMlQ6JgavVd9T5R8T9I/qd2uBB8totOaKMTuPAK05idv4m5+RvIU+qZWuILBqyzbufCA894MrOOFVais04v7IWoFKtKvdTVK8K5wokjwFOgMrCKem30gpaomXzx2J5fVFLyhG0YeMMAcV2W0ZzCm6KLc48/vFHTXkFdkxikYQQjc1gPvV4HnWYDnVZdvLni0e3WkQQtFPP09VKljrVNq65EUuYoLaVqgWaeRQexfEHHE8ulmMcaxCEcP48IPlpdG0FcxljtMpYuf4CJuSWWKpzGXHHW/D2331944Ik6mYkVESzNZhP1OidZFwtzi/BZfe7asBwLLCxlDqMCno0wjKWQVmLKYo9FsKmTcWKJI+O4erPMfBhOvz/iPlf0Cq89896Qr0WkkiwiyjmCKEC3dYDD/S3s725IIoGNQL8i2HRGpXxX4FVxUMXDMkg1I/iYeM34YIJu0IGfLwJuDs0O0Op4KJRmcXn5I8xfuQl4OXHEHN1OWYjOLdSG7vCiVydIISzzCE1qk2UJ6B4+fIi1tTUszC3g6tWrqE3URPBQGhr1jb8Z9oSqSWpexKfKwnj97W1OMqrVqpDXNtnfDIYHHXS7bURRG0+f3MfBwSbCXh1jZQ+lHBB1m0jCrixYzFJRWeYm2VpLRKms17msDLJTpbfzCGIf3Z6LqdkruHH7U/jjM5JoLXynmoZCcj+ZgqbjruqIb3OcXv/pnvTLCy/x+PDIpWJsJf6bwFtZWcHu7i5yuRzGx8cxMzMj79wIPiG81Q//tGE/i9rhz//I/pxHVDya/bJXkcYpEIeIgq6ooTu769jeWsHhwQY8q4uCG8FJu0SfYlrR1QlHcy+Nw4cJ5syOUS+WCIWxi17gYHL6Mq6+9yMUJi4hdXISJzSMadmxV+NrXn/Oe3+7x7rwwDOqJoFn/t1oNLCzs4N2uy1cIWQdKxQKWFpaQrlcRhjScZLKd2e548838EyMTks8Zb2pFz2dKUMKPWxtrWDtxUM0DzfhooOCF8NJAzLb9j2cw8BTDhzFWSrAkyJaD1HsoRc6GK8t4PL1j1CZuSoFs0IVqKkKJelaM76NgPd2F4jXPruReMajx78p8cirSTAuLCxgfX1d7L6JiQmRfJSC/M789uJKPOUgEduVtrDYw9rDS6jQyeQkCDuHWF15gI3VRwiaOwK8nMN8VbVACVxFtTSSzoyYqnAgACOJtnuIEw/d0EGlOoe5pfcwtXgLdq4sGgZ3YdqaAd5g3EcS77UB8LZ+aGw8c37+vbe3J8Djanrt2jWRfFQ7Kfko8ebm5oQxKwiCvr13oq5+jrkLFHeKpmRgQTDZtulU0qUKwqDm0X4LUN9dw8qTu9hj7mrcQcFn8niCKOplAugZW0zTPKisFpV6llgOkjQnydOF4hRqs1dx6fqP4Baq8D1fuXhMvuiRcR0B723h57XPOyy1+Dc5NSn1uLISZKVSSbg2X7x4gU6nI1JvcnLyiDf0IgNvoGFqlVNqlVSMj2l1jmch7hxgbeUB1p99h6C9h5wdS61iFHckbNDP5TSlRbragbmwPBwXvJjeTzuPMPbgelWUJ5Zw9YOfwyuOI59jMJ1eZSVBj6rwI+C9NgDe5g+z9gKBR+lGO4/eS6qXxWJRHvT+/r58x0lER8vY2JhIvouqahqJZ4CXKQzvq4+sXGBaHcIWdjaeYf35XTR212AnHfguE8x7SJlMoOCiTUTNIqaTDxgtILWiVDZo4MEuoTA2j5uf/Aq58gQK+cL3gDcgxB0B723i57XObR6eUTkJPAKMaiWdJ7Ozs+JMofSjncHvNjc35W9KPQLzIgMv0vR9TBZ3LHZPGtytYgFjcnmMNGzhcGcVW6v3sbf5DEnvEK4dwnZCpFakyodMd1pNmMQsFko82o1RFCJKWa9XQJR4SK0C/NIsbn36a+QrUygWiiPgvdYM/wH/iJOHIQITSCewCDyCimomN2nZpcMHdLQQgFRHl5eXxe6jdFQub9Vb77jk6x/wEBx7aeL66APNUD6oXU02jrCBMfvEChE0d/H0/pd48fgOrLiFUsFClLaVqqldK2xowiwWRSXBRHSGZpjXqVRNspIxpGA5JXilObz3419jjNUKjouQYRxbxfA41qrDk+nYO4rjnbf5pV3VKhjOB7q1tdUHXrVa7dehmQdOO4/OFyMVqXaaGJ8B3/c9b+duWJS/0eRaam4VlQwzILCVHJ2I7cwi8Wga4CFqoJhnrmYXqbbxFNhIQqNUTSEDTkI4rqVUTWGmzgsfC+wi/NIcrn30K9RmryDn5xBJpYSKnxov9CiccP7mVf+KVYxIAY+rKIFHcFGVPA54VD3p6WQ+J/flPtyXko8bpScnRlbyndfhGdh5OglalwUbFhoV0gvhOTF6jW08vf8HrD65A4QHyOUYFCegVP8GxcupaAKV1FMJ0xRaih6C2Ss+opj5mQX45Xks3folphauoVwqq6Jb5nzqFL+RjXdeZ5W+bgM4/kkAUtUkqKampvrAk4mj6dkJToKPAFtdXRWQMcBO8BnV1AD5fAfQB1Tt/XxN6X9uVE2btb6wUvafiNCrb+Hp/S+w9vQO0uAAvhchtWOkUoFu2La1xNPAU5X6ZB1jwxPq9D6CiHI0D688h4Wbv8Ds0k2MVcf6wDNjaiTfKHPlnALQrJwEEMFE4DFGx7CBAZK5taztxv3p/aSnkxKSXk4TYOf+R3MJz+PgDPqfi4ppMWma5Tyq8aS494Xvl2l3MboH63hy73NsrdwViec4IWIWBOtiVouFrVra2aJyKspEFlhEUQApPTTAE+fKHBZu/XIEvPM4dc66ZpMmZmwGAo7qIyUaPZqUZEbaZY9lAMh37s8UM6qWdMiYMAOPed4lHsVb320h0o7Ao8RTdYIKePR4hmjtvcDT+59je/U+rOhASH/DlF5N3dhF/pFRNSXxOgIbBhF4wtXi+AgjR7ybdK4sf/z3I1XzrEl8Hr/PlgVRQhm7jZKPwfN8Pn+EeSxbqGpUT/6GzhZ6ObnR1qPdZ357HsdFXTNtMZ14okuMjPRShEUqHZNlQC4C7G8/xdN7n2Nv8yGcpK6BR4mXBZ4j3EeKOIo95elc4XFCqVi3nZx2rihV89Zn/4Ta7PLIuXJ+J9HxV34c8Khq0kabn5+XvMysh9K4sQ3oTPyPQGVOJ8MM/M309LR4Ov98Eu8sd/mg+ChbhnTWr057nsoLOQw8k+6sjhxFJHSKYMcd7G89xZP7X2B/8zFctMXTyR7oSkIaJjICTui1Ff8KA/AunVoEngXLUV5NyykI8D7+xX9FdWpRhRNCUxXCvM1sOEEtEhdpu/DVCcYJwgfJWBylF1PDqGqyGsGomic9VAKOG4Pt3GjvUfWk2klnS6VSkeMaTxyPS8nKz1Ti7+nVen33vb4As7eZZkemmzCi6caRplgmqyq+4szs1xYyPsmukzZVQEXHLgnLSSScK/mchai9h2cPv8Gzh1+hXd9EwUtQzHvotUmDwQhCjNgybU0UnwMr0tkUppDPodNh9X4EvzAmAfQIeVSnlvHjv/0v8Ao10R7kOBK7UyEFbmeN3yve8g9m9wsPPOMAMWCgjcdavJcFXnbl5WRgbI9J1jwO08lo83HSmAA7n6zxxplg+6lSp4/LQYmtWd+PrvEKYZJIPPCJKBfIa1biGne/3CNjd1QPWVEuF8yKhUh4V5B00Nx9IcBbe34PvdYefCdBwXeRBIpdLLEV8PhSKqw00oMVM6fTkw68xLabq6AbuXD8cUwu3MSHn/0D3Py4aBHZ2N0IeD+YNeL1LsQ4QEyyNAFDicf3l5F40tRE1/IZ7yhjfLT5mOFCryhVTko+E7Ywk8ZUvZ905UraZWWcziT5nhQbVLwr5i4CUMFSNRh5vbGR32vahcEZdBsu4QyNYDsx4vYe1p7dk+qEw50VpGFTAMlGLnYifICIrRiJSDx9MSLxUqSs6HdsCY6TQRpOCZ3IRbE6h6Vrn+Dq+z+Hlx/rL1wmW+UiZAaduuBedOoHNblU4JyAeFWJZ0DE35ugOd8PDg5E8jHMQOAxJkjJx/0MfcQgDnX8IzgReEekWBYSikFWqZtvDjzTUjmLWykOIHtaGrMDAuBE2F99gicPvsLW2mNEnX14zNFkYjR5STX1RUxGbnpFNes0FwMhP2JLa6lyAGw3jyDNoR2o3uk3P/g5Ll37GI5f7mcVZT3F599rfDL0LryqeRLwjMRjZcJZ27AEM7mf9HKyxIgThJ5Ogo8qk0m6zqqfx51DOxL1V0raDcm/jERUoDNVAKbElMnNr7vxGOxnl1VtWTHOlmWOZKMEaGyvYn3lIZ4/uYvG/jo89KQciMBLYlapa1tM7E/DAaq4NaWnID+VWjwLqZ1HK/AQpkVcuvIh3v/4F5hZvAk4yr47miZm7L2TGdxe975/CL97J4DHgTaqJp0rz58/F3AsLi7208BOehjGNjTH4LsBIiWbAR+BTODR20nAvUxw3ThWZNJlHIxSnyrqpknjyl6dbgqZ9fK9JvgIvFDjliDx2DNBqPlIcEsG2hbufv05djefY3frOeJeAzk3kWadpIVQNXvaNu1XopslQXWTJZCjmMCj4kppl4Odm8T1936C2x/9HOWJeQmqc8vy4mQT0n8IQPlzX8OFB55RV4yjgwWvdK4QKAQe43GnbVngmVU5a3+Y+j6qnfyc4KvVan219vR6PhVHU8nKg/eBBNKtsoYpAXW3nteXdeqOqRoS/CzdYU4lG2/SqRJ36jjYWUfzcBsP730tzTqDjioDItEte8YLzaGt2KT7l6dvQppaSuK0IraVLvGWh17ioxsVUaldxu2PfoHrt34MJ1cW2y8bxqE3mJshnfpzT/ofwvHeCeAZaUVJZSSeAR6zUE7bjDv7uFifsfk4QQg8ZrdQ1SSPC1XYsyeORptOczTg08wloqYx11F5HzNXabr1iJ33BvCjMyQJEJO+ISFfpmpBtr+9jpWnD7C18RxhpyFdk6ha5n3SQkSIoq4u9yEpkW7pKe32tDdT+FeY5JnoOJ+DxCbofARpBdPzN/HhJ3+HxRsfIGXbZmmAouJ2XLwMveLZ4/dDgNDrXcM7BTwTxyOnJiXg7du3+/E547nMGvScBEatPGl4TYCdquvGxoZ4Owk6qpz0dJo6wGEnTR/IEi9TEo9zOE5ThCFJZGPpYUCXvgKFokcXeykmX6UDx/O0VNGNQnT3WGMr8ZpPo3gnqMOghZD09PUDHOztYG97A/X9bXRbdcQhq8yp8irmbGnUIguB4swcjJWuEO/X4vF6FKFtLwrhF8vohjbqHRvVyat4/+NfYvnGj1Ao1aRdl/HQHjfGf74EhdcDyF/qVxceeKK26bIgqjCUeM+ePRNvpFE1s9LMZKwYKXnWgyfgTHCd4QUG16nOUoU1Mb5sXI/HPVJOJH4I3a9BWvWkQiZ7sL+DVuMAadwTnkvxMtKBEcVSHydJWSwXt/lb5dQwgMsCj3HHbBD6SEoce0J068IWFva6CHod9DpN1XiTDTPTSMAvlOwaSKYr0FFJS0mn+ybpjBVKPIYWAnqDnZzE7mK7gtlL74tTZfHKbTh+SXOsnJyVctb4/6WA8Zc+7oUHnnlwJoOF71nJxGoDEwDPGvdmIp/1ALKqKPelxKOnk5KOx2VamrHz+Bmvp2/3iUomnh/F30lKEsdGp9PEs6cP8fzxA0S9lrSGppfRpceR1W9BoDyK7GQUtiSxWbWFVmpnFnjNVqv/Wf9eBkYZXIftkKWLsnbmJPK360BsPumTR7YxndSpGk8e3aTenJUJjOwbqj+qsVzwLEcaloRpAZXaIpZvforr7/0ItalFwKIT6ozMnnPM4nba3LnwwDMSz8ThKH3oiaQ9RiCYagNKLf5tYnBnhQLMoBJIlHrcDKCMp5MSkMCm9GNqmiHH7VPER6F0X5UwAQPM9AK6LsJeG8+ePsDjBwxYbyCN2rDirmSLCNteTLuMnJYRLPJbspwnA7rjFo3h79X1m0JV0+NPhQEIaF6XIhsz/fuOAjs7qSRLJVW8mOqoqk1XbNmIbR+dwIGdm8ClKx/g5vs/xdzCNXi5MqJYFROfOkFHwDtr7f9hfj9MaGsyUZjszFo7UxBrPJEEEcFkJsRZqo4BkzmPseUMaRKlKHM6eXwDTJMBQ/CwFbJqu0qKBWaK0GGRYH9nA1vrz/Hou68QtA4QdQ/gIkTOpdRj/IySiCU3DFoPVM3hp3CSmtn/3EhdwkUH/8ksplCk8luPbJl2fYNjq3IgAzyp6rMIPBfdmI6VMmpTV3Hj9me4euMTlMfRDyySAAAgAElEQVRnEMcpgjBCTufAnjR7zhr/H+asO/uqLrzEy+ZLZh8i7TDaP7T36AQhOOjhNIDLSsjThpHHMeVBxitnAuwENhuj0NlCqccguwHf4PgK5NKFT0DA2rcUSdxF0D7E3a9+j/ruKg62XyDuHUrWiGsxPsZMnARB0FEMXydsxmlkvj6SdEwTUSTboE21OG8SRbsuziUtceR3ElvUNUB96aY6yBvgqRTNFDEdRfDQiRxUJi5jafkTXH/vU+mB7nhsbUY6CKalnV51MALe2SD+Qe5hJNKwSmPoHegMYe5lNgZnUsw42c7yamZzC4/LvKBKaxwcTC0jAHktcl2c1OJQGUw+TkjVvUe1xzrcXsHmiwdYeXRH2JzTiHmSkTSPpC12xFlyjFpm7n9Y/VS/S9ELewI+W5jTDMmQygWVcTCtosWrqotzMnaZakjC69cV69rVE5PSz/Lg5idwaflj3Lz1c8zM34DrV6lQgy2clSp7esfbEfB+kLA6+6IMGE6SZHywT58+FZuPwKAzhPaYcZWf9eCNx5RxQVPbZ7IuDGiZKcPcTqqbrHqnPSnHtx2pNCAXiTSl1fgjI5cllHoRPC/F3uoj3Pvmc2ytPULQ2YUDdm0lFV6COAj66dIm4XkwKsYuG9hnAuu+gKQ1RvWWoQzVhJPSTrdSkMOINDTVcNINVldDCGemseYoraVOXQDLwAOdKpGVw8zCdVy/9RO8d/vncAsTiEMLvTCWfoS+742Ad/YUvph7GMlHm4wvqoIEh8loEepxzaVpwEuQGe/kEdXthCGi3Zg9PmN8wm4GoBuQBCiR83oUYWzyHCkw+XQtJiFgRTjYeo7v7nyO50++Qtjdh2sHUhVus8KbEEgIGlVtwP5y9D6SRJbUegKPvvNFSye6/4Vjhb0P+M5zG88kQaQBqqncpfGkgqbqKMtxSRgySGA7Llx2xrV8tAOgF9koVKYwPnUJf/+P/0WqD/KFCTheSZpYUkIqFddkvbxBEsA5nZYX3sY767mYMAPVTWaf0GajLUZvpymSVXaPqm4wjhEe96zqA3GY6IaY2ePT5qP0K5ZKEjBX6mAq5TOc3LT1pJ0c+6OzUsBKEHQOsLH6EM+efI2t9Ufotndgx224CfvUURJpRjCyQct1MkoRw7KNXNJMYJqQSKmGRGpPwCT06uKZ1NyYmbIjlVLG5GldVS6UDqoRiZvPoxfFCCIyiXlI7CKKlWnML93E3KXrWL5+G65Xhp+vSLCctyqREyEQHgHvrPl5Yb/PdhOiOsgKc4YUqHYSHCY4TnAYEBnJ9zLSjscyDhUe34QxKPF4/DzVWgFbJK578ajaqr0zaReo6Dk21dIYSa+O9ZV7eHjvj1hbfYiws4ec1YUr2SSmac+gfkE9NKUSmqI97SPRlqROiJbdKF0JRkdSv+TeLGbRdAX4ShXWjhgtGckMnXp5dMMUYWzB9csojU9jfvEGrt38CAuL15A6eSkHstjAkouDbsWlPMd95F3Y+XXSjb3zEs/YMaLihaFIPdNJiEWu9HRmJZ/Jz+T+L1OBYMIM2eMzyM4VXySfVLDnRPqQ5pzOBtdRk5T912lzMeSgwl0BApLKPr6LR/e/xvbGE+TQgp0SHKoJJCVkzMaaBDFhJBXlxu+pbDIBI2vntBdVVYwr4Mm7ODBVdQHzMhknFLVQjqgko7RPtnI4aMdw8xWMjU9hYnoeMwuXMbuwjJm5y3AKTEDnhbsKdDJmyt7k/bNXQ8bgfKfA984Dz6iORnrRfiMwGArgv6lyUjLRcZIFm/F8vozzxRyb+5rjE9yMIU5OTqA2MS79xKWBIx0rnJDsJUdzKmG+paMSpZMQVtJDq76LJ4/u4tmjb3C48xhpWJcyHc9VPeuSKJDKbylGtWnv6QQvqZlTgXrG/tR1GUo+soMpoiJJvdaVBSpOqNRKBryjmPYfOWbysNwyQruKsckFLC5dwcLSFUzNLqJQGQfcvABUd1hXNqMgmgvEIExxhF7wHYLeCHg6j9OonKaCgSonHSKM0ZneCVnPqJkjLwM8HpuSz6iclKw8PqUrpd3YWFVeBBjtO0mjon0n3XsUEBhwjqMAOWYtg86WNbx4ehf37/w72vUNdNpkdo6R9xJYdMgkTDFzpKkrwSsVAAZ4LNmxWD3A7yjhbJCAVqoLJNdSu/kp6SgIUyBKIXZcnHoSh8sVxuDla1i6/mOMTy5gdm4BtckpWPmSunY46HRDuGxnLR5Q5Q6VjBhD1KTVY/XJu7W988AzqqZxoJhMDcbeDK8KpR2D7HxlA+BZNfWkaWOcMsNhDcPbQslKt3qlXESlUlahBp3/b5GjRG8SciBTmkqgRNTroF3fwv07v8XG6gNsbjxGGrFQNZBwA5OqPYYrpNKVKh1VPZXlorhRVKI1UkpaGxaJiaRiXOWOqs1Cl+lwrCBwKOGK8AvjqNRmMDm9gNLYLJavf4JiaQIeuy4J4CitFSdnGDEhXFw4OjyjckI1ZZO82Tr+927Bjtr7WVmqF3xEss4V04zEgMt0ieU+lHzZxiUmMH2WxKM6aajrDFWgATcrJEi8xFSxXM4TtbParw9UleactKzgljCBVIgTd6xSYAefGDurj/DowR/x6P4f0W5uwLEasNMOnDSET5o+6X1g7DLWGaheB4zfqYwTT6uXFIuRWGI8Ps/EuFwnSGF7JXjFCeTLUxibWsD84jUsLt/A+PQlIM0BDtVw5psmCGJSG/oSGzw+SKBtTLbtimN4DqvPRxLvgsPs1W+PwGE1A20yeiKZ9Gx4WoarAbLlRS/rfEnjVCrid3a2US6XcGlxAeVKRdl7Eg6g1FMSRMkgFQiQWFrQFYBtrz/B3W9/h4f3v0C3tYZyIYWb9qTEh+qmY7mwGXSgY4OqHrNKWAoUsuaPFPYq/1OV/2hJCAdx4uGwGWN6/jquv/8ZLl/7EOXJBakat7w8XC8vzhgBqUT/dVGhski1Q2Zw4QMCQ0MPwVOb/nev/mzO8y/eeYn3Mg/PVJdzhaajhfQORioaFTKb6WKk4MuEGwg8qrS0J1kAWymXMD4xjmKxIDM3ZLYIJZfO5ZSurSpjEgnJdsMQvfYBNtbu48G9z/Hi2TcIuztwrS58O4Ej6qPiBIwj1RdBqiEkfpjCdnwdFGdSAJOjFYFvmrpIkEc3yqE2fRXXbn2G67c/Q+3SVcApsAcQ4phsZMpZYsLr6t7V39/PYDOAU1JPLSP9vJiXeRQXZp8R8M54lCbhmcBgnR1VTGae8JUlXR3OmXxZ8HHyE0wsIdre2kKvxyLaCiamJiTGF8YhLEdJvD41guVqB0iKuBfC8x0kvX08ffQVvvnT/8TK0ztAVEcpT1nE6nWdbRIpxw3/VGzNDL3LkUl7RKtMST06cwR4OYRxEYXqguRb3vrob7B48yPAKbJwSLJuPEeHMTS4DRWEsn+zDGHZ+OJACTWAvTCIeskbGQHvjIEyNiCBRZWT4KN3k2lllHzDW9b2y2a5nHQaAZ4EkoGdrW3xdNIBMTY+hlKlBC/nwWHqGCGhS3jo6eR/ytZL4Hr8PkBQ38S9u1/g7je/xe7mEyBuDvI6tUM/idjPQIUZaGtGiSqoFWYxo24K8AhKH92Q8boKqpNXRN28+cFPMTW/DNstImBKmmMcJkoRVlaokmLH2b+DjnxqRE6jfXjJOXwudxsB74zHlg2AMwZH4FE1pKppbL7sBFMqnCLtOcvxolQ6VX7D/6JA5XQ2DuvCv1IoFlCbqsH1XQkrqAA0U8j05KYTRH7Ld8b5emjsruHRvT/h/t3Psbn+AHbShJWwwUgMnylpVDlDTncHjgCPkk4VvxKRBhiSYcJE59RHq8uQXAVzi+9JIeuV6x9hevYy3GJF4o5Kp1QvFfwYAM+4Td69bMzTJ9YIeC+panI3SghKQKZ9Mf2LXsorV64ICBkGMBLuVYAnTpSIlQZK9aPqyONT9aTwmJqZRL6Yh6cLRlWus2LzYi6m6yp2bGa85HxPwHO4+Rx3v/4NHj/8Eo2D54h6e7CSDvK+w4QwRGSxjR24noswIVWfljtiein7S7PAwC8U0eiE6EUuCqUZzF66havXP8GN936EsfllqaxIdGWDcvwYqJn0MiPZzqVg+otd9Ah4LwE8U0xqwgD0dDIATvAZWgeml2XBZyTe6Q4WlRXCTH9RHunBTIFeq4P9g300Wk3kC3mUKyUUS0UBisiUPqUedUYG52OksS0eTDpi0Gth/dldvHj+DR4/+B0ahy/Qa+8IdYRLOoYwhpU4spCEIvEo3lR1Ar0vkkpmse9dAte3JXgexpR+ebj+FObm3sPt93+Gyzc+Rml2UegdZDmQxO5BaOA4iZ+17tQS8m5uI+C9gqqZ9WBmA+Amp5NhBpPd8nLdbpRkUdkpFpIwVuADUK8fCrh7QQ/Vsaq8VL2famGlpCt5KwORlswUoYdUWiAjQudwC/s7z/DF7/4bdrcfo7H/Quw9Vq8Lg1iSwnc9pSrqQlZFVqTKiMTms1h10FXS1vLQ6QGdroNyZQ63bv8Ey+99ivd++g9IbFKwG0+m8sAq54pROo/CTQvtPljfRehdeOCZVTcbvKYEY9oWVUQCxfCsGIlmaBn6leKnzIwnT54IVSDBRyJbgoN/E6TH9WUwNqCRhOJYUVNQqXmGUkGqA4Bnz5+L2snjXrp0Sc7De+E1MuMlloaPTDxmloirEo+ZoRJ2kUYdrDy9h2/+9Bvcu/t7xL09lHKUdm0kUVuVrcY6Dqf8pFrF1JmVcj0MiHtiE4ZRKmljrldAqTKOQmUBv/j1/4aJuRuoTs2yK4m4Z1jNztvgdYpdqWv4FB5VOzAykCmV+d10r1x44KmV1zrCy09pxRclh2GSNk6OLEWEIaM9bUWmVCIwaGexjk/q7HQjlCwVhFkADKiPc75k1VLzb0PKxOObOj6CbxCuYIhAcViqkiJVjcAYXxqH6LXqePLwDr775ndYf/Edou4WrKQBx2qDAQOH3VlpL5pCWaq+bDiibzoMQunW6joMqKcII4lFwM/l4eQmcOvj/4QrN36C5ZvvA8UxkYyRVKMrp4+qSRcSd31EfkdHkVpwjIx916TehQee8UpmuUfolaR9xs9YfWBIiIYl38sAj8cwdIFMMWNaGSUTt6yH00wsA6jholqz//B+3J/AJsCZP8qFgscfsH/pUiASx+qaOTmGxOvYBtlG52BLavi+/erfsbZyB2F3F77LCvYIDun7hENFBdmPNrAlExg5WViWpIP41FT1/rFVQHH8Cm588FP86LO/w+zybcApI4kdsFZPhUGYA6pKjEzejemvPrDx3j2f54UHnqn9MtKHQCHoKEmoclKFo5TihOY+hnSWE9uU/py2GpueewQGX5SYTCszdIFGkmbtQx7vZYHH42V7M/CaGD8kwJUdqYCn1E06a7R9JZoq6954thD1zWe49+3nuHfnd9jaeIQoOIRr9eChKwnVipCWauGApo/HjlmgywC7RDB0n4SEGkSKILbRSRzhVSE79Aef/BKzC7dg5Sj5mOytGMeU11RKJEQGKpCrUVXXNwLehZP42QwSI4EooSj1DCgIMko9Vh+Yic7fmXZbpw2KURnp6WTwmy8el+Dja3jLqprD1BHHqZrm+JTGJrWMxyCwBXyaJMnkhahMFBVukEoAyfdMgKiN3Y0n+O7O73H328+xtfEUSbiPoteBmwYCPJsFruTlU6nYyuKTxiORELKLKsusGVYfxKR6ADok4nWLmJy+hg8++Vt88umvMbl4C7CYA0rJpzg2TQW8StgeLA4j4F04yGmXhZYAZsLzU6puLMfhRruJQOSkN6zS/Nw4ML5H6Do0Tjyu2Yd2GHk0CT6CmIxlPP6wPXdSZcNxwDOqMkHKf5OOkJKVoQsCr1jIixoo18Agu3a0SMEN6fmkFTKxFANhE+vP7+Hrr36L+999hYPdJ8hZe3DRpQNTPKLSWllQrAtg2dgkjSRhm4KKwHOYeM2ka57Ls9HssuKhgsXLHwnw2IKrOrUkxbAxr0FyOQdp3lJsq6kCB2VCF3QCnnBbF17VFDtCt2I2Y5AFHnMuCULaT/RyEjAGLGf1MM/aY8YpY+wx2nsEw9zcnLzz2FmOzuPie8cBz9h+2VIiBtjl+I6DqYkJeJ4LP59T3kSG5KTQW2fOJKR/4CDQxgoQt/ex9uIRvvn6Czx58Acc7nwLF204sUqo5ov1eKatcsjyHQGhjq3zeAQ1OwPRaWWn7OqAMPLheDXML30gKueN9z/D+PSCFMaSyl38pP2Gm6bxJoF8OoX7RYXjhQeeoeYzaiUfJIFmVE06KihJ6OWk5ONkYsU5VU/xUZxBuEowUToae5G/4bGY10nJdO3aNQEda/L4PhxUPg1sPJZRfU0FO39vwN2o17EwNydV7Dy+7akYoGKC1mllDDNQiDGNLQ1hsZtr2MZ33/4RX335/+Le1/8MFy24CR0tIVz2Y5BaPZW7ktgEjHRTUZXsdNqEBKmCRLPTltACyL/SCGH7Ncnn/Okv/hFXbn6EYm0GEZjvqfrgmSwZ5XCh6qptvouKsHdd4hkaPzNxCTxOZtphBAS/JyAZg6N0MSRHxrOZDQeYqnKCIksRbz7nWFOCMq+TjhyqsKYrEfenPSg8mh7p7s5mUjb7GIcM7T2Cu9vpYHd7W2gjpP86S4mEJoKZJwy0WwiDbCCbrb4ixFEX7fYhOs0t/PP/9X9gZ/0BDrZX4Vk95OxQYnxx3JUsGNUNj6BR1eUUnDYzVIwzR5jDWOPnSWJ1L7GRK0/h+u2f4Pr7P8HHP/kP8Io12G4ZcUrOGfamgKS3CQyz0fR3CHwXXuIZVfM44PEzAsJQ+BF0fHHjZwQgY2ZG3TM5mMYpkv1bTfi4n7lCwJqwBaUamcoMV2c2Be0s4Jlz8ximrx7/TVUzYJHu2ppcJ0uJapMTcD0PYaiqyxWwB2lZuhRP0sGCThNBZx/3v/ktnj74Ex7d+xKdxgZyThee3UMcd4QQl/V6AjxhH6MDRgg7VTNoAY2twgu2itZ1WfPnFDC1cB1zi7fwi1/9Z9Sml1GtXQLsHOJE0fop3k/lsHkXt3cOeKZNF0FhgMeQgpFenNCUKHwRPASmNBVhIw4NLDNZ6EzhpDe2G3+jYl6DHt4mxqcYxSbleNkMmZeZdFmJZ87Fz3h9+7t7qB8eiKNjYrKG2kRNqg4o9AgU5djR3beE7k8nVdJh0m0iah/g3p3P8Yff/wtePP0aabiHvB/CSrsIg46q2RNPJAPtKtRAiUc5qFrmKWY0fsjq9iCJ0Y0gREiFyhw++fQfcP3WT3Hjvc/gl1lGRepC5TglVbwj2vEonPAy8+Bc7WPieMZRwolIMJjqAjo/jHTjjXEyEyRU5Sj9mARNZwulhzmWGYBh4A1zqnA/7mMYywg4go82pAHzcU6W4QE2MUDFvjwoLhW7NQU2Nzexs7stKWQzc9MYq44pMgdytYDuf4kqiO3nupQ4nOsxEgbHHQu7Lx7hzlf/hm+//jdsrX2HNDoQqce+59IAU3qbE3TmneeV7FIJ0kdxgNRmQrUrNiGLH1hOlFpljNeWcfvDX+Kzn/0nLF77CPArkpAdMdyheHt1WdLx0+qiSsQLL/EMWLKlOiYeRjCajq1GCpkgOiUfgUcQmhZbR1ooa9WS0yXLLG1UWmOP8byUhAQ6X/yc9hhtSBMiOG0lM6VGBqDZ0ITcG6sNohhb2xvY299FLu9hZmYa1cqY4mrRThYCj8zUNNJIIyj1d6a3etwTclyC76s//Cs2V+/Diuso+AlS2npaukkSmCRSK7VTNbGkWhoIiZLre7A8JqJZCCOmmPlAWsb07A188uNf4dOf/Rq1K7cBuwAkjjqE7jR70hiMgHeu5NzgYo3Dw3g1+SAJPMbaKKHYB52gG6Zl53eG/5IeQ9p6fM/mcpoc0CzJEc+XVQ1Fq7LJCh2KZKIDhxKU9p4JW5wFPPO9Ad9ASupAuWMhikOsrb/A3t42CoU8ZmfnMDZWk+RmBUAgCsVPKdkidLxIm+UohptzpYh24/EdfPHbf8G3X/0b6rvPpIjWtZnZwgA7iZAU6MjFSVJbIUmyukgRImK/h37bMYKOLb4c5PwxxEkBU7PX8ZOf/wM++dmvUZm/JgF2EuTabMx5iqo5At4FAJ5R0wg80yPh8uXL/SqFbFaJKEBJIkCh9OMEYIzPtPDKSjpKOQMw4wwxfxtJS7Ac17jE0MOfNLxm4TiO34UZJGEQwSfJrZWi1W5ga2sdzWZDwiGTk9MolSqwLXJnql4MLCVSzg3ddlnYpjn5Y6DXwMrjb/HVF/+KB9/+Fgc7T2DFhyT5U6EIuTn2LSclO2vweIwWbLJNUzHVbNO8LsluSSx4Th5B5MD2qphbuo2PfvprfPiTX2Fidlm4Ok0a2kn3n1Wtz+kUPPayL7yqmZV4w8CjFFpeXu4XsHKEst5PIyVN80rTWNKAq9/LXLfyMo6V7CptPJCUlLQTCXrG+EzOJVO/Ttt4jVmJ/H37D+h2e3AcSwDY6bawuvpCV0tUMD01q8p6hBKetO2UeMqzKCC0bQlLOJYFL+8B3QbufvUbfP7v/zeePvoSveYaHLTgQEk9RfPuIk08URPDuAEv58B2PKlcCFhTCFuC+wRfq9lGLl+WWF5klbB088f4u3/8X/HBj36Jwtgc0piOK03cKxku2c00Bj3J+XJ+PaIXHngma4XvnMR0pFDysAUzgWIkHid31olhQGjq9Ri05u+4HwFoeilk1T8DuGH1KJsiRmDzWMw+IQivX7/ezxHlfrQpeU4D6uGC2mFnTLbJJAHF47daTbEnG42m2JJTU9P9xiscAyWtlUtfAnPSjJIFuSyps9Ctb+POV/+OO1//f/jD7/87cnYbOasHl5ybQagKdhMHtusgsHqSz2mqG4TsiI4TkwjNxpusqqdzxynAK01heuE6fvEf/gl/9/f/FUlShe0zqdpC2GMvQAtejhKVzIWR6hHfL60dpJ2Z3NTzWsP+zgNvaWmpr2pmHRhG1TQOEKqbBJ7JUDGezpNUoWzA3RzX7MtjKWCofFGCgy8TT+RnxolyVmaLkb7Z/Xl8em55vfSqUqryZQL2g/hZCtdTHJsx+R3o7PcozTpYY/vnZ3fwP//l/8Tu5iO0D1aRtyIU2egyCCVD2nbYLDpCwjZifS4YVU1Pr6famCQNBHEsrZnhlVGszuC9Dz7Djz79e9z+8H9BrjwrcQUyplFqst8Cva3q58NcnOaoA26X8wi+dwJ4ZvKaXnWckGy/TCAYVTMrWbKgMf/mMTiJmZFCqUGJR4eLkUzD3sasJDT/zsbvTLCeLNK08ww4sv34Xia9zATzs+fnfRJ8lJ506PBa6Zk14Ob1KCnMoLyawJFwbqrGKhabmkQNtOob+Pw3/008nY/ufg6EDVTzrnShTcNQKOVD2reqeH3ALiahBvOhNEhAwP6CZC1DDolN9rRFLF39GP/xP//vmJq7ivIEKzkcIWJi3NDz89qmNKqnqXBQ6dbKG2oAfv5UzncGeJyYnJCc/AQeKRuywMvG1bJBauPON58ReKaagROak5n7ZD2bRgoZFdMALxuOoOTk9bCagYDmhKcKSweOAdNxcbv+NMxUrGYltfktj28Y0Xi/vEbTbNPcq6DFUrXiRIdkvKTsx8egO3lZWtjffIQvf/c/8MVv/rv0YEeo7D0njeBRtWVO2pFNFdQqjk3RG2A5zGohABnny6ETAI5fQWXiMn70i3/CtVs/xq33P0auRHvXQxzxt55I1KNGn6qY4DWbagcpMzqHlEnvNPA4LYzEOwl4nMgmY8WonVQTCUBOUsbk+Lnhb8nOwaxH0zhqspLVZJ/Q3qPayXAFgXyWGptVP02jlax6mpWUBDWdQ7QnKVkZwDeSWsIcMfvqKZYwCTkw1pcyp5MvdgrqYevpt/jy9/8Df/riX7Gx8hBJ2IDvxPC4D3v2afbpfuPKPrcmq+BZDyhtN1XVq5MDTTm2+3JL0yhOX8fND3+Ov/nFr3Dt2gfK3oOPJKIzyFLdkYwwFUnHHDjpe6Q+ZirbCHhDi98P4E8jsUzMjQCjBHj8+LFc3XvvvXds1cBpl55NqCbgKEUp/agmZuN8BmzGaWOOmQ2Kc39KUIY3qMISdKYlmJFe2WsZjuUNn88AMPsbgs60gObxqXYaydrpdeF6vng3zfym2sn0aEcyoiOge4AXT77B57/5Z3z9x3/D/s4LkYZW3EHBDoUm3tSZqwqEgRQyZLshs1v4jQCPjS5t2PkaWlYVl659hM8++1t8/KO/weLiTTgEX+wiCFL4vi4bMibfCHg/AFS9xCVkV38TWqC0MsCjV9FIq2GvJvc3knC4QoD2E+00TmoCjtKEL/7bAMYA7zT10JT9mH58lFA8DiUfJZOJERr1dfhYpnmKKHWZ4P2wzUeJSklNcPO4rENkb4ZIV0cY4CnRp8QfvZxJ0IbQZjZ38fDel/jyi3/F/e++xO7OC8S9A+SsjqSWSb2eZhAzlQz8kBLLdZi+1lMs2A4pBRm2sWHnxtBCCfnKLJau3MQnn/wNPvz4Z5idW4bjlsBsNdqR35d4I1XzJab+293lNOAZVTELvKzEMMAjkKjSERT8N6Ubj2voHvg3JQkntEm4NkA5KcRgJJdx1HB/SiVKPm4mTS3r6TwOfLwmcw5j12XT4wz7Gb8z1etUaZkqNzk1LSS5xBkrDBiOEJeI9IAGXNtCr804nAdYIYL9dXz91W/w+9/+P3j86A46zW04pIhHIMBjqpjiFVM8n/yQLaZ9j9kuoajmjku2a6VGOn4ZoVtGO7RQLNXwwYc/wWc//xVu3vwIBdp7Cs1HNqVqGuCNnCtvF12nnP24lCOqduvr6zLJqXKdtplsFjPpjVQ070Y9pIQyBbRZKTQcdxs+l9C3O4qkluAwUpSSlCoxbUhzLiPRBl5JxrpUXG74+sxnBB43s3BwPHit5ABlfE9agPXnt9ATmcVx/I4AACAASURBVM4Hmp7BECqxJVgbh+zN8PAOvv7T7/HsyXeqCaajytxtx4Xl0ClC4l22/3JQLpZEajE9lCo5g/lsXOlQjDoeCpUxpLaHfLGCsdo0pmYuYWx8BoUC+W94jKzHMutc0YJQO3J+sBPwhAt7Z5wrRnplJ2S2W+tJDy5rZw2Djr8xFA+UTMMV5q9ab0YQGZWTwCMIqSLyGjhpeQ7zMtksxlYzWTPmc+MR5TUbh44pdSLQqc4KYa/h0O1XCagwg/JKqq5Eqpcy0+KYad1Fs7GH3Z11NA53MTFegs1WXR6boHhwfZZYkYYi3+dnUbTusW7DTP4HLRGZxsYEa4Y3wBBCAS57qEseqKmg1yJPXZImYaIwNIRJ5y+UIFrVRW/FbBwZpvjUSJeslDhttTxOYmZVvuO+z9p2ryLxstdECWXCH/KgdPeh7Ds/z6a4HXctpoI+GyIZhB/Yr1xNXBUX012D+n5C1cKZdA9EqM3Qg3gZCULd3ivqKQIVfi7H0n3QwfxQpW6qbQBow6+pAK6Po+OAqRDyMgNH1Rvm/Vy/g1G2pHfQV+981vJdeOCZSSuPPuN8yH7+ssAb9igaaZKVhAYYWYlz2vFNneBxGTDHgXb4s2x4wqigWVV02NFzdOHJ5EYOAc9wPJO2XSSf9HcwvktWjpO5GkhC9lgwVICEl0qYVoWztOVMByFlAYrgkg63itqdvRxY00coW7YDi8WCumMty44ktU3X7mrlMkOMqyTgedwuPPCGq8b/HA8pO/mzUiYLQCMVs+7+486dDS0YezIbfjD24klOGlN8O/z98N/mmFlvJwtjB9ev7acMDR8hR44U2mV976KQ1KoqB6qQjsTRdFm6JkhSaiJ7MhyvBhrZqouM+qqtpr3NDJMCq7z6+FLBeUVZdl5h946omlkVzthdWdXrTcB4kqQaqHOn2yDZ/U5Sa831GYmdBajxemYBlb2fLIjNPvy98YDmcuz00x+hQeaXkW9MFMncgvIn0iJTaWFJoJS+lP3TSf9AlVK4JljFYFqKKXpcfsf/l04KVJ1TIMcqBqPkUqPVgXwCmw1NPJffswvSIEG6j7jvVTO8yZP86/72wks8M5mzHsGsmnkWYe1Zj8NIHHPMYRvsLBsvK/GOk6QnSbrTriurEhtV9kTJq0nO+qZYRnkTtVBLFaZ8sTmKQEOz0Tpw4SW044wvRHWVFYlI3k2hd6CtZ3g9CbpE8XQKXVKfu0wV2Gr5Jrv37UwdHTza1OHIt2c9ox/i928MvCxDsBqw4RXerFTD72ZvlTGh1kFuJuvhqO6u11VJF1LpeiqjQTkFjqzxmfVblcmISuNkWyMrVUVix9pTZuwXZcXoGcd3vZNK+eUxOGFUXwK5Wh3g5Voec19xQihuFJm00s9gcI2DrH1114M2xsclPg1W+f7o6eA2pYHYmFI2IzUAJolKGBm0z+/oyNB7KK2fIUFt+R0blZwwMxWhmPqNDImdSt2ekl/qWaekDxTy3FS+l3CEPEIFHWGH0B5TxuCkEadINuXYSUg/wcADe/ylqt20GWczEwzrtHlGxuuqLltbjlKaxB/3f6XHZUAfL3tn6OMVW7Y5iskx1YdRhzbZBGq/zOo0GLXX86q+EfBk+PV51cOh81l7yYTN2GS/G+2dg64AJpJBvF6Oar9t0zvGB+UJMQ8Zyc2xTWEIh5ZZEjJlYk/pJYzH6l2ZF8gHSb81Gzwaz5eyE7T3TMDEJo4uwhjwcop52dHOhZjXJ541G/y3xwRoCXSpiSoTo99wUbcEIGMWWyrr5h8eQacRTLeBTMTMksQGknreyaS2Nakr71sSrkwjD3E80Duh7kWz6AnLl4p6s2srSWeVjaXgQZ5nZV+Za5B4OGvttHASpS/uqfuwyfplnptqoKU6+5gqOHKoaEHHY/QXkYG3kh1tSWAkUlUWBPZcUADraxTSECYQcLqOp7k61YIhnC5xIjQULA+yXZ6TV6nq+rLOFTX3TetogxrK0UDvyXbZSs2V+xWJrWSsHIlSWFiwNagE1fr5GuPTSHCdY5qkoe51xHgru/LyaSoaDal5OiVX9CTz4Y2Bp/iGFe8Nq5y5IqqV3pCVqgJLrojCTpzlJIELx1aqSGIpegWkOSTiSYukKFP2Z08Aw/Fh99S0SnIy+Ugtx3mrHpCyICh5UpmsjvbGEViqw6n8iBXPsStNN4h9ruo+qZHZoIO/dXg+dukJUOQKIDc4yBkcrJLKq2c5NkKbnXXIsOzAJ3JkthIUag03EkLiYn3/4MDNIKoX511f2JLdi4sIA9wOwsR4CAHfEI1xkRH3Pktu2FxEqXAEMq9DCyApRJW5ZG5FutCKH1HaLJMQSRWwMtZGDSHWKibJaj3pIiTS1eKL31EUcupxrJS9aCcePIsNLDUHdb83iR43oaHm8RlXZPzQQUiwOaxYT+DFKSxZARlpd9RClpBSXvXvU3KWz0s9Qy6GIr2kX0SI1OGCzIEhG5yjtCKpAwxgMcCvOx0hokOIC7N2zshqJzJXPbOs4iU+IqrGofbUqrFVm17ITQtr/enw218EeCJ4SHKjVxJ6vqT9bl930Utz3zpXBoOoHwNtRDW/sAINEi3C2JvbogRjVgRpBjQfI3qayTinABsHAlAlK/QqxqlDoGhaOxk/me88MTM9uL/KyOezjqMEnjtQSTjRZfrFEVxm6vc7tdqqD4C40gkMpfLani/PiyNB/KrqawWq1GIeo7o+Wb9lEltaI9L7EJgywTSOBKUsywn1hfN6yFqtVCWRxwZVsuDq9VcmolqRhftySIeUYLkWErZtmk8OSm8IfEsnIavhVCxlg8PwvlXPdKH7Y9pcTC5RVxpcckLrQVES2GKqHUMPtoy/8LyIesMFlZ2EqHwk0ibMMzacbn/EqyM3qMeJrj0uIrm4vyzQSjVNI9WNyHLl4oXOUOaWvuiUXDEZbYCLiBRKmGqJYWmVHTMZSCUtjQ1qgGXJPOJz4/gNKBf/SsDTOlfmbP0bjkNpE8xcwL4olyyIo7/hLUVJBMuORc+XgRO89tSKL65qAi+nJwAnPB8W8wc5MhwAtXr3xazFc2qgDuon9fF6Wp/LySQV8Ek2fiCfSwdkUYVU3EpUVFmttVqtWx33ARy5gEu2Zb3FtFnkqLLCs6WHEvksMKV6rCYSJU2UsKCWKza5UBy4fV2QpTlddV/y8HmdvB+tK0YsxTHSTqaZ0gjkvrVqxtFir3MBpnLvy4TncIpGqO6JoOjnjMkE5/VKZxK9mBk+FNFt9XgrpV8p/vx/TxRcJVpVhgvtOcuh1kHSI2VqKOCxVIiXmZdDKBMwghXpazV9xwRAGnS8l4Spb7xneUAaeGwrRv3XRmor1ZYSxmjqYp87agFX18tj6vmlJlkGNBxzc1+mu4rSgtQgGtNFr6kWqy3ob+Dx3gLwtK3dhx4HOQo7CMM2opAdc7SUo+EcqxWJuXq+n4PNngW0BfRDEeClDuKgh6h3gDRRybe2m5dSEdv1VXU0ASFeM9oWXSQRWY8DSWKm1GHqkV8Yh+sV1djGELrzIKgjismKxUTnMvxcUSjKu+0W0qAl9iFbdviFIrxcQWrJonYdjthu2jFAO1QmEBcFDnhBzpOyjwKbl/Q6UqHNQlEBHZMU2ZvcYdOSEmDTfa+kMVtfOQ7vn15AZZmlYSD06qRfoFQL4wiOl4dfrMJxc4gCtlduwop7wkdCu5K5jpZbgeeXpQOswD5sIQpa6HWa8LwcbLcAy/bh+gUVpKZV1O0gDtqi4gleBCC0SbXNKBM6pyc2RzZCmvRkXHi1LFuwcyX4XlGkXbtRF4DEVP2sRLVrdnNSYBszw0XH/yitfL+KfLEs+3XbTaDXVM+TtIOcB24RvldA0FYMZ2naQZJyPij73eO5Ld5XURnqLMpVjY6UMp8EiIImkqilDVR2MyrA9UuwxNPKMY8RdrpC7Jsk6vpknaPqydxZ+ihI5e+xIUy5DzCR2xQMYp/yWG8TeHLTKeKwg16XlHiHCIImUq6gnLS0Ubg6gUQ+ngKe66EyOSU2jOQaUu50ArTr+wg6bPDYU0LeK8IrTKBQHkOuwMRZqoeRnKtxsIEkJPB6CMMs8Mbg5aoYq84i7AVot/flFUYtaRFcKtdQ4GR2cmgc7iNo7SOOyCAC5EsVNSmSGAdbqwIi1qeJBWlUTYE4e4GPw8+V5WFGBH6vDcRdJUGltxzTrDy4TgHFwjhKhXE4+TLgUopzhoijXkkjNiOpH+Bwfwtx2ELOd9ANesgVSiiPTyOfLyEgn8r+HpJeSxY12na2V0K+MINieRK5fA5JHKLT2kSntYeDvS34Xg6eX0GuMIZydQJ+sSwztN06xPrKAzjUIAT2nL86bYwShPaTxWRmLh6cbKrhSRoz48SD5eRRnppDpVpD2Opgf2cLccQFjAW0KYrlMnK5EjqdLsJeW2WoUCOwfJRKk6iOT4oDq1nfQ6+5rwAmAthFrjCBUrGKvc0NWDLJW8LfycYnlvTo4zzwMDm1gByfY74kWoRQ1ychwvY+Os1dtOrbyga1CyhWJjE2OYdcqYzEjhEFPWy/eI6EgiJgYXMIhxk6XHB4LACl6hhy+TGUylPIsdOtrbzhvBaqvoY68QQT78TeEG/kXOk7rY3UTiK5gW7nEJ32jkgYNshQTMTM+TMXze4yXEB8TLD2yish5+VFqnfqDTQPthF298hHLNPbcgvwi1Moj02iUGL7rBSddhO9ziH2t5/DMZ7OvmHPiZKXiTE3e1lW3E5rH632IUJKYS+HUmUa5fK4GMv1g110GzuqZgw2csUS/EIJaRwhaO5r4NGDSM1G9XpT1oyDbgihryNHSByGSLlyJ12p3k6tGF32YaCkT33k/Soq5QmUq5NwS1UBn+UoLyAdA1HQxf72Bna3VpHGbRQKPtqdtiwCtck5FEtVdFtt7O1sIeo24OfYnSeAn6+iXLmM6vg8/HwBYVDHwd4TNA7W0W3X4dITZxOc46hNLQi/SRqxd/s2njz8A1yLNA4eXEoTbeNR/RVG6MSFxQp1NsZM1WTlbz2QNbqA2gIbkkyiUz/E1voK4rApk5JkRWPj43DdPNrtDoJuSwOPUoVNVuYwPjEt6vbhwbaMPwR41Cx8WUiq5Rq2Vp/BSjuwbHVc2u5cxMVBBheV6gTGJmZRnpgXzUis+G4T9b0XqO+uIurWEQV8dnmMTcxjeuEqSrUJIWnqdRrYePId4l5ThAQXLAEebebUEucO771cncbE5JJcs+dVtIAz5UmnhxP+Ys6V/oHFBIhlpe519tFpb6PHQkmlqcClncabicg1wskYiKeuPLEMP19DOV8Vq6rXOBTgJcE+HCdWnUidPNz8JErVKeTKVdB9XT9Uq1m7vo6Cb0kyrTBkWSl6caL4+xMbs7NLiKMQQa+FTqcuUtH1CiiVZ1Esjgn/Y/1gG73WHmINPKqabq4gkyzuUNXU9AYEnuj6ylFCz2erF6BQpJqXh8XKzaAJO+3BsdWqH6YWur0YYTeFa+dRKddQqc3Cr0zCyhXQC7qqbIaevqiH3c1V7G6tSNOQarWAer2BQqmC8Yk5IadtN1vY3d6QAtVc3kGz10SuOIGx8esYry3C8j1R07c3v8Ph3gp82mspO/p4cL0qJmeWUJ1aQBymODjYxMrKn+A7EXzbg+/acGX/CDFDM7CFH8WSagPVyoxjQtHiwRd1sDJ/BWOTU2gf7mJ99QmSsAnbjsS2Hx+viXorBFHUBBLywFCncFGuzGJyahZBxGLiHXQbu2BQULyk8JHPzwnwdte5sLZh2Q3NWO0LQzXr+biQU72cnruMybmryJXGZVHstg+l9dju+lOMl3z02l1EaQ7jk5cwvXgdxYlpdKIA7eYeDjceIu4eotvRwBM/Ax07yqu6V2/I2M/OXcfE5GXkC1PKE6/DhVygTtv+QsBT7nsGjMVpIt1Ee2gdbuDwYAVIaee1pBCSoYZAeBMBP0fHSIRGO4ZbmMfUzFWUK5OiJzS2VtHY3wSiOlxXufc52Z08V7Z5FKuTMgH29zbRONyEk9SBuCM2St9rZ7uILcaCHIyPT6JSobpziIP9HaXq2KRkn8X09CVxoOzvbqCxz3ZXFnqsj/PzqE3OoNtpY39rFdWiD9dO0e0FCFPaqIr7vxsE6CXsGeBjYmISiAKkvbrwkfB8XATYOYdOD7rF6YTw3AIK1SlUppbgV0juoyQebciw18Le5gtsrT8Vlq9S0RdnSZRYKJTG5V646BzubSOg7emmiO0YlltGdfw9TM9chZXz0Tpcx/bGt2gcrqLgKQ8Gexk4bhnj05cwObUknCf1xh6er3yNXncfOdtBjlTwvbqEDHJ5H3FKG5LSjqU+ygscd3tIAkLDh1sYw9jidUwtLKC+u4HHD75GHNTFQ+z5HsbGJpDLFdFutdBp18Xm5/jzWJXKPMYnptDuNbG7s4agfQD64Xg/1IBKpSUU8xXsrj8T7cd26uIU6gTkP2VNn2oiQ7OBPC5jU1dw6fJNkfi722vYXnuAqL0PO+wIcxmsIvKVKYzPLWN68QoSx8fe3hr2V++gW6eKHMgECnqBmEzsuERvKTsgJbaPSnUes3M3UKstiy2tHNWUjG8FeMrgVsBTwVMa1639NRzuP0dClmE3wcE+pQmEVIe/4ATnas0WvrE9hZm5a6iMTQPdDnY3n6N5sAHE5O1XeX9hasPJjcuKVanNIY5T7O1t4nBvFUmwo1QlhxIvLy7sbhCj1YsRhAnKlTFMTowhipo4PNjRvQNy8uBnZxclBne4s46DnRWxybqhcmZMTM+j1+lgY+UxZJ1II3S6bM7hI0fpnPqiRtZmJqRUhgWfncYBuk1eT4gg6Ihhntp5ZXcwOEz3uJtHeXwWY7PXURyf0SpcBDtNEPWa2N54iq3Vx0jDOooFelc5H2wBHu8liWKx26JOA56vWiGTIGh84jZmZq+JxDvYXcHW+jdo1zfgWYmoT1HswPUrqM0sYnruKmCX0Ww38eDhl4iChoDOQ4hee08cKD77KVguehHtrTEU8mUBfbfREIdH3srBL9UwduUWphcuob63jof3/oiwuw8yyjOHtDY+iXy+jFazgVZzHz22BYsDcTSNjS0I8IK4g+2tVXRb++JMSt0Ufn4M1eqyAG9z5SGCzg4s61C6EUUJHTIMJZH8t6O8wnAxPn0NS8u3kC+WsLW5iq0X9xE0d2GHPcRa1WSDTAJv/uot2PkKDvc3cLh+B/WdF2g3G/J8qJkxMZ0qcKPdhFf0ZREvVWcxv3ALM9M34NPW03HB72dOHZV/fyGJRxiFGnjaTZsEaO6tYm/nCeLgEFYaYHdnB+NjU5hfWESrxZbH+xJ3iVg24tQwu3AdtYkZhO06ttcfob6/LjRy9LBxEHpxCidfxcT0Eianl8Utv7m5hu3Nx3BxKE01XFmV2RHVERarXqRieXRITE2OI4rq2N/fQBR1RW2isTw1NS/UBAcE8c6qBGJ7tF/yZczMXUbQ7WF7/Rk8m0oX7QRbKOhqE3MosBlHyjhWV7zbvmNjZ2sV9d01WXw4MqVKTdQxZvgHVHO7HbiOi+rEJUzMf4Dq1CXpriNuadrHXXX/6yv3EXX2UcgpzxrDKaRCKBUr4kQ63N8RG8/zbSRkOCtMYnruI8zO3xD1dmPjMbbW7qDb3ELaY6NJquAenFwZk3OXMXvpBnKFGVmgDg63kEQdMBIZdg9wsPMMzeaO9gS6CGIftYl5kV48997mGjpkLGP1eHUa48sfYXpxSeypB3f/gF57B56TopAvYnJiGvlcGQ06jA630KGNHbE1WA618UuYnJ5BlHSxtfUCrfqBird5QKkyhYmJmyjlK1h/fg/txgZSHKJQLMPLzcH1y+gFZMveEpWeC1Nt+gaWb3yIYqmM9bXn8rvO4Y60mGaSA61SK1fBxPxVXL75CQrVGbQae9h4/Hvsbz6TxaGUL2JqYkYq9FudBl5svEA3blO0oFidxdLlD7CwcBu50mQ/NHNa1oqKVR9vA76hc8UAjy4vDby4h8buCrY37yPoHiCgh7PVwdXl9zB9+Soam9vY2FqXAHGHGSq5SSws3sDk1Aw6jT2sr36H+t4a0pDqYyStn0J2lckXMTN/DfPzt2B7RWy8WMHqyj0Uc22xKxMCjS8J2eRQrLAVlnrw1UoJ9foG1tefoBfS4WPBcfOoViYki6LdOECnsS2qDBeD8tgUZuevitrx/PE9cd5YViDqR2l8GrXaPAo52hMOenGAfN6D5wAbq0+wt/VCnAi2l8PUzCLypQlpItLYX0XzYEdU27HJJUwvfYra7DIs9t2jC5+euO4hNl7cx+rTb9FrbiPnWQhIY+4XUBQvbBlhryvACzqHcr2Wn0epOof5pU8xd+m62M4rz+5ha+1bAW/YbMKj+5yrg5cX4C1ceR9jtSsS2rCoqpGaPWyjs7+GjRd3sbX1HEHABSoPyxvD/MIyJian0awfYu3pA9R3N1HyPJTGZzFx/SeYXbqCw90V3Pvm9+g0NkVTKXLxmpkXSUmNZ2/nBZotepU7QvtAe7Q2OYU4aWN3ZxPtRlOFVTxgbHIeM9Pvo1Iaw9qz79A4WEWaHKI6PoXa5C0UyhNotHewufFENAw+89rMDVx/7xMB3uqLZ3jx9Dt0G3uwyfspoSDefxG1+WXceP+nGJu8gk7zEPe/+mfUd1YktDJeHcfiwmXp5HRQ38Pj54+w19hFYruo1BZw+epHWFz8AF5hvN+B6axW0n8x4CWIVAP5WBUwIuqgvv0UG2vfot3aYr4FOq02xqsz4ljY268jCHvwchY6YYLi+GVcWrqB8VoNB3vrWF25IyECMKAqnIyqC42Vy2Fm7iqWlz+RbqM7a2t49uQu4nADadySuB7V7R45SCwftclFzM5ewczMZep32F97jKdP7yKIaHvF0iKK8S3mgcS0PXpkC/OQWDlUa/OYu3QD3XYXTx5+K7Egxv84MWyfTSoZ08mDp5qeW0CtNoZK0RPnwv7OqmTCUF2i6jM1dxmHB7vYXvsOe9srEs8an1zC3JW/weT8DVh+DqlO1Qrae9hY+Q7PHn2F9sG6qGy9IJR4owCvUJJYJSkXeq19AaxfqqJSIyvzZ1hYvI52t4lHD7/G9tr/3957fcd1XNnDG527ERqN0GjknBPBTIlJ2faM86zJ8zCP80/5Yb5vjaPsGXtsy7YsWRQzSBA55xwaQAPonPBb+9QtsE0zSAQ1tGz2WlwE0PdWOHVSnTpn16R4DYexOKwmrgJXygR3cSmq6jvh9bUJypeKjaeQDu1IhJiKb2tjCYlkAjYnvYxaWR93vgf+zVVMjz/Ann9VEKUZSSxuPIuSihrsby/JZSdUMGakRWh8JRXIdubBv7WBra1FsaTJVETO9lzZXuS585FKhcQixsIxtZ+3HsJTXI6y0g7k5xVgcWZYXOd0ah+FxeWoqDoLT1EpdoNc/2EENuclau0pqkdDczcczmwsLy1gdXEKsdAeDhMMdKnsFrqMnpIqNLefQ6G3CfFIGFNDHyGwNY9QcB8O7u3dBQJadRDax8r6KuOoMNldKCqpRXV9J3xlzbA68lSRkyRnvIRcTZXiyuCKGVkp5gRxLxNGYGMay0v9CO2vyf4oHIwgnbTIgSethFWw8VMIxtKobjgtmtrptGNlZRqL8/2IhXdhM1sk0seoZpTnc+YsFBRVoL7uFNwF5QhuB7CyNIWl+QcwZ4VhtxKTxIJ4IopILAmHq1Dcmcb6blhtdmytzmFubhTx5C6yzCmBHqe1k7oxubUxJG5tKsuJPE8ZfOWNCIeiWJwdRyoZROrwAIdMHzJZkTq0IJW0IJ2iy1qI8rIyeNxObKzNY2drRdKkHK5iNDSfQEl1I3a3VrG22C8XPvK4Jb+gCuW1r6O4ohUWZ44qj+G+MLyDtcVRzE/1Y397WSyHFPJaHLA5VOSUZ4s8IohFAhIdtmfnwV1UhZrGMyirqBNNPTH2ANvrs7AdJpFrd0rUNBoPIxSLwZlfgKr6LlTWnBYXlYnWPEQPbC5hfWkKWxszEt4ncJHb40Nj6zkU+6phsTuwtDCJ8eE7EqrPd1lkr1raehG+yjrs+xcx3H8TAf+iJBxQyVaUVSPX5cH62rK4v5HojkqFyzLDYuXFLw7ZeydiMWSluNZpxE0p5BeVobKyGwX5RZgeu49d/xKSyQN4vdWob7oCb3kNdvYXMD15H9ukaSyO/KJa1DZ0iJJaXJjH5uqCJBmQhgwWcUvACHRugQ+tHa/BV9opxzeLU9exsTqBXf+WWEarmdg5NkljDEWjSJnpARWjvLoN1XWdcBdUIctiF0Um1fwZGKKPi25+IRZPZd5xYiZk8axKTraD2F2fwOJ8L/b3lnGYDItFTMTI5DbY7NlGUWQCZocbjW1X4CmqFPdsaqofc3P3kZWOwJNbAJfThVg8jmAkhGAihNw8Lxrqz6CivFkiawy7T4/fQTS8iXSa4XU6cjEhGDNKHPZC1FZ3oSC/GHs7m1hYmEAs7ofJnJSDWzMvymCmA10RjpNCBSfyi6pRVtGCcDiKseH7AMKAKQiTlVFEnuMxH5JIWtkwZeWhtroOBR4nVpamsbWxiFgsBVdOGVo6zqK0ulks3fLsXawtjyAZO0BBUQ0q6q/AW9EBi5Pak5v6JBKRHazMD2Nu8gH2thdh4sE9rZUkJBO9y6oAg5gdkgiK4JntTuR7q1HXdBa+ihps725iZOgeAhsLyLaaUF7kk4yQ/eAutg/2YHK6UFXfjbrGC8j1lKuA0r4fSzNjWJgeFqFKp+Nwe4pE+TS2nIfDUyZHRRPjAxgbvoFgYBkFuRZku72o6ngTvoo67G8vYrDvU9kvMRCVn1eICp7x5RSI67e+No14kpFYo8YkydtiuT0IipK1W3IlaTqcjiG/qBRV1SdkvzUxfEfoF48foNhbg6bWt1FWWQf//hwmx+9ga3EUiWgMeZ5qVBOJ2mwVwQv4N8RVoRx4kQAAIABJREFUL/V6JMskEPRjc2dHAkLtna+jsuKknNstTF3D8uKQBKykyl7S5kxilWHmztcqdzvwHvfKmnY5T45LfmgadrtN4dE85fOFCJ7KSOQxK63GQ8HbWRvH4uxd7AcWJXsiNycH8YQFPAISJOFYDNkuK6pq2+CrOScb13hkF8NDtzA32webJY3S4jK48/IRjUUROAhgN7gLuzMfDfVnUV/fDVhciAb8WFkcxvrqFPz+JWSZYrBYE+ImUTBsNg8KC2pRXloph6pLixMIhTZV8rVYXp6jqawUxPcFTTmd5UKRrw4VNe0SxZwc78dhmtkYQSQZfOGjkoFD1OgcOVStr62Hx+3A4tw41lZmEY0m4MrxobPrgmzkdzeXsDB7RwQvEQ+i0FuDqvqrKKnsRJYtRyKb1qzEkeDNTvQhsLUgmZB2mxXRWALReFoOdRkMIkgsszxYmcH9R0FxBRpbz8JXVonN7VUMD/Zib2sZOXYL6spr5MrlncAW1re3kLbZUVXXhYamSygqrpTASmB7DVNjDzA3MyqWlBihDM3XNXbDV94OONxIxSMYHrqLseHriOyvojDXjOw8L+q63kNZZYO4g/33PoF/c1oUgyevBNWVdXIWt7w0h9XVKckaYrSTvE3aJhNx2cu7HNnIdRUhkT5EMBmCu7AE1dUnUFxYgsmRPvg3FxGNBlDkrUJTy9uoqGmAf38B4yO3sTU3jEQkIvcwVNY2iRJbWpzHwe4Wcl02dLQ2I54IY9O/isXVJcnyaet8HTW15yQKPz7yIZYXhiXQ4nLY5FgqHGFwjPgvdmTneVBa0YyWjovwVncCsIMwM6y4twpe6EsRPCbZSsEJkimVnGo6jGJ7bRJz4zfgX5uEOYu+exKHZhevVlO5bYdp5DmtaG49DU/5aTgKvdhbH8Xk2F0JLsSjQfHv7YSzs1vlfm+KCsPh9Q1n0NL1Gg7TThFgHtTv761jY2NFzmUSsR0cMkE7RcxJsxx6tjQ3S5ibLlg4tK0wH82FcOUWS1oUrVB0fxFg/qMjF+XVzSiva8fewQEmxvoQDu5Kelp2dj7cBZWwOvKRSDF6mkZBsReFhQWwm1IieJtrs4iEQ5IS1dN9AZXNJ7GzNIfJydtYXp1AIh0RzV3XeBll1V2w5SiLRyGLBf1YmRvGcN8NcdncuTYUevIQjUaw5d+RQ12zhajVLvEGNrf84gI6nG6cO/cmcvPcGBu/j+XlKUm5o8tXUlAiAZ1EKoZgNIIoAxFFtWhtexMVTd1AeBcjD25hbPQ+Ant+SQ3z+irR1HYGFdWtyCmslPrIaHQfC7PDGLr/EXbXZ1CUa4GnoAI1rW+jrvkkAtsruHnz11jfGJTjiKL8SjQ1tCHHlYP5hWksr0xIKQ69EAabAsE1WM1JOC0mOG25yHOXI5JIYutgDfkFXrQ0nkVxYSkGH9zD0uIkEsldVNU0yrjLqxuxvrOM/t5r2F+eRCIaRWFpHarrG0TI5mbGsLezDpspC3U1dRKNjUb25frteNqE2sYeNLVfRV5+AYb7P8LM1AM5P83LyYHLlYuDEN1SxiHsKPR6UVPXgab2S3CXtIjCJR/Ta2Jcigf5/+f1eFKFyxQjHrTyptAsli/F4F+dwNzoTWytToi1YBZEbkGJnLcEgxHEIxHkWLNQXdeO8oaLcBd7sTR3F+Mjt7C/vSZhd5tFYYHwrCocDsLM01WTA77yVjS0nEY4boN/e1ddoGEFXNkOWMw8XF7G+iotbUwSYmHOQXtbKw5Te2K9IqEAnE4P8jyN8DL8brZif3cVm0v9kttHLVde04TyujbsHexjdKQX8QjPucyoKK9HQ9NpOXeEI0eOLaOpGOw2C4K7Wxjou4XFuWEk4xEUFZbgzKnX4S1txMbSAkbH72JxZQpMwy6raEJr+5uorj+BtE3Nk/mIidA2FqeHMNR3Xc4VPXl2FBe5EQodyHVbtBRMwcrOzoPDmQv/9o7AMeS5C3HuzBW5+3x4pBerq9OIhnfF0jFgKZacgp1k3ZoVJaVNaO98G41NXVibGxeFtEDmPowjOy9PrF1j21mUVrYATJFi6lhsH4tzI+i//TtsLI7B7TRJdPfUhW+jpKIJ6ysLuHn7N1jdGAAQh6+oAW3N3XIl9Azd2KUxWMw25OVWIBwOYXuPljEMh8WCHGcB8vKrhNk395YlgtrWfB7eglIMDfZjcWEcsYQflVW1aG65CF95LTZ31zEycBebMyM4TCbhq2lGWVUVAoF1Adpl1NdptSAciqsyMiQlSs0UsOr6LjS0X0ZhsQ8TY7cxOzmAwNY6iguLUFBUimAkhs3tLYSiIXgK3OLCtnRcQWllN0x2D+JScELvigE9VaXxf5qr+bAUnyk2SvBo8baWxzE9ch0bS+NIJpjqc4i6pnbYHDmYn1+UjazTcijh9sbON+At9WFy7AbGhu+oYwSmlfFGGSlA49VaJjic6rILt6dCokt74UNMT80itLeN0pIitHW0obqqVA7VB/r7sLqyCZOZOZ6F6OzswGH6ABPj/eJScK9YXXcGTa2nYLU7sLo4gYnBP8C/vijlO1X1LahqaMd+8AD9fdcRC+/BYTahuqoeza1n4a1oAOzZ4qok0kyPysL+9ibu3fkEczP9SCXC8OQXoKvjJIoKKrG2to6Z2RGsb63CZLWgpq4LHV3voKyuC2kL95VpmNNRybRYmBrCg95rEmEszHeissKL3d1trKyuyEE8D6Rzc/Mlb3NnZxvBgwC8Xh/OnLksmRwDg3exvr6AaDggh+22LDssBAwypRBnBr7ZjIKiKtTVn0N1ZQMmhvuwtDCFnb1NOLMdKCgqRkVNozCnp6hazvGkuNaUwubaHAbufizBH6c5IWezPefelSDM2toqBgdvY2N7XLygqrIOtLf2CFL3+PgApmeHJJjiK6ZVimJ9axyh0DYcFic8+aXweKqxFwphzT8vR0udbRdQUlSGoQf3JCgWjW+gxFeKmupuFBSXYTfkx/TEEHZXFmQdKupaUezzYXV1DstLM8JHFAceMTHBjxFihRdjlgSCmuYL8JWWy3XT0xMD2PPvoKqqFjW1rYglUxifmcDi8hycThMqqxvQ1nUFdc3nkZNfJ0cTh4eEzqfhyYBKeIz0fSF7vEzcCVYeSHHmYQSbS2MYH7iG1cUxpJNhOWY4ff4ict2F6O8fwPLCHGxZSWTn5KPlxGVUVFViYvQmRgbvKsgb2XSrZLgUsyhs3I+ZZT+W7ylDY8sJwdsfGhpBYHMdHncOaut41FAhmnl6ahKrq36kDm1y9tfW3o5Ucg+Dg73Y2V5HrtuLlo7LOHn6EkwOBxbHBzBw5wOsLc1IBLGxtRO1zZ3iEt3v/QPC+34gEYM7rwBFJTXIzi2UPUCUxwY5uSgsKoTLapIFnJ8fEGtDjJeysirkuIqxvxeCf3sD4UhEEoobmk6hte0qCiuakWa1dRYLQeNIhAOYnRhA762PRfCKCnLQ1Fgj51xzC/Nyv3hOjhsFBV7k5ORha2sT/s0lVFZUoqfnNYQjUfQP9GJrc1XSs2jpEpE0nHaWtaQkL5JR6Jw8Zgu1oKigBP61eayvLSIcOUB2rgv5ngIUeMvgKa6WY5tIjAjPLrk4k6l5EyO9mB69j3R8T11+4quRpG9GgFdW57C7vySVJ411Z9DRcVoCEEND98UFzna5UF/bJQKwsDSAjc0lOB258JXUoLCwBls7O1hanxZFcoKRx6Iy9PXexMz0AA5CK8jPz0NBQTWyc/MRjAVk72ji9dpWJ6oa2uD2eDA/Pykez2EqJsnRVpYB8dw2i5UVcVHm+Z5S1LecQ21dgwRWpsaHEPDvob6uFd0nX4fJZseDwT70D96RvT0FtK3rdbR3X4WvgvEFol0riEN1O9KTE6W/GMGTqgRKPWvteBMMxxDFxvwohvs+xtIcz8CiAu196eo78PpK0dvbi6nxUaTiB7DZHKhpOomq6krMzTzAxNjAUVqVy+mBg5n2rLVLRBCO7CMWi6OgwIfOE6dhc7kxNjoquZSMojE3MNvFcDv3fREkkiaYrbmorGtHQ2MjgsEtPLh/CxubK5Ke1tZ9BWfOXZEbc6ZH+9D76S+xsTwn4ejmti40tHQiGNpH7+2PEGcCdTSkoNRtuZI9T+uTZN5mtgd19Y2o9JVgTY5DBhAMbiISOxDhSMQsSMR5wUlCgjnllXVo67iAhsbXkO2twqGF2SlJmA/jSMX2MTX6ALeufygR25KiPHS0N2N7ewuTU5MIhsLIc3tQUVGNnOw8Oa+iFaqqrEBHxxkE9g7QP9iHQGBHYPHy8zyIR9ISoGG09yC4g2giKNaysKgGHnc+trfmsbO9hhgzXOw2sUr0TMz2PCTSTJ2yw+HKR31dE3zeQmyuzmJ06C52/YuSWcRgGZPEWerDs69wbA8eTwm6O67I7T9MSr/fdwtDw7eRl5eLrtazcuwzNXMPM3PjyMnNR1WVyjNdXV/HzPwoSkp8OH3iEsqKS3H31jVMTnD/OQ8nExWsbqnjjKdCCAR24bBko7y8DvUtXcKHkxPDWF9fglMuksmRkjLBB40eyPknqyTy8orQ0nEe7e3tmJ7qw9TECPwb+6iv78Drl7+K/EIv+ofu4catD7G/twS3OxeNLafQc/Zt1Da9pq6OFiQoVtk/GSzqC8tc0WA6UgHNczErJT+CtflR9N/5CPMzI0jEInA4XXjrna+hoqoWAwP9GBq4h72dNQnnuwsr4CstgX9zHpvrS7BY7Cgs8KG2tlV8/WQqitWVBczPTQmhbTYnmls7UFZZjZWVJYwN9arqZCnnYJ5yBMlEWgIOOe4SnL7wJnxlZVhfm0Nv7w1s+9eRl+9FW89lnDt/BU6HHRMjfbj7ya+wtjwnSb0tbZ1oaO7AQXAPt659gGQ0gFQ8JEEh7lOZoiSazuyEPceHpuYO1FZWYGl+ApMTdxEMbyKeDMLucCISIrAQsUhscLu9aGzuRNeJi6iqOYGsnEJBMKDgWcAi2n2MD/fh+ie/xfbmMnxeD7q72rC3H8Do2JjcJuQpKEJTUwtczlxMjo9IbmeZj2Pows7uHoZHhxEKh1BUUISamno0N7QLYNL2zhpmZkawvDonrn9+fqkkjzO1L3iwLVUj6koy8pQZ6SyrqkywsKbOjY6OU+jq7JC902D/bczODInbTrQyJiEwyyUhYEWQtTt75itoaurC9rYfvfduYGDwJjz5bpw+cVEU5OjYHYyOD8JdUIjGpnZ4S2oxOzePiakB+Hw+nDt1GWXeUvTe+hTjY/ewuzsr+/0kz0+J/0ILnkjBbnHj1OlLqK5vwfrGBoYH++TAvry8HC2tnSitqJP0vY31JUxRKJfmZa9ZV9+JltZmrCyPY252Glvr+6ip7cAb73wLlTX1GJ0YxI0bv8HK0qCUI3Lfe+rcO2jrfhP5RTUSJGSUWUHaP/nzBVo81bHcfSbubgwrsyO4f+sjTE8OIxaNwO324J33vo7GxhbMzE6j9+4NiQDyY+Zl9C6X1O8RP4WuR11dK86cu4wiX5mUiowO96O/7w421tektququhbdPadEKG9d/y0ODnZk0eUSjkQcyeQhCgrKJMz9+tX3YHe6MDk5hNs3P5EsksLiUrT1vI7TZy/C5XRgYvgB7lz7AKuLc2KVKHjNbZ2SzXD9o1/KUUc8uq8gCMmUBnBJOosJz5VoazuJhuo6zEyNYmjwBsLRbaQOQ5IokE7bYTa54LS7UeKrQnvnKbR1nIWjsFolllt5cJyAJSuFVDSIseE+fPLRB5I9UuorwrmzpxCOhjE8PIzFpSUUFXnR3dUjuZAP7vXCv7mM4qJC1NQ0YXdvH+NTE5LJUVNbj5M9Z3H6zCXJAlpZmUVv76cYHOL5agA2Fs86uGAsWD5QqFxMWEiycp5KxYJogvCBOTCZs9HdfQ6XL1+VszG67IMDt8TNZbU9o8sMs5N27oICdHadx8meN1FcXInF5QXc7b2O/oGbKMjPx4WzV5GXnY3hkdsYHOqDp7gYbe3d8JXWYmJqEsMj91Hq8+HC2Sso9fpw9+Y1TIz3IbC3KNUL8ThrOg/hzLVJf97iOpy/8AYs9mzZxkxS8QQP0NDYjEtX3kJjW7ekxc3NTuDW9Y8xPnhfMqm83krU1tYgnd7HytIStv0hVFa14K2vfBdNbR2YW5jErVu/w9jgp4jHQ5Itc/LsG+g+8y6KfQ2wWOnCGijaTwRI/IJyNZXFyxQ8YlXEsDQ7hrs3KXg8F4pK3dV7730DDe2d8K+u4NatTzA63GeAV9jE72btHs9FeD1Tc3MXLl99D3klpRJcGeu7i3t3b2Jrcx27OwFUVlbhrXfegTvfhZGRXoyPDWFpeVV8eaZH0edvaupE54mzqG5ok0TjB/dv49NrH0mWfFFJGdpOXMCpMxfgcjoxOTKA29d+i5XFeXE129q70NrRjUjoALeu/RbhAz/CoR3BIjFbmfeortRKpSzIsuajp+cCOpo7MD87hYGBWwiF/EjwxlQzz92UxWDKXFV1Izq7T8NX3yqMGo+lYHMyeyMhZUepWAgjQ334+MMPJGO/1FeMy5dfRyIZx+DQEGZn5+RqrTOnz8Fhd+Dm9esIbG/AnedGZXUtAnv7mJqdllSmltZ2XLr0plgfquy9zWXcv38TAwN34PdvSomSzZqFRHJHFJiCUjAjmSA4EO+usyIh+DgOHMKO7hPn8e67X5V9Fvds9+9fx9rKDCL72wiHgjBbnLKHL6+swekzV9DWdl4ul5ybn8Ld3hvo77+FAo8Hr527ivxctnEH/QP3UeT1oaOrB6Vl1RgbG8XA0F25u+/C2Uso9Zbi5o1PMDkxgP39Vdjt6iyYHlZ+YS5cOW6c6H4NHZ2nsL65jT/84Q9YXVxAKplCQ30zrr79HmqbO2B2OWX/fv0Pv8PYwD1Eg0EUFpagqqoCoaBfIsa7O2FUVDXhra98B63dJ7CyMoe7dz5G/93f42B/WxLee85cQs/5d1Fa0STQIcL+Apfx5LO8L8bikQZEzKKvK9fs0q2KYn/Pj821BexsbyF4EJRgQFlZLQoLi2VDur29gZXlWalasNtyDITiqAheTq5Hqq09haXIzsmV6of9vR1srC1ja30diVhSNvoVlVUoLilAOBLAwuIsZmbpMgWR7XDCV1KO2ppmeMtqpFYryjD1+iIW5qZwsL8r7k15bbPkWTKQE/BvYmNpBrt+v2CtFJeUSkKu1WzCODNX0lHB/EgSx0OtuwEtx3KRIuS7i6WQNxaOILC7LsnAKaKh8TZUidp5UeKtQL6nWPBcCG3AsD6PMpIJlkkJVJBgrQS2N7G9tSaWORYPo6OjDdEYz/H8UhSbl+dGaUmp3KaztbGFvd0d8RgsVit4rXIwQiGwosRXBm9JOYpLqmTfHD7YxtrqAvz+FakzTMXTEmzIMjPZgNUXTHJnTSUP6ulSM9bKpECVFsec17LyKuS63UgmwtjYWsCOfwVzE4PSDouLi7ylqKqph9dXA6u9UM64QqE9LC3PYmNjEQ67HRWldVJCtbOzJpFQ7g9ZZ8hjkr39Xewd+OUu+NKSChR6CjExMYZQKIBIhKVlRDOww84qguICUUIl1fVIR2LY2NrC0tIS9rb9sFnsKCurRnFpBXKLSpA8JMxFADtbq9hZWxLMGtbzcZtB7BwW6jKYl5tfjOLyWuR6CpBIRSV1cWasT6AkmBGTm++Fx1cn5WlEHeCHkEJP3+U93g09ZnWCYUoF60KD15I1U0jGQohzwy73ayuwHYWCRXitmAAi0WqwnIcEZcoXF5zgQ1Z7NswM18vHuJeNQERRRqpSkm1vdrkUelRWUqqb48mk5HbaydBkIoIK8fJDfQ1VMiYba6ZP2ZxOHFqdwm6Cx3mYQjy0L3gmBLZxOJlNQqGIiwuoEL9Yi5eUnFHBh6FfbTLLxZBWAVViYoAJh1EDc4T4j8R1lPE61Jki3zHOWxXSCkvamZOaERcjSC2LMgWRmXh/StCZzxiNxtRd685s2diHAiwWtsLucLAuSfIuY/GIQC7ScpOZCaOn7ndIIR4LS7DLaiZyMxHP9GUjAmxqAFcqcROkMcFqZE4qLbxF1sbMuDwTjpMhJBJBOEwEQKJ7Srh2G2BzGdCJtORpASaORBkYY32lGdmOfAU2lIwixlzIdBZcOXmqeiKdkGfZLatK6O4qFogZ4EJ0MxXOJw+3BTAqGobZQlCmLBymUjikxWbKF8fB+R8hmaki7WR4T+gkd0bYbeKGp2LMouFWyQFrjlvKv7itYF6tnfMjng9hCq0OWJz5Upht6F8Dzf7p2SuPE71jC94RY9PqySWIGfiJRxjPJKpJoaFLjRLhvg3YNA2NlqVQm4R5WTHAhcjKkmgmD6hFoEQjC+qOAlESBGdCyR0a0IDqIg1CviWZYkUQJRur3xUqnJGIp5AAs8yIJBSWp02SXQ3QSUNQyZPx6CEcNklAFcEjOO2hgJ+qsyGFUUwMEQ7ExPNqwS2RGiENKS6YgRyTgnhnjh/bIbqaIG+nbTClVaqt/OPfmTNowEXTmkjygF5qjTvPQkxBpFaIZQrCTgEVUYERtoBMzSoMWkBZF+OiZAUjqG/cyci80DSS3YMhgDIqBSto3NCs0Bpl/AlkEddUrsRTWw5mMPFM9/DQJpUlrJJXwOy0VvSOVJqVjIdIXgmjilwYQ9+7R8NLN5iCS1AodR+7nkHSQFyU4nNj7qw+UMfYxjomIMc9CZNJzk65JBZGYQ3wLdWghm3X2KIEj1L4cQoVIAU7AUFVxEn0VFLQkzkH6h/CeSgg5c/7ObbgqS4V+E86pSDa5XIL485DhUBsUaCnRgBIJkDNnubAaaGYaM18MsWMguLM6QiaREJhkrCPlM4UYDTJUJIG8zPpmdDoJunaLJaWg4oRWpELRKtMFDDmB3Icdlphwn0b2P2UeTIrI1UEBxJ0ajGoCpjWnEJKBMYIJNEQMpvdrgBk9YWpTAhnu/wkkirJWfL5jLsOKFCE11R040gNxOfMtRMPQlUmCB3JPFI3dyjwfjwYtwtKmwKblbsIBEOTZVTqjgjN7kTkMthR3bpjoDCnEmnBE6UiyXSW1P0HitE5L2Z7kJbEszniU11Qn2Y2P6PJxMxMI5Fi/qgSb7q+bEMFvVRqoeIRZYKEsSUTx6rQ6VIMobJihJ4TT3MtcmTD74Q0wk/GRZkGxCllgt4CFUI8GZPyKqJ4E9yJYEgCfGTgzSqIqhTMqZRE4IW+aQgCGxWnhEnooShVLvt4C5VsnMKqcPW59inilpoYS1DKUg3uJQieusObJT86yKIQlbXgHSGRGePTBbkcquicozEbGlsurmCystIjRL0SaHYyoWCOqqufiB5N4YgTyVipPQVPJ23yJ2UJgnQfLWY4hHFlNyzh9ZSFi8uPcamJaGkFD8clIpaHYLpqPFPWdMnORykaLgaFlhghDOgoiBzjMJVzSLMt9TQtjLo/gYyXksoIgmQdVXXIdVZc60dC0+qoSKwXxyoXr7Bdw63mvBU0BKdFM6BAWSmkJrkT4eGdDsLoDD4ZdysIM/F7lcxx5Ov+EQuphg0UbuN5Mq7MlXNS41YfUQHqMhKRUP18UrwTdYsSI6fEnjGg+Sm4hjUn0JSsheDTqqualQ1TysW4AODoNoU/6tYQGlJDUL+FKFTcWTjkNQDG2PR1mCoxQ7n6IlxHk1ZVB7INMPBYbWI0jBkK2JV6WNStQON/fqETDjruVcx/hDKW6Y4YBekxbuDp6okQKW1s3OxrsCo1PmfASyfUxU2il0l80WZ0B8m8BmKvWl+ptFYXjDBGoe5IUIB7hmsnWjABi92GJMtrUrwsQ7tsQIIuH5eEG2fiYxK41cCOVhqYoOksdyLDiqesFlFWKQuWZJa41vuxA9idVjjYNl1JgjvyPQZQmDEhFkiNTa+RXLMsKNOHcNpsIjnqzjsl1GIb+A61qplzVTf2EMBW50mkE7wOi/xFZiYDiclGWjwJChMlWx3OM62N3MV9qagTHrcZDCWKRqyqusFOWVBpWBSUlRfAiPLjeGkpOA8KHV1JM6QCi7gv5oSMT+4gIDZ0ktunBJxOnmGqPQab5XmhzFVg8Bn15R5fIVQrd5jeEGlheB4ihAptnNFfrgXXURDGEoSYsAuptH485DP0fKhNzCbEktGj+ysUTjkFySqQGfryGblERtDPCLrC4bP4WoH82kyMURg6W9xQFminYeH2gAOWMrHP/3kBgmeoG7XuR0hfkrQtSMgxcfXoAmgtpYy+chHMBoKy7PnEZzMq2bXpZ+pTVhYs4ls+FBxqeC4GtSMthQhRincgsM7LUFHGXoTPEQuSbdBixFNJJMxECTbDQiQpQrgTQt1skxgDq7xJTeL2C4qVuHJJJAh7J0rADBv9RcONEaQ1HoDT3aGAM/H5KIdPuE1qxoiUzQp2vR/ieZuVQZijQ1hVD0YwJ7mag24T3WEyHs/X0ofi2snFMHL7Dve5FmUl5HYFfbxDpaA8jywLNb+ydvzQqSLDmmhlVUjO2IISSpGIzUpxCCy7XL/MvU5CYV4SaVkEnUcqnKNiePItshSAL6OjgqFqZHZIrItQgSkVA5BxGHEAsWhZVslIYu6jw6ZqDgXiPsm9e5aCbBTBSwkcBZfDziMdueRFwSxKV2KADmGW8L6xf8s6lDM4kUEz56SuiObakEVk7AwKGureuP/NsN/G3lbuq9AI+OqGIBE1SY5WNFV3Y3y+z7EFjxXRcvWRoZmke2MxWVFMbZxiOhSh7wjhQNBUVpeb6VtnyT7DQpUlQKpqJcmQ3FhTYNbWlgUXk3l3nC+jcazpMtuoEU0CnkTmNJlNgpGZ48hGtitbFADD65s7W3BluwRPw2lzIBaJ4YCQ7RZC5jmQm+1C6OAA4QNCz7EqVlll4nTmOLPleILw7weRsBxk03pYCfTDCJjVipzCPMSY0hYMIBIKiuV1ubIFH0VB0KUR2NnFQWBPaJS46xBzAAAXjElEQVSXp7BT4sk0ItEQQsEd5OS65CyOCFnkEjIoGYKCR+gHRk4Z8o5EIiKzLodTmJSfre1dib4KGCuD7Vab9CsH/UhjJ7AtHoEr24lsggGnWQal4DoIse7MdiGWjCESCwsQkSRCZFmkOoTtlHgLEYsQnmEHkQjh0LNgt7ngdLklh3NpZVVAJdLpiEDg8woupyMbbiZyu5ySRRKNRkVJOJ1OOQrKzuU8GRlNI57MwsHBARLxCLJdTikjkgJlw/rHE7yDIyXAvjxecdjMyMvNlawguW6NWwRjj0G6JVkqFgphP7AnVRC+ihJYGZwjz5gNpUBRk1tUaF1Tap9qXDJDOqqtEqPNVuXByKU6vAvCCPSS8DqWxf3oyxA8Lefq7jHDmzIUwEPnRXnpDy2eIZ1Uhtx8i0tlEteEC0+G4KHmp59+it///kNZOAotBZILSDCaEl+JMP74+IRy/Sw8fHfi8sXLePPNN7G+vo7ee73oe/BAMuQbGxtx9coV7AX28aOf/Bg2uw1/+7d/i+6uTgwPDeGDX/9G2m5qasLaGjNkwnjj6hvo7uwSQfjx+z/Bg/4HqKioEAFwOpz4m7/5G7S0tmBhcR537tzG/Xu9iEZiOHHiBC5duoya2lqEgkF8+OGHkqPK+x16ek7i69/4pgjTT95/H+MTozh79oyMuaysTBDJqICYp0qqcRy3b9/GzZs3sbm5KYGHnhMn0NbWJuO8c+cOFhcXVaQxnRYBPnGiR5TH6NgoAnsBseDEk+ns7EJZWTlGR0ZwsB/EhQsXcPHyJUnF++WvfoXFpQXUVNdgZ2dXFpLzY2XH1uYGrl37BIODA6I8Ojo60dHeKfvDT659gpHRESSJo2PlHREWXLx4Ca+99pqsW/+DPoyNjWFvb0/W4Pz58zL2nNwcmev29i5+9atfYX19Da+9dgFnz56TpAYRCAbIAEmVIx+Mjo6gu7sLV65ckcN4HlfwWIB4p1Tw7H9+fh6ffnJN+uS8mRbWc7IHp06eVPg9xp3uElEV6db3rGtO1ru2h9FeccQMOyjmT4I7Gk3c2Bo8weB9IQfon8W4PvsqYhXhor9MZuQ/HqBS8Pr6+vCzn/0My8vLQnw+U1hYKJkNZEAyyPr6hvxdf/eVr3wFHR0dwqwfffSRWAoKKAXmrbfeEuv4+9//Xvp49913cfrkKdy/fx///d//LUxOwaPQBgIBnDt3DmyPB9T8/tatW9IOF5R/++53vwuv14sbN26IAHDRyWDFxcV477338M4774iQ/vSnP5XxUKn09PTgH//xH+U87sc//jGu37yBS5cu4etf/7r0nblQTMWiUP3kJz/BvXv3pE/2zXeZ4MtaN8nWWF2V7zhPVgy0trZKOzMzM5ieZra/V/ZRfIbjF2TnREIE4Gtf+5oI9G9/+1spFK2vr5f58/uvfvWr0hbnTZqtrKzIktfW1uLs2bPIz8+XeTGdjc+LJ2I2i0Dz+2AwKOvH/0lb9n/q1CkRaPZN3uD4/vd//1f6JB0uXrwoVpHj51rRGpIXfvOb34gw8X2uCXlAf0gnKk2O/+7du/j4449l7qQV8z6pBLgWNTWEhlTt8n++o270fZ5dmjYeT3cz/2wFjxMX7BDmWYpVSxwRnIzMhSFTDw0NCVOR8HV1dcJs9+/3iQbu7u5GdXW1WDwSmgtFLUqmbWhoEEbj4jQ3NwvTPnjwQJiWmrOn+wRGR0fledGQLS1YWFjA1NSUMNh3vvMdSbj93e9+JxaYP2vl8C//8i8iwBSsyclJETh+Rwbo7OwUBiHD/9d//RcGBwdFMChcFDwy7Q9+8AM8GOjH1atX8a1vfUv61h++R6Gl8vnhD38o8718+bIIEefDftkXBYaLSyuraUA6cTzXr18XWrJdvk96cvykARmaSoz9kk4ULiovCt7s7KwIC8dPK8z5kUYlJSWqxMZslucoSJwXx0MB5T/2Rzrww7FTKNkn3+V7FCqOlbTlerOv//mf/5GsEwrdG2+8Ie+rQ39l8Snwv/zlL2UMFGoKLunAj4qq8+7AlAjmBx98ILxCoeb4qEDZ39tvvy3KinTTbf/VC148zgCM+Uj4SBguyv7+vhCQGpHWi4tG95DaksLz85//AsFgSDQahYoMR+GjoFLrkbH+4R/+QZiFFpN9bG9vS1tcEAplQb4Hu7u7smhsn4JNZiDT8H0KBV0k9kfLWFVVpYIvAP7t3/5N2qRgcaxkCDI/mZwMyPbJ7D//+c9FGMkIHCMZmoxDizc+OSF9fOMb35DnyUDqCmuVsEyLQqtBQTp58qSMj5qb7ZOpSRtxP3t6hJk5ZrriAwMD0i+ZmIqKc6Jr2tXVJYJHhcZ+vvnNb4qiYfu0ImyDwsTx0kqQnrS4fPbb3/62KAzSkNaN1p10Jj3YP/+xbdKRSoPCzH8cA9eH/0gf9sP36YqSVpwfx0ChosvN57n+pAWVFWlI4eQaca1ppfmMXMuWTssY+Sz74nNUKqQT++NYSQ/SlkpEoupGrEHdIvRXbPFYsyVpWHJvm7o7XZtoEpca9xe/+IUs6D/90z+JNbl27Rp+8IMfYmhoWP5OTUYB4cJwEcmwZLh///d/l/9JbDIDF+8///M/j6wei0S5AHS3yNB0d2gxyYiVlZXyHoWN7i7/sQ9aT1obWjy2ScZkG//6r/8qzMPv+AyZRruoZA4KHQX+zJkz0hf3fjdu3RQGp9tKa6iSr1MiWOybY6EWp0Xmz0Q55hxJA1oCfkc3jYxMGtAS0ZKT+egekmmLiopEMXA+tOBsm+4xmZLWgHOn1aKLTuakpdza2hIrwQ8FmAL9H//xHzJutk2lQDp///vfFwXAMXMvzX+0zJwjBZO04XMUMlpezpXfUxjYDq0t15b/0+Lxe20xSUPyBOdAOtLivf7666J8teBpt5HPcr70IvgO58m14Hh0YIfroa0k+U3xmXDcZ9k1PeaZh/vAJzXwZ+1qSqaLpJIpbaQ0kRJEEo1E57+8vDxhbjLdJ598gu9//wdYWVkV60HXkdqUWpduohY8WhIyHBeeizM3NycalsxKRq8srxAGJPNwkagpaQHJNPyZQQ2OgYxIgaK7QmXAn//5n/9ZBIn7Dy4iLRndLX7U2RTEqlHYybgUPgovGZztsE/u8ajlKXgUmswP+yU9+D6fHR8fF0tMZuM8yUh0qzg2CjVpQM1OweTffv3rX8t8+Xe9v+SYKaAUWFpFvsf5cHx8jzTmfLTgcV78nc/xXe4R6f6xPbqHdHU5Pq4dFSAVA+dDpqe7yr0W14N7VNKc2wK2Q9qyX35HN5J0oVBR8CiU/LAP9qX3eCMjI/Ie956ZezwqP64H93cUPL0/ZV+SNGC1yvw4N86H7araw79ywZMTGCOlShNG5X3yDu2kLAwFj64aBY8EpcX78Y9/IpFOalcKHRmMi09mpDtJQSIzkdDU6nSTKBAUJj4r+6qmZnmeLhsXmVqZ1oEfanwyOyOSZGBaFX7PheX4yEBcWGpsvkMXWLtgHCv7IzOQufgz3TAyH4WTwkctPzQyLPOhFaDQaKshF2ckeZyyJoxNJiazUPDYHi0TmZwuow6U0BqRwWgNyKQULvZLmnB8OqBEhUMakK5UMuyTyozBJ86H7hpdTc6fzEoB5nOnT58W5cGxsG/2S7eUlotuHWnDeVOBsE+Ok+PXgR6669proZDxw2doUTkP0oRRT86BipLroff+XAMqCnofFGr+zzWkMiVN+TOVoPYA9BjYPz0eCix5RHtV2voppf9XaPE4cR4FPOpiaj+cxCcxKXhcdLp3dI/oDr3//k8lqkmG1xqNloCMoDfstHb8nVqRkTYyJfclFAK6refPnhMm/NGPfnTkbslxgdMpLg2ZS4IgDx6IUHEPRE3NBeRYGMz53ve+J64pAwhkcFoL9ktGpNCQuciQZHwyBxmfLiu1PIMrFCIyLpmJgQh+x7+xD7bL4ArbYZsC4X5wIMzEOXPs/J3v0BpxjBQkjoHvsB3+nW4pmZuMzX0d+2a73A/zGbp5jPKSkd9//30ZJ60P++HvZHr2pyPPFBKOh/1TSPkz/1FZUgGQztxX0jOhsPE97rNJv7//+78XQad7SzeU7ZO+UjXe0nKkvDgvtqWFmEqH68K5ktacJ4Wac2HftJT0dEgzjoO8w3lQ+erYgLZ0f/WC9ywfm8SjNWJUkYSl705BI4F/+tOfYWZm9ogZKARkFgofXRy6SNR4ZEYKHTUlF5/MQteJe6FTPSfFqrEPanVaHfZJDUo3lcxGpqB7Sgaj1uRz1PhkIPbJvQcVQX9/v1hUChYZlovMvRTdIo6ZLiKFkO+zf/5+685teYcMRGaiYDCyRwYkk01MTIiVY0SVc+K4aCF1aJzjplusrQPdbgowFQv7oebnnGjxORYK2d/93d8JY5KmHDeZlnSjRWMfdB85JgZzeKRCN5f7J1o30pJCw/lwPfh3egOkDedAC6uDQLSWtGZcAwoRx0Wacy04TnoN9DYYtKIHQyGU6708Hhk/lS/pQEXL7QAVJoWMY+e+lULMddBt0/OhgHNepBnnwLnTutKj4FrprYzAr8s+T1dhPM8279l7vCfu/Y6bq/ms4X6Wc7ynmXoSigzNxafFIHNQg1Ob3r3bi83NraMzGTIlo3ZkCloeultcKDIEF4CLyAWk9ubCUkC5x6M14B6E2p5al5qYQkFBpYDwewo6F5jCwe/JINSkZGR+Ty1LBuRic3zU+HQVychkEi2ItDr6TJLPbsvdgSqgwvFTULj/0+F3Wl/OlcqBex3SQEcvyWScC10/PqcZnwxGjU6BZN8UfP5MC0hhoHBzfqQPFQEZnXQjjei2URC4brQspCUjj1QudI05bwoQ29RHMxQsyaoxmURZcK6cB7/ne6Q5x0hBpZvN7+kBkD5UCKSJfk5bbL3NYD8cF8dPIeUaUGjYD2lEenA9SG+9v+ZzDMjww/c5FioqPquV3MNA3ivBe6IMc9FIeAohNRwZlBqeB+jM8+Ni6b0hvyez8cP3uFAkNv9O14R7BwoKCU8hY1Etbyyla8a/kTGlIjmVku/1QSu/p2CybzI8x0KtTVwVphRl9sU2yHT64JjCW1BYKGPaCwTk77pd5oBx7GyTH46RgkDB0Yfl/E67y2RIts/vOU7SgXPS+072y7nqw2f+zv71+aJONNDv670j+9QH9BRwfigofJe00HNhu6QB32ebXBc9H+3GcXy0fKQRacYxquwZAj65hTaZASi2QeusD+HZtqYJ3+F6sg0KsKQHGsdNFD7+zj7YJp8jXal0SRv+zLFyXvodHTHmd/8XxwlfWotHraj9cW0ZdKYKE3cYXNELyYXWESsdIX0YNn6YYcAF1hkMkuZmVOgyjUiiaSx9YQY6bw8yDmgz6l9E0CSn0Qj+kOHkXSNxme/xQ4EmY/BjM5hNME3kfj4j4Vun1zE/03A59YEwmZXMlfnJPGrRe1FJljaOYfg9mZUffbicGdJmH5pG+iA5s33tivFvHAeZWmekPDoO/Z0+b9N96vXR+3T+PXMMep04Vq4tf9fBtEef4xzYv47w6rmxT221MoWYfes2Mmkl62r0o+lLPiDu5xcZXPnSCp4msCZm5mJqweN3mQTPJLLWnpLdz4phQ2NqJpFSIcEGNeoJDeaXXL6kqiMTxjKYWQuXCBuviU6orBuTcQYpgmoIFYWMQsj/tcutmV6EkwLMIihD4HVkl+1qC87nRXCN/imMIrjGUQvnow/cHxU2Lcj8e6aQPYnRdWJA5nkXn+Xv+n09Hj1Wrdi0EGgloP+uzzMz10GvqY5YPlSkf8qmmVFurcT0+mYqVT5HRcQPXUrSiPPRbWfOX9NXjcMo2XqShDz173/BezzN+I/T0lJWYyTSaldNH6hyIbRboTWiWDEjT49/E/fHeF+eYZ2cYWEpSFqI+L8INl0cYz+WKWyZa8NKBjKZtp668lwUxyNZ7GxLlwjpNvhcptbPZDI9Zo5FM6FWKJnCogVT00C3pxWU7ktbfq1EtFBpJn2cVdHPPAxOPAzFZyoO3QZprJWdHg/71+PXCinzOEkrCk2LTMutrWXmGPXcNQ88elCeSVPd30Or+GqP91jdkqn9M10LPqwM1cMLI7Q11ER9lHEe1wFr+CgkdDe1cKtUf8OdNCyZvJthGR/7s7FXOxJK42zySAgfNwDpKqNWzXgmU/gyXSbt4uqmHlUwme6UGrLKAnr071oZaauTaTUfHWZmgCzTWmZakUwL+CQj8ajrl/mcTjh4nKuYuY4UwkzFounxqLJ62hi0W6vo8xcieA93UkYhhTExo2TwT+nxWWqZMp8x9lFqX2VGJByWPZ64eo8yuiE8enH0M0cLSXckEpP9l64V1HX+glhl9GUjihctIt1KY//G35PU5gStpUU03Eu+J0xA65jxd/2+ZlARTr7DEkRj36WZTlsVsVBms9QDipUz3NNMi0XoenFppS3eOaFcaq2kMoX+aI5H+BvKxeb7pInslenmZux52R4/0l7GOoi1lr2b2lMdWUud9pe5bzYUEp/T4xRLzgwlZpAYSk97FUdKhTmVUsoTP3L1M115rfzYjlg1w2XP9FC0AhUrmjE2pQT03vM4B+hChSfJ+RP/fuxCWLmARWbwSB/ppBRnEpAnEQ2ryxRZvKmhxigUiSRMVgW58OQRPmNSIthP+Sg8had8ntG+Btz43KT9DC98/vX600Y1PZ/U3TPn/4xxPmv+n0VxfgZS/LU9ckzBIwTB40hGDIsY0qmYwCEc8GLHJKEPDIQuMQgmsLrYQqiGpwje010IumhPF7xnuyDPv0HWU3+WaH9RTCUYNQZa15P6ePb8n390at5PLwR9/tb/st88luApNK+MaKzW4GkCwkSRTkfxwQe/wO7uhiD5ponbkWb9FBOgGahQ0HpPwyXM3F88bimelfnydMZ7ttBpF+qJBuVFWK1j8NgRluQT2jiu4D19/grJ69Xn81PgxQmeAt9SSE0EzRHY8xj+v///e3InXSi0K4hhWvCYn0kslSz68U/1FJ9uT46/7k9nnKcJvgEL8vmp/gLfeLbqOF5nz57/K8F7HgofT/AMV0OBDitcFfUvhUMK2WEcft4DwHvJ4mEBNaXg0c2kxSOAkYLle/Ln2Rbv+QXneQj2BMf6RTX1udoRoXuG5nkW/T5Xh094+GW52i9i7C+rjWMJnnj4ArKTUlhpmhHIEYKnn1IQcga0+EPBNABPxUoeR2e/qCX/smrtFzX/47Lfl5V+x533879/TMEj7JlxJS0BSIlySOxKw4px4093khXmNqtVMjqSMeY5ElyVSMcMZ7ON4zDQcd4VVfH81PuzePO48z/uJL7s9Dvu/J/v/WMJHgVG0IUFOlxBmMstNI+w8x8tjUIFPzJ02jl90vCftYd7VrT8We8/H9n+fN76a5//n89KfL6RvADB08DfKj6ZaUFUtPLRzAAeQTx8Tj1zHK19XI17nL4/H7G/mKePO//jjurLTr/jzv/53j+W4LFLudEn08YZN7mo4fAXdXXUQ+FS4qks5ItgmuPuEb/sjHOc+T8f0zx867hK87j9f3nfP6bgPXKOl0EH+Ubd1awE7+i+OI3vzwce3gbzfCR8eCvN872vDfTzCZ9SIM/d8wt4UdH/ZQ3hodp8WSN4ASR8SU0cW/D+KC6SSf+jVTGE70gItbCqbP3j6cwXYTGfn3VfVO/Pv/avBO/5afdy3zyW4GmX8Ylq90mcqQVUrr9SN589/+c4rtbxxP75x/wi3zzO/I87jr8E+h2XBs/3/gsQPDmM+9ObDZ9lDowbcw95vfErwXu+1ZO3XgneMYj30l49luCpG4C0+TIuhNR7jqPt16P+/yMSKXu/4+wR9D3Wz0HDI/f3Od493vbw+Tp87FsvL0n5uBuFF0iEL11Txxa8zGhlpvZVh+OP2z9piVQCqG8LfX7KPcu0Pqvl4wj9yz9+f3j52bPm+cV8/7QE9y+mx7+MVo8peJmCdVwB+Msg6KtZvKLAZ6HACxC8z9LNq2deUeAVBTIp8ErwXvHDKwq8BAq8EryXQPRXXb6iwCvBe8UDryjwEijw/wB62815zRvqEAAAAABJRU5ErkJggg==" x="0" y="0" width="222" height="197"/></svg>\n                            </div>\n                        </a>\n                        \n                        <a href="').concat(c(s, "edit-widget"), '" target="_blank"> \n                            <div class="eapps-widget-toolbar-panel-edit">\n                                <div class="eapps-widget-toolbar-panel-edit-icon">\n                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="222" height="197" viewBox="0 0 222 197"> <image xlink:href="data:image/png;base64,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" x="0" y="0" width="222" height="197"/></svg>\n                                </div>\n                                \n                                <div class="eapps-widget-toolbar-panel-edit-label">Edit widget</div>\n                            </div>\n                        </a>\n                        \n                        <div class="eapps-widget-toolbar-panel-views eapps-widget-toolbar-panel-views-').concat(t.usageStatus(), '">\n                            <div class="eapps-widget-toolbar-panel-views-label">Views</div>\n                            \n                            <div class="eapps-widget-toolbar-panel-views-bar">\n                                <div class="eapps-widget-toolbar-panel-views-bar-inner" style="width:').concat(i, '%"></div>\n                            </div>\n                            \n                            <div class="eapps-widget-toolbar-panel-views-percent">').concat(Math.round(i), '%</div>\n                        </div>\n                        \n                        <a href="').concat(c(a, "extend-limits"), '" target="_blank" style="display:').concat(i >= 90 ? "block" : "none", '">\n                            <div class="eapps-widget-toolbar-panel-views-get-more">\n                                Extend Limit\n                            </div>\n                        </a>\n                    </div>\n                    \n                    <div class="eapps-widget-toolbar-panel-share" style="display:').concat(i < 90 ? "inline-flex" : "none", '">\n                        <div class="eapps-widget-toolbar-panel-share-button">\n                            <svg width="12px" height="12px" viewBox="0 0 24 24">\n                                <path id="XMLID_31_" d="M12.7,15.3c-4.5,0.1-8.4,2.5-10.7,6c-0.2,0.3-0.6,0.5-0.9,0.5c-0.1,0-0.2,0-0.3,0c-0.5-0.1-0.8-0.6-0.8-1c0,0,0-0.1,0-0.1c0-7.1,5.7-12.9,12.7-13V5.5c0-0.5,0.3-0.9,0.7-1.1c0.2-0.1,0.4-0.1,0.6-0.1c0.3,0,0.5,0.1,0.7,0.2l8.8,6c0.3,0.2,0.5,0.6,0.5,0.9c0,0.4-0.2,0.7-0.5,1l-8.8,6.1c-0.2,0.2-0.5,0.2-0.7,0.2c-0.2,0-0.4,0-0.6-0.1c-0.4-0.2-0.7-0.7-0.7-1.1V15.3z"></path>\n                            </svg>\n                            \n                            <span>Share</span>\n                        </div>\n                        \n                        <div class="eapps-widget-toolbar-panel-share-block">\n                            <div class="eapps-widget-toolbar-panel-share-block-text">\n                                <div class="eapps-widget-toolbar-panel-share-block-text-icon">🔥</div>\n                                Tell your customers about<br>new website functionality!\n                            </div>\n                            \n                            <div class="eapps-widget-toolbar-panel-share-block-actions">\n                                <div class="eapps-widget-toolbar-panel-share-block-actions-item-facebook eapps-widget-toolbar-panel-share-block-actions-item">\n                                    <a href="javascript:void(0)"\n                                       onclick="window.open(\'http://www.facebook.com/sharer.php?u=').concat(encodeURIComponent(t.websiteUrl), '\', \'facebook\', \'width=555,height=640,toolbar=0,status=0\'); return false;"\n                                       target="_blank" title="Share on Facebook">\n                                       \n                                        <svg class="eapps-widget-toolbar-panel-share-block-actions-item-icon" viewBox="0 0 1024 1024">\n                                            <path d="M234.747 554.565V346.624h152.512v-81.02C387.259 125.893 492.2.068 621.186.068h168.068v207.918H621.186c-18.412 0-39.85 22.329-39.85 55.801v82.826h207.918v207.929H581.336v469.39H387.247V554.564H234.746z"></path>\n                                        </svg>\n                                    </a>\n                                </div>\n                                \n                                <div class="eapps-widget-toolbar-panel-share-block-actions-item-twitter eapps-widget-toolbar-panel-share-block-actions-item">\n                                    <a href="https://twitter.com/share?url=').concat(encodeURIComponent(t.websiteUrl), '&via=elfsight&text=Now my site is cool as ever with a widget by Elfsight from https://elfsight.com/"\n                                       onclick="javascript:window.open(this.href, \'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600\');return false;"\n                                       target="_blank" title="Share on Twitter">\n                                       \n                                        <svg class="eapps-widget-toolbar-panel-share-block-actions-item-icon" viewBox="0 0 1024 1024">\n                                            <path d="M912.964 321.322c13.032 289.559-202.954 612.433-585.152 612.433-116.254 0-224.521-34.104-315.596-92.559 109.203 12.898 218.206-17.38 304.798-85.227-90.111-1.646-166.12-61.158-192.344-142.973 32.258 6.181 64.008 4.388 92.974-3.532-98.995-19.869-167.378-109.096-165.13-204.452 27.789 15.427 59.512 24.699 93.255 25.742-91.676-61.278-117.633-182.336-63.713-274.868C183.633 280.463 335.317 362.425 506.4 370.988c-29.983-128.778 67.66-252.779 200.585-252.779 59.204 0 112.682 25.006 150.238 65.011 46.882-9.232 90.927-26.384 130.744-49.959-15.386 48.059-48.046 88.438-90.526 113.926 41.61-4.977 81.307-16.069 118.208-32.445-27.562 41.316-62.456 77.574-102.688 106.581z"></path>\n                                        </svg>\n                                    </a>\n                                </div>\n                                \n                                <div class="eapps-widget-toolbar-panel-share-block-actions-item-google eapps-widget-toolbar-panel-share-block-actions-item">\n                                    <a href="https://plus.google.com/share?url=').concat(encodeURIComponent(t.websiteUrl), '"\n                                       onclick="javascript:window.open(this.href, \'google+\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480\');return false;"\n                                       target="_blank" title="Share on Google+">\n                                       \n                                        <svg class="eapps-widget-toolbar-panel-share-block-actions-item-icon" viewBox="0 0 1024 1024">\n                                            <path d="M327.072 448.23v127.536s123.72-.164 174.097-.164c-27.28 82.677-69.698 127.7-174.097 127.7-105.651 0-188.112-85.65-188.112-191.302s82.461-191.302 188.112-191.302c55.861 0 91.937 19.633 125.029 47.001 26.49-26.49 24.274-30.264 91.669-93.908-57.209-52.071-133.245-83.815-216.695-83.815C149.223 189.976 5.051 334.151 5.051 512s144.175 322.024 322.024 322.024c265.837 0 330.813-231.474 309.271-385.793H327.072zm580.285 6.38V343.018h-79.709V454.61H712.866v79.709h114.782v114.782h79.709V534.319h111.592V454.61H907.357z"></path>\n                                        </svg>\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>');
            var l = o.body.children[0];
            e.classList.add("eapps-widget", "eapps-widget-show-toolbar"),
            e.appendChild(l)
        }
        ,
        t.initWidgetsFromBuffer = function() {
            o && o.length && o.forEach(function(e) {
                e.initialized || (e.initialized = !0,
                t.initWidget(e.element, e.config))
            })
        }
        ,
        t.initialize(),
        t.getAttributeSettings = function(e) {
            var t = {}
              , n = "elfsightApp";
            for (var i in e.dataset)
                if (i.startsWith(n)) {
                    var o = "attribute".concat(i.replace(n, ""));
                    t[o] = e.dataset[i]
                }
            return t
        }
    };
    e.exports = i
}
, function(e, t, n) {
    var i = n(63)
      , o = function() {
        var e = this;
        e.timeout = null,
        e.buffer = [],
        e.steps = [],
        e.facade = function() {
            return new i(e)
        }
        ,
        e.send = function() {
            e.timeout && clearTimeout(e.timeout),
            e.timeout = setTimeout(function() {
                if (e.buffer && e.buffer.length) {
                    e.buffer.forEach(function(t) {
                        if (e.steps && !e.steps.length)
                            e.steps.push({
                                app: t.app,
                                widgetId: t.widgetId,
                                event: t.event,
                                count: t.count
                            });
                        else {
                            var n = !1;
                            e.steps.forEach(function(i, o) {
                                i.app == t.app && i.widgetId == t.widgetId && i.event == t.event && (e.steps[o].count += t.count,
                                n = !0)
                            }),
                            n || e.steps.push({
                                app: t.app,
                                widgetId: t.widgetId,
                                event: t.event,
                                count: t.count
                            })
                        }
                    }),
                    e.dataToSend = [],
                    e.steps.forEach(function(t) {
                        e.dataToSend.push({
                            a: t.app,
                            w: t.widgetId,
                            e: t.event,
                            c: t.count
                        })
                    });
                    var t = new XMLHttpRequest;
                    t.open("POST", "https://eapps-analytics.elfsight.com/store", !0),
                    t.setRequestHeader("Content-Type", "text/plain; charset=UTF-8"),
                    t.send(btoa(JSON.stringify(e.dataToSend))),
                    e.dataToSend = [],
                    e.buffer = [],
                    e.steps = []
                }
            }, 2500)
        }
        ,
        e.store = function(e) {}
    };
    e.exports = o
}
, function(e, t) {
    var n = function(e) {
        var t = this;
        t.store = function(e) {}
    };
    e.exports = n
}
, function(e, t, n) {
    var i = n(65);
    "string" == typeof i && (i = [[e.id, i, ""]]);
    n(67)(i, {});
    i.locals && (e.exports = i.locals)
}
, function(e, t, n) {
    t = e.exports = n(66)(),
    t.push([e.id, 'div.eapps-widget{position:relative}div.eapps-widget.eapps-widget-show-toolbar:before{position:absolute;content:"";display:block;bottom:0;top:0;left:0;right:0;pointer-events:none;border:1px solid transparent;transition:border .3s ease;z-index:1}.eapps-widget-toolbar{position:absolute;top:-32px;left:0;right:0;display:block;z-index:99999;padding-bottom:4px;transition:all .3s ease;pointer-events:none;opacity:0}.eapps-widget:hover .eapps-widget-toolbar{opacity:1;pointer-events:auto}.eapps-widget-toolbar a{text-decoration:none;box-shadow:none!important}.eapps-widget-toolbar-panel{border-radius:6px;background-color:#222;color:#fff;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;top:0;position:relative;transition:all .3s ease;opacity:0;overflow:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;box-shadow:0 0 0 1px hsla(0,0%,100%,.2);height:28px}.eapps-widget:hover .eapps-widget-toolbar-panel{opacity:1}.eapps-widget-toolbar-panel-wrapper{width:100%;position:relative}.eapps-widget-toolbar-panel-only-you{position:absolute;top:-24px;font-size:11px;line-height:14px;color:#9c9c9c;padding:5px 4px}.eapps-widget-toolbar-panel-logo{width:28px;height:28px;border-right:1px solid hsla(0,0%,100%,.2);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.eapps-widget-toolbar-panel-logo svg{display:block;width:15px;height:15px;fill:#f93262}.eapps-widget-toolbar-panel-edit{font-size:12px;font-weight:400;line-height:14px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding:9px;border-right:1px solid hsla(0,0%,100%,.2);color:#fff;text-decoration:none}.eapps-widget-toolbar-panel-edit-icon{width:14px;height:14px;margin-right:8px}.eapps-widget-toolbar-panel-edit-icon svg{display:block;width:100%;height:100%;fill:#fff}.eapps-widget-toolbar-panel-views{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.eapps-widget-toolbar-panel-views-label{font-size:12px;font-weight:400;line-height:14px;margin-left:8px}.eapps-widget-toolbar-panel-views-bar{display:-ms-inline-flexbox;display:inline-flex;width:70px;height:3px;border-radius:2px;margin-left:8px;background-color:hsla(0,0%,100%,.3)}.eapps-widget-toolbar-panel-views-bar-inner{border-radius:2px;background-color:#4ad504}.eapps-widget-toolbar-panel-views-green .eapps-widget-toolbar-panel-views-bar-inner{background-color:#4ad504}.eapps-widget-toolbar-panel-views-red .eapps-widget-toolbar-panel-views-bar-inner{background-color:#ff4734}.eapps-widget-toolbar-panel-views-orange .eapps-widget-toolbar-panel-views-bar-inner{background-color:#ffb400}.eapps-widget-toolbar-panel-views-percent{display:-ms-inline-flexbox;display:inline-flex;margin-left:8px;margin-right:8px;font-size:12px;font-weight:400;line-height:14px}.eapps-widget-toolbar-panel-views-get-more{padding:9px 16px;background-color:#f93262;color:#fff;font-size:12px;font-weight:400;border-radius:0 6px 6px 0}.eapps-widget-toolbar-panel-share{position:absolute;top:0;display:inline-block;margin-left:8px;width:83px;height:28px;padding-bottom:4px;box-sizing:content-box!important}.eapps-widget-toolbar-panel-share:hover .eapps-widget-toolbar-panel-share-block{opacity:1;pointer-events:all}.eapps-widget-toolbar-panel-share-button{padding:0 18px;height:28px;background-color:#1c91ff;color:#fff;font-size:12px;font-weight:400;border-radius:6px;position:absolute;top:0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;cursor:default;-ms-flex-align:center;align-items:center}.eapps-widget-toolbar-panel-share-button svg{display:inline-block;margin-right:6px;fill:#fff;position:relative;top:-1px}.eapps-widget-toolbar-panel-share-block{position:absolute;background:#fff;border:1px solid hsla(0,0%,7%,.1);border-radius:10px;width:209px;top:32px;transform:translateX(-63px);opacity:0;pointer-events:none;transition:all .3s ease;box-shadow:0 4px 6px rgba(0,0,0,.05)}.eapps-widget-toolbar-panel-share-block:hover{opacity:1;pointer-events:all}.eapps-widget-toolbar-panel-share-block-text{color:#111;font-size:15px;font-weight:400;padding:12px 0;text-align:center}.eapps-widget-toolbar-panel-share-block-text-icon{padding-bottom:4px}.eapps-widget-toolbar-panel-share-block-actions{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;border-top:1px solid hsla(0,0%,7%,.1)}.eapps-widget-toolbar-panel-share-block-actions-item{width:33.333333%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:39px;transition:all .3s ease;background-color:transparent}.eapps-widget-toolbar-panel-share-block-actions-item:hover{background-color:#fafafa}.eapps-widget-toolbar-panel-share-block-actions-item a{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.eapps-widget-toolbar-panel-share-block-actions-item-icon{width:16px;height:16px;display:block}.eapps-widget-toolbar-panel-share-block-actions-item-facebook .eapps-widget-toolbar-panel-share-block-actions-item-icon{fill:#3c5a9b}.eapps-widget-toolbar-panel-share-block-actions-item-twitter .eapps-widget-toolbar-panel-share-block-actions-item-icon{fill:#1ab2e8}.eapps-widget-toolbar-panel-share-block-actions-item-google .eapps-widget-toolbar-panel-share-block-actions-item-icon{fill:#dd4b39}.eapps-widget-toolbar-panel-share-block-actions-item:not(:last-child){border-right:1px solid hsla(0,0%,7%,.1)}', ""])
}
, function(e, t) {
    e.exports = function() {
        var e = [];
        return e.toString = function() {
            for (var e = [], t = 0; t < this.length; t++) {
                var n = this[t];
                n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
            }
            return e.join("")
        }
        ,
        e.i = function(t, n) {
            "string" == typeof t && (t = [[null, t, ""]]);
            for (var i = {}, o = 0; o < this.length; o++) {
                var r = this[o][0];
                "number" == typeof r && (i[r] = !0)
            }
            for (o = 0; o < t.length; o++) {
                var a = t[o];
                "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                e.push(a))
            }
        }
        ,
        e
    }
}
, function(e, t, n) {
    function i(e, t) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n]
              , o = d[i.id];
            if (o) {
                o.refs++;
                for (var r = 0; r < o.parts.length; r++)
                    o.parts[r](i.parts[r]);
                for (; r < i.parts.length; r++)
                    o.parts.push(l(i.parts[r], t))
            } else {
                for (var a = [], r = 0; r < i.parts.length; r++)
                    a.push(l(i.parts[r], t));
                d[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: a
                }
            }
        }
    }
    function o(e) {
        for (var t = [], n = {}, i = 0; i < e.length; i++) {
            var o = e[i]
              , r = o[0]
              , a = o[1]
              , s = o[2]
              , c = o[3]
              , l = {
                css: a,
                media: s,
                sourceMap: c
            };
            n[r] ? n[r].parts.push(l) : t.push(n[r] = {
                id: r,
                parts: [l]
            })
        }
        return t
    }
    function r(e, t) {
        var n = v()
          , i = m[m.length - 1];
        if ("top" === e.insertAt)
            i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild),
            m.push(t);
        else {
            if ("bottom" !== e.insertAt)
                throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(t)
        }
    }
    function a(e) {
        e.parentNode.removeChild(e);
        var t = m.indexOf(e);
        t >= 0 && m.splice(t, 1)
    }
    function s(e) {
        var t = document.createElement("style");
        return t.type = "text/css",
        r(e, t),
        t
    }
    function c(e) {
        var t = document.createElement("link");
        return t.rel = "stylesheet",
        r(e, t),
        t
    }
    function l(e, t) {
        var n, i, o;
        if (t.singleton) {
            var r = w++;
            n = b || (b = s(t)),
            i = p.bind(null, n, r, !1),
            o = p.bind(null, n, r, !0)
        } else
            e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(t),
            i = f.bind(null, n),
            o = function() {
                a(n),
                n.href && URL.revokeObjectURL(n.href)
            }
            ) : (n = s(t),
            i = u.bind(null, n),
            o = function() {
                a(n)
            }
            );
        return i(e),
        function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                    return;
                i(e = t)
            } else
                o()
        }
    }
    function p(e, t, n, i) {
        var o = n ? "" : i.css;
        if (e.styleSheet)
            e.styleSheet.cssText = y(t, o);
        else {
            var r = document.createTextNode(o)
              , a = e.childNodes;
            a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
        }
    }
    function u(e, t) {
        var n = t.css
          , i = t.media;
        if (i && e.setAttribute("media", i),
        e.styleSheet)
            e.styleSheet.cssText = n;
        else {
            for (; e.firstChild; )
                e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }
    function f(e, t) {
        var n = t.css
          , i = t.sourceMap;
        i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var o = new Blob([n],{
            type: "text/css"
        })
          , r = e.href;
        e.href = URL.createObjectURL(o),
        r && URL.revokeObjectURL(r)
    }
    var d = {}
      , g = function(e) {
        var t;
        return function() {
            return "undefined" == typeof t && (t = e.apply(this, arguments)),
            t
        }
    }
      , h = g(function() {
        return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
    })
      , v = g(function() {
        return document.head || document.getElementsByTagName("head")[0]
    })
      , b = null
      , w = 0
      , m = [];
    e.exports = function(e, t) {
        t = t || {},
        "undefined" == typeof t.singleton && (t.singleton = h()),
        "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
        var n = o(e);
        return i(n, t),
        function(e) {
            for (var r = [], a = 0; a < n.length; a++) {
                var s = n[a]
                  , c = d[s.id];
                c.refs--,
                r.push(c)
            }
            if (e) {
                var l = o(e);
                i(l, t)
            }
            for (var a = 0; a < r.length; a++) {
                var c = r[a];
                if (0 === c.refs) {
                    for (var p = 0; p < c.parts.length; p++)
                        c.parts[p]();
                    delete d[c.id]
                }
            }
        }
    }
    ;
    var y = function() {
        var e = [];
        return function(t, n) {
            return e[t] = n,
            e.filter(Boolean).join("\n")
        }
    }()
}
]);
