import React from 'react';
import {string} from "prop-types";

const ICheckboxInput = {
    type: string
}


const CheckboxInput = ({ title, input: { value, ...input } }: ICheckboxInput) => (
    <>
        <span>{title}</span>
        <input {...input} type="checkbox" checked={value} />
    </>
);


export default CheckboxInput;