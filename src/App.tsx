import React from 'react';
import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import Investments from './pages/Investments';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
function App() {
  return (
      <div>
        <Router>
          <Routes>
              <Route element={<Layout/>}>
                 <Route path='/' element={<Home/>}/>
                 <Route path='/investments' element={<Investments/>}/>
                 <Route path='/login' element={<Login/>}/>
                 <Route path='signup' element={<Signup/>}/>
              </Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
