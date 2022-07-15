
 import React from 'react'
 import Helmet from '../components/Helmet/Helmet.js';
 import { Container, Row, Col } from 'reactstrap';
 import heroImg from '../assets/images/hero.svg';
 import "../styles/hero-section.css";
 import { Link } from 'react-router-dom';
 import '../styles/home.css';
 import Category from '../components/UI/category/Category.jsx';
 import featureImg01 from '../assets/images/servive-01.png';
 import featureImg02 from '../assets/images/servive-02.png';
 import featureImg03 from '../assets/images/servive-03.png';

 import products from '../assets/fake-data/products.js';
 import foodCategoryImg01 from '../assets/images/category-01.png';
 import foodCategoryImg02 from '../assets/images/category-02.png';
 import foodCategoryImg03 from '../assets/images/category-04.png';

import ProductCard from '../components/UI/product-cart/ProductCard.jsx';
 const featureData = [
  {
    title:'Quick Delivery',
    imgUrl: featureImg01,
    
  },
  {
    title:'Quick Replies',
    imgUrl: featureImg02,
  },
  {
    title:'Receiving and inspecting goods',
    imgUrl: featureImg03,
    
  }
 ]

 
 const Home = () => {
   return <Helmet title="Home">
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero__content'>
              <h5 className='mb-3'>Easy way to make you become football player</h5>
              <h1 className='mb-4 hero__title'><span>FIND YOUR CLUB<br /></span>Welcome to <span> 7763</span> football</h1>
              <p>Make moves in the latest football shirts and kits from the biggest names in the Premier League and English Football League, alongside leading clubs in the international field including the Spanish La Liga, German Bundesliga, French Ligue 1 and more.</p>
              <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                <button className="order__btn d-flex align-items-center justify-content-between">Order now <i class="ri-arrow-right-s-line"></i></button>
                <button className='all__kits-btn'><Link to ="/kits">See all Kits</Link></button>
              </div>
              <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                <p className='d-flex align-items-center gap-2'>
                  <span className='shipping__icon'><i class="ri-car-line"></i></span>
                  No shipping charge
                </p>
                <p className='d-flex align-items-center gap-2'>
                  <span className='shipping__icon'><i class="ri-shield-check-line"></i></span>
                  100% secure checkout
                </p>
              </div>
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className='hero__img'>
              {<img src={heroImg} alt="hero-img" className='w-100'/>}
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section className='pt-0'>
      <Category/>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h5 className='feature__subtitle'>What we serve</h5>
            <h2 className='feature__title'>Just sit back at home</h2>
            <h2 className='feature__title'>
              We will <span> take care</span>
            </h2>
            <p className='mb-1 mt-4 feature__text'>The 7763 Football jerseys are crafted from 100% premium cotton and made in Portugal to exacting standards which gives the shirts a tangible sense of quality to the touch. Each retro-look inspired shirt from Football Town has been exclusively designed for the apparel brand by star designer, Emilio Sansolini.</p>
            <p className='feature__text'>We has captured the spirit of Fashion & Football with his first class line up of designs that are sure to sate the style appetites of any fashion and football aficionado.
            {" "}
            </p>
          </Col>
          {
            featureData.map((item, index)=>(
              <Col lg='4' md= '4' key={index} className='mt-5'>
                <div className="feature__item text-center p-3">
                  <img src={item.imgUrl} alt="feature-img" className='w-50 mb-3' />
                  <h5 className=' fw-bold '>{item.title}</h5>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2>Popular Products</h2>
          </Col>

          <Col lg='12'>
            <div className="kits__category d-flex align-items-center justify-content-center gap-5">
              <button className='all__btn kitsBtnActive '>All</button>
              <button className='d-flex align-items-center gap-2'><img src={foodCategoryImg01} alt='' />Club Kits</button>
              <button className='d-flex align-items-center gap-2'><img src={foodCategoryImg02} alt='' />Nation Kits</button>
              <button className='d-flex align-items-center gap-2'><img src={foodCategoryImg03} alt='' />Windbreaker</button>
            </div>
          </Col>
          {products.map((item) => ( 
          <Col lg='4' md='6' key={item.id} className='mt-5'>
            <ProductCard item={item} />
          </Col>
          ))}
        </Row>
      </Container>
    </section>


   </Helmet>
 }
 
 export default Home