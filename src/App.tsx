import Navbar from "./components/Navbar/Main/Navbar";
import MainRoute from "./pages/MainRoute";

function App() {
  return (
    <>
      <Navbar />
      <div className="photo">
        <MainRoute />
      </div>
    </>
  );
}

export default App;
