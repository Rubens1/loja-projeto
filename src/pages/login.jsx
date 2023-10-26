import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import LoginClient from '../components/Client/Login'

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
