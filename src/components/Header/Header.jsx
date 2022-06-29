import React from 'react';
import { Container } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import { NavLink, Link} from "react-router-dom";
import '../../styles/header.css';

const nav__link = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Kits',
    path: '/kits'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Contact',
    path: '/contact'
  },
]

const Header = () => {
  return <header className='header'>
    <Container>
      <div className="nav__wrapper d-flex align-items-center justify-content-between">
        <div className='logo'>
          <img src= {logo} alt="logo" />
            <h5>Thieninho's Sport</h5>
        </div>
        {/* ==Menu== */}
        <div className='navigation'>
          <div className="menu d-flex align-items-center gap-5">
            {
              nav__link.map((item, index) => (
                <NavLink to={item.path} key={index}>
                {item.display}
                </NavLink>
            ))}
          </div>
        </div>
      {/* == nav right icons ==*/}
      <div className="nav__right d-flex align-items-center gap-3">
        <span className="cart__icon">
          <i class="ri-shopping-basket-line"></i>
          <span className="cart__badge">2</span>
        </span>

        <span className="user">
          <Link to='/login'><i class="ri-user-line"></i></Link>
        </span>

        <span className="mobile__menu">
          <i class="ri-menu-line"></i>
        </span>
      </div>

      </div>
    </Container>

  </header>
}

export default Header