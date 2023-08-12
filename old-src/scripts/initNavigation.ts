export const initNavigation = () => {
    const hamburger = document.getElementById('hamburger')
    const menu = document.getElementById('menu')
    const menuAction = document.getElementById('menu_action')
    if (!menuAction || !hamburger || !menu) return

    menuAction.onclick = () => {
        if (hamburger.innerHTML === 'close') {
            hamburger.innerHTML = 'menu'
            menu.style.display = 'none'
        } else {
            hamburger.innerHTML = 'close'
            menu.style.display = 'flex'
        }
    }
}
