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
        { label: 'Easy', value: '0.25' },
        { label: 'Normal', value: '0.50' },
        { label: 'Hard', value: '0.75' },
        { label: 'Very Hard', value: '0.90' },
        { label: 'Expert', value: '1.00' }
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
                <Selector options={difficultyConfig} defaultValue="0.25"/>
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