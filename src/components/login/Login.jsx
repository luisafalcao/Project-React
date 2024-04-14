/* eslint-disable react/prop-types */
import { logarUsuario } from "../../infra/usuarios";

export default function Login({ usuario, updateUsuario }) {

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        updateUsuario((novoObjeto) => {
            novoObjeto[name] = value
        });
    };

    const handleLogin = () => {
        logarUsuario(usuario, updateUsuario);
    }

    return (
        <form className="login">
            <label htmlFor="usuario">Email:</label>
            <input id="usuario" type="text" name="email" value={usuario.email} onChange={handleChange} />
            <label htmlFor="senha">Senha:</label>
            <input id="senha" type="password" name="senha" value={usuario.senha} onChange={handleChange} />
            <input type="button" value="Login" onClick={handleLogin} />
        </form>
    )
}