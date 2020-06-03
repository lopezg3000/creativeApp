import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './homepage/header';
import NavBar from './homepage/navbar';
import Home from './homepage/homepage';
import Menu from './homepage/menu';
import OurPromise from './homepage/ourPromise';
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
      <main className='container'>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/menu' component={Menu} />
          <Route path='/ourPromise' component={OurPromise} />
          <Route path='/healthyRewards' component={HealthyRewards} />
          <Route path='/locations' component={Locations} />
          <Route path='/franchise' component={Franchise} />
          <Route path='/not-found' component={NotFound} />
          <Redirect from='/' exact to='/home' />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

{/* <HeroParent />
  <div className="container">
    <Home />
  </div> */}