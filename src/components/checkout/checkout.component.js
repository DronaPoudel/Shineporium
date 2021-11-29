import React from 'react'
import CartPage from '../Cart/CartPage.component'
import CheckoutCSS from './checkout.module.css'
import CartpageCSS from '../Cart/Cart.module.css'


function Checkout() {
    return (
        <div className = {`${CheckoutCSS.checkout_page} container`}>
            <header>
                <h1>Checkout</h1>
        
                <ul className={CheckoutCSS.breadcrumb}>
                    <li>Home</li>
                    <li>Checkout</li>
                </ul>
        
                {/* <span className={CheckoutCSS.count}>{itemCount} items in the cart</span> */}
                <hr className = "mt-5"/>
            </header>
            <div className="row text-left">
                <div className="col-md-8">
                    <h3 className = "my-3 h3"><b>Billing Details</b></h3>
                    <div className={`${CheckoutCSS.input_fields} row`}>
                        <div className="col-md-6">
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">First name <sup class="fas fa-asterisk"></sup></h6>
                            </label> 
                            <input className="mb-4" type="text" name="email" placeholder="" required/> 
                        </div>
                        <div className="col-md-6">
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">Last name <sup class="fas fa-asterisk"></sup></h6>
                            </label> 
                            <input className="mb-4" type="text" name="email" placeholder="" required/>
                        </div>
                        <div className="col-md-12">
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">Company name</h6>
                            </label> 
                            <input className="mb-4" type="text" name="email" placeholder=""/>
                        </div>
                        <div className="col-md-6">
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">Country/ Region <sup class="fas fa-asterisk"></sup></h6>
                            </label> 
                            <input className="mb-4" type="text" name="email" placeholder="" required/>
                        </div>
                        <div className="col-md-6">
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">Town / City <sup class="fas fa-asterisk"></sup></h6>
                            </label> 
                            <input className="mb-4" type="text" name="email" placeholder="" required/>
                        </div>
                        <div className="col-md-12">
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">Street address <sup class="fas fa-asterisk"></sup></h6>
                            </label> 
                            <input className="mb-2" type="text" name="email" placeholder="" required/>
                        </div>
                        <div className="col-md-12">
                            <input className="mb-4" type="text" name="email" placeholder=""/>
                        </div>
                        <div className="col-md-12">
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">Phone Number <sup class="fas fa-asterisk"></sup></h6>
                            </label> 
                            <input className="mb-4" type="number" name="email" placeholder="" required/> 
                        </div>
                        <div className="col-md-12">
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm">email address<sup class="fas fa-asterisk"></sup></h6>
                            </label> 
                            <input className="mb-4" type="email" name="email" placeholder="" required/> 
                        </div>
                        <br />
                        <div className="col-md-12">
                            <label className="mb-1">
                                <h6 className="mb-0 text-sm"><b>Order notes (optional)</b></h6>
                            </label> 
                            <textarea className="mb-4" name="" id="" cols="30" rows="6"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="border p-4 mt-5">
                        <h2 className = "mb-0"><b>Your Order</b></h2>
                        <hr className = "mt-2"/>
                        <div className="d-flex justify-content-between border-bottom">
                            <h6><b>Product</b></h6>
                            <h6><b>Sub Total</b></h6>
                        </div>
                        <div className="order-items border-bottom">
                            <div className="d-flex justify-content-between py-2">
                                <div className="product">
                                    Amp pedant lamp, Small  × 1
                                </div>
                                <div className="price">
                                    Rs. 4440
                                </div>
                            </div>
                            <div className="d-flex justify-content-between py-2">
                                <div className="product">
                                    Amp pedant lamp, Small  × 1
                                </div>
                                <div className="price">
                                    Rs. 4440
                                </div>
                            </div>
                            <div className="d-flex justify-content-between py-2">
                                <div className="product">
                                    Amp pedant lamp, Small  × 1
                                </div>
                                <div className="price">
                                    Rs. 4440
                                </div>
                            </div>
                            <div className="d-flex justify-content-between py-2">
                                <div className="product">
                                    Amp pedant lamp, Small  × 1
                                </div>
                                <div className="price">
                                    Rs. 4440
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between border-bottom py-2">
                            <h6><b>Sub- Total</b></h6>
                            <h6><b>{4440*4}</b></h6>
                        </div>
                        <div className="d-flex justify-content-between py-2 border-bottom">
                                <div className="product">
                                    Delivery Charges
                                </div>
                                <div className="price">
                                    Rs. 100
                                </div>
                            </div>
                        <div className="d-flex justify-content-between py-2">
                            <h6><b>Total</b></h6>
                            <h6><b>{4440*4+100}</b></h6>
                        </div>
                        <a href="#"><button className = "btn btn-blue btn-block mt-3">edit items <i class="fas fa-edit"></i></button></a>
                    </div>

                    <div className="px-4 mt-5">
                        <h6><b>Pay through:</b></h6>
                        <div className={CheckoutCSS.payment_method}>
                            <form action="" className = "d-flex flex-wrap">
                                {/* <div className="col-md-4"> */}
                                    <div className = "d-flex">
                                        <input type="radio" id="huey" name="drone" value="huey"/>
                                        <img src="../Assets/Images/eSewa.png" alt="" />
                                    </div>
                                {/* </div> */}
                                {/* <div className="col-md-4">
                                    <div className = "d-flex">
                                        <input type="radio" id="huey" name="drone" value="huey"/>
                                        <img src="../Assets/Images/khalti.png" alt="" />
                                    </div>
                                </div> */}

                                <div className = "d-flex">
                                    <input type="radio" id="dewey" name="drone" value="dewey"/>
                                    <img src="../Assets/Images/khalti.png" alt="" />
                                </div>

                                <div className = "d-flex">
                                    <input type="radio" id="dewey" name="drone" value="dewey"/>
                                    <img src="../Assets/Images/IMEPay.jpg" alt="" />
                                </div>

                                <div className = "d-flex">
                                    <input type="radio" id="dewey" name="drone" value="dewey"/>
                                    <img src="../Assets/Images/ConnectIPS.jpg" alt="" />
                                </div>

                                <div className = "d-flex">
                                    <input type="radio" id="louie" name="drone" value="louie"/>
                                    <label className = "ml-3 mb-0" for="louie">Cash on Delivery</label>
                                </div>
                                <br />
                            </form>
                                <a href="#" className = "mt-5"><button className = "btn btn-blue btn-block mt-3">Proceed <i class="fas fa-angle-double-right"></i></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
