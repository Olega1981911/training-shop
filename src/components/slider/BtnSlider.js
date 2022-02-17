import React from "react";
import "./Slider.css";
import leftArrow from "../../assets/image/icons/chevron-right.svg";
import rightArrow from "../../assets/image/icons/chevron-left.svg";

export default function BtnSlider({ direction, moveSlide }) {
    console.log(direction, moveSlide);
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={direction === "next" ? rightArrow : leftArrow} alt=""/>
        </button>
    );
}