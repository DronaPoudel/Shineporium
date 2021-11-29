import React from 'react';
import {Link} from 'react-router-dom';
import NavbarCSS from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className = "container px-0">
            <nav className={`${NavbarCSS.navbar_shineporium} navbar navbar-expand-lg navbar-light d-flex justify-content-end`}>
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
                        <Link to = "/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/About" className="nav-link">About Us</Link>
                    </li>
                    <li className={`${NavbarCSS.drop_down} nav-item dropdown`}>
                        {/* <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Our Products
                        </a> */}
                        <Link to = ""className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Our Products
                        </Link>
                        <div className={`${NavbarCSS.navbar_shineporium} dropdown-menu`} aria-labelledby="navbarDropdown">
                            <Link to = "/action" className="dropdown-item"> Action </Link>
                            <Link to = "/another_action" className="dropdown-item"> Another action </Link>
                            
                        <div className="dropdown-divider"></div>
                            <Link to = "" className="dropdown-item"> Something else here </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to = "/blog" className="nav-link"> Blog </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/contact-us" className="nav-link">Contact Us</Link>
                    </li>
                    </ul>
                    <button className= {`${NavbarCSS.btn_prescription} btn btn-outline-light mr-3`}>Upload Bill</button>
                </div>
            </nav>
        </div>
    )
}
