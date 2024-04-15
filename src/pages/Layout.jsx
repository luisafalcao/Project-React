import { useImmer } from "use-immer"
import { Outlet, Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BarraLogin from "../components/login/BarraLogin"
import CriarConta from "../components/login/CriarConta"
import logo from '../assets/idiomas.svg'

export default function Layout() {
    const [usuario, updateUsuario] = useImmer({ id: "", email: "", senha: "" });
    const [idiomaAtual, setIdiomaAtual] = useImmer("Idioma Atual");

    return (
        <>
            <nav className="top-nav">
                <BarraLogin usuario={usuario} updateUsuario={updateUsuario} />

                {usuario.id ?
                    <Link to={"/"}><FontAwesomeIcon className="home-icon" icon="fa-solid fa-house" /></Link>
                    :
                    <img src={logo} className="logo" alt="Logo" />
                }
            </nav>

            <main>
                {usuario.id ?
                    <Outlet context={{ usuario, updateUsuario, idiomaAtual, setIdiomaAtual }} /> :
                    <CriarConta usuario={usuario} updateUsuario={updateUsuario} />
                }
            </main>
        </>
    )
}