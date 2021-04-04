import React, { useContext } from 'react'
import axios from 'axios'

import UserProductCard from './ProductCard';
import {ProductContext} from '../contexts/ProductListContext';

//need to add edit and delete functionality to allow user to manage personal listings

const UserProductList = () => {
  const [products, setProducts]= useContext(ProductContext)
   
  

  return (
    <div>
      <h2 style={{marginTop: '30px', marginBottom: '50px', color: 'white', fontFamily: 'inter'}}>My Listings</h2>
      <div className="parents">
      {products.map(product => (
        <div className="children">
          <UserProductCard
              product_name={product.product_name} 
              price={product.price} 
              description={product.description}
              category={product.category}
              location={product.location} 
              key={product.id}
              />
            </div>
          ))}
      </div>
    </div>
  )
}


export default UserProductList;