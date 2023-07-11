import AboutMePage from '../pages/AboutMePage'
import HomePage from '../pages/HomePage'
import { PageConfig } from '../util/render'

export const pages: PageConfig[] = [
    {
        pageName: 'index.html',
        label: 'Home',
        Page: HomePage,
    },
    {
        pageName: 'about-me.html',
        label: 'About Me',
        Page: AboutMePage,
    },
]
