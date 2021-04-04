import React, { useState, useContext } from 'react'
import { Card } from 'react-bootstrap'


const MarketplaceCard = (props) => {
  
return (
  
<div className='parent'>
  
  <div className='child'>
    <Card.Body style={{width: '500px', height: '650px'}}>
      <Card.Title style={{fontWeight: 'bold', fontSize: '25px', fontFamily: 'inter', textTransform: 'uppercase'}}>{props.product_name}</Card.Title>
      <Card.Img variant="top" src="https://d3vn5rg72hh8yg.cloudfront.net/cdn/imagesource/previews/7676/c8a63adebd0632f60ee1d502624520ca/3/45cf4bfe562f47d994504c136cd95add/2302661.jpg"/>
      <Card.Text style={{textAlign: 'left'}}>
      <h5 style={{fontStyle: 'italic', textAlign: 'left'}}>${props.seller_price}</h5>
      <Card.Text style={{fontFamily: 'inter', fontWeight: 'bold', textAlign: 'left', minHeight: '80px'}}><p>{props.description}</p></Card.Text>
      <br/>
      <Card.Text style={{fontFamily: 'inter', fontWeight: 'bold', textAlign: 'center', }}><p>Location: {props.location}</p></Card.Text>
      <br/>
      <Card.Text style={{fontFamily: 'inter', fontWeight: 'bold', textAlign: 'center', }}><p>Seller: {props.seller_name}</p></Card.Text>
      </Card.Text>
    </Card.Body>
    <small className="text-muted"></small>
      
    
    </div>
  </div>
   
  )
}

export default MarketplaceCard;