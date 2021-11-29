import React, { Fragment } from 'react';

import Logo from '../Logo/Logo';

import IntroHeaderCSS from './IntroHeader.module.css';
// import {Context} from '../Context';

export default function IntroHeader() {
    return (
            <section>
                <div className = "container">
                    <div className = {`${IntroHeaderCSS.intro_header} row`}>
                        <div className = "col-md-4">
                            <Logo/>                      
                        </div>
                        <div className="col-md-8 row">
                            <div className = "col-sm-10">
                                <div className={IntroHeaderCSS.intro_header_intro}>
                                    <h2>Shineporium Enterprises Pvt.Ltd.</h2>
                                    <h2 className = {IntroHeaderCSS.introheader_intro_h2bg_text}>Top Medical Supplier in Nepal</h2>
                                    <div className="contact">
                                        <p className = {`${IntroHeaderCSS.introheader_intro_contact_p} mr-auto`}><i class="fas fa-phone-square-alt"></i> +91-9810867957</p>
                                        <p className = "text-left"><i class="fas fa-envelope"></i> rohit@descoinstruments.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className = "col-sm-2">
                                <div className={IntroHeaderCSS.shineporium_social}>
                                    <a className = "pr-2" href="#"><i className="fab fa-facebook"></i></a>
                                    <a className = "pr-2" href="#"><i className="fab fa-twitter-square"></i></a>
                                    <a className = "pr-2" href="#"><i className="fab fa-blogger"></i></a>
                                </div>
                                <br />
                                <div className={IntroHeaderCSS.main_cart}>
                                    <a className = "mt-3" href="/cart"> 
                                        <span><i className="fa-3x fas fa-cart-plus"></i> <sup><b class="badge badge-danger badge-lg">3</b></sup> </span> 
                                    </a>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between w-100">
                                <div className={IntroHeaderCSS.introheader_search_bar}>
                                    <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search Items" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            {/* <span className="input-group-text" id="basic-addon2">Search</span> */}
                                            <button className="btn btn-danger">Search</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="register">
                                    <button className= {`${IntroHeaderCSS.btn_register} btn btn-outline-light mr-3`}><a href = "/Register">Register</a></button>
                                    <button className={`${IntroHeaderCSS.btn_login} btn btn-outline-light`}> <a href = "/Login">Login</a> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
