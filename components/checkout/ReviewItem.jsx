import Image from 'next/image';
import styles from './reviewitem.module.css';

export default function ReviewItem({ name, imageUrl, price, amount, size }) {
  return (
    <div className={styles.itemWrap}>
      <div className={styles.imageWrap}>
        <Image
          className={styles.pic}
          src={imageUrl}
          alt="product picture"
          width={100}
          height={100}
          layout="fixed"
        />
      </div>
      <span>{name}</span>
      <span>{size}</span>
      <span>{amount}</span>
      <span>{price}</span>
      <span>{amount * price}</span>
    </div>
  );
}
