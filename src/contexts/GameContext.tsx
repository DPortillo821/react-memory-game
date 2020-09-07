import React, { useState } from 'react'

import { Characters } from '../data/Characters'

import { getRandomSubarray } from '../utils/arrayUtil'

export type Character = {
    id: number
    imgUrl: string
    name: string
}

export type Game = {
    characterIdsClicked: number[]
    characters: Character[]
    currentScore: number
    fastestCompletionTime: number
    hasLost: boolean
    hasWon: boolean
    isStopwatchActive: boolean
    message: string
    runningTime: number
}

const GameContext = React.createContext([{}, () => {}])

const GameProvider = (props) => {
    const initialState: Game = {
        characterIdsClicked: [],
        characters: getRandomSubarray(Characters, 9),
        currentScore: 0,
        fastestCompletionTime: parseInt(
            localStorage.getItem('fastestCompletionTime') || '0'
        ),
        hasLost: false,
        hasWon: false,
        isStopwatchActive: false,
        message:
            "Start by clicking an image but don't click the same image twice!",
        runningTime: 0,
    }

    const [state, setState] = useState<Game>(initialState)

    return (
        <GameContext.Provider value={[state, setState]}>
            {props.children}
        </GameContext.Provider>
    )
}

export { GameContext, GameProvider }
