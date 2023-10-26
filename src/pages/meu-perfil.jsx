import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import Perfil from '../components/Client/Perfil'

export default function MinhaConta() {
  return (
    <>
      <Head>
        <title>Bem-vindo</title>
      </Head>
      <Menu />
      <Perfil />
      <Footer />
    </>
  )
}
