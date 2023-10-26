
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import Image from "next/image";
import image from '@/public/image-1.jpg';
import { useState } from 'react';
import Link from 'next/link';
export default function Shop() {

    const [validarCupom, setValidarCupom] = useState(false)
    const cupons = [
        { value: '1', label: 'Todos' },
        { value: '2', label: 'Cliente' },
        { value: '3', label: 'Categoria' },
        { value: '4', label: 'Pedidos' },
        { value: '5', label: 'Produto' }
    ];
    const inputCupon = (e) => {
        e.preventDefault();
        let resultado = e.target;
        
        let cuponEncontrado = false;
    
        cupons.forEach(item => {
            if (item.label === resultado.desconto.value) {
                cuponEncontrado = true;
            }
        });
    
        if (cuponEncontrado) {
            setValidarCupom(false);
            console.log("Cupom aceito");
        } else {
            setValidarCupom(true);
            console.log("Nenhum cupom aceito");
        }
    }    

    const [carrinho, setCarrinho] = useState([
        {id: 1,imagem: image, nome: "Produto 1", quantidade: 1, valor: "R$ 23,00"},
        {id: 2,imagem: image, nome: "Produto 2", quantidade: 1, valor: "R$ 20,00"},
        {id: 3,imagem: image, nome: "Produto 3", quantidade: 1, valor: "R$ 18,00"},
        {id: 4,imagem: image, nome: "Produto 4", quantidade: 1, valor: "R$ 33,00"},
        {id: 5,imagem: image, nome: "Produto 5", quantidade: 1, valor: "R$ 16,00"}

    ]);
  
    const agregarProduto = (produto) => {
        const index = carrinho.findIndex(item => item.id === produto.id);
        
        if (index !== -1) {
          const novoCarrinho = [...carrinho];
          novoCarrinho[index].quantidade++;
          setCarrinho(novoCarrinho);
        }
      };
      
      const eliminarProduto = (produto) => {
        const index = carrinho.findIndex(item => item.id === produto.id);
        
        if (index !== -1 && carrinho[index].quantidade > 1) {
          const novoCarrinho = [...carrinho];
          novoCarrinho[index].quantidade--;
          setCarrinho(novoCarrinho);
        }
      };
      
      const removerProduto = (produto) => {
        const index = carrinho.findIndex(item => item.id === produto.id);
      
        if (index !== -1) {
          const novoCarrinho = [...carrinho];
          novoCarrinho.splice(index, 1); // Remove o produto da lista
          setCarrinho(novoCarrinho);
        }
      };
    
      const atualizarQuantidade = (produto, novaQuantidade) => {

        if (isNaN(novaQuantidade) || novaQuantidade < 1) {
          return;
        }
      
        const index = carrinho.findIndex(item => item.id === produto.id);
      
        if (index !== -1) {
          const novoCarrinho = [...carrinho];
          novoCarrinho[index].quantidade = parseInt(novaQuantidade, 10); 
          setCarrinho(novoCarrinho);
        }
      };

    return (
      <>
        <section className="cart">
            <div className="container-site">
                <div className="cart-info">
                    <div className="router"><Link href="./" alt="Início">Home</Link> &gt; Carrinho</div>
                    <div className="info-card">
                        <div className="products">
                            <div className="my-product">
                            {carrinho.map(produto => (

                                <div className="card-shop" key={produto.id}>
                                    <div className="image-shop">
                                        <Image src={produto.imagem} alt="produto" />
                                        <div className="delete" onClick={() => removerProduto(produto)}><AiOutlineDelete /></div>
                                    </div>
                                    <div className="name-product-shop">{produto.nome}</div>
                                    <div className="quanty-shop"><p>Quantidade</p>
                                        <div className="input-qtd">
                                            <button onClick={() => eliminarProduto(produto)}>-</button>
                                            <input type="tel" onChange={(e) => atualizarQuantidade(produto, e.target.value)} defaultValue={produto.quantidade} />
                                            <button onClick={() => agregarProduto(produto)}>+</button>
                                        </div>
                                    </div>
                                    <div className="price-shop">Valor<p></p><b>{produto.valor}</b></div>
                                </div>
                            ))}
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
                                        <form method='post' onSubmit={(e) => inputCupon(e)}>
                                            <div className="input-cupom">
                                                <input type="text" placeholder='Digite o cupom aqui' name="desconto" />
                                                <button type="submit" id="cupom"><BsCheckLg /></button>
                                            </div>
                                        </form>
                                    </div>
                                    {validarCupom == true ? ( <div className="alert-cupom">Cupom invalido</div>) : (<></>)}
                                   
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
  