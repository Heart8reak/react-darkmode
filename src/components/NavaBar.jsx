import React from 'react'
import useDarkMode from '../hooks/useDarkMode'


const darkKey = true;
const darkInitial = 'isDM'

const NavBar = () => {
    const [darkMode, toggleDarkMode] = useDarkMode(darkKey, darkInitial)

    return (
        <nav className="navbar">
            <h1>Crypto Tracker</h1>
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleDarkMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </nav>
    )
}

export default NavBar