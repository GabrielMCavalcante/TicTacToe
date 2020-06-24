import React, { useState, useEffect } from 'react'
import { FaCaretDown } from 'react-icons/fa'

// Redux connection
import { connect } from 'react-redux'

// Actions
import actions from 'store/actions/selector'

// Interfaces
import StoreState from 'interfaces/store-state'

// CSS styles
import './styles.css'

interface Option {
    value: string,
    label: string
}

function Selector(props: any) {

    const { options, defaultValue, gameState, onApplyDifficulty } = props

    const defaultOption = options
        .filter((option: Option) => option.value === defaultValue)[0]

    const [label, setLabel] = useState(defaultOption.label)
    const [value, setValue] = useState(defaultOption.value)
    const [openCaret, setOpenCaret] = useState(false)

    useEffect(() => {
        if (gameState === 'pveConfig') onApplyDifficulty(+value)
    }, [value, gameState, onApplyDifficulty])

    function optionSelected(option: Option) {
        setLabel(option.label)
        setValue(option.value)
        setOpenCaret(false)
    }

    return (
        <div className="Selector">
            <div className="Selected" onClick={() => setOpenCaret(!openCaret)}>
                {label}
                <FaCaretDown />
            </div>

            <div className={["Options", openCaret ? "Open" : ""].join(' ')}>
                {
                    options.map((option: Option) => (
                        <div
                            key={option.value}
                            className={
                                ["Option", option.value === value && "Current"].join(' ')
                            }
                            onClick={() => optionSelected(option)}
                        >{option.label}</div>
                    ))
                }
            </div>
        </div>
    )
}

function mapStateToProps(state: StoreState) {
    return {
        gameState: state.gameState
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        onApplyDifficulty: (diff: number) => dispatch(actions.onSetDifficulty(diff)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector)