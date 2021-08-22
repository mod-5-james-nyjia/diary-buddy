import React, { useState } from 'react'
import '../styles.css'

function AddEntryForm(props) {
    const initInputs = 
        {
            date: props.date || '',
            location: props.location || '',
            entry: props.entry || '',
            image: props.image || '',
            mood: props.mood || ''
        }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit} className='new-entry-form'>
            <div class='nativeDatePicker'>
                <label for='date'>Date this entry:</label>
                <input type='date' id='date' name='date' />
                <span class='validity'></span>
            </div>
            <p class='fallbackLabel'>Date this entry:</p>
            <div class='fallbackDatePicker'>
                <span>
                    <label for='day'>Day:</label>
                    <select id='day' name='day'></select>
                </span>
                <span>
                    <label for='month'>Month:</label>
                    <select id='month' name='month'>
                        <option selected>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                </span>
                <span>
                    <label for='year'>Year:</label>
                    <select id='year' name='year'></select>
                </span>
            </div>
            <input 
                type='text'
                name='location'
                className='location'
                value={inputs.location}
                onChange={handleChange}
                placeholder='Location'
            />
            <input 
                type='text'
                name='entry'
                className='entry'
                value={inputs.entry}
                onChange={handleChange}
                placeholder='Let me hear your thoughts...'
                required={true}
            />
            <input 
                type='text'
                name='image'
                className='image'
                value={inputs.image}
                onChange={handleChange}
                placeholder='IMG URL'
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
                <option value='rad'>rad</option>
                <option value='good'>good</option>
                <option value='meh'>meh</option>
                <option value='bad'>bad</option>
                <option value='awful'>awful</option>
            </select><br />
            <button className='submit-btn'>{ props.btnText }</button>
        </form>
    )
}

export default AddEntryForm