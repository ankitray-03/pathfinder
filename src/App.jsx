import { useParams } from "./context/context";
import "./App.css";
import Navbar from "./components/Navbar/Nvabar";
import Grid from "./components/Grid/Grid";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Grid></Grid>
    </div>
  );
}

export default App;
