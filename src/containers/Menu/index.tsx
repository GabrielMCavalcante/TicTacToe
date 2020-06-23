import React from 'react'

import { RouteChildrenProps } from 'react-router-dom'

// Components
import Controls from 'components/UI/Controls'

// CSS styles
import './styles.css'


function Menu(props: RouteChildrenProps) {

    const config = [
        { name: 'Player vs Player', onclick: () => {props.history.push('/pvp')/* set gamemode to pvpOptions */}},
        { name: 'Player vs Computer', onclick: () => {props.history.push('/pve')/* set gamemode to pveOptions */ }}
    ]    

    return (
        <div className="Menu">
            <Controls numberOfControls={config.length} controlConfig={config}/>
        </div>
    )
}

export default Menu