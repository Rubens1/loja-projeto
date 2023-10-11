
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import Image from "next/image";
import image from '@/public/image-1.jpg';
export default function Shop() {
    return (
      <>
        <section className="cart">
            <div className="container-site">
                <div className="cart-info">
                    <div className="router"><a href="./">Home</a> &gt; Carrinho</div>
                    <div className="info-card">
                        <div className="products">
                            <div className="my-product">
                                <div className="card-shop">
                                    <div className="image-shop">
                                        <Image src={image} alt="produto" />
                                        <div className="delete"><AiOutlineDelete /></div>
                                    </div>
                                    <div className="name-product-shop">Lorem, ipsum dolor sit amet consectetur</div>
                                    <div className="quanty-shop"><p>Quantidade</p>
                                        <div className="input-qtd">
                                            <button>-</button>
                                            <input type="tel" value="1" />
                                            <button>+</button>
                                        </div>
                                    </div>
                                    <div className="price-shop">Valor<p></p><b>R$ 23,00</b></div>
                                </div>

                                <div className="card-shop">
                                    <div className="image-shop">
                                        <Image src={image} alt="produto" />
                                        <div className="delete"><AiOutlineDelete /></div>
                                    </div>
                                    <div className="name-product-shop">Lorem, ipsum dolor sit amet consectetur...</div>
                                    <div className="quanty-shop"><p>Quantidade</p>
                                        <div className="input-qtd">
                                            <button>-</button>
                                            <input type="tel" value="1" />
                                            <button>+</button>
                                        </div>
                                    </div>
                                    <div className="price-shop">Valor<p></p><b>R$ 23,00</b></div>
                                </div>

                                <div className="card-shop">
                                    <div className="image-shop">
                                        <Image src={image} alt="produto" />
                                        <div className="delete"><AiOutlineDelete /></div>
                                    </div>
                                    <div className="name-product-shop">Lorem, ipsum dolor sit amet consectetur</div>
                                    <div className="quanty-shop"><p>Quantidade</p>
                                        <div className="input-qtd">
                                            <button>-</button>
                                            <input type="tel" value="1" />
                                            <button>+</button>
                                        </div>
                                    </div>
                                    <div className="price-shop">Valor<p></p><b>R$ 23,00</b></div>
                                </div>

                                <div className="card-shop">
                                    <div className="image-shop">
                                        <Image src={image} alt="produto" />
                                        <div className="delete"><AiOutlineDelete /></div>
                                    </div>
                                    <div className="name-product-shop">Lorem, ipsum dolor sit amet consectetur</div>
                                    <div className="quanty-shop"><p>Quantidade</p>
                                        <div className="input-qtd">
                                            <button>-</button>
                                            <input type="tel" value="1" />
                                            <button>+</button>
                                        </div>
                                    </div>
                                    <div className="price-shop">Valor<p></p><b>R$ 23,00</b></div>
                                </div>

                                <div className="card-shop">
                                    <div className="image-shop">
                                        <Image src={image} alt="produto" />
                                        <div className="delete"><AiOutlineDelete /></div>
                                    </div>
                                    <div className="name-product-shop">Lorem, ipsum dolor sit amet consectetur</div>
                                    <div className="quanty-shop"><p>Quantidade</p>
                                        <div className="input-qtd">
                                            <button>-</button>
                                            <input type="tel" value="1" />
                                            <button>+</button>
                                        </div>
                                    </div>
                                    <div className="price-shop">Valor<p></p><b>R$ 23,00</b></div>
                                </div>

                                <div className="card-shop">
                                    <div className="image-shop">
                                        <Image src={image} alt="produto" />
                                        <div className="delete"><AiOutlineDelete /></div>
                                    </div>
                                    <div className="name-product-shop">Lorem, ipsum dolor sit amet consectetur</div>
                                    <div className="quanty-shop"><p>Quantidade</p>
                                        <div className="input-qtd">
                                            <button>-</button>
                                            <input type="tel" value="1" />
                                            <button>+</button>
                                        </div>
                                    </div>
                                    <div className="price-shop">Valor<p></p><b>R$ 23,00</b></div>
                                </div>

                            </div>
                            <div className="indicated-product">
                                <div className="card-shop-product">
                                    <div className="image-indicated"><Image src={image} alt="produto" /></div>
                                    <div className="name-product-shop"><p>Nome do produto</p></div>
                                    <div className="price-product-shop"><span>a parte de</span><p>R$ 29,00</p></div>
                                </div>
                                <div className="card-shop-product">
                                    <div className="image-indicated"><Image src={image} alt="produto" /></div>
                                    <div className="name-product-shop"><p>Nome do produto</p></div>
                                    <div className="price-product-shop"><span>a parte de</span><p>R$ 29,00</p></div>
                                </div>
                                <div className="card-shop-product">
                                    <div className="image-indicated"><Image src={image} alt="produto" /></div>
                                    <div className="name-product-shop"><p>Nome do produto</p></div>
                                    <div className="price-product-shop"><span>a parte de</span><p>R$ 29,00</p></div>
                                </div>
                                <div className="card-shop-product">
                                    <div className="image-indicated"><Image src={image} alt="produto" /></div>
                                    <div className="name-product-shop"><p>Nome do produto</p></div>
                                    <div className="price-product-shop"><span>a parte de</span><p>R$ 29,00</p></div>
                                </div>
                                <div className="card-shop-product">
                                    <div className="image-indicated"><Image src={image} alt="produto" /></div>
                                    <div className="name-product-shop"><p>Nome do produto</p></div>
                                    <div className="price-product-shop"><span>a parte de</span><p>R$ 29,00</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="result-cart">
                            <div className="result-total">
                                <div className="info-total">
                                    <h3>Resultado</h3>
                                    <div className="value-itens">Produtos <b>R$ 30.,00</b></div>
                                    <div className="frete">Frete <b>R$ 30,00</b></div>
                                    <div className="cupom-result">Cupom <b>-</b></div>
                                    <div className="result-shop">Total <b>R$ 30,00</b></div>
                                </div>
                            </div>
                            <div className="prev-shop">
                                <b>Previção de entrega</b>
                                <div className="info-prev"><p>Endereço:</p> <span>Rua tal casa tal bairro tal ...</span></div>
                                <div className="info-prev"><p>Entregador:</p> <span>Correios</span></div>
                                <div className="info-prev"><p>Prazo:</p> <span>30 dias</span></div>
                            </div>
                                <div className="cupom">
                                    <div className="cupom-form">
                                        <form action="" method="post">
                                            <div className="input-cupom">
                                            <input type="text" placeholder='Digite o cupom aqui'/>
                                            <button id="cupom"><BsCheckLg /></button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="alert-cupom">Cupom invalido</div>
                                </div>
                            <div className="button-cart"><button>Continuar</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
  