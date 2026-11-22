import Navbar from "./components/Navbar/Main/Navbar";
import MainRoute from "./pages/MainRoute";

function App() {


  return (
     <>
     <Navbar/>
      <h1 style={{color:"blueviolet"}}>Image Gallery</h1>
      <div className="photo">
        <MainRoute/>
      </div>
    </>
  )
}

export default App
