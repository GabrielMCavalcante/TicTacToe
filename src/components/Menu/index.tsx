import React from 'react'

// Containers
import GameTable from 'containers/GameTable'

// Components
import Controls from 'components/UI/Controls'

// CSS styles
import './styles.css'

function Menu() {

    const config = [
        { name: 'Player vs Player', onclick: () => {/* set gamemode to pvpOptions */}},
        { name: 'Player vs Computer', onclick: () => { /* set gamemode to pveOptions */ }}
    ]

    return (
        <div className="Menu">
            <Controls numberOfControls={config.length} controlConfig={config}/>
            <GameTable />
        </div>
    )
}

export default Menu