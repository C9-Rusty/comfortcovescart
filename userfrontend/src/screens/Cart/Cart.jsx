import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const { cartItems, product_list, addToCart, removeFromCart,getTotalCartAmount,url } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Modify</p>
        </div>
        <br />
        <hr />
        {product_list.map((product, index) => {
        if (cartItems[product._id] > 0) {
          return (
            <>
              <div className="cart-items-title cart-items-item">
                <img className="product-image" src={product.image} alt="" />
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{cartItems[product._id]}</p>
                <p>{cartItems[product._id] * product.price}</p>
                <div className="cart-counter product-item-counter">
                  <img
                    onClick={() => removeFromCart(product._id)}
                    src={assets.remove_icon_red}
                    alt=""
                  />
                  <p >{cartItems[product._id]}</p>
                  <img
                    onClick={() => addToCart(product._id)}
                    src={assets.add_icon_green}
                    alt=""
                  />
                </div>
              </div>
              <hr />
            </>
          );
        }
      })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>{getTotalCartAmount()+20}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Enter promo code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
