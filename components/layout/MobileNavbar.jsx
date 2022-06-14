import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import DrawerNav from './DrawerNav';
import styles from './mobilenavbar.module.css';

const CartCount = dynamic(() => import('./CartCount'), {
  ssr: false,
});

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function navChange() {
    document.body.style.overflow = 'initial';
    setIsOpen(false);
  }

  const router = useRouter();
  const active = {
    borderBottom: '2px solid #2ed822',
  };
  return (
    <div>
      {isOpen ? (
        <div>
          <DrawerNav onClick={navChange} />
        </div>
      ) : null}
      <div className={styles.navbar}>
        <div className={styles.navbarSection}>
          <div className={styles.navbarSectionLeft}>
            <IconContext.Provider value={{ className: 'images' }}>
              <div
                className={styles.iconCenter}
                onClick={() => setIsOpen(true)}
              >
                <AiOutlineMenu />
              </div>
            </IconContext.Provider>
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
                  <CartCount />
                  <IconContext.Provider value={{ className: 'images' }}>
                    <div
                      className={styles.iconCenter}
                      onClick={() => setIsOpen(true)}
                    >
                      <AiOutlineShoppingCart />
                    </div>
                  </IconContext.Provider>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
