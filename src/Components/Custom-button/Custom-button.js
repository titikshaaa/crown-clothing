import './Custom-button.css';
import React from 'react';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    return(
        <button className={`${inverted ? 'inverted ': ''}custom-button`}{...otherProps}>
             {children}
        </button>
    )
}

export default CustomButton;