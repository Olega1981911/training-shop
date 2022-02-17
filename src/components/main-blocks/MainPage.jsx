import React from 'react';
import Slider from "../slider/Slider";
import classes from './MainPage.module.scss'
import Banner from "./banner-block/Banner";
import women from '../../assets/image/womenBanner.png';
import men from '../../assets/image/menBanner.png';
import accessories from '../../assets/image/2.jpg';

const MainPage = () => {
    return (
        <div className={classes.main}>
            <div className={classes.mainBlock}>
                    <Slider />
                    <div className={classes.bannerBlock}>
                        <Banner id={1} title='women' img={women} />
                        <Banner id={2} title='men' img={men} />
                        <Banner id={3} title='accessories' img={accessories} />
                    </div>

            </div>


        </div>
    );
};

export default MainPage;