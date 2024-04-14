/* eslint-disable react/prop-types */
import Login from "./Login"
import Logout from "./Logout"
import "./BarraLogin.css"

export default function BarraLogin({ usuario, updateUsuario }) {
    return (
        <div className="barra-login">
            {usuario.id ?
                <Logout usuario={usuario} updateUsuario={updateUsuario} />
                :
                <>
                    <Login usuario={usuario} updateUsuario={updateUsuario} />
                </>
            }
        </div>
    )
}