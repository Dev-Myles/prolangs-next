import { AiOutlineDelete } from 'react-icons/ai';

import styles from './buttons.module.css';

import { useState } from 'react';
import { FlashWarningClear } from '../flash/FlashWarning';

export default function ClearCart({ fn }) {
  const [isClicked, setClicked] = useState(false);

  function closeWarning() {
    if (isClicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  return (
    <div className={styles.warningWrap}>
      {isClicked ? (
        <FlashWarningClear fn={fn} fn2={closeWarning} />
      ) : (
        <button
          className={styles.clearCart}
          onClick={() => {
            setClicked(true);
          }}
        >
          <span>Clear Cart</span> <AiOutlineDelete />
        </button>
      )}
    </div>
  );
}
