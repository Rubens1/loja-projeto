import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import EnderecoInfo from '../components/Client/Endereco'

export default function Endereco() {
    return (
        <>
            <Head>
                <title>Endereços</title>
            </Head>
            <Menu />
            <EnderecoInfo />
            <Footer />
        </>
    )
}
