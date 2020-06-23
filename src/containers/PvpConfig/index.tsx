import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'

// Components
import Togglers from 'components/UI/Togglers'
import Controls from 'components/UI/Controls'

// CSS styles
import './styles.css'

function PvpConfig(props: RouteChildrenProps) {

    const firstConfig = [
        { name: 'Player 1', onclick: () => { console.log('P1') } },
        { name: 'Player 2', onclick: () => { console.log('P2') } }
    ]

    const playWithConfig = [
        { name: 'X', onclick: () => { console.log('X') } },
        { name: 'O', onclick: () => { console.log('O') } }
    ]

    const optionsConfig = [
        { name: 'Start game', onclick: () => {props.history.push('/game'); console.log('Game started!') } },
        { name: 'Return to menu', onclick: () => props.history.push('/') }
    ]

    return (
        <div className="PvpConfig">
            <div className="configField">
                <p>Who goes first?</p>
                <Togglers togglerConfig={firstConfig} defaultSelected="first" />
            </div>

            <div className="configField">
                <p>Play with</p>
                <Togglers togglerConfig={playWithConfig} defaultSelected="first" />
            </div>

            <div className="configField">
                <Controls
                    numberOfControls={optionsConfig.length}
                    controlConfig={optionsConfig}
                />
            </div>
        </div>
    )
}

export default PvpConfig