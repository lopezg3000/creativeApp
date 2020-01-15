import React from "react";
import styled from "styled-components";
import NavLinks from "../components/NavLinks";

const StyledNavbar = styled.header`
  color: white;
  text-decoration: none;
  background: gold;
  height: 90px;
  padding-top: 6px;
  padding-right: 20px;
  & li {
    list-style: none;
    padding: 1em;
    float: right;
    background-color: #00BFFF;
  }
`;



const NavBar = () => {
  return (
    <StyledNavbar>
      <NavLinks navItems={[
        { title: "Home", link: "/Header/#home", id: "home" },
        { title: "Profile", link: "Profile/#profile", id: "profile" },
        { title: "Settings", link: "Settings#settings", id: "settings" }
      ]} />
    </StyledNavbar>
  );
};

export default NavBar;
