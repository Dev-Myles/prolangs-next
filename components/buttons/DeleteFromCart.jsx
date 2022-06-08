import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import FlashWarning from '../flash/FlashWarning';
import styles from './buttons.module.css';

export default function DeleteFromCart({ cartId, fn, order }) {
  const [isClicked, setClicked] = useState(false);

  function deleteButton() {
    if (isClicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  return (
    <div className={styles.warningWrap}>
      {isClicked ? (
        <FlashWarning
          cartId={cartId}
          fn={fn}
          order={order}
          fn2={deleteButton}
        />
      ) : (
        <button
          onClick={() => {
            deleteButton();
          }}
          className={styles.deleteFromCart}
        >
          <AiOutlineDelete />
        </button>
      )}
    </div>
  );
}
