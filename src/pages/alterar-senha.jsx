import Menu from '../components/Menu';
import Head from 'next/head';
import Footer from '../components/Footer';
import Senha from '../components/Client/Senha';

export default function AlterarSenha() {
  return (
    <>
      <Head>
        <title>Alterar a Senha</title>
      </Head>
      <Menu />
      <Senha />
      <Footer />
    </>
  )
}
