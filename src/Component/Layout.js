import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './Home';
import NavbarComp from './Navbar';

const Layout = () => {
  return (
    <>
    <NavbarComp/>
    <Outlet/>
    <Home/>
    </>
  )
}

export default Layout