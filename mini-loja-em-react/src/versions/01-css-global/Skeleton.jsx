import React from 'react';
import './styles.css'; // Importa o arquivo de estilo global

const Skeleton = () => {
  return (
    <div className="skeletonCard">
      <div className="skeletonImage"></div>
      <div className="skeletonDetails">
        <div className="skeletonLine skeletonTitle"></div>
        <div className="skeletonLine"></div>
        <div className="skeletonLine skeletonPrice"></div>
      </div>
    </div>
  );
};

export default Skeleton;