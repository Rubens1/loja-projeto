import Link from "next/link"
import { useEffect, useState } from "react";
import axios from "axios";
export default function Perfil() {
    const [dadosDoPerfil, setDadosDoPerfil] = useState(null);

    useEffect(() => {
        let token = localStorage.getItem('tokenCliente').replace(/\"/g, '');

        axios.get(`${process.env.NEXT_PUBLIC_API_URL}pessoa-perfil`, {
            headers: {
                'Authorization': `Bearer ${token.replace(" ", "").trim()}`
            },
        }).then((response) => {
            setDadosDoPerfil(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <section className="usere">
                <div className="user-profile-container-site">
                    <div className="user-personal-data-container-site">
                        <div className="user-data-title">
                            Dados básicos
                        </div>
                        <div className="button-users">
                            <Link href="" className="edit-perfil" alt="Alterar Senha">ALTERAR SENHA</Link>
                        </div>
                        <div className="sensitive-data">

                        </div>
                        <form action="" method="POST">
                            <fieldset>
                                <legend>Nome</legend>
                                <input type="text" id="name" name="name" placeholder="Digite o seu nome" />
                            </fieldset>
                            <fieldset>
                                <legend>Sobrenome</legend>
                                <input type="email" id="name" name="name" placeholder="Digite o seu Sobrenome" />
                            </fieldset>
                            <fieldset>
                                <legend>CPF</legend>
                                <input type="text" id="cpf" name="cpf" placeholder="Digite o seu CPF" />
                            </fieldset>
                            <fieldset>
                                <legend>E-mail</legend>
                                <input type="email" id="email" name="email" placeholder="Digite o seu E-mail" />
                            </fieldset>

                        </form>
                    </div>
                    <div className="user-addr-container-site">
                        <div className="user-addr-form-title">
                            Meus endereços
                        </div>
                        <div className="address-card-box">

                            <div className="address-card">
                                <span className="addr-title">
                                    Endereço pricipal
                                </span>
                                <span className="address">
                                    <p>Rua Exemplo</p>
                                    <p>Número 200 casa 02</p>
                                    <p>CEP 05891-240, São Paulo, SP</p>
                                </span>
                                <div className="actions-btn">
                                    <button id="modal-button" className="addr-edit">
                                        editar
                                    </button>
                                    <button className="addr-delete">
                                        excluir
                                    </button>
                                </div>
                            </div>
                            <div className="address-card">
                                <span className="addr-title">
                                    Endereço pricipal
                                </span>
                                <span className="address">
                                    <p>Rua Exemplo</p>
                                    <p>Número 200 casa 02</p>
                                    <p>CEP 05891-240, São Paulo, SP</p>
                                </span>
                                <div className="actions-btn">
                                    <button className="addr-edit">
                                        editar
                                    </button>
                                    <button className="addr-delete">
                                        excluir
                                    </button>
                                </div>
                            </div>
                            <div className="address-card">
                                <span className="addr-title">
                                    Endereço pricipal
                                </span>
                                <span className="address">
                                    <p>Rua Exemplo</p>
                                    <p>Número 200 casa 02</p>
                                    <p>CEP 05891-240, São Paulo, SP</p>
                                </span>
                                <div className="actions-btn">
                                    <button className="addr-edit">
                                        editar
                                    </button>
                                    <button className="addr-delete">
                                        excluir
                                    </button>
                                </div>
                            </div>
                            <div className="address-card">
                                <span className="addr-title">
                                    Endereço pricipal
                                </span>
                                <span className="address">
                                    <p>Rua Exemplo</p>
                                    <p>Número 200 casa 02</p>
                                    <p>CEP 05891-240, São Paulo, SP</p>
                                </span>
                                <div className="actions-btn">
                                    <button className="addr-edit">
                                        editar
                                    </button>
                                    <button className="addr-delete">
                                        excluir
                                    </button>
                                </div>
                            </div>
                            <div className="address-card">
                                <span className="addr-title">
                                    Endereço pricipal
                                </span>
                                <span className="address">
                                    <p>Rua Exemplo</p>
                                    <p>Número 200 casa 02</p>
                                    <p>CEP 05891-240, São Paulo, SP</p>
                                </span>
                                <div className="actions-btn">
                                    <button className="addr-edit">
                                        editar
                                    </button>
                                    <button className="addr-delete">
                                        excluir
                                    </button>
                                </div>
                            </div>
                            <div className="address-card">
                                <span className="addr-title">
                                    Endereço pricipal
                                </span>
                                <span className="address">
                                    <p>Rua Exemplo</p>
                                    <p>Número 200 casa 02</p>
                                    <p>CEP 05891-240, São Paulo, SP</p>
                                </span>
                                <div className="actions-btn">
                                    <button className="addr-edit">
                                        editar
                                    </button>
                                    <button className="addr-delete">
                                        excluir
                                    </button>
                                </div>
                            </div>
                            <div className="address-card">
                                <span className="addr-title">
                                    Endereço pricipal
                                </span>
                                <span className="address">
                                    <p>Rua Exemplo</p>
                                    <p>Número 200 casa 02</p>
                                    <p>CEP 05891-240, São Paulo, SP</p>
                                </span>
                                <div className="actions-btn">
                                    <button className="addr-edit">
                                        editar
                                    </button>
                                    <button className="addr-delete">
                                        excluir
                                    </button>
                                </div>
                            </div>
                            <div className="address-card">
                                <span className="addr-title">
                                    Endereço pricipal
                                </span>
                                <span className="address">
                                    <p>Rua Exemplo</p>
                                    <p>Número 200 casa 02</p>
                                    <p>CEP 05891-240, São Paulo, SP</p>
                                </span>
                                <div className="actions-btn">
                                    <button className="addr-edit">
                                        editar
                                    </button>
                                    <button className="addr-delete">
                                        excluir
                                    </button>
                                </div>
                            </div>
                            <div className="address-card">
                                <span className="addr-title">
                                    Endereço pricipal
                                </span>
                                <span className="address">
                                    <p>Rua Exemplo</p>
                                    <p>Número 200 casa 02</p>
                                    <p>CEP 05891-240, São Paulo, SP</p>
                                </span>
                                <div className="actions-btn">
                                    <button className="addr-edit">
                                        editar
                                    </button>
                                    <button className="addr-delete">
                                        excluir
                                    </button>
                                </div>
                            </div> <div className="address-card">
                                <span className="addr-title">
                                    Endereço pricipal
                                </span>
                                <span className="address">
                                    <p>Rua Exemplo</p>
                                    <p>Número 200 casa 02</p>
                                    <p>CEP 05891-240, São Paulo, SP</p>
                                </span>
                                <div className="actions-btn">
                                    <button className="addr-edit">
                                        editar
                                    </button>
                                    <button className="addr-delete">
                                        excluir
                                    </button>
                                </div>
                            </div>
                            <div className="address-card">
                                <span className="addr-title">
                                    Endereço pricipal
                                </span>
                                <span className="address">
                                    <p>Rua Exemplo</p>
                                    <p>Número 200 casa 02</p>
                                    <p>CEP 05891-240, São Paulo, SP</p>
                                </span>
                                <div className="actions-btn">
                                    <button className="addr-edit">
                                        editar
                                    </button>
                                    <button className="addr-delete">
                                        excluir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
