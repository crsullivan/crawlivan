import React from 'react';
import { Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import history from "./utils/history";
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router location={history.location} navigator={history}>
        <Header />
          <Routes>
            <Route exact path="/" component={Home} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
