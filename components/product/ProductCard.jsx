import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChangeQty, ChangeSize } from './ItemModifiers';
import styles from './productcard.module.css';

const Button = dynamic(() => import('../buttons/AddToCart'), {
  ssr: false,
});

export default function ProductCard({
  price,
  imageUrl,
  name,
  size,
  material,
  description,
  amount = 1,
}) {
  const item = {
    price,
    imageUrl,
    name,
    size,
    material,
    description,
    amount,
  };

  const [isCart, setCart] = useState(item);

  function changeSize(size) {
    const newItem = { ...isCart };
    newItem.size = size;
    return setCart(newItem);
  }

  function changeQty(qty) {
    const newItem = { ...isCart };
    newItem.amount = qty;
    return setCart(newItem);
  }

  const sizeChange = size.length > 3 ? false : true;

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
            <span className={styles.price}>${isCart.price}</span>
          </div>
          <div className={styles.productInfo}>
            <span>Size:</span>
            <span className={styles.itemMod}>
              {sizeChange ? <ChangeSize changeSize={changeSize} /> : null}

              {isCart.size}
            </span>
          </div>
          <div className={styles.productInfo}>
            <span>Material:</span>
            <span>{isCart.material}</span>
          </div>
          <div className={styles.productInfo}>
            <span> Qty:</span>

            <span className={styles.itemMod}>
              <ChangeQty changeQty={changeQty} />
              {isCart.amount}
            </span>
          </div>

          <div className={styles.productInfoBottom}>
            <p className={styles.desc}>{isCart.description}</p>
          </div>
          <Button
            cartId={uuidv4()}
            name={isCart.name}
            imageUrl={isCart.imageUrl}
            size={isCart.size}
            amount={isCart.amount}
            price={isCart.price}
          />
        </div>
      </div>
    </>
  );
}
