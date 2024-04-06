import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

// defining a class for buttonStyle [0] = btn--primary, [1] = btn--outine, etc
const STYLES = ['btn--primary', 'btn--outine'];

// defining a class for buttonSize
const SIZES = ['btn--medium', 'btn--large'];

// checks click for what button style should be used 
export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle 
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) // if 
    ? buttonSize
    : SIZES[0]; // else

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button 
        className={'btn ${checkButtonStyle} ${checkButtonSize}'}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )
}