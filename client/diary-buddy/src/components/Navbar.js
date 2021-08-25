import React, { useContext } from "react"
import { Link } from "react-router-dom"
import UserEntries from "./UserEntries"
import { EntriesContext } from "../contexts/userEntryContext"
import "../styles.css"

function Navbar() {
    const {filterEntries, search, setSearch} = useContext(EntriesContext)

    return (
        <header>
            <h1 class='logo'>Logo</h1>
            <input type='checkbox' className='nav-toggle' id='nav-toggle'></input>
            <nav>
                <ul className='nav-ul'>
                    <li className='form-search-bar'>
                        <form className='text-center'>
                            <input
                                className='search-bar'
                                type='text'
                                placeholder='Search your entries'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            ></input>
                            <button
                                className='search-button'
                                type='submit'
                                value='Search'
                                onClick={(e) => {
                                    e.preventDefault()
                                    filterEntries()
                                }}
                            ><Link to='/search'>Search</Link>
                            </button>
                        </form>
                    </li>
                    <li>
                        <Link className='nav-link' to='/templates'>Templates</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to='/user-entries'>Your entries</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to='/new-entry'>+</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to='/'>Home</Link>
                    </li>
                </ul>
            </nav>
            <label for='nav-toggle' className='nav-toggle-label'>
                <span></span>
            </label>
        </header>
    )
}

export default Navbar