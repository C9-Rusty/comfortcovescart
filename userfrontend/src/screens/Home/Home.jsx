import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import {useState,useEffect} from "react"
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay'

const Home = () => {
  const [category, setCategory]= useState("All")
  return (
    <div className='home'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <ProductDisplay category={category} />
    </div>
  )
}

export default Home
