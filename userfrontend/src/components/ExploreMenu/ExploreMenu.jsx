import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu'> 
      <h1>Explore</h1>
      <p className='explore-menu-text'>Choose from a diverse collection of premium hotel essentials. Our mission is to meet your needs and elevate your everyday comfort with products designed for luxury and convenience.</p>
      <div className="explore-menu-list">
        {
          menu_list.map((item,index)=>{
            return(
              <div onClick={()=>setCategory(category===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
              </div>
            )
          })
        }
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
