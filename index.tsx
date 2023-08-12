import { render } from './src/util/render'
import { pages } from './src/config/pages'
import './src/index.scss'

pages.forEach(page => render(page))
