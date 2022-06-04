import dynamic from 'next/dynamic';
import { v4 as uuidv4 } from 'uuid';

const OrderItem = dynamic(() => import('./OrderItem'), {
  ssr: false,
});

export default function OrderCard() {
  const sess = window.sessionStorage;
  const orderList = JSON.parse(sess.getItem('cart'));

  function mapOrder() {
    return orderList.map((item) => {
      return (
        <OrderItem
          key={uuidv4()}
          name={item.name}
          price={item.price}
          size={item.size}
          imageUrl={item.imageUrl}
        />
      );
    });
  }
  return <>{mapOrder()}</>;
}
