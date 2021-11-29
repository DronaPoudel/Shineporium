import React, { createContext, useState } from 'react'
import Routes from '../pages/Routes'
import Data from "../data/Data.json"
import Logo from './Logo/Logo';


export const ProductContext = createContext();

// function Context() {
//     return (
//         <div>
//             <img width = "60px" src="https://i.ibb.co/6ZjLKpr/SHINEPORIUM-Img-Logo.png" alt="" />
//             <br />
//             <img class = "img-fluid pb-4" src="https://i.ibb.co/XDTtBYk/SHINEPORIUM-Text-Logo.png" alt="" />
//         </div>
//     )
// }
// export {Context}

// const { Provider } = ProductContext;

export const ProductProvider = (props) => {
  const producteg = useState(Data.products.examinationGloves);
  const productpg = useState(Data.products.plasticGloves);
  const Logo = './Logo/Logo';
  console.log(producteg, "State Data");

return(
  //  <Provider value={[message, setMessage]}>
  <ProductContext.Provider value={{producteg, productpg, Logo}}>
      {props.children}
  </ProductContext.Provider>
 );
}

export const ProductConsumer = ProductContext.Consumer;
// () => (
//   <createContext.Consumer>
//   </createContext.Consumer>
// )
