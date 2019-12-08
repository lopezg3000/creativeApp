import React from 'react';
import Header from "../src/components/Header"
import Information from "../src/components/Information"
import Navbar from "../src/components/Navbar"
import About from "../src/components/About"
import FavoriteRecipe from "./components/FavoriteRecipe"



function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Information />
      <About />
      <FavoriteRecipe />
    </div>
  );
}

export default App;
