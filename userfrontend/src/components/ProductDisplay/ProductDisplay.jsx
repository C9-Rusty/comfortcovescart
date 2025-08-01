import {useContext} from 'react'
import './ProductDisplay.css'
import {StoreContext} from '../../context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'

const ProductDisplay = ({category}) => {

  const {product_list} = useContext(StoreContext)

  return (
    <div className='product-display' id='product-display'> 
      <h2>All of our essentials</h2>
      <div className="product-display-list">
        {
          product_list.map((item,index)=>{
            if(category=='All' || category===item.category)
                return <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description}/>
          })
        }
      </div>
    </div>
  )
}

export default ProductDisplay
