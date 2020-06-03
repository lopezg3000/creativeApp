import React from 'react';
import Header from './homepage/header';
import NavBar from './homepage/navbar';
import OurMenu from './homepage/ourMenu';
import OurPromise from './homepage/ourPromise';
import HealthyRewards from './homepage/healthyRewards';
import Locations from './homepage/locations';
import FranchiseInformation from './homepage/franchiseInformation';
// import Home from './components/home/home'
import './App.css';
// import HeroParent from "./components/roughComponents/HeroParent";


function App() {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
    </React.Fragment>
  );
}

export default App;

{/* <HeroParent />
  <div className="container">
    <Home />
  </div> */}