import React from 'react';
import Button from './Button';

const ProductCard = ({ product }) => {
  const { title, price, rating, tag, imageUrl } = product;
  
  const renderRatingStars = (rate) => {
    const stars = '★'.repeat(Math.floor(rate));
    return (
      <span className="text-yellow-400" role="img" aria-label={`Avaliação de ${rate} de 5 estrelas`}>
        {stars}
      </span>
    );
  };

  return (
    <div className="flex flex-col bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-md 
                    transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ring-offset-2 dark:ring-offset-zinc-900">
      
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-zinc-700">
        <img
          src={imageUrl}
          alt={`Imagem do produto: ${title}`}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        {tag && (
          <span className={`text-xs font-bold uppercase rounded-full px-2 py-1 self-start mb-2 ${tag === 'Promo' ? 'bg-green-500' : 'bg-blue-500'} text-white`}>
            {tag}
          </span>
        )}
        <h3 className="font-semibold text-lg leading-tight h-12 overflow-hidden text-gray-900 dark:text-gray-100 line-clamp-2">
          {title}
        </h3>
        <p className="font-bold text-xl mt-auto text-gray-900 dark:text-gray-100">
          R$ {price.toFixed(2).replace('.', ',')}
        </p>
        {renderRatingStars(rating)}
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-zinc-700">
        <Button variant="solid">Adicionar</Button>
      </div>
    </div>
  );
};

export default ProductCard;