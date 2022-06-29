import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import AllKits from '../pages/AllKits';
import KitDetails from '../pages/KitDetails';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Register from '../pages/Register';
const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to=' /home'/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/kits' element={<AllKits/>}/>
    <Route path='/kits/:id' element={<KitDetails/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
}

export default Routers