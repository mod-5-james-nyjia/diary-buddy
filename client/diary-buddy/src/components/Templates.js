import React from "react"
import Navbar from "./Navbar"
import "../styles.css"

function Templates() {
    return (
        <>
            <Navbar />
            <h1>Don't know where to start?</h1>
            <h3>Why not consider one of these templates?</h3>
            <ul className='templates-list'>
                <li><button>Template 1</button></li>
                <li><button>Template 2</button></li>
                <li><button>Template 3</button></li>
            </ul>
        </>
    )
}

export default Templates