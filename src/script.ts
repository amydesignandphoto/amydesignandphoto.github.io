const distance = 200

const runScrollEffect = (
    elementId: string,
    startingLeft: number,
    isGoingRight: boolean = false
) => {
    const element = document.getElementById(elementId)
    if (!element) return
    const scrollFraction = window.scrollY / window.innerHeight
    let finalLeft = startingLeft + distance
    if (isGoingRight) finalLeft = startingLeft - distance
    const currentLeft = (finalLeft - startingLeft) * scrollFraction + startingLeft
    element.style.left = `${currentLeft}%`
}

addEventListener('scroll', event => {
    runScrollEffect('row1', -366.67)
    runScrollEffect('row2', 33.33, true)
})

// addEventListener('scroll', event => {
//     const row1 = document.getElementById('row2')
//     if (!row1) return
//     const scrollFraction = window.scrollY / window.innerHeight
//     const startingLeft = 33.33
//     const finalLeft = startingLeft - distance
//     const currentLeft = (finalLeft - startingLeft) * scrollFraction + startingLeft
//     row1.style.left = `${currentLeft}%`
// })

addEventListener('scroll', event => {
    const row1 = document.getElementById('row4')
    if (!row1) return
    const scrollFraction = window.scrollY / window.innerHeight
    const startingLeft = 66.67
    const finalLeft = startingLeft - distance
    const currentLeft = (finalLeft - startingLeft) * scrollFraction + startingLeft
    row1.style.left = `${currentLeft}%`
})

addEventListener('scroll', event => {
    const row1 = document.getElementById('row5')
    if (!row1) return
    const scrollFraction = window.scrollY / window.innerHeight
    const startingLeft = -333.33
    const finalLeft = startingLeft + distance
    const currentLeft = (finalLeft - startingLeft) * scrollFraction + startingLeft
    row1.style.left = `${currentLeft}%`
})

addEventListener('scroll', event => {
    const row1 = document.getElementById('row6')
    if (!row1) return
    const scrollFraction = window.scrollY / window.innerHeight
    const startingLeft = 33.33
    const finalLeft = startingLeft - distance
    const currentLeft = (finalLeft - startingLeft) * scrollFraction + startingLeft
    row1.style.left = `${currentLeft}%`
})

addEventListener('scroll', event => {
    const nav = document.getElementById('nav')
    if (!nav) return
    const navstyle = getComputedStyle(nav)
    if (window.scrollY >= 160) {
        if (navstyle.top === '-100px') {
            nav.style.top = '0px'
        }
    } else {
        if (navstyle.top === '0px') {
            nav.style.top = '-100px'
        }
    }
})
