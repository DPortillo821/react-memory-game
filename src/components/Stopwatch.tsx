import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

const RunningTime = styled.p`
    color: white;
    font-size: 1rem;
`

const Stopwatch = ({ isActive }) => {
    const [runningTime, setRunningTime] = useState(0)

    useEffect(() => {
        let interval = 0
        if (isActive) {
            interval = setInterval(() => {
                setRunningTime((runningTime) => runningTime + 100)
            }, 100)
        } else if (!isActive && runningTime !== 0) {
            clearInterval(interval)
            setRunningTime(0)
        }
        return () => clearInterval(interval)
    }, [isActive, runningTime])

    const formatTime = (time) => {
        return (time / 1000).toFixed(1)
    }

    return <RunningTime>{formatTime(runningTime)}s</RunningTime>
}

export default Stopwatch
