import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import About from './components/about';
import Header from './components/header';
import Home from './components/home';

const Routes = () => {
	console.log('Routes');
  return (
    <Router>
    	<div>
        <Header />
      	<Route exact path="/" component={Home}/>
      	<Route path="/about" component={About}/>
      </div>
    </Router>
  );
};

export default Routes;
