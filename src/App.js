import React from 'react';
import { Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import history from "./utils/history";
import Footer from './Components/Footer';
import Home from './Components/Home';
import BridalParty from './Components/BridalParty';
import Venue from './Components/Venue';
import Gallery from './Components/FAQ';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Router location={history.location} navigator={history}>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/bridal-party" element={<BridalParty />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/faq" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
