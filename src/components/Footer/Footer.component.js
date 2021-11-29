import React from 'react'
import {Link} from 'react-router-dom';

import commonCSS from '../../common.module.css';
import FooterCSS from'./Footer.module.css';

import Logo from '../Logo/Logo';

function Footer() {
    return (
        <footer className = {`${FooterCSS.footerbg} mt-5 footer py-3 bg-light`}>
            <div className={`${FooterCSS.container}`}>
                <div className={`${commonCSS.colorwhite} row pt-4`}>
                    <div className="col-md-3">
                        <div className="footer-logo">
                            {/* <img className = "img-fluid" src="../Assets/Images/SHINEPORIUM-Text-Logo.png" alt="" /> */}
                            {/* <img className = "img-fluid" src="Assets/Images/SHINEPORIUM_Logo.png" alt="" /> */}
                            < Logo style = {{backgroundColor: "none"}}/>
                        </div>
                        <p className = "">Health, Safety & Happiness</p>
                        <div className={FooterCSS.social_handles}>
                            <span><a href="#"><i class="fab fa-facebook"></i></a></span>
                            <span><a href="#"><i class="fab fa-instagram"></i></a></span>
                            <span><a href="#"><i class="fab fa-tiktok"></i></a></span>
                            <span><a href="#"><i class="fab fa-youtube"></i></a></span>
                        </div>
                    </div>
                    <div className={`${FooterCSS.useful_links} col-md-3`}>
                        <h2>Useful Links</h2>
                        <ul>
                            <li> <Link to = "/Partners">Partners</Link> </li>
                            <li><Link to = "/Surgery Masks">Surgery Masks</Link></li>
                            <li><Link to = "/News">News / Blog</Link></li>
                            <li><Link to = "/FAQ">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h2>Contact Us</h2>
                        <div className="d-flex">
                            <span>Address</span> <span>Koteshwor-32 Kathmandu, Nepal</span>
                        </div>
                        <div className="d-flex">
                            <span>Contact</span> <span><a href="telto:9842418714">+977-9842418714 <br /> +977 9869227292 </a></span>
                        </div>
                        <div className="d-flex">
                            <span>Mail</span> <span><a href="mailto:info@Med.store"> info@Med.store </a></span>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <h2>Subscribe to our Newsletter</h2>
                        <p>Subscribe us to get recent updates and get opportunity for special offers.</p>
                        <form action="#" className = {`${FooterCSS.Footer_form} mb-5`}>
                            <input type="email" placeholder="Your Email" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    //     < class="footer mt-auto py-3 bg-light">
    //     <div class="container">
    //       <span class="text-muted">Place sticky footer content here.</span>
    //     </div>
    //   </footer>
    )
}

export default Footer;