import { useReducer } from 'react';
import styles from './layout.module.css';
import ProductCard from './ProductCard';

const initialState = { products: 'SHIRTS' };

function reducer(state, action) {
  switch (action.type) {
    case 'SHIRTS':
      return { products: (state.products = 'SHIRTS') };
    case 'SIGNS':
      return { products: (state.products = 'SIGNS') };
    case 'HITCHES':
      return { products: (state.products = 'HITCHES') };
    default:
      throw new Error();
  }
}

export default function StoreLayout() {
  const [state, setProducts] = useReducer(reducer, initialState);

  return (
    <div className={styles.layout}>
      <div className={styles.buttons}>
        <div onClick={() => setProducts({ type: 'SHIRTS' })}>Shirts</div>
        <div onClick={() => setProducts({ type: 'SIGNS' })}>Signs</div>
        <div onClick={() => setProducts({ type: 'HITCHES' })}>Hitches</div>
      </div>
      <div className={styles.productsBody}>
        {state.products == 'SHIRTS' ? (
          <ProductCard
            name={'blue collar'}
            price={'$10'}
            size={'M'}
            color={'red'}
          />
        ) : null}
      </div>
    </div>
  );
}
