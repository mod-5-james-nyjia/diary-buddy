import React, {createContext, useState} from "react"
import {useHistory} from "react-router-dom"
import affirmations from "../components/affirmationData.js"
import journalPrompts from "../components/promptsData.js"
// import { useEntries } from "../contexts/userEntryContext"

const TemplateContext = createContext()

function TemplateContextProvider(props) {
    const history = useHistory()
    const dateForToday = new Date();
    const dayOfMonth = dateForToday.getDate();

    function goBack() {
        history.goBack()
    }

    function dailyAffirmation() {
        // new Date() is a date constructor that gives you the month, day, year, hours, seconds, and milliseconds
        // The getDate() method returns the day of the month for the specified date according to local time.
        return affirmations.map(message => 
            message.date === dayOfMonth ? message.affirmation : null 
        )
    }

    function dailyPrompt() {
        return journalPrompts.map(journal => 
            journal.date === dayOfMonth ? journal.prompts : null 
        )
    }
    
    return (

        <TemplateContext.Provider value={{
            // handleSubmit,
            // handleChange,
            // promptInputs,
            goBack,
            dailyAffirmation,
            dailyPrompt,
        
        }}>{props.children}
        </TemplateContext.Provider>
        
    )
}

export {TemplateContextProvider, TemplateContext}