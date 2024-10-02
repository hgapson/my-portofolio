// src/components/Layout.tsx

import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './HomePage/Navbar'

import useScrollToTop from './UseScrollToTop'
//import './Layout.css'; // Ensure this path is correct

const Layout = () => {
  useScrollToTop() // making page start from top
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow pb-16 pt-16">
        {' '}
        {/* Adjust padding to accommodate header/footer */}
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
