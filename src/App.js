import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/Navbar";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div class="whole-page">
          <Route exact path="/" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/>
        </div>
    </div>
    </Router>
  );
}

export default App;