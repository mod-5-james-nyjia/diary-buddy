import React, {useState} from "react"
import AddEntryForm from "./AddEntryForm"

function Entry(props) {
    const {date, location, entry, image, mood, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    
    return(
        <div className="entry">
            {!editToggle ?
                <>
                    <p>Date: {date}</p>
                    <p>Location: {location}</p>
                    <p>Entry: {entry}</p>
                    <p>Image: {image}</p>
                    <p>Mood: {mood}</p>
                    <button className="delete-btn" onClick={() => props.deleteEntry(_id)}>
                        Delete
                    </button> 
                    <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                </>
            :  
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
                    <button>Close</button>
                </>
            }   
        </div>
    )
}

export default Entry