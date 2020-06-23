import React, { useState, useEffect } from 'react'
import { FaCaretDown } from 'react-icons/fa'

interface Options {
    options: {
        value: string,
        label: string
    }[],
    defaultValue: string
}

function Selector(props: Options) {

    const defaultOption = props.options
        .filter(option => option.value === props.defaultValue)[0]

    const [value, setValue] = useState<string>(defaultOption.value)

    useEffect(() => {
        console.log(value)
        /* 
            if(props.gameState === 'applyConfig')
                onApplyDifficulty(value)
        */
    }, [value/*, props.gameState */])

    return (
        <div className="Selector">
            <div className="Selected">
                { defaultOption.label }
                <FaCaretDown />
            </div>

            <div className="Options">
                {props.options.map(option => (
                    <div key={option.value} className="Option" onClick={()=>setValue(option.value)}>
                        { option.label }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Selector