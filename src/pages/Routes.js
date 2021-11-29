import React, {Component} from "react";
import {
    BrowserRouter ,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import App from '../App';

//   import data from '../data/Data.json'
import {Login, SignUp} from '../components/Login/Login'
import ProductSinglePage from './ProductSinglePage'
import Home from './Homepage';
import ErrorPage from './ErrorPage';
import Allitems from './Seeallpage';
// import {Header} from '../components/Cart/CartPage.component';
import CartPage   from './CartPage';
import Checkout from '../components/checkout/checkout.component'

import Topbar from '../components/Dashboard/components/topbar/Topbar'
import Dashboard from '../components/Dashboard/App'
export default function Routes() {
    return (
    //    <App>
            <Switch>
                <Route path = "/Register" >
                    <SignUp/>
                </Route>
                <Route path = "/Login" >
                    <Login/>
                </Route>
                <Route exact path = "/">
                    < Home />
                </Route>
                <Route path = "/all_Examination_Gloves">
                    < Allitems />
                </Route>
                <Route path = "/Plastic_Gloves/:id" >
                    < ProductSinglePage/>
                </Route>
                <Route path = "/cart" >
                    < CartPage/>
                </Route>
                <Route path = "/checkout" >
                    < Checkout/>
                </Route>
                <Route path = "/Dashboard" >
                    < Dashboard/>
                </Route>
                <Route path = "/Dashboardd" >
                    < Topbar/>
                </Route>
                <Route
                    component = {ErrorPage}
                />
                    {/* <ErrorPage /> */}
                {/* </Route> */}
            </Switch>
        // </App>
    )
}
