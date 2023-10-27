import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import MenuUser from "../Menu";
export default function Perfil() {
    const [dadosDoPerfil, setDadosDoPerfil] = useState(null);
    /* 
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
     */
    return (
        <>
            <section className="user">
                <MenuUser />
                <div className="user-profile-container-site">
                    <div className="user-personal-data-container-site">
                        <div className="user-data-title">
                            Dados básicos
                        </div>
                        <form action="" method="POST">
                            <div className="form-group">
                                <fieldset>
                                    <legend>Nome</legend>
                                    <input type="text" id="name" name="name" placeholder="Digite o seu nome" />
                                </fieldset>
                                <fieldset>
                                    <legend>Sobrenome</legend>
                                    <input type="email" id="name" name="name" placeholder="Digite o seu Sobrenome" />
                                </fieldset>
                            </div>
                            <div className="form-group">
                                <fieldset>
                                    <legend>CPF</legend>
                                    <input type="text" id="cpf" name="cpf" placeholder="Digite o seu CPF" />
                                </fieldset>
                                <fieldset>
                                    <legend>E-mail</legend>
                                    <input type="email" id="email" name="email" placeholder="Digite o seu E-mail" />
                                </fieldset>
                            </div>
                            <div className="form-group">
                                <fieldset>
                                    <legend>Telefone</legend>
                                    <input type="tel" id="telefone" name="telefone" placeholder="Digite o seu telefone com o DDD" />
                                </fieldset>
                                <fieldset>
                                    <legend>Celular</legend>
                                    <input type="tel" id="celular" name="email" placeholder="Digite o seu Celular com o DDD" />
                                </fieldset>
                            </div>
                            <div className="button-atualiza">
                                <button>Atualizar</button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}
