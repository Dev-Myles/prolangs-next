import { useRouter } from 'next/router';
import { AiOutlinePlus } from 'react-icons/ai';
import { addToCart } from '../../lib/session/addToCart';
import styles from '../product/productcard.module.css';

export default function Button(props) {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        addToCart(props), router.push('/cart');
      }}
      className={styles.addButton}
    >
      Add to Cart <AiOutlinePlus />
    </button>
  );
}
