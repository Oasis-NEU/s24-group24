import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import services from './components/pages/services';
import products from './components/pages/product';
import signup from './components/pages/signup';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/services' exact Component={services} />
        <Route path='/products' exact Component={products} />
        <Route path='/sign-up' exact Component={signup} />
      </Routes>
    </Router> 
    </>
  );
}

export default App;
