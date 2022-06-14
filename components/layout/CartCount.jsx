import { useRouter } from 'next/router';

export default function CartCount() {
  const router = useRouter();
  const totalItems = [];
  const cart = JSON.parse(window.sessionStorage.getItem('cart'));
  const cartAmounts = cart.forEach((item) => {
    totalItems.push(item.amount);
  });
  const cartCount = totalItems.reduce((i, c) => i + c, 0);
  const styling = {
    width: '20px',
    height: '20px',
    color: 'var(--fontColor)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'BebasNeue-Regular',
  };

  const curPath = router.pathname;

  return (
    <div style={styling}>{curPath == '/cart' ? <span>$</span> : cartCount}</div>
  );
}
