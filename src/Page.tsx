import React from 'react'
import Head from './Head'
import BlackLetterRow from './BlackLetterRow'
import PinkLogo from './PinkLogo'
import AnimatedLetters from './AnimatedLetters'

const Page = () => {
    return (
        <html>
            <Head />
            <body id="BODY">
                <div className="nav" id="nav">
                    <div className="nav-closed">
                        <img className="pink-logo-no-text" src="assets/pink-amy-no-title.svg" />
                        <button onClick={() => {}}>
                            <span className="material-icons md-48" id="hamburger">
                                menu
                            </span>
                        </button>
                    </div>
                    <div className="menu" id="menu">
                        <div className="menuitem">Home</div>
                        <div className="menuitem">About Me</div>
                        <div className="menuitem">Page 1</div>
                    </div>
                </div>
                <AnimatedLetters />
            </body>
        </html>
    )
}

export default Page
