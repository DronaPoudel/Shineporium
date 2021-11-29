import React, { createContext, useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import commonCSS from '../../common.module.css';
import Doublecolumncss from './Doublecolumn.module.css';

import {ProductProvider} from '../../components/Context';

export default function Doublecolumn() {
    const ProductData = useContext(ProductProvider.productpg);
    console.log(ProductData, "Product items")
    return (
        <section className = "container mt-5">
            <h2 className = {`${commonCSS.title} mb-4`}>Disposable Gloves</h2>
            
            <div className="row">
                
                    <div className={`${Doublecolumncss.double_column} col-md-6`}>
                    <h4 className = "h4_title">Examination Gloves</h4>
                        <div className="wow slideInLeft row px-4">
                        {/* {GlovesData.products.map((items) => ( */}
                            {ProductData.slice(0,4).map((egloves)=>(
                                <>
                                <div className="col-md-6">
                                    <div className="item border mb-5">
                                        <img className = {`${Doublecolumncss.product_img} img-fluid`} src={egloves.img} alt="" />
                                        <h6>{egloves.name}</h6>
                                        {/* <p><span>Price : {egloves.price.map((prices)=>{
                                            return(prices.sp)
                                        })}</span>  <span>#{egloves.category}</span></p> */}
                                        <Link to = "/Product"><button className = "btn btn-rounded btn-primary mt-3"> View Product </button> </Link>
                                    </div>
                                </div>
                            
                            </>
                            ))}
                       {/* ))} */}
                        </div>
                    <div className="d-flex justify-content-center">
                    <Link to = "/all_Examination_Gloves"><button class={`${Doublecolumncss.custom_btn} ${Doublecolumncss.btn_16}`}>See all</button></Link>
                    </div>
                    </div>
                
                <div className={`${Doublecolumncss.double_column} col-md-6`}>
                    <h4>Plastic  Gloves</h4>
                    <div className="row px-4 wow slideInRight">
                        
                            {/* {GlovesData.products.map((egloves)=>( */}
                                {ProductData.map((items) => (
                                    <div className="col-md-6">
                                    <div className="item border mb-5">
                                        <img height = "200px" className = "img-fluid" src={items.img} alt="" />
                                        {/* <h6>{egloves.name}</h6> */}
                                        <h6>{items}</h6>
                                        {/* <p> <span>Price : {items.price.sp}</span>  </p> */}
                                        <p> <span>Price : {items}</span>  </p>
                                        <button className = "btn btn-rounded btn-primary mt-3">View Product</button>
                                    </div>
                                </div>  
                                ))}
                               
                             {/* ))} */}
                    </div>
                    <div className="d-flex justify-content-center">
                            <Link to = "/all_Plastic_Gloves"><button class={`${Doublecolumncss.custom_btn} ${Doublecolumncss.btn_16}`}>See all</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
