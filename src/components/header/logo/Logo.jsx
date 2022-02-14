import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Logo.module.scss";


const Logo = () => {
    return (
        <>
            <Link to={'/'} className={classes.headerNavLogo} data-test-id="header-logo-link"><span>CleverShop</span></Link>
        </>
    );
};

export default Logo;