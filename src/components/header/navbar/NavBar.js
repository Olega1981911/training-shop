import React from 'react';
import Menu from "./menu/Menu";
import Logo from "../logo/Logo";
import classes from "./NavBar.module.scss";
import BlockVisible from "../../block-visible/BlockVisible";

const NavBar = (...props) => {


    return (
        <div className={classes.nav}>
            <div className={classes.logo}>
                <Logo />
            </div>
            <nav className={classes.navMenu}>
                <Menu id={props.id} name={props.name} path={props.path} />
            </nav>
            <div className={classes.menuVisible}>
                <BlockVisible id={props.id} img={props.img} path={props.path} />
            </div>

        </div>

    );
};

export default NavBar;