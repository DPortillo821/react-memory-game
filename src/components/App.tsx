import React from 'react'

import styled from 'styled-components'

import CardList from './CardList'
import StatBar from './StatBar'

import { GameProvider } from '../contexts/GameContext'

const AppContainer = styled.div`
    display: grid;
    grid-template-rows: 10% auto;
    grid-template-columns: auto;
    min-height: 80vh;
`

const App = () => {
    return (
        <GameProvider>
            <AppContainer>
                <StatBar />
                <CardList />
            </AppContainer>
        </GameProvider>
    )
}

export default App
