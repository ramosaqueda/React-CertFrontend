import React from 'react';

import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import '../assets/css/home.css';
import styled from 'styled-components';

const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fcfbfa;
`;
const Home = () => {
  return (
    <div className="container">
      <Slider />
      <Subtitle>
        <h2>Categorías</h2>
      </Subtitle>
      <Categories />
      <Subtitle>
        <h2>Lo más buscado </h2>
      </Subtitle>
      <Products />
    </div>
  );
};

export default Home;
