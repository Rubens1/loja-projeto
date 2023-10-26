import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import SobreNos from '../components/SobreNos'

export default function Empresa() {
  return (
    <>
    <Head>
      <title>Sobre nós</title>
    </Head>
      <Menu />
      <SobreNos />
      <Footer />
    </>
  )
}
