/* eslint-disable react/prop-types */
import { deslogarUsuario } from "../../infra/usuarios"

export default function Logout({ usuario, updateUsuario }) {

    function handleLogout() {
        deslogarUsuario(usuario, updateUsuario)
    }

    return (
        <form className="logout">
            <p>{usuario.email}</p>
            <input type="button" value="Logout" onClick={handleLogout} />
        </form>
    )
}