import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './Home';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Home/>
    </>
  )
}

export default Layout