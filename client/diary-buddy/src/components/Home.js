import React from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import FilteredEntries from "./FilteredEntries"
import { useEntries } from "../contexts/userEntryContext"
import "../styles.css"

function Home() {
    const {filterEntries, search, setSearch} = useEntries()

    return (
        <>
            <Navbar />
            <div>
                <h2>Hello</h2>
                <h3>Ready to write down some thoughts?</h3>
                <form>
                    <h4>Scratch pad</h4>
                    <input
                        type='text'
                        placeholder='Start typing...'
                    ></input>
                </form>
                <form>
                    <input
                        type='text'
                        placeholder='Search your entries'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    ></input>
                    <button
                        type='submit'
                        value='Search'
                        onClick={(e) => {
                            e.preventDefault()
                            filterEntries()
                        }}
                    ><Link to='/search'>Search</Link>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Home