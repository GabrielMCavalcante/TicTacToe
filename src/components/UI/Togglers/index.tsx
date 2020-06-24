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

    function toggleHandler(reference: React.MutableRefObject<null>) {
        const selectedOpt = reference.current as unknown as HTMLButtonElement
        selectedOpt.classList.add('Active')
        switch(reference) {
            case toggler1Ref:
                {
                    const unselect = toggler2Ref.current as unknown as HTMLButtonElement
                    unselect.classList.remove('Active')
                    props.togglerConfig[0].onclick()
                    break
                }
            case toggler2Ref:
                {
                    const unselect = toggler1Ref.current as unknown as HTMLButtonElement
                    unselect.classList.remove('Active')
                    props.togglerConfig[1].onclick()
                    break
                }
        }
    }

    useEffect(() => {
        switch(props.defaultSelected) {
            case "first":
                {
                    const select = toggler1Ref.current as unknown as HTMLButtonElement
                    select.classList.add('Active')
                    props.togglerConfig[0].onclick()
                    break
                }
            case "second":
                {
                    const select = toggler2Ref.current as unknown as HTMLButtonElement
                    select.classList.add('Active')
                    props.togglerConfig[1].onclick()
                    break
                }
        }
    }, [toggler1Ref, toggler2Ref, props.defaultSelected, props.togglerConfig])

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