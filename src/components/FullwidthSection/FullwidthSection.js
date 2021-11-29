import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import commonCSS from '../../common.module.css';
import FullwidthSectionCSS from './FullwidthSection.module.css';
import Data from '../../data/Data.json'
export default class FullwidthSection extends Component {
  render(props) {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.props.itemscount,
      // slidesToShow: 3,
      slidesToScroll: 1
    };
    
    return (
      <section className = {`${FullwidthSectionCSS.FullwidthSection} container mt-5`}>
        <h2 className = {`${commonCSS.title} my-3`}> {this.props.name}</h2>
        <Slider {...settings} className = {FullwidthSectionCSS.banner_slider}>
        {/* {Data.products.${this.props.item}.map((i) => ( */}
        {Data.products.HospitalGarments.map((i) => (
                <div className={FullwidthSectionCSS.product_grid}>
                  <div className={FullwidthSectionCSS.product_image}>
                      {/* <a href="#" className="image">
                          <img className="pic-1" src="images/img-1.jpg">
                      </a> */}
                      <Link to = "Product" className={`${FullwidthSectionCSS.image} d-flex justify-content-center`}> <img className="pic-1" src={i.img}></img> </Link>
                      {/* <span className={FullwidthSectionCSS.product_sale_label}>Sale!</span> */}
                      <ul className={FullwidthSectionCSS.product_links}>
                          <li>
                            <Link to = "/cart"><i className="fa fa-shopping-bag"></i> Add to cart</Link>
                          </li>
                          <li>
                            <Link to = 'Product_detail'><i className="fa fa-search"></i> View Product</Link>
                          </li>
                      </ul>
                  </div>
                  <div className={FullwidthSectionCSS.product_content}>
                      <h3 className={FullwidthSectionCSS.title}><a href="#">Doctors' Scrub</a></h3>
                      <div className={FullwidthSectionCSS.price}><span>$85.55</span>$79.99</div>
                  </div>
            </div>
               ))}
          
          {/* <div>
            <img className = "w-100" src = "https://i.ibb.co/hcT5Std/Globes-banner.png"></img>
          </div> */}
        </Slider>
      </section>
    );
  }
}