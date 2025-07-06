import {useState,useEffect,useContext} from 'react'
import './ProductItem.css'
import {assets} from '../../assets/assets'
import {StoreContext} from '../../context/StoreContext'

const ProductItem = ({id,name,description,price,image}) => {
  const {cartItems,setCartItems,addToCart,removeFromCart,url} = useContext(StoreContext);


  return (
    <div className='product-item'> 
      <div className="product-item-image-container">
        <img className='product-item-image' src={image} alt="" />
        {
          !cartItems[id]
            ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
            : <div className="product-item-counter">
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p className='product-count'>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>

      <div className="product-item-info">
          <p className='product-item-name'>{name}</p>
          <p className='product-item-desc'>{description}</p>
          <div className="product-item-price-rating">
            <p className='product-item-price'>₹{price}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
      </div>  
    </div>
  )
}

export default ProductItem
