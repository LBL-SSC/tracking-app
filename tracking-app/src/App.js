import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';

// components 👇
import NavBar from './Navigation/NavBar';
import Home from './Navigation/Home';
import About from './Navigation/About';
import Contact from './Navigation/Contact';

function App() {
  return (
    <div>
    <NavBar />

    <Route exact path='/' component={Home} />
    <Route path='/About' component={About} />
    <Route path='/Contact' component={Contact} />

  </div>
  );
}

export default App;
