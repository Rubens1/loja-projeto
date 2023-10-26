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
      {produtoInfo && produtoInfo.map((produtoDetalhe) => {
        if(produtoDetalhe.slug == router.query.slugProduto){
            return(
                <div key={`infProduto-${produtoDetalhe.id}`}>

                    <h2>{produtoDetalhe.nome}</h2>
                    
                </div>
            )
        }
    })}
    </>
  )
}
