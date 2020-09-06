import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

const getHeight = () =>
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight

const Root = () => {
    // immediately set body element height
    document
        .getElementsByTagName('body')[0]
        .setAttribute('style', `margin: 0; height: ${getHeight()}px`)

    // in this case useEffect will execute only once because it does not have any dependencies.
    useEffect(() => {
        // timeoutId for debounce mechanism
        let timeoutId = 0

        const resizeListener = () => {
            // prevent execution of previous setTimeout
            clearTimeout(timeoutId)

            // change height of body element after 200 milliseconds
            timeoutId = setTimeout(() => {
                document
                    .getElementsByTagName('body')[0]
                    .setAttribute(
                        'style',
                        `margin: 0; height: ${getHeight()}px`
                    )
            }, 200)
        }

        // set resize listener
        window.addEventListener('resize', resizeListener)

        // clean up function
        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    }, [])

    return <App />
}

ReactDOM.render(<Root />, document.getElementById('root'))
