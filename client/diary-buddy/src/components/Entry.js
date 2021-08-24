import React, {useState} from "react"
import AddEntryForm from "./AddEntryForm"
import { useEntries } from "../contexts/userEntryContext"

function Entry(props) {
    const {date, location, entry, image, mood, _id} = props
    const {deleteEntry} = useEntries()
    const [editToggle, setEditToggle] = useState(false)

    function toggle(){
        setEditToggle(prevToggle => !prevToggle)
    }
    
    return(
        <div className="entry">
            <p>Date: {date}</p>
            <p>Location: {location}</p>
            <p>Entry: {entry}</p>
            <p>Image: {image}</p>
            <p>Mood: {mood}</p>
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