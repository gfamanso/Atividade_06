import React from 'react';
import Button from './Button';
import styles from './ProductCard.module.css'; // Importa o CSS Module

const ProductCard = ({ product }) => {
  const { title, price, rating, tag, imageUrl } = product;

  const renderRatingStars = (rate) => {
    const stars = '★'.repeat(Math.floor(rate));
    return (
      <span className={styles.productRating} role="img" aria-label={`Avaliação de ${rate} de 5 estrelas`}>
        {stars}
      </span>
    );
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <img
          src={imageUrl}
          alt={`Imagem do produto: ${title}`}
          className={styles.productImage}
          loading="lazy"
        />
      </div>
      
      <div className={styles.productDetails}>
        {tag && <span className={styles.productTag}>{tag}</span>}
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productPrice}>R$ {price.toFixed(2).replace('.', ',')}</p>
        {renderRatingStars(rating)}
      </div>

      <div className={styles.productActions}>
        <Button variant="solid" aria-label={`Adicionar ${title} ao carrinho`}>
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;