import React from 'react';
import { Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import history from "./utils/history";
import Footer from './Components/Footer';
import Home from './Components/Home';
// importWeddingParty from './Components/BridalParty';
import Venue from './Components/Venue';
import Gallery from './Components/Gallery';
import FAQ from './Components/FAQ';
import RSVP from './Components/RSVP';
import WeddingParty from './Components/BridalParty';


function App() {

  console.log('What are you looking for in here?')

  return (
    <div className="App">
      <Router location={history.location} navigator={history}>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/wedding-party" element={<WeddingParty />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="*" element={<Home />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
