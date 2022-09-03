import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./Pages/Homepage";


function App() {
  return (
    <Router basename="/vmp-portfolio">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;