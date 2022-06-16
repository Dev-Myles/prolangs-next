import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useRouter } from 'next/router';
import { clearCart } from '../../lib/session/addToCart';

export default function PaymentOptions() {
  const router = useRouter();
  const sess = window.sessionStorage;
  const orderList = JSON.parse(sess.getItem('cart'));

  const totalPrice = pushPrices(orderList).totalPrice;
  const totalItems = pushPrices(orderList).totalItems;

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

  const styleIndex = {
    position: 'relative',
    zIndex: '1',
  };

  return (
    <div style={styleIndex}>
      <PayPalScriptProvider
        options={{ 'client-id': clientId, currency: 'USD' }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
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
              clearCart();
              router.push('/');
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
