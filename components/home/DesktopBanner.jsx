import Image from 'next/image';
import { MdShowChart } from 'react-icons/md';
import styles from './banner.module.css';

export default function Banner() {
  return (
    <div className={styles.bannerSection}>
      <div className={styles.bannerSectionTop}>
        <div>
          <Image
            src="/images/RBG-glow-chain.svg"
            alt="RBG banner"
            width="1050"
            height="700"
          />
          <Image
            src="/images/rbg-name.svg"
            alt="rbg name"
            width="700"
            height="700"
          />
        </div>

        <span className={styles.bannerMessage}>
          {' '}
          Rise... To The Top. <MdShowChart />
        </span>
      </div>
    </div>
  );
}
