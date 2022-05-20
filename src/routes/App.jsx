import React, { ç, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout';
import Products from '../components/Products';

import Products from '../components/Products';

const Home = lazy(() => import('../pages/Home'));

const App = () => (
  <Router>
    <Layout>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
=======
        <Route exact path="/" element={<Home />} />
>>>>>>> fd670fd093ce3b57806757b183e588b0090b1d6e
        <Route path="/productos" element={<Products />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
