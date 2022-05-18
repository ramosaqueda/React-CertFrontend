import React, { useState } from 'react';

const Products = (props) => {
  const [count, setCount] = useState(0);
  return <div>Hola Products {count} </div>;
};

export default Products;
