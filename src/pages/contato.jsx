import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>
      <Menu />
      <Contact />
      <Footer />
    </>
  )
}
