import Image from 'next/image';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutSectionBottom}>
        <div>
          <span className={styles.aboutSectionHeader}>About Us</span>
          <p className={styles.aboutSectionP}>
            Rock Bottom Guild specializes in hitch signs and custom metal
            fabrication. Based out of Iowa, we take inspiration from works by
            West Coast Customs, Orange County Choppers, and our blue collar grit
            to create one of a kind, never massed produced pieces.
            <br />
            <br />
            Our products and services range from shirts, signs, and truck
            hitches to general fabrication, welding repair, built from spec
            parts and plasma table services.
          </p>
        </div>
        <div className={styles.welderPic}>
          <Image
            src="/images/welder-pic.svg"
            alt="welder picture"
            height="700px"
            width="700px"
          />
        </div>
      </div>
    </div>
  );
}
