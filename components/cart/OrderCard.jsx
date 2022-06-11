import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
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
  const totalPrice = pushPrices(orderList).totalPrice;
  const totalItems = pushPrices(orderList).totalItems;
  const router = useRouter();

  function deleteItem(index) {
    const newCart = orderList.filter((item) => item.order !== index);
    setCart(newCart);
  }

  function clearItems() {
    setCart([]);
  }

  function pushPrices(orderList) {
    const total = [];
    const totalItems = [];
    orderList.forEach((item) => {
      total.push(item.price * item.amount);
      totalItems.push(item.amount);
    });
    return {
      totalPrice: total.reduce((i, c) => i + c, 0),
      totalItems: totalItems.reduce((i, c) => i + c, 0),
    };
  }

  function cartChange() {
    setCart(orderList);
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
          cartChange={cartChange}
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
        <div>
          <h1 className={styles.cartHeader}>Cart</h1>

          <div className={styles.clearCartWrap}>
            <ClearCart fn={clearItems} />
          </div>
          <div>{mapOrder()}</div>

          <div className={styles.orderTotal}>
            <span>ITEMS: {totalItems}</span>
            <span>CART TOTAL: ${totalPrice}</span>
          </div>
          <div className={styles.buttonWrap}>
            <button
              className={styles.checkout}
              onClick={() => router.push('/checkout')}
            >
              Checkout <BsArrowRight />
            </button>
            <button
              className={styles.checkout}
              onClick={() => router.push('/store')}
            >
              <BsArrowLeft /> Back to Shop
            </button>
          </div>
        </div>
      )}
    </>
  );
}
