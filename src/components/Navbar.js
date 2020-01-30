import React from "react";
import styled from "styled-components";
import NavLinks from "../components/NavLinks";

const StyledNavbar = styled.header`
  color: black;
  text-decoration: none;
  background: white;
  background: white;
  border-style: solid;
  border-color: #32CD32;
  border-width: 10px;
  border-radius: 10px;
  height: 11vh;
  padding-top: 6px;
  padding-right: 20px;
  & li {
    list-style: none;
    padding: 1em;
    float: right;
    background-color: #32CD32;
  }
`

const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
  font-family: 'Pacifico', cursive;
  text-align: center;
`



const NavBar = () => {
  return (
    <div>
      <StyledNavbar>
        <NavLinks navItems={[
          { title: "Home", link: "/Header/#home", id: "home" },
          { title: "Profile", link: "Profile/#profile", id: "profile" },
          { title: "Settings", link: "Settings#settings", id: "settings" }
        ]} />
        <Title>Fitness Todo</Title>
      </StyledNavbar>
    </div>
  );
};

export default NavBar;
