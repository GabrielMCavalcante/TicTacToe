import React, { useRef } from 'react'

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

    const tileRef = useRef(null)
    let test: string = ''
    const classes = ["TableTile"]

    function onTileClickHandler() {

        const el = tileRef.current as unknown as HTMLDivElement
        if (el.classList.contains('Placeable')) {
            console.log('Clicked tile with id ', props.id)
            // onTableClick(props.id) <- redux dispatch
        }
    }

    if (Math.floor(Math.random() * 100) > 40) {
        classes.push("Placeable")
    }

    if (classes.length === 1) {
        if (Math.random() > 0.5) {
            test = 'X'
        } else test = 'O'
    }

    function hoverStartHandler() {
        const el = tileRef.current as unknown as HTMLDivElement
        if (el.classList.contains('Placeable')) {
            if (Math.random() > 0.5) {
                el.innerHTML = 'X'
            } else el.innerHTML = 'O'
        }
    }

    function hoverEndHandler() {
        const el = tileRef.current as unknown as HTMLDivElement
        if (el.classList.contains('Placeable')) {
            el.innerHTML = ''
        }
    }

    return (
        <div
            ref={tileRef}
            onMouseEnter={hoverStartHandler}
            onMouseLeave={hoverEndHandler}
            onClick={onTileClickHandler}
            className={classes.join(' ')}
        >{test}</div>
    )
}

export default TableTile