import Navbar from "./components/Navbar/Main/Navbar";
import ShowImages from "./components/ShowImages";

function App() {


  return (
     <>
     <Navbar/>
      <h1 style={{color:"blueviolet"}}>Image Gallery</h1>
      <div className="photo">
        <ShowImages />
      </div>
    </>
  )
}

export default App
