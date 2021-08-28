import React, {useState} from "react"
import AddEntryForm from "./AddEntryForm"
import "../styles.css"
import { useEntries } from "../contexts/userEntryContext"

function Entry(props) {
    const {date, location, entry, isEntry, image, mood, _id, prompt, positive, isPositive, negative, isNegative} = props
    const {deleteEntry} = useEntries()
    const [editToggle, setEditToggle] = useState(false)

    // positive / negative display on the entries page and the submit button on the home page,

    function toggle(){
        setEditToggle(prevToggle => !prevToggle)
    }
    console.log(props,"props")
    console.log(prompt, "prompt")
    console.log(entry, "entry")
    console.log(positive, "positive")
    console.log(negative, "negative")
    console.log(isNegative, "isNeg")
    console.log(isPositive, "isPos")
    return(
        <div className="entry">
            <p><b>Date:</b> {date}</p>
            <p><b>Location:</b> {location}</p>
            <p>Image: {image}</p>
            <p>Mood: {mood}</p>
            <p>{!isEntry ? <>Prompt: {prompt}</> : <>Entry: {entry}</>}</p>
            <p>Positives: {positive}</p>
            <p>Negatives: {negative}</p>
            {/* <p>{isNegative ? <>Negatives: {negative}</> : <></>}</p>
            <p>{isPositive ? <>Positives: {positive}</> : <></>}</p> */}
        
            {/* <button className="delete-btn" onClick={() => props.deleteEntry(_id)}> */}
            <button className="delete-btn" onClick={() => deleteEntry()}>              
                Delete
            </button> 
            <button className="edit-btn" onClick={() => toggle()}>
                Edit
            </button>

            {editToggle === true ?
                <>
                    <AddEntryForm 
                        date={date}
                        location={location}
                        entry={entry}
                        image={image}
                        mood={mood}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={props.editEntry}
                    /> 
                    <button onClick={() => toggle()}>Close</button>
                </>
                :  
                    null  
            }   
        </div>
    )
}

export default Entry