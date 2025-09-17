import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.cardBg};
  color: ${props => props.theme.textColor};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${props => props.theme.cardShadow};
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
  cursor: pointer;

  &:hover, &:focus-visible {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.cardHoverShadow};
  }
  &:focus-visible {
    outline: 2px solid ${props => props.theme.primaryColor};
    outline-offset: 4px;
  }
`;

const ImageContainer = styled.div`
  aspect-ratio: 1 / 1;
  width: 100%;
  background-color: ${props => props.theme.imagePlaceholderBg};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Details = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  height: 3rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${props => props.theme.priceColor};
  margin-top: auto;
`;

const Rating = styled.span`
  color: ${props => props.theme.starColor};
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  align-self: flex-start;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  background-color: ${props => props.theme.tagBg};
  margin-bottom: 0.5rem;
`;

const Actions = styled.div`
  padding: 1rem;
  border-top: 1px solid ${props => props.theme.borderColor};
`;

const ProductCard = ({ product }) => {
  const { title, price, rating, tag, imageUrl } = product;

  const renderRatingStars = (rate) => {
    const stars = '★'.repeat(Math.floor(rate));
    return (
      <Rating role="img" aria-label={`Avaliação de ${rate} de 5 estrelas`}>
        {stars}
      </Rating>
    );
  };

  return (
    <StyledCard>
      <ImageContainer>
        <ProductImage
          src={imageUrl}
          alt={`Imagem do produto: ${title}`}
          loading="lazy"
        />
      </ImageContainer>
      <Details>
        {tag && <Tag>{tag}</Tag>}
        <Title>{title}</Title>
        <Price>R$ {price.toFixed(2).replace('.', ',')}</Price>
        {renderRatingStars(rating)}
      </Details>
      <Actions>
        <Button variant="solid" aria-label={`Adicionar ${title} ao carrinho`}>
          Adicionar
        </Button>
      </Actions>
    </StyledCard>
  );
};

export default ProductCard;