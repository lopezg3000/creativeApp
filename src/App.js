import React from 'react';
import Home from './components/home/home'
import './App.css';
import HeroParent from "./components/roughComponents/HeroParent";
// import Header from "./components/roughComponents/Header"
// import Information from "./components/roughComponents/Information"
// import Home from "./components/home/Home"
// import About from "./components/roughComponents/About"
// import FavoriteRecipe from "./components/roughComponents/FavoriteRecipe"
// import SignUpAlert from "./components/roughComponents/SignUpAlert"
// import HomePage from "./components/roughComponents/HomePage"
// import SignUpSuccess from './components/roughComponents/SignUpSuccess'
// import CheckboxParent from './components/CheckBoxParent'
// import { Route, Switch } from 'react-router-dom'
// import HeroParent from "./components/roughComponents/HeroParent";



function App() {
  return (
    <React.Fragment>
      <HeroParent />
      <div className="container">
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;

  // <React.Fragment>
  //   <Home />
  //   {/* <Information /> */}
  //   {/* <About />
  //   <Switch> */}
  //   {/* <Route path='/HomePage' component={HomePage} />
  //     <Route path='/SignUpSuccess' component={SignUpSuccess} />
  //   </Switch> */}
  //   {/* <FavoriteRecipe />
  //   <SignUpAlert />
  //   <CheckboxParent /> */}
  // </React.Fragment>