import React, {useState, useEffect} from "react"
import axios from "axios"

function App() {
    // diary entries from users
    const [entries, setEntries] = useState([])

    useEffect(() => {
        getEntries()
    }, [])

    // get all entries
    function getEntries() {
        axios.get("/entries")
        .then(res => console.log(res))
        // .then(res => setEntries(res.data))
        .catch(err => console.log(err))
    }

    return (
        <div>
            
        </div>
    )
}

export default App