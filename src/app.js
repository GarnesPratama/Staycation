import "./index.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Details from "./Details";
import Step_1 from "./booking/step-1";
import Step_2 from "./booking/step-2";
import Succes from "./booking/succes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/book" element={<Step_1 />} />
        <Route path="/bank" element={<Step_2 />} />
        <Route path="/succes" element={<Succes />} />
      </Routes>
    </div>
  );
}

export default App;
