import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './navbar.module.css';

export default function Navbar() {
  const router = useRouter();
  const active = {
    backgroundColor: 'purple',
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarSection}>
          <div className={styles.navbarSectionLeft}>
            <Link href="/">
              <a className={styles.images}>
                <Image
                  src="/icons/RBG-logo.svg"
                  alt="RBG logo"
                  layout="fixed"
                  width={70}
                  height={70}
                />
              </a>
            </Link>
          </div>
        </div>

        <div className={styles.navbarSection}>
          <Link href="/store">
            <a
              style={router.pathname == '/store' ? active : null}
              className={styles.images}
            >
              Products
            </a>
          </Link>
        </div>

        <div className={styles.navbarSection}>
          <div className={styles.navbarSectionRight}>
            <Link href="/cart">
              <a
                style={router.pathname == '/cart' ? active : null}
                className={styles.images}
              >
                <Image
                  src="/icons/cart.svg"
                  alt="cart icon"
                  height="32px"
                  width="32px"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
