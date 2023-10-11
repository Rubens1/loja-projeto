import { Inter } from 'next/font/google'
import Menu from '../components/Menu'
import Head from 'next/head'
import Category from '../components/Category'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Banner from '../components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Inicio</title>
    </Head>
      <Menu />
      <Carousel />
      <Category />
      <Products />
      <Banner />
      <Footer />
    </>
  )
}
