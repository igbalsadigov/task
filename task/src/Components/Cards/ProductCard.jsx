import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ item }) => {
  return (
    <div className={styles.product}>
      <div className={styles.Card}>
        <img src={item.thumbnail} alt="" />
        <p>{item.title}</p>
        <p>{item.price}</p>
        <div>
          <button>add</button>
          <button>fav</button>
          </div>
      </div>
    </div>
  );
};

export default ProductCard;
