import Link from 'gatsby-link'
import React from 'react'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/lab">Playground</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/blog">Posts</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/clicks">Clicks</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">About</Link></li>
                <li><a onClick={props.onToggleMenu} target="_blank" rel="noopener noreferrer" href="http://static.bhashkar.me/resume.pdf">resume</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
