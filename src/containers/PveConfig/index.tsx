import React, { useEffect } from 'react'

// Redux connection
import { connect } from 'react-redux'

// Actions
import actions from 'store/actions/gameConfig'
import global from 'store/actions/global'

// Components
import Togglers from 'components/UI/Togglers'
import Controls from 'components/UI/Controls'
import Selector from 'components/UI/Selector'

// CSS styles
import './styles.css'

// Interfaces
import StoreState from 'interfaces/store-state'

function PveConfig(props: any) {

    let currentPlayer = 'player'
    let currentTile = 'X'

    function gotoMenu() {
        props.onReturnToMenu()
        props.history.push('/')
    }

    useEffect(() => {
        if (props.gameState !== 'pveConfig' || props.type !== 'pve') gotoMenu()
    }, []) //eslint-disable-line

    const firstConfig = [
        { name: 'Player', onclick: () => currentPlayer = 'player' },
        { name: 'Computer', onclick: () => currentPlayer = 'computer' }
    ]

    const playWithConfig = [
        { name: 'X', onclick: () => currentTile = 'X' },
        { name: 'O', onclick: () => currentTile = 'O' }
    ]

    const optionsConfig = [
        { name: 'Start game', onclick: startGame },
        { name: 'Return to menu', onclick: gotoMenu }
    ]

    const difficultyConfig = [
        { label: 'Easy', value: '0.25' },
        { label: 'Normal', value: '0.50' },
        { label: 'Hard', value: '0.75' },
        { label: 'Very Hard', value: '0.90' },
        { label: 'Expert', value: '1.00' }
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
                <Selector options={difficultyConfig} defaultValue="0.25" />
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

export default connect(mapStateToProps, mapDispatchToProps)(PveConfig)