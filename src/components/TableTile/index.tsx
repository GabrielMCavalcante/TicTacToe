import React, { useRef } from 'react'

// CSS styles
import './styles.css'

// Redux connection
import { connect } from 'react-redux'

// Actions
import actions from 'store/actions/tableTile'

// Interfaces
import StoreState from 'interfaces/store-state'

function TableTile(props: any) {

    const tileRef = useRef(null)

    const classes = ["TableTile"]

    if (props.gameState === 'playing')
        if (props.freeTiles.find((el: number) => el === props.id) !== undefined)
            classes.push("Placeable")

    function onTileClickHandler() {
        if (props.gameState === 'playing') {
            const el = tileRef.current as unknown as HTMLDivElement
            if (el.classList.contains('Placeable'))
                props.onTileClick({ id: props.id, tile: props.currentTile })
        }
    }

    function hoverStartHandler() {
        if (props.gameState === 'playing') {
            const el = tileRef.current as unknown as HTMLDivElement
            if (el.classList.contains('Placeable')) {
                el.innerHTML = props.currentTile
            }
        }
    }

    function hoverEndHandler() {
        if (props.gameState === 'playing') {
            const el = tileRef.current as unknown as HTMLDivElement
            if (el.classList.contains('Placeable')) {
                el.innerHTML = ''
            }
        }
    }

    let thisTile = ''

    props.placedTiles.forEach((tile: { id: number, tile: string }) => {
        if (tile.id === props.id)
            thisTile = tile.tile
    })

    return (
        <div
            ref={tileRef}
            onMouseEnter={hoverStartHandler}
            onMouseLeave={hoverEndHandler}
            onClick={onTileClickHandler}
            className={classes.join(' ')}
        >{thisTile}</div>
    )
}

function mapStateToProps(state: StoreState) {
    return {
        gameState: state.gameState,
        currentTile: state.currentTile,
        freeTiles: state.freeTiles,
        placedTiles: state.placedTiles
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        onTileClick: (tileId: number) => dispatch(actions.tileClick(tileId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableTile)