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
        onGameWon,
        gameState,
        onGameTied,
        placedTiles,
        onChangeTurn,
        onRestartGame,
        onReturnToMenu
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
        if(gameState === 'results') history.push('/game/results')
        else if (gameState !== 'playing') {
            onReturnToMenu()
            history.push('/')
        }
    }, [gameState, onReturnToMenu, history])

    // Game logic
    useEffect(() => {
        if (placedTiles.length >= 5) {
            // Verifying win
            let win = false

            //Rows
            for (let i = 0; i < 9; i += 3) {
                // Verifying if current row is filled
                const filled =
                    placedTiles.filter(
                        (tile: { id: number, tile: string }) =>
                            tile.id === i || tile.id === (i + 1) || tile.id === (i + 2)
                    )

                if (filled.length === 3) {
                    // Verifying if all row tiles have the same value
                    const firstTile = filled[0].tile

                    let equal = 0

                    filled.forEach((tile: { tile: string }) => {
                        if (tile.tile === firstTile) equal++
                    })

                    // If they are all equal, then win is true, else just continue
                    if (equal === 3) win = true
                }
            }

            // Columns 
            if (!win) {
                for (let i = 0; i < 3; i++) {
                    // Verifying if current column is filled
                    const filled =
                        placedTiles.filter(
                            (tile: { id: number, tile: string }) =>
                                tile.id === i || tile.id === (i + 3) || tile.id === (i + 6)
                        )

                    if (filled.length === 3) {
                        // Verifying if all column tiles have the same value
                        const firstTile = filled[0].tile

                        let equal = 0

                        filled.forEach((tile: { tile: string }) => {
                            if (tile.tile === firstTile) equal++
                        })

                        // If they are all equal, then win is true, else just continue
                        if (equal === 3) win = true
                    }
                }
            }

            // First diagonal
            if (!win) {
                const filled =
                    placedTiles.filter(
                        (tile: { id: number, tile: string }) =>
                            tile.id === 0 || tile.id === 4 || tile.id === 8
                    )

                if (filled.length === 3) {
                    // Verifying if all diagonal tiles have the same value
                    const firstTile = filled[0].tile

                    let equal = 0

                    filled.forEach((tile: { tile: string }) => {
                        if (tile.tile === firstTile) equal++
                    })

                    // If they are all equal, then win is true, else just continue
                    if (equal === 3) win = true
                }
            }

            // Second diagonal
            if (!win) {
                const filled =
                    placedTiles.filter(
                        (tile: { id: number, tile: string }) =>
                            tile.id === 2 || tile.id === 4 || tile.id === 6
                    )

                if (filled.length === 3) {
                    // Verifying if all diagonal tiles have the same value
                    const firstTile = filled[0].tile

                    let equal = 0

                    filled.forEach((tile: { tile: string }) => {
                        if (tile.tile === firstTile) equal++
                    })

                    // If they are all equal, then win is true, else just continue
                    if (equal === 3) win = true
                }
            }

            if(win) onGameWon()
            else {
                // Verifying if game tied
                if(placedTiles.length === 9) onGameTied()
                else onChangeTurn()
            }
        } else if(placedTiles.length > 0) onChangeTurn()
    }, [placedTiles, onChangeTurn, onGameTied, onGameWon])

    let playerTurn = 'Your'

    switch (props.currentPlayer) {
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
        default: playerTurn = 'Your'
    }

    return (
        <div className="Game">
            <div className="GameInfo">
                <p>{playerTurn} Turn - {props.currentTile}</p>
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
        currentTile: state.currentTile,
        placedTiles: state.placedTiles
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        onReturnToMenu: () => dispatch(global.onReturnToMenu()),
        onRestartGame: () => dispatch(global.onRestart()),
        onGameWon: () => dispatch(actions.onGameWon()),
        onGameTied: () => dispatch(actions.onGameTied()),
        onChangeTurn: () => dispatch(actions.onChangeTurn())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)