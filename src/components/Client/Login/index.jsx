import React, { useEffect, useState } from "react";
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function LoginClient() {
  const router = useRouter();

  useEffect(() => {
    const containersite = document.getElementById('container-siteLogin');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    registerBtn.addEventListener('click', () => {
      containersite.classList.add("active");
    });
    loginBtn.addEventListener('click', () => {
      containersite.classList.remove("active");
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const senha = e.target.senha.value;
    axios.post(`${process.env.NEXT_PUBLIC_API_URL}pessoa-entrar`, {
      email: email,
      senha: senha
    }).then((response) => {
      const token = JSON.stringify(response.data.authorization.token);
      localStorage.setItem('tokenCliente', token);
      //router.push('/');
      toast.success('Usuário logado com sucesso', {
        theme: "light",
        position: "top-right"
      });
    }).catch(error => {
      toast.error(error.response.data.error, {
        theme: "light",
        position: "top-right"
      });
    }).catch(error => {
      toast.error('Erro na conexão com o servidor', {
        theme: "light",
        position: "top-right"
      });
    })
  };

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
        <div className="container-siteLogin" id="container-siteLogin">
          <div className="form-container-site sign-up">
            <form onSubmit={e => handleCreate(e)}>
              <h1>Criar uma conta</h1>
              <div className="social-icons">
                <a href="#" className="icon"><AiOutlineGooglePlus /></a>
                <a href="#" className="icon"><BiLogoFacebook /></a>
              </div>
              <span>ou use seu e-mail para cadastro</span>
              <input type="text" placeholder="Nome" name="nome_cadastro" />
              <input type="email" placeholder="Email" name="email_cadastro" />
              <input type="password" placeholder="Senha" name="senha_cadastro" />
              <button type="submit">Inscrever-se</button>
            </form>
          </div>
          <div className="form-container-site sign-in">
            <form onSubmit={e => handleSubmit(e)}>
              <h1>Entrar</h1>
              <div className="social-icons">
                <a href="#" className="icon"><AiOutlineGooglePlus /></a>
                <a href="#" className="icon"><BiLogoFacebook /></a>
              </div>
              <span>ou use sua senha de e-mail</span>
              <input type="email" placeholder="Email" name="email" />
              <input type="password" placeholder="Senha" name="senha" />
              <Link href="/recupera-senha" alt="Recupera senha">Esqueceu sua senha?</Link>
              <button type="submit">Entrar</button>
              <Link href="/cadastra" className="registro-link" alt="Cadastrar">Criar conta</Link>
            </form>
          </div>
          <div className="toggle-container-site">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Bem vindo de volta!</h1>
                <p>Insira seus dados pessoais para usar todos os recursos do site</p>
                <button className="hidden" id="login">Entrar</button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Olá amigo!</h1>
                <p>Registre-se com seus dados pessoais para usar todos os recursos do site</p>
                <button className="hidden" id="register">Inscrever-se</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
