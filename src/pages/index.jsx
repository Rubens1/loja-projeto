import Menu from '../components/Menu';
import Head from 'next/head';
import Category from '../components/Category';
import CarouselInfo from '../components/Carousel';
import Footer from '../components/Footer';
import Products from '../components/Products';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <Menu />
      <CarouselInfo />
      <Category />
      <Products />
      <Banner />
      <Footer />
    </>
  )
}
