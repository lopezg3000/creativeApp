import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <Link to='/'><img src='https://skprod.objects.frb.io/images/static/smoothie-king-logo.svg' /></Link>
            <NavLink to='/menu'>Our Menu</NavLink>
            <NavLink to='/ourPromise'>Our Promise</NavLink>
            <NavLink to='/healthyRewards'>Healthy Rewards</NavLink>
            <NavLink to='/locations'>Locations</NavLink>
            <NavLink to='/franchise'>Franchise Information</NavLink>
            <button>Order Now</button>
        </nav>

    );
}

export default NavBar;