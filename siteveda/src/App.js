import './App.css';
import Menu from './Menu.js';
import Home from './Composants/Home/Home.js';
import About from './Composants/About/About.js';
import Concert from './Composants/Concerts/Concert.js';
import Media from './Composants/Media/Media.js';
import Projects from './Composants/Projects/Project.js';
import Contact from "./Composants/Contact/Contact.js";
import Quartet from './Composants/Projects/Quartet';
import Lumens from './Composants/Projects/Lumens';
import Ann from './Composants/Projects/Ann';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {configure} from 'axios-hooks';
import Axios from 'axios';

function App() {

  const axios = Axios.create({
    baseURL: "http://localhost:4000/api",
  })
  const defaultOptions = {
    useCache : false,
  };
  configure({
    axios, defaultOptions
  });

  return (
    <div className="app">
      <div className="menuSticky">
        <Menu />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/concerts" element={<Concert/>}/>
          <Route path="/medias" element={<Media/>}/>
          <Route path="/projects" element={<Projects/>}>
            <Route path="/projects/quartet" element={<Quartet/>}/>
            <Route path="/projects/lumens" element={<Lumens/>}/>
            <Route path="/projects/ann" element={<Ann/>}/>
          </Route>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  );
}


export default App;
