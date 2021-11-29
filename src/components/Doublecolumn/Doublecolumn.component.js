import React, { createContext, useState, useContext } from 'react';
import {Link, Route} from 'react-router-dom';
import { useParams } from "react-router-dom";

import ProductSingle from '../../components/ProductSingle/ProductSingle.component'
import commonCSS from '../../common.module.css';
import Doublecolumncss from './Doublecolumn.module.css';
import Data from '../../data/Data.json'
// import {ProductProvider} from '../../components/Context';

export default function Doublecolumn() {
    const params = useParams();
    console.log(params, 'params')
    return (
        <section className = "container mt-5">
            <h2 className = {`${commonCSS.title} mb-4`}>Disposable Gloves</h2>
            
            <div className="row">
                
                    <div className={`${Doublecolumncss.double_column} col-lg-6`}>
                    <h4 className = "h4_title">Examination Gloves</h4>
                        <div className="wow slideInLeft row px-4">
                            {Data.products.examinationGloves.slice(0,4).map((egloves)=>(
                                <>
                                <div className="col-md-6">
                                    <div className="item border mb-5">
                                        <img className = {`${Doublecolumncss.product_img} img-fluid`} src={egloves.img} alt="" />
                                        <h6>{egloves.name}</h6>
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
                
                <div className={`${Doublecolumncss.double_column} col-lg-6`}>
                    <h4>Plastic  Gloves</h4>
                    <div className="row px-4 wow slideInRight">
                                {Data.products.plasticGloves.slice(0,4).map((items) => {
                                    // console.log(items.img, 'yohoitems')
                                    return(
                                    <div className="col-md-6">
                                        <div className={`${Doublecolumncss.item} border mb-5`}>
                                            <img height = "200px" className = {`${Doublecolumncss.product_img} img-fluid`} src={items.img} alt="" />
                                            <h6>{items.name}</h6>
                                            <h6 >Description / Keyword</h6>
                                            <p> <span>Price : {items.price.sp}</span>  </p>
                                            <Link to = {`/Plastic_Gloves/${items.id}`}><button className = "btn btn-rounded btn-primary mt-3">View Product</button></Link>
                                            
                                            {/* <Route exact path = "/Product/:id" component = {ProductSingle} >Button</Route> */}
                                        </div>
                                    </div>  
                                )})}
                               
                             {/* ))} */}
                    </div>
                    <div className="d-flex justify-content-center">
                            <Link to = {`/all_Plastic_Gloves`}><button class={`${Doublecolumncss.custom_btn} ${Doublecolumncss.btn_16}`}>See all</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
