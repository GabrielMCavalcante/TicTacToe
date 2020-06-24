import React from 'react'

// Components
import Control from './Control'

// CSS styles
import './styles.css'

interface Props {
    numberOfControls: number,
    controlConfig: {
        name: string,
        onclick: () => void
    }[]
}

function Controls(props: Props) {

    const controls: JSX.Element[] = []

    for (let i = 0; i < props.numberOfControls; i++) {
        controls.push(
            <Control
                key={i}
                name={props.controlConfig[i].name}
                onclick={props.controlConfig[i].onclick}
            />
        )
    }

    return (
        <div className="Controls">
            {controls}
        </div>
    )
}

export default Controls