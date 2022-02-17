import {Link} from "react-router-dom";
import React from "react";
import {MENU_ITEM} from "../../constants/data";
import classes from "./BlockVisible.module.scss";
const BlockVisible = () => {
    return (
        <div className={classes.menuVisible} data-test-id='menu'>
            {MENU_ITEM.map(({ id, path, img }) => (
                <Link key={id} to={`/${path}`} className={classes.visibleItem} data-test-id={`menu-link-${path}`}>
                    <span><img src={`${img}`} alt="img"/></span>
                </Link>
            ))}
        </div>
    );
};
export default BlockVisible;