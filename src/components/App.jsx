import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

import './App.scss';

const App = () => (
  <div className="app">
    <p>App hot load</p>

    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
  </div>
);

export default App;
