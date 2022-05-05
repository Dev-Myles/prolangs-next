import styles from './productcard.module.css';

export default function ProductCard(props) {
  return (
    <div className={styles.productCard}>
      <div className={styles.productPicture}></div>
      <span>{props.name}</span>
      <span>{props.size}</span>
      <span>{props.color}</span>
      <span>{props.price}</span>
    </div>
  );
}
