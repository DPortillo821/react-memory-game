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
    hasLost: boolean
    hasWon: boolean
    isStopwatchActive: boolean
    message: string
    currentScore: number
    fastestCompletionTime: number
}

const GameContext = React.createContext([{}, () => {}])

const GameProvider = (props) => {
    const [state, setState] = useState<Game>({
        characterIdsClicked: [],
        characters: getRandomSubarray(Characters, 9),
        hasLost: false,
        hasWon: false,
        isStopwatchActive: false,
        message: "Click every image. But don't click the same image twice!",
        currentScore: 0,
        fastestCompletionTime: parseInt(
            localStorage.getItem('fastestCompletionTime') || '0'
        ),
    })

    return (
        <GameContext.Provider value={[state, setState]}>
            {props.children}
        </GameContext.Provider>
    )
}

export { GameContext, GameProvider }
