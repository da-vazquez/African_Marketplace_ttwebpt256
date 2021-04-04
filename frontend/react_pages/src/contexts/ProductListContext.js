import React, { useState, createContext } from 'react';
import axios from 'axios';
import data from '../data'

export const ProductContext = createContext()


export const ProductProvider = (props) => {
  
  //will eventually include user product data from server//
  const [products, setProducts] = useState(data)  

  
  /* const [products, setProducts] = useState([]);
  
  const getProducts = () => {
    axios.get('/api/products')
      .then(res => {
        console.log('retrieved user products', res)
        setProducts(res.data)
      })
      .catch(err => console.log('unable to retrieve user products', err))
    }

    useEffect(() => {
      getProducts()
    }, []) */


  return(
    <ProductContext.Provider value={[products, setProducts]} displayName='Product List Data'>
      {props.children}
    </ProductContext.Provider>
  )
}