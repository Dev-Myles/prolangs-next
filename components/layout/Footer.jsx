import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <>
      <div className={styles.bottomNavbar}>
        <Link href="/contact">
          <a className={styles.images}>Contact</a>
        </Link>

        <Link href="https://www.instagram.com/rock_bottom_guild/">
          <a className={styles.images}>
            <Image
              src="/icons/insta-color.svg"
              alt="instagram icon"
              height="32"
              width="32"
            />
          </a>
        </Link>
      </div>
    </>
  );
}
