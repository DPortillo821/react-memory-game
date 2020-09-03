import React, { useContext, useState, useEffect } from 'react'

import styled from 'styled-components'

import { GameContext, Game } from '../contexts/GameContext'

import { formatTime } from '../utils/formattingUtils'

const RunningTime = styled.p`
    color: white;
    font-size: 1rem;
`

const Stopwatch = () => {
    const [state, setState] = useContext<any>(GameContext)
    const [runningTime, setRunningTime] = useState(state.runningTime || 0)

    useEffect(() => {
        let interval = 0
        if (state.isStopwatchActive) {
            interval = setInterval(() => {
                setRunningTime((runningTime) => runningTime + 100)
            }, 100)
        } else if (!state.isStopwatchActive && runningTime !== 0) {
            clearInterval(interval)
            setRunningTime(0)
        }
        return () => clearInterval(interval)
    }, [state.isStopwatchActive, runningTime])

    useEffect(() => {
        if (
            state.hasWon &&
            (state.fastestCompletionTime === 0 ||
                runningTime < state.fastestCompletionTime)
        ) {
            setState((state: Game) => ({
                ...state,
                fastestCompletionTime: runningTime,
            }))
            localStorage.setItem('fastestCompletionTime', runningTime)
        }
    }, [state.hasWon])

    return <RunningTime>{formatTime(runningTime)}s</RunningTime>
}

export default Stopwatch
