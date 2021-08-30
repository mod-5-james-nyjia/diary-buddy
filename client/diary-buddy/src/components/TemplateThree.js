import React, {useContext, useState} from "react"
import {TemplateContext} from "../contexts/templateContext"
import { useEntries } from "../contexts/userEntryContext"
import Navbar from "./Navbar"

function TemplateThree(props) {
    const {goBack, dailyAffirmation, dailyPromptThree} = useContext(TemplateContext)

    // attempt to make this less repetitive
    const initTemplateInputs = 
    {
        prompt: props.prompt || '',
        positive: props.positive || '',
        negative: props.negative || '',
        isEntry: false
    }
    const [promptInputs, setPromptInputs] = useState(initTemplateInputs)
    const { postEntry } = useEntries()

    function handleChange(e) {
        const { name, value } = e.target
        setPromptInputs(prevTempInputs => ({...prevTempInputs, [name]: value}))
        console.log("inputs", promptInputs)
    }

    function handleSubmit(e) {
        e.preventDefault()
        postEntry(promptInputs)
        setPromptInputs(initTemplateInputs)
    }

    return(
        <div>
            <Navbar />
            <h3>Affirmation for Today:</h3> 
                <h4>{dailyAffirmation()}</h4>
            <form onSubmit={handleSubmit}>
               <h3>Date this entry:</h3>
                    <input 
                        type='date' 
                        id='date' 
                        name='date' 
                        onChange={handleChange}
                    /> 
                <h3>Location:</h3> 
                <input 
                    type='text'
                    name='location'
                    className='location'
                    value={promptInputs.location}
                    onChange={handleChange}
                    placeholder='Location'
                />
                <h3>Image:</h3>
               <input 
                    type='text'
                    name='image'
                    className='image'
                    value={promptInputs.image}
                    onChange={handleChange}
                    placeholder='IMG URL'
                />
                <h3>Mood Tracking:</h3>
                    <select
                        type='text'
                        name='mood'
                        className='mood'
                        // value={inputs.mood}
                        onChange={handleChange}
                        placeholder='Mood'
                    >
                        <option value=''>-Select Mood-</option>
                        <option value='rad'>😀rad</option>
                        <option value='good'>🙂good</option>
                        <option value='meh'>😐meh</option>
                        <option value='bad'>🙁bad</option>
                        <option value='awful'>😢awful</option>
                    </select>
                <br/>
                <h3>Journal Prompt:</h3>
                <p>{dailyPromptThree()}</p>
                <textarea
                    name='prompt'
                    className='journal-prompt'
                    rows='10'
                    cols='40'
                    wrap='soft'
                    onChange={handleChange}
                    placeholder='Type a response to the journal prompt here...'
                ></textarea>
                <h3>Positives:</h3>
                <textarea
                    name='positive'
                    className='postive-affirmations'
                    rows='10'
                    cols='40'
                    wrap='soft'
                    onChange={handleChange}
                    placeholder='Tell me something positive that happened today...'
                ></textarea>
                <h3>Negatives:</h3>
                <textarea
                    name='negative'
                    className='negative-affirmations'
                    rows='10'
                    cols='40'
                    wrap='soft'
                    onChange={handleChange}
                    placeholder='Tell me something negative that happened today...'
                ></textarea>
                <br/>
                <button>Submit</button>
                <button onClick={goBack}>Back</button>
            </form>
        </div>
    )
}

export default TemplateThree 