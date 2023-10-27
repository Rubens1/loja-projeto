import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import ContaBancaria from '../components/Client/Banco'

export default function Contatos() {
    return (
        <>
            <Head>
                <title>Conta Bancária</title>
            </Head>
            <Menu />
            <ContaBancaria />
            <Footer />
        </>
    )
}
