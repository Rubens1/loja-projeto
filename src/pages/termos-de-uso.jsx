import { Inter } from 'next/font/google'
import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import TermoUso from '../components/TermoUso'

const inter = Inter({ subsets: ['latin'] })

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
