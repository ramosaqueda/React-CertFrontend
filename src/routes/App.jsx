import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout';

import Products from '../components/Products';

const Home = lazy(() => import('../pages/Home'));

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
