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
      <NavLinks navItems={["Home", "Profile", "Settings"]} />
    </StyledNavbar>
  );
};

export default NavBar;
