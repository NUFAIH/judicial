import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './homepg'
import Login from './LoginPage'
import Cases from './cases';

const App = () =>{

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/' element={<Home/>}/>
        <Route path='/login/judge/addcases' element={<Cases/>}/>
      </Routes>
    </Router>
  );
};


export default App
