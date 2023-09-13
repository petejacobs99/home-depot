import React from 'react';
import styles from './LineItem.module.scss'; // Import the SCSS module

export default function LineItem({ item }) {
  return (
    <div className={styles.lineItem}>
      <div className={styles.itemImage}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={styles.itemInfo}>
        <h2>{item.name}</h2>
        <p>Price: ${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
}




