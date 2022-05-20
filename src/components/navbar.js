import * as React from 'react'
import {Link} from 'gatsby'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/dummy">Dummy</Link></li>
                <li><Link to="/start">Start</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
