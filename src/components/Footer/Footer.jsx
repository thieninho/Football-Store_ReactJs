import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo1.png';
import "../../styles/footer.css"


const Footer = () => {
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='3' md='4' sm='6'>
        <div className='footer__logo text-start'>
          <img src= {logo} alt="logo" />
            <h5>77 Football Store</h5>
            <p>Best kits in Viet Nam. Best choice for you.</p>
        </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
        <h5 className='footer_title'>Business hours</h5>
        <ListGroup className='deliver_time-list'>
          <ListGroupItem className='delivery__time-item border-0 ps-0'>
            <span>Monday - Friday</span>
            <p>8:00am - 11:00pm</p>
          </ListGroupItem>
          <ListGroupItem className='delivery__time-item border-0 ps-0'>
            <span>Saturday - Sunday</span>
            <p>10:00am - 6:00pm</p>
          </ListGroupItem>
        </ListGroup>
        </Col>
        

        <Col lg='3' md='4' sm='6'>
        <h5 className='footer_title'>Contact</h5>
        <ListGroup className='deliver_time-list'>
        <ListGroupItem className='delivery__time-item border-0 ps-0'>
            <p>Address: Thu Duc city, Ho Chi Minh city, Viet Nam</p>
          </ListGroupItem>
          <ListGroupItem className='delivery__time-item border-0 ps-0'>
            <span>Phone: 0977214077</span>
          </ListGroupItem>
          <ListGroupItem className='delivery__time-item border-0 ps-0'>
            <span>Email: lil.thieninho@gmail.com</span>
          </ListGroupItem>
        </ListGroup>
        </Col>

        <Col lg='3' md='4' sm='6'>
        <h5 className='footer_title'>Newsletter:</h5>
        <p className='sub'>Subscribe our newsletter</p>
        <div className='newsletter'>
          <input type="email" placeholder='Enter your email' />
          {/* <span><i class='ri-send-plane-line'></i></span> */}
        </div>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col lg='6' md='6'>
          <p className='copyright__text'>
            Nocopyright - 2022, made by Thieninho. All Right Reserved.
          </p>
        </Col>
        <Col lg='6' md='6'>
          <div className="social__links d-flex align-items-center gap-4 justify-content-end">
            <p className='m-0'>Follow me: </p>
            <a href='https://www.facebook.com/lilthieninho.2605/' target="_blank"><i class="ri-facebook-line"></i></a>
            <a href='https://github.com/thieninho/' target="_blank"><i class="ri-github-line"></i></a>
            <a href='https://www.instagram.com/lil.thieninho/' target="_blank"><i class="ri-instagram-line"></i></a>
            <a href='https://www.linkedin.com/in/thien-nguyen-164613243/' target="_blank"><i class="ri-linkedin-line"></i></a>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer