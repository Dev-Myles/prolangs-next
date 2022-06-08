import { deleteFromCart } from '../../lib/session/addToCart';
import styles from './flashmessage.module.css';

export default function FlashWarning({ cartId, fn, order, fn2 }) {
  function closeWarning() {
    return fn2();
  }
  return (
    <div className={styles.flashWarning}>
      <span>Are you sure?</span>
      <div>
        <button
          className={styles.flashWarningYes}
          onClick={() => {
            deleteFromCart({ cartId });
            fn({ order });
          }}
        >
          Yes
        </button>
        <button
          className={styles.flashWarningNo}
          onClick={() => closeWarning()}
        >
          No
        </button>
      </div>
    </div>
  );
}
