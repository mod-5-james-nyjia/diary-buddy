import React from "react"
import Entry from "./Entry"
import Navbar from "./Navbar"
import { useEntries } from "../contexts/userEntryContext"

function UserEntries() {
    const {allEntries} = useEntries()
    return (
        <>
            <Navbar />
            <div>{allEntries}</div>
        </>
    )
}

export default UserEntries