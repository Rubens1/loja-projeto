import React,{ useEffect, useState } from "react";
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import axios from "axios";
import { toast } from "react-toastify";
export default function LoginClient() {

    const [formData, setFormData] = useState({
        email: '',
        senha: '',
        nome_cadastro: '',
        email_cadastro: '',
        senha_cadastro: ''
    });      

      
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
  },[])

  // Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = formData.email;
    const senha = formData.senha;

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}pessoa-entrar`, {
      email: email,
      senha: senha
    }).then((response) => {
      console.log(response);
      const token = JSON.stringify(response.data.authorization.token);
      localStorage.setItem('tokenCliente ', token);
      //window.location.href = window.location.protocol + "//" + window.location.host;
      console.log(response)
      toast.success('Usuário logado com sucesso', {
        theme: "light",
        position: "top-right"
      });
    }).catch(error => {
      console.log(error);
      toast.error(error.response.data.error, {
        theme: "light",
        position: "top-right"
      });
    }).catch(error => {
      console.log(error);
      toast.error('Erro na conexão com o servidor', {
        theme: "light",
        position: "top-right"
      });
    })
  };

  const handleCreate = async (e) => {
    e.preventDefault()
    let nome_cadastro = formData.nome_cadastro
    let email_cadastro = formData.email_cadastro
    let senha_cadastro = formData.senha_cadastro

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}pessoa-cadastro`, {
        'nome': nome_cadastro,
        'email': email_cadastro,
        'senha': senha_cadastro
     }).then((response) => {
        toast.success(response, {
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
        })
          
    });  
  }

  const handleFieldChange = async (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

    return (
      <>
        <section className="login-section">
          <div className="container-siteLogin" id="container-siteLogin">
              <div className="form-container-site sign-up">
                  <form onSubmit={handleCreate}>
                      <h1>Criar uma conta</h1>
                      <div className="social-icons">
                          <a href="#" className="icon"><AiOutlineGooglePlus /></a>
                          <a href="#" className="icon"><BiLogoFacebook /></a>
                      </div>
                      <span>ou use seu e-mail para cadastro</span>
                      <input type="text" placeholder="Nome" name="nome_cadastro" onChange={handleFieldChange}/>
                      <input type="email" placeholder="Email" name="email_cadastro" onChange={handleFieldChange}/>
                      <input type="password" placeholder="Senha" name="senha_cadastro" onChange={handleFieldChange}/>
                      <button type="submit">Inscrever-se</button>
                  </form>
              </div>
              <div className="form-container-site sign-in">
                  <form onSubmit={handleSubmit}>
                      <h1>Entrar</h1>
                      <div className="social-icons">
                          <a href="#" className="icon"><AiOutlineGooglePlus /></a>
                          <a href="#" className="icon"><BiLogoFacebook /></a>
                      </div>
                      <span>ou use sua senha de e-mail</span>
                      <input type="email" placeholder="Email"  name="email" onChange={handleFieldChange}/>
                      <input type="password" placeholder="Senha"  name="senha" onChange={handleFieldChange}/>
                      <a href="#">Esqueceu sua senha?</a>
                      <button type="submit">Entrar</button>
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
  