import React, { useEffect } from 'react'

// Redux connection
import { connect } from 'react-redux'

// Actions
import actions from 'store/actions/gameConfig'
import global from 'store/actions/global'

// Components
import Togglers from 'components/UI/Togglers'
import Controls from 'components/UI/Controls'

// CSS styles
import './styles.css'

// Interfaces
import StoreState from 'interfaces/store-state'

function PvpConfig(props: any) {

    let currentPlayer = 'player1'
    let currentTile = 'X'

    function gotoMenu() {
        props.onReturnToMenu()
        props.history.push('/')
    }

    useEffect(() => {
        if (props.gameState !== 'pvpConfig' || props.type !== 'pvp') gotoMenu()
    }, []) //eslint-disable-line

    const firstConfig = [
        { name: 'Player 1', onclick: () => currentPlayer = 'player1' },
        { name: 'Player 2', onclick: () => currentPlayer = 'player2' }
    ]

    const playWithConfig = [
        { name: 'X', onclick: () => currentTile = 'X' },
        { name: 'O', onclick: () => currentTile = 'O' }
    ]

    const optionsConfig = [
        { name: 'Start game', onclick: startGame },
        { name: 'Return to menu', onclick: gotoMenu }
    ]

    function startGame() {
        props.onGameStart({ 
            currentPlayer, 
            currentTile,
            firstPlayer: currentPlayer,
            firstTile: currentTile, 
            gameState: 'playing' 
        })
        props.history.push('/game')
    }

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

function mapStateToProps(state: StoreState) {
    return {
        gameState: state.gameState,
        type: state.type
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        onGameStart: (config: any) => dispatch(actions.onSetGameConfig(config)),
        onReturnToMenu: () => dispatch(global.onReturnToMenu())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PvpConfig)