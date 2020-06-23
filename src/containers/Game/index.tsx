import React from 'react'
import { RouteChildrenProps } from 'react-router-dom'

// Components
import Controls from 'components/UI/Controls'

// CSS styles
import './styles.css'

function Game(props: RouteChildrenProps) {

    const gameOptionsConfig = [
        { name: 'Restart Game', onclick: () => {console.log('Restart Game')} },
        { name: 'Return to Menu', onclick: () => {props.history.push('/')} }
    ]

    return (
        <div className="Game">
            <div className="GameInfo">
                <p>Player 1 Turn - X</p>
            </div>

            <div className="GameOptions">
                <Controls
                    numberOfControls={gameOptionsConfig.length}
                    controlConfig={gameOptionsConfig}
                />
            </div>
        </div>
    )
}

export default Game