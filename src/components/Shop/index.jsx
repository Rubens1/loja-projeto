
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';
import Image from "next/image";
import image from '@/public/image-1.jpg';
import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function Shop() {

    const [validarCupom, setValidarCupom] = useState(false);
    const [validarCep, setValidarCep] = useState(false);
    const [carrinho, setCarrinho] = useState([
        { id: 1, imagem: image, nome: "Produto 1", quantidade: 1, valor: 23.25 },
        { id: 2, imagem: image, nome: "Produto 2", quantidade: 1, valor: 20.20 },
        { id: 3, imagem: image, nome: "Produto 3", quantidade: 1, valor: 18.49 },
        { id: 4, imagem: image, nome: "Produto 4", quantidade: 1, valor: 33.70 },
        { id: 5, imagem: image, nome: "Produto 5", quantidade: 1, valor: 16.70 },
        { id: 6, imagem: image, nome: "Produto 6", quantidade: 1, valor: 02.00},
        { id: 7, imagem: image, nome: "Produto 7", quantidade: 1, valor: 09.00},
        { id: 8, imagem: image, nome: "Produto 8", quantidade: 1, valor: 08.39}

    ]);
    const [valorTotal, setValorTotal] = useState(0);
    const valorTotalFormatado = valorTotal.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
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
            if (item.label === resultado.cupom.value) {
                cuponEncontrado = true;
            }
        });
        if (cuponEncontrado) {
            setValidarCupom(false);
        } else {
            setValidarCupom(true);
        }
    };

    const inputCep = (e) => {
        e.preventDefault();
        let dado = e.target
        console.log("CEP: " + dado.cep.value)
    }
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
            novoCarrinho.splice(index, 1);
            setCarrinho(novoCarrinho);
        }
    };

    const atualizarQuantidade = (produto, novaQuantidade) => {
        const novaQuantidadeNum = parseInt(novaQuantidade, 10);
        if (!isNaN(novaQuantidadeNum) && novaQuantidadeNum >= 1) {
            const index = carrinho.findIndex((item) => item.id === produto.id);
            if (index !== -1) {
                const novoCarrinho = [...carrinho];
                novoCarrinho[index].quantidade = novaQuantidadeNum;
                setCarrinho(novoCarrinho);
            }
        }
    };

    const calcularValorTotal = (carrinho) => {
        let total = 0;
        for (const produto of carrinho) {
            total += parseFloat(produto.valor) * produto.quantidade;
        }
        return total;
    };

    useEffect(() => {
        setValorTotal(calcularValorTotal(carrinho));
    }, [carrinho]);

    return (
        <>
            <section className="cart">
                <div className="container-site">
                    <div className="cart-info">
                        <div className="router"><Link href="./" alt="Início">Home</Link> &gt; Carrinho</div>
                        <div className="info-card">
                            <div className="products">
                                <div className="my-product">
                                    {carrinho.map((produtoCarrinho, key) => {
                                        const inputQuantidade = produtoCarrinho.quantidade;

                                        return (

                                            <div className="card-shop" key={`carrinho-${produtoCarrinho.id}`}>
                                                <div className="image-shop">
                                                    <Image src={produtoCarrinho.imagem} alt="produto" />
                                                    <div className="delete" onClick={() => removerProduto(produtoCarrinho)}><AiOutlineDelete /></div>
                                                </div>
                                                <div className="name-product-shop">{produtoCarrinho.nome}</div>
                                                <div className="quanty-shop"><p>Quantidade</p>
                                                    <div className="input-qtd">
                                                        <button onClick={() => eliminarProduto(produtoCarrinho)}>-</button>
                                                        <input type="tel" onChange={(e) => atualizarQuantidade(produtoCarrinho, e.target.value)} value={produtoCarrinho.quantidade} readOnly />
                                                        <button onClick={() => agregarProduto(produtoCarrinho)}>+</button>
                                                    </div>
                                                </div>
                                                <div className="price-shop">Valor<p></p><b>{produtoCarrinho.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></div>
                                            </div>
                                        )
                                    })}
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
                                        <div className="frete">Frete <b>R$ 30,00</b></div>
                                        <div className="cupom-result">Cupom <b>-</b></div>
                                        <div className="result-shop">Total <b>{valorTotalFormatado}</b></div>
                                    </div>
                                </div>
                                <div className="cep">
                                    <div className="cep-form">
                                        <form method='post' onSubmit={(e) => inputCep(e)}>
                                            <div className="input-cep">
                                                <input type="tel" placeholder='Digite o seu CEP aqui' name="cep" />
                                                <button type="submit"><BsCheckLg /></button>
                                            </div>
                                        </form>
                                    </div>
                                    {validarCep == true ? (<div className="alert-cep">CEP invalido</div>) : (<></>)}
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
                                                <input type="text" placeholder='Digite o cupom aqui' name="cupom" />
                                                <button type="submit"><BsCheckLg /></button>
                                            </div>
                                        </form>
                                    </div>
                                    {validarCupom == true ? (<div className="alert-cupom">Cupom invalido</div>) : (<></>)}
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
