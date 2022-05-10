import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './desktopnavbar.module.css';

export default function DesktopNavbar() {
  const router = useRouter();
  const active = {
    backgroundColor: 'purple',
  };
  return (
    <div>
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
          <div className={styles.navbarSectionCenter}>
            <Link href="/store">
              <a className={styles.images}>Shirts</a>
            </Link>

            <Link href="/store">
              <a className={styles.images}>Signs</a>
            </Link>

            <Link href="/store">
              <a className={styles.images}>Hitches</a>
            </Link>
          </div>
        </div>

        <div className={styles.navbarSection}>
          <div className={styles.navbarSectionRightWrap}>
            <div className={styles.navbarSectionRight}>
              <Link href="/store">
                <a
                  style={router.pathname == '/store' ? active : null}
                  className={styles.images}
                >
                  Store
                </a>
              </Link>
              <Link href="https://www.instagram.com/rock_bottom_guild/">
                <a className={styles.images}>
                  <Image
                    src="/icons/insta1.svg"
                    alt="instagram icon"
                    height={32}
                    width={32}
                  />
                </a>
              </Link>
              <Link href="/contact">
                <a className={styles.images}>
                  <Image
                    src="/icons/pen.svg"
                    alt="contact icon"
                    height={32}
                    width={32}
                  />
                </a>
              </Link>

              <Link href="/cart">
                <a
                  style={router.pathname == '/cart' ? active : null}
                  className={styles.images}
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
