import React from 'react'
import Menu from './Menu'

const Nav = () => {
    return (
        <div className="nav" id="nav">
            <div className="nav-closed">
                <img className="pink-logo-no-text" src="assets/pink-amy-no-title.svg" />
                <button id="menu_action">
                    <span className="material-icons md-48" id="hamburger">
                        menu
                    </span>
                </button>
            </div>
            <Menu />
        </div>
    )
}

export default Nav
