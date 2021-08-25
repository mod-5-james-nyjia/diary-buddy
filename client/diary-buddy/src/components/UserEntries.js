import React from "react"
import Entry from "./Entry"
import Navbar from "./Navbar"
import { EntriesContext } from "../contexts/userEntryContext"
import "../styles.css"
import { useEntries } from "../contexts/userEntryContext"

function UserEntries() {
    const {allEntries} = useEntries()
    return (
        <>
            <Navbar />
            <div className='content'>{allEntries}</div>
        </>
    )
}

export default UserEntries