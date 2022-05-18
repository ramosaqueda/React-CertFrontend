import React from 'react';
import Footer from '../components/Footer';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => (
  <div className="layout">
    <Announcement />
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
