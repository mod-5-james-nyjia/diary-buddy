import React, { useState } from "react"
import { useEntries } from "../contexts/userEntryContext"

function ScratchPad(props) {
    const initInputs = 
        {
            date: props.date || '',
            text: props.text || ''
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
        </>
    )
}

export default ScratchPad