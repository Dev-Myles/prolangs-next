import dynamic from 'next/dynamic';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './ordercard.module.css';

const ClearCart = dynamic(() => import('../buttons/ClearCart'), {
  ssr: false,
});

const OrderItem = dynamic(() => import('./OrderItem'), {
  ssr: false,
});

export default function OrderCard() {
  const [isCart, setCart] = useState(orderList);
  const sess = window.sessionStorage;
  const orderList = JSON.parse(sess.getItem('cart'));

  function deleteItem(index) {
    const newCart = orderList.filter((item) => item.order !== index);
    setCart(newCart);
  }

  function clearItems() {
    setCart([]);
  }

  function mapOrder() {
    return orderList.map((item, index) => {
      return (
        <OrderItem
          key={uuidv4()}
          cartId={item.cartId}
          order={index}
          name={item.name}
          price={item.price}
          size={item.size}
          imageUrl={item.imageUrl}
          amount={item.amount}
          fn={deleteItem}
        />
      );
    });
  }

  const font = {
    fontSize: '50px',
    textAlign: 'center',
  };

  return (
    <>
      {orderList.length == 0 ? (
        <div>
          <h1 className={styles.cartHeader}>Cart</h1>
          <h2 style={font}>There are no items in your cart.</h2>
        </div>
      ) : (
        <div className={styles.clearCartWrap}>
          <ClearCart fn={clearItems} />
          {mapOrder()}
        </div>
      )}
    </>
  );
}
