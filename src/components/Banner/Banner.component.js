import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Bannercss from "./Bannercss.module.css";
import Data from '../../data/Data.json'
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className = "container">
        {/* <h2> Single Item</h2> */}
        <Slider {...settings} className = {Bannercss.banner_slider}>
          {Data.Banner_images.map((items) => {
            console.log(items, "banner images")
            return( 
            <div>
              <img className = "w-100" src = {items.image}></img>
            </div>
            )
          } )}
        </Slider>
      </div>
    );
  }
}