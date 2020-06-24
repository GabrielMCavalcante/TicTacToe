import React from 'react'

// Redux connection
import { connect } from 'react-redux'

// Actions
import actions from 'store/actions/menu'

// Components
import Controls from 'components/UI/Controls'

// CSS styles
import './styles.css'

function Menu(props: any) {

    const config = [
        { name: 'Player vs Player', onclick: () => {
            props.onPvp()
            props.history.push('/pvp')
        }},
        { name: 'Player vs Computer', onclick: () => {
            props.onPve()
            props.history.push('/pve')
        }}
    ]    

    return (
        <div className="Menu">
            <Controls numberOfControls={config.length} controlConfig={config}/>
        </div>
    )
}

function mapDispatchToProps(dispatch: any) {
    return {
        onPvp: () => dispatch(actions.onSetPvp()),
        onPve: () => dispatch(actions.onSetPve())
    }
}

export default connect(null, mapDispatchToProps)(Menu)