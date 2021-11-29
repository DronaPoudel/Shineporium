import React from 'react';
import IntroHeader from '../components/IntroHeader/IntroHeader.component';
import Navbar from '../components/Navbar/Navbar.component';
import Cart   from '../components/Cart/CartPage.component';
import Footer from '../components/Footer/Footer.component'

export default function CartPage() {
    return (
        <>
           <IntroHeader/>
           <Navbar />
           {/* <Banner /> */}
           <Cart/>
           <Footer />
        </>
    )
}