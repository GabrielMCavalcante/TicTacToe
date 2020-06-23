import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'

// Components
import Togglers from 'components/UI/Togglers'
import Controls from 'components/UI/Controls'
import Selector from 'components/UI/Selector'

// CSS styles
import './styles.css'

function PveConfig(props: RouteChildrenProps) {

    const firstConfig = [
        { name: 'Player', onclick: () => { console.log('Player') } },
        { name: 'Computer', onclick: () => { console.log('Computer') } }
    ]

    const playWithConfig = [
        { name: 'X', onclick: () => { console.log('X') } },
        { name: 'O', onclick: () => { console.log('O') } }
    ]

    const optionsConfig = [
        { name: 'Start game', onclick: () => {props.history.push('/game'); console.log('Game started!') } },
        { name: 'Return to menu', onclick: () => props.history.push('/') }
    ]

    const difficultyConfig = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
        { label: 'Option 4', value: '4' },
        { label: 'Option 5', value: '5' },
    ]

    return (
        <div className="PveConfig">
            <div className="configField">
                <p>Who goes first?</p>
                <Togglers togglerConfig={firstConfig} defaultSelected="first" />
            </div>

            <div className="configField">
                <p>Play with</p>
                <Togglers togglerConfig={playWithConfig} defaultSelected="first" />
            </div>

            <div className="configField">
                <p>Choose difficulty</p>
                <Selector options={difficultyConfig} defaultValue="1"/>
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

export default PveConfig