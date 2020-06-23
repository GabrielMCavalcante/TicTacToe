import React from 'react'

// CSS styles
import './styles.css'

/**
 * Has an ID
 * Redux will give which label this tile has based on its ID
 */

interface ID {
    id: number
}

function TableTile(props: ID) {

    function onTileClickHandler() {
        console.log('Clicked tile with id ', props.id)
        // onTableClick(id) <- redux dispatch
    }

    return (
        <div
            onClick={onTileClickHandler}
            className="TableTile"
        >{/* tile from redux */}</div>
    )
}

export default TableTile