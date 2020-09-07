import React from 'react'

import styled from 'styled-components'

import CardList from './CardList'
import StatBar from './StatBar'
import MessageBar from './MessageBar'

import { GameProvider } from '../contexts/GameContext'

const Container = styled.div`
    display: grid;
    grid-template-rows: auto 8fr 1.5fr;
    height: 100%;
`

const App = () => {
    return (
        <GameProvider>
            <Container>
                <StatBar />
                <CardList />
                <MessageBar />
            </Container>
        </GameProvider>
    )
}

export default App
