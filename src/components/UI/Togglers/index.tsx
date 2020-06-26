import React, { useRef, useEffect } from 'react'

// CSS styles
import './styles.css'

type DefaultSelected = "first" | "second"

interface TogglerConfig {
    togglerConfig: {
        name: string,
        onclick: () => void
    }[],
    defaultSelected: DefaultSelected
}

function Togglers(props: TogglerConfig) {

    const toggler1Ref = useRef(null)
    const toggler2Ref = useRef(null)

    function toggleRef(reference: React.MutableRefObject<null>, method: string, otherId: number) {
        const el = reference.current as unknown as HTMLButtonElement
        if(method === 'add') el.classList.add('Active')
        else el.classList.remove('Active')
        props.togglerConfig[otherId].onclick()
    }

    function toggleHandler(reference: React.MutableRefObject<null>) {
        const selectedOpt = reference.current as unknown as HTMLButtonElement
        selectedOpt.classList.add('Active')

        switch (reference) {
            case toggler1Ref: return toggleRef(toggler2Ref, 'remove', 0)
            case toggler2Ref: return toggleRef(toggler1Ref, 'remove', 1)
        }
    }

    useEffect(() => {
        switch (props.defaultSelected) {
            case "first": return toggleRef(toggler1Ref, 'add', 0)
            case "second": return toggleRef(toggler2Ref, 'add', 1)
        }
    }, [props.defaultSelected]) // eslint-disable-line

    return (
        <div className="Togglers">
            <button
                ref={toggler1Ref}
                className="Toggler"
                onClick={() => toggleHandler(toggler1Ref)}
            >{props.togglerConfig[0].name}</button>

            <button
                ref={toggler2Ref}
                className="Toggler"
                onClick={() => toggleHandler(toggler2Ref)}
            >{props.togglerConfig[1].name}</button>
        </div>
    )
}

export default Togglers