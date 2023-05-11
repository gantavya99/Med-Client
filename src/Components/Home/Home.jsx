import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import data from "../../Data/Data.json";
import Product from '../Product/Product';
import Carousel from "../Carousel/Carousel";
import Question from '../Question/Question';
import Category from '../Category/Category';
import Tags from '../Tags/Tags';
const Home = () => {
  return (
    <div>
        <Header />
        <Nav />
        <div className='mx-12'>
        <Hero />
        <Category />
        <Carousel />
        <Question />
        </div>
        
        <Footer />
    </div>
  )
}

export default Home