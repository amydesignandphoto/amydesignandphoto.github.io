import React from 'react'
import MainLogos from './components/MainLogos'
import MainMenuImageLinks from './components/MainMenuImageLinks'
import Page from './Page'

const App = () => {
    if (PAGE_ID === 'home')
        return (
            <>
                <MainLogos />
                <MainMenuImageLinks />
            </>
        )
    // @ts-ignore
    else return <Page pages={config.pages} />
}

export default App
