import React, {useState} from "react"
import AddEntryForm from "./AddEntryForm"
import "../styles.css"
import { useEntries } from "../contexts/userEntryContext"

function Entry(props) {
    const {date, location, entry, isEntry, image, mood, _id, prompt, positive, negative} = props
    const {deleteEntry, editEntry} = useEntries()
    const [editToggle, setEditToggle] = useState(false)

    function toggle(){
        setEditToggle(prevToggle => !prevToggle)
    }
    console.log(props,"props")
    console.log(prompt, "prompt")

    return(
        <div className="entry">
            <div className='entry-image-container'>{image === '' ? <>{null}</> : <img src={image} alt='img' className='entry-image'></img>}</div>
            <p>{date === null ? <>{null}</> : <><b>Date:</b> {date}</> }</p>
            <p>{{location}.length > 0 ? <><b>Location:</b> {location}</> : <>{null}</>}</p>
            <div>{image === '' ? <>{null}</> : <img src={image} alt="img" className='entry-image'></img>}</div>
            <p>{mood === '' ? null : mood === undefined ? null : <><b>Mood</b>: {mood}</> }</p>
            {/* <p>{!isEntry ? <>Prompt: {prompt}</> : <><b>Entry:</b> {entry}</>}</p> */}
            <p>Entry: {entry}</p>
            <p>{{positive}.length > 0 ? <><b>Positives</b>: {positive}</> : <>{null}</>}</p>
            <p>{{negative}.length > 0 ? <><b>Negatives</b>: {negative}</> : <>{null}</>}</p>            
        
            <button className="delete-btn" onClick={() => deleteEntry(_id)}>              
                Delete
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
                        // btnText="Submit Edit"
                        submit={editEntry}
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