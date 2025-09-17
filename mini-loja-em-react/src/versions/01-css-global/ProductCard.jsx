import React from 'react';
import Button from './Button';
import './styles.css'; // Importa o arquivo de estilo global para esta versão

const ProductCard = ({ product }) => {
  const { title, price, rating, tag, imageUrl } = product;

  const renderRatingStars = (rate) => {
    const stars = '★'.repeat(Math.floor(rate));
    return (
      <span className="product-rating" role="img" aria-label={`Avaliação de ${rate} de 5 estrelas`}>
        {stars}
      </span>
    );
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={imageUrl}
          alt={`Imagem do produto: ${title}`}
          className="product-image"
          loading="lazy"
        />
      </div>
      
      <div className="product-details">
        {tag && <span className="product-tag">{tag}</span>}
        <h3 className="product-title">{title}</h3>
        <p className="product-price">R$ {price.toFixed(2).replace('.', ',')}</p>
        {renderRatingStars(rating)}
      </div>

      <div className="product-actions">
        <Button variant="solid" aria-label={`Adicionar ${title} ao carrinho`}>
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;