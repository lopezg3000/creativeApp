import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

//footer still needs more updates

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-links'>
                <div className='max-wrapper'>
                    <div className='column column-left'>
                        <Link to='/' className='logo'>
                            <img src='https://skprod.objects.frb.io/images/static/smoothie-king-logo.svg' />
                        </Link>
                        <div className='mailing-list-signup'>
                            <p>
                                Be the first to learn of new products and
                                promotions when you sign up for our newsletter.
                        </p>
                            <form>
                                <div className='entry-email-signup'>
                                    <input
                                        name='s_email'
                                        type='text'
                                        placeholder='yourname@domain.com'
                                        className='entry-input-text'
                                    />
                                    <div className='checkbox'>
                                        <input className='confirm' type='checkbox' />
                                        <label for='confirm'>
                                            <p>I agree to receive emails from Smoothie King.</p>
                                        </label>
                                    </div>
                                    <button type='submit' className='button-submit'>
                                        <span>Submit</span>
                                        <i className="fas fa-caret-right icon white"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='social-follow-buttons'>
                            <p>Follow Us</p>
                            <ul>
                                <li>
                                    <a
                                        href='https://smoothieking.com/connect/facebook'
                                        target='blank'
                                        rel='noopener'
                                    >
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://smoothieking.com/connect/twitter'
                                        target='blank'
                                        rel='noopener'
                                    >
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://smoothieking.com/connect/instagram'
                                        target='blank'
                                        rel='noopener'
                                    >
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://smoothieking.com/connect/youtube'
                                        target='blank'
                                        rel='noopener'
                                    >
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href='https://smoothieking.com/connect/pinterest'
                                        target='blank'
                                        rel='noopener'
                                    >
                                        <i class="fab fa-pinterest"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='column column-center'>
                        <h2>About</h2>
                        <ul>
                            <li>
                                <a href='#'>Our story</a>
                            </li>
                            <li>
                                <a href='#'>Gift Cards</a>
                            </li>
                            <li>
                                <a href='#'>Clean Blends</a>
                            </li>
                            <li>
                                <a href='#'>Partnerships</a>
                            </li>
                            <li>
                                <a href='#'>In the News</a>
                            </li>
                            <li>
                                <a href='#'>Corporate Careers</a>
                            </li>
                            <li>
                                <a href='#'>Franchise Information</a>
                            </li>
                            <li>
                                <a href='#'>FAQ</a>
                            </li>
                            <li>
                                <a href='#'>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className='column column-right'>
                        <h2>International</h2>
                        <ul>
                            <li>
                                <a href='#'>Korea</a>
                            </li>
                            <li>
                                <a href='#'>Grand Cayman</a>
                            </li>
                            <li>
                                <a href='#'>Trinidad</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-privacy'>
                <div className='max-wrapper'>
                    <div className='column'>
                        <p>&copy;2020, Smoothie King. All rights reserved.</p>
                    </div>
                    <div className='column'>
                        <a href='#'>Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;