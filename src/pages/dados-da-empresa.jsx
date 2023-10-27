import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import EmpresaInfo from '../components/Client/Empresa'

export default function DadosDaEmpresa() {
  return (
    <>
      <Head>
        <title>Dados da Empresa</title>
      </Head>
      <Menu />
      <EmpresaInfo />
      <Footer />
    </>
  )
}
