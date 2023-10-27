import MenuUser from "../Menu";
import { AiFillStar } from "react-icons/ai";
export default function EnderecoInfo() {
    const endereco = [
        {id: 1, rua: "tal", numero: "12", cep: "03430-160", estado: "SP", cidade: "São Paulo", principal: true},
        {id: 2, rua: "tal", numero: "12", cep: "03430-160", estado: "SP", cidade: "São Paulo", principal: false},
        {id: 3, rua: "tal", numero: "12", cep: "03430-160", estado: "SP", cidade: "São Paulo", principal: false},
        {id: 4, rua: "tal", numero: "12", cep: "03430-160", estado: "SP", cidade: "São Paulo", principal: false}
    ];
    return (
        <>
            <section className="user">
                <MenuUser />
                <div className="user-profile-container-site">
                    <div className="user-addr-container-site">
                        <div className="user-addr-form-title">
                            Meus endereços
                        </div>
                        <div className="address-card-box">
                            {endereco.map((item, key) => {
                            return(<div className="address-card" key={item.id}>
                                <span className="addr-title">
                                    {item.principal == true ? (<><AiFillStar /> Endereço pricipal</>) : (<>Endereço</>)} 
                                </span>
                                <span className="address">
                                    <p>Rua: {item.rua}</p>
                                    <p>Número: {item.numero}</p>
                                    <p>CEP: {item.cep}, {item.cidade}, {item.estado}</p>
                                </span>
                                <div className="actions-btn">
                                    <button id="modal-button" className="addr-edit">
                                        editar
                                    </button>
                                    <button className="addr-delete">
                                        excluir
                                    </button>
                                </div>
                            </div>)
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
