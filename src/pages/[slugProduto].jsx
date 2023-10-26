import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import { useRouter } from 'next/router';

export default function DetalheProduto() {
    const router = useRouter()
    const produtosJSON = localStorage.getItem('produtos');
    const produtos = JSON.parse(produtosJSON);
    
  return (
    <>
    <Head>
      <title>Produto</title>
    </Head>
      <Menu />
      {produtos.map((produto) => {
        if(produto.slug == router.query.slugProduto){
            return(
                <>

                    <h2>{produto.nome}</h2>
                    
                </>
            )
        }
    })}
      <Footer />
    </>
  )
}
