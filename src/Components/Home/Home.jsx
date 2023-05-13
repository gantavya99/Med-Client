import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import data from "../../Data/Data.json";
import Product from '../Product/Product';
import Question from '../Question/Question';
import Category from '../Category/Category';
import Tags from '../Tags/Tags';
import ProductByCategory from '../ProductByCategory/ProductByCategory';
import NewProducts from '../NewProducts/NewProducts';
import Features from '../Features/Features';
const Home = () => {
  return (
    <div>
        <Header />
        <Nav />
        <div className='mx-12'>
        <Hero />
        <Tags />
        <Category />
        <ProductByCategory />
        <Features />
        <NewProducts />
        <Question />
        </div>
        
        <Footer />
    </div>
  )
}

export default Home