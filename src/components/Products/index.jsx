
import Image from 'next/image';
import Link from 'next/link';
import produtoImg from '@/public/image-2.jpg';
import { useState } from 'react';
export default function Products() {

    const produtos = [
        {id: 1,imagem: produtoImg, nome: "Produto 1", valor: "R$ 23,00", slug: "produto-1"},
        {id: 2,imagem: produtoImg, nome: "Produto 2", valor: "R$ 20,00", slug: "produto-2"},
        {id: 3,imagem: produtoImg, nome: "Produto 3", valor: "R$ 18,00", slug: "produto-3"},
        {id: 4,imagem: produtoImg, nome: "Produto 4", valor: "R$ 33,00", slug: "produto-4"},
        {id: 5,imagem: produtoImg, nome: "Produto 5", valor: "R$ 16,00", slug: "produto-5"}

    ];
    
    localStorage.setItem('produtos', JSON.stringify(produtos));

  return (
    <>
       <section className="product">
        <div className="container-site">
            <h2>Mais vendidos</h2>
            <div className="product-container-site">
                {produtos.map((produto, key) => {

                   return( <Link className="product-info" key={produto.id} href={produto.slug}>
                        <div className="img-product">
                            <Image src={produto.imagem} alt="Cardpress" />
                        </div>
                        <div className="title">
                            {produto.nome}
                        </div>
                        <div className="price-product-info"><span className="p">A parte de</span><div className="price-product"><span>{produto.valor}</span> por 23 unidade</div></div>
                    </Link>)
                })}
                
            </div>
        </div>
    </section>
    </>
  )
}
