import { createContext,useState,useEffect } from "react";
import axios from 'axios'
import { product_list as localProductList } from '../assets/assets';




export const StoreContext = createContext();

const StoreContextProvider = ({children})=>{
    const [cartItems,setCartItems] = useState({})
    const [token,setToken] = useState(null)
    const [product_list,setProductList] = useState(localProductList)
    
    const url='https://comfortcovescart.onrender.com'
    //const url ="http://localhost:4000"

    const fetchProductList = async()=>{
        const response = await axios.get(url+"/api/product/list")
        setProductList(response.data.data)
    }

    useEffect(()=>{
        async function loadData(){
            await fetchProductList()
            if(localStorage.getItem('token')){
                setToken(localStorage.getItem('token'))
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData()
    },[])
    

    const loadCartData = async(token)=>{
        const response = await axios.get(url+"/api/cart/get",{headers:{token}})
        setCartItems(response.data.cartData)
    }

    const addToCart=async(itemId)=>{
        if(!cartItems[itemId])
            setCartItems({...cartItems,[itemId]:1})
        else
            setCartItems({...cartItems,[itemId]:cartItems[itemId]+1})
        if(token){
            try {
                await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
            } catch (error) {
                console.log(error)
            }
        }
    }
    const removeFromCart=async(itemId)=>{
        setCartItems({...cartItems,[itemId]:cartItems[itemId]-1})
        if(token){
            try {
                await axios.delete(`${url}/api/cart/remove?itemId=${itemId}`,{headers:{token}})
            } catch (error) {
                console.log(error)
            }
        }
    }
    const getTotalCartAmount=()=>{
        let total=0;
        for(let eltId in cartItems ){
            if(cartItems[eltId]>0){
                let itemInfo = product_list.find(product=>product._id==eltId)
                total+=itemInfo.price * cartItems[eltId]
            }
        }
        return total;
    }

    const contextValue={
        cartItems,
        setCartItems,
        product_list,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
