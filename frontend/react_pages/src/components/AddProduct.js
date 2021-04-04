import React, { useState, useContext } from 'react'
import {ProductContext} from '../contexts/ProductListContext';
import { useHistory } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'


//MVP Requirements:
//make listing for items they want to sell, which will show up to all users
  const listingValues = [
    {
      product_name: '',
      category_name: 'Other',
      seller_price: '', 
      qty: '', 
      description: '',
      seller_name: 'Adisa', 
      location: 'Kinshasa',
  }]

 

  const AddProduct = () => {
    const [item, setItem] = useState(listingValues);
    const [products, setProducts] = useContext(ProductContext)//contains user product list in state
    
    const history = useHistory();
    const productLink = () => history.push('/product-list');//invoked on form submit
    const homeLink = () => history.push('/');//invoked on form submit

    
    const handleValueChanges = e => {
      setItem({
        ...item,
        [e.target.name]: e.target.value
    })
  }

    const cancelEdit = e => {
      e.preventDefault()
      homeLink()
    }

    
    const addProduct = e => {
      e.preventDefault()
      axiosWithAuth().post('/api/market', item)
      .then(res => {
        console.log('added new item to marketplace!', res.data)
        setProducts(...products, res.data)
        productLink()
      })
      .catch(err => {
        console.log('unable to add new item', err.message)
      })
    } 




  return (
    <div className='add-item-form'>
      <h2 style={{marginTop: '30px', fontFamily: 'inter', color: 'white'}}>Sell a new product</h2>
      <form onSubmit={addProduct}> 
      <label htmlFor='product_name' style={{fontFamily: 'inter', fontWeight: 'bold'}}>Product Name:</label>
        <input style={{textAlign: 'center'}}
          type='text' 
          name='product_name' 
          value={item.product_name}
          onChange={handleValueChanges}/>
      <label htmlFor='seller_name' style={{fontFamily: 'inter', fontWeight: 'bold'}}>Your Name:</label>
        <input style={{textAlign: 'center'}}
          type='text' 
          name='seller_name' 
          value='Adisa'
          onChange={handleValueChanges}/>    
      <label htmlFor='seller_price' style={{fontFamily: 'inter', fontWeight: 'bold'}}>Price:</label>    
        <input style={{textAlign: 'center'}}
          type='text' 
          name='seller_price' 
          value={item.seller_price}
          onChange={handleValueChanges}/>
      <label htmlFor='description' style={{fontFamily: 'inter', fontWeight: 'bold'}}>Description:</label>      
        <input style={{textAlign: 'center'}}
          type='text' 
          name='description' 
          value={item.description}
          onChange={handleValueChanges}/>
       <label htmlFor='qty' style={{fontFamily: 'inter', fontWeight: 'bold'}}>Quantity in stock:</label>      
        <input style={{textAlign: 'center'}}
          type='text' 
          name='qty' 
          value={item.qty}
          onChange={handleValueChanges}/>
      
      <label htmlFor='seller_price' style={{fontFamily: 'inter', fontWeight: 'bold'}}>Category:</label>    
        <input style={{textAlign: 'center'}}
          type='text' 
          name='category_name' 
          value='Other'
          onChange={handleValueChanges}/>
      <label htmlFor='description' style={{fontFamily: 'inter', fontWeight: 'bold'}}>Location:</label>      
        <input style={{textAlign: 'center'}}
          type='text' 
          name='location' 
          value='Kinshasa'
          onChange={handleValueChanges}/>
       

      <div className='form-btn'>
        <button className='add-item-btn'>Add Product</button>
        <button className='add-item-btn' onClick={cancelEdit} style={{marginLeft: '10px'}}>Cancel</button>
      </div>
    
    </form>
  </div>
  )
}


export default AddProduct