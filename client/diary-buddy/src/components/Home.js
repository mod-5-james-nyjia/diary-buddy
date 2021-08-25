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
                <h2 className='content-h2'>Hello</h2>
                <h3 className='content-h3'>Ready to write down some thoughts?</h3>
                <hr />
                <form className='scratch-pad-form'>
                    <h4 className='content-h4'>Scratch pad</h4>
                    <textarea
                        className='scratch-pad'
                        rows='10'
                        cols='10'
                        name='text'
                        wrap='soft'
                        placeholder='Start typing...'
                    ></textarea>
                </form>
                
            </div>
        </>
    )
}

export default Home