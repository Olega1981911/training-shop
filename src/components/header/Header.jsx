import React from 'react';
import NavBar from "./navbar/NavBar";
import TopBar from "./navbar/topBar/TopBar";
import './Header.css'
const Header = () => {
    return (
        <div className='header' data-test-id='header'>
            <TopBar />
            <NavBar />
        </div>
    );
};

export default Header;