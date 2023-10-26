import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import LoginClient from '../components/Client/Login'

export default function AlterarSenha() {
  return (
    <>
    <Head>
      <title>Alterar a Senha</title>
    </Head>
      <Menu />
      <LoginClient />
      <Footer />
    </>
  )
}
