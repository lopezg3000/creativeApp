import React from "react";
import styled from "styled-components"
import { HashLink as Link } from "react-router-hash-link"

const ButtonLink = styled.button`
    background: none;
    outline: none;
    cursor: pointer;
    font-size: 2vh;
    border: none;
    & ul{
    }
    a {
        text-decoration: none;
        color: white;
        font-family: monaco;
    }
`;


const NavLinks = props => <ul>{props.navItems.map(navItem => <li key={navItem.id}><ButtonLink><Link to={navItem.link}>{navItem.title}</Link ></ButtonLink></li>).reverse()}</ul >;

export default NavLinks;

/* Link to an internal section of a page with anchor elements

    This was very difficult. I tried to find a solution from scratch, but I could not find one.
    From what I have read, there isn't a best practice solution. I came across a package
    called react-router-hash-links. I installed it and I had trouble getting the functionality to
    work because the path was wrong. Also, the id in the component does not use a hash symbol.
    /componentname/#anchortag.
    <element id=anchorTagWithoutHash>

    Problem: lag in DOM update when linking to content in a single page application.
*/
