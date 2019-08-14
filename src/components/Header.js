import React from 'react'
import logo from '../assets/icons/list.svg'

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark header">
            <span className="navbar-brand">
                <img src={logo} width={30} height={30} className="d-inline-block align-top" alt="" />
                &nbsp;
                DoOrDie
            </span>
        </nav>
    )
}

export default Header
