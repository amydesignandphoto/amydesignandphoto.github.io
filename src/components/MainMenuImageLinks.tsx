import React from 'react'
import FullImageLink, { FullImageLinkProps } from './FullImageLink'

const linkSettings: FullImageLinkProps[] = [
    { img: 'uvu/banner.jpg', text: 'UVU STATE OF THE UNIVERSITY 2022' },
    { img: 'tom-proctor/tom1.jpg', text: 'TOM PROCTOR' },
    { img: 'demeter/stack.png', text: 'HOUSE OF DEMETER' },
    { img: 'blue-synergy/tile.jpg', text: 'BLUE SYNERGY' },
    { img: 'popcorn-list/login.png', text: 'POPCORN LIST' },
    { img: 'tron/bike.png', text: 'TRON VIDEO' },
    { img: 'bipolar-journey/manic.png', text: 'BIPOLAR JOURNEY' },
    { img: 'kitambaa/logo.jpg', text: 'KITAMBAA' },
    { img: 'uvu/stage.jpg', text: 'UVU DATA SUMMIT 2021' },
]

const MainMenuImageLinks = () => (
    <>
        {linkSettings.map(props => (
            <FullImageLink {...props} />
        ))}
    </>
)

export default MainMenuImageLinks
