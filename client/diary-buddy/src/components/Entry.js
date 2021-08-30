import React, {useState} from "react"
import AddEntryForm from "./AddEntryForm"
import "../styles.css"
import { useEntries } from "../contexts/userEntryContext"

function Entry(props) {
    const {date, location, entry, isEntry, image, isImage, mood, _id, prompt, positive, negative, text } = props
    const {deleteEntry, editEntry} = useEntries()
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
    console.log(date)
    console.log(mood)
    
    return(
        <div className="entry">
            <p>{date === null ? <>{null}</> : <><b>Date:</b> {date}</> }</p>
            {/* date is a string */}
            <p>{{location}.length > 0 ? <><b>Location:</b> {location}</> : <>{null}</>}</p>
            {/* location is a string and is false*/}
            <div>{image === '' ? <>{null}</> : <img src={image} alt="img" className='entry-image'></img>}</div>
            <p>{mood === '' ? null : mood === undefined ? null : <><b>Mood</b>: {mood}</> }</p>
            <p>{!isEntry ? <>Prompt: {prompt}</> : <><b>Entry:</b> {entry}</>}</p>
            <p>{{positive}.length > 0 ? <><b>Positives</b>: {positive}</> : <>{null}</>}</p>
            <p>{{negative}.length > 0 ? <><b>Negatives</b>: {negative}</> : <>{null}</>}</p>            

            {/* <p>{text === "" ? null : <>Text: {text}</>}</p> */}
        
            <button className="delete-btn" onClick={() => deleteEntry(_id)}>              
                Delete
                {/* {console.log(deleteEntry(_id), "delete")} */}
            </button> 
            <button className="edit-btn" onClick={() => toggle()}>
                Edit
            </button>
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
                        submit={editEntry}
                    /> 
                    <button onClick={() => console.log(editEntry(), "EDit")}>Submit Edit</button>
                    <button onClick={() => toggle()}>Close</button>
                </>
                :  
                    null  
            }   
        </div>
    )
}

export default Entry