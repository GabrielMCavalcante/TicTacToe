import React from 'react'

// Components
import TableTile from 'components/TableTile'

// CSS styles
import './styles.css'

function GameTable() {

    const tiles: JSX.Element[] = []
    for (let i = 0; i < 9; i++) {
        tiles.push(
            <TableTile key={i} id={i} />
        )
    }

    const firstRow = [tiles[0], tiles[1], tiles[2]]
    const secondRow = [tiles[3], tiles[4], tiles[5]]
    const thirdRow = [tiles[6], tiles[7], tiles[8]]

    return (
        <div className="GameTable">
            <div className="TableRow">{ firstRow }</div>
            <div className="TableRow">{ secondRow }</div>
            <div className="TableRow">{ thirdRow }</div>
        </div>
    )
}

export default GameTable