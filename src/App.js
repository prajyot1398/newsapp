import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Footer from './components/Footer';

export default class App extends Component {

  render() {
    return ( 
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* React will not reload the News component just by clicking Links. It needs to add unique keys to different componenet calls*/}
          <Route exact path="/" element={<News key="general" category="general"/>} />
          <Route exact path="/business" element={<News key="business" category="business"/>} />
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment"/>} />
          <Route exact path="/health" element={<News key="health" category="health"/>} />
          <Route exact path="/science" element={<News key="science" category="science"/>} />
          <Route exact path="/sports" element={<News key="sports" category="sports"/>} />
          <Route exact path="/technology" element={<News key="technology" category="technology"/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
     
    )
  }
}