import Image from 'next/image';
import Link from 'next/link';
import { MdShowChart } from 'react-icons/md';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import styles from './gallery.module.css';

export default function MobileGallery() {
  return (
    <>
      <div className={styles.mobileGalleryHeader}>
        <span>
          {' '}
          Rise... To The Top. <MdShowChart />
        </span>
      </div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        swipeable={true}
        showStatus={false}
        showThumbs={false}
      >
        <div className={styles.mobileGalleryImage}>
          {' '}
          <Image
            src="/gallery/blackshirt.png"
            alt="black shirt"
            layout="fixed"
            width="200px"
            height="200px"
          />
        </div>
        <div className={styles.mobileGalleryImage}>
          {' '}
          <Image
            src="/gallery/whiteshirt.png"
            alt="black shirt"
            layout="fixed"
            width="200px"
            height="200px"
          />
        </div>
        <div className={styles.mobileGalleryImage}>
          <Image
            src="/gallery/blackshirt.png"
            alt="black shirt"
            layout="fixed"
            width="200px"
            height="200px"
          />
        </div>
        <div className={styles.mobileGalleryImage}>
          <Image
            src="/gallery/whiteshirt.png"
            alt="black shirt"
            layout="fixed"
            width="200px"
            height="200px"
          />
        </div>

        <div className={styles.mobileGalleryImage}>
          {' '}
          <Image
            src="/gallery/hitch1.png"
            alt="black shirt"
            layout="fixed"
            width="200px"
            height="200px"
          />
        </div>
        <div className={styles.mobileGalleryImage}>
          {' '}
          <Image
            src="/gallery/hitch2.png"
            alt="black shirt"
            layout="fixed"
            width="200px"
            height="200px"
          />
        </div>
        <div className={styles.mobileGalleryImage}>
          <Image
            src="/gallery/hitch1.png"
            alt="black shirt"
            layout="fixed"
            width="200px"
            height="200px"
          />
        </div>
        <div className={styles.mobileGalleryImage}>
          <Image
            src="/gallery/hitch2.png"
            alt="black shirt"
            layout="fixed"
            width="200px"
            height="200px"
          />
        </div>

        <div className={styles.mobileGalleryImage}>
          {' '}
          <Image
            src="/gallery/sign1.png"
            alt="black shirt"
            layout="fixed"
            width="200px"
            height="200px"
          />
        </div>
        <div className={styles.mobileGalleryImage}>
          {' '}
          <Image
            src="/gallery/sign2.png"
            alt="black shirt"
            layout="fixed"
            width="200px"
            height="200px"
          />
        </div>
        <div className={styles.mobileGalleryImage}>
          <Image
            src="/gallery/sign1.png"
            alt="black shirt"
            layout="fixed"
            width="200px"
            height="200px"
          />
        </div>
        <div className={styles.mobileGalleryImage}>
          <Image
            src="/gallery/sign2.png"
            alt="black shirt"
            layout="fixed"
            width="200px"
            height="200px"
          />
        </div>
      </Carousel>
      <div className={styles.galleryMessageSection}>
        <div>
          <span className={styles.mobileGalleryLinkNames}>
            Shop Our Products
          </span>
          <Link href="/store">
            <a>
              <div className={styles.bannerButtons}>Store</div>
            </a>
          </Link>
        </div>
        <div>
          <span className={styles.mobileGalleryLinkNames}>Custom Pieces</span>
          <Link href="/contact">
            <a>
              <div className={styles.bannerButtons}>Contact</div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
