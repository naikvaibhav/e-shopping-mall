import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Category from '../components/Category'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import axios from 'axios'
import { Link } from 'react-router-dom'


const ProductList = ({match}) => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(()=>{
    axios.get(`https://api.growcify.com/dev/product/list/${match.params.categoryid}`).then(({data})=>{ const filterUnWantedProduct = data.filter(product=> product.name !== 'Test Prod2'); setAllProducts([...filterUnWantedProduct])}).catch(err=>console.log(err));
    },[match.params.categoryid])
   

    return(
        <>
        <h1 className='text-center'>Products</h1>
        <Row><Link className='btn btn-light my-3' to='/'>Go Back</Link></Row>
        {
            allProducts.length <= 0 ? <Loader/> : (<Row>
            {allProducts.map((product)=>{
                return (
                    <Col key={product._id} sm={12} md ={6} lg={4} xl={3}>
                    <Product product={product}/>
                    </Col>
            )
            })}
            </Row>)
        }
        </>
    )
}

export default ProductList