import Image from 'next/image';
import styles from './reviewitem.module.css';

export default function ReviewItem({ name, imageUrl, price, amount, size }) {
  return (
    <div className={styles.itemWrap}>
      <div className={styles.imageWrap}>
        <span>{name}</span>
        <Image
          className={styles.pic}
          src={imageUrl}
          alt="product picture"
          width={100}
          height={100}
          layout="fixed"
        />
      </div>
      <div className={styles.itemInfo}>
        <span>SIZE</span>
        <span>{size}</span>
      </div>
      <div className={styles.itemInfo}>
        <span>QTY</span>
        <span>{amount}</span>
      </div>
      <div className={styles.itemInfo}>
        <span>PRICE</span>
        <span>${price}</span>
      </div>
      <div className={styles.itemInfo}>
        <span>TOTAL</span>
        <span>${amount * price}</span>
      </div>
    </div>
  );
}
