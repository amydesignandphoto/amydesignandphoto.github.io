import React from 'react'
import { pages } from '../config/pages'

const Menu = () => (
    <div className="menu" id="menu">
        {pages.map(page => (
            <MenuItem href={page.pageName}>{page.label}</MenuItem>
        ))}
    </div>
)

type MenuItemProps = {
    children: string
    href: string
}

const MenuItem = ({ children, href }: MenuItemProps) => (
    <a href={`/${href}`} className="menuitem">
        {children}
    </a>
)

export default Menu
