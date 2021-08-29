import React from 'react';
import LandingPage from "./components/LandingPage/LandingPage";
import  Navbar  from "./components/Navbar/Navbar"
import './App.css';
import useWindowDimensions from './components/useWindowDimensions';

function App() {
    var clientTime = new Date();
    var currentTimeString = clientTime.getHours();
    const { height, width } = useWindowDimensions();

    return (
      <div className="App">
            <Navbar />
            <LandingPage />
      </div>
      
  );
}

	
export default App;
