import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-wrapper'>
                <div className='logo'>
                    <Link to='/'><img src='https://skprod.objects.frb.io/images/static/smoothie-king-logo.svg' /></Link>
                </div>
                <div className='navtabs-wrapper'>
                    <div className='navbar-tabs'>
                        <NavLink className="nav-link" to='/menu'>Our Menu</NavLink>
                        <NavLink className="nav-link" to='/ourPromise'>Our Promise</NavLink>
                        <NavLink className="nav-link width" to='/healthyRewards'>Healthy Rewards</NavLink>
                        <NavLink className="nav-link" to='/locations'>Locations</NavLink>
                        <NavLink className="nav-link width" to='/franchise'>Franchise Information</NavLink>
                    </div>
                </div>
                <div className='order-button'>
                    <button><i className="fas fa-laptop"></i> Order Now</button>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;