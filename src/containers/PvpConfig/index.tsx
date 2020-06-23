import React from 'react'

// Components
import Togglers from 'components/UI/Togglers'
// import Controls from 'components/UI/Controls'

// CSS styles
import './styles.css'

function PvpConfig() {

    const firstConfig = [
        { name: 'Player 1', onclick: () => {console.log('P1')} },
        { name: 'Player 2', onclick: () => {console.log('P2')} }
    ]

    const playWithConfig = [
        { name: 'X', onclick: () => {console.log('X')} },
        { name: 'O', onclick: () => {console.log('O')} }
    ] 

    return (
        <div className="PvpConfig">
            <div className="configField">
                <p>Who goes first?</p>
                <Togglers togglerConfig={firstConfig} />
            </div>

            <div className="configField">
                <p>Play with</p>
                <Togglers togglerConfig={playWithConfig} />
            </div>
        </div>
    )
}

export default PvpConfig