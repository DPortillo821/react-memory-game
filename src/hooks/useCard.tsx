import { useContext, useEffect } from 'react'

import { GameContext, Game, Character } from '../contexts/GameContext'

import { shuffleArray, getRandomSubarray } from '../utils/arrayUtil'

import { Characters } from '../data/Characters'

const useCard = () => {
    const [state, setState] = useContext<any>(GameContext)

    function tapCard(character: Character) {
        if (state.characterIdsClicked.includes(character.id)) {
            setState((state: Game) => ({
                ...state,
                hasLost: true,
                message: `o rip. You already clicked on ${character.name}`,
            }))
        } else if (
            state.characterIdsClicked.length ===
            state.characters.length - 1
        ) {
            setState((state: Game) => ({
                ...state,
                hasWon: true,
                message: 'Oh dang, you won! Starting over...',
            }))
        } else {
            setState((state: Game) => ({
                ...state,
                characterIdsClicked: [
                    ...state.characterIdsClicked,
                    character.id,
                ],
                characters: shuffleArray(state.characters),
                isStopwatchActive: true,
                currentScore: state.currentScore + 1,
            }))
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
            hasLost: false,
            hasWon: false,
            currentScore: 0,
        }))
    }

    useEffect(() => {
        setState((state: Game) => ({
            ...state,
            isStopwatchActive: false,
        }))

        let timeout = 0
        if (state.hasLost || state.hasWon) {
            timeout = setTimeout(() => {
                setState((state: Game) => ({
                    ...state,
                    message: '',
                }))
                reset()
            }, 2000)
        }
        return () => clearInterval(timeout)
    }, [state.hasLost, state.hasWon])

    return {
        tapCard,
    }
}

export default useCard
