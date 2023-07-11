import React from 'react'
import BlackLetterRow from './BlackLetterRow'
import PinkLogo from './PinkLogo'

const AnimatedLetters = () => {
    return (
        <div className="homepagecontainer">
            <BlackLetterRow rowId="row1" />
            <BlackLetterRow rowId="row2" />
            <PinkLogo />
            <BlackLetterRow rowId="row4" />
            <BlackLetterRow rowId="row5" />
            <BlackLetterRow rowId="row6" />
        </div>
    )
}

export default AnimatedLetters
