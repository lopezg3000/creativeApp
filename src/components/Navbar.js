import React from "react";
import styled from "styled-components";
import NavLinks from "../components/NavLinks";

const StyledNavbar = styled.div`
  color: white;
  text-decoration: none;
  padding: 20px;
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
        { title: "Home", link: "/Header/#home" },
        { title: "Profile", link: "Profile/#profile" },
        { title: "Settings", link: "Settings#settings" }
      ]} />
    </StyledNavbar>
  );
};

export default NavBar;
