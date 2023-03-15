import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextEditor from "./components/TextEditor";
import Navbar from "./components/Navbar";

function App() {
  return (
   
    <div className="App">
     <Navbar />
      <div className="editor">
    <h2 className="h2">Text Editor</h2>
        <TextEditor />
      </div>
    </div>
  );
}

export default App;

