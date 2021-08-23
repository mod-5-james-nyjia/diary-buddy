import React, { useEffect, useState, createContext } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Entry from "../components/Entry"
import "../styles.css"

const EntriesContext = createContext()

function EntriesContextProvider(props) {
    const [entries, setEntries] = useState([])
    const [search, setSearch] = useState('')
    const [searchData, setSearchData] = useState([])

    function getEntries() {
        axios.get("/entries")
        .then(res => setEntries(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

    useEffect(() => {
        getEntries()
    }, [])

    function postEntry(newEntry) {
        axios.post("/entries", newEntry)
            .then(res => {
                setEntries(prevEntries => [...prevEntries, res.data])
            })
            .catch(err => console.log(err))
    }

    function deleteEntry(entryId) {
        axios.delete(`/entries/${entryId}`)
            .then(res => {
                setEntries(prevEntries => prevEntries.filter(entry => entry.id !== entryId))
            })
            .catch(err => console.log(err))
    }

    function editEntry(updates, entryId) {
        axios.put(`/entries/${entryId}`, updates)
            .then(res => {
                setEntries(prevEntries => prevEntries.map(entry => entry._id !== entry.Id ? entry : res.data))
            })
            .catch(err => console.log(err))
    }

    const allEntries = entries.map(entry => 
        <Entry 
            {...entry} 
            key={entry.title}
            deleteEntry={deleteEntry}
            editEntry={editEntry}
        />
    )

    // For Entry Search
    // const filterEntries = (e) => {
    //     axios
    //         .get("/entries")
    // }

    const searchResults = searchData.length > 0 ? 
        searchData.map(entry => (
            <li className='search-entry-li' key={entry._id}>
                <Link to={`/entries/${entry._id}`}>{entry.date}</Link>
            </li>
        ))
    :
        <>
            <h3>No results</h3>
        </>

    return (
        <EntriesContext.Provider value={{
            allEntries,
            searchResults,
            search,
            setSearch,
            searchData,
            setSearchData
        }}>{props.children}
        </EntriesContext.Provider>
    )
}


export { EntriesContextProvider, EntriesContext }