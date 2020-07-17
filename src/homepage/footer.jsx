import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='max-wrapper'>
                <div className='column column-left'>
                    <Link to='/'><img src='https://skprod.objects.frb.io/images/static/smoothie-king-logo.svg' /></Link>
                </div>
                <div className='column column-center'></div>
                <div className='column column-right'></div>
            </div>
        </footer>
    );
}

export default Footer;