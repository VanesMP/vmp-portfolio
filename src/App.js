import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./Pages/Homepage";


function App() {
  return (
    <Router basename="/my-portfolio-react">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </Router>
    // <div className="App">
    //   <Background/>
    // </div>
  );
}

export default App;
