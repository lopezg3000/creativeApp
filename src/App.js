import React from 'react';
import Home from './components/home/home'
import './App.css';
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
    <div className="container">
      <Home />
    </div>
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