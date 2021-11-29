import React, { Fragment } from 'react';
import IntroHeader from '../components/IntroHeader/IntroHeader.component';
import Navbar from '../components/Navbar/Navbar.component';
import Banner from '../components/Banner/Banner.component';
import Doublecolumn from '../components/Doublecolumn/Doublecolumn.component';
import FullwidthSection from '../components/FullwidthSection/FullwidthSection';
import Seeallpage from '../components/Allitems/Allitems.component';
import Footer from '../components/Footer/Footer.component'

import {ProductProvider} from "../components/Context"
const garment = {
    name : "Hospital Garment",
    itemscount: 4,
    // item: HospitalGarments
}
const furniture = {
    name : "Hospital Furniture",
    itemscount: 3,
    // items: HospitalGarments
}
export default function Homepage() {
    return (
        <React.Fragment>
            <ProductProvider>
                <IntroHeader />
                <Navbar/>
                <Banner />
                <Doublecolumn />
                <FullwidthSection {...garment}/>
                <FullwidthSection {...furniture}/>
                {/* <Seeallpage /> */}
                <Footer />
            </ProductProvider>
        </React.Fragment>
    )
}
