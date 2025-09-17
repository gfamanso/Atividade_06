import React, { useState, useEffect } from 'react';
import products from '../../data/products';
import ProductCard from './ProductCard';
import Skeleton from './Skeleton';

const AppTailwind = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-zinc-900 min-h-screen">
      <main className="container mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
            : products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </main>
    </div>
  );
};

export default AppTailwind;