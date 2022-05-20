import About from '../components/home/About';
import Banner from '../components/home/Banner';
import Gallery from '../components/home/Gallery';

export default function HomePage(req, res) {
  console.log(res);
  console.log(req);
  return (
    <>
      <Banner />
      <Gallery />
      <About />
    </>
  );
}
