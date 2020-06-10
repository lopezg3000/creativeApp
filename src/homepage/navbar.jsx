import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

//learning how to create a hamburger menu
//still working on hamburger menu in codepen

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-wrapper'>
                <div className='logo'>
                    <Link to='/'><img src='https://skprod.objects.frb.io/images/static/smoothie-king-logo.svg' /></Link>
                </div>
                <div className='menu-wrap'>
                    <input type='checkbox' class='toggler' />
                    <div className='hamburger'><div></div></div>
                    <div className='menu'>
                        <div>
                            <div>
                                <ul>
                                    <li>
                                        <NavLink className="nav-link" to='/menu'>Our Menu</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="nav-link" to='/ourPromise'>Our Promise</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="nav-link width" to='/healthyRewards'>Healthy Rewards</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="nav-link" to='/locations'>Locations</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="nav-link width" to='/franchise'>Franchise Information</NavLink>
                                    </li>
                                </ul>

                            </div>
                        </div>
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