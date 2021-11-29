import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import Data from '../../data/Data.json';
import commonCSS from '../../common.module.css';
import FullwidthSectionCSS from './FullwidthSection.module.css';

import Productexerpt from '../Productexerpt/Productexerpt'

export default class FullwidthSection extends Component {
  render() { 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    
    return (
      <section className = {`${FullwidthSectionCSS.FullwidthSection} container mt-5`}>
        <h2 className = {commonCSS.title}>Hospital Garments</h2>
          <Slider {...settings}>
            {/* <h3><Productexerpt /></h3> */}
           <div>
           {/* {Data.products.map((items) => ( */}
             
             {Data.products.HospitalGarments.map((i) => (
                <div className={FullwidthSectionCSS.product_grid}>
                <div className={FullwidthSectionCSS.product_image}>
                    {/* <a href="#" className="image">
                        <img className="pic-1" src="images/img-1.jpg">
                    </a> */}
                    <Link to = "Product" className={FullwidthSectionCSS.image}> <img className="pic-1" src={i.img}></img> </Link>
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
           {/* ))} */}
           </div>
          
        </Slider>
      </section>
    );
  }
}
       

//     )
// }
// </section>
