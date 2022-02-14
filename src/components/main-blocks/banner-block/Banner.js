import React from 'react';
import {DATA_BANNER} from "../../../constants/data";
import './Banner.css'
const Banner = () => {
    return (
        <>
            {DATA_BANNER.map((id,title, img) => {
                return(
                    <div key={id.toString()} className="container-banner">
                        <img src={img} alt=" "/>
                        <h2 className='text-banner'>{title}</h2>
                    </div>

            )})}
        </>
    );
};

export default Banner;