import React, { useState, useEffect } from 'react';
import products from '../../data/products';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import Skeleton from './Skeleton';
import './styles.css';

const GridSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main-container">
      <div className="product-grid">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </main>
  );
};

export default GridSection;