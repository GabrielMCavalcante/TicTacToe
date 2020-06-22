import React from 'react'

// Icons
import { FaCopyright } from 'react-icons/fa'

// CSS styles
import './styles.css'

function Footer() {
    return (
        <div className="Footer">
            <p>
                <FaCopyright />
                <span>Gabriel Cavalcante 2020</span>
            </p>
        </div>
    )
}

export default Footer