var jt = Object.defineProperty;
var zt = (l, t, e) => t in l ? jt(l, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[t] = e;
var r = (l, t, e) => (zt(l, typeof t != "symbol" ? t + "" : t, e), e);
import Ue, { useRef as Wt, useState as Nt } from "react";
var Be = { exports: {} }, ne = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function Ht() {
  if (st)
    return ne;
  st = 1;
  var l = Ue, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, a = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(c, n, f) {
    var d, x = {}, p = null, y = null;
    f !== void 0 && (p = "" + f), n.key !== void 0 && (p = "" + n.key), n.ref !== void 0 && (y = n.ref);
    for (d in n)
      i.call(n, d) && !o.hasOwnProperty(d) && (x[d] = n[d]);
    if (c && c.defaultProps)
      for (d in n = c.defaultProps, n)
        x[d] === void 0 && (x[d] = n[d]);
    return { $$typeof: t, type: c, key: p, ref: y, props: x, _owner: a.current };
  }
  return ne.Fragment = e, ne.jsx = u, ne.jsxs = u, ne;
}
var le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ot;
function Yt() {
  return ot || (ot = 1, process.env.NODE_ENV !== "production" && function() {
    var l = Ue, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), c = Symbol.for("react.context"), n = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), g = Symbol.iterator, m = "@@iterator";
    function P(s) {
      if (s === null || typeof s != "object")
        return null;
      var h = g && s[g] || s[m];
      return typeof h == "function" ? h : null;
    }
    var w = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(s) {
      {
        for (var h = arguments.length, v = new Array(h > 1 ? h - 1 : 0), S = 1; S < h; S++)
          v[S - 1] = arguments[S];
        j("error", s, v);
      }
    }
    function j(s, h, v) {
      {
        var S = w.ReactDebugCurrentFrame, b = S.getStackAddendum();
        b !== "" && (h += "%s", v = v.concat([b]));
        var E = v.map(function(T) {
          return String(T);
        });
        E.unshift("Warning: " + h), Function.prototype.apply.call(console[s], console, E);
      }
    }
    var O = !1, $ = !1, q = !1, K = !1, J = !1, ie;
    ie = Symbol.for("react.module.reference");
    function he(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === i || s === o || J || s === a || s === f || s === d || K || s === y || O || $ || q || typeof s == "object" && s !== null && (s.$$typeof === p || s.$$typeof === x || s.$$typeof === u || s.$$typeof === c || s.$$typeof === n || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === ie || s.getModuleId !== void 0));
    }
    function de(s, h, v) {
      var S = s.displayName;
      if (S)
        return S;
      var b = h.displayName || h.name || "";
      return b !== "" ? v + "(" + b + ")" : v;
    }
    function ae(s) {
      return s.displayName || "Context";
    }
    function D(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case i:
          return "Fragment";
        case e:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case f:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case c:
            var h = s;
            return ae(h) + ".Consumer";
          case u:
            var v = s;
            return ae(v._context) + ".Provider";
          case n:
            return de(s, s.render, "ForwardRef");
          case x:
            var S = s.displayName || null;
            return S !== null ? S : D(s.type) || "Memo";
          case p: {
            var b = s, E = b._payload, T = b._init;
            try {
              return D(T(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, se = 0, ke, Ve, Ie, Xe, Ge, je, ze;
    function We() {
    }
    We.__reactDisabledLog = !0;
    function mt() {
      {
        if (se === 0) {
          ke = console.log, Ve = console.info, Ie = console.warn, Xe = console.error, Ge = console.group, je = console.groupCollapsed, ze = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: We,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        se++;
      }
    }
    function xt() {
      {
        if (se--, se === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, s, {
              value: ke
            }),
            info: V({}, s, {
              value: Ve
            }),
            warn: V({}, s, {
              value: Ie
            }),
            error: V({}, s, {
              value: Xe
            }),
            group: V({}, s, {
              value: Ge
            }),
            groupCollapsed: V({}, s, {
              value: je
            }),
            groupEnd: V({}, s, {
              value: ze
            })
          });
        }
        se < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Re = w.ReactCurrentDispatcher, we;
    function fe(s, h, v) {
      {
        if (we === void 0)
          try {
            throw Error();
          } catch (b) {
            var S = b.stack.trim().match(/\n( *(at )?)/);
            we = S && S[1] || "";
          }
        return `
` + we + s;
      }
    }
    var Fe = !1, pe;
    {
      var St = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new St();
    }
    function Ne(s, h) {
      if (!s || Fe)
        return "";
      {
        var v = pe.get(s);
        if (v !== void 0)
          return v;
      }
      var S;
      Fe = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = Re.current, Re.current = null, mt();
      try {
        if (h) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (G) {
              S = G;
            }
            Reflect.construct(s, [], T);
          } else {
            try {
              T.call();
            } catch (G) {
              S = G;
            }
            s.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            S = G;
          }
          s();
        }
      } catch (G) {
        if (G && S && typeof G.stack == "string") {
          for (var _ = G.stack.split(`
`), U = S.stack.split(`
`), A = _.length - 1, B = U.length - 1; A >= 1 && B >= 0 && _[A] !== U[B]; )
            B--;
          for (; A >= 1 && B >= 0; A--, B--)
            if (_[A] !== U[B]) {
              if (A !== 1 || B !== 1)
                do
                  if (A--, B--, B < 0 || _[A] !== U[B]) {
                    var I = `
` + _[A].replace(" at new ", " at ");
                    return s.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", s.displayName)), typeof s == "function" && pe.set(s, I), I;
                  }
                while (A >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        Fe = !1, Re.current = E, xt(), Error.prepareStackTrace = b;
      }
      var Z = s ? s.displayName || s.name : "", at = Z ? fe(Z) : "";
      return typeof s == "function" && pe.set(s, at), at;
    }
    function yt(s, h, v) {
      return Ne(s, !1);
    }
    function _t(s) {
      var h = s.prototype;
      return !!(h && h.isReactComponent);
    }
    function ve(s, h, v) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return Ne(s, _t(s));
      if (typeof s == "string")
        return fe(s);
      switch (s) {
        case f:
          return fe("Suspense");
        case d:
          return fe("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case n:
            return yt(s.render);
          case x:
            return ve(s.type, h, v);
          case p: {
            var S = s, b = S._payload, E = S._init;
            try {
              return ve(E(b), h, v);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, He = {}, Ye = w.ReactDebugCurrentFrame;
    function me(s) {
      if (s) {
        var h = s._owner, v = ve(s.type, s._source, h ? h.type : null);
        Ye.setExtraStackFrame(v);
      } else
        Ye.setExtraStackFrame(null);
    }
    function Tt(s, h, v, S, b) {
      {
        var E = Function.call.bind(ge);
        for (var T in s)
          if (E(s, T)) {
            var _ = void 0;
            try {
              if (typeof s[T] != "function") {
                var U = Error((S || "React class") + ": " + v + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw U.name = "Invariant Violation", U;
              }
              _ = s[T](h, T, S, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              _ = A;
            }
            _ && !(_ instanceof Error) && (me(b), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", v, T, typeof _), me(null)), _ instanceof Error && !(_.message in He) && (He[_.message] = !0, me(b), R("Failed %s type: %s", v, _.message), me(null));
          }
      }
    }
    var bt = Array.isArray;
    function Ee(s) {
      return bt(s);
    }
    function Rt(s) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, v = h && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return v;
      }
    }
    function wt(s) {
      try {
        return $e(s), !1;
      } catch {
        return !0;
      }
    }
    function $e(s) {
      return "" + s;
    }
    function qe(s) {
      if (wt(s))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rt(s)), $e(s);
    }
    var oe = w.ReactCurrentOwner, Ft = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ke, Je, Pe;
    Pe = {};
    function Et(s) {
      if (ge.call(s, "ref")) {
        var h = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Pt(s) {
      if (ge.call(s, "key")) {
        var h = Object.getOwnPropertyDescriptor(s, "key").get;
        if (h && h.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Ct(s, h) {
      if (typeof s.ref == "string" && oe.current && h && oe.current.stateNode !== h) {
        var v = D(oe.current.type);
        Pe[v] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(oe.current.type), s.ref), Pe[v] = !0);
      }
    }
    function At(s, h) {
      {
        var v = function() {
          Ke || (Ke = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        v.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function Dt(s, h) {
      {
        var v = function() {
          Je || (Je = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", h));
        };
        v.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var Bt = function(s, h, v, S, b, E, T) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: s,
        key: h,
        ref: v,
        props: T,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function Lt(s, h, v, S, b) {
      {
        var E, T = {}, _ = null, U = null;
        v !== void 0 && (qe(v), _ = "" + v), Pt(h) && (qe(h.key), _ = "" + h.key), Et(h) && (U = h.ref, Ct(h, b));
        for (E in h)
          ge.call(h, E) && !Ft.hasOwnProperty(E) && (T[E] = h[E]);
        if (s && s.defaultProps) {
          var A = s.defaultProps;
          for (E in A)
            T[E] === void 0 && (T[E] = A[E]);
        }
        if (_ || U) {
          var B = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          _ && At(T, B), U && Dt(T, B);
        }
        return Bt(s, _, U, b, S, oe.current, T);
      }
    }
    var Ce = w.ReactCurrentOwner, Qe = w.ReactDebugCurrentFrame;
    function Q(s) {
      if (s) {
        var h = s._owner, v = ve(s.type, s._source, h ? h.type : null);
        Qe.setExtraStackFrame(v);
      } else
        Qe.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function De(s) {
      return typeof s == "object" && s !== null && s.$$typeof === t;
    }
    function Ze() {
      {
        if (Ce.current) {
          var s = D(Ce.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function Ot(s) {
      {
        if (s !== void 0) {
          var h = s.fileName.replace(/^.*[\\\/]/, ""), v = s.lineNumber;
          return `

Check your code at ` + h + ":" + v + ".";
        }
        return "";
      }
    }
    var et = {};
    function Ut(s) {
      {
        var h = Ze();
        if (!h) {
          var v = typeof s == "string" ? s : s.displayName || s.name;
          v && (h = `

Check the top-level render call using <` + v + ">.");
        }
        return h;
      }
    }
    function tt(s, h) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var v = Ut(h);
        if (et[v])
          return;
        et[v] = !0;
        var S = "";
        s && s._owner && s._owner !== Ce.current && (S = " It was passed a child from " + D(s._owner.type) + "."), Q(s), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, S), Q(null);
      }
    }
    function rt(s, h) {
      {
        if (typeof s != "object")
          return;
        if (Ee(s))
          for (var v = 0; v < s.length; v++) {
            var S = s[v];
            De(S) && tt(S, h);
          }
        else if (De(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var b = P(s);
          if (typeof b == "function" && b !== s.entries)
            for (var E = b.call(s), T; !(T = E.next()).done; )
              De(T.value) && tt(T.value, h);
        }
      }
    }
    function Mt(s) {
      {
        var h = s.type;
        if (h == null || typeof h == "string")
          return;
        var v;
        if (typeof h == "function")
          v = h.propTypes;
        else if (typeof h == "object" && (h.$$typeof === n || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        h.$$typeof === x))
          v = h.propTypes;
        else
          return;
        if (v) {
          var S = D(h);
          Tt(v, s.props, "prop", S, s);
        } else if (h.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var b = D(h);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof h.getDefaultProps == "function" && !h.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kt(s) {
      {
        for (var h = Object.keys(s.props), v = 0; v < h.length; v++) {
          var S = h[v];
          if (S !== "children" && S !== "key") {
            Q(s), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), Q(null);
            break;
          }
        }
        s.ref !== null && (Q(s), R("Invalid attribute `ref` supplied to `React.Fragment`."), Q(null));
      }
    }
    function it(s, h, v, S, b, E) {
      {
        var T = he(s);
        if (!T) {
          var _ = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var U = Ot(b);
          U ? _ += U : _ += Ze();
          var A;
          s === null ? A = "null" : Ee(s) ? A = "array" : s !== void 0 && s.$$typeof === t ? (A = "<" + (D(s.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : A = typeof s, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, _);
        }
        var B = Lt(s, h, v, b, E);
        if (B == null)
          return B;
        if (T) {
          var I = h.children;
          if (I !== void 0)
            if (S)
              if (Ee(I)) {
                for (var Z = 0; Z < I.length; Z++)
                  rt(I[Z], s);
                Object.freeze && Object.freeze(I);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              rt(I, s);
        }
        return s === i ? kt(B) : Mt(B), B;
      }
    }
    function Vt(s, h, v) {
      return it(s, h, v, !0);
    }
    function It(s, h, v) {
      return it(s, h, v, !1);
    }
    var Xt = It, Gt = Vt;
    le.Fragment = i, le.jsx = Xt, le.jsxs = Gt;
  }()), le;
}
process.env.NODE_ENV === "production" ? Be.exports = Ht() : Be.exports = Yt();
var $t = Be.exports;
class qt {
  constructor(t) {
    r(this, "content", /* @__PURE__ */ new Map());
    r(this, "keys", []);
    r(this, "length", 0);
    r(this, "current", 0);
    this.content = t, this.keys = Object.keys(t), this.length = t.size;
  }
  hasNext() {
    return this.current < this.length;
  }
  next() {
    return this.keys[this.current++];
  }
}
class ye {
  constructor() {
    r(this, "content", /* @__PURE__ */ new Map());
  }
  get(t) {
    return this.content.get(t);
  }
  keys() {
    return new qt(this.content);
  }
}
class Kt {
  constructor(t) {
    r(this, "current", 0);
    r(this, "array", []);
    this.array = t;
  }
  hasNext() {
    return this.current < this.array.length;
  }
  next() {
    return this.array[this.current++];
  }
}
class _e {
  constructor() {
    r(this, "content", /* @__PURE__ */ new Map());
  }
  get(t) {
    return this.content.get(t);
  }
  remove(t) {
    return this.content.delete(t);
  }
  keys() {
    const t = [];
    return this.content.forEach((e, i) => {
      t.push(+i);
    }), new Kt(t);
  }
}
class te {
  constructor() {
    r(this, "_powerOf2Fluid", !0);
    r(this, "_simulationScale", 0.25);
    r(this, "_fluidScale", 1.5);
    r(this, "_fluidIterations", 8);
    r(this, "_gamma", 2.1);
    r(this, "_gradientBackground", 0.1);
    r(this, "_bevelCurveRadius", 5);
    r(this, "_innerDarkening", 0.7);
    r(this, "_chromaticAberration", 0.15);
    r(this, "_refraction", 0.21);
    r(this, "_backgroundMultiplier", 1);
    r(this, "_periodicBoundary", !0);
    r(this, "_dragSpeed", 3);
    r(this, "_dragCoefficient", 0.8);
    r(this, "_motionDecayFactor", 0);
    r(this, "_surfaceDecayFactor", 2);
    r(this, "_timestepMultiplier", 1);
    r(this, "_fluidPhysicsScale", 20);
    r(this, "_paused", !1);
    r(this, "_version", 1);
    r(this, "onChangeVersion");
    r(this, "onChangePaused");
    r(this, "onChangeTimestepMultiplier");
    r(this, "onChangeFluidPhysicsScale");
    r(this, "onChangeSurfaceDecayFactor");
    r(this, "onChangeMotionDecayFactor");
    r(this, "onChangeDragCoefficient");
    r(this, "onChangeDragSpeed");
    r(this, "onChangePeriodicBoundary");
    r(this, "onChangeBackgroundMultiplier");
    r(this, "onChangeFluidIterations");
    r(this, "onChangeGamma");
    r(this, "onChangeRefraction");
    r(this, "onChangeChromaticAberration");
    r(this, "onChangeInnerDarkening");
    r(this, "onChangeBevelCurveRadius");
    r(this, "onChangeGradientBackground");
    r(this, "onChangeFluidScale");
    r(this, "onChangeSimulationScale");
    r(this, "onChangePowerOf2Fluid");
  }
  get version() {
    return this._version;
  }
  set version(t) {
    var e;
    t !== this._version && ((e = this.onChangeVersion) == null || e.call(this)), this._version = t;
  }
  get paused() {
    return this._paused;
  }
  set paused(t) {
    var e;
    t !== this._paused && ((e = this.onChangePaused) == null || e.call(this)), this._paused = t;
  }
  get fluidPhysicsScale() {
    return this._fluidPhysicsScale;
  }
  set fluidPhysicsScale(t) {
    var e;
    t !== this._fluidPhysicsScale && ((e = this.onChangeFluidPhysicsScale) == null || e.call(this, t)), this._fluidPhysicsScale = t;
  }
  get timestepMultiplier() {
    return this._timestepMultiplier;
  }
  set timestepMultiplier(t) {
    var e;
    t !== this._timestepMultiplier && ((e = this.onChangeTimestepMultiplier) == null || e.call(this)), this._timestepMultiplier = t;
  }
  get surfaceDecayFactor() {
    return this._surfaceDecayFactor;
  }
  set surfaceDecayFactor(t) {
    var e;
    t !== this._surfaceDecayFactor && ((e = this.onChangeSurfaceDecayFactor) == null || e.call(this, t)), this._surfaceDecayFactor = t;
  }
  get motionDecayFactor() {
    return this._motionDecayFactor;
  }
  set motionDecayFactor(t) {
    var e;
    t !== this._motionDecayFactor && ((e = this.onChangeMotionDecayFactor) == null || e.call(this, t)), this._motionDecayFactor = t;
  }
  get dragCoefficient() {
    return this._dragCoefficient;
  }
  set dragCoefficient(t) {
    var e;
    t !== this._dragCoefficient && ((e = this.onChangeDragCoefficient) == null || e.call(this, t)), this._dragCoefficient = t;
  }
  get dragSpeed() {
    return this._dragSpeed;
  }
  set dragSpeed(t) {
    var e;
    t !== this._dragSpeed && ((e = this.onChangeDragSpeed) == null || e.call(this, t)), this._dragSpeed = t;
  }
  get periodicBoundary() {
    return this._periodicBoundary;
  }
  set periodicBoundary(t) {
    var e;
    t !== this._periodicBoundary && ((e = this.onChangePeriodicBoundary) == null || e.call(this, t)), this._periodicBoundary = t;
  }
  get backgroundMultiplier() {
    return this._backgroundMultiplier;
  }
  set backgroundMultiplier(t) {
    var e;
    t !== this._backgroundMultiplier && ((e = this.onChangeBackgroundMultiplier) == null || e.call(this, t)), this._backgroundMultiplier = t;
  }
  get refraction() {
    return this._refraction;
  }
  set refraction(t) {
    var e;
    t !== this._refraction && ((e = this.onChangeRefraction) == null || e.call(this, t)), this._refraction = t;
  }
  get chromaticAberration() {
    return this._chromaticAberration;
  }
  set chromaticAberration(t) {
    var e;
    t !== this._chromaticAberration && ((e = this.onChangeChromaticAberration) == null || e.call(this, t)), this._chromaticAberration = t;
  }
  get innerDarkening() {
    return this._innerDarkening;
  }
  set innerDarkening(t) {
    var e;
    t !== this._innerDarkening && ((e = this.onChangeInnerDarkening) == null || e.call(this, t)), this._innerDarkening = t;
  }
  get bevelCurveRadius() {
    return this._bevelCurveRadius;
  }
  set bevelCurveRadius(t) {
    var e;
    t !== this._bevelCurveRadius && ((e = this.onChangeBevelCurveRadius) == null || e.call(this)), this._bevelCurveRadius = t;
  }
  get gradientBackground() {
    return this._gradientBackground;
  }
  set gradientBackground(t) {
    var e;
    t !== this._gradientBackground && ((e = this.onChangeGradientBackground) == null || e.call(this, t)), this._gradientBackground = t;
  }
  get gamma() {
    return this._gamma;
  }
  set gamma(t) {
    var e;
    t !== this._gamma && ((e = this.onChangeGamma) == null || e.call(this, t)), this._gamma = t;
  }
  get fluidIterations() {
    return this._fluidIterations;
  }
  set fluidIterations(t) {
    var e;
    t !== this._fluidIterations && ((e = this.onChangeFluidIterations) == null || e.call(this, t)), this._fluidIterations = t;
  }
  get fluidScale() {
    return this._fluidScale;
  }
  set fluidScale(t) {
    var e;
    t !== this._fluidScale && ((e = this.onChangeFluidScale) == null || e.call(this, t)), this._fluidScale = t;
  }
  get simulationScale() {
    return this._simulationScale;
  }
  set simulationScale(t) {
    var e;
    t !== this._simulationScale && ((e = this.onChangeSimulationScale) == null || e.call(this, t)), this._simulationScale = t;
  }
  get powerOf2Fluid() {
    return this._powerOf2Fluid;
  }
  set powerOf2Fluid(t) {
    var e;
    t !== this._powerOf2Fluid && ((e = this.onChangePowerOf2Fluid) == null || e.call(this, t)), this._powerOf2Fluid = t;
  }
  static parse(t) {
    const e = new te();
    return e._powerOf2Fluid = t.powerOf2Fluid, e._simulationScale = t.simulationScale, e._fluidScale = t.fluidScale, e._fluidIterations = t.fluidIterations, e._gamma = t.gamma, e._gradientBackground = t.gradientBackground, e._bevelCurveRadius = t.bevelCurveRadius, e._innerDarkening = t.innerDarkening, e._chromaticAberration = t.chromaticAberration, e._refraction = t.refraction, e._backgroundMultiplier = t.backgroundMultiplier, e._periodicBoundary = t.periodicBoundary, e._dragSpeed = t.dragSpeed, e._dragCoefficient = t.dragCoefficient, e._motionDecayFactor = t.motionDecayFactor, e._surfaceDecayFactor = t.surfaceDecayFactor, e._timestepMultiplier = t.timestepMultiplier, e._fluidPhysicsScale = t.fluidPhysicsScale, e._paused = t.paused, e;
  }
}
class k {
  constructor(t, e, i, a, o, u, c, n) {
    r(this, "wrapT");
    r(this, "wrapS");
    r(this, "minFilter");
    r(this, "magFilter");
    r(this, "dataType");
    r(this, "internalFormat");
    r(this, "format");
    this.wrapT = n ?? t.CLAMP_TO_EDGE, this.wrapS = c ?? t.CLAMP_TO_EDGE, this.minFilter = u ?? t.NEAREST, this.magFilter = o ?? t.NEAREST, this.dataType = a ?? t.UNSIGNED_BYTE, this.internalFormat = i ?? null, this.format = e ?? t.RGBA;
  }
  match(t) {
    return this.wrapT === t.wrapT && this.wrapS === t.wrapS && this.minFilter === t.minFilter && this.magFilter === t.magFilter && this.dataType === t.dataType && this.internalFormat === t.internalFormat && this.format === t.format;
  }
}
class xe {
  constructor(t, e, i, a) {
    r(this, "wrapT");
    r(this, "wrapS");
    r(this, "minFilter");
    r(this, "magFilter");
    i && (this.wrapT = i), a && (this.wrapS = a), t && (this.minFilter = t), e && (this.magFilter = e);
  }
}
class Le {
  constructor(t = 4, e = !0) {
    r(this, "unpackAlignment");
    r(this, "webGLFlipY");
    this.unpackAlignment = t, this.webGLFlipY = e;
  }
}
class X extends k {
  constructor(e, i, a, o, u, c, n, f, d, x, p) {
    super(e, u, c, n, f, d, x, p);
    r(this, "gl");
    r(this, "width");
    r(this, "height");
    r(this, "native");
    this.gl = e, this.width = i, this.height = a, this.native = o;
  }
  static createTextureFromImage(e, i, a, o, u) {
    if (a || (a = new k(e, null, null, null, null, null, null, null)), o || (o = new Le()), !u)
      switch (a.minFilter) {
        case e.NEAREST_MIPMAP_NEAREST:
        case e.LINEAR_MIPMAP_NEAREST:
        case e.NEAREST_MIPMAP_LINEAR:
        case e.LINEAR_MIPMAP_LINEAR:
          u = !0;
          break;
        default:
          u = !1;
      }
    const c = e.createTexture();
    if (!c)
      throw new Error("create texture failed");
    return e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, c), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, a.minFilter), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, a.magFilter), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, a.wrapS), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, a.wrapT), e.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.webGLFlipY), e.texImage2D(e.TEXTURE_2D, 0, a.internalFormat === null ? a.format : a.internalFormat, a.format, a.dataType, i), u && e.generateMipmap(e.TEXTURE_2D), e.bindTexture(e.TEXTURE_2D, null), new X(e, i.width, i.height, c, a.format, a.internalFormat, a.dataType, a.magFilter, a.minFilter, a.wrapS, a.wrapT);
  }
  static createTexture(e, i, a, o, u, c, n) {
    if (o || (o = new k(e, null, null, null, null, null, null, null)), c || (c = new Le()), !n)
      switch (o.minFilter) {
        case e.NEAREST_MIPMAP_NEAREST:
        case e.LINEAR_MIPMAP_NEAREST:
        case e.NEAREST_MIPMAP_LINEAR:
        case e.LINEAR_MIPMAP_LINEAR:
          n = !0;
          break;
        default:
          n = !1;
      }
    u || (u = null);
    const f = e.createTexture();
    if (!f)
      throw new Error("create texture failed");
    return e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, f), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, o.minFilter), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, o.magFilter), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, o.wrapS), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, o.wrapT), e.pixelStorei(e.UNPACK_ALIGNMENT, c.unpackAlignment), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, c.webGLFlipY), e.texImage2D(e.TEXTURE_2D, 0, o.internalFormat === null ? o.format : o.internalFormat, i, a, 0, o.format, o.dataType, u), n && e.generateMipmap(e.TEXTURE_2D), e.bindTexture(e.TEXTURE_2D, null), new X(e, i, a, f, o.format, o.internalFormat, o.dataType, o.magFilter, o.minFilter, o.wrapS, o.wrapT);
  }
  static updateGLTextureParameters(e, i, a) {
    e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, i), a.magFilter && e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, a.magFilter), a.minFilter && e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, a.minFilter), a.wrapS && e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, a.wrapS), a.wrapT && e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, a.wrapT), e.bindTexture(e.TEXTURE_2D, null);
  }
}
const nt = {
  lastActiveTexture: -1
};
class H {
  constructor(t, e, i, a) {
    r(this, "alwaysDirty", !1);
    r(this, "gl");
    r(this, "name");
    r(this, "location");
    r(this, "data");
    r(this, "dirty", !0);
    this.gl = t, this.name = e, this.location = i, this.data = a;
  }
}
class C extends H {
  constructor(e, i, a, o = !1) {
    super(e, i, a, null);
    r(this, "cube");
    r(this, "type");
    r(this, "samplerIndex", 0);
    r(this, "gpuSideValue", -1);
    this.cube = o, this.type = o ? e.TEXTURE_CUBE_MAP : e.TEXTURE_2D;
  }
  apply() {
    if (this.data === null)
      return;
    const e = this.gl.TEXTURE0 + this.samplerIndex;
    nt.lastActiveTexture !== e && (this.gl.activeTexture(e), nt.lastActiveTexture = e), this.gl.bindTexture(this.type, this.data), this.gpuSideValue !== this.samplerIndex && (this.gl.uniform1i(this.location, this.samplerIndex), this.gpuSideValue = this.samplerIndex);
  }
}
class be extends H {
  constructor(t, e, i, a = 0, o = 0) {
    const u = new Float32Array([a, o]);
    super(t, e, i, u);
  }
  apply() {
    if (this.data === null)
      return;
    const t = this.data;
    this.gl.uniform2f(this.location, t[0], t[1]), this.dirty = !1;
  }
}
class F extends H {
  constructor(t, e, i, a = 0) {
    super(t, e, i, a);
  }
  apply() {
    this.data !== null && (this.gl.uniform1f(this.location, this.data), this.dirty = !1);
  }
}
class ht extends H {
  constructor(t, e, i, a = 0) {
    super(t, e, i, a);
  }
  apply() {
    this.data !== null && (this.gl.uniform1i(this.location, this.data), this.dirty = !1);
  }
}
class Jt extends H {
  constructor(t, e, i, a = !1) {
    super(t, e, i, a);
  }
  apply() {
    this.data !== null && (this.gl.uniform1i(this.location, this.data ? 1 : 0), this.dirty = !1);
  }
}
class dt extends H {
  constructor(e, i, a, o, u) {
    const c = u || new Float32Array(o * 4);
    super(e, i, a, c);
    r(this, "arraySize");
    r(this, "buffer");
    this.arraySize = o, this.buffer = c;
  }
  apply() {
    this.data !== null && (this.gl.uniform4fv(this.location, this.data), this.dirty = !1);
  }
}
class ft extends H {
  constructor(e, i, a, o, u) {
    const c = u || new Float32Array(o * 2);
    super(e, i, a, c);
    r(this, "arraySize");
    r(this, "buffer");
    this.arraySize = o, this.buffer = c;
  }
  apply() {
    this.data !== null && (this.gl.uniform2fv(this.location, this.data), this.dirty = !1);
  }
}
class lt {
  constructor(t) {
    r(this, "closeBracket", "");
    r(this, "openBracket", "");
    r(this, "contents", []);
    t && (this.openBracket = t.charAt(0), this.closeBracket = t.charAt(1));
  }
  toString() {
    let t = this.openBracket;
    for (let e = 0; e < this.contents.length; e++)
      t += this.contents[e].toString();
    return t + this.closeBracket;
  }
}
class Se {
  constructor(t) {
    r(this, "contents");
    r(this, "toString", () => this.contents);
    if (!t) {
      this.contents = "";
      return;
    }
    this.contents = t;
  }
}
class W {
  // Assuming 5126 is a constant value relevant to the context
  constructor(t, e, i = 1) {
    r(this, "name");
    r(this, "location");
    r(this, "itemCount");
    r(this, "byteSize");
    r(this, "type", 5126);
    this.name = t, this.location = e, this.itemCount = i, this.byteSize = i * 4;
  }
}
const ee = {
  nativeClassName: (l) => {
    const t = {}.toString.call(l).slice(8, -1);
    return t === "Object" || t === "Function" || t === "Math" || t === "JSON" ? null : t;
  },
  isNativeObject: (l) => ee.nativeClassName(l) !== null,
  instanceof: (l, t) => {
    if (!t)
      return !1;
    switch (t) {
      case Array:
        return l instanceof Array;
      case Boolean:
        return typeof l == "boolean";
      case Number:
        return typeof l == "number";
      case String:
        return typeof l == "string";
      default:
        return l ? typeof t == "function" ? l instanceof t : typeof t == "object" && ee.isNativeObject(l) && l instanceof t ? !0 : t === W && l.__name__ !== null && l.__ename__ === null : !1;
    }
  },
  cast: (l, t) => {
    if (!l || ee.instanceof(l, t))
      return l;
    throw new Error("Cannot cast " + ee.nativeClassName(l) + " to " + ee.nativeClassName(t));
  }
}, M = {
  substr: (l, t = 0, e = l.length) => {
    let i = t, a = e;
    return e < 0 && (a = l.length + e), t > a && ([i, a] = [a, i]), l.substring(i, a);
  },
  remove: (l, t) => {
    const e = l.indexOf(t);
    return e !== -1 ? (l.splice(e, 1), !0) : !1;
  },
  // remove all comments
  stripComments: (l) => {
    const t = RegExp("(/\\*([\\s\\S]*?)\\*/)|(//(.*)$)", "igm".split("u").join(""));
    return l.replace(t, "");
  },
  now() {
    return typeof performance < "u" && typeof performance.now == "function" ? performance.now() : Date.now();
  },
  bracketExplode(l, t) {
    if (t.length !== 2)
      return null;
    let e = "";
    const i = t.charAt(0), a = t.charAt(1), o = new lt();
    let u = o;
    const c = [];
    let n = null;
    for (let f = 0; f < l.length; f++)
      if (e = l.charAt(f), e === i) {
        const d = new lt(t);
        u.contents.push(d), c.push(u), u = d, n = d;
      } else
        e === a ? (u = c.pop(), n = u) : (n instanceof Se || (n = new Se(), u.contents.push(n)), ee.cast(n, Se).contents += e);
    return o;
  },
  compressedToExploded: (l, t) => {
    let e = 0, i = 0;
    for (let a = 0; a < l.contents.length; a++) {
      const o = l.contents[a], u = o.toString().length;
      if (o instanceof Se) {
        if (e + u > t)
          break;
        e += u;
      }
      i += u;
    }
    return t - e + i;
  },
  injectConstValue: (l, t, e) => M.stripComments(l),
  // Find the largest power of 2 that is not greater than the given number
  // e.g. 5 -> 4, 7 -> 4, 8 -> 8, 9 -> 8
  floorPowerOf2: (l) => {
    let t = Math.floor(l);
    return t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, (t |= t >> 16) - (t >> 1);
  },
  log2: (l) => Math.log(l) * 1.4426950408889634
};
class Y {
  constructor(t) {
    r(this, "_aStride", 0);
    r(this, "_textures", []);
    r(this, "_attributes", []);
    r(this, "_uniforms", []);
    r(this, "_numTextures", 0);
    r(this, "_vertSource", "");
    r(this, "_fragSource", "");
    r(this, "_vert", null);
    r(this, "_frag", null);
    r(this, "_prog", null);
    r(this, "_name", "");
    r(this, "_ready", !1);
    r(this, "_active", !1);
    r(this, "gl");
    this.gl = t, this._name = this.constructor.name, this.initSources();
  }
  initSources() {
  }
  createProperties() {
  }
  create() {
    this.compile(this._vertSource, this._fragSource), this._ready = !0;
  }
  destroy() {
    this.gl.deleteShader(this._vert), this.gl.deleteShader(this._frag), this.gl.deleteProgram(this._prog), this._prog = null, this._vert = null, this._frag = null, this._ready = !1;
  }
  compile(t, e) {
    const i = this.gl.createShader(this.gl.VERTEX_SHADER);
    if (!i)
      throw new Error("Error creating vertex shader");
    if (this.gl.shaderSource(i, t), this.gl.compileShader(i), !this.gl.getShaderParameter(i, this.gl.COMPILE_STATUS))
      throw new Error("Error compiling vertex shader");
    const a = this.gl.createShader(this.gl.FRAGMENT_SHADER);
    if (!a)
      throw new Error("Error creating fragment shader");
    if (this.gl.shaderSource(a, e), this.gl.compileShader(a), !this.gl.getShaderParameter(a, this.gl.COMPILE_STATUS))
      throw new Error("Error compiling fragment shader");
    const o = this.gl.createProgram();
    if (o === null)
      throw new Error("Error creating shader program");
    if (this.gl.attachShader(o, i), this.gl.attachShader(o, a), this.gl.linkProgram(o), !this.gl.getProgramParameter(o, this.gl.LINK_STATUS))
      throw new Error("Unable to initialize the shader program." + this.gl.getProgramInfoLog(o));
    const u = /* @__PURE__ */ new Map();
    for (let x = this.gl.getProgramParameter(o, this.gl.ACTIVE_UNIFORMS); x-- > 0; ) {
      const p = this.gl.getActiveUniform(o, x), y = this.gl.getUniformLocation(o, p.name);
      u.set(p.name, y);
    }
    const c = /* @__PURE__ */ new Map();
    for (let x = this.gl.getProgramParameter(o, this.gl.ACTIVE_ATTRIBUTES); x-- > 0; ) {
      const p = this.gl.getActiveAttrib(o, x), y = this.gl.getAttribLocation(o, p.name);
      c.set(p.name, y);
    }
    this._vert = i, this._frag = a, this._prog = o, this._numTextures = 0;
    const n = [];
    let f = 0;
    for (let x = this._uniforms; f < x.length; f++) {
      const p = x[f];
      let y = u.get(p.name);
      y || (y = u.get(p.name + "[0]")), p instanceof C && (p.samplerIndex = this._numTextures++, this._textures[p.samplerIndex] = p), y ? p.location = y : n.push(p);
    }
    for (; n.length > 0; ) {
      const x = n.pop();
      M.remove(this._uniforms, x);
    }
    f = 0;
    const d = this._attributes;
    for (; f < d.length; ) {
      const x = d[f++], p = c.get(x.name);
      x.location = p ?? -1;
    }
  }
  deactivate() {
    this._active && (this._active = !1, this.disableAttributes());
  }
  disableAttributes() {
    for (let t = 0, e = this._attributes.length; t < e; t++) {
      const i = this._attributes[t].location;
      i !== -1 && this.gl.disableVertexAttribArray(i);
    }
  }
  toString() {
    return "[Shader(" + this._name + ", attributes:" + this._attributes.length + ", uniforms:" + this._uniforms.length + ")]";
  }
  setupAndActive() {
    this._active || (this._ready || this.create(), this.gl.useProgram(this._prog));
    for (const e of this._uniforms)
      (e.dirty || e.alwaysDirty) && e.apply();
    let t = 0;
    for (const e of this._attributes)
      e.location !== -1 && (this.gl.enableVertexAttribArray(e.location), this.gl.vertexAttribPointer(e.location, e.itemCount, e.type, !1, this._aStride, t)), t += e.byteSize;
    this._active || (this._active = !0);
  }
}
const pt = {
  STORAGE_QUALIFIER_TYPE: (() => {
    const l = new ye();
    return l.content.set("const", ["bool", "int", "float", "vec2", "vec3", "vec4", "bvec2", "bvec3", "bvec4", "ivec2", "ivec3", "ivec4", "mat2", "mat3", "mat4"]), l.content.set("attribute", ["float", "vec2", "vec3", "vec4", "mat2", "mat3", "mat4"]), l.content.set("uniform", ["bool", "int", "float", "vec2", "vec3", "vec4", "bvec2", "bvec3", "bvec4", "ivec2", "ivec3", "ivec4", "mat2", "mat3", "mat4", "sampler2D", "samplerCube"]), l.content.set("varying", ["float", "vec2", "vec3", "vec4", "mat2", "mat3", "mat4"]), l;
  })(),
  PRECISION_QUALIFIERS: ["lowp", "mediump", "highp"],
  SAMPLE_LOGO_TEXTURE_GLSL: `
vec4 sampleLumaLogoTexture(vec2 uv) {
    // fraction of viewport
    float displayWidth = 0.8;
    float aspectRatio = 2048.0/582.0;
    // we want to display the texture at this width in the center of the viewport
    // we workout a new uv coordinate that will sample the texture at this width
    vec2 uvClip = uv * 2. - 1.;
    // scale up to display width
    uvClip /= displayWidth;
    // correct aspect ratio
    uvClip.y *= aspectRatio / viewportAspectRatio;
    vec2 uvCentered = uvClip * .5 + .5;
    // if out of bounds, return 0
    if (uvCentered.x < 0. || uvCentered.x > 1. || uvCentered.y < 0. || uvCentered.y > 1.) {
        return vec4(0.);
    }
    return texture2D(lumaLogoTexture, uvCentered);
}  
  `
};
class Qt extends Y {
  constructor(e) {
    super(e);
    r(this, "texture");
    r(this, "lumaLogoTexture");
    r(this, "invGamma");
    r(this, "time_s");
    r(this, "refraction");
    r(this, "chromaticAberration");
    r(this, "innerDarkening");
    r(this, "gradientBackground");
    r(this, "viewportAspectRatio");
    r(this, "vertexPosition");
    this.createProperties();
  }
  createProperties() {
    super.createProperties();
    const e = new C(this.gl, "texture", null, !1);
    this.texture = e, this._uniforms.push(e);
    const i = new C(this.gl, "lumaLogoTexture", null, !1);
    this.lumaLogoTexture = i, this._uniforms.push(i);
    const a = new F(this.gl, "invGamma", null);
    this.invGamma = a, this._uniforms.push(a);
    const o = new F(this.gl, "time_s", null);
    this.time_s = o, this._uniforms.push(o);
    const u = new F(this.gl, "refraction", null);
    this.refraction = u, this._uniforms.push(u);
    const c = new F(this.gl, "chromaticAberration", null);
    this.chromaticAberration = c, this._uniforms.push(c);
    const n = new F(this.gl, "innerDarkening", null);
    this.innerDarkening = n, this._uniforms.push(n);
    const f = new F(this.gl, "gradientBackground", null);
    this.gradientBackground = f, this._uniforms.push(f);
    const d = new F(this.gl, "viewportAspectRatio", null);
    this.viewportAspectRatio = d, this._uniforms.push(d);
    const x = new W("vertexPosition", 0, 2);
    this.vertexPosition = x, this._attributes.push(x), this._aStride += 8;
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
varying vec2 texelCoord;

void main() {
    texelCoord = vertexPosition;
    gl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );
}
`, this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

const float gamma = 2.1;

vec3 toLinear(vec3 v){
    return pow(v,vec3(gamma));
}

vec4 toLinear(vec4 v){
    return vec4(toLinear(v.rgb),v.a);
}

vec3 toGamma(vec3 v){
    return pow(v,vec3(1./gamma));
}

vec4 toGamma(vec4 v){
    return vec4(toGamma(v.rgb),v.a);
}

vec3 brightnessContrast(vec3 value, float brightness, float contrast) {
    return (value - 0.5) * contrast + 0.5 + brightness;
}
uniform sampler2D texture;
uniform sampler2D lumaLogoTexture;
uniform float invGamma;
uniform float time_s;
uniform float refraction;
uniform float chromaticAberration;
uniform float innerDarkening;
uniform float gradientBackground;
uniform float viewportAspectRatio;
varying vec2 texelCoord;
` + pt.SAMPLE_LOGO_TEXTURE_GLSL + `
void main(void){
    vec4 lumaLogoSample = sampleLumaLogoTexture(texelCoord);
    
    #if 0
    float centerHeight = lumaLogoSample.r;
    
    float gradientX = dFdx(centerHeight);
    float gradientY = dFdy(centerHeight);
    
    #elif 0
    float centerHeight = lumaLogoSample.r;
    
    
    float leftHeight = texture2D(lumaLogoTexture, texelCoord - vec2(invResolution.x, 0.0)).r;
    float rightHeight = texture2D(lumaLogoTexture, texelCoord + vec2(invResolution.x, 0.0)).r;
    float downHeight = texture2D(lumaLogoTexture, texelCoord - vec2(0.0, invResolution.y)).r;
    float upHeight = texture2D(lumaLogoTexture, texelCoord + vec2(0.0, invResolution.y)).r;
    float gradientX = ((rightHeight - centerHeight) + (centerHeight - leftHeight)) * 0.5;
    float gradientY = ((upHeight - centerHeight) + (centerHeight - downHeight)) * 0.5;
    
    #elif 1
    float sign = -(lumaLogoSample.b * 2.0 - 1.0);
    float gradientX = lumaLogoSample.r * sign;
    float gradientY = lumaLogoSample.g * sign;
    float centerHeight = 1. - clamp(lumaLogoSample.r + lumaLogoSample.g, 0., 1.);
    #endif    
    
    vec3 surfaceNormal = vec3(gradientX, gradientY, 1.0);
    vec2 refractionOffset = surfaceNormal.xy * refraction;
    vec2 texelCoordRefracted = texelCoord + refractionOffset;
    vec4 sample = vec4(
        texture2D(texture, texelCoordRefracted + refractionOffset * chromaticAberration).r,
        texture2D(texture, texelCoordRefracted).g,
        texture2D(texture, texelCoordRefracted - refractionOffset * chromaticAberration).b,
        1.0
    );
    float innerDarkeningFactor = mix(smoothstep(1.0, 0.5, centerHeight), 1.0, 1.0 - innerDarkening);
    
    vec2 gradientDirection = vec2(0.5, 0.5);
    float g = sin(dot(gradientDirection, texelCoord + refractionOffset) * 8. + time_s * 0.5) * 0.5 + 0.5;
    g *= gradientBackground * (1. - centerHeight * 0.9);
    gl_FragColor = vec4(
        (
            (sample.rgb * (g * 2. + 1.))
            * innerDarkeningFactor
            + g * 0.25
        )
        * pow(centerHeight, 0.05) 
        * lumaLogoSample.a 
        , 
        1.0
    );
}
`;
  }
}
class re extends Y {
  constructor(e) {
    super(e);
    r(this, "invResolution");
    r(this, "invAspectRatio");
    r(this, "velocityBoundaryEnabled");
    r(this, "vertexPosition");
  }
  createProperties() {
    super.createProperties();
    const e = new be(this.gl, "invResolution", null, 0, 0);
    this.invResolution = e, this._uniforms.push(e);
    const i = new F(this.gl, "invAspectRatio", null, 0);
    this.invAspectRatio = i, this._uniforms.push(i);
    const a = new Jt(this.gl, "velocityBoundaryEnabled", null, !1);
    this.velocityBoundaryEnabled = a, this._uniforms.push(a);
    const o = new W("vertexPosition", 0, 2);
    this.vertexPosition = o, this._attributes.push(o), this._aStride += 8;
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
uniform vec2 invResolution;
uniform float invAspectRatio;
varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;
varying vec2 p;

void main() {
  texelCoord = vertexPosition;
  vL = texelCoord - vec2(invResolution.x,0);
  vR = texelCoord + vec2(invResolution.x,0);
  vB = texelCoord - vec2(0,invResolution.y);
  vT = texelCoord + vec2(0,invResolution.y);
  vec2 clipSpace = 2.0*texelCoord - 1.0;
  p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);
  gl_Position = vec4(clipSpace, 0.0, 1.0 );
}`, this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )
`;
  }
}
class Zt extends re {
  constructor(e) {
    super(e);
    r(this, "surface");
    r(this, "dt");
    r(this, "dx");
  }
  createProperties() {
    super.createProperties();
    const e = new C(this.gl, "surface", null, !1);
    this.surface = e, this._uniforms.push(e);
    const i = new F(this.gl, "dt", null);
    this.dt = i, this._uniforms.push(i);
    const a = new F(this.gl, "dx", null);
    this.dx = a, this._uniforms.push(a);
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

varying vec2 p;

void main() {
  texelCoord = vertexPosition;
  
  vL = texelCoord - vec2(invResolution.x,0);
  vR = texelCoord + vec2(invResolution.x,0);
  vB = texelCoord - vec2(0,invResolution.y);
  vT = texelCoord + vec2(0,invResolution.y);
  
  vec2 clipSpace = 2.0*texelCoord - 1.0;  
  
  p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

  gl_Position = vec4(clipSpace, 0.0, 1.0 );  
}
`, this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D surface;
uniform float dt;
uniform float dx;
varying vec2 texelCoord;
varying vec2 p;
`;
  }
}
class er extends Zt {
  constructor(e) {
    super(e);
    r(this, "enableUserVelocity");
    r(this, "decayFactor");
    r(this, "time_s");
    r(this, "userVelocityTexture");
    r(this, "backgroundTexture");
    r(this, "pointerPositions");
    r(this, "pointerData");
    r(this, "activePointerCount");
    r(this, "backgroundMultiplier");
    this.createProperties();
  }
  set_enableUserVelocity(e) {
    return this.enableUserVelocity = e, this._fragSource = M.injectConstValue(this._fragSource, "enableUserVelocity", e) ?? "", this._ready && this.destroy(), e;
  }
  createProperties() {
    super.createProperties();
    const e = new F(this.gl, "decayFactor", null);
    this.decayFactor = e, this._uniforms.push(e);
    const i = new F(this.gl, "time_s", null);
    this.time_s = i, this._uniforms.push(i);
    const a = new C(this.gl, "userVelocityTexture", null, !1);
    this.userVelocityTexture = a, this._uniforms.push(a);
    const o = new C(this.gl, "backgroundTexture", null, !1);
    this.backgroundTexture = o, this._uniforms.push(o);
    const u = new dt(this.gl, "pointerPositions", null, 10);
    this.pointerPositions = u, this._uniforms.push(u);
    const c = new ft(this.gl, "pointerData", null, 10);
    this.pointerData = c, this._uniforms.push(c);
    const n = new ht(this.gl, "activePointerCount", null);
    this.activePointerCount = n, this._uniforms.push(n);
    const f = new F(this.gl, "backgroundMultiplier", null);
    this.backgroundMultiplier = f, this._uniforms.push(f);
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

varying vec2 p;

void main() {
  texelCoord = vertexPosition;
  
  vL = texelCoord - vec2(invResolution.x,0);
  vR = texelCoord + vec2(invResolution.x,0);
  vB = texelCoord - vec2(0,invResolution.y);
  vT = texelCoord + vec2(0,invResolution.y);
  
  vec2 clipSpace = 2.0*texelCoord - 1.0;  
  
  p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

  gl_Position = vec4(clipSpace, 0.0, 1.0 );  
}
`;
    const e = [];
    function i(a) {
      return `
    if (activePointerCount > ${a}) {
        vec2 pointer = pointerPositions[${a}].xy;
        vec2 lastFramePointer = pointerPositions[${a}].zw;
        float pressure = pointerData[${a}].y;
        float radius = pointerData[${a}].x;

        vec2 velocity = (pointer - lastFramePointer) / dt;
        float speed = length(velocity);

        float fp; // fractional projection
        float dist = distanceToSegment(pointer, lastFramePointer, p, fp);

        float R = radius + pressure * pressure * 0.1;

        float x = clamp(1.0 - dist * dist / R, 0., 1.);

        vec3 hsv = rgb2hsv(backgroundSample.rgb);
        hsv.y = pow(hsv.y, 0.35);
        vec3 rgb = hsv2rgb(hsv);

        color.rgb += min(
            brightnessContrast(
                rgb,
                0., // brightness
                1.0 // contrast
            )
            * x * 8. * (speed * 1. + 2.) * dt,
            vec3(1.)
        );
    }
    `;
    }
    for (let a = 0; a < 10; a++)
      e.push(i(a));
    this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D surface;
uniform float dt;
uniform float dx;
varying vec2 texelCoord;
varying vec2 p;

float distanceToSegment(vec2 a, vec2 b, vec2 p, out float fp){
  vec2 d = p - a;
  vec2 x = b - a;

  fp = 0.0; 
  float lx = length(x);
  
  if(lx <= 0.0001) return length(d);

  float projection = dot(d, x / lx); 

  fp = projection / lx;

  if(projection < 0.0)            return length(d);
  else if(projection > length(x)) return length(p - b);
  return sqrt(abs(dot(d,d) - projection*projection));
}

float distanceToSegment(vec2 a, vec2 b, vec2 p){
    float fp;
    return distanceToSegment(a, b, p, fp);
}
vec3 brightnessContrast(vec3 value, float brightness, float contrast) {
    return (value - 0.5) * contrast + 0.5 + brightness;
}

uniform float decayFactor;
uniform float time_s;
uniform sampler2D userVelocityTexture;
uniform sampler2D backgroundTexture;

uniform vec4 pointerPositions[10];

uniform vec2 pointerData[10];
uniform int activePointerCount;
uniform float backgroundMultiplier;

const bool enableUserVelocity = false;
  
vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
  
vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
void main(){  
    vec4 color = texture2D(surface, texelCoord);
    vec4 backgroundSample = texture2D(backgroundTexture,
      texelCoord + vec2(
        0.5 * sin(time_s * 0.1),
        0.5 * cos(time_s * 0.1)
      )
    );
    
    vec4 dColor = backgroundSample * backgroundMultiplier - color;
    color += dColor * clamp(decayFactor * dt, 0., 1.0);
    if (enableUserVelocity) {
        vec2 userVelocity = texture2D(userVelocityTexture, texelCoord).xy;
        float v = length(userVelocity);
        float vdt = v * dt;
      
      color.rgb += vec3(vdt) * 0.1;
    }
    
    ` + e.join(`
`) + `
    gl_FragColor = color;
  }
`;
  }
}
class tr extends re {
  constructor(e) {
    super(e);
    r(this, "velocity");
    r(this, "dt");
    r(this, "dx");
  }
  createProperties() {
    super.createProperties();
    const e = new C(this.gl, "velocity", null, !1);
    this.velocity = e, this._uniforms.push(e);
    const i = new F(this.gl, "dt", null);
    this.dt = i, this._uniforms.push(i);
    const a = new F(this.gl, "dx", null);
    this.dx = a, this._uniforms.push(a);
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif
 
attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

varying vec2 p;

void main() {
    texelCoord = vertexPosition;
    vL = texelCoord - vec2(invResolution.x,0);
    vR = texelCoord + vec2(invResolution.x,0);
    vB = texelCoord - vec2(0,invResolution.y);
    vT = texelCoord + vec2(0,invResolution.y);
    vec2 clipSpace = 2.0*texelCoord - 1.0;    
    p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);
    gl_Position = vec4(clipSpace, 0.0, 1.0 );    
}
`, this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}


#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D velocity;
uniform float dt;
uniform float dx;
varying vec2 texelCoord;
varying vec2 p;
`;
  }
}
class rr extends tr {
  constructor(e) {
    super(e);
    r(this, "time_s");
    r(this, "userVelocityTexture");
    r(this, "lumaLogoTexture");
    r(this, "decayFactor");
    r(this, "dragCoefficient");
    r(this, "dragSpeed");
    r(this, "pointerPositions");
    r(this, "pointerData");
    r(this, "activePointerCount");
    r(this, "opticalFlowExponent");
    r(this, "gravity");
    r(this, "viewportAspectRatio");
    r(this, "enableUserVelocity");
    this.createProperties();
  }
  set_enableUserVelocity(e) {
    return this.enableUserVelocity = e, this._fragSource = M.injectConstValue(this._fragSource, "enableUserVelocity", e) ?? "", this._ready && this.destroy(), e;
  }
  set_enableVelocityBoundary(e) {
    return this.enableUserVelocity = e, this._fragSource = M.injectConstValue(this._fragSource, "enableUserVelocity", e) ?? "", this._ready && this.destroy(), e;
  }
  createProperties() {
    super.createProperties();
    const e = new F(this.gl, "time_s", null);
    this.time_s = e, this._uniforms.push(e);
    const i = new C(this.gl, "userVelocityTexture", null, !1);
    this.userVelocityTexture = i, this._uniforms.push(i);
    const a = new C(this.gl, "lumaLogoTexture", null, !1);
    this.lumaLogoTexture = a, this._uniforms.push(a);
    const o = new F(this.gl, "decayFactor", null);
    this.decayFactor = o, this._uniforms.push(o);
    const u = new F(this.gl, "dragCoefficient", null);
    this.dragCoefficient = u, this._uniforms.push(u);
    const c = new F(this.gl, "dragSpeed", null);
    this.dragSpeed = c, this._uniforms.push(c);
    const n = new dt(this.gl, "pointerPositions", null, 10);
    this.pointerPositions = n, this._uniforms.push(n);
    const f = new ft(this.gl, "pointerData", null, 10);
    this.pointerData = f, this._uniforms.push(f);
    const d = new ht(this.gl, "activePointerCount", null);
    this.activePointerCount = d, this._uniforms.push(d);
    const x = new F(this.gl, "opticalFlowExponent", null);
    this.opticalFlowExponent = x, this._uniforms.push(x);
    const p = new be(this.gl, "gravity", null);
    this.gravity = p, this._uniforms.push(p);
    const y = new F(this.gl, "viewportAspectRatio", null);
    this.viewportAspectRatio = y, this._uniforms.push(y);
  }
  initSources() {
    this._vertSource += `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif
 
attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;
varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;
varying vec2 p;

void main() {
    texelCoord = vertexPosition;
    
    vL = texelCoord - vec2(invResolution.x,0);
    vR = texelCoord + vec2(invResolution.x,0);
    vB = texelCoord - vec2(0,invResolution.y);
    vT = texelCoord + vec2(0,invResolution.y);
    
    vec2 clipSpace = 2.0*texelCoord - 1.0;    
    
    p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

    gl_Position = vec4(clipSpace, 0.0, 1.0 );    
}
`;
    const e = [];
    function i(a) {
      return `
        if (activePointerCount > ${a}) {
            vec2 pointer = pointerPositions[${a}].xy;
            vec2 lastFramePointer = pointerPositions[${a}].zw;
            float radius = pointerData[${a}].x;
            float pressure = pointerData[${a}].y;

            vec2 velocity = (pointer - lastFramePointer) / dt;
            float speed = length(velocity);

            float fp; // fractional projection
            float dist = distanceToSegment(pointer, lastFramePointer, p, fp);

            float taperFactor = 0.6; // 1 => 0 at lastMouse, 0 => no tapering
            float projectedFraction = 1.0 - clamp(fp, 0.0, 1.0) * taperFactor;

            float R = radius * 0.5 + pressure * pressure * pressure * 0.1;

            float m = exp(-dist/R) * dragCoefficient; // drag coefficient
            m *= projectedFraction * projectedFraction;

            vec2 targetVelocity = velocity * dx * dragSpeed * dt * 60.;
            v += (targetVelocity - v) * m;
        }
    `;
    }
    for (let a = 0; a < 10; a++)
      e.push(i(a));
    this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D velocity;
    uniform float dt;
    uniform float dx;
    varying vec2 texelCoord;
    varying vec2 p;

float distanceToSegment(vec2 a, vec2 b, vec2 p, out float fp){
    vec2 d = p - a;
    vec2 x = b - a;

    fp = 0.0; 
    float lx = length(x);
    
    if(lx <= 0.0001) return length(d);

    float projection = dot(d, x / lx); 

    fp = projection / lx;

    if(projection < 0.0)            return length(d);
    else if(projection > length(x)) return length(p - b);
    return sqrt(abs(dot(d,d) - projection*projection));
}

float distanceToSegment(vec2 a, vec2 b, vec2 p){
    float fp;
    return distanceToSegment(a, b, p, fp);
}
vec3 mod289(vec3 x) {
    return x-floor(x*(1./289.))*289.;
}

vec4 mod289(vec4 x) {
    return x-floor(x*(1./289.))*289.;
}

vec4 permute(vec4 x) {
    return mod289(((x*34.)+1.)*x);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159-.85373472095314*r;
}

float snoise(vec3 v) {
    const vec2 C=vec2(1./6.,1./3.);
    const vec4 D=vec4(0.,.5,1.,2.);
    
    vec3 i=floor(v+dot(v,C.yyy));
    vec3 x0=v-i+dot(i,C.xxx);
    
    vec3 g=step(x0.yzx,x0.xyz);
    vec3 l=1.-g;
    vec3 i1=min(g.xyz,l.zxy);
    vec3 i2=max(g.xyz,l.zxy);
    
    vec3 x1=x0-i1+C.xxx;
    vec3 x2=x0-i2+C.yyy;
    vec3 x3=x0-D.yyy;
    
    i=mod289(i);
    vec4 p=permute(permute(permute(
        i.z+vec4(0.,i1.z,i2.z,1.))
        +i.y+vec4(0.,i1.y,i2.y,1.))
        +i.x+vec4(0.,i1.x,i2.x,1.));
    
    float n_=.142857142857;
    vec3 ns=n_*D.wyz-D.xzx;
    
    vec4 j=p-49.*floor(p*ns.z*ns.z);
    
    vec4 x_=floor(j*ns.z);
    vec4 y_=floor(j-7.*x_);
    
    vec4 x=x_*ns.x+ns.yyyy;
    vec4 y=y_*ns.x+ns.yyyy;
    vec4 h=1.-abs(x)-abs(y);
    
    vec4 b0=vec4(x.xy,y.xy);
    vec4 b1=vec4(x.zw,y.zw);
    
    vec4 s0=floor(b0)*2.+1.;
    vec4 s1=floor(b1)*2.+1.;
    vec4 sh=-step(h,vec4(0.));
    
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
    vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    
    vec3 p0=vec3(a0.xy,h.x);
    vec3 p1=vec3(a0.zw,h.y);
    vec3 p2=vec3(a1.xy,h.z);
    vec3 p3=vec3(a1.zw,h.w);
    
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;
    p1*=norm.y;
    p2*=norm.z;
    p3*=norm.w;
    
    vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
    m=m*m;
    return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),
    dot(p2,x2),dot(p3,x3)));
}

vec3 snoiseVec3(vec3 x){
    float s=snoise(vec3(x));
    float s1=snoise(vec3(x.y-19.1,x.z+33.4,x.x+47.2));
    float s2=snoise(vec3(x.z+74.2,x.x-124.5,x.y+99.4));
    vec3 c=vec3(s,s1,s2);
    return c;
}

vec3 curlNoise(vec3 p){
    const float e=.1;
    vec3 dx=vec3(e,0.,0.);
    vec3 dy=vec3(0.,e,0.);
    vec3 dz=vec3(0.,0.,e);
    
    vec3 p_x0=snoiseVec3(p-dx);
    vec3 p_x1=snoiseVec3(p+dx);
    vec3 p_y0=snoiseVec3(p-dy);
    vec3 p_y1=snoiseVec3(p+dy);
    vec3 p_z0=snoiseVec3(p-dz);
    vec3 p_z1=snoiseVec3(p+dz);
    
    float x=p_y1.z-p_y0.z-p_z1.y+p_z0.y;
    float y=p_z1.x-p_z0.x-p_x1.z+p_x0.z;
    float z=p_x1.y-p_x0.y-p_y1.x+p_y0.x;
    
    return normalize(vec3(x,y,.5));
}
    uniform float time_s;
    uniform sampler2D userVelocityTexture;
    uniform sampler2D lumaLogoTexture;
    uniform float decayFactor;
    uniform float dragCoefficient;
    uniform float dragSpeed;
    
    uniform vec4 pointerPositions[10];
    
    uniform vec2 pointerData[10];
    uniform int activePointerCount;
    uniform float opticalFlowExponent;
    uniform vec2 gravity;
    uniform float viewportAspectRatio;
    const bool enableUserVelocity = false;
    ` + pt.SAMPLE_LOGO_TEXTURE_GLSL + `
    void main(){
        vec2 v = texture2D(velocity, texelCoord).xy;
        
        
        
        vec2 targetVelocity = gravity;
        
        {
            vec2 dv = targetVelocity - v;
            v += dv * clamp(decayFactor * dt, 0., 1.0);
        }
        
        #if 1
        {
            vec4 lumaLogoSample = sampleLumaLogoTexture(texelCoord);
            float sign = -(lumaLogoSample.b * 2.0 - 1.0);
            float gradientX = lumaLogoSample.r * sign;
            float gradientY = lumaLogoSample.g * sign;
            float centerHeight = 1. - clamp(lumaLogoSample.r + lumaLogoSample.g, 0., 1.);
            
            vec2 logoTargetVelocity = mix(-v, v, centerHeight * lumaLogoSample.a);
            vec2 dv = logoTargetVelocity - v;
            v += dv * clamp(5. * dt, 0., 1.0);
        }
        #endif
        
        if (enableUserVelocity) {
            vec2 userVelocity = texture2D(userVelocityTexture, texelCoord).xy;
            float l = length(userVelocity + 0.000001);
            float lE = pow(abs(l), opticalFlowExponent);
            v += userVelocity * (lE/l);
        }
        v += curlNoise(vec3(texelCoord, time_s * 0.1)).xy * 0.01;
        v += curlNoise(vec3(texelCoord * 2., (time_s - 20.0) * 0.1)).xy * 0.02;
` + e.join(`
`) + `
        gl_FragColor = vec4(v, 0, 1.);
    }
`;
  }
}
class ir extends Y {
  constructor(e) {
    super(e);
    r(this, "texture");
    r(this, "vertexPosition");
    r(this, "testVal");
    this.createProperties();
  }
  createProperties() {
    super.createProperties(), this.texture = new C(this.gl, "texture", null, !1), this._uniforms.push(this.texture), this.vertexPosition = new W("vertexPosition", 0, 2), this._attributes.push(this.vertexPosition), this.testVal = 2, this._aStride += 8;
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
varying vec2 texelCoord;

void main() {
    texelCoord = vertexPosition;
    gl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0);
}
        `, this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform sampler2D texture;
varying vec2 texelCoord;

void main(void){
    gl_FragColor = abs(texture2D(texture, texelCoord));
}
        `;
  }
}
class ar extends Y {
  constructor(e) {
    super(e);
    r(this, "particleData");
    r(this, "particleUV");
  }
  createProperties() {
    super.createProperties();
    const e = new C(this.gl, "particleData", null, !1);
    this.particleData = e, this._uniforms.push(e);
    const i = new W("particleUV", 0, 2);
    this.particleUV = i, this._attributes.push(i), this._aStride += 8;
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform sampler2D particleData;
attribute vec2 particleUV;
varying vec4 color;

void main() {
    vec2 p = texture2D(particleData, particleUV).xy;
    vec2 v = texture2D(particleData, particleUV).zw;
    gl_PointSize = 1.0;
    gl_Position = vec4(p, 0.0, 1.0);
    color = vec4(1.0, 1.0, 1.0, 1.0);
}`, this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

varying vec4 color;
void main() {
    gl_FragColor = vec4(color);
}`;
  }
}
class sr extends ar {
  constructor(t) {
    super(t), this.createProperties();
  }
  createProperties() {
    super.createProperties();
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform sampler2D particleData;
attribute vec2 particleUV;
varying vec4 color;

void main() {
    vec2 p = texture2D(particleData, particleUV).xy;
    vec2 v = texture2D(particleData, particleUV).zw;
    gl_PointSize = 3.0;
    gl_Position = vec4(p, 0.0, 1.0);
    float speed = length(v);
    float x = clamp(speed * 4.0, 0., 1.);
    color.rgb = (
        mix(vec3(40.4, 0.0, 35.0) / 300.0, vec3(0.2, 47.8, 100) / 100.0, x)
        + (vec3(63.1, 92.5, 100) / 100.) * x*x*x * .1
    ) + vec3(0.5);
    color.a = 1.0;
}`, this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

varying vec4 color;
void main() {
    gl_FragColor = vec4(color);
}`;
  }
}
class or extends Y {
  constructor(e) {
    super(e);
    r(this, "texture");
    r(this, "vertexPosition");
    this.createProperties();
  }
  createProperties() {
    super.createProperties();
    const e = new C(this.gl, "texture", 0, !1);
    this.texture = e, this._uniforms.push(e);
    const i = new W("vertexPosition", 0, 2);
    this.vertexPosition = i, this._attributes.push(i), this._aStride += 8;
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
    varying vec2 texelCoord;
    void main(){
        texelCoord = vertexPosition;
        gl_Position = vec4(vertexPosition*2.0 - 1.0, 0.0, 1.0 );
    }
`, this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform sampler2D texture;
varying vec2 texelCoord;
void main(){
    gl_FragColor = texture2D(texture, texelCoord);
}
`;
  }
}
class nr {
  constructor(t, e, i, a, o, u) {
    r(this, "shaderMap", new ye());
    r(this, "screenTriangle", null);
    r(this, "nullTexture", null);
    r(this, "resample", null);
    r(this, "unitQuad", null);
    r(this, "gl", null);
    this.gl = t ?? this.gl, this.unitQuad = e ?? this.unitQuad, this.screenTriangle = i ?? this.screenTriangle, this.resample = a ?? this.resample, this.nullTexture = o ?? this.nullTexture, this.shaderMap = u ?? this.shaderMap;
  }
}
const N = class N {
  // Get the screen triangle buffer
  static getScreenTriangle(t) {
    const e = N.resources;
    if (e.screenTriangle === null) {
      const i = new Float32Array([0, 0, 2, 0, 0, 2]);
      e.screenTriangle = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, e.screenTriangle), t.bufferData(t.ARRAY_BUFFER, i, t.STATIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, null);
    }
    return e.screenTriangle;
  }
  static getResampleShader(t) {
    const e = N.resources;
    return e.resample === null && (e.resample = new or(t)), e.resample;
  }
  // Get the placeholder texture
  static getNullTexture(t) {
    const e = N.resources;
    if (e.nullTexture === null) {
      const i = new k(
        t,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      );
      e.nullTexture = X.createTexture(
        t,
        1,
        1,
        i,
        new Uint8Array([0, 0, 0, 0]),
        null,
        !1
      );
    }
    return e.nullTexture;
  }
  static getShaderWithKey(t, e, i) {
    const a = N.resources;
    let o = a.shaderMap.get(e);
    return o || (o = i(t, e), a.shaderMap.content.set(e, o)), o;
  }
};
// The static resources
r(N, "resources", new nr(
  null,
  null,
  null,
  null,
  null,
  null
));
let L = N;
class lr extends re {
  constructor(e) {
    super(e);
    r(this, "velocity");
    r(this, "target");
    r(this, "dt");
    r(this, "rdx");
    this.createProperties();
  }
  createProperties() {
    super.createProperties();
    const e = new C(this.gl, "velocity", null, !1);
    this.velocity = e, this._uniforms.push(e);
    const i = new C(this.gl, "target", null, !1);
    this.target = i, this._uniforms.push(i);
    const a = new F(this.gl, "dt", null);
    this.dt = a, this._uniforms.push(a);
    const o = new F(this.gl, "rdx", null);
    this.rdx = o, this._uniforms.push(o);
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif
 
attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

varying vec2 p;

void main() {
  texelCoord = vertexPosition;

  vL = texelCoord - vec2(invResolution.x,0);
  vR = texelCoord + vec2(invResolution.x,0);
  vB = texelCoord - vec2(0,invResolution.y);
  vT = texelCoord + vec2(0,invResolution.y);

  vec2 clipSpace = 2.0*texelCoord - 1.0;

  p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

  gl_Position = vec4(clipSpace, 0.0, 1.0 );
}
`, this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D velocity;
uniform sampler2D target;
uniform float dt;
uniform float rdx; 

varying vec2 texelCoord;
varying vec2 p;

void main(void){
  
  vec2 tracedPos = p - dt * rdx * texture2D(velocity, texelCoord).xy;

  gl_FragColor = texture2D(target, simToTexelSpace(tracedPos));
}
`;
  }
}
class cr extends re {
  constructor(e) {
    super(e);
    r(this, "velocity");
    r(this, "halfrdx");
    this.createProperties();
  }
  createProperties() {
    super.createProperties();
    const e = new C(this.gl, "velocity", null, !1);
    this.velocity = e, this._uniforms.push(e);
    const i = new F(this.gl, "halfrdx", null);
    this.halfrdx = i, this._uniforms.push(i);
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;
varying vec2 p;

void main() {
    texelCoord = vertexPosition;
    
    vL = texelCoord - vec2(invResolution.x,0);
    vR = texelCoord + vec2(invResolution.x,0);
    vB = texelCoord - vec2(0,invResolution.y);
    vT = texelCoord + vec2(0,invResolution.y);
    
    vec2 clipSpace = 2.0*texelCoord - 1.0;
    
    p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

    gl_Position = vec4(clipSpace, 0.0, 1.0 );
}
`, this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
        return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
        return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D velocity;
uniform float halfrdx;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

void main(void){
    vec2 L = sampleVelocity(velocity, vL);
    vec2 R = sampleVelocity(velocity, vR);
    vec2 B = sampleVelocity(velocity, vB);
    vec2 T = sampleVelocity(velocity, vT);

    gl_FragColor = vec4( halfrdx * ((R.x - L.x) + (T.y - B.y)), 0, 0, 1);
}
`;
  }
}
class ur extends re {
  constructor(e) {
    super(e);
    r(this, "pressure");
    r(this, "velocity");
    r(this, "halfrdx");
    this.createProperties();
  }
  createProperties() {
    super.createProperties();
    const e = new C(this.gl, "pressure", null, !1);
    this.pressure = e, this._uniforms.push(e);
    const i = new C(this.gl, "velocity", null, !1);
    this.velocity = i, this._uniforms.push(i);
    const a = new F(this.gl, "halfrdx", null);
    this.halfrdx = a, this._uniforms.push(a);
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;
varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

varying vec2 p;

void main() {
    texelCoord = vertexPosition;

    vL = texelCoord - vec2(invResolution.x,0);
    vR = texelCoord + vec2(invResolution.x,0);
    vB = texelCoord - vec2(0,invResolution.y);
    vT = texelCoord + vec2(0,invResolution.y);
    
    vec2 clipSpace = 2.0*texelCoord - 1.0;    
    
    p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

    gl_Position = vec4(clipSpace, 0.0, 1.0 );    
}
`, this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
        return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
        return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}


#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))
#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D pressure;
uniform sampler2D velocity;
uniform float halfrdx;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

void main(void){
  float L = samplePressure(pressure, vL);
  float R = samplePressure(pressure, vR);
  float B = samplePressure(pressure, vB);
  float T = samplePressure(pressure, vT);

  vec2 v = texture2D(velocity, texelCoord).xy;

  gl_FragColor = vec4(v - halfrdx*vec2(R-L, T-B), 0, 1);
}
`;
  }
}
class hr extends re {
  constructor(e) {
    super(e);
    r(this, "pressure");
    r(this, "divergence");
    r(this, "alpha");
    this.createProperties();
  }
  createProperties() {
    super.createProperties();
    const e = new C(this.gl, "pressure", null, !1);
    this.pressure = e, this._uniforms.push(e);
    const i = new C(this.gl, "divergence", null, !1);
    this.divergence = i, this._uniforms.push(i);
    const a = new F(this.gl, "alpha", null);
    this.alpha = a, this._uniforms.push(a);
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;
varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;
varying vec2 p;

void main() {
    texelCoord = vertexPosition;
    vL = texelCoord - vec2(invResolution.x,0);
    vR = texelCoord + vec2(invResolution.x,0);
    vB = texelCoord - vec2(0,invResolution.y);
    vT = texelCoord + vec2(0,invResolution.y);
    vec2 clipSpace = 2.0*texelCoord - 1.0;
    p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);
    gl_Position = vec4(clipSpace, 0.0, 1.0 );
}
`, this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
        return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
        return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )

uniform sampler2D pressure;
uniform sampler2D divergence;
uniform float alpha;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;

void main(void){
      
  
  float L = samplePressure(pressure, vL);
  float R = samplePressure(pressure, vR);
  float B = samplePressure(pressure, vB);
  float T = samplePressure(pressure, vT);

  float bC = texture2D(divergence, texelCoord).x;

  gl_FragColor = vec4( (L + R + B + T + alpha * bC) * .25, 0, 0, 1 ); 
}
`;
  }
}
class vt {
  constructor(t, e, i, a, o) {
    r(this, "gl");
    r(this, "width");
    r(this, "height");
    r(this, "textureParameters");
    r(this, "textureFactory");
    this.gl = t, this.width = e, this.height = i, this.textureParameters = a, this.textureFactory = o;
  }
  createEmptyTexture(t, e) {
    return this.textureFactory != null ? this.textureFactory(this.gl, t, e) : X.createTexture(this.gl, t, e, this.textureParameters, null);
  }
  activate() {
  }
  updateTextureParameters(t) {
    t.magFilter && (this.textureParameters.magFilter = t.magFilter), t.minFilter && (this.textureParameters.minFilter = t.minFilter), t.wrapS && (this.textureParameters.wrapS = t.wrapS), t.wrapT && (this.textureParameters.wrapT = t.wrapT);
  }
}
class ce extends vt {
  constructor(e, i, a, o, u) {
    super(e, i, a, o, u);
    r(this, "writeFrameBufferObject");
    r(this, "readFrameBufferObject");
    r(this, "readFromTexture", null);
    r(this, "writeToTexture", null);
    r(this, "tmpFBO", null);
    r(this, "tmpTex", null);
    this.writeFrameBufferObject = e.createFramebuffer(), this.readFrameBufferObject = e.createFramebuffer(), this.resize(i, a);
  }
  activate() {
    super.activate(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.writeFrameBufferObject);
  }
  fillTexture(e, i) {
    const a = L.getResampleShader(this.gl);
    a.texture.dirty = !0, a.texture.data = this.readFromTexture.native, this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.readFrameBufferObject), this.gl.viewport(0, 0, e, i), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, L.getScreenTriangle(this.gl)), a.setupAndActive(), this.gl.drawArrays(4, 0, 3), a.deactivate(), this.gl.deleteTexture(this.readFromTexture.native);
  }
  resize(e, i) {
    const a = this.createEmptyTexture(e, i), o = this.createEmptyTexture(e, i);
    return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.writeFrameBufferObject), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, a.native, 0), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.readFrameBufferObject), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, o.native, 0), this.readFromTexture && this.readFrameBufferObject ? this.fillTexture(e, i) : (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.readFrameBufferObject), this.gl.viewport(0, 0, this.width, this.height), this.gl.clearColor(0, 0, 0, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT)), this.writeToTexture != null ? this.gl.deleteTexture(this.writeToTexture.native) : (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.writeFrameBufferObject), this.gl.viewport(0, 0, this.width, this.height), this.gl.clearColor(0, 0, 0, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT)), this.width = e, this.height = i, this.writeToTexture = a, this.readFromTexture = o, this;
  }
  updateTextureParameters(e) {
    if (this.readFromTexture === null || this.writeToTexture === null) {
      console.log("readFromTexture or writeToTexture is null");
      return;
    }
    X.updateGLTextureParameters(this.gl, this.readFromTexture.native, e), X.updateGLTextureParameters(this.gl, this.writeToTexture.native, e), super.updateTextureParameters(e);
  }
  swapBuffers() {
    const e = this.readFrameBufferObject;
    this.readFrameBufferObject = this.writeFrameBufferObject, this.writeFrameBufferObject = e;
    const i = this.readFromTexture;
    this.readFromTexture = this.writeToTexture, this.writeToTexture = i;
  }
}
class Me extends vt {
  constructor(e, i, a, o, u) {
    super(e, i, a, o, u);
    r(this, "frameBufferObject");
    r(this, "texture");
    this.frameBufferObject = e.createFramebuffer(), this.resize(i, a);
  }
  fillTexture(e, i) {
    const a = L.getResampleShader(this.gl);
    a.texture.dirty = !0, a.texture.data = this.texture.native, this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBufferObject), this.gl.viewport(0, 0, e, i), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, L.getScreenTriangle(this.gl)), a.setupAndActive(), this.gl.drawArrays(4, 0, 3), a.deactivate(), this.gl.deleteTexture(this.texture.native);
  }
  resize(e, i) {
    const a = this.createEmptyTexture(e, i);
    return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBufferObject), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, a.native, 0), this.texture && this.frameBufferObject ? this.fillTexture(e, i) : (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBufferObject), this.gl.viewport(0, 0, this.width, this.height), this.gl.clearColor(0, 0, 0, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT)), this.width = e, this.height = i, this.texture = a, this;
  }
  activate() {
    super.activate(), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBufferObject);
  }
  updateTextureParameters(e) {
    this.texture && X.updateGLTextureParameters(this.gl, this.texture.native, e), super.updateTextureParameters(e);
  }
}
class dr extends RegExp {
  constructor(e, i) {
    super(e, i);
    r(this, "matched", null);
    r(this, "original", "");
  }
}
class fr {
  constructor(t, e) {
    r(this, "reg");
    this.reg = new dr(t, e.split("u").join(""));
  }
  match(t) {
    return this.reg.global && (this.reg.lastIndex = 0), this.reg.matched = this.reg.exec(t), this.reg.original = t, this.reg.matched !== null;
  }
  matched(t) {
    if (this.reg.matched !== null && t >= 0 && t < this.reg.matched.length)
      return this.reg.matched[t];
    throw new Error("RegExpHelper: matched index out of range");
  }
  matchedRight() {
    if (!this.reg.matched)
      throw new Error("RegExpHelper: no matched");
    const t = this.reg.matched.index + this.reg.matched[0].length;
    return M.substr(this.reg.original, t, this.reg.original.length - t);
  }
  matchedPos() {
    if (!this.reg.matched)
      throw new Error("RegExpHelper: no matched");
    return {
      pos: this.reg.matched.index,
      len: this.reg.matched[0].length
    };
  }
  matchSub(t, e, i = -1) {
    let a = !1;
    return this.reg.global ? (this.reg.lastIndex = e, this.reg.matched = this.reg.exec(i < 0 ? t : M.substr(t, 0, e + i)), a = this.reg.matched != null, a && (this.reg.original = t)) : (a = this.match(i < 0 ? M.substr(t, e) : M.substr(t, e, i)), a && (this.reg.original = t, this.reg.matched !== null && (this.reg.matched.index += e))), a;
  }
}
const Te = class Te {
  constructor(t) {
    r(this, "gl");
    r(this, "_contextVersion", null);
    this.gl = t;
  }
  static get(t) {
    return new Te(t);
  }
  getContextVersion() {
    if (!this._contextVersion) {
      const t = this.gl.getParameter(this.gl.VERSION), e = new fr("((OpenGL ES|WebGL)\\s*)?(\\d+)\\.(\\d+)", "ig");
      if (e.match(t)) {
        const i = e.matched(2), a = i.toLowerCase() === "webgl";
        this._contextVersion = {
          es: !!i,
          major: (parseInt(e.matched(3)) ?? 0) + (a ? 1 : 0) || -1,
          minor: parseInt(e.matched(4)) ?? -1
        };
      } else
        this._contextVersion = {
          es: !1,
          major: -1,
          minor: -1
        };
    }
    return this._contextVersion;
  }
  testWritableColorBuffer(t) {
    for (; this.gl.getError() != 0; )
      console.log("gl.getError() != 0");
    const e = X.createTexture(this.gl, 2, 2, t);
    let i = 0;
    for (; this.gl.getError() != 0; )
      if (console.log("gl.getError() != 0"), ++i, i > 100)
        return console.log("gl.getError() != 0, 100 times, interrupted"), !1;
    if (i > 0)
      return console.log("gl.getError() != 0 in testWritableColorBuffer, " + i + " times"), !1;
    const a = this.gl.createFramebuffer();
    for (this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, a), this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, e.native, 0), i = 0; this.gl.getError() != 0; )
      if (++i, i > 100)
        return console.log("framebufferTexture2D gl.getError() != 0, 100 times, interrupted"), !1;
    if (i > 0)
      return console.log("framebufferTexture2D gl.getError() != 0, " + i + " times"), !1;
    const o = this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER) == this.gl.FRAMEBUFFER_COMPLETE;
    return this.gl.deleteTexture(e.native), this.gl.deleteFramebuffer(a), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null), o;
  }
  getWritableFloatColorBufferParameters(t, e, i) {
    const a = this.getContextVersion(), o = [
      6403,
      33319,
      6407,
      6408
      /*RGBA*/
    ], u = [
      5131,
      5126
      /*FLOAT*/
    ];
    if (!t || !e)
      return null;
    let c = o.indexOf(t), n = u.indexOf(e);
    if (i == this.gl.LINEAR && (this.gl.getExtension("OES_texture_float_linear"), this.gl.getExtension("OES_texture_half_float_linear")), a.es && a.major <= 2) {
      for (this.gl.getExtension("OES_texture_float"), this.gl.getExtension("OES_texture_half_float"), this.gl.getExtension("EXT_color_buffer_half_float"), t = o[Math.max(c, 2) | 0]; n < u.length; )
        if ((e = u[n++]) == 5131 && (e = 36193), this.testWritableColorBuffer(new k(this.gl, t, t, e, i, i, 33071, 33071)))
          return {
            format: t,
            internalFormat: t,
            dataType: e,
            filtering: i
          };
    } else {
      if (this.gl.getExtension("EXT_color_buffer_float"), !(this.gl instanceof WebGL2RenderingContext))
        return console.error("getWritableFloatColorBufferParameters: WebGL2RenderingContext required"), null;
      let f;
      const d = {
        6403: this.gl.R16F,
        33319: this.gl.RG16F,
        6407: this.gl.RGB16F,
        6408: this.gl.RGBA16F
      }, x = {
        6403: this.gl.R32F,
        33319: this.gl.RG32F,
        6407: this.gl.RGB32F,
        6408: this.gl.RGBA32F
      };
      for (e = u[n++]; c < o.length; ) {
        const p = o[c++];
        switch (e) {
          case this.gl.FLOAT:
          default:
            f = x[p];
            break;
          case this.gl.HALF_FLOAT:
            f = d[p];
        }
        if (this.testWritableColorBuffer(new k(
          this.gl,
          p,
          f,
          e,
          i,
          i,
          33071,
          33071
        )))
          return {
            format: p,
            internalFormat: f,
            dataType: e,
            filtering: i
          };
      }
    }
    return null;
  }
};
r(Te, "capsCache", []);
let ue = Te;
class pr {
  constructor(t, e, i, a, o, u, c, n, f) {
    r(this, "periodicBoundary");
    r(this, "advectShader");
    r(this, "divergenceShader");
    r(this, "pressureSolveShader");
    r(this, "pressureGradientSubstractShader");
    r(this, "applyForcesShader");
    r(this, "updateSurfaceShader");
    r(this, "gl");
    r(this, "width");
    r(this, "height");
    r(this, "powerOf2Surface");
    r(this, "simulationScale");
    r(this, "solverIterations");
    r(this, "aspectRatio");
    r(this, "physicsScale");
    r(this, "surfaceWidth", 0);
    r(this, "surfaceHeight", 0);
    r(this, "simulationWidth", 0);
    r(this, "simulationHeight", 0);
    r(this, "screenTriangle");
    r(this, "surfaceRenderTarget");
    r(this, "velocityRenderTarget");
    r(this, "pressureRenderTarget");
    r(this, "divergenceRenderTarget");
    this.periodicBoundary = !1, this.advectShader = new lr(t), this.divergenceShader = new cr(t), this.pressureSolveShader = new hr(t), this.pressureGradientSubstractShader = new ur(t), this.applyForcesShader = n, this.updateSurfaceShader = f, this.gl = t, this.width = e, this.height = i, this.powerOf2Surface = c, this.simulationScale = a, this.solverIterations = u, this.aspectRatio = this.width / this.height, this.physicsScale = o, this.updateBaseUniforms(), this.updateTextureSizes();
    const d = ue.get(t);
    if (this.gl instanceof WebGL2RenderingContext) {
      const x = d.getWritableFloatColorBufferParameters(this.gl.RGBA, this.gl.HALF_FLOAT, this.gl.LINEAR), p = d.getWritableFloatColorBufferParameters(this.gl.RG, this.gl.HALF_FLOAT, this.gl.LINEAR), y = d.getWritableFloatColorBufferParameters(this.gl.RED, this.gl.HALF_FLOAT, this.gl.NEAREST);
      if (!x || !p || !y)
        throw new Error("The fluid simulation requires renderable floating point textures but these are not available on this device");
      const g = this.periodicBoundary ? this.gl.REPEAT : this.gl.CLAMP_TO_EDGE;
      this.screenTriangle = L.getScreenTriangle(t), this.surfaceRenderTarget = new ce(t, this.surfaceWidth, this.surfaceHeight, new k(this.gl, x.format, x.internalFormat, x.dataType, 9729, 9729, g, g)), this.velocityRenderTarget = new ce(t, this.simulationWidth, this.simulationHeight, new k(this.gl, p.format, p.internalFormat, p.dataType, 9729, 9729, g, g)), this.pressureRenderTarget = new ce(t, this.simulationWidth, this.simulationHeight, new k(this.gl, y.format, y.internalFormat, y.dataType, 9728, 9728, g, g)), this.divergenceRenderTarget = new Me(t, this.simulationWidth, this.simulationHeight, new k(this.gl, y.format, y.internalFormat, y.dataType, 9728, 9728, g, g)), this.updateBaseUniforms(), this.printParameters();
    }
  }
  updateBaseUniforms() {
    this.forEachShader((t) => {
      const e = t.invAspectRatio;
      if (!e)
        return;
      const i = 1 / this.aspectRatio;
      if (e.dirty = !0, e.data = i, !t.invResolution || !t.invResolution.data)
        return;
      t.invResolution.data[0] = 1 / this.simulationWidth, t.invResolution.data[1] = 1 / this.simulationHeight, t.invResolution.dirty = !0;
      const a = t.velocityBoundaryEnabled, o = !this.periodicBoundary;
      a && (a.dirty = !0, a.data = o);
    }), this.advectShader.rdx.dirty = !0, this.advectShader.rdx.data = 1 / this.physicsScale, this.divergenceShader.halfrdx.dirty = !0, this.divergenceShader.halfrdx.data = 1 / this.physicsScale * 0.5, this.pressureGradientSubstractShader.halfrdx.dirty = !0, this.pressureGradientSubstractShader.halfrdx.data = 1 / this.physicsScale * 0.5, this.pressureSolveShader.alpha.dirty = !0, this.pressureSolveShader.alpha.data = -this.physicsScale * this.physicsScale, this.applyForcesShader.dx.dirty = !0, this.applyForcesShader.dx.data = this.physicsScale, this.updateSurfaceShader.dx.dirty = !0, this.updateSurfaceShader.dx.data = this.physicsScale;
  }
  printParameters() {
  }
  updateTextureSizes() {
    const t = this.powerOf2Surface ? M.floorPowerOf2(this.width) : this.width, e = this.powerOf2Surface ? M.floorPowerOf2(this.height) : this.height, i = M.floorPowerOf2(t * this.simulationScale), a = M.floorPowerOf2(e * this.simulationScale), o = t != this.surfaceWidth || e != this.surfaceHeight, u = i != this.simulationWidth || a != this.simulationHeight;
    if (this.surfaceWidth = t, this.surfaceHeight = e, this.simulationWidth = i, this.simulationHeight = a, o && this.surfaceRenderTarget && this.surfaceRenderTarget.resize(this.surfaceWidth, this.surfaceHeight), u && this.velocityRenderTarget && this.velocityRenderTarget.resize(this.simulationWidth, this.simulationHeight), u && this.pressureRenderTarget && this.pressureRenderTarget.resize(this.simulationWidth, this.simulationHeight), u && this.divergenceRenderTarget) {
      const c = this.divergenceRenderTarget, n = this.simulationWidth, f = this.simulationHeight;
      c.resize(n, f);
    }
    this.updateBaseUniforms();
  }
  setWrapMode(t) {
    !this.velocityRenderTarget || !this.pressureRenderTarget || !this.divergenceRenderTarget || !this.surfaceRenderTarget || (this.velocityRenderTarget.updateTextureParameters(new xe(null, null, t, t)), this.pressureRenderTarget.updateTextureParameters(new xe(null, null, t, t)), this.divergenceRenderTarget.updateTextureParameters(new xe(null, null, t, t)), this.surfaceRenderTarget.updateTextureParameters(new xe(null, null, t, t)));
  }
  updateShaderUniforms(t, e) {
    if (t.dirty = !0, !e) {
      console.error("data is null");
      return;
    }
    t.data = e;
  }
  processShader(t, e) {
    t.setupAndActive(), e == null || e.activate(), this.gl.drawArrays(this.gl.TRIANGLES, 0, 3), t.deactivate(), e instanceof ce && (e == null || e.swapBuffers());
  }
  step(t) {
    var x, p, y, g, m, P, w, R, j, O, $, q, K, J, ie, he, de, ae;
    if (this.gl.viewport(0, 0, this.simulationWidth, this.simulationHeight), !this.screenTriangle) {
      console.error("this.screenTriangle is null");
      return;
    }
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.screenTriangle);
    const e = this.advectShader, i = this.velocityRenderTarget;
    if (this.updateShaderUniforms(e.dt, t), this.updateShaderUniforms(e.target, (x = i == null ? void 0 : i.readFromTexture) == null ? void 0 : x.native), this.updateShaderUniforms(e.velocity, (y = (p = this.velocityRenderTarget) == null ? void 0 : p.readFromTexture) == null ? void 0 : y.native), this.processShader(e, i), this.applyForcesShader) {
      const D = this.applyForcesShader;
      this.updateShaderUniforms(D.dt, t), this.updateShaderUniforms(D.velocity, (m = (g = this.velocityRenderTarget) == null ? void 0 : g.readFromTexture) == null ? void 0 : m.native), this.processShader(D, this.velocityRenderTarget);
    }
    const a = this.divergenceShader, o = this.divergenceRenderTarget;
    this.updateShaderUniforms(a.velocity, (w = (P = this.velocityRenderTarget) == null ? void 0 : P.readFromTexture) == null ? void 0 : w.native), this.processShader(a, o);
    const u = this.pressureSolveShader;
    for (let D = 0; D < this.solverIterations; D++)
      this.updateShaderUniforms(u.divergence, (j = (R = this.divergenceRenderTarget) == null ? void 0 : R.texture) == null ? void 0 : j.native), this.updateShaderUniforms(u.pressure, ($ = (O = this.pressureRenderTarget) == null ? void 0 : O.readFromTexture) == null ? void 0 : $.native), this.processShader(u, this.pressureRenderTarget);
    const c = this.pressureGradientSubstractShader, n = this.pressureRenderTarget;
    if (this.updateShaderUniforms(c.pressure, (q = n == null ? void 0 : n.readFromTexture) == null ? void 0 : q.native), this.updateShaderUniforms(c.velocity, (J = (K = this.velocityRenderTarget) == null ? void 0 : K.readFromTexture) == null ? void 0 : J.native), this.processShader(c, this.velocityRenderTarget), this.gl.viewport(0, 0, this.surfaceWidth, this.surfaceHeight), this.updateSurfaceShader) {
      const D = this.updateSurfaceShader, V = this.surfaceRenderTarget;
      this.updateShaderUniforms(D.dt, t), this.updateShaderUniforms(D.surface, (ie = V == null ? void 0 : V.readFromTexture) == null ? void 0 : ie.native), this.processShader(D, V);
    }
    const f = this.advectShader, d = this.surfaceRenderTarget;
    this.updateShaderUniforms(f.dt, t), this.updateShaderUniforms(f.target, (he = d == null ? void 0 : d.readFromTexture) == null ? void 0 : he.native), this.updateShaderUniforms(f.velocity, (ae = (de = this.velocityRenderTarget) == null ? void 0 : de.readFromTexture) == null ? void 0 : ae.native), this.processShader(f, d);
  }
  forEachShader(t) {
    t(this.applyForcesShader), t(this.updateSurfaceShader), t(this.advectShader), t(this.divergenceShader), t(this.pressureSolveShader), t(this.pressureGradientSubstractShader);
  }
}
class Oe {
  constructor() {
    r(this, "_currentTarget", null);
  }
  get(t, e, i, a) {
    if (this._currentTarget && (e != this._currentTarget.width || i != this._currentTarget.height || !a.match(this._currentTarget.textureParameters))) {
      const o = this._currentTarget;
      o.gl.deleteFramebuffer(o.frameBufferObject), o.gl.deleteTexture(o.texture.native), this._currentTarget = null;
    }
    return this._currentTarget || (this._currentTarget = new Me(t, e, i, a)), this._currentTarget;
  }
  destroy() {
    if (this._currentTarget) {
      const t = this._currentTarget;
      t.gl.deleteFramebuffer(t.frameBufferObject), t.gl.deleteTexture(t.texture.native);
    }
  }
}
class vr {
  constructor(t) {
    r(this, "gl");
    r(this, "intermediate");
    r(this, "resampleShader");
    r(this, "screenTriangle");
    this.gl = t, this.intermediate = new Oe(), this.resampleShader = L.getResampleShader(t), this.screenTriangle = L.getScreenTriangle(t);
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  apply(t, e, i) {
    i && (i = t);
    const a = this.intermediate.get(this.gl, t.width * 0.5 | 0, t.height * 0.5 | 0, i);
    return a.gl.bindFramebuffer(this.gl.FRAMEBUFFER, a.frameBufferObject), this.gl.viewport(0, 0, a.width, a.height), this.gl.bindBuffer(34962, this.screenTriangle), this.resampleShader.texture.dirty = !0, this.resampleShader.texture.data = t.native, this.resampleShader.setupAndActive(), this.gl.drawArrays(4, 0, 3), this.resampleShader.deactivate(), a.texture;
  }
  releaseGPUMemory() {
    this.intermediate != null && this.intermediate.destroy();
  }
}
class gt extends Y {
  constructor(e) {
    super(e);
    r(this, "vertexPosition");
  }
  createProperties() {
    super.createProperties();
    const e = new W("vertexPosition", 0, 2);
    this.vertexPosition = e, this._attributes.push(e), this._aStride += 8;
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
    varying vec2 texelCoord;
    void main() {
        texelCoord = vertexPosition;
        gl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );
    }
`, this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

varying vec2 texelCoord;
`;
  }
}
class gr extends gt {
  createProperties() {
    super.createProperties();
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
  varying vec2 texelCoord;
  void main() {
    texelCoord = vertexPosition;
    gl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );
  }
`, this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

varying vec2 texelCoord;

void main() {
    vec2 ip = vec2((texelCoord.x), (texelCoord.y)) * 2.0 - 1.0;
    vec2 iv = vec2(0,0);
    gl_FragColor = vec4(ip, iv);
  }
`;
  }
}
class mr extends gt {
  constructor(e) {
    super(e);
    r(this, "dt");
    r(this, "particleData");
  }
  createProperties() {
    super.createProperties();
    const e = new F(this.gl, "dt", null);
    this.dt = e, this._uniforms.push(e);
    const i = new C(this.gl, "particleData", null, !1);
    this.particleData = i, this._uniforms.push(i);
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
    varying vec2 texelCoord;
    void main() {
        texelCoord = vertexPosition;
        gl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );
    }
`, this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

varying vec2 texelCoord;

uniform float dt;
    uniform sampler2D particleData;
`;
  }
}
class xr extends mr {
  constructor(e) {
    super(e);
    r(this, "dragCoefficient");
    r(this, "flowScale");
    r(this, "flowVelocityField");
    this.createProperties();
  }
  createProperties() {
    super.createProperties();
    const e = new F(this.gl, "dragCoefficient", null);
    this.dragCoefficient = e, this._uniforms.push(e);
    const i = new be(this.gl, "flowScale", null);
    this.flowScale = i, this._uniforms.push(i);
    const a = new C(this.gl, "flowVelocityField", null, !1);
    this.flowVelocityField = a, this._uniforms.push(a);
  }
  initSources() {
    this._vertSource = `
#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

attribute vec2 vertexPosition;
	varying vec2 texelCoord;
	void main() {
		texelCoord = vertexPosition;
		gl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );
	}




`, this._fragSource = `
#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

varying vec2 texelCoord;

uniform float dt;
	uniform sampler2D particleData;

uniform float dragCoefficient;
	uniform vec2 flowScale;
	uniform sampler2D flowVelocityField;
	void main() {
		vec2 p = texture2D(particleData, texelCoord).xy;
		vec2 v = texture2D(particleData, texelCoord).zw;
		vec2 vf = texture2D(flowVelocityField, (p+1.)*.5).xy * flowScale;
		v += (vf - v) * dragCoefficient;
		p+=dt*v;
		gl_FragColor = vec4(p, v);
	}
`;
  }
}
class Sr {
  constructor(t, e) {
    r(this, "gl");
    r(this, "count");
    r(this, "downsampleFilters");
    this.gl = t, this.count = e;
    const i = [];
    for (let a = 0; a < e; )
      ++a, i.push(new vr(t));
    this.downsampleFilters = i;
  }
  apply(t) {
    let e = t;
    for (let i = 0, a = this.count; i < a; )
      e = this.downsampleFilters[i++].apply(e);
    return e;
  }
  releaseGPUMemory() {
    for (let t = 0, e = this.downsampleFilters; t < e.length; )
      e[t++].releaseGPUMemory();
  }
}
class yr {
  constructor(t, e = 524288) {
    r(this, "gl");
    r(this, "screenTriangle");
    r(this, "initialConditionsShader");
    r(this, "stepParticlesShader");
    r(this, "particleData", null);
    r(this, "particleUVs", null);
    r(this, "count", 0);
    var u, c;
    this.gl = t, t.getExtension("OES_texture_float"), this.screenTriangle = L.getScreenTriangle(t), this.initialConditionsShader = new gr(t), this.stepParticlesShader = new xr(t);
    const i = this.stepParticlesShader.dragCoefficient;
    i && (i.dirty = !0, i.data = 1), ((u = this.stepParticlesShader.flowScale) == null ? void 0 : u.data)[0] = 1, ((c = this.stepParticlesShader.flowScale) == null ? void 0 : c.data)[1] = 1, this.setCount(e);
    const a = this.initialConditionsShader, o = this.particleData;
    o && (this.gl.viewport(0, 0, o.width, o.height), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, o.writeFrameBufferObject)), this.gl.bindBuffer(34962, this.screenTriangle), a.setupAndActive(), this.gl.drawArrays(4, 0, 3), a.deactivate(), o && (o.tmpFBO = o.writeFrameBufferObject, o.writeFrameBufferObject = o.readFrameBufferObject, o.readFrameBufferObject = o.tmpFBO, o.tmpTex = o.writeToTexture, o.writeToTexture = o.readFromTexture, o.readFromTexture = o.tmpTex), this.printParameters();
  }
  setCount(t) {
    const e = Math.ceil(Math.sqrt(t)), i = ue.get(this.gl).getWritableFloatColorBufferParameters(6408, this.gl.HALF_FLOAT, 9728);
    if (i == null)
      throw new Error("Particles require renderable floating point textures");
    this.particleData != null ? this.particleData.resize(e, e) : this.particleData = new ce(this.gl, e, e, new k(this.gl, i.format, i.internalFormat, i.dataType, 9728, 9728, 33071, 33071)), this.particleUVs != null && this.gl.deleteBuffer(this.particleUVs), this.particleUVs = this.gl.createBuffer();
    const a = [];
    for (let o = 0; o < e; )
      for (let u = o++; u < e; )
        a.push(u / e), a.push(o / e);
    return this.gl.bindBuffer(34962, this.particleUVs), this.gl.bufferData(34962, new Float32Array(a), 35044), this.gl.bindBuffer(34962, null), this.count = t, this.count;
  }
  printParameters() {
    var e, i, a, o, u;
    const t = `<b,gray>><//> <b>GPUParticles Parameters</>
	` + ["dragCoefficient: <b>" + (((e = this.stepParticlesShader.dragCoefficient) == null ? void 0 : e.data) ?? "") + "</b>", "flowScaleX: <b>" + ((i = this.stepParticlesShader.flowScale) == null ? void 0 : i.data)[0] + "</b>", "flowScaleY: <b>" + ((a = this.stepParticlesShader.flowScale) == null ? void 0 : a.data)[1] + "</b>", "texture size: <b>" + ((o = this.particleData) == null ? void 0 : o.width) + "x" + ((u = this.particleData) == null ? void 0 : u.height) + "</b>"].join(`
	`);
    console.log(t);
  }
}
class ct {
  constructor(t, e, i, a, o, u, c, n, f) {
    r(this, "type");
    r(this, "x");
    r(this, "y");
    r(this, "buttonState");
    r(this, "pressure");
    r(this, "radius");
    r(this, "angle");
    r(this, "altitudeAngle");
    r(this, "azimuthAngle");
    this.type = t, this.x = e, this.y = i, this.buttonState = a, this.pressure = o, this.radius = u, this.angle = c, this.altitudeAngle = n, this.azimuthAngle = f;
  }
}
class ut extends Y {
  constructor(e, i, a) {
    super(e);
    r(this, "direction");
    r(this, "kernel");
    r(this, "shaderParts");
    r(this, "invResolution");
    r(this, "texture");
    r(this, "vertexPosition");
    this.gl = e, this.direction = i, this.kernel = a, this.shaderParts = this.generateShaderParts(), this.createProperties();
  }
  generateShaderParts() {
    const e = this.nearestBestKernel(this.kernel), i = (e - 1) / 2, a = [], o = [];
    let u = 0;
    for (let m = 0; m < e; m++) {
      const P = m, w = this.gaussianWeight(P / (e - 1) * 2 - 1);
      a[P] = P - i, o[P] = w, u += w;
    }
    const c = o.length;
    for (let m = 0; m < c; m++)
      o[m] /= u;
    const n = [], f = [], d = [];
    for (let m = 0; m <= i; m += 2) {
      const P = 0 | Math.min(m + 1, Math.floor(i));
      if (m === P)
        d.push({
          o: a[m],
          w: o[m]
        });
      else {
        const w = o[m] + o[P] * (P == i ? 0.5 : 1), R = a[m] + 1 / (1 + o[m] / o[P]);
        R === 0 ? (d.push({
          o: a[m],
          w: o[m]
        }), d.push({
          o: a[m + 1],
          w: o[m + 1]
        })) : (d.push({
          o: R,
          w
        }), d.push({
          o: -R,
          w
        }));
      }
    }
    for (let m = 0; m < d.length; m++)
      f[m] = d[m].o, n[m] = d[m].w;
    const x = [], p = f.length;
    for (let m = 0; m < p; m++)
      x.push("varying vec2 sampleCoord" + m++ + ";");
    const y = [];
    for (let m = 0; m < p; m++)
      y.push("sampleCoord" + m + " = texelCoord + vec2(" + this.glslFloat(f[m] * this.direction[0]) + ", " + this.glslFloat(f[m] * this.direction[1]) + ") * invResolution;");
    const g = [];
    for (let m = 0; m < p; m++)
      g.push("blend += texture2D(texture, sampleCoord" + m + ") * " + this.glslFloat(n[m]) + ";");
    return {
      varyingDeclarations: x,
      varyingValues: y,
      textureSamples: g
    };
  }
  nearestBestKernel(e) {
    let i;
    const a = Math.round(e);
    return a % 2 != 0 && Math.floor(a / 2) % 2 == 0 && a > 0 ? 0 | Math.max(a, 3) : (i = a - 1) % 2 != 0 && Math.floor(i / 2) % 2 == 0 && i > 0 || (i = a + 1) % 2 != 0 && Math.floor(i / 2) % 2 == 0 && i > 0 || (i = a - 2) % 2 != 0 && Math.floor(i / 2) % 2 == 0 && i > 0 || (i = a + 2) % 2 != 0 && Math.floor(i / 2) % 2 == 0 && i > 0 ? 0 | Math.max(i, 3) : 0 | Math.max(a, 3);
  }
  gaussianWeight(e) {
    return 1 / (0.3333333333333333 * Math.sqrt(2 * Math.PI)) * Math.exp(-e * e / 0.2222222222222222);
  }
  glslFloat(e) {
    let i = e === null ? "null" : "" + e;
    return i.indexOf(".") === -1 && (i += "."), i;
  }
  createProperties() {
    super.createProperties();
    const e = new be(this.gl, "invResolution", null);
    this.invResolution = e, this._uniforms.push(e);
    const i = new C(this.gl, "texture", null, !1);
    this.texture = i, this._uniforms.push(i);
    const a = new W("vertexPosition", 0, 2);
    this.vertexPosition = a, this._attributes.push(a), this._aStride += 8;
  }
  initSources() {
    this._vertSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif
 
attribute vec2 vertexPosition;

uniform vec2 invResolution;
uniform float invAspectRatio;

varying vec2 texelCoord;

varying vec2 vL;
varying vec2 vR;
varying vec2 vB;
varying vec2 vT;


varying vec2 p;

void main() {
    texelCoord = vertexPosition;
    
    vL = texelCoord - vec2(invResolution.x,0);
    vR = texelCoord + vec2(invResolution.x,0);
    vB = texelCoord - vec2(0,invResolution.y);
    vT = texelCoord + vec2(0,invResolution.y);
    
    vec2 clipSpace = 2.0*texelCoord - 1.0;    
    
    p = vec2(clipSpace.x / invAspectRatio, clipSpace.y);

    gl_Position = vec4(clipSpace, 0.0, 1.0 );    
}
`, this._fragSource = `#ifdef GL_ES
precision highp float;
precision highp sampler2D;
#endif

uniform float invAspectRatio;
uniform bool velocityBoundaryEnabled;

vec2 clipToSimSpace(vec2 clipSpace){
    return vec2(clipSpace.x / invAspectRatio, clipSpace.y);
}

vec2 simToTexelSpace(vec2 simSpace){
    return vec2(simSpace.x * invAspectRatio + 1.0 , simSpace.y + 1.0)*.5;
}

#define samplePressure(texture, coord) ( texture2D(pressure, coord).x )
#define outOfBoundsVelocityMultiplier(coord) (velocityBoundaryEnabled ? (step(vec2(0.), coord) * step(coord, vec2(1.)) * 2. - 1. ) : vec2(1.0))

#define sampleVelocity(texture, coord) ( outOfBoundsVelocityMultiplier(coord) * texture2D(velocity, coord).xy )
`;
  }
}
class _r {
  constructor(t, e, i) {
    r(this, "gl");
    r(this, "kernelX");
    r(this, "kernelY");
    r(this, "blurIntermediateXY");
    r(this, "blurIntermediateX");
    r(this, "blurShaderX");
    r(this, "blurShaderY");
    r(this, "screenTriangle");
    this.gl = t, this.kernelX = e, this.kernelY = i, this.blurIntermediateXY = new Oe(), this.blurIntermediateX = new Oe(), this.blurShaderX = L.getShaderWithKey(t, "blurX(k" + e + ")", function(a) {
      return new ut(a, new Float32Array([1, 0]), e);
    }), this.blurShaderY = L.getShaderWithKey(t, "blurY(k" + i + ")", function(a) {
      return new ut(a, new Float32Array([0, 1]), i);
    }), this.screenTriangle = L.getScreenTriangle(t);
  }
  apply(t, e, i) {
    i == null && (console.log(e), i = t);
    const a = t.width, o = t.height, u = this.blurIntermediateX.get(this.gl, a, o, i), c = this.blurIntermediateXY.get(this.gl, a, o, i);
    if (this.gl.viewport(0, 0, u.width, u.height), u.gl.bindFramebuffer(this.gl.FRAMEBUFFER, u.frameBufferObject), this.gl.bindBuffer(34962, this.screenTriangle), !this.blurShaderX.texture || !this.blurShaderX.invResolution) {
      console.log("blurShaderX.texture or blurShaderX.invResolution is null");
      return;
    }
    if (this.blurShaderX.texture.dirty = !0, this.blurShaderX.texture.data = t.native, this.blurShaderX.invResolution.data[0] = 1 / t.width, this.blurShaderX.invResolution.data[1] = 1 / t.height, this.blurShaderX.invResolution.dirty = !0, this.blurShaderX.setupAndActive(), this.gl.drawArrays(4, 0, 3), this.blurShaderX.deactivate(), c.gl.bindFramebuffer(36160, c.frameBufferObject), this.gl.bindBuffer(34962, this.screenTriangle), !this.blurShaderY.texture || !this.blurShaderY.invResolution) {
      console.log("blurShaderX.texture or blurShaderX.invResolution is null");
      return;
    }
    return this.blurShaderY.texture.dirty = !0, this.blurShaderY.texture.data = u.texture.native, this.blurShaderY.invResolution.data[0] = 1 / t.width, this.blurShaderY.invResolution.data[1] = 1 / t.height, this.blurShaderY.invResolution.dirty = !0, this.blurShaderY.setupAndActive(), this.gl.drawArrays(4, 0, 3), this.blurShaderY.deactivate(), c.texture;
  }
  releaseGPUMemory() {
    this.blurIntermediateX && this.blurIntermediateX.destroy(), this.blurIntermediateXY && this.blurIntermediateXY.destroy();
  }
}
class Tr {
  constructor(t, e = 0.08, i = 128) {
    r(this, "gl");
    r(this, "blurKernelNormalized");
    r(this, "downsampleSize");
    r(this, "screenTriangle");
    r(this, "downsampleChain", null);
    r(this, "blur", null);
    this.gl = t, this.blurKernelNormalized = e, this.downsampleSize = i, this.screenTriangle = L.getScreenTriangle(t);
  }
  releaseGPUMemory() {
    this.downsampleChain && this.downsampleChain.releaseGPUMemory();
  }
}
class br {
  constructor(t, e, i, a) {
    r(this, "gl");
    r(this, "drawingBufferWidth");
    r(this, "drawingBufferHeight");
    r(this, "savedSettings", null);
    r(this, "lumaLogoPromise", null);
    r(this, "lumaLogoTexture", null);
    // savedSettings use for restore
    r(this, "saveSettings", new te());
    r(this, "settings", new te());
    r(this, "particleCount", 65536);
    r(this, "showDebugTextures", !1);
    r(this, "postProcessingEnabled", !1);
    r(this, "remapFluidColor", !0);
    r(this, "renderParticlesEnabled", !1);
    r(this, "pointerDataBuffer", new Float32Array(20));
    r(this, "pointerPositionsBuffer", new Float32Array(40));
    r(this, "activePointersLastFrame", new _e());
    r(this, "activePointers", new _e());
    r(this, "screenBuffer", null);
    r(this, "screenTriangle", null);
    r(this, "lastTime", M.now() / 1e3);
    r(this, "textureSrc");
    r(this, "logoSrc");
    r(this, "renderFluidShader");
    r(this, "updateForceShader");
    r(this, "hx__closures__", null);
    r(this, "fluid");
    r(this, "offscreenTarget");
    r(this, "bloomFilter");
    r(this, "screenTextureShader");
    r(this, "renderParticlesShader");
    r(this, "updateSurfaceShader");
    r(this, "particles");
    if (this.gl = t, this.drawingBufferWidth = t.drawingBufferWidth, this.drawingBufferHeight = t.drawingBufferHeight, this.logoSrc = e, this.textureSrc = i, a && this.updateSettings(a), this.gl.getExtension("OES_standard_derivatives"), this.updateLumaLogo(), this.screenBuffer = t.getParameter(t.FRAMEBUFFER_BINDING), this.screenBuffer) {
      const o = "Screenbuffer at initialization is: " + this.screenBuffer;
      console.log(o);
      return;
    }
    t.disable(t.DEPTH_TEST), t.disable(t.CULL_FACE), t.disable(t.DITHER), this.initializeGPUResources();
  }
  updateLumaLogo() {
    if (!this.lumaLogoPromise) {
      const t = this;
      this.lumaLogoPromise = new Promise((e, i) => {
        const a = new Image();
        a.crossOrigin = "anonymous", a.onload = () => {
          const o = new k(
            t.gl,
            t.gl.RGBA,
            t.gl.RGBA,
            t.gl.UNSIGNED_BYTE,
            t.gl.NEAREST,
            t.gl.NEAREST,
            t.gl.CLAMP_TO_EDGE,
            t.gl.CLAMP_TO_EDGE
          ), u = X.createTextureFromImage(
            t.gl,
            a,
            o,
            new Le(1, !0),
            !0
          );
          e({ img: a, texture: u });
        }, a.onerror = (o) => {
          i(o);
        }, a.src = this.logoSrc;
      });
    }
    this.lumaLogoPromise.then((t) => {
      if (this.lumaLogoTexture = t.texture, !this.renderFluidShader)
        return console.error("renderFluidShader is null"), !1;
      const e = this.renderFluidShader.lumaLogoTexture, i = this.lumaLogoTexture.native;
      if (!e)
        return console.error("lumaLogoTexture is null"), !1;
      if (e.dirty = !0, e.data = i, !this.updateForceShader)
        return console.error("updateForceShader is null"), !1;
      const a = this.updateForceShader.lumaLogoTexture, o = this.lumaLogoTexture.native;
      return a ? (a.dirty = !0, a.data = o) : (console.error("lumaLogoTexture is null"), !1);
    });
  }
  initializeGPUResources() {
    this.initializeShaders(), this.screenTriangle = L.getScreenTriangle(this.gl), this.fluid = new pr(this.gl, this.settings.fluidScale * this.drawingBufferWidth | 0, this.settings.fluidScale * this.drawingBufferHeight | 0, this.settings.simulationScale, this.settings.fluidPhysicsScale, this.settings.fluidIterations, this.settings.powerOf2Fluid, this.updateForceShader, this.updateSurfaceShader);
    const t = this.fluid, e = this.settings.periodicBoundary;
    t.periodicBoundary = e, t.setWrapMode(e ? this.gl.REPEAT : this.gl.CLAMP_TO_EDGE), t.updateBaseUniforms(), this.fluid.solverIterations = 0, this.updateSurfaceShader.decayFactor.dirty = !0, this.updateSurfaceShader.decayFactor.data = 1, this.updateForceShader.decayFactor.dirty = !0, this.updateForceShader.decayFactor.data = 1, this.fluid.step(1), this.fluid.solverIterations = this.settings.fluidIterations, this.updateSurfaceShader.decayFactor.dirty = !0, this.updateSurfaceShader.decayFactor.data = this.settings.surfaceDecayFactor, this.updateForceShader.decayFactor.dirty = !0, this.updateForceShader.decayFactor.data = this.settings.motionDecayFactor;
    const i = ue.get(this.gl).getWritableFloatColorBufferParameters(this.gl.RGB, 5131, 9729);
    if (!i) {
      console.error("getWritableFloatColorBufferParameters is null");
      return;
    }
    this.offscreenTarget = new Me(this.gl, this.fluid.width, this.fluid.height, new k(this.gl, i.format, i.internalFormat, i.dataType, i.filtering, i.filtering, 33071, 33071));
    const a = this;
    this.settings.onChangeVersion = () => {
    }, this.settings.onChangePaused = () => {
    }, this.settings.onChangeTimestepMultiplier = () => {
    }, this.settings.onChangeFluidPhysicsScale = (c) => {
      const n = this.fluid;
      n.physicsScale = c, n.updateBaseUniforms();
    }, this.settings.onChangeSurfaceDecayFactor = (c) => {
      const n = this.updateSurfaceShader.decayFactor;
      n.dirty = !0, n.data = c;
    }, this.settings.onChangeMotionDecayFactor = (c) => {
      const n = this.updateForceShader.decayFactor;
      n.dirty = !0, n.data = c;
    }, this.settings.onChangeDragCoefficient = (c) => {
      const n = this.updateForceShader.dragCoefficient;
      n.dirty = !0, n.data = c;
    }, this.settings.onChangeDragSpeed = (c) => {
      const n = this.updateForceShader.dragSpeed;
      n.dirty = !0, n.data = c;
    }, this.settings.onChangePeriodicBoundary = (c) => {
      const n = this.fluid;
      n.periodicBoundary = c, n.setWrapMode(c ? 10497 : 33071), n.updateBaseUniforms();
    }, this.settings.onChangeBackgroundMultiplier = (c) => {
      const n = this.updateSurfaceShader.backgroundMultiplier;
      n.dirty = !0, n.data = c;
    }, this.settings.onChangeFluidIterations = (c) => {
      this.fluid.solverIterations = c;
    }, this.settings.onChangeGamma = (c) => {
      const n = this.renderFluidShader.invGamma;
      n.dirty = !0, n.data = 1 / c;
    }, this.settings.onChangeRefraction = (c) => {
      const n = this.renderFluidShader.refraction;
      n.dirty = !0, n.data = c;
    }, this.settings.onChangeChromaticAberration = (c) => {
      const n = this.renderFluidShader.chromaticAberration;
      n.dirty = !0, n.data = c;
    }, this.settings.onChangeInnerDarkening = (c) => {
      const n = this.renderFluidShader.innerDarkening;
      n.dirty = !0, n.data = c;
    }, this.settings.onChangeBevelCurveRadius = () => {
      this.updateLumaLogo();
    }, this.settings.onChangeGradientBackground = (c) => {
      const n = this.renderFluidShader.gradientBackground;
      n.dirty = !0, n.data = c;
    }, this.settings.onChangeFluidScale = () => {
      this.resize(this.drawingBufferWidth, this.drawingBufferHeight);
    }, this.settings.onChangeSimulationScale = () => {
      this.resize(this.drawingBufferWidth, this.drawingBufferHeight);
    }, this.settings.onChangePowerOf2Fluid = () => {
      this.resize(this.drawingBufferWidth, this.drawingBufferHeight);
    }, this.bloomFilter = new Tr(this.gl);
    const o = new Image();
    o.crossOrigin = "anonymous", o.src = this.textureSrc;
    const u = new k(this.gl, 6408, null, 5121, 9729, 9729, 10497, 10497);
    o.onload = function() {
      const c = X.createTexture(a.gl, o.width, o.height, u, null, null, !1);
      a.gl.activeTexture(a.gl.TEXTURE0), a.gl.bindTexture(a.gl.TEXTURE_2D, c.native), a.gl.texSubImage2D(a.gl.TEXTURE_2D, 0, 0, 0, u.format, u.dataType, o), a.gl.generateMipmap(a.gl.TEXTURE_2D), a.gl.bindTexture(a.gl.TEXTURE_2D, null), a.gl.deleteTexture(a.updateSurfaceShader.backgroundTexture.data);
      const n = a.updateSurfaceShader.backgroundTexture;
      return n.dirty = !0, n.data = c.native;
    };
  }
  initializeShaders() {
    this.screenTextureShader = new ir(this.gl), this.renderParticlesShader = new sr(this.gl), this.updateSurfaceShader = new er(this.gl);
    let t = L.getNullTexture(this.gl).native;
    this.updateSurfaceShader.userVelocityTexture.dirty = !0, this.updateSurfaceShader.userVelocityTexture.data = t, this.updateSurfaceShader.decayFactor.dirty = !0, this.updateSurfaceShader.decayFactor.data = this.settings.surfaceDecayFactor, this.updateSurfaceShader.pointerPositions.dirty = !0, this.updateSurfaceShader.pointerPositions.data = this.pointerPositionsBuffer, this.updateSurfaceShader.pointerPositions.alwaysDirty = !0, this.updateSurfaceShader.pointerData.dirty = !0, this.updateSurfaceShader.pointerData.data = this.pointerDataBuffer, this.updateSurfaceShader.pointerData.alwaysDirty = !0, this.updateSurfaceShader.backgroundMultiplier.dirty = !0, this.updateSurfaceShader.backgroundMultiplier.data = this.settings.backgroundMultiplier, this.updateSurfaceShader.set_enableUserVelocity("false"), this.updateForceShader = new rr(this.gl), t = L.getNullTexture(this.gl).native, this.updateForceShader.userVelocityTexture.dirty = !0, this.updateForceShader.userVelocityTexture.data = t, this.updateForceShader.dragCoefficient.dirty = !0, this.updateForceShader.dragCoefficient.data = this.settings.dragCoefficient, this.updateForceShader.dragSpeed.dirty = !0, this.updateForceShader.dragSpeed.data = this.settings.dragSpeed, this.updateForceShader.decayFactor.dirty = !0, this.updateForceShader.decayFactor.data = this.settings.motionDecayFactor, this.updateForceShader.pointerPositions.dirty = !0, this.updateForceShader.pointerPositions.data = this.pointerPositionsBuffer, this.updateForceShader.pointerPositions.alwaysDirty = !0, this.updateForceShader.pointerData.dirty = !0, this.updateForceShader.pointerData.data = this.pointerDataBuffer, this.updateForceShader.pointerData.alwaysDirty = !0;
    const e = this.updateForceShader.gravity.data;
    e[0] = 0, e[1] = 0, this.updateForceShader.set_enableUserVelocity("false"), this.renderFluidShader = new Qt(this.gl), this.renderFluidShader.invGamma.dirty = !0, this.renderFluidShader.invGamma.data = 1 / this.settings.gamma, this.renderFluidShader.chromaticAberration.dirty = !0, this.renderFluidShader.chromaticAberration.data = this.settings.chromaticAberration, this.renderFluidShader.refraction.dirty = !0, this.renderFluidShader.refraction.data = this.settings.refraction, this.renderFluidShader.innerDarkening.dirty = !0, this.renderFluidShader.innerDarkening.data = this.settings.innerDarkening, this.renderFluidShader.gradientBackground.dirty = !0, this.renderFluidShader.gradientBackground.data = this.settings.gradientBackground;
  }
  resize(t, e) {
    this.drawingBufferWidth = t, this.drawingBufferHeight = e;
    const i = this.settings.fluidScale * this.drawingBufferWidth | 0, a = this.settings.fluidScale * this.drawingBufferHeight | 0, o = this.fluid;
    if (!o)
      return console.error("fluid is null"), !1;
    const u = this.settings.simulationScale, c = this.settings.powerOf2Fluid;
    i != null && (o.width = i), a != null && (o.height = a), u != null && (o.simulationScale = u), c != null && (o.powerOf2Surface = c), o.aspectRatio = o.width / o.height, o.updateTextureSizes();
    const n = this.offscreenTarget;
    if (!n)
      return console.error("offscreenTarget is null"), !1;
    n.resize(o.width, o.height), this.updateLumaLogo();
  }
  onFrame(t) {
    if (!this.fluid) {
      console.warn("fluid is null");
      return;
    }
    if (!this.settings.paused) {
      const e = Math.max(Math.min(t - this.lastTime, 33.333333333333336) / 1e3, 0.004166666666666667);
      this.lastTime = t;
      const i = L.getNullTexture(this.gl);
      this.updateForceShader.userVelocityTexture.dirty = !0, this.updateForceShader.userVelocityTexture.data = i.native, this.updateSurfaceShader.userVelocityTexture.dirty = !0, this.updateSurfaceShader.userVelocityTexture.data = i.native, this.updateForceShader.viewportAspectRatio.dirty = !0, this.updateForceShader.viewportAspectRatio.data = this.drawingBufferWidth / this.drawingBufferHeight;
      const a = t / 1e3;
      this.updateSurfaceShader.time_s.dirty = !0, this.updateSurfaceShader.time_s.data = a, this.updateForceShader.time_s.dirty = !0, this.updateForceShader.time_s.data = a, this.renderFluidShader.time_s.dirty = !0, this.renderFluidShader.time_s.data = a;
      let o = 0;
      const u = this.activePointers;
      for (const n = u.keys(); n.hasNext(); ) {
        const f = String(n.next()), d = u.get(f);
        if (o >= 10)
          break;
        const x = this.activePointersLastFrame.content.get(f) || d, p = o * 4;
        this.pointerPositionsBuffer[p] = (d.x / this.drawingBufferWidth * 2 - 1) * this.fluid.aspectRatio, this.pointerPositionsBuffer[p + 1] = (this.drawingBufferHeight - d.y) / this.drawingBufferHeight * 2 - 1, this.pointerPositionsBuffer[p + 2] = (x.x / this.drawingBufferWidth * 2 - 1) * this.fluid.aspectRatio, this.pointerPositionsBuffer[p + 3] = (this.drawingBufferHeight - x.y) / this.drawingBufferHeight * 2 - 1;
        const y = o * 2;
        this.pointerDataBuffer[y] = d.radius / this.drawingBufferWidth * this.fluid.aspectRatio, this.pointerDataBuffer[y + 1] = 0.5;
        const g = this.activePointersLastFrame.content.get(f);
        g ? (g.type = d.type, g.x = d.x, g.y = d.y, g.buttonState = d.buttonState, g.pressure = d.pressure, g.radius = d.radius, g.angle = d.angle, g.altitudeAngle = d.altitudeAngle, g.azimuthAngle = d.azimuthAngle) : this.activePointersLastFrame.content.set(f, new ct(d.type, d.x, d.y, d.buttonState, d.pressure, d.radius, d.angle, d.altitudeAngle, d.azimuthAngle)), ++o;
      }
      if (this.updateSurfaceShader.activePointerCount.dirty = !0, this.updateSurfaceShader.activePointerCount.data = o, this.updateForceShader.activePointerCount.dirty = !0, this.updateForceShader.activePointerCount.data = o, this.fluid.step(e * this.settings.timestepMultiplier), this.renderParticlesEnabled && !this.particles && this.initializeParticles(), this.renderParticlesEnabled) {
        this.particles.stepParticlesShader.flowVelocityField.dirty = !0, this.particles.stepParticlesShader.flowVelocityField.data = this.fluid.velocityRenderTarget.readFromTexture.native;
        const n = this.particles;
        n.stepParticlesShader.dt.dirty = !0, n.stepParticlesShader.dt.data = e * this.settings.timestepMultiplier, n.stepParticlesShader.particleData.dirty = !0, n.stepParticlesShader.particleData.data = n.particleData.readFromTexture.native;
        const f = n.stepParticlesShader, d = n.particleData;
        n.gl.viewport(0, 0, d.width, d.height), n.gl.bindFramebuffer(this.gl.FRAMEBUFFER, d.writeFrameBufferObject), n.gl.bindBuffer(this.gl.ARRAY_BUFFER, n.screenTriangle), f.setupAndActive(), n.gl.drawArrays(4, 0, 3), f.deactivate(), d.swapBuffers();
      }
      const c = this.postProcessingEnabled ? this.offscreenTarget : null;
      if (c == null ? (this.gl.viewport(0, 0, this.drawingBufferWidth, this.drawingBufferHeight), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.screenBuffer)) : (this.gl.viewport(0, 0, c.width, c.height), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, c.frameBufferObject)), this.gl.clearColor(0, 0, 0, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.remapFluidColor)
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.screenTriangle), this.renderFluidShader.texture.dirty = !0, this.renderFluidShader.texture.data = this.fluid.surfaceRenderTarget.readFromTexture.native, this.renderFluidShader.viewportAspectRatio.dirty = !0, this.renderFluidShader.viewportAspectRatio.data = this.drawingBufferWidth / this.drawingBufferHeight, this.renderFluidShader.setupAndActive(), this.gl.drawArrays(4, 0, 3), this.renderFluidShader.deactivate();
      else {
        const n = this.fluid.surfaceRenderTarget.readFromTexture.native;
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.screenTriangle), this.screenTextureShader.texture.dirty = !0, this.screenTextureShader.texture.data = n, this.screenTextureShader.setupAndActive(), this.gl.drawArrays(4, 0, 3), this.screenTextureShader.deactivate();
      }
      if (this.postProcessingEnabled) {
        const n = this.bloomFilter, f = this.offscreenTarget.texture, d = Math.floor(M.log2(Math.max(f.width, f.height) / n.downsampleSize));
        n.downsampleChain != null && n.downsampleChain.count != d && (n.downsampleChain.releaseGPUMemory(), n.downsampleChain = null), n.downsampleChain == null && d > 0 && (n.downsampleChain = new Sr(n.gl, d));
        const x = n.downsampleChain != null ? n.downsampleChain.apply(f) : f, p = 1 << d, y = n.blurKernelNormalized * f.width / p, g = n.blurKernelNormalized * f.height / p;
        n.blur != null && (n.blur.kernelX != y || n.blur.kernelY != g) && (n.blur.releaseGPUMemory(), n.blur = null), n.blur == null && (y > 1 || g > 1) && (n.blur = new _r(n.gl, y, g));
        const m = n.blur !== null ? n.blur.apply(x) : x;
        if (!m)
          return console.error("blurApply is null"), !1;
        this.gl.viewport(0, 0, this.drawingBufferWidth, this.drawingBufferHeight), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.screenBuffer), this.gl.clearColor(0, 0, 0, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        const P = m.native;
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.screenTriangle), this.screenTextureShader.texture.dirty = !0, this.screenTextureShader.texture.data = P, this.screenTextureShader.setupAndActive(), this.gl.drawArrays(4, 0, 3), this.screenTextureShader.deactivate();
      }
      this.renderParticlesEnabled && (this.gl.enable(this.gl.BLEND), this.gl.blendFunc(this.gl.DST_COLOR, this.gl.SRC_COLOR), this.gl.blendEquation(this.gl.FUNC_ADD), this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.particles.particleUVs), this.renderParticlesShader.particleData.dirty = !0, this.renderParticlesShader.particleData.data = this.particles.particleData.readFromTexture.native, this.renderParticlesShader.setupAndActive(), this.gl.drawArrays(0, 0, this.particles.count), this.renderParticlesShader.deactivate(), this.gl.disable(3042)), this.showDebugTextures;
    }
  }
  initializeParticles() {
    var e, i;
    this.particles = new yr(this.gl, this.particleCount);
    const t = this.fluid;
    if (!t) {
      console.error("fluid is null");
      return;
    }
    if (((e = this.particles.stepParticlesShader.flowScale) == null ? void 0 : e.data)[0] = 1 / (t.physicsScale * t.aspectRatio), ((i = this.particles.stepParticlesShader.flowScale) == null ? void 0 : i.data)[1] = 1 / t.physicsScale, !this.particles.stepParticlesShader.dragCoefficient) {
      console.info("dragCoefficient is null");
      return;
    }
    this.particles.stepParticlesShader.dragCoefficient.dirty = !0, this.particles.stepParticlesShader.dragCoefficient.data = 1;
  }
  reset() {
    const t = this.fluid;
    if ([t.velocityRenderTarget, t.pressureRenderTarget, t.surfaceRenderTarget].forEach((i) => {
      i.gl.bindFramebuffer(this.gl.FRAMEBUFFER, i.readFrameBufferObject), i.gl.viewport(0, 0, i.width, i.height), i.gl.clearColor(0, 0, 0, 1), i.gl.clear(i.gl.COLOR_BUFFER_BIT), i.gl.bindFramebuffer(this.gl.FRAMEBUFFER, i.writeFrameBufferObject), i.gl.viewport(0, 0, i.width, i.height), i.gl.clearColor(0, 0, 0, 1), i.gl.clear(i.gl.COLOR_BUFFER_BIT);
    }), this.particles != null) {
      const i = this.particles, a = i.initialConditionsShader, o = i.particleData;
      i.gl.viewport(0, 0, o.width, o.height), i.gl.bindFramebuffer(this.gl.FRAMEBUFFER, o.writeFrameBufferObject), i.gl.bindBuffer(34962, i.screenTriangle), a.setupAndActive(), i.gl.drawArrays(4, 0, 3), a.deactivate(), o.swapBuffers();
    }
  }
  onPointerDown(t, e, i, a, o, u, c, n, f, d, x) {
    this.activePointers.content.set(String(t), new ct(e, i, a, o, c, n, f, d, x));
  }
  onPointerChange(t, e, i, a, o, u, c, n, f, d, x) {
    const p = this.activePointers.content.get(String(t));
    p && (p.type = e, p.x = i, p.y = a, p.buttonState = o, p.pressure = c, p.radius = n, p.angle = f, p.altitudeAngle = d, p.azimuthAngle = x);
  }
  onPointerUp(t) {
    this.activePointers.remove(String(t)), this.activePointersLastFrame.remove(String(t));
  }
  updateSettings(t) {
    if (t instanceof te) {
      const e = t;
      this.settings = e;
    } else
      this.settings = te.parse(t);
  }
}
function z(l, t) {
  let e;
  return t ? (t.__id__ || (t.__id__ = window.$haxeUID++), l.hx__closures__ === null ? l.hx__closures__ = {} : e = l.hx__closures__[t.__id__], e || (e = t.bind(l), l.hx__closures__[t.__id__] = e), e) : null;
}
class Rr {
  constructor(t, e, i, a, o) {
    r(this, "eventHanders", new ye());
    r(this, "canvas");
    r(this, "gl");
    // savedSettings: Settings = null
    r(this, "lumaLogoPromise", null);
    r(this, "lumaLogoTexture", null);
    // settings = new Settings()
    r(this, "particleCount", 65536);
    r(this, "showDebugTextures", !1);
    r(this, "postProcessingEnabled", !1);
    r(this, "remapFluidColor", !0);
    r(this, "renderParticlesEnabled", !1);
    r(this, "pointerDataBuffer", new Float32Array(20));
    r(this, "pointerPositionsBuffer", new Float32Array(40));
    r(this, "activePointersLastFrame", new _e());
    r(this, "activePointers", new _e());
    r(this, "screenBuffer", null);
    r(this, "screenTriangle", null);
    r(this, "fluid");
    r(this, "frameLoopHandle", null);
    r(this, "eventHandlers", new ye());
    window.$haxeUID |= 0, this.canvas = t, this.canvas.addEventListener("webglcontextlost", () => {
      window.location.reload();
    }), this.canvas.addEventListener("webglcontextrestored", () => {
      window.console.log("webglcontextrestored");
    }), t.setAttribute("touch-action", "none"), this.gl = e, this.gl.clearColor(0, 0, 0, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.canvas.addEventListener("webglcontextlost", () => {
    }), this.gl.canvas.addEventListener("webglcontextrestored", () => {
    }), this.screenBuffer = e.getParameter(e.FRAMEBUFFER_BINDING), this.fluid = new br(e, i, a, o);
    let u;
    const c = window.devicePixelRatio;
    (u = () => {
      this.fluid.resize(this.canvas.width, this.canvas.height);
      const g = window.performance.now();
      this.fluid.onFrame(g), this.frameLoopHandle = window.requestAnimationFrame(u);
    })(), this.canvas.addEventListener("gesturestart", function(g) {
      g.preventDefault(), g.stopPropagation();
    }, !1), this.canvas.addEventListener("gesturechange", function(g) {
      g.preventDefault(), g.stopPropagation();
    }, !1), this.canvas.addEventListener("scroll", function(g) {
      g.preventDefault(), g.stopPropagation();
    });
    const n = this;
    function f(g, m) {
      const w = g.force ?? g.webkitForce, R = n.canvas.getBoundingClientRect(), j = (g.clientX - R.left) / R.width, O = (g.clientY - R.top) / R.height;
      m(-1, 0, j * e.drawingBufferWidth, O * e.drawingBufferHeight, g.buttons, g.button, w != null ? Math.max(w - 1, 0) : 0.5, c * 50, 0, 0, 0);
    }
    function d(g, m, P) {
      P && g.preventDefault();
      const w = n.canvas.getBoundingClientRect();
      for (let R = 0, j = g.changedTouches.length; R < j; ) {
        const O = g.changedTouches[R++], $ = (O.clientX ?? 0 - w.left) / w.width, q = (O.clientY ?? 0 - w.top) / w.height, K = $ * e.drawingBufferWidth, J = q * e.drawingBufferHeight;
        m(O.identifier, 1, K, J, 1, 0, O.force, (O.radiusX ?? 0) * c, O.rotationAngle, O.altitudeAngle, O.azimuthAngle);
      }
    }
    function x(g) {
      const m = n.fluid;
      f(g, z(m, m.onPointerChange));
    }
    function p(g, m, P, w) {
      Object.prototype.hasOwnProperty.call(n.eventHandlers.content, m) ? n.eventHandlers.content.get(m).push({
        handler: P,
        options: w
      }) : n.eventHandlers.content.set(m, [{
        handler: P,
        options: w
      }]), g.addEventListener(m, P, w);
    }
    p(this.canvas, "mousedown", function(g) {
      f(g, z(n.fluid, n.fluid.onPointerDown));
    }), p(window, "mousemove", x), p(window, "webkitmouseforcechanged", x), p(this.canvas, "touchstart", function(g) {
      d(g, z(n.fluid, n.fluid.onPointerDown), !0);
    }, {
      capture: !0,
      passive: !1
    }), p(window, "touchmove", function(g) {
      d(g, z(n.fluid, n.fluid.onPointerChange), !0);
    }, {
      capture: !0,
      passive: !1
    }), p(window, "touchforcechange", function(g) {
      d(g, z(n.fluidd, n.fluid.onPointerChange), !1);
    }, {
      capture: !0,
      passive: !0
    }), p(window, "touchend", function(g) {
      d(g, z(n.fluid, n.fluid.onPointerUp), !1);
    }, {
      capture: !0,
      passive: !0
    }), p(window, "touchcancel", function(g) {
      d(g, z(n.fluid, n.fluid.onPointerUp), !1);
    }, {
      capture: !0,
      passive: !0
    });
    const y = function(g) {
      window.removeEventListener("mousemove", y), f(g, z(n.fluid, n.fluid.onPointerDown));
    };
    window.addEventListener("mousemove", y);
  }
}
const Er = (l) => {
  const t = Wt(null), [e, i] = Nt();
  return Ue.useLayoutEffect(() => {
    var u, c;
    const a = t.current;
    if (!a) {
      (u = l.onError) == null || u.call(l, new Error("Canvas not found"));
      return;
    }
    const o = a.getContext("webgl2");
    if (!o) {
      (c = l.onError) == null || c.call(l, new Error("WebGL2 not supported"));
      return;
    }
    i(o), new Rr(a, o, l.logoSrc, l.textureSrc, l.settings);
  }, [e, l]), /* @__PURE__ */ $t.jsx(
    "canvas",
    {
      id: "xfluid",
      ref: t,
      width: l.width || 500,
      height: l.height || 500,
      style: { width: "100%", height: "100%", backgroundColor: "black", ...l.style }
    }
  );
};
export {
  Er as XFluid
};
