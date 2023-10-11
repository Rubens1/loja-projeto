import { Inter } from 'next/font/google'
import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import PoliticaPrivacidade from '../components/PoliticaPrivacidade'

const inter = Inter({ subsets: ['latin'] })

export default function Contato() {
  return (
    <>
    <Head>
      <title>Política de privacidade</title>
    </Head>
      <Menu />
      <PoliticaPrivacidade />
      <Footer />
    </>
  )
}
