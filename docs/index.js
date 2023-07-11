;(() => {
    'use strict'
    var t = {
            652: (t, e) => {
                Object.defineProperty(e, '__esModule', { value: !0 }),
                    (e.addScrollListener = void 0)
                let r = Date.now()
                e.addScrollListener = () => {
                    addEventListener('scroll', () => {
                        const t = Date.now()
                        t - r > 10 &&
                            ((r = t),
                            o('row1', { start: -366.67, goingRight: !0 }),
                            o('row2', { start: 33.33 }),
                            o('row4', { start: 66.67 }),
                            o('row5', { start: -333.33, goingRight: !0 }),
                            o('row6', { start: 33.33 }))
                    })
                }
                const o = (t, { start: e, goingRight: r = !1 }) => {
                    let o = document.getElementById(t)
                    if (!o) return
                    let n = e - 200
                    r && (n = e + 200)
                    const s = (n - e) * (window.scrollY / window.innerHeight) + e
                    o.style.left = `${s}%`
                }
            },
        },
        e = {}
    ;(0,
    (function r(o) {
        var n = e[o]
        if (void 0 !== n) return n.exports
        var s = (e[o] = { exports: {} })
        return t[o](s, s.exports, r), s.exports
    })(652).addScrollListener)()
})()
