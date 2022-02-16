import React from 'react';

import classes from'./Banner.module.scss'
const Banner = ({title, img, id}) => {
    return (
                    <div key={id} className={classes.containerBanner}>
                        <img src={img} alt=" "/>
                        <button className={classes.textBanner}><span className={classes.text}>{title}</span></button>
                    </div>


    );
};

export default Banner;