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

    function randomAffirmation() {
        return affirmations[Math.floor(Math.random() * affirmations.length)];
        
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
           randomAffirmation,
           handleChange
        }}>{props.children}
        </TemplateContext.Provider>
        
    )
}

export {TemplateContextProvider, TemplateContext}