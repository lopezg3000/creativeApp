import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='max-wrapper'>
                <div className='column column-left'>
                    <Link to='/'><img src='https://skprod.objects.frb.io/images/static/smoothie-king-logo.svg' /></Link>
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
                                    <i className="fas fa-caret-right icon white"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='social-follow-buttons'></div>
                </div>
                <div className='column column-center'></div>
                <div className='column column-right'></div>
            </div>
        </footer>
    );
}

export default Footer;