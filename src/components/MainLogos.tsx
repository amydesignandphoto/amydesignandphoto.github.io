import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BlackLogoRow from './BlackLogoRow'
import PinkLogoMain from './PinkLogoMain'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 5vw;
`

let lastTime = Date.now()

const MainLogos = () => {
    const { vert, width } = useInMainLogos()
    console.log(vert, width)

    return (
        <Container>
            <BlackLogoRow offset={-((width * 5) / 3) + vert} count={2} />
            <BlackLogoRow offset={width / 3 - vert} />
            <PinkLogoMain />
            <BlackLogoRow offset={(width * 2) / 3 - vert} />
            <BlackLogoRow offset={-(width * 7) / 3 + vert} count={3} />
            <BlackLogoRow offset={width / 3 - vert} count={3} />
        </Container>
    )
}

const useInMainLogos = () => {
    const [vert, setVert] = useState(window.scrollY)
    const [width, setWidth] = useState(window.innerWidth)

    const onThrottledScroll = () => {
        setVert(window.scrollY)
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        const onScreenChange = () => {
            const now = Date.now()
            if (now - lastTime > 30) {
                onThrottledScroll()
                lastTime = now
            }
        }
        const goToTop = () => {
            window.scrollTo(0, 0)
        }
        addEventListener('scroll', onScreenChange)
        addEventListener('resize', onScreenChange)
        addEventListener('beforeunload', goToTop)
        return () => {
            removeEventListener('scroll', onScreenChange)
            removeEventListener('resize', onScreenChange)
            removeEventListener('beforeunload', goToTop)
        }
    }, [])
    return { vert, width }
}

export default MainLogos
