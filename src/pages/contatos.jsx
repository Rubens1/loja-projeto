import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import ContatosInfo from '../components/Client/ContatosInfo'
export default function Contatos() {
    return (
        <>
            <Head>
                <title>Meus contatos</title>
            </Head>
            <Menu />
            <ContatosInfo />
            <Footer />
        </>
    )
}
