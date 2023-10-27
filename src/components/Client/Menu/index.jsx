import Link from "next/link";
import { CiUser } from 'react-icons/ci';
import { TiContacts } from 'react-icons/ti';
import { BsCashCoin, BsPinMap } from 'react-icons/bs';
import { LiaUserTieSolid } from 'react-icons/lia';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FiMapPin } from 'react-icons/fi';
export default function MenuUser() {
    return (
        <>
            <div className="menu-client">
                <nav>
                    <ul>
                        <li>
                            <Link href="meu-perfil" alt="Dados Básicos"><CiUser /> <span>Dados Básicos</span></Link>
                        </li>
                        <li>
                            <Link href="alterar-senha" alt="Alterar Senha"><RiLockPasswordLine /> <span>Senha</span></Link>
                        </li>
                        <li>
                            <Link href="dados-da-empresa" alt="Dados da Empresa"><LiaUserTieSolid /> <span>Dados da Empresa</span></Link>
                        </li>
                        <li>
                            <Link href="enderecos" alt="Endereço"><FiMapPin /> <span>Endereço</span></Link>
                        </li>
                        <li>
                            <Link href="contatos" alt="Contatos"><TiContacts /> <span>Contatos</span></Link>
                        </li>
                        <li>
                            <Link href="conta-bancaria" alt="Conta Bancaria"><BsCashCoin /> <span>Conta Bancaria</span></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}