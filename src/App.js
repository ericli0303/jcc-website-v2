import React from 'react';
import './App.css';
import useWindowDimensions from './components/useWindowDimensions';
import {Router, Switch, Route} from 'react-router-dom';
import history from "./components/history";

import { link } from "./components/Navbar/MenuItem"
import  Navbar  from "./components/Navbar/Navbar";
import StyledBackground from "./components/Utils/Background/Background.styles";

import DonationPage from "./components/DonationPage/DonationPage.js";
import LandingPage from "./components/LandingPage/LandingPage";
import MailchimpForm from "./components/MailPage/MailchimpForm";
import PhotoPage from './components/PhotoPage/PhotoPage';
import GalleryPage from './components/PhotoPage/GalleryPage';


function App() {
    var clientTime = new Date();
    // var currentTimeString = clientTime.getHours();
    // const { height, width } = useWindowDimensions();

    return (
      <Router history={history}>
      <StyledBackground className="App">
        <Navbar />
        <Switch>
          <Route path={link[0]} exact component={LandingPage} />
          <Route path={link[1]} exact component={MailchimpForm} />
          <Route path={link[2]} exact component={PhotoPage} />
          <Route path={`${link[2]}/album/:id`} exact component={GalleryPage} />
          <Route path={link[4]} component={DonationPage} />
        </Switch>
      </StyledBackground>
    </Router>
  );
}


export default App;
