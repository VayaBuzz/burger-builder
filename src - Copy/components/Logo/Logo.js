import React from 'react';
// WebPack will copy and optimize this image later, so just
// import it now, use the imported file in your code below,
// and watch the magic happen!
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default logo;
