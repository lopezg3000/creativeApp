import React from 'react';
import Header from "../src/components/Header"
import Information from "../src/components/Information"
import Navbar from "../src/components/Navbar"
import About from "../src/components/About"
import ButtonLink from "../src/components/ButtonLink"



function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Information />
      <About />
      <ButtonLink />
    </div>
  );
}

export default App;
