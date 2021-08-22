import React, {useState, useEffect} from "react"
import axios from "axios"
import AddEntryForm from './components/AddEntryForm'

function App() {
    // diary entries from users
    const [entries, setEntries] = useState([])

    useEffect(() => {
        getEntries()
    }, [])

    // get all entries
    function getEntries() {
        axios.get("/entries")
        .then(res => setEntries(res.data))
        // .then(res => setEntries(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <div>
            {/* Add blank entry form */}
            <div>
                <AddEntryForm 
                    submit={}
                    btnText='Submit Entry'
                />
            </div>
        </div>
    )
}

export default App