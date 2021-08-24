import React from "react"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"

function Templates() {
    return (
        <>
            <Navbar />
            <h1>Check out all these sick nasty templates!</h1>
            <h3 className='templates-list'>
                <ul>
                    <li><Link to="/template-one">Template 1</Link></li>
                    <li><Link to="/template-two">Template 2</Link></li>
                    <li><Link to="/template-three">Template 3</Link></li>
                </ul>
            </h3>
        </>
    )
}

export default Templates