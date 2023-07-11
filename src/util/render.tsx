import React, { FC } from 'react'
import { renderToString } from 'react-dom/server'
import { writeFileSync } from 'fs'

export type PageConfig = {
    pageName: string
    label: string
    Page: FC
}

export const render = ({ pageName, Page }: PageConfig) => {
    writeFileSync(`./docs/${pageName}`, `<!DOCTYPE html>${renderToString(<Page />)}`)
}
