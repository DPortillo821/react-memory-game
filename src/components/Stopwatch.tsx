import React, { useContext, useState, useEffect } from 'react'

import styled from 'styled-components'

import { GameContext } from '../contexts/GameContext'

const RunningTime = styled.p`
    color: white;
    font-size: 1rem;
`

const Stopwatch = () => {
    const [state] = useContext<any>(GameContext)
    const [runningTime, setRunningTime] = useState(0)

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

    const formatTime = (time) => {
        return (time / 1000).toFixed(1)
    }

    return <RunningTime>{formatTime(runningTime)}s</RunningTime>
}

export default Stopwatch
