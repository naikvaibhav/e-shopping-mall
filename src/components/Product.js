import React from 'react'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'
const BASE_URL = `https://api.growcify.com/dev/`
const product_price  = require('../productPrice.json')

const Product = ({product}) =>{
    return (
        <Card className='my-3 p-3 rounded'>
        <Link to={`/product/list/${product._id}`}>
            <Card.Img src={`/images/${product.name}.jpg`} variant='top'></Card.Img>
        </Link>
        
        <Card.Body>
        <Link to={`/product/list/${product._id}`}>
            <Card.Title as='div'  className='text-center'><strong>{product.name}</strong></Card.Title>
        </Link>

        <Card.Text as='h5' className='text-center'>Price: ₹{product_price[product.name]}</Card.Text>
        
        </Card.Body>
        </Card>
    )
}

export default Product