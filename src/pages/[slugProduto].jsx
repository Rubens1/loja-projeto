import Menu from '../components/Menu'
import Head from 'next/head'
import Footer from '../components/Footer'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DetalheProduto from '../components/Products/detalhe-produto';
export default function ProdutoInfo() {
    const router = useRouter();

    const [produtoInfo, setProdutoInfo] = useState();
    useEffect(() => {
        const produtosJSON = localStorage.getItem('produtos');
        const produtos = JSON.parse(produtosJSON);
        setProdutoInfo(produtos);
    }, []);

    return (
        <>
            <Head>
                <title>{produtoInfo && produtoInfo.map((produto) => { if (produto.slug == router.query.slugProduto) { return produto.nome } })}</title>
            </Head>
            <Menu />
            <DetalheProduto />
            <Footer />
        </>
    )
}
