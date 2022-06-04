import { useEffect } from 'react';
import About from '../components/home/About';
import Banner from '../components/home/Banner';
import Gallery from '../components/home/Gallery';
import { createCart } from '../lib/session/addToCart';

export default function HomePage() {
  useEffect(() => {
    createCart();
    console.log(window.sessionStorage.getItem('cart'));
  }, []);
  return (
    <>
      <Banner />
      <Gallery />
      <About />
    </>
  );
}
