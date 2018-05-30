import Link from 'gatsby-link'
import React from 'react'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><strong>BS</strong></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
