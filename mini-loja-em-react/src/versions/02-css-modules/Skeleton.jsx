import React from 'react';
import styles from './Skeleton.module.css';

const Skeleton = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonDetails}>
        <div className={`${styles.skeletonLine} ${styles.skeletonTitle}`}></div>
        <div className={`${styles.skeletonLine}`}></div>
        <div className={`${styles.skeletonLine} ${styles.skeletonPrice}`}></div>
      </div>
    </div>
  );
};

export default Skeleton;