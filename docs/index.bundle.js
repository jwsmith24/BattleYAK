/* eslint-disable no-unused-vars */
(() => {
  var n = {
      208: (n, e, t) => {
        'use strict';
        t.d(e, { A: () => s });
        var r = t(354),
          o = t.n(r),
          a = t(314),
          i = t.n(a)()(o());
        i.push([
          n.id,
          '/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n/*\n  Typographic tweaks!\n  3. Add accessible line-height\n  4. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  5. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  6. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n  7. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n  8. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n',
          '',
          {
            version: 3,
            sources: ['webpack://./src/style.css'],
            names: [],
            mappings:
              'AAAA;;CAEC;AACD;;;EAGE,sBAAsB;AACxB;AACA;;CAEC;AACD;EACE,SAAS;AACX;AACA;;;;CAIC;AACD;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;CAEC;AACD;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;CAEC;AACD;;;;EAIE,aAAa;AACf;AACA;;CAEC;AACD;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;CAEC;AACD;;EAEE,kBAAkB;AACpB',
            sourcesContent: [
              '/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n  2. Remove default margin\n*/\n* {\n  margin: 0;\n}\n/*\n  Typographic tweaks!\n  3. Add accessible line-height\n  4. Improve text rendering\n*/\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n  5. Improve media defaults\n*/\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n  6. Remove built-in form typography styles\n*/\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n  7. Avoid text overflows\n*/\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n  8. Create a root stacking context\n*/\n#root,\n#__next {\n  isolation: isolate;\n}\n',
            ],
            sourceRoot: '',
          },
        ]);
        const s = i;
      },
      314: (n) => {
        'use strict';
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = '',
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += '@supports ('.concat(e[4], ') {')),
                  e[2] && (t += '@media '.concat(e[2], ' {')),
                  r &&
                    (t += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {'
                    )),
                  (t += n(e)),
                  r && (t += '}'),
                  e[2] && (t += '}'),
                  e[4] && (t += '}'),
                  t
                );
              }).join('');
            }),
            (e.i = function (n, t, r, o, a) {
              'string' == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var u = 0; u < n.length; u++) {
                var p = [].concat(n[u]);
                (r && i[p[0]]) ||
                  (void 0 !== a &&
                    (void 0 === p[5] ||
                      (p[1] = '@layer'
                        .concat(p[5].length > 0 ? ' '.concat(p[5]) : '', ' {')
                        .concat(p[1], '}')),
                    (p[5] = a)),
                  t &&
                    (p[2]
                      ? ((p[1] = '@media '
                          .concat(p[2], ' {')
                          .concat(p[1], '}')),
                        (p[2] = t))
                      : (p[2] = t)),
                  o &&
                    (p[4]
                      ? ((p[1] = '@supports ('
                          .concat(p[4], ') {')
                          .concat(p[1], '}')),
                        (p[4] = o))
                      : (p[4] = ''.concat(o))),
                  e.push(p));
              }
            }),
            e
          );
        };
      },
      354: (n) => {
        'use strict';
        n.exports = function (n) {
          var e = n[1],
            t = n[3];
          if (!t) return e;
          if ('function' == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              o =
                'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                  r
                ),
              a = '/*# '.concat(o, ' */');
            return [e].concat([a]).join('\n');
          }
          return [e].join('\n');
        };
      },
      72: (n) => {
        'use strict';
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var a = {}, i = [], s = 0; s < n.length; s++) {
            var c = n[s],
              u = r.base ? c[0] + r.base : c[0],
              p = a[u] || 0,
              l = ''.concat(u, ' ').concat(p);
            a[u] = p + 1;
            var d = t(l),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== d) e[d].references++, e[d].updater(f);
            else {
              var A = o(f, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: l, updater: A, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var s = t(a[i]);
              e[s].references--;
            }
            for (var c = r(n, o), u = 0; u < a.length; u++) {
              var p = t(a[u]);
              0 === e[p].references && (e[p].updater(), e.splice(p, 1));
            }
            a = c;
          };
        };
      },
      659: (n) => {
        'use strict';
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      540: (n) => {
        'use strict';
        n.exports = function (n) {
          var e = document.createElement('style');
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      56: (n, e, t) => {
        'use strict';
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute('nonce', e);
        };
      },
      825: (n) => {
        'use strict';
        n.exports = function (n) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = '';
                t.supports && (r += '@supports ('.concat(t.supports, ') {')),
                  t.media && (r += '@media '.concat(t.media, ' {'));
                var o = void 0 !== t.layer;
                o &&
                  (r += '@layer'.concat(
                    t.layer.length > 0 ? ' '.concat(t.layer) : '',
                    ' {'
                  )),
                  (r += t.css),
                  o && (r += '}'),
                  t.media && (r += '}'),
                  t.supports && (r += '}');
                var a = t.sourceMap;
                a &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */'
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      113: (n) => {
        'use strict';
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      906: (n) => {
        const e = { HIT: 'HIT', MISS: 'MISS' };
        n.exports = {
          createGameBoard: function () {
            const n = {
              board: [],
              ships: [],
              attackLog: [],
              resetBoard: function () {
                for (let n = 0; n < 10; n++) {
                  this.board[n] = [];
                  for (let e = 0; e < 10; e++)
                    this.board[n][e] = {
                      ship: 'empty',
                      hasTarget: function () {
                        return 'empty' !== this.ship;
                      },
                    };
                }
              },
              placeShip: function (n, e) {
                this.ships.push(e);
                for (let t of n) this.board[t.y][t.x].ship = e;
              },
              handleAttack: function (n) {
                const t = this.board[n.y][n.x].ship;
                'empty' !== t
                  ? (this.logAttack(n, e.HIT), t.hit())
                  : this.logAttack(n, e.MISS);
              },
              logAttack: function (n, e) {
                this.attackLog.push({ space: n, status: e });
              },
              fleetSunk: function () {
                for (let n of this.ships) if (!n.isSunk()) return !1;
                return !0;
              },
            };
            return n.resetBoard(), n;
          },
          attackStatus: e,
        };
      },
      211: (n, e, t) => {
        const r = t(906);
        n.exports = {
          playerType: { REAL: 'REAL', COMPUTER: 'COMPUTER' },
          createPlayer: function (n) {
            return { type: n, board: r.createGameBoard(), attackLog: [] };
          },
        };
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return n[r](a, a.exports, t), a.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0),
    (() => {
      'use strict';
      var n = t(72),
        e = t.n(n),
        r = t(825),
        o = t.n(r),
        a = t(659),
        i = t.n(a),
        s = t(56),
        c = t.n(s),
        u = t(540),
        p = t.n(u),
        l = t(113),
        d = t.n(l),
        f = t(208),
        A = {};
      (A.styleTagTransform = d()),
        (A.setAttributes = c()),
        (A.insert = i().bind(null, 'head')),
        (A.domAPI = o()),
        (A.insertStyleElement = p()),
        e()(f.A, A),
        f.A && f.A.locals && f.A.locals;
      const h = t(211);
      h.createPlayer(h.playerType.REAL), h.createPlayer(h.playerType.COMPUTER);
    })();
})();
//# sourceMappingURL=index.bundle.js.map
