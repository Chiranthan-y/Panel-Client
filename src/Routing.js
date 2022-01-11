import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import Login from './Screens/Login';
import PageNotFound from './Screens/PageNotFound';
import Register from './Screens/Register';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/payment' element={<h1>Paymet</h1>} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default Routing;
