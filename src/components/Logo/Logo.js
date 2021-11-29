import React, { useContext } from 'react';
import LogoCSS from './Logo.module.css';
import { ProductContext } from '../Context';
import Data from '../../data/Data.json'


export default function Logo() {
    const data = useContext(ProductContext);
    console.log(data,"dataaaaaaaaaaaaaaaaaaaaaaaaa")
    return (
        <div>
            {Data.Logo.map(items=>{
                return (
                        <div className={`${LogoCSS.rounded_logo} p-4 mr-3 px-5 rounded-circle pt-4`}>
                            <img width="60px" src={items.img_logo} alt="" />
                            <br />
                            <img class="img-fluid pb-4" src={"https://i.ibb.co/XDTtBYk/SHINEPORIUM-Text-Logo.png"} alt="" />
                        </div>
                        
                        )
                    })
            }
            
            
        </div>
    )
}
