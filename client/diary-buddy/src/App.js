import React, {useState, useEffect} from "react"
import axios from "axios"
import Entry from "./components/Entry"
import AddEntryForm from "./components/AddEntryForm"

function App() {
    const [entries, setEntries] = useState([])

    function getEntries() {
        axios.get("/entries")
        // .then(res => setEntries(res.data))
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

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

    useEffect(() => {
        getEntries()
    }, [])

    return (
        <div className="entry-container">
            {/* Add blank entry form */}
            <AddEntryForm 
                submit={postEntry}
                btnText='Submit Entry'
            />
            {entries.map(entry => 
                <Entry 
                    {...entry} 
                    key={entry.title}
                    deleteEntry={deleteEntry}
                    editEntry={editEntry}
                />
            )}   
        </div>
    )
}

export default App