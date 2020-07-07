import React from 'react';
import './button.css';

const Button = ({ text, blendColorClass }) => {
    return (
        <a href='#' className={`link link-default ${blendColorClass}`}>
            <span>{text}</span>
            <i className="fas fa-caret-right icon"></i>
        </a>
    );
}

export default Button;