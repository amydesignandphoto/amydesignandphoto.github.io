let lastScroll = Date.now()
const distance = 200

export const addScrollListener = () => {
    addEventListener('scroll', () => {
        const now = Date.now()
        if (now - lastScroll > 10) {
            lastScroll = now
            attachScrollEffect('row1', { start: -366.67, goingRight: true })
            attachScrollEffect('row2', { start: 33.33 })
            attachScrollEffect('row4', { start: 66.67 })
            attachScrollEffect('row5', { start: -333.33, goingRight: true })
            attachScrollEffect('row6', { start: 33.33 })
        }
    })
}

type ScrollEffect = {
    start: number
    goingRight?: boolean
}

const attachScrollEffect = (
    elementId: string,
    { start: startingLeft, goingRight = false }: ScrollEffect
) => {
    let element = document.getElementById(elementId)
    if (!element) return
    const scrollFraction = window.scrollY / window.innerHeight
    let finalLeft = startingLeft - distance
    if (goingRight) finalLeft = startingLeft + distance

    const currentLeft = (finalLeft - startingLeft) * scrollFraction + startingLeft
    element.style.left = `${currentLeft}%`
}

// const handleNavScroll = () => {
//     const nav = document.getElementById('nav')
//     if (!nav) return
//     const navstyle = getComputedStyle(nav)
//     if (window.scrollY >= 160) {
//         if (navstyle.top === '-100px') {
//             nav.style.top = '0px'
//         }
//     } else {
//         if (navstyle.top === '0px') {
//             nav.style.top = '-100px'
//         }
//     }
// }
