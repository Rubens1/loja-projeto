import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import Shop from '../components/Shop'

export default function Carrinho() {
  return (
    <>
      <Head>
        <title>Carrinho</title>
      </Head>
      <Menu />
      <Shop />
      <Footer />
    </>
  )
}
