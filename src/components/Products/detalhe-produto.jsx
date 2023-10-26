import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
export default function DetalheProduto() {
    const router = useRouter()
    const [produtoInfo, setProdutoInfo] = useState();
    useEffect(() => {
        const produtosJSON = localStorage.getItem('produtos');   
        const produtos = JSON.parse(produtosJSON);
        setProdutoInfo(produtos);
    }, [])
  return (
    <>
      {produtoInfo && produtoInfo.map((produto) => {
        if(produto.slug == router.query.slugProduto){
            return(
                <>

                    <h2>{produto.nome}</h2>
                    
                </>
            )
        }
    })}
    </>
  )
}
