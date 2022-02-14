import React from 'react';
import NavBar from "./navbar/NavBar";
import TopBar from "./navbar/topBar/TopBar";
const Header = () => {
    return (
        <div className='header__container' data-test-id='header'>
            <TopBar />
            <NavBar />
        </div>
    );
};

export default Header;