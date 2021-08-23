import React from "react"
import Navbar from "./Navbar"

function Templates() {
    return (
        <>
            <Navbar />
            <h1>Check out all these sick nasty templates!</h1>
            <ul className='templates-list'>
                <li><button>Template 1</button></li>
                <li><button>Template 2</button></li>
                <li><button>Template 3</button></li>
            </ul>
        </>
    )
}

export default Templates