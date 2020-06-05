import React from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>To Do List</h1>
            </header>
            <Todo />
        </div>
    );
}

export default App;
