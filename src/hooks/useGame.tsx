import { useContext, useEffect } from 'react'

import { GameContext, Game, Character } from '../contexts/GameContext'

import { shuffleArray, getRandomSubarray } from '../utils/arrayUtil'

import { Characters } from '../data/Characters'

const useGame = () => {
    const [state, setState] = useContext<any>(GameContext)

    function selectCard(character: Character) {
        if (state.characterIdsClicked.includes(character.id)) {
            setState((state: Game) => ({
                ...state,
                hasLost: true,
                message: `Oh no! Did you forget you already clicked on ${character.name}?`,
            }))
        } else if (
            state.characterIdsClicked.length ===
            state.characters.length - 1
        ) {
            setState((state: Game) => ({
                ...state,
                hasWon: true,
                message: 'You won!',
            }))
        } else {
            setState((state: Game) => ({
                ...state,
                characterIdsClicked: [
                    ...state.characterIdsClicked,
                    character.id,
                ],
                characters: shuffleArray(state.characters),
                currentScore: state.currentScore + 1,
            }))
            if (!state.isStopwatchActive) {
                setState((state: Game) => ({
                    ...state,
                    isStopwatchActive: true,
                }))
            }
            if (state.message.length > 0) {
                setState((state: Game) => ({
                    ...state,
                    message: '',
                }))
            }
        }
    }

    function reset() {
        setState((state: Game) => ({
            ...state,
            characterIdsClicked: [],
            characters: getRandomSubarray(Characters, 9),
            currentScore: 0,
            hasLost: false,
            hasWon: false,
            message: '',
            runningTime: 0,
        }))
    }

    useEffect(() => {
        if (state.isStopwatchActive) {
            console.log('2')
            setState((state: Game) => ({
                ...state,
                isStopwatchActive: false,
            }))
        }

        let timeout = 0
        if (state.hasLost || state.hasWon) {
            timeout = setTimeout(() => {
                reset()
            }, 3000)
        }
        return () => clearInterval(timeout)
    }, [state.hasLost, state.hasWon])

    useEffect(() => {
        if (
            state.hasWon &&
            (state.fastestCompletionTime === 0 ||
                state.runningTime < state.fastestCompletionTime)
        ) {
            setState((state: Game) => ({
                ...state,
                fastestCompletionTime: state.runningTime,
            }))
            localStorage.setItem('fastestCompletionTime', state.runningTime)
        }
    }, [state.hasWon])

    return {
        selectCard,
        characterIdsClicked: state.characterIdsClicked,
        characters: state.characters,
        currentScore: state.currentScore,
        fastestCompletionTime: state.fastestCompletionTime,
        hasLost: state.hasLost,
        hasWon: state.hasWon,
        isStopwatchActive: state.isStopwatchActive,
        message: state.message,
        runningTime: state.runningTime,
    }
}

export default useGame
