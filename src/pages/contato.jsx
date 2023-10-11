import { Inter } from 'next/font/google'
import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const inter = Inter({ subsets: ['latin'] })

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
