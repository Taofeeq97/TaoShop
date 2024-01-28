import React from 'react'
import { 
    Card
 } from 'react-bootstrap'
 
 import Rating from './Rating'
 import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 px-7 rounded'>
        <Link to={`/product/${product.id}`}>
            <Card.Img src={product.image}/>
        </Link>
        <Card.Body>
        <Link to={`/product/${product.id}`}>
            <Card.Title as="div">
                <strong>
                    {product.name}
                </strong>
            </Card.Title>
        </Link>
        <Card.Text as='div'>
            <div className='my-3'>
                {product.rating} from {product.numReviews} reviews
                <Rating value={product.rating} text={`${product.numReviews} reviews`}  color={'#f8e825'}/>
            </div>
        </Card.Text>

        <Card.Text  as='h3'>
            ${product.price}
        </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product
