import React, {useState} from "react"
import AddEntryForm from "./AddEntryForm"
import "../styles.css"
import { useEntries } from "../contexts/userEntryContext"

function Entry(props) {
    const {date, location, entry, isEntry, image, isImage, mood, isMood, _id, prompt, positive, negative, text } = props
    const {deleteEntry} = useEntries()
    const [editToggle, setEditToggle] = useState(false)

    // positive / negative display on the entries page and the submit button on the home page,

    function toggle(){
        setEditToggle(prevToggle => !prevToggle)
    }
    console.log(props,"props")
    // console.log(prompt, "prompt")
    // console.log(entry, "entry")
    console.log(positive, "positive")
    console.log(negative, "negative")
    return(
        <div className="entry">
            <p><b>Date:</b> {date}</p>
            {/* date is a string */}
            {/* <p><b>Location:</b> {location}</p> */}
            <p>{location === "" ? <></> : <><b>Location:</b> {location}</>}</p>
            {/* location is a string and is false*/}
            <p>{!isImage ? <>Image: {image}</> : null}</p>
            {/* <p>{isMood ? <>Mood: {mood}</> : null}</p> */}
            <p>{mood === "" ? null : <>Mood: {mood}</>}</p>
            
            <p>{!isEntry ? <>Prompt: {prompt} </> : <>Entry: {entry}</>}</p>
            <p>{negative === "" ? null : <>Negatives: {negative}</>}</p>
            <p>{positive === "" ? null : <>Positives: {positive}</>}</p>
            <p>{text === "" ? null : <>Text: {text}</>}</p>

            {console.log(positive, "isPoshh")}
        
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