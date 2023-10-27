import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import CadastroClient from '../components/Client/Cadastra'
export default function Cadastra() {
    return (
        <>
            <Head>
                <title>Cadastra</title>
            </Head>
            <Menu />
            <CadastroClient />
            <Footer />
        </>
    )
}
