import dynamic from 'next/dynamic';

import styles from './checkout.module.css';

const Review = dynamic(() => import('./Review'), {
  ssr: false,
});

const Payment = dynamic(() => import('./Payment'), {
  ssr: false,
});

export default function Layout() {
  return (
    <div className={styles.checkoutWrap}>
      <Review />
      <Payment />
    </div>
  );
}
