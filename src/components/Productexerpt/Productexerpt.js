import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProductCSS from './Product.module.css';
import Data from '../../data/Data'
export default function Productexerpt() {
    return (
        <div >
           {Data.products.map((items) => (
               items.plasticGloves.map((i) => (
                <div className={ProductCSS.product_grid}>
                <div className={ProductCSS.product_image}>
                    {/* <a href="#" className="image">
                        <img className="pic-1" src="images/img-1.jpg">
                    </a> */}
                    <Link to = "Product" className={ProductCSS.image}> <img className="pic-1" src="https://i.ibb.co/d5B79pY/HG1.png"></img> </Link>
                    {/* <span className={ProductCSS.product_sale_label}>Sale!</span> */}
                    <ul className={ProductCSS.product_links}>
                        <li>
                        <Link to = "/cart"><i className="fa fa-shopping-bag"></i> Add to cart</Link>
                        </li>
                        <li>
                            <Link to = 'Product_detail'><i className="fa fa-search"></i> View Product</Link>
                        </li>
                    </ul>
                </div>
                <div className={ProductCSS.product_content}>
                    <h3 className={ProductCSS.title}><a href="#">Doctors' Scrub</a></h3>
                    <div className={ProductCSS.price}><span>$85.55</span>$79.99</div>
                </div>
            </div>
               ))
           ))}
        </div>
    )
}
