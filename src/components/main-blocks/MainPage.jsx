import React from 'react';
import Slider from "../slider/Slider";
import './MainPage.css'
import Banner from "./banner-block/Banner";

const MainPage = () => {
    return (
        <div className='main'>
            <div className='main-block__container'>
                    <Slider className='banner-slider'/>

                    <div className="banner1">
                        <Banner />
                    </div>
                     <div className="banner2">

                    </div>
                    <div className="banner3">

                    </div>
            </div>


        </div>
    );
};

export default MainPage;