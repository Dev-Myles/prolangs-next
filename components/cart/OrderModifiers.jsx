import { useState } from 'react';
import { IconContext } from 'react-icons';
import { BsPlus } from 'react-icons/bs';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { changeQty, changeSize } from '../../lib/session/addToCart';
import styles from './ordercard.module.css';

export function ChangeSize({ cartChange, cartId }) {
  const [isSize, setSize] = useState(false);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  function mapMods(array) {
    return array.map((e) => {
      return (
        <button
          className={styles.modOps}
          key={uuidv4()}
          onClick={() => {
            changeSize({ cartId, e });
            cartChange();
          }}
        >
          {e}
        </button>
      );
    });
  }

  return (
    <>
      {isSize == true ? (
        <div className={styles.modOpsWrapSize}>
          <button className={styles.mod} onClick={() => setSize(false)}>
            <IconContext.Provider
              value={{
                color: 'var(--rbg-green)',
                size: '2em',
              }}
            >
              <MdKeyboardArrowDown />
            </IconContext.Provider>
          </button>
          {mapMods(sizes, cartId)}
        </div>
      ) : (
        <button className={styles.mod} onClick={() => setSize(true)}>
          <IconContext.Provider
            value={{
              size: '2em',
            }}
          >
            <MdKeyboardArrowDown />
          </IconContext.Provider>
        </button>
      )}
    </>
  );
}

export function ChangeQty({ cartChange, cartId }) {
  const [isQty, setQty] = useState(false);

  const amounts = [1, 2, 3, 4, 5];

  function mapMods(array) {
    return array.map((e) => {
      return (
        <button
          className={styles.modOps}
          key={uuidv4()}
          onClick={() => {
            changeQty({ cartId, e });
            cartChange();
          }}
        >
          {e}
        </button>
      );
    });
  }

  return (
    <>
      {isQty ? (
        <div className={styles.modOpsWrapQty}>
          <button className={styles.mod} onClick={() => setQty(false)}>
            <IconContext.Provider
              value={{
                color: 'var(--rbg-green)',
                size: '2em',
              }}
            >
              <BsPlus />
            </IconContext.Provider>
          </button>
          {mapMods(amounts, cartId)}
        </div>
      ) : (
        <button className={styles.mod} onClick={() => setQty(true)}>
          <IconContext.Provider
            value={{
              size: '2em',
            }}
          >
            <BsPlus />
          </IconContext.Provider>
        </button>
      )}
    </>
  );
}
