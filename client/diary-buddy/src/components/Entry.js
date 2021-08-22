import React from "react"

function Entry(props) {
    const {title, _id} = props
    return(
        <div className="entry">
            <h1>Title: {title}</h1>
            <p></p>
            <button className="delete-btn" onClick={() => props.deleteEntry(_id)}>
                Delete
            </button>       
        </div>
    )
}

export default Entry