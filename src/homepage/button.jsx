import React from 'react';
import './button.css';

const Button = ({ text }) => {
    return (
        <a href='#' className='link link-default'>
            <span>{text}</span>
            <i className="fas fa-caret-right icon"></i>
        </a>
    );
}

export default Button;