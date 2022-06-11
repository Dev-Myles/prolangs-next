import dynamic from 'next/dynamic';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import styles from './productcard.module.css';

const Button = dynamic(() => import('../buttons/AddToCart'), {
  ssr: false,
});

export default function ProductCard({
  price,
  imageUrl,
  name,
  sizes,
  metal,
  fabric,
  description,
}) {
  const amount = 1;
  const size = 'M';
  return (
    <>
      {' '}
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.productCard}>
        <div className={styles.imageWrap}>
          <Image
            src={imageUrl}
            alt="product picture"
            width={600}
            height={600}
            layout="responsive"
          />
        </div>
        <div className={styles.infoWrap}>
          <div className={styles.productInfo}>
            <span>Price:</span>
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
          <Button
            cartId={uuidv4()}
            price={price}
            imageUrl={imageUrl}
            name={name}
            sizes={sizes}
            size={size}
            amount={amount}
          />
        </div>
      </div>
    </>
  );
}
