import { Inter } from 'next/font/google'
import Menu from '../components/Menu'
import Head from 'next/head'
import Category from '../components/Category'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Banner from '../components/Banner'
import Perfil from '../components/Client/Perfil'

const inter = Inter({ subsets: ['latin'] })

export default function MinhaConta() {
  return (
    <>
    <Head>
      <title>Bem-vindo Rubens</title>
    </Head>
      <Menu />
        <Perfil />
      <Footer />
    </>
  )
}
