import React, {useState} from "react"
import { Switch, Route } from "react-router-dom"
import axios from "axios"
import Home from "./components/Home"
import FilteredEntries from "./components/FilteredEntries"
import AddEntryForm from "./components/AddEntryForm"
import UserEntries from "./components/UserEntries"
import Templates from "./components/Templates"

function App() {
    const [entries, setEntries] = useState([])

    function postEntry(newEntry) {
        axios.post("/entries", newEntry)
            .then(res => {
                setEntries(prevEntries => [...prevEntries, res.data])
            })
            // .then(res => console.log(res.data))
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

    return (
        <>
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route exact path='/templates'><Templates /></Route>
                <Route exact path='/user-entries'><UserEntries /></Route>
                <Route exact path='/search'><FilteredEntries /></Route>
                <Route exact path='/new-entry'><AddEntryForm /></Route>
            </Switch>
            
        </>
    )
}

export default App