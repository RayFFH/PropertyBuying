import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Best from './components/Best'
import Featured from './components/Featured'
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Best />
      <Featured/>
      <Footer/>
    </div>
  );
}

export default App;
