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
            <div className='content'>
                <h2 className='text-left'>Hello</h2>
                <h3 className='text-left'>Ready to write down some thoughts?</h3>
                <form>
                    <h4>Scratch pad</h4>
                    <input
                        type='text'
                        placeholder='Start typing...'
                    ></input>
                </form>
                
            </div>
        </>
    )
}

export default Home