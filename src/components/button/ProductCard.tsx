import styles from './page.module.css';
import React, { useState } from 'react';
import AddToCartButton from "../buttons/AddToCartButton";




type Props = {
    image: string;
    alt: string;
    name: string;
    price: number;
}




const ProductCard: React.FC<Props> = ({ image, alt, name, price }) => {
    return (
      <div className={styles.img1}>
        <div className={styles.parent2}>
          <img src={image} alt={alt} />
          <AddToCartButton onClick={() => console.log('Added to cart')} /> {/* Example onClick handler */}
        </div>
        <div className={styles.divs}>
          <div>{name}</div>
          <div>{price} $</div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;

