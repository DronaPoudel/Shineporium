import React from 'react';
import LoginCSS from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';
import { FontAwesomeIconn } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIconnn } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Logo from '../Logo/Logo'

function Login() {
    return (
        <div className={LoginCSS.login}>
            <div className="container px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                {/* <div className="card card0 border-0"> */}
                    <div className="row d-flex">
                        <div className="col-md-6">
                            <div className="card1">
                                <div className="row"> <img src="assets/Images/SHINEPORIUM_Logo.png" className={LoginCSS.logo}/> </div>
                                <div className={`${LoginCSS.border_line} row px-3 justify-content-center mt-4 mb-5`}> <img className = "img-fluid" src="https://i.imgur.com/uNGdWHi.png" className={LoginCSS.image}/> </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={`${LoginCSS.card2} card border-0 px-4 py-5`}>
                                <div class="row mb-4 px-3">
                                    <h6 class="mb-0 mr-4 mt-2">Sign in with</h6>
                                    <div class={`${LoginCSS.facebook} text-center mr-3`}>
                                    {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
                                    {/* <FontAwesomeIcon icon={faCoffee} /> */}

                                        <div className=""><i class="fab fa-facebook-f"></i></div>
                                    </div>
                                    <div class={`${LoginCSS.twitter} text-center mr-3`}>
                                        <div className=""><i class="fab fa-twitter"></i></div>
                                    </div>
                                    <div class={`${LoginCSS.linkedin} text-center mr-3`}>
                                        <div className=""><i class="fab fa-linkedin-in"></i></div>
                                    </div>
                                </div>
                                <div className="row px-3 mb-4">
                                    <div className={LoginCSS.line}></div> <small className={`${LoginCSS.or} text-center`}>Or</small>
                                    <div className={LoginCSS.line}></div>
                                </div>
                                <div className="row px-3"> 
                                    <label className="mb-1">
                                        <h6 className="mb-0 text-sm">Email Address</h6>
                                    </label>
                                    <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address"/> 
                                </div>
                                <div className="row px-3"> 
                                    <label className="mb-1">
                                        <h6 className="mb-0 text-sm">Password</h6>
                                    </label> 
                                    <input type="password" name="password" placeholder="Enter password"/> 
                                </div>
                                <div className="row px-3 mb-4">
                                    <div className="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" className="custom-control-input"/> <label for="chk1" className="custom-control-label text-sm">Remember me</label> </div> <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                                </div>
                                <div className="row mb-3 px-3"> <button type="submit" className={`${LoginCSS.btn_blue} btn text-center`}>Login</button> </div>
                                <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? <a href = "Register" className="text-danger ">Register</a></small> </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue py-4">
                        <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2021. All rights reserved.</small>
                            <div className="social-contact ml-4 ml-sm-auto"> <span className="fa fa-facebook mr-4 text-sm"></span> <span className="fa fa-google-plus mr-4 text-sm"></span> <span className="fa fa-linkedin mr-4 text-sm"></span> <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

function SignUp() {
    return (
        <div className="SignUp_Section">
        <header class="header">
                <div class="container">
                    <h1>Create an Account</h1>
                    {/* <a href="#" class="navbar-brand">
                    </a> */}
                </div>
        </header>

<div className="container">
    <div className="row py-3 align-items-center">
        <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
        <Logo />
            
            <p className="font-italic text-muted mb-0">Sign Up today to Shineporium e-commerce.</p>
            <p className="font-italic text-muted">
            </p>
        </div>
    
        <div class="col-md-7 col-lg-6 ml-auto">
            <form action="#">
                <div class="row">

                     {/* First Name  */}
                    <div class="input-group col-lg-6 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-user text-muted"></i>
                            </span>
                        </div>
                        <input id="firstName" type="text" name="firstname" placeholder="First Name" class="form-control bg-white border-left-0 border-md"/>
                    </div>

                     {/* Last Name */}
                    <div class="input-group col-lg-6 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-user text-muted"></i>
                            </span>
                        </div>
                        <input id="lastName" type="text" name="lastname" placeholder="Last Name" class="form-control bg-white border-left-0 border-md"/>
                    </div>

                     {/* Email Address  */}
                    <div class="input-group col-lg-12 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-envelope text-muted"></i>
                            </span>
                        </div>
                        <input id="email" type="email" name="email" placeholder="Email Address" class="form-control bg-white border-left-0 border-md"/>
                    </div>

                     {/* Phone Number  */}
                    <div class="input-group col-lg-12 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-phone-square text-muted"></i>
                            </span>
                        </div>
                        <select id="countryCode" name="countryCode" style={{maxWidth : '80px'}} class="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                            <option value="">+227</option>
                            <option value="">+10</option>
                            <option value="">+15</option>
                            <option value="">+18</option>
                        </select>
                        <input id="phoneNumber" type="tel" name="phone" placeholder="Phone Number" class="form-control bg-white border-md border-left-0 pl-3"/>
                    </div>


                     {/* Job  */}
                    {/* <div class="input-group col-lg-12 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-black-tie text-muted"></i>
                            </span>
                        </div>
                        <select id="job" name="jobtitle" class="form-control custom-select bg-white border-left-0 border-md">
                            <option value="">Choose who you are</option>
                            <option value="">Buyer</option>
                            <option value="">Seller</option>
                            <option value="">Manager</option>
                        </select>
                    </div> */}

                     {/* Password  */}
                    <div class="input-group col-lg-6 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-lock text-muted"></i>
                            </span>
                        </div>
                        <input id="password" type="password" name="password" placeholder="Password" class="form-control bg-white border-left-0 border-md"/>
                    </div>

                     {/* Password Confirmation  */}
                    <div class="input-group col-lg-6 mb-4">
                        <div class="input-group-prepend">
                            <span class="input-group-text bg-white px-4 border-md border-right-0">
                                <i class="fa fa-lock text-muted"></i>
                            </span>
                        </div>
                        <input id="passwordConfirmation" type="text" name="passwordConfirmation" placeholder="Confirm Password" class="form-control bg-white border-left-0 border-md"/>
                    </div>

                     {/* Submit Button  */}
                    <div class={`${LoginCSS.SignUp_btn} form-group col-lg-12 mx-auto mb-0`}>
                        <a href="#" class="btn btn-blue btn-block py-2">
                            <span class="font-weight-bold">Create your account</span>
                        </a>
                    </div>

                     {/* Divider Text  */}
                    <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                        <div class="border-bottom w-100 ml-5"></div>
                        <span class="px-2 small text-muted font-weight-bold text-muted">OR</span>
                        <div class="border-bottom w-100 mr-5"></div>
                    </div>

                     {/* Social Login  */}
                    <div class="form-group col-lg-12 mx-auto">
                        <a href="#" class="btn btn-primary btn-block py-2 btn-facebook">
                            <i class="fa fa-facebook-f mr-2"></i>
                            <span class="font-weight-bold">Continue with Facebook</span>
                        </a>
                        <a href="#" class="btn btn-primary btn-block py-2 btn-twitter">
                            <i class="fa fa-twitter mr-2"></i>
                            <span class="font-weight-bold">Continue with Twitter</span>
                        </a>
                    </div>

                     {/* Already Registered  */}
                    <div class="text-center w-100">
                        <p class="text-muted font-weight-bold">Already Registered? <a href="/Login" class="text-primary ml-2">Login</a></p>
                    </div>

                </div>
            </form>
        </div>
    </div>
</div>


    {/* <!-- Registeration Form --> */}
    </div>
    )
}

export {Login, SignUp}