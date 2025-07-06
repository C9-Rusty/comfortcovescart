import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'> 
      <div className="header-contents">
        <h2>Welcome to ComfortCoves</h2>
        <p>Choose from a curated selection of premium hotel essentials designed to bring luxury, comfort, and convenience right to your doorstep. Our mission is to enhance your lifestyle with quality amenities that elevate your personal care and living experience—everyday, anywhere..</p>
        <a href='#product-display'><button>View products</button></a>
      </div>
    </div>
  )
}

export default Header
