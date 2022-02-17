import React from 'react';
import classes from "./Buttons.module.scss";

const Buttons = ({children, ...props}) => {
    return (
        <Buttons {...props} className={classes}>
            {children}
        </Buttons>
    );
};

export default Buttons;