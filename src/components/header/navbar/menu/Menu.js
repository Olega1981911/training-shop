import React from 'react';
import {Link} from "react-router-dom";
import './Menu.css'
import {MENU} from "../../../../constants/data";


const Menu = () => {
    return (
        <div className='menu' data-test-id='menu'>
            {MENU.map(({ id, path, name }) => (
                <Link key={id} to={`${path}`} className='menu-item' data-test-id={`menu-link-${path}`}>
                    <span>{name}</span>
                    </Link>
                    ))}
        </div>
    );
};

export default Menu;