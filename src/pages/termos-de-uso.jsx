import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import TermoUso from '../components/TermoUso'

export default function Termo() {
  return (
    <>
      <Head>
        <title>Termos de uso</title>
      </Head>
      <Menu />
      <TermoUso />
      <Footer />
    </>
  )
}
