import React, {useState} from "react"
import AddEntryForm from "./AddEntryForm"
import "../styles.css"
import { useEntries } from "../contexts/userEntryContext"

function Entry(props) {
    const {date, location, entry, isEntry, image, isImage, mood, _id, prompt, positive, negative, text } = props
    const {deleteEntry} = useEntries()
    const [editToggle, setEditToggle] = useState(false)

    // positive / negative display on the entries page and the submit button on the home page,

    function toggle(){
        setEditToggle(prevToggle => !prevToggle)
    }
    console.log(props,"props")
    // console.log(prompt, "prompt")
    console.log(entry, "entry")
    console.log(positive, "positive")
    console.log(negative, "negative")
    console.log(date)
    console.log(mood)
    
    return(
        <div className="entry">
            <div className='entry-image-container'>{image === '' ? <>{null}</> : <img src={image} className='entry-image'></img>}</div>
            <p>{date === null ? <>{null}</> : <><b>Date:</b> {date}</> }</p>
            {/* date is a string */}
            <p>{location === '' ? null : location === undefined ? null : <><b>Location:</b> {location}</>}</p>
            {/* location is a string and is false*/}
            <p>{mood === '' ? null : mood === undefined ? null : <><b>Mood</b>: {mood}</> }</p>
            <p>{!isEntry ? <>Prompt: {prompt}</> : <><b>Entry:</b> {entry}</>}</p>
            <p>{positive === '' ? null : positive === undefined ? null : <><b>Positives</b>: {positive}</>}</p>
            <p>{negative === '' ? null : negative === undefined ? null : <><b>Negatives</b>: {negative}</>}</p>
            
            {/* <p>{text === "" ? null : <>Text: {text}</>}</p> */}
        
            {/* <button className="delete-btn" onClick={() => props.deleteEntry(_id)}> */}
            <div className='entry-btn-container'>
                <button className="delete-btn" onClick={() => deleteEntry(_id)}>              
                    Delete
                </button> 
                <button className="edit-btn" onClick={() => toggle()}>
                    Edit
                </button>
            </div>
            <hr/>

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