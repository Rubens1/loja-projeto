import React, { useEffect, useState } from "react";
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function CadastroClient() {
  const router = useRouter();

 
  const handleCreate = async (e) => {
    e.preventDefault()
    let nome_cadastro = e.target.nome_cadastro.value;
    let email_cadastro = e.target.email_cadastro.value;
    let senha_cadastro = e.target.senha_cadastro.value;

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}pessoa-cadastro`, {
      'nome': nome_cadastro,
      'email': email_cadastro,
      'senha': senha_cadastro
    }).then((response) => {
      toast.success('Cadastro realizado com sucesso', {
        theme: "light",
        position: "top-right"
      });
    }).catch((error) => {
      const e = error.response.data.errors;
      Object.keys(e).map(i => {
        toast.error(e[`${i}`][0].replace('campo', ''), {
          theme: 'light',
          position: "top-right"
        });
      });
    });
  };

  return (
    <>
      <section className="login-section">
        <div className="container-siteLogin active">
          <div className="form-container-site sign-up-mobile">
            <form onSubmit={e => handleCreate(e)}>
              <h1>Criar uma conta</h1>
              {/*  <div className="social-icons">
                <a href="#" className="icon"><AiOutlineGooglePlus /></a>
                <a href="#" className="icon"><BiLogoFacebook /></a>
              </div>
              <span>ou use seu e-mail para cadastro</span> */}
              <input type="text" placeholder="Nome" name="nome_cadastro" required />
              <input type="email" placeholder="Email" name="email_cadastro" required />
              <input type="password" placeholder="Senha" name="senha_cadastro" required />
              <input type="tel" placeholder="Celular" name="celular_cadastro" required />
              <input type="tel" placeholder="CPF ou CNPJ" name="cpfcnpj_cadastro" required />
              <button type="submit">Inscrever-se</button>
            </form>
          </div>
          
          
        </div>
      </section>
    </>
  )
}
