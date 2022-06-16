import dynamic from 'next/dynamic';
import styles from './checkout.module.css';
const PaymentOptions = dynamic(() => import('./PaymentOptions'), {
  ssr: false,
});

export default function Payment() {
  const font = {
    fontFamily: 'RobotoMono-Regular',
    textAlign: 'center',
  };

  return (
    <div>
      <div className={styles.paymentWrap}>
        <h2 className={styles.paymentHeader}>Select Method</h2>
        <h3 style={font}>Order placed on payment completion</h3>
        <PaymentOptions />
      </div>
    </div>
  );
}
