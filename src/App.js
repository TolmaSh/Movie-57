import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Header from './pages/Header'
import HomePage from './pages/HomePage'
import './App.css';


function App() {
  const [modalPage, setModalPage] = useState(null)
  return (
    <div className="App">
      
      <Router>
         <Switch>
        <Route exact path="/">
            <div className={modalPage == null ? `` : `modal-menu`}><Header /></div>
            <HomePage 
            setModalPage={setModalPage}
            modalPage={modalPage}
            />
          </Route>
          {/* <Route path="/favorite">
            <Header />
            <ModalPage />
          </Route> */}
         
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
