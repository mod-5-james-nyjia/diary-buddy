import React, {useState} from "react"
import AddEntryForm from "./AddEntryForm"
import "../styles.css"
import { useEntries } from "../contexts/userEntryContext"

function Entry(props) {
    const {date, location, entry, image, mood, _id, prompt, positive, negative} = props
    const {deleteEntry} = useEntries()
    const [editToggle, setEditToggle] = useState(false)

    function toggle(){
        setEditToggle(prevToggle => !prevToggle)
    }
    console.log(props,"props")
    
    return(
        <div className="entry">
            <p><b>Date:</b> {date}</p>
            <p><b>Location:</b> {location}</p>
            <p>Image: {image}</p>
            <p>Mood: {mood}</p>
            {/* Possibly create a conditional statement that says "If an entry is submitted, then show the entry instead of the prompt and vice versa */}
            <p>Entry: {entry}</p>
            <p>Prompt: {prompt}</p>
            <p>Positives: {positive}</p>
            <p>Negatives: {negative}</p>
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