import React, {useEffect} from 'react'
import { 
    Row,
    Col
} from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import MessageDisplay from '../components/MessageDisplay'


const HomeScreen = () => {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div>
        <h1>Latest products</h1>

        {
        loading ? <Loader/>
        : error ? <MessageDisplay variant='danger'>{error}</MessageDisplay>
        : 
        <Row>
            {products.map(product => (
                <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product}/>
                </Col>
            ))}
        </Row>
    }
    
    </div>
  )
}


export default HomeScreen
