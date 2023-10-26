
import Image from 'next/image';
import contato from '@/public/undraw_shopping_re_3wst.svg'
import { IMaskInput } from "react-imask";

export default function Contact() {
    return (
      <>
        <section className="contact">
            <div className="form-image">
                <Image src={contato} alt="contato" />
            </div>
            <div className="form">
                <form action="#">
                    <div className="form-header">
                        <div className="title">
                            <h1>Contato</h1>
                        </div>
                        
                    </div>
    
                    <div className="input-group">
                        <div className="input-box">
                            <label>Primeiro Nome</label>
                            <input id="firstname" type="text" name="firstname" placeholder="Digite seu primeiro nome" required />
                        </div>
    
                        <div className="input-box">
                            <label>Sobrenome</label>
                            <input id="lastname" type="text" name="lastname" placeholder="Digite seu sobrenome" required />
                        </div>
                        <div className="input-box">
                            <label>E-mail</label>
                            <input id="email" type="email" name="email" placeholder="Digite seu e-mail" required />
                        </div>
    
                        <div className="input-box">
                            <label>Celular</label>
                            <IMaskInput
                                type="tel"
                                name="number"
                                mask="(00) 00000-0000"
                                placeholder="(xx) xxxxx-xxxx"
                                required
                            />
                        </div>
                        <div className="input-box">
                            <label>Descrição</label>
                            <textarea id="descricao" name="descricao" rows="10" placeholder="Digita a sua mensagem" required></textarea>
                        </div>
    
                    </div>
                    <div className="send-button">
                        <button>Enviar</button>
                    </div>
                </form>
        </div>
    </section>
      </>
    )
  }
  