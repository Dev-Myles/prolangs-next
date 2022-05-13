import Image from 'next/image';
import styles from './banner.module.css';

export default function MobileBanner() {
  return (
    <div className={styles.bannerSection}>
      <div className={styles.bannerSectionTop}>
        {' '}
        <Image
          src="/images/rbg-name.svg"
          alt="rbg name"
          width="700"
          height="700"
        />
      </div>
    </div>
  );
}
