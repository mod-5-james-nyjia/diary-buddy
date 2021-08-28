import React, { useState } from 'react'
import Navbar from "./Navbar"
import { useEntries } from '../contexts/userEntryContext.js'
import '../styles.css'

function AddEntryForm(props) {
    const initInputs = 
        {
            date: props.date || '',
            location: props.location || '',
            entry: props.entry || '',
            image: props.image || '',
            mood: props.mood || '',
        }
    const [inputs, setInputs] = useState(initInputs)
    const { postEntry } = useEntries()

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
        console.log("inputs", inputs)
    }

    function handleSubmit(e) {
        e.preventDefault()
        postEntry(inputs)
        setInputs(initInputs)
    }
    
    
    return (
        <>
            <Navbar />
            <div className='content'>
                <div className='content-container'>
                    <form onSubmit={handleSubmit} className='new-entry-form'>
                        <div class='nativeDatePicker'>
                            <label for='date'>Date this entry: </label>
                            <input 
                                type='date' 
                                id='date' 
                                name='date' 
                                onChange={handleChange}
                            />
                            <span class='validity'></span>
                        </div>
                        <input 
                            type='text'
                            name='location'
                            className='location'
                            value={inputs.location}
                            onChange={handleChange}
                            placeholder='Location'
                        />
                        <textarea 
                            name='entry'
                            className='entry'
                            value={inputs.entry}
                            onChange={handleChange}
                            placeholder='Let me hear your thoughts...'
                            required={true}
                        />
                        <label htmlFor='mood'>Mood:</label>
                        <select
                            type='text'
                            name='mood'
                            className='mood'
                            value={inputs.mood}
                            onChange={handleChange}
                            placeholder='Mood'
                        >
                            <option value=''>-Select Mood-</option>
                            <option value='rad'>😀rad</option>
                            <option value='good'>🙂good</option>
                            <option value='meh'>😐meh</option>
                            <option value='bad'>🙁bad</option>
                            <option value='awful'>😢awful</option>
                        </select><br />
                        <button className='submit-btn'>Submit Entry</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddEntryForm