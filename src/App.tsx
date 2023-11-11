import React from 'react'
import MainLogos from './components/MainLogos'
import MainMenuImageLinks from './components/MainMenuImageLinks'
import Page from './Page'

const App = () => {
    const page = config.pages.find(p => p.id === PAGE_ID)
    const ids = config.pages.map(p => p.id)
    if (PAGE_ID === 'home')
        return (
            <>
                <MainLogos />
                <MainMenuImageLinks />
            </>
        )
    else return <Page ids={ids} page={page} />
}

export default App
