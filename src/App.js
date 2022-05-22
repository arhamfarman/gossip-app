import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Gossips from "./components/Gossip/Gossips";
import Header from "./components/layout/Header";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddGossip from "./components/Gossip/AddGossip";

function App() {
  return (
    <Router>
      <div className="App">
        <Header branding={"Gossip App"} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Gossips />} />
            <Route exact path="/gossip/add" element={<AddGossip />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
