import React from 'react'

const Button = ({ text }) => {
    return (
        <a href='#' className='link link-default'>
            <span>{text}</span>
            <i class="fas fa-caret-right"></i>
        </a>
    );
}

export default Button;