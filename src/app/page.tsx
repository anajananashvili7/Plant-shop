'use client'

import React from 'react';
import ProductCard from "../components/button/ProductCard" 
import styles from "../components/button/page.module.css"
import Modes from "../components/colorModes/Modes"
import Navigation from '@/components/Navigation/Navigation';
import SecondSection from '@/components/secondSection/SecondSection';
import Modes2 from "@/components/BlackAndWhite/BlackAndWhite"




const App: React.FC = () => {
  return (

    <div className={styles.container}>
      <Modes2 />
      <Navigation />
      <Modes />
      <div className={styles.row}>
        <ProductCard image="/img-1.png" alt="Image 1" name="SUCCULENT" price={50} />
        <ProductCard image="/img-2.png" alt="Image 2" name="SPIDER PLANT" price={30} />
        <ProductCard image="/img-3.png" alt="Image 3" name="SUCCULENT" price={50} />
      </div>
      <div className={styles.row}>
        <ProductCard image="/img-4.png" alt="Image 4" name="SUCCULENT" price={50} />
        <ProductCard image="/img-5.png" alt="Image 5" name="SPIDER PLANT" price={30} />
        <ProductCard image="/img-6.png" alt="Image 6" name="SUCCULENT" price={50} />
      </div>
      <SecondSection />
    </div>
  );
};

export default App;


