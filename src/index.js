import React from "react"
import ReactDOM from "react-dom"

// render(parameter 1, parameter 2)
// parameter 1: What to display
// parameter 2: Where to display (in this case the div with id root. This can be found in index.html in public directory)

// Component file
import TodoContainer from "./components/TodoContainer"
// wrapping the component with React.StrictMode
ReactDOM.render(<React.StrictMode><TodoContainer /></React.StrictMode>, document.getElementById("root"))

