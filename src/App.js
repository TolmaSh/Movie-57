import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Header from './pages/Header'
import HomePage from './pages/HomePage'
import ModalPage from './pages/ModalPage'
import './App.css';


function App() {
  return (
    <div className="App">
      
      <Router>
         <Switch>
        <Route exact path="/">
            <Header />
            <HomePage />
          </Route>
          <Route path="/modal">
            <Header />
            <ModalPage />
          </Route>
         
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
