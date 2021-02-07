import React from 'react'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'
const BASE_URL = `https://api.growcify.com/dev/`

const Category = ({category}) =>{
    return (
        <Card className='my-3 p-3 rounded'>
        <Link to={`/product/list/${category._id}`}>
            <Card.Img src={`/images/${category.name}.jpg`} variant='top'></Card.Img>
        </Link>
        
        <Card.Body>
        <Link to={`/product/list/${category._id}`}>
            <Card.Title as='div' className='text-center'><strong>{category.name}</strong></Card.Title>
        </Link> 
        </Card.Body>
        </Card>
    )
}

export default Category