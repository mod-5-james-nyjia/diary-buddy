import React, { useContext } from "react"
import { useEntries } from "../contexts/userEntryContext"
import Navbar from "../components/Navbar"
import "../styles.css"

function FilteredEntries() {
    const {searchResults} = useEntries()

    return (
        <>
            <Navbar />
            <div>
                <h1>Search results</h1>
                <ul>{searchResults}</ul>
            </div>
        </>
    )
}

export default FilteredEntries