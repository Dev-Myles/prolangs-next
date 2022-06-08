import { AiOutlineDelete } from 'react-icons/ai';
import { clearCart } from '../../lib/session/addToCart';
import styles from './buttons.module.css';

export default function ClearCart({ fn }) {
  return (
    <button
      className={styles.clearCart}
      onClick={() => {
        confirm('Are you sure?');
        clearCart();
        fn();
      }}
    >
      <span>Clear Cart</span> <AiOutlineDelete />
    </button>
  );
}
