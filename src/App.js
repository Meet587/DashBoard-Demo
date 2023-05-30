import "./App.css";
import MainDash from "./Components/MainDash/MainDash";
import RightSide from "./Components/RightSide/RightSide";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;