import Image from 'next/image';
import Link from 'next/link';
import styles from './drawernav.module.css';

export default function DrawerNav(props) {
  function navChange() {
    props.onClick();
  }
  return (
    <div className={styles.drawerBody}>
      <div>
        <Link href="/store">
          <a>
            Store{' '}
            <Image
              src="/icons/cart.svg"
              layout="fixed"
              alt="store icon"
              width={32}
              height={32}
            />
          </a>
        </Link>
        <ul>
          <li>
            <div onClick={navChange}>
              <Link href="/store">
                <a>
                  Shirts{' '}
                  <Image
                    src="/icons/cart.svg"
                    layout="fixed"
                    alt="shirts icon"
                    width={32}
                    height={32}
                  />
                </a>
              </Link>
            </div>
          </li>
          <li>
            <div onClick={navChange}>
              <Link href="/store">
                <a>
                  Hitches{' '}
                  <Image
                    src="/icons/cart.svg"
                    layout="fixed"
                    alt="hitches icon"
                    width={32}
                    height={32}
                  />
                </a>
              </Link>
            </div>
          </li>
          <li>
            <div onClick={navChange}>
              <Link href="/store">
                <a>
                  Signs{' '}
                  <Image
                    src="/icons/cart.svg"
                    layout="fixed"
                    alt="sign icon"
                    width={32}
                    height={32}
                  />
                </a>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div onClick={navChange}>
        <Link href="/">
          <a>
            Instagram{' '}
            <Image
              src="/icons/insta1.svg"
              layout="fixed"
              alt="insta icon"
              width={32}
              height={32}
            />
          </a>
        </Link>
      </div>
      <div onClick={navChange}>
        <Link href="/contact">
          <a>
            Contact{' '}
            <Image
              src="/icons/cart.svg"
              layout="fixed"
              alt="contact icon"
              width={32}
              height={32}
            />
          </a>
        </Link>
      </div>
      <div onClick={navChange}>
        <Link href="/policy">
          <a>
            Policy{' '}
            <Image
              src="/icons/cart.svg"
              layout="fixed"
              alt="policy icon"
              width={32}
              height={32}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
