import Footer from './Footer';
import HeadTags from './Head';
import styles from './layout.module.css';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className={styles.structure}>
      <HeadTags />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
