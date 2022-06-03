import Image from 'next/image';
import styles from './productcard.module.css';

export default function ProductCard({
  name,
  price,
  sizes,
  colors,
  description,
  fabric,
  imageUrl,
  size,
  metal,
}) {
  let shirtsize =
    sizes == undefined
      ? null
      : sizes.reduce((prev, curr) => [prev, ', ', curr]);
  let color =
    colors == undefined
      ? null
      : colors.reduce((prev, curr) => [prev, ', ', curr]);
  return (
    <div className={styles.productCard}>
      <Image
        src={imageUrl}
        height={300}
        width={300}
        alt="product picture"
        layout="responsive"
      />
      <hr />
      <div className={styles.productProps}>
        <span className={styles.productCardInfo}>{name}</span>
        <span className={styles.productCardInfo}>{shirtsize}</span>
        <span className={styles.productCardInfo}>{color}</span>
        <span className={styles.productCardInfo}>{description}</span>
        <span className={styles.productCardInfo}>{fabric}</span>
        <span className={styles.productCardInfo}>{metal}</span>
        <span className={styles.productCardInfo}>{size}</span>
        <span className={styles.productCardPrice}>${price}</span>
        <button className={styles.addToCart}>View</button>
      </div>
    </div>
  );
}
