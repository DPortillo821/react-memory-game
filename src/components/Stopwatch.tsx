import React, { useEffect, useContext } from 'react'

import styled from 'styled-components'

import { GameContext, Game } from '../contexts/GameContext'

import { formatTime } from '../utils/formattingUtils'

const RunningTime = styled.p`
    color: white;
    font-size: 1rem;
`

const Stopwatch = () => {
    const [state, setState] = useContext<any>(GameContext)

    useEffect(() => {
        let timeoutId = 0
        if (state.isStopwatchActive) {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                setState((state: Game) => ({
                    ...state,
                    runningTime: state.runningTime + 100,
                }))
            }, 100)
        } else if (!state.isStopwatchActive && state.runningTime !== 0) {
            clearTimeout(timeoutId)
        }
        return () => clearTimeout(timeoutId)
    }, [state.isStopwatchActive, state.runningTime])

    return <RunningTime>{formatTime(state.runningTime)}s</RunningTime>
}

export default Stopwatch
