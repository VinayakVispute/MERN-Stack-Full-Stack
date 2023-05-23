import React, { useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    console.log("Button Clicked");
    setTitle("PopCorn")
  }
  

  return (
    <Card className="product-item">
    <ProductDate date={props.date} />
    <div className="product-item__description">
      <h2>{title}</h2>
    </div>
    <button onClick={clickHandler}>Buy Now !!!</button>
  </Card>
  );
}

export default ProductItem;