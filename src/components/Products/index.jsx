
import Image from 'next/image';
import Link from 'next/link';
import produtoImg from '@/public/image-2.jpg';
export default function Products() {
  return (
    <>
       <section className="product">
        <div className="container-site">
            <h2>Mais vendidos</h2>
            <div className="product-container-site">
                    <Link className="product-info" href="/slugProduto">
                        <div className="img-product">
                            <Image src={produtoImg} alt="Cardpress" />
                        </div>
                        <div className="title">
                            Produto
                        </div>
                        <div className="price-product-info"><span className="p">A parte de</span><div className="price-product"><span>R$ 73,22</span> por 23 unidade</div></div>
                </Link>
                <Link className="product-info" href="slugProduto">
                    <div className="img-product">
                        <Image src={produtoImg} alt="Cardpress" />
                    </div>
                    <div className="title">
                        Produto
                    </div>
                    <div className="price-product-info"><span className="p">A parte de</span><div className="price-product"><span>R$ 73,22</span> por 23 unidade</div></div>
                </Link>
                <Link className="product-info" href="slugProduto">
                    <div className="img-product">
                        <Image src={produtoImg} alt="Cardpress" />
                    </div>
                    <div className="title">
                        Produto
                    </div>
                    <div className="price-product-info"><span className="p">A parte de</span><div className="price-product"><span>R$ 73,22</span> por 23 unidade</div></div>
                </Link>
                <Link className="product-info" href="slugProduto">
                    <div className="img-product">
                        <Image src={produtoImg} alt="Cardpress" />
                    </div>
                    <div className="title">
                        Produto
                    </div>
                    <div className="price-product-info"><span className="p">A parte de</span><div className="price-product"><span>R$ 73,22</span> por 23 unidade</div></div>
                </Link>
                <Link className="product-info" href="slugProduto">
                    <div className="img-product">
                        <Image src={produtoImg} alt="Cardpress" />
                    </div>
                    <div className="title">
                        Produto
                    </div>
                    <div className="price-product-info"><span className="p">A parte de</span><div className="price-product"><span>R$ 73,22</span> por 23 unidade</div></div>
                </Link>
            </div>
        </div>
    </section>
    </>
  )
}
