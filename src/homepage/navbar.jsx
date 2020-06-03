import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <React.Fragment>
            <Link to='/'><img src='https://skprod.objects.frb.io/images/static/smoothie-king-logo.svg' /></Link>
            <NavLink to='/menu'>Our Menu</NavLink>
            <NavLink to='/ourPromise'>Our Promise</NavLink>
            <NavLink to='/healthyRewards'>Healthy Rewards</NavLink>
            <NavLink to='/locations'>Locations</NavLink>
            <NavLink to='/franchise'>Franchise Locations</NavLink>
            <button>Order Now</button>
        </React.Fragment>

    );
}

export default NavBar;