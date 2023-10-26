import Image from "next/image";
import { useEffect } from "react";
import logo from '@/public/logo.png';
import { RiMailSendLine } from 'react-icons/ri';
import { AiFillFacebook, AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai';
import Link from "next/link";
import { useState } from "react";
export default function Footer() {
    useEffect(() => {
        const url = window.location.href;
        setUrlLink(url);
    }, []);
    const [urlLink, setUrlLink] = useState();
    const [load, setLoad] = useState(false);

    const loadLink = (e) => {
        if (urlLink.split('/')[3] != e) {
            setTimeout(() => setLoad(true), 1000);
        }
    };
    return (
        <>
            {load == true ? (
                <div className="load">
                    <div className="loader"></div>
                </div>
            ) : ''}
            <footer>
                <div id="footer_content">
                    <div id="footer_contacts">
                        <Link href="./"><Image width="100" src={logo} alt="Cardpress" /></Link>
                        <p>Nossas redes sociais.</p>

                        <div id="footer_social_media">
                            <Link href="#" className="footer-link" alt="instagram" id="instagram" onClick={() => loadLink('')}>
                                <AiOutlineInstagram />
                            </Link>

                            <Link href="#" className="footer-link" alt="facebook" id="facebook" onClick={() => loadLink('')}>
                                <AiFillFacebook />
                            </Link>

                            <Link href="#" className="footer-link" alt="Whatsapp" id="whatsapp" onClick={() => loadLink('')}>
                                <AiOutlineWhatsApp />
                            </Link>
                        </div>
                    </div>

                    <ul className="footer-list">
                        <li>
                            <h3>Empresa</h3>
                        </li>
                        <li>
                            <Link href="empresa" className="footer-link" alt="Sobre nós" onClick={() => loadLink('empresa')}>Sobre nós</Link>
                        </li>
                        <li>
                            <Link href="termos-de-uso" className="footer-link" alt="Termos de uso" onClick={() => loadLink('termos-de-uso')}>Termos de uso</Link>
                        </li>
                        <li>
                            <Link href="politica-de-privacidade" className="footer-link" alt="Política de Privacidade" onClick={() => loadLink('politica-de-privacidade')}>Política de Privacidade</Link>
                        </li>
                        <li>
                            <Link href="revenda" className="footer-link" alt="Seja um revendedor" onClick={() => loadLink('revenda')}>Seja um revendedor</Link>
                        </li>
                        <li>
                            <Link href="afiliado" className="footer-link" alt="Seja um afiliado" onClick={() => loadLink('afiliado')}>Seja um afiliado</Link>
                        </li>
                    </ul>

                    <ul className="footer-list">
                        <li>
                            <h3>Site</h3>
                        </li>
                        <li>
                            <Link href="mapa-do-site" className="footer-link" alt="Mapa do site" onClick={() => loadLink('mapa-do-site')}>Mapa do site</Link>
                        </li>
                        <li>
                            <Link href="contato" className="footer-link" alt="Contato" onClick={() => loadLink('contato')}>Contato</Link>
                        </li>
                        <li>
                            <Link href="blog" className="footer-link" alt="Blog" onClick={() => loadLink('blog')}>Blog</Link>
                        </li>
                        <li>
                            <Link href="gabaritos" className="footer-link" alt="Gabaritos" onClick={() => loadLink('gabaritos')}>Gabaritos</Link>
                        </li>
                        <li>
                            <Link href="inscreva-se" className="footer-link" alt="Inscreva-se" onClick={() => loadLink('inscreva-se')}>Inscreva-se</Link>
                        </li>
                    </ul>

                    <div id="footer_subscribe">
                        <h3>Inscreva-se</h3>
                        <p>Para receber nossas últimas notícias e descontos exclusivos</p>
                        <div id="input_group">
                            <input type="email" id="email" placeholder="Digita o seu email" />
                            <button>
                                <RiMailSendLine />
                            </button>
                        </div>
                    </div>
                </div>

                <div id="footer_copyright">
                    © 2023 Todos os direitos reservados
                </div>
            </footer>
        </>
    )
}
