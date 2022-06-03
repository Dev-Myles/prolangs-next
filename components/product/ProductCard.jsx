import Image from 'next/image';
import styles from './productcard.module.css';

export default function ProductCard({
  price,
  imageUrl,
  name,
  size,
  sizes,
  metal,
  fabric,
  description,
  color,
}) {
  return (
    <div className={styles.productCard}>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.imageWrap}>
        <span></span>
        <Image
          src={imageUrl}
          alt="product picture"
          width={900}
          height={900}
          layout="responsive"
        />
      </div>
      <div className={styles.infoWrap}>
        <div className={styles.productInfoTop}>
          <span className={styles.price}>${price}</span>
        </div>
        <div className={styles.productInfo}>
          <span>Size:</span>
          <span>
            {size} {sizes}
          </span>
        </div>
        <div className={styles.productInfo}>
          <span>Material:</span>
          <span>
            {fabric} {metal}
          </span>
        </div>

        <div className={styles.productInfoBottom}>
          <p className={styles.desc}>{description}</p>
        </div>
        <button className={styles.addButton}>Add to Cart</button>
      </div>
    </div>
  );
}
