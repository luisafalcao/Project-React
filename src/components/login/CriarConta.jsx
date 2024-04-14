/* eslint-disable react/prop-types */
import { useState } from "react"
import "./CriarConta.css"
import { criarConta } from "../../infra/usuarios"

export default function CriarConta({ usuario, updateUsuario }) {
    const [dadosForm, setDadosForm] = useState({ email: "", senha: "", confirma: "" });

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setDadosForm((objetoAtual) => {
            return { ...objetoAtual, [fieldName]: fieldValue }
        })
    }

    const handleClick = () => {
        if (dadosForm.senha === dadosForm.confirma) {
            updateUsuario((novoObjeto) => {

                novoObjeto["email"] = dadosForm.email,
                    novoObjeto["senha"] = dadosForm.senha
            });
            criarConta(usuario, updateUsuario);
        } else {
            alert("Senhas não conferem");
        }
    };

    return (
        <main className="criar-conta">
            <div className="container flex">
                <h2 className="center">Criar Conta</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="text" name="email" value={dadosForm.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha">Senha:</label>
                        <input id="senha" type="password" name="senha" value={dadosForm.senha} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirma">Confirmar Senha:</label>
                        <input id="confirma" type="password" name="confirma" value={dadosForm.confirma} onChange={handleChange} />
                    </div>
                    <input type="button" value="Criar Conta" onClick={handleClick} />
                </form>
            </div>
        </main>

    )
}