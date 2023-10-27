import Link from "next/link";
import { CiUser } from 'react-icons/ci';
import { TiContacts } from 'react-icons/ti';
import { BsCashCoin, BsPinMap } from 'react-icons/bs';
import { LiaUserTieSolid } from 'react-icons/lia';
import { RiLockPasswordLine } from 'react-icons/ri';
export default function MenuUser() {
    return (
        <>
        <div className="menu-client">
            <nav>
                <ul>
                    <li>
                        <Link href="meu-perfil" alt="Dados Básicos"><CiUser /> Dados Básicos</Link>
                    </li>
                    <li>
                        <Link href="alterar-senha" alt="Alterar Senha"><RiLockPasswordLine /> Alterar Senha</Link>
                    </li>
                    <li>
                        <Link href="dados-da-empresa" alt="Dados da Empresa"><LiaUserTieSolid /> Dados da Empresa</Link>
                    </li>
                    <li>
                        <Link href="enderecos" alt="Endereço"><BsPinMap />Endereço</Link>
                    </li>
                    <li>
                        <Link href="contatos" alt="Contatos"><TiContacts /> Contatos</Link>
                    </li>
                    <li>
                        <Link href="conta-bancaria" alt="Conta Bancaria"><BsCashCoin /> Conta Bancaria</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}