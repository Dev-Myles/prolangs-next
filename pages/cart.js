import dynamic from 'next/dynamic';
const OrderCard = dynamic(() => import('../components/cart/OrderCard'), {
  ssr: false,
});

export default function Cart() {
  return (
    <>
      <h1>Cart</h1>
      <OrderCard />
    </>
  );
}
