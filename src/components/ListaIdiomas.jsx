/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Card from "./Card"

export default function ListaIdiomas({ conteudo }) {
    let navigate = useNavigate();

    function handleClick(event) {
        navigate(`/idioma/${event.target.id.toLowerCase()}/gramatica`)
    }

    return (
        conteudo.map((idioma, index) => (
            <Card key={index} idioma={idioma.idioma} tipo="botao" >
                <button onClick={handleClick} id={idioma.id} className="card-botao">
                    {idioma.idioma}
                </button>
            </Card>
        ))
    )
}