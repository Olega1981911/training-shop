import React from 'react';
import classes from "./TopBar.module.scss";
import Facebook from '../../../../assets/image/icons/facebook.svg';
import Phone from '../../../../assets/image/icons/phone.svg';
import Marker from '../../../../assets/image/icons/location-marker2.svg';
import Clock from '../../../../assets/image/icons/clock2.svg';
import Twitter from '../../../../assets/image/icons/twitter.svg';
import Instagram from '../../../../assets/image/icons/instagram.svg';
import Pinterest from '../../../../assets/image/icons/pinterest.svg';
const TopBar = () => {
    return (
        <div className={classes.topBar}>
            <div className={classes.block}>
                <img src={Phone} alt="img"/>
                <span className={classes.item}>+375 29 100 20 30</span>
            </div>
            <div className={classes.marker}>
                <img src={Marker} alt="marker"/>
                <span className={classes.item}>Belarus, Gomel, Lange 17</span>
            </div>
            <div className={classes.clock}>
                <img src={Clock} alt="clock"/>
                <span className={classes.item}>All week 24/7</span>
            </div>
            <div className={classes.social}>
                <a href="#" className={classes.socialIcons}>
                    <span><img src={Facebook} alt="facebook"/></span>
                </a>
                <a href="#" className={classes.socialIcons}>
                    <span><img src={Twitter} alt="twitter"/></span>
                </a>
                <a href="#" className={classes.socialIcons}>
                    <span><img src={Instagram} alt="instagram"/></span>
                </a>
                <a href="#" className={classes.socialIcons}>
                    <span><img src={Pinterest} alt="pinterest"/></span>
                </a>
            </div>
        </div>
    );
};

export default TopBar;