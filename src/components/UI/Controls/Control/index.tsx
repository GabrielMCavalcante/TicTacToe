import React from 'react'

// CSS styles
import './styles.css'

interface ControlConfig {
    name: string,
    onclick: (...params: any[]) => void
}

function Control(props: ControlConfig) {
    return <button className="Control" onClick={props.onclick}>{ props.name }</button>
}

export default Control