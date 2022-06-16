import { v4 as uuidv4 } from 'uuid';
import ReviewItem from './ReviewItem';
import styles from './reviewitem.module.css';

export default function Review() {
  const sess = window.sessionStorage;
  const orderList = sess.getItem('cart')
    ? JSON.parse(sess.getItem('cart'))
    : [];
  const totalPrice = pushPrices(orderList).totalPrice;
  const totalItems = pushPrices(orderList).totalItems;

  function pushPrices(orderList) {
    const total = [];
    const totalItems = [];
    if (orderList) {
      orderList.forEach((item) => {
        total.push(item.price * item.amount);
        totalItems.push(item.amount);
      });
    }
    return orderList
      ? {
          totalPrice: total.reduce((i, c) => i + c, 0),
          totalItems: totalItems.reduce((i, c) => i + c, 0),
        }
      : {
          totalPrice: 0,
          totalItems: 0,
        };
  }

  function mapOrder() {
    return orderList.map((item) => {
      return (
        <ReviewItem
          key={uuidv4()}
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
          size={item.size}
          amount={item.amount}
        />
      );
    });
  }

  return (
    <div>
      {mapOrder()}
      <div className={styles.totalsWrap}>
        <span>Total Items: {totalItems}</span>
        <span>Total Price: ${totalPrice}</span>
      </div>
    </div>
  );
}
