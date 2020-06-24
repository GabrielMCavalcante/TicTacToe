import React, { useEffect } from 'react'

// Redux connection
import { connect } from 'react-redux'

// Actions
import actions from 'store/actions/game'
import global from 'store/actions/global'

// Interfaces
import StoreState from 'interfaces/store-state'

// Components
import Controls from 'components/UI/Controls'

// CSS styles
import './styles.css'

function Game(props: any) {

    const { 
        history,
        gameState, 
        onRestartGame,
        onReturnToMenu,
    } = props

    const gameOptionsConfig = [
        { name: 'Restart Game', onclick: () => onRestartGame() },
        {
            name: 'Return to Menu', onclick: () => {
                onReturnToMenu()
                history.push('/')
            }
        }
    ]

    useEffect(() => {
        if (gameState !== 'playing') {
            onReturnToMenu()
            history.push('/')
        }
    }, [gameState, onReturnToMenu, history])

    let playerTurn = 'Player 1'

    switch(props.currentPlayer) {
        case 'player1':
            {
                playerTurn = 'Player 1'
                break
            }
        case 'player2':
            {
                playerTurn = 'Player 2'
                break
            }
        case 'computer':
            {
                playerTurn = 'Computer'
                break
            }
    }

    return (
        <div className="Game">
            <div className="GameInfo">
                <p>{ playerTurn } Turn - { props.currentTile }</p>
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

function mapStateToProps(state: StoreState) {
    return {
        gameState: state.gameState,
        currentPlayer: state.currentPlayer,
        currentTile: state.currentTile
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        onReturnToMenu: () => dispatch(global.onReturnToMenu()),
        onRestartGame: () => dispatch(actions.onRestart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)