import React from 'react'

// Icons
import { FaCopyright } from 'react-icons/fa'

// CSS styles
import './styles.css'

function Footer() {
    return (
        <footer className="Footer">
            <p>
                <FaCopyright />
                <span>Gabriel Cavalcante 2020</span>
            </p>
        </footer>
    )
}

export default Footer