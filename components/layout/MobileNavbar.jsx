import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import DrawerNav from './DrawerNav';
import styles from './mobilenavbar.module.css';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function navChange() {
    setIsOpen(false);
  }

  const router = useRouter();
  const active = {
    backgroundColor: 'purple',
  };
  return (
    <div>
      {isOpen ? (
        <div>
          <button onClick={() => navChange()}>X</button>
          <DrawerNav onClick={navChange} />
        </div>
      ) : null}
      <div className={styles.navbar}>
        <div className={styles.navbarSection}>
          <div className={styles.navbarSectionLeft}>
            <button onClick={() => setIsOpen(true)}>
              <Image
                src="/icons/menu.svg"
                alt="RBG logo"
                layout="fixed"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>

        <div className={styles.navbarSection}>
          <div className={styles.navbarSectionCenter}>
            <Link href="/">
              <a className={styles.images} onClick={() => setIsOpen(false)}>
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
          <div className={styles.navbarSectionRightWrap}>
            <div className={styles.navbarSectionRight}>
              <Link href="/cart">
                <a
                  style={router.pathname == '/cart' ? active : null}
                  className={styles.images}
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src="/icons/cart.svg"
                    alt="cart icon"
                    height={32}
                    width={32}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
