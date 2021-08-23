import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import { EntriesContextProvider } from "./contexts/userEntryContext"
import "./styles.css"

ReactDOM.render(
    <Router>
        <EntriesContextProvider>
            <App />
        </EntriesContextProvider>
    </Router>, 
    document.getElementById("root")
)