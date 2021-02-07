import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Category from '../components/Category'
import Loader from '../components/Loader'
import Message from '../components/Message'
import axios from 'axios'

const CategoryList = () => {
    const [allCategories, setAllCategories] = useState([])
    useEffect(()=>{
    axios.get(`https://api.growcify.com/dev/category/list`).then(({data})=>setAllCategories([...data])).catch(err=>console.log(err));
    },[])
   
    return(
        <>
        <h1 className='text-center'>All Categories</h1>
        {allCategories.length <= 0 ? <Loader/> : (<Row>
            {allCategories.map((category)=>{
            return (
                  <Col key={category._id} sm={12} md ={6} lg={4} xl={3}>
                  <Category category={category}/>
                  </Col>
            )
            })}
        </Row>)}
        </>
    )
}

export default CategoryList