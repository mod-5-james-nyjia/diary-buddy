import React from "react"
import Navbar from "./Navbar"
import "../styles.css"
import { Link } from "react-router-dom"

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