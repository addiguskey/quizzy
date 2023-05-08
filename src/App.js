import React from "react";

import "./App.css";
import Home from "./components/Home";
import Questions from "./components/questions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/questions" element={<Questions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
