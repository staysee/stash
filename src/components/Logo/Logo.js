import React from 'react'
import logo from '../../assets/logo-stash.png'
import './Logo.css'


function Logo () {
    return (
        <div className="Logo">
            <img src={logo} alt="Stash logo" />
        </div>
    )
}

export default Logo