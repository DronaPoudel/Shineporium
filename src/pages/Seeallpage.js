import React from 'react';
import IntroHeader from '../components/IntroHeader/IntroHeader.component';
import Navbar from '../components/Navbar/Navbar.component';
import Banner from '../components/Banner/Banner.component';
import Seeallitems from '../components/Allitems/Allitems.component';

export default function SeeallPage() {
    return (
        <>
           <IntroHeader/>
           <Navbar />
           {/* <Banner /> */}
           <Seeallitems/>
        </>
    )
}