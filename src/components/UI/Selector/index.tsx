import React, { useState, useEffect } from 'react'
import { FaCaretDown } from 'react-icons/fa'

// CSS styles
import './styles.css'

interface Option {
    value: string,
    label: string
}

interface Options {
    options: Option[],
    defaultValue: string
}

function Selector(props: Options) {

    const defaultOption = props.options
        .filter(option => option.value === props.defaultValue)[0]

    const [label, setLabel] = useState(defaultOption.label)
    const [value, setValue] = useState(defaultOption.value)
    const [openCaret, setOpenCaret] = useState(false)

    useEffect(() => {
        console.log(value)
        /* 
            if(props.gameState === 'applyConfig')
                onApplyDifficulty(value)
        */
    }, [value/*, props.gameState */])

    function optionSelected(option: Option) {
        setLabel(option.label)
        setValue(option.value)
        setOpenCaret(false)
    }

    return (
        <div className="Selector">
            <div className="Selected" onClick={() => setOpenCaret(!openCaret)}>
                { label }
                <FaCaretDown />
            </div>

            <div className={["Options", openCaret ? "Open": ""].join(' ')}>
                {
                    props.options.map(option => (
                        <div
                            key={option.value}
                            className={
                                ["Option", option.value === value && "Current"].join(' ')
                            }
                            onClick={() => optionSelected(option)}
                        >{ option.label }</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Selector