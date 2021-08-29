import React from 'react';
import './App.css';
import useWindowDimensions from './components/useWindowDimensions';
import {Router, Switch, Route} from 'react-router-dom';
import history from "./components/history";

import { link } from "./components/Navbar/MenuItem"
import  Navbar  from "./components/Navbar/Navbar";

import DonationPage from "./components/DonationPage/DonationPage.js";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
    var clientTime = new Date();
    var currentTimeString = clientTime.getHours();
    const { height, width } = useWindowDimensions();

    return (
      <Router history={history}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path={link[0]} exact component={LandingPage} />
          <Route path={link[4]} component={DonationPage} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
