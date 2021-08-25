import React, {createContext, useState} from "react"
import {useHistory} from "react-router-dom"
import affirmations from "../components/affirmationData.js"
import journalPrompts from "../components/promptsData.js"

const TemplateContext = createContext()

function TemplateContextProvider(props) {
    const history = useHistory()
    const day = {weekday: 'long'};
    const printDay = new Date().toLocaleTimeString('en-us', day);
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

    // const templateInputs = 
    // {
    //     positive: props.positive || '',
    //     negative: props.negative || '',
    //     mood: props.mood || ''
    // }

    // const [inputs, setInputs] = useState(templateInputs)

    //  function handleChange(e) {
    //     const { name, value } = e.target
    //     setInputs(prevInputs => ({...prevInputs, [name]: value}))
    //     console.log("inputs", inputs)
    // }

    return (

        <TemplateContext.Provider value={{
           goBack,
           printDay,
           dailyAffirmation,
           dailyPrompt,
        //    handleChange
        }}>{props.children}
        </TemplateContext.Provider>
        
    )
}

export {TemplateContextProvider, TemplateContext}