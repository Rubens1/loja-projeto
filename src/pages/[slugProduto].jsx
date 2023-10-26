import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import { useRouter } from 'next/router';

export default function DetalheProduto() {
    const router = useRouter()
    console.log(router.query.slugProduto);
  return (
    <>
    <Head>
      <title>Produto</title>
    </Head>
      <Menu />
            <h2>{router.query.slugProduto}</h2>
      <Footer />
    </>
  )
}
