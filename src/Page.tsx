import React, { ReactNode } from 'react'
import Head from './Head'
import AnimatedLetters from './AnimatedLetters'
import Nav from './Nav'

type PageProps = {
    children: ReactNode
}

const Page = ({ children }: PageProps) => (
    <html>
        <Head />
        <body>
            {children}
            <script src="index.js" />
        </body>
    </html>
)

export default Page
