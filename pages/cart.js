import dynamic from 'next/dynamic';
const OrderCard = dynamic(() => import('../components/cart/OrderCard'), {
  ssr: false,
});

export default function Cart() {
  return (
    <>
      <OrderCard />
    </>
  );
}
