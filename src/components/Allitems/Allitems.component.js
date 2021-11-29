import React, { useContext } from 'react';
import Allitemscss from './Allitems.module.css';
import Data from '../../data/Data.json';
import { ProductContext } from '../Context';
import {ProductConsumer} from '../Context';

export default function Seeallitems() {

    // const {products} = useContext(ProductContext);
    
    return (
        <div className = "container mt-5 mb-5">
            <h2>All Examination Gloves</h2>
            <div className = "d-flex justify-content-center row">
                {Data.products.examinationGloves.map((items) => (
                    // allitems.examinationGloves.map((items) => (

                        <div className={`${Allitemscss.AllItem_list} col-md-10`}>
                        <div className="row p-2 bg-white border rounded">
                            <div className="col-md-3 mt-1"><img className={`${Allitemscss.product_image} img-fluid img-responsive rounded `}src={items.img}/></div>
                            <div className="col-md-6 mt-1">
                                <h5>{items.name}</h5>
                                <div className="d-flex flex-row">
                                    <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>310</span>
                                </div>
                                <div className="mt-1 mb-1 spec_1">{items.keywords.map((product_keyword) => 
                                    // { <span>{product_keyword.keyword1}</span> <span className={Allitemscss.dot}></span> <span>{product_keyword.keyword2}</span> <span className={Allitemscss.dot}></span> <span>{product_keyword.keyword3}</span> <span className={Allitemscss.dot}></span> <span>{product_keyword.keyword4}</span> <span className={Allitemscss.dot}></span> <span>{product_keyword.keyword5}</span> }
                                    <i><span className={Allitemscss.dot}></span> <span> {product_keyword.keyword}</span> </i>
                                )}
                                {/* <span>100% cotton</span><span className="dot"></span><span>Light weight</span><span className="dot"></span><span>Best finish<br/></span></div> */}
                                {/* <span>Unique design</span><span className="dot"></span><span>For men</span><span className="dot"></span><span>Casual<br/></span> */}
                                </div>
                                <p className="text-justify text-truncate para mb-0">
                                {/* <ProductConsumer>
                                {Product_Description => (
                                    <p>{Product_Description}</p>
                                )}
                                </ProductConsumer> */}
                               
                                    <p> {items.description}  </p>
                             
                                </p>
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <div className="d-flex flex-row align-items-center">
                                    {/* {allGlovesData.examinationGloves.map((productprice) =><> */}
                                    {/* {items.price.map((prices) =>  */}
                                        {/* <> */}
                                            <h4 className = "mr-1">{items.prices.mp}</h4> <span className={Allitemscss.strike_text}>{items.prices.sp}</span> 
                                        {/* </> */}
                                    {/* )} */}
                                    {/* </> */}
                                    {/* )} */}
                                </div>
                                <h6 className="text-success">Free shipping</h6>
                                <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button">Details</button><button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to Cart</button></div>
                            </div>
                        </div>
                    </div>
                    // ))
                    
                ))}
            </div>
        </div>
    )
}
