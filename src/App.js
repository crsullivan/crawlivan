import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Header from './Components/Header';
import history from "./utils/history";
import Footer from './Components/Footer';

function App() {
  return (
      <div className="App">
        <Header />
        <Footer />
      </div>
  );
}

export default App;
