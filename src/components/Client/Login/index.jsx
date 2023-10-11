import { useEffect } from "react";
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineGooglePlus } from 'react-icons/ai';
export default function LoginClient() {
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
    return (
      <>
        <section className="login-section">
          <div className="container-siteLogin" id="container-siteLogin">
              <div className="form-container-site sign-up">
                  <form>
                      <h1>Criar uma conta</h1>
                      <div className="social-icons">
                          <a href="#" className="icon"><AiOutlineGooglePlus /></a>
                          <a href="#" className="icon"><BiLogoFacebook /></a>
                      </div>
                      <span>ou use seu e-mail para cadastro</span>
                      <input type="text" placeholder="Nome" />
                      <input type="email" placeholder="Email" />
                      <input type="password" placeholder="Senha" />
                      <button>Inscrever-se</button>
                  </form>
              </div>
              <div className="form-container-site sign-in">
                  <form>
                      <h1>Entrar</h1>
                      <div className="social-icons">
                          <a href="#" className="icon"><AiOutlineGooglePlus /></a>
                          <a href="#" className="icon"><BiLogoFacebook /></a>
                      </div>
                      <span>ou use sua senha de e-mail</span>
                      <input type="email" placeholder="Email" />
                      <input type="password" placeholder="Senha" />
                      <a href="#">Esqueceu sua senha?</a>
                      <button>Entrar</button>
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
  