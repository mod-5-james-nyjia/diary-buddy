import React, { useContext } from "react"
import Entry from "./Entry"
import Navbar from "./Navbar"
import { EntriesContext } from "../contexts/userEntryContext"
import "../styles.css"

function UserEntries() {
    const {allEntries} = useContext(EntriesContext)
    return (
        <>
            <Navbar />
            <div>{allEntries}</div>
        </>
    )
}

export default UserEntries