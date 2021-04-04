import React, {useContext} from 'react';
import {ProductContext} from '../contexts/ProductListContext'
import {AuthContext} from '../contexts/AuthContext'
import { Link } from 'react-router-dom';

const Nav = () => {
  const [products, setProducts] = useContext(ProductContext)
  const [tokenSuccess, setTokenSuccess] = useContext(AuthContext)
  
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    setTokenSuccess(false)
    
}
  
return (
    <div className='nav'>
      <h3 style={{color: 'white', marginLeft: '15px', fontFamily: 'sans-serif', letterSpacing: '0.225em', fontSize: '15pt'}}>african marketplace</h3>
      <div className='nav-btns' style={{marginRight: '7%'}}>
      

      <Link to= '/register' style={{textDecoration:'none'}}>
      <button>Register</button>
      </Link>

      <Link to= '/' style={{textDecoration:'none'}}>
      <button>Sign In</button>
      </Link>

      <Link to= '/marketplace' style={{textDecoration:'none'}}>
      <button>Marketplace</button>
      </Link>

      <Link to= '/my-listings' style={{textDecoration:'none'}}>
      <button>My listings</button>
      </Link>

      <Link to= '/new-listing' style={{textDecoration:'none'}}>
      <button>New Listing</button>
      </Link>
      
      <button onClick={logout}>Sign Out</button>
      
      
      </div>
      {tokenSuccess ? <h5 style={{color: 'white', marginRight: '15px', fontFamily: 'inter'}}>Items for sale: {products.length}</h5> : 
      <h5 style={{color: 'white', marginRight: '15px', fontFamily: 'inter'}}>Please log in</h5>}
    </div>
  )
}

export default Nav;