import React from 'react';
import { Card } from 'react-bootstrap'


const UserProductCard = (props) => {
  

  return (

    <div className='parents'>
  
    <div className='children'>
      <Card.Body style={{width: '500px', height: '650px'}}>
        <Card.Title style={{fontWeight: 'bold', fontSize: '25px', fontFamily: 'inter', textTransform: 'uppercase'}}>{props.product_name}</Card.Title>
        <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/09/26/13/31/apple-2788616_960_720.jpg"/>
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


export default UserProductCard;