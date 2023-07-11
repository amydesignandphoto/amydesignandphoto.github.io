import React from 'react'
import { renderToString } from 'react-dom/server'
import Page from './src/Page'
import { writeFileSync } from 'fs'

const str = renderToString(<Page />)

writeFileSync('./docs/index.html', `<!DOCTYPE html>${str}`)
