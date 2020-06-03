import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <React.Fragment>
            <Link><img src='https://skprod.objects.frb.io/images/static/smoothie-king-logo.svg' /></Link>
            <NavLink>Our Menu</NavLink>
            <NavLink>Our Promise</NavLink>
            <NavLink>Healthy Rewards</NavLink>
            <NavLink>Locations</NavLink>
            <button>Order Now</button>
        </React.Fragment>

    );
}

export default NavBar;