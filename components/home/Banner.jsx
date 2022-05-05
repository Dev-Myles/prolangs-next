import Image from 'next/image';
import styles from './banner.module.css';

export default function Banner() {
  return (
    <div className={styles.bannerSection}>
      <Image
        src="/images/RBG-glow-chain.svg"
        alt="RBG banner"
        width="1400vw"
        height="750"
      />
    </div>
  );
}
