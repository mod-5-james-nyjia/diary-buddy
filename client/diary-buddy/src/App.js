import React, {useState, useEffect} from "react"
import axios from "axios"
import Entry from "./components/Entry"
import AddEntryForm from "./components/AddEntryForm"

function App() {
    const [entries, setEntries] = useState([])

    function getEntries() {
        axios.get("/entries")
        .then(res => console.log(res))
        // .then(res => setEntries(res.data))
        .catch(err => console.log(err))
    }

    function postEntry(newEntry) {
        axios.post("/entries", newEntry)
            .then(res => {
                setEntries(prevEntries => [...prevEntries, res.data])
            })
            .catch(err => console.log(err))
    }

    function deleteEntry(entryId) {
        axios.delete(`/entries/${entryId}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getEntries()
    }, [])

    return (
        <div className="entry-container">
            <AddEntryForm 
                postEntry={postEntry}
            />
            {entries.map(entry => 
                <Entry 
                    {...entry} 
                    key={entry.title}
                    deleteEntry={deleteEntry}
                />
            )}   
        </div>
    )
}

export default App