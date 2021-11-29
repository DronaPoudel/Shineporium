import React from 'react'
import CartpageCSS from './Cart.module.css'


function Header({ itemCount }) {
    return (
      <header className="container">
        <h1>Shopping Cart</h1>
  
        <ul className={CartpageCSS.breadcrumb}>
          <li>Home</li>
          <li>Shopping Cart</li>
        </ul>
  
        <span className={CartpageCSS.count}>{itemCount} items in the cart</span>
        <hr className = "mt-5"/>
      </header>
    );
  }
  
  function ProductList({ products, onChangeProductQuantity, onRemoveProduct }) {
    return (
      <section className="container">
        <ul className={CartpageCSS.products}>
          {products.map((product, index) => {
            return (
              <li className={`${CartpageCSS.row} row`} key={index}>
                <div className={`${CartpageCSS.col} ${CartpageCSS.col_left} col-md-8 row`}>
                  <div className={`${CartpageCSS.thumbnail} col-md-4`}>
                    <a href="#">
                      <img src={product.image} alt={product.name} />
                    </a>
                  </div>
                  <div className={`${CartpageCSS.detail} col-md-8 d-flex justify-content-start`}>
                        <div className={`${CartpageCSS.details} pl-5`}>
                            <div className={CartpageCSS.name}>
                                <a href="#">{product.name}</a>
                            </div>
                            <div className={CartpageCSS.description}>{product.description}</div>
                            <div className={CartpageCSS.price}>{formatCurrency(product.price)}</div>
                        </div>
                    </div>
                </div>
  
                <div className={`${CartpageCSS.col} ${CartpageCSS.col_right} col-md-8`}>
                  <div className="d-flex justify-content-center">
                    <div className= {CartpageCSS.quantity}>
                        <input
                        type="text"
                        className={CartpageCSS.quantity}
                        step="1"
                        value={product.quantity}
                        onChange={(event) => onChangeProductQuantity(index, event)}
                        />
                    </div>
  
                    <div className={CartpageCSS.remove}>
                        <svg
                        onClick={() => onRemoveProduct(index)}
                        version="1.1"
                        className={CartpageCSS.close}
                        x="0px"
                        y="0px"
                        viewBox="0 0 60 60"
                        enableBackground="new 0 0 60 60"
                        >
                        <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                        </svg>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
  
  function Summary({
    subTotal,
    discount,
    tax,
    onEnterPromoCode,
    checkPromoCode
  }) {
    const total = subTotal - discount + tax;
  
    return (
      <section className="container">
        <div className="row">
            <div className="col-md-6">
            <div className={`${CartpageCSS.promotion} mt-4`}>
                <label htmlFor="promo-code">Have A Promo Code?</label>
                <input type="text" onChange={onEnterPromoCode} />
                <button type="button" onClick={checkPromoCode} />
            </div>
        </div>
  
            <div className="col-md-6">
            <div className={`${CartpageCSS.summary} mt-4 d-flex justify-content-center`}>
                <ul>
                    <li>
                    Subtotal <span>{formatCurrency(subTotal)}</span>
                    </li>
                    {discount > 0 && (
                    <li>
                        Discount <span>{formatCurrency(discount)}</span>
                    </li>
                    )}
                    <li>
                    Tax <span>{formatCurrency(tax)}</span>
                    </li>
                    <li className="total">
                    <b>Total <span>{formatCurrency(total)}</span></b>
                    </li>
                </ul>
            </div>
    
            <div className={`${CartpageCSS.checkout} mt-3`}>
                <button type="button"><a href="/checkout">checkout</a></button>
            </div>
        </div>
      </div>
      </section>
    );
  }
  
  const PRODUCTS = [
    {
      image: "https://via.placeholder.com/200x150",
      name: "PRODUCT ITEM NUMBER 1",
      description: "Description for product item number 1",
      price: 5.99,
      quantity: 2
    },
    {
      image: "https://via.placeholder.com/200x150",
      name: "PRODUCT ITEM NUMBER 2",
      description: "Description for product item number 1",
      price: 9.99,
      quantity: 1
    }
  ];
  const PROMOTIONS = [
    {
      code: "SUMMER",
      discount: "50%"
    },
    {
      code: "AUTUMN",
      discount: "40%"
    },
    {
      code: "WINTER",
      discount: "30%"
    }
  ];
  const TAX = 5;
  
  function Cart() {
    const CLONE_PRODUCTS = JSON.parse(JSON.stringify(PRODUCTS));
    const [products, setProducts] = React.useState(CLONE_PRODUCTS);
    const [promoCode, setPromoCode] = React.useState("");
    const [discountPercent, setDiscountPercent] = React.useState(0);
  
    const itemCount = products.reduce((quantity, product) => {
      return quantity + +product.quantity;
    }, 0);
    const subTotal = products.reduce((total, product) => {
      return total + product.price * +product.quantity;
    }, 0);
    const discount = (subTotal * discountPercent) / 100;
  
    const onChangeProductQuantity = (index, event) => {
      const value = event.target.value;
      const valueInt = parseInt(value);
      const cloneProducts = [...products];
  
      // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
      if (value === "") {
        cloneProducts[index].quantity = value;
      } else if (valueInt > 0 && valueInt < 100) {
        cloneProducts[index].quantity = valueInt;
      }
      console.log(cloneProducts, products, PRODUCTS);
      setProducts(cloneProducts);
    };
  
    const onRemoveProduct = (i) => {
      const filteredProduct = products.filter((product, index) => {
        return index != i;
      });
  
      setProducts(filteredProduct);
    };
  
    const onEnterPromoCode = (event) => {
      setPromoCode(event.target.value);
    };
  
    const checkPromoCode = () => {
      for (var i = 0; i < PROMOTIONS.length; i++) {
        if (promoCode === PROMOTIONS[i].code) {
          setDiscountPercent(parseFloat(PROMOTIONS[i].discount.replace("%", "")));
  
          return;
        }
      }
  
      alert("Sorry, the Promotional code you entered is not valid!");
    };
  
    return (
      <div className = {CartpageCSS.cart_page}>
        <Header itemCount={itemCount} />
  
        {products.length > 0 ? (
          <div>
            <ProductList
              products={products}
              onChangeProductQuantity={onChangeProductQuantity}
              onRemoveProduct={onRemoveProduct}
            />
  
            <Summary
              subTotal={subTotal}
              discount={discount}
              tax={TAX}
              onEnterPromoCode={onEnterPromoCode}
              checkPromoCode={checkPromoCode}
            />
          </div>
        ) : (
          <div className={`${CartpageCSS.empty_product} mt-5`}>
            <h3>There are no products in your cart.</h3>
            <button onClick={() => setProducts(PRODUCTS)}>Shopping now</button>
          </div>
        )}
      </div>
    );
  }
  
//   ReactDOM.render(<Page />, document.getElementById("root"));
  
  function formatCurrency(value) {
    return Number(value).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }
//   export {Header, ProductList, Summary, Page}
export default Cart;