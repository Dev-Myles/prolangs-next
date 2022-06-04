import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import styles from './gallery.module.css';

export default function DesktopGallery() {
  return (
    <>
      <div className={styles.galleryMessageSectionDesktop}>
        <div>
          <span className={styles.mobileGalleryLinkNamesDesktop}>
            Shop Our Products
          </span>
          <Link href="/store">
            <a>
              <div className={styles.bannerButtonsDesktop}>Store</div>
            </a>
          </Link>
        </div>
        <div>
          <span className={styles.mobileGalleryLinkNamesDesktop}>
            Custom Pieces
          </span>
          <Link href="/contact">
            <a>
              <div className={styles.bannerButtonsDesktop}>Contact</div>
            </a>
          </Link>
        </div>
      </div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
        swipeable={true}
        showThumbs={false}
      >
        <div className={styles.gallerySection}>
          <div className={styles.galleryImage}>
            {' '}
            <Image
              src="/gallery/blackshirt.png"
              alt="black shirt"
              layout="fixed"
              width="200px"
              height="200px"
            />
          </div>
          <div className={styles.galleryImage}>
            {' '}
            <Image
              src="/gallery/whiteshirt.png"
              alt="black shirt"
              layout="fixed"
              width="200px"
              height="200px"
            />
          </div>
          <div className={styles.galleryImage}>
            <Image
              src="/gallery/blackshirt.png"
              alt="black shirt"
              layout="fixed"
              width="200px"
              height="200px"
            />
          </div>
          <div className={styles.galleryImage}>
            <Image
              src="/gallery/whiteshirt.png"
              alt="black shirt"
              layout="fixed"
              width="200px"
              height="200px"
            />
          </div>
        </div>

        <div className={styles.gallerySection}>
          <div className={styles.galleryImage}>
            {' '}
            <Image
              src="/gallery/hitch1.png"
              alt="black shirt"
              layout="fixed"
              width="200px"
              height="200px"
            />
          </div>
          <div className={styles.galleryImage}>
            {' '}
            <Image
              src="/gallery/hitch2.png"
              alt="black shirt"
              layout="fixed"
              width="200px"
              height="200px"
            />
          </div>
          <div className={styles.galleryImage}>
            <Image
              src="/gallery/hitch1.png"
              alt="black shirt"
              layout="fixed"
              width="200px"
              height="200px"
            />
          </div>
          <div className={styles.galleryImage}>
            <Image
              src="/gallery/hitch2.png"
              alt="black shirt"
              layout="fixed"
              width="200px"
              height="200px"
            />
          </div>
        </div>
        <div className={styles.gallerySection}>
          <div className={styles.galleryImage}>
            {' '}
            <Image
              src="/gallery/sign1.png"
              alt="black shirt"
              layout="fixed"
              width="200px"
              height="200px"
            />
          </div>
          <div className={styles.galleryImage}>
            {' '}
            <Image
              src="/gallery/sign2.png"
              alt="black shirt"
              layout="fixed"
              width="200px"
              height="200px"
            />
          </div>
          <div className={styles.galleryImage}>
            <Image
              src="/gallery/sign1.png"
              alt="black shirt"
              layout="fixed"
              width="200px"
              height="200px"
            />
          </div>
          <div className={styles.galleryImage}>
            <Image
              src="/gallery/sign2.png"
              alt="black shirt"
              layout="fixed"
              width="200px"
              height="200px"
            />
          </div>
        </div>
      </Carousel>
    </>
  );
}
