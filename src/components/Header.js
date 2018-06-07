import Link from 'gatsby-link'
import React from 'react'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo">
            <div className="logo-container">
                <div className="logo-content">
                    <div className="letter"><div /><div /><div /><div /></div>
                    <div className="letter"><div /><div /><div /><div /></div>
                </div>
            </div>
        </Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
