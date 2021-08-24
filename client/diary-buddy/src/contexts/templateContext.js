import React, {createContext, useState} from "react"
import {useHistory} from "react-router-dom"
import affirmations from "../components/affirmationData.js"

const TemplateContext = createContext()

function TemplateContextProvider(props) {
    const history = useHistory()
    const day = {weekday: 'long'};
    const printDay = new Date().toLocaleTimeString('en-us', day);

    function goBack() {
        history.goBack()
    }

    function dailyAffirmation() {
        // new Date() is a date constructor that gives you the month, day, year, hours, seconds, and milliseconds
        // The getDate() method returns the day of the month for the specified date according to local time.
        const dateForToday = new Date();
        const day = dateForToday.getDate();

        return affirmations.map(message => 
            message.date === day ? message.affirmation : null 
        )
    }

    const templateInputs = 
    {
        positive: props.positive || '',
        negative: props.negative || '',
        mood: props.mood || ''
    }

    const [inputs, setInputs] = useState(templateInputs)

     function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
        console.log("inputs", inputs)
    }

    return (

        <TemplateContext.Provider value={{
           goBack,
           printDay,
           dailyAffirmation,
           handleChange
        }}>{props.children}
        </TemplateContext.Provider>
        
    )
}

export {TemplateContextProvider, TemplateContext}