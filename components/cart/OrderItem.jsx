import styles from './ordercard.module.css';

export default function OrderItem({ name, price, size, imageUrl }) {
  return (
    <div className={styles.orderSlice}>
      <span>{imageUrl}</span>
      <span>{name}</span>
      <span>{size}</span>
      <span>{price}</span>
    </div>
  );
}
