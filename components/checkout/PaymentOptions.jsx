import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { clearCart } from '../../lib/session/addToCart';
import styles from './checkout.module.css';

export default function PaymentOptions() {
  const [isError, setError] = useState(false);
  const [isOrdered, setOrdered] = useState(false);
  const router = useRouter();

  const sess = window.sessionStorage;
  const orderList = JSON.parse(sess.getItem('cart'));

  const totalPrice = pushPrices(orderList).totalPrice;
  const totalItems = pushPrices(orderList).totalItems;

  function orderPlaced() {
    return (
      <div className={styles.orderMessage}>
        <span>Thank you for your order.</span>
      </div>
    );
  }

  function pushPrices(orderList) {
    const total = [];
    const totalItems = '';
    if (orderList) {
      orderList.forEach((item) => {
        total.push(item.price * item.amount);
        totalItems.concat(`${item.name}, `);
      });
    }
    return orderList
      ? {
          totalPrice: total.reduce((i, c) => i + c, 0),
          totalItems,
        }
      : {
          totalPrice: 0,
          totalItems: 0,
        };
  }

  const clientId =
    'AXb2yfuWhRaK5umZZrEOt1fT6SUHTH0mHGWqNYqyL5eiPVTyQyAshuXG8Ut4_3LnWWc0CUkPATfZr46g';
  const testingAccount = {
    email: 'sb-2q43t217279970@personal.example.com',
    password: 'xBl.Ny6x',
  };

  orderList.length > 0 ? null : router.push('/');

  const spanFont = {
    fontSize: '25px',
  };

  return (
    <div className={styles.buttonsWrap}>
      <span style={spanFont}>Testing Account:</span>
      <span style={spanFont}>Email: {testingAccount.email}</span>
      <span style={spanFont}>Password: {testingAccount.password}</span>
      {isError ? (
        <span className={styles.errorMessage}>
          Error with PayPal... Try again
        </span>
      ) : null}
      {isOrdered ? orderPlaced() : null}
      <PayPalScriptProvider
        options={{
          'client-id': clientId,
          currency: 'USD',
          commit: true,
        }}
      >
        <div>
          <PayPalButtons
            style={{ height: 55 }}
            createOrder={async (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: `${totalItems}`,
                    amount: {
                      value: `${totalPrice}`,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                setOrdered(true);
                setTimeout(() => {
                  clearCart();
                  router.push('/');
                }, 3000);
              });
            }}
            onError={(error) => {
              setError(true);
              console.log(error);
            }}
          />
        </div>
      </PayPalScriptProvider>
    </div>
  );
}
