import React, { useEffect, useCallback } from 'react'

// Redux connection
import { connect } from 'react-redux'

// Actions
import actions from 'store/actions/game'
import global from 'store/actions/global'
import TileActions from 'store/actions/tableTile'

// Interfaces
import StoreState from 'interfaces/store-state'

// Components
import Controls from 'components/UI/Controls'

// CSS styles
import './styles.css'

function Game(props: any) {

    const {
        type,
        history,
        freeTiles,
        onGameWon,
        gameState,
        difficulty,
        onGameTied,
        placedTiles,
        currentTile,
        onPlaceTile,
        playerPlayed,
        onChangeTurn,
        onRestartGame,
        currentPlayer,
        onReturnToMenu,
        onPlayerPlayed
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
        if (gameState === 'results') history.push('/game/results')
        else if (gameState !== 'playing') {
            onReturnToMenu()
            history.push('/')
        }
    }, [gameState]) // eslint-disable-line

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

            if (win) onGameWon()
            else if (placedTiles.length === 9) onGameTied()
            else {
                if (currentPlayer !== 'computer') {
                    if (playerPlayed) {
                        onPlayerPlayed(false)
                        onChangeTurn()
                    }
                } else onChangeTurn()
            }
        } else {
            if (currentPlayer !== 'computer') {
                if (playerPlayed) {
                    onPlayerPlayed(false)
                    onChangeTurn()
                }
            } else onChangeTurn()
        }
    }, [placedTiles]) // eslint-disable-line

    const verifySpecifiedWin = useCallback((player: string) => {

        const otherTile = currentTile === 'X' ? 'O' : 'X'

        const thisTile = player === currentPlayer ? currentTile : otherTile

        // Verifying if computer can win with current turn
        let played = false

        //Rows
        for (let i = 0; i < 9; i += 3) {
            // Verifying if current row is filled with 2 pc tiles and one empty
            let freeTile = [i, i + 1, i + 2]
            const filled =
                placedTiles.filter(
                    (tile: { id: number, tile: string }) => {
                        freeTile = freeTile.filter(t => t !== tile.id)
                        return (
                            tile.id === i ||
                            tile.id === (i + 1) ||
                            tile.id === (i + 2)
                        )
                    }
                )

            if (filled.length === 2) {
                // Verifying if all row tiles have the same value
                let equal = 0

                filled.forEach((tile: { tile: string }) => {
                    if (tile.tile === thisTile) equal++
                })

                if (equal === 2) {
                    if (Math.floor(Math.random() * 100) <= (+difficulty * 100)) {
                        const tileIndex = freeTile[0]
                        onPlaceTile({ id: tileIndex, tile: currentTile })

                        played = true
                        break
                    }
                }
            }
        }

        // Columns 
        if (!played) {
            for (let i = 0; i < 3; i++) {
                // Verifying if current column is filled with 2 pc tiles and one empty
                let freeTile = [i, i + 3, i + 6]
                const filled =
                    placedTiles.filter(
                        (tile: { id: number, tile: string }) => {
                            freeTile = freeTile.filter(t => t !== tile.id)
                            return (
                                tile.id === i ||
                                tile.id === (i + 3) ||
                                tile.id === (i + 6)
                            )
                        }
                    )

                if (filled.length === 2) {
                    // Verifying if all column tiles have the same value
                    let equal = 0

                    filled.forEach((tile: { tile: string }) => {
                        if (tile.tile === thisTile) equal++
                    })

                    if (equal === 2) {
                        if (Math.floor(Math.random() * 100) <= (+difficulty * 100)) {
                            const tileIndex = freeTile[0]
                            onPlaceTile({ id: tileIndex, tile: currentTile })
                            if (placedTiles.length <= 4)
                                onChangeTurn()
                            played = true
                            break
                        }
                    }
                }
            }
        }

        // First diagonal
        if (!played) {
            let freeTile = [0, 4, 8]
            const filled =
                placedTiles.filter(
                    (tile: { id: number, tile: string }) => {
                        freeTile = freeTile.filter(t => t !== tile.id)
                        return (
                            tile.id === 0 ||
                            tile.id === 4 ||
                            tile.id === 8
                        )
                    }
                )

            if (filled.length === 2) {
                // Verifying if all diagonal tiles have the same value
                let equal = 0

                filled.forEach((tile: { tile: string }) => {
                    if (tile.tile === thisTile) equal++
                })

                if (equal === 2) {
                    if (Math.floor(Math.random() * 100) <= (+difficulty * 100)) {
                        const tileIndex = freeTile[0]
                        onPlaceTile({ id: tileIndex, tile: currentTile })

                        played = true
                    }
                }
            }
        }

        // Second diagonal
        if (!played) {
            let freeTile = [2, 4, 6]
            const filled =
                placedTiles.filter(
                    (tile: { id: number, tile: string }) => {
                        freeTile = freeTile.filter(t => t !== tile.id)
                        return (
                            tile.id === 2 ||
                            tile.id === 4 ||
                            tile.id === 6
                        )
                    }
                )

            if (filled.length === 2) {
                // Verifying if all diagonal tiles have the same value
                let equal = 0

                filled.forEach((tile: { tile: string }) => {
                    if (tile.tile === thisTile) equal++
                })

                if (equal === 2) {
                    if (Math.floor(Math.random() * 100) <= (+difficulty * 100)) {
                        const tileIndex = freeTile[0]
                        onPlaceTile({ id: tileIndex, tile: currentTile })
                        played = true
                    }
                }
            }
        }
        return played
    }, [placedTiles, currentTile]) // eslint-disable-line

    // Computer logic
    useEffect(() => {
        if (type === 'pve' && currentPlayer === 'computer') {
            if (placedTiles.length >= 3) {
                let played = verifySpecifiedWin('computer')

                if (!played) {

                    played = verifySpecifiedWin('player')

                    if (!played) {
                        const randomTileIndex = freeTiles[Math.floor(Math.random() * freeTiles.length)]
                        onPlaceTile({ id: randomTileIndex, tile: currentTile })
                    }
                }
            } else {
                const randomTileIndex = freeTiles[Math.floor(Math.random() * freeTiles.length)]
                onPlaceTile({ id: randomTileIndex, tile: currentTile })
            }
        }
    }, [currentPlayer])// eslint-disable-line

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
        placedTiles: state.placedTiles,
        freeTiles: state.freeTiles,
        type: state.type,
        difficulty: state.difficulty,
        playerPlayed: state.playerPlayed
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        onReturnToMenu: () => dispatch(global.onReturnToMenu()),
        onRestartGame: () => dispatch(global.onRestart()),
        onPlayerPlayed: (played: boolean) => dispatch(global.onChangePlayerPlayed(played)),
        onChangeTurn: () => dispatch(actions.onChangeTurn()),
        onGameWon: () => dispatch(actions.onGameWon()),
        onGameTied: () => dispatch(actions.onGameTied()),
        onPlaceTile: (tileId: number) => dispatch(TileActions.tileClick(tileId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)