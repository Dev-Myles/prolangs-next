import Image from 'next/image';
import DeleteFromCart from '../buttons/DeleteFromCart';
import styles from './ordercard.module.css';
import { ChangeQty, ChangeSize } from './OrderModifiers';

export default function OrderItem({
  cartId,
  order,
  name,
  price,
  imageUrl,
  fn,
  cartChange,
  amount,

  size,
}) {
  return (
    <div className={styles.orderSlice}>
      <span className={styles.name}>
        {name.toUpperCase()}{' '}
        <div className={styles.zIndex}>
          <DeleteFromCart cartId={cartId} order={order} fn={fn} />
        </div>
      </span>

      <div className={styles.sliceBody}>
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
            <span className={styles.sizeWrap}>
              SIZE: {size}{' '}
              <ChangeSize cartChange={cartChange} cartId={cartId} />
            </span>
          </div>

          <div className={styles.bottomItemSlice}>
            <span className={styles.qtyWrap}>
              <ChangeQty cartChange={cartChange} cartId={cartId} />
              QTY: {amount}
            </span>
            <br />
            <span className={styles.equation}>x {price} </span>
            <br />
            <span>TOTAL: ${price * amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
