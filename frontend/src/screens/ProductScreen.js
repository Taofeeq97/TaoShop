import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { 
    Col,
    Row,
    Image,
    ListGroup,
    Button, 
    Card
 } from 'react-bootstrap'

import Rating from '../components/Rating'
import axios from 'axios'

const ProductScreen = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
      async function fetchProduct() {
        const {data} = await axios.get(`/api/products/${id}`)
        setProduct(data);
      }
      fetchProduct();
    }, [id])
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    return (
      <div>
        <Link to='/' className='btn btn-light my-3'>
        Go Back
        </Link>
        <Row>
            <Col md={6}>
            <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h3><Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/></h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price
                                </Col>
                                <Col>
                                    <strong> $ {product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status
                                </Col>
                                <Col>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                                                    {
                            product.countInStock > 0 ? (
                                <Button className='btn-block' type='button'>
                                Add to Cart
                                </Button>
                            ) : (
                                <Button className='btn-block' type='button' disabled>
                                Add to Cart
                                </Button>
                            )
                            }

                        </ListGroup.Item>

                    </ListGroup>
                </Card>
                
            </Col>
            
        </Row>
      </div>
    );
  };
  
  export default ProductScreen;
