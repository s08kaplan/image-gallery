import React from "react";
import "./App.css";
import ShowImages from "./components/ShowImages";

function App() {

  return (
    <>
      <h1 style={{color:"blueviolet"}}>Image Gallery</h1>
      <div className="photo">
        <ShowImages />
      </div>
    </>
  );
}

export default App;
