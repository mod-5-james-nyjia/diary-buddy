import React from "react"
import { Link } from "react-router-dom"
import UserEntries from "./UserEntries"
import "../styles.css"

function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link className='to-templates' to='/templates'>Templates</Link>
                    </li>
                    <li>
                        <Link className='to-user-entries' to='/user-entries'>Your entries</Link>
                    </li>
                    <li>
                        <Link className='to-new-entry' to='/new-entry'>+</Link>
                    </li>
                    <li>
                        <Link className='to-home' to='/'>Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar