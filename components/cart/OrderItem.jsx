import Image from 'next/image';
import DeleteFromCart from '../buttons/DeleteFromCart';
import styles from './ordercard.module.css';

export default function OrderItem({
  cartId,
  order,
  name,
  price,
  imageUrl,
  fn,
}) {
  let amount = 1;
  let size = 'M';
  return (
    <>
      <div className={styles.deleteButtonWrap}>
        <DeleteFromCart cartId={cartId} order={order} fn={fn} />
      </div>
      <span className={styles.name}>{name.toUpperCase()}</span>
      <div className={styles.orderSlice}>
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
        <div className={styles.itemInfo}>
          <div className={styles.topItemSlice}>
            <span>SIZE: {size}</span>
          </div>
          <div className={styles.bottomItemSlice}>
            <span>QTY: {amount}</span>
            <br />
            <span className={styles.equation}>x {price} </span>
            <br />
            <span>TOTAL: ${price}</span>
          </div>
        </div>
      </div>
    </>
  );
}
