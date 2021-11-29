import React from 'react';
import ProductSingle from '../components/ProductSingle/ProductSingle.component'
import Navbar from '../components/Navbar/Navbar.component'

import data from '../data/Data.json'

function ProductSinglePage() {
    return (
        <div>
            <Navbar  />
            <ProductSingle data = {data}/>
        </div>
    )
}

export default ProductSinglePage
