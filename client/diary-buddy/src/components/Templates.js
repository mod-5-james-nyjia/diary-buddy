import React from "react"
import Navbar from "./Navbar"
import "../styles.css"
import { Link } from "react-router-dom"

function Templates() {
    return (
        <>
            <Navbar />
            <div className='content'>
            <h2 className='content-h2'>Don't know where to start?</h2>
            <h3 className='content-h3'>Why not consider one of these templates?</h3>
            <h3 className='templates-list'>
                <ul>
                    <li><Link to="/template-one">Template 1</Link></li>
                    <li><Link to="/template-two">Template 2</Link></li>
                    <li><Link to="/template-three">Template 3</Link></li>
                </ul>
            </h3>
            </div>
        </>
    )
}

export default Templates