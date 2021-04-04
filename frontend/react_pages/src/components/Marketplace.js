import React, { useEffect, useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth'
import MarketplaceCard from './MarketplaceCard';

//need to allow user to:
//see relevant prices in various categories to help them set their own prices
const initialValues = [
{
  product_name: '',
  seller_price: '', 
  qty: '', 
  description: '',
  seller_name: '', 
  location: '',
  category: ''
}
]

const Marketplace = () => {
  const [items, setItems] = useState(initialValues);
  const [loading, setLoading] = useState(true)
  
  const getAllMarketItems = () => {
    axiosWithAuth().get('/api/market')
      .then(res => {
        console.log('retrieved marketplace items', res.data)
        setItems(res.data)
        setLoading((v) => !v)
      })
      .catch(err => console.log('unable to retrieve marketplace items', err))
    }

     useEffect(() => {
      getAllMarketItems()
     
    }, []) 
  

    return (
      <div className="marketplace">
        <h2 style={{textAlign: 'center', marginTop: '35px', marginBottom: '40px', fontFamily: 'inter', color: 'white'}}>Marketplace</h2> 
      
      {loading ? <h2 style={{color: 'white'}}>Loading..please wait</h2> :
      
        <div className='parent'>
          {items.map(product => (
            <div className='child'> 
              <MarketplaceCard 
                product_name={product.product_name} 
                category={product.category} 
                seller_price={product.seller_price} 
                description={product.description}
                seller_name={product.seller_name}
                location={product.location}
                qty={product.qty}
                key={product.product_id}/>
            </div>
          ))}
        </div> }
      </div>
    )
          
  }





export default Marketplace;