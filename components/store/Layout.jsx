import Link from 'next/link';
import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './layout.module.css';
import ProductCard from './ProductCard';

const initialState = { products: 'ALL' };

function reducer(state, action) {
  switch (action.type) {
    case 'SHIRTS':
      return { products: (state.products = 'SHIRTS') };
    case 'SIGNS':
      return { products: (state.products = 'SIGNS') };
    case 'HITCHES':
      return { products: (state.products = 'HITCHES') };
    case 'ALL':
      return { products: (state.products = 'ALL') };
    default:
      throw new Error();
  }
}

export default function StoreLayout({ props }) {
  const [state, setProducts] = useReducer(reducer, initialState);
  const shirts = props.shirtsRes;
  const hitches = props.hitchesRes;
  const signs = props.signsRes;

  function mapShirts() {
    return shirts.map((shirt) => {
      return (
        <Link
          key={uuidv4()}
          href={{
            pathname: `/product/${shirt.id}`,
            query: { id: shirt.id, cata: 'SHIRT' },
          }}
        >
          <a>
            <ProductCard
              name={shirt.name}
              imageUrl={shirt.imageUrl}
              price={shirt.price}
            />
          </a>
        </Link>
      );
    });
  }

  function mapHitches() {
    return hitches.map((hitch) => {
      return (
        <Link key={uuidv4()} href={`/product/${hitch.id}`}>
          <a>
            <ProductCard
              key={uuidv4()}
              imageUrl={hitch.imageUrl}
              name={hitch.name}
              price={hitch.price}
            />
          </a>
        </Link>
      );
    });
  }

  function mapSigns() {
    return signs.map((sign) => {
      return (
        <Link key={uuidv4()} href={`/product/${sign.id}`}>
          <a>
            <ProductCard
              key={uuidv4()}
              imageUrl={sign.imageUrl}
              name={sign.name}
              price={sign.price}
            />
          </a>
        </Link>
      );
    });
  }

  return (
    <div className={styles.layout}>
      <h2 className={styles.storeHeader}>Our Products</h2>

      <div className={styles.storeFilter}>
        <button
          className={styles.filterButton}
          onClick={() => setProducts({ type: 'ALL' })}
        >
          All
        </button>
        <button
          className={styles.filterButton}
          onClick={() => setProducts({ type: 'SHIRTS' })}
        >
          Shirts
        </button>
        <button
          className={styles.filterButton}
          onClick={() => setProducts({ type: 'HITCHES' })}
        >
          Hitches
        </button>
        <button
          className={styles.filterButton}
          onClick={() => setProducts({ type: 'SIGNS' })}
        >
          Signs
        </button>
      </div>

      <div className={styles.productsBody}>
        {state.products == 'ALL'
          ? [mapShirts(), mapHitches(), mapSigns()]
          : null}
        {state.products == 'SHIRTS' ? mapShirts() : null}
        {state.products == 'HITCHES' ? mapHitches() : null}
        {state.products == 'SIGNS' ? mapSigns() : null}
      </div>
    </div>
  );
}
