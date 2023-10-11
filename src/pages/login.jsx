import { Inter } from 'next/font/google'
import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import LoginClient from '../components/Client/Login'
const inter = Inter({ subsets: ['latin'] })

export default function Login() {
  return (
    <>
    <Head>
      <title>Login</title>
    </Head>
      <Menu />
      <LoginClient />
      <Footer />
    </>
  )
}
