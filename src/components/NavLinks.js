import React from "react";

const NavLinks = props => <ul>{props.navItems.map(navItem => <li>{navItem}</li>).reverse()}</ul>;

export default NavLinks;
