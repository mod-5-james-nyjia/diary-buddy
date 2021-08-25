import React, {useContext} from "react"
import {TemplateContext} from "../contexts/templateContext"
import Navbar from "./Navbar"

function TemplateThree() {
    const {goBack, printDay, dailyAffirmation, dailyPrompt, handleChange} = useContext(TemplateContext)
    
 
    return(
        <div>
            <Navbar />
            <h2>Today is {printDay}</h2>
            <h3>Affirmation for Today:</h3> 
                <p>{dailyAffirmation()}</p>
            <h3>Mood Tracking:</h3>
                <select
                    type='text'
                    name='mood'
                    className='mood'
                    // value={inputs.mood}
                    // onChange={handleChange}
                    placeholder='Mood'
                >
                    <option value='rad'>😀rad</option>
                    <option value='good'>🙂good</option>
                    <option value='meh'>😐meh</option>
                    <option value='bad'>🙁bad</option>
                    <option value='awful'>😢awful</option>
                </select>
            <br/>
            <h3>Journal Prompt:</h3>
                <p>{dailyPrompt()}</p>
                <textarea 
                    type='text'
                    name='prompt'
                    className='journal-prompt'
                    // value={inputs.postitive}
                    // onChange={handleChange}
                    placeholder='Type a response to the journal prompt here...'
                />
            <h3>Positives:</h3>
            <textarea 
                type='text'
                name='positive'
                className='postive-affirmations'
                // value={inputs.postitive}
                // onChange={handleChange}
                placeholder='Tell me something positive that happened today...'
            />
            <h3>Negatives:</h3>
            <textarea 
                type='text'
                name='negative'
                className='negative-affirmations'
                // value={inputs.negative}
                // onChange={handleChange}
                placeholder='Tell me something negative that happened today...'
            />
            <br/>
            <button>Submit</button>
            <button onClick={goBack}>Back</button>
        </div>
    )
}

export default TemplateThree 