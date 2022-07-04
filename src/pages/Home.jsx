
 import React from 'react'
 import Helmet from '../components/Helmet/Helmet.js';
 import { Container, Row, Col } from 'reactstrap';
 import heroImg from '../assets/images/hero.svg';
 import "../styles/hero-section.css";
 import { Link } from 'react-router-dom';
 
 const Home = () => {
   return <Helmet title="Home">
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero__content'>
              <h5 className='mb-3'>Easy way to make you become football player</h5>
              <h1 className='mb-4 hero__title'><span>FIND YOUR CLUB<br /></span>Welcome to <span> 77</span> football kits store</h1>
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
              <img src={heroImg} alt="hero-img" className='w-100'/>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
   </Helmet>
 }
 
 export default Home