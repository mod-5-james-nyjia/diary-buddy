import React, {useState} from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import FilteredEntries from "./FilteredEntries"
import { useEntries } from "../contexts/userEntryContext.js"
import "../styles.css"

function Home(props) {
    const {filterEntries, search, setSearch} = useEntries()

    const initHomeInputs = 
        {
            text: props.text || ''

        }

    const [homeInputs, setHomeInputs] = useState(initHomeInputs)
    const { postEntry } = useEntries()

    function handleChange(e) {
        const { name, value } = e.target
        setHomeInputs(prevHomeInputs => ({...prevHomeInputs, [name]: value}))
        console.log("textProps", homeInputs)
    }

    function handleSubmit(e) {
        e.preventDefault()
        postEntry(homeInputs)
        setHomeInputs(initHomeInputs)
    }

    return (
        <>
            <Navbar />
            <div className='content'>
                <h2 className='content-h2'>Hello</h2>
                <h3 className='content-h3'>Ready to write down some thoughts?</h3>
                <hr />
                <form onSubmit={handleSubmit} className='scratch-pad-form'>
                    <h4 className='content-h4'>Scratch pad</h4>
                    <textarea
                        className='scratch-pad'
                        rows='10'
                        cols='10'
                        name='text'
                        wrap='soft'
                        onChange={handleChange}
                        placeholder='Start typing...'
                    ></textarea>
                    <button>Submit</button>
                </form>
                
            </div>
        </>
    )
}

export default Home