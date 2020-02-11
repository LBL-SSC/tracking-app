import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';

// components 👇
import { Home, About, Contact, NavBar } from './Navigation';

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
