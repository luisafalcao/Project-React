/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import "./Navbar.css"

export default function Navbar({ idiomaSelecionado }) {
    return (
        <nav className="page-nav">
            <ul>
                <li><NavLink to={`/idioma/${idiomaSelecionado}/gramatica`} pagina="gramatica">Gramática</NavLink></li>
                <li><NavLink to={`/idioma/${idiomaSelecionado}/vocabulario`} pagina="vocabulario">Vocabulário</NavLink></li>
                <li><NavLink to={`/idioma/${idiomaSelecionado}/verbos`} pagina="verbos">Verbos</NavLink></li>
                {/* <li><NavLink to={`/idioma/${idiomaSelecionado}/conjugacoes`} pagina="conjugacoes">Conjugações</NavLink></li> */}
            </ul>
        </nav>
    )
}