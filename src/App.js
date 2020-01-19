import React from 'react';
import Header from "../src/components/Header"
import Information from "../src/components/Information"
import Navbar from "../src/components/Navbar"
import About from "../src/components/About"
import FavoriteRecipe from "./components/FavoriteRecipe"
import SignUpAlert from "./components/SignUpAlert"
import HomePage from "./components/HomePage"
import SignUpSuccess from './components/SignUpSuccess'
import CheckboxParent from './components/CheckBoxParent'
import { Route, Switch } from 'react-router-dom'
import HeroParent from "./components/HeroParent";


function App() {
  return (
    <React.Fragment>
      <HeroParent />
      <Navbar />
      <Information />
      <About />
      <Switch>
        <Route path='/HomePage' component={HomePage} />
        <Route path='/SignUpSuccess' component={SignUpSuccess} />
      </Switch>
      <FavoriteRecipe />
      <SignUpAlert />
      <CheckboxParent />
    </React.Fragment>
  );
}

export default App;
