import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import products from '../../data/products';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import Skeleton from './Skeleton';

const Main = styled.main`
  padding-top: 5rem;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.textColor};
  min-height: 100vh;
  transition: background-color 0.2s ease, color 0.2s ease;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 1rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 769px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

const AppStyledComponents = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>      
      <Main>
        <Grid>
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
            : products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </Grid>
      </Main>
    </>
  );
};

export default AppStyledComponents;