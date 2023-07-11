import { render } from './src/util/render'
import { pages } from './src/config/pages'

pages.forEach(page => render(page))
