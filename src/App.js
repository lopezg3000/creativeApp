import React from 'react';
import Header from './homepage/header';
import NavBar from './homepage/navbar';
import Menu from './homepage/menu';
import Promise from './homepage/promise';
import HealthyRewards from './homepage/healthyRewards';
import Locations from './homepage/locations';
import Franchise from './homepage/franchise';
// import Home from './components/home/home'
import './App.css';
// import HeroParent from "./components/roughComponents/HeroParent";


function App() {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <Route path='/menu' component={OurMenu} />
    </React.Fragment>
  );
}

export default App;

{/* <HeroParent />
  <div className="container">
    <Home />
  </div> */}