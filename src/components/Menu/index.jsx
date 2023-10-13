import { AiOutlineSearch, AiOutlineBars } from 'react-icons/ai';
import { BsCart3 } from 'react-icons/bs';
import logo from '@/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Menu() {

    useEffect(() => {

        const menu = document.querySelector('#menu-product'),
            menuCategoria = document.querySelector(".info-categories"),
            closeMenu = document.querySelector(".close-mobile");


        menu.addEventListener('click', () => {
            menuCategoria.classList.add('active-menu');
        })


        closeMenu.addEventListener('click', () => {
            menuCategoria.classList.remove("active-menu");
        })
        
        
    }, [])

    useEffect(() => {
       const url =  window.location.href
       setUrlLink(url);
    }, [])
    const [urlLink, setUrlLink] = useState();
    const [load, setLoad] = useState(false);

    const loadLink = (e) => {
        if(urlLink.split('/')[3] != e){
            setTimeout(() => setLoad(true), 1000);
        }
        
    }

    return (
        <>
        {load == true ? (
        <div className="load">
            <div className="loader"></div>
        </div>
      ) : ''}
            <header>
                <div className="container-site">
                    <div className="top">
                        <div className="contact-top"><a href="tel:11985797473">Telefone: 11 985797473</a></div>
                        <div className="top-flex">
                            <div className="logo">
                                <Link href="./" >
                                    <Image src={logo} alt="Cardpress" />
                                </Link>
                            </div>
                            <div className="form-search">
                                <form action="" method="post">
                                    <div className="search">
                                        <input placeholder="O que você procura?" type="search" name="" id="" className="search-input" />
                                        <button className="btn-search"><AiOutlineSearch /></button>
                                    </div>
                                </form>
                            </div>
                            <div className="info">
                                <ul>
                                    <li><Link href="contato" onClick={e => loadLink('contato')}>Contato</Link></li>
                                    <li><Link href="login" onClick={e => loadLink('login')}>Entrar</Link></li>
                                    <li className='car-shop'><Link href="carrinho" onClick={e => loadLink('carrinho')}><BsCart3 /><span>2</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="menu">
                        <nav className="menu-desktop">
                            <ul>
                                <li> <Link href="./" onClick={e => loadLink()}>inicio</Link>
                                    <ul>
                                        <div className="submenu">
                                            <div className="container-site-submenu">
                                                <div className="categories">
                                                    <span>Categoria</span>
                                                    <div className="list-category">
                                                        <li>
                                                        <Link href="" onClick={e => loadLink()}>teste</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="" onClick={e => loadLink()}>teste</Link>
                                                        </li>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li> <Link href="">inicio</Link>
                                    <ul>
                                        <div className="submenu">
                                            <div className="container-site-submenu">
                                                <div className="categories">
                                                    <span>Categoria</span>
                                                    <div className="list-category">
                                                        <li>
                                                        <Link href="">teste</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">teste</Link>
                                                        </li>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li> <Link href="">inicio</Link>
                                    <ul>
                                        <div className="submenu">
                                            <div className="container-site-submenu">
                                                <div className="categories">
                                                    <span>Categoria</span>
                                                    <div className="list-category">
                                                        <li>
                                                        <Link href="">teste</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">teste</Link>
                                                        </li>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li> <Link href="">inicio</Link>
                                    <ul>
                                        <div className="submenu">
                                            <div className="container-site-submenu">
                                                <div className="categories">
                                                    <span>Categoria</span>
                                                    <div className="list-category">
                                                        <li>
                                                        <Link href="">teste</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">teste</Link>
                                                        </li>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li> <Link href="">inicio</Link>
                                    <ul>
                                        <div className="submenu">
                                            <div className="container-site-submenu">
                                                <div className="categories">
                                                    <span>Categoria</span>
                                                    <div className="list-category">
                                                        <li>
                                                        <Link href="">teste</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">teste</Link>
                                                        </li>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li> <Link href="">inicio</Link>
                                    <ul>
                                        <div className="submenu">
                                            <div className="container-site-submenu">
                                                <div className="categories">
                                                    <span>Categoria</span>
                                                    <div className="list-category">
                                                        <li>
                                                        <Link href="">teste</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">teste</Link>
                                                        </li>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li> <Link href="">inicio</Link>
                                    <ul>
                                        <div className="submenu">
                                            <div className="container-site-submenu">
                                                <div className="categories">
                                                    <span>Categoria</span>
                                                    <div className="list-category">
                                                        <li>
                                                        <Link href="">teste</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">teste</Link>
                                                        </li>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li> <Link href="">inicio</Link>
                                    <ul>
                                        <div className="submenu">
                                            <div className="container-site-submenu">
                                                <div className="categories">
                                                    <span>Categoria</span>
                                                    <div className="list-category">
                                                        <li>
                                                        <Link href="">teste</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">teste</Link>
                                                        </li>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li> <Link href="">inicio</Link>
                                    <ul>
                                        <div className="submenu">
                                            <div className="container-site-submenu">
                                                <div className="categories">
                                                    <span>Categoria</span>
                                                    <div className="list-category">
                                                        <li>
                                                        <Link href="">teste</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">teste</Link>
                                                        </li>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                                <li> <Link href="">inicio</Link>
                                    <ul>
                                        <div className="submenu">
                                            <div className="container-site-submenu">
                                                <div className="categories">
                                                    <span>Categoria</span>
                                                    <div className="list-category">
                                                        <li>
                                                        <Link href="">teste</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="">teste</Link>
                                                        </li>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
                <div className="mobile-top">
                    <div className="contact-mobile"><a href="tel:11985797473">Telefone: 11 985797473</a></div>
                    <div className="logo-info">
                        <div className="logo-mobile"><Link href="./"><Image src={logo} alt="Cardpress" /></Link></div>
                        <div className="info-mobile">
                            <ul>
                                <li><Link href="contato" onClick={e => loadLink('contato')}>Contato</Link></li>
                                <li><Link href="login" onClick={e => loadLink('login')}>Entrar</Link></li>
                                <li className='car-shop'><Link href="carrinho" onClick={e => loadLink('carrinho')}><BsCart3 /><span>2</span></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="search-mobile">
                        <form action="" method="post">
                            <div className="search">
                                <input placeholder="O que você procura?" type="search" name="" id="" className="search-input" />
                                <button className="btn-search"><AiOutlineSearch /></button>
                            </div>
                        </form>
                    </div>
                    <div className='product-menu-mobile'>
                    <div className="menu-mobile" id="menu-product"><AiOutlineBars />Produtos</div>
                    </div>
                    <div className="categories-info-mobile" id="info-categories">
                        <div className="info-categories">
                            <div className="close-button">
                                <div className="close-mobile">X</div>
                            </div>
                            <ul>
                                <li><Link href="" alt="link" onClick={e => loadLink()}></Link>Inicio</li>
                                <li><Link href="" alt="link" onClick={e => loadLink()}></Link>Inicio</li>
                                <li><Link href="" alt="link" onClick={e => loadLink()}></Link>Inicio</li>
                                <li><Link href="" alt="link" onClick={e => loadLink()}></Link>Inicio</li>
                                <li><Link href="" alt="link" onClick={e => loadLink()}></Link>Inicio</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
