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

    function gotoMenu() {
        onReturnToMenu()
        history.push('/')
    }

    const gameOptionsConfig = [
        { name: 'Restart Game', onclick: onRestartGame },
        { name: 'Return to Menu', onclick: gotoMenu }
    ]

    useEffect(() => {
        if (gameState === 'results') history.push('/game/results')
        else if (gameState !== 'playing') gotoMenu()
    }, [gameState]) // eslint-disable-line

    function verifyTurnShift() {
        if (currentPlayer !== 'computer') {
            if (playerPlayed) {
                onPlayerPlayed(false)
                onChangeTurn()
            }
        }
        else onChangeTurn()
    }

    // Game logic
    useEffect(() => {
        if (placedTiles.length >= 5) {
            let win = false

            function getFilled(checkTiles: number[]) {
                return placedTiles.filter(
                    (tile: { id: number, tile: string }) => checkTiles.includes(tile.id)
                )
            }

            function verifyRowCol(checkTileInc: number, loopLimit: number, loopInc: number) {
                for (let i = 0; i < loopLimit; i += loopInc) {
                    const filled = getFilled([i, i + checkTileInc, i + (2 * checkTileInc)])

                    if (filled.length === 3) {
                        const firstTile = filled[0].tile

                        let equal = 0

                        filled.forEach((tile: { tile: string }) => {
                            if (tile.tile === firstTile) equal++
                        })

                        if (equal === 3) {
                            win = true
                            break
                        }
                    }
                }
            }

            function verifyDiagonal(diagonalTiles: number[]) {
                const filled = getFilled(diagonalTiles)

                if (filled.length === 3) {
                    const firstTile = filled[0].tile

                    let equal = 0

                    filled.forEach((tile: { tile: string }) => {
                        if (tile.tile === firstTile) equal++
                    })

                    if (equal === 3) win = true
                }
            }

            //Rows
            verifyRowCol(1, 9, 3)

            // Columns 
            if (!win) verifyRowCol(3, 3, 1)

            // First diagonal
            if (!win) verifyDiagonal([0, 4, 8])

            // Second diagonal
            if (!win) verifyDiagonal([2, 4, 6])

            if (win) onGameWon()
            else if (placedTiles.length === 9) onGameTied()
            else verifyTurnShift()
            
        } else verifyTurnShift()
    }, [placedTiles]) // eslint-disable-line

    const verifySpecifiedWin = useCallback((player: string) => {

        const otherTile = currentTile === 'X' ? 'O' : 'X'

        const thisTile = player === currentPlayer ? currentTile : otherTile

        let played = false

        function filterFilled(tilesId: number[]) {
            let freetile = [...tilesId]
            return [placedTiles.filter(
                (tile: { id: number, tile: string }) => {
                    freetile = freetile.filter(t => t !== tile.id)
                    return tilesId.includes(tile.id)
                }
            ), freetile]
        }

        function verifyPlay(checkTileInc: number, loopLimit: number, loopInc: number) {
            for (let i = 0; i < loopLimit; i += loopInc) {
                const [filled, freetile] = filterFilled([i, i + checkTileInc, i + (2 * checkTileInc)])

                if (filled.length === 2) {
                    let equal = 0

                    filled.forEach((tile: { tile: string }) => {
                        if (tile.tile === thisTile) equal++
                    })

                    if (equal === 2) {
                        if (Math.floor(Math.random() * 100) <= (+difficulty * 100)) {
                            const tileIndex = freetile[0]
                            onPlaceTile({ id: tileIndex, tile: currentTile })
                            played = true
                            break
                        }
                    }
                }
            }
        }

        function verifyDiagonal(diagTiles: number[]) {
            const [filled, freetile] = filterFilled(diagTiles)

            if (filled.length === 2) {
                let equal = 0

                filled.forEach((tile: { tile: string }) => {
                    if (tile.tile === thisTile) equal++
                })

                if (equal === 2) {
                    if (Math.floor(Math.random() * 100) <= (+difficulty * 100)) {
                        const tileIndex = freetile[0]
                        onPlaceTile({ id: tileIndex, tile: currentTile })
                        played = true
                    }
                }
            }
        }

        //Rows
        verifyPlay(1, 9, 3)

        // Columns 
        if (!played) verifyPlay(3, 3, 1)

        // First diagonal
        if (!played) verifyDiagonal([0, 4, 8])

        // Second diagonal
        if (!played) verifyDiagonal([2, 4, 6])

        return played
    }, [placedTiles, currentTile]) // eslint-disable-line

    function playRandomly() {
        const randomTileIndex = freeTiles[Math.floor(Math.random() * freeTiles.length)]
        onPlaceTile({ id: randomTileIndex, tile: currentTile })
    }

    // Computer logic
    useEffect(() => {
        if (type === 'pve' && currentPlayer === 'computer') {
            if (placedTiles.length >= 3) {
                let played = verifySpecifiedWin('computer')

                if (!played) {

                    played = verifySpecifiedWin('player')

                    if (!played) playRandomly()
                }
            } else playRandomly()
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