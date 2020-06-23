import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'

// Components
import Controls from 'components/UI/Controls'

// CSS styles
import './styles.css'

function GameResults(props: RouteChildrenProps) {

    const resultOptionsConfig = [
        { name: 'Play again', onclick: () => props.history.push('/game') },
        { name: 'Reset scoreboard', onclick: () => { console.log('Reset Score') } },
        { name: 'Return to menu', onclick: () => props.history.push('/') }
    ]

    return (
        <div className="GameResults">
            <div className="Results">
                <div className="ResultField">
                    <p className="FieldTitle">Player 1 - <span>X</span></p>
                    <p className="FieldContent">3 victories</p>
                </div>

                <div className="FieldSeparator"></div>
                
                <div className="ResultField">
                    <p className="FieldTitle">Player 2 - <span>O</span></p>
                    <p className="FieldContent">1 victories</p>
                </div>
            </div>

            <div className="Options">
                <Controls 
                    numberOfControls={resultOptionsConfig.length}
                    controlConfig={resultOptionsConfig}
                />
            </div>
        </div>
    )
}

export default GameResults