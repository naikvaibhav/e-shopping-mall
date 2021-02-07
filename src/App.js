import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap'
import CategoryList from './pages/CategoryList'
import ProductList from './pages/ProductList'

const App = () => {
  return (
    <Router>
    <Header/>
    <main className="py-3">
    <Container>
    <Route path='/' component={CategoryList} exact/>
    <Route path='/product/list/:categoryid' component={ProductList} />
    </Container>
    </main>
    <Footer/>
    </Router>
  );
}

export default App;
