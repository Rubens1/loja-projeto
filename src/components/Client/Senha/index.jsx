import Link from "next/link";
import MenuUser from "../Menu";

export default function Senha() {
  return (
    <>
      <section className="user">
        <MenuUser />
        <div className="user-profile-container-site">
          <div className="user-personal-data-container-site">
            <div className="user-data-title">
              Alterar senha
            </div>
            <form action="" method="POST">
              <div className="form-group">
                <fieldset>
                  <legend>Sua senha</legend>
                  <input type="password" id="sua-senha" name="sua-senha" placeholder="Digite a sua senha antiga" />
                </fieldset>
               
              </div>
              <div className="form-group">
                <fieldset>
                  <legend>Nova Senha</legend>
                  <input type="password" id="senha" name="senha" placeholder="Digite  uma nova senha" />
                </fieldset>
                <fieldset>
                  <legend>Confirma a senha</legend>
                  <input type="password" id="confirma-senha" name="confirma-senha" placeholder="Confirma a senha" />
                </fieldset>
              </div>
                <div className="button-atualiza">
                  <button>Atualizar</button>
                </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
