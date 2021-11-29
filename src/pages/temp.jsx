<div>
            <h2 className = "text-center my-4">Product : "{ProductName}" Page</h2>
            <div className="container">
        	<div className="row">
               <div className={`${SingleProductCSS.item_photo} col-md-4`}>
                    <img src="../Assets/Images/EG1.png" />
                </div>
                <div className={`${SingleProductCSS.Det_info} col-md-5`}>
                    <div>
                        <h3>{ProductName}</h3>    
                        <h5 >Category : <a href="#">Surgical</a> <small>(Small and medium Size)</small></h5>
            
                        <h6 className={SingleProductCSS.title_price}><small>PRECIO OFERTA</small></h6>
                        <h3 >U$S 399</h3>
            
                        <div className={SingleProductCSS.section} >
                            <h6 className={SingleProductCSS.title_attr} ><small>COLOR</small></h6>                    
                            <div className = {SingleProductCSS.atts}>
                                <div className="attr"></div>
                                <div className="attr"></div>
                            </div>
                        </div>

                        <div className={`${SingleProductCSS.section}`}>
                            <h6 className = {SingleProductCSS.title_attr}><small>CAPACIDAD</small></h6>                    
                            <div className = {SingleProductCSS.atts}>
                                <div className="attr2">16 GB</div>
                                <div className="attr2">32 GB</div>
                            </div>
                        </div>   

                        <div className= {`${SingleProductCSS.section} pb-5`}>
                            <h6 className="title-attr"><small>CANTIDAD</small></h6>                    
                            <div className= {`${SingleProductCSS.Qty_selector} pb-5`}>
                            <div className={SingleProductCSS.btn_minus}>
                                    {/* <span className="glyphicon glyphicon-minus"></span> */}
                                    <i class="fas fa-minus"></i>
                                </div>
                                <input value="1" />
                                <div className={SingleProductCSS.btn_plus}>
                                    {/* <span className="glyphicon glyphicon-plus"></span> */}
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>                
            
                        <div className={`${SingleProductCSS.section} pb-5`}>
                            <button className={`${SingleProductCSS.btn_success} btn w-100`}>
                                <span className = "mr-3"><i class="fas fa-shopping-cart"></i></span> 
                                Add to Cart</button>
                            {/* <h6><a href="#"><span className="glyphicon glyphicon-heart-empty" style="cursor:pointer;"></span> Agregar a lista de deseos</a></h6> */}
                        </div>                                        
                    </div>                              
        </div>
                <div className="col-md-9">
                    <ul className={`${SingleProductCSS.menu_items} menu-items`}>
                        <li className="active">Product Detail Description</li>
                        <li>Reviewes</li>
                    </ul>
                    {/* <div style="width:100%;border-top:1px solid silver"> */}
                    <div>
                        {/* <p style="padding:15px;"> */}
                        <p >
                            <small>
                            Stay connected either on the phone or the Web with the Galaxy S4 I337 from Samsung. With 16 GB of memory and a 4G connection, this phone stores precious photos and video and lets you upload them to a cloud or social network at blinding-fast speed. With a 17-hour operating life from one charge, this phone allows you keep in touch even on the go. 
        
                            With its built-in photo editor, the Galaxy S4 allows you to edit photos with the touch of a finger, eliminating extraneous background items. Usable with most carriers, this smartphone is the perfect companion for work or entertainment.
                            </small>
                        </p>
                        <small className = {SingleProductCSS.description}>
                            <ul>
                                <li>Super AMOLED capacitive touchscreen display with 16M colors</li>
                                <li>Available on GSM, AT T, T-Mobile and other carriers</li>
                                <li>Compatible with GSM 850 / 900 / 1800; HSDPA 850 / 1900 / 2100 LTE; 700 MHz Class 17 / 1700 / 2100 networks</li>
                                <li>MicroUSB and USB connectivity</li>
                                <li>Interfaces with Wi-Fi 802.11 a/b/g/n/ac, dual band and Bluetooth</li>
                                <li>Wi-Fi hotspot to keep other devices online when a connection is not available</li>
                                <li>SMS, MMS, email, Push Mail, IM and RSS messaging</li>
                                <li>Front-facing camera features autofocus, an LED flash, dual video call capability and a sharp 4128 x 3096 pixel picture</li>
                                <li>Features 16 GB memory and 2 GB RAM</li>
                                <li>Upgradeable Jelly Bean v4.2.2 to Jelly Bean v4.3 Android OS</li>
                                <li>17 hours of talk time, 350 hours standby time on one charge</li>
                                <li>Available in white or black</li>
                                <li>Model I337</li>
                                <li>Package includes phone, charger, battery and user manual</li>
                                <li>Phone is 5.38 inches high x 2.75 inches wide x 0.13 inches deep and weighs a mere 4.59 oz </li>
                            </ul>  
                        </small>
                    </div>
                </div>		
            {/* </div> */}
        </div>        
        </div>
        </div>