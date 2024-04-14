import { NavLink, useParams } from "react-router-dom"

export default function NoDataComponent({ verbo, frase, filtrarConjugacoes }) {
    const { id } = useParams()

    // return (
    //     <div className="no-data-component">
    //         {
    //             filtrarConjugacoes ?
    //                 <p>Adicione uma nova conjugação de <NavLink to={`/idioma/${id}/conjugacoes`} pagina="conjugacoes"><span>{verbo}</span></NavLink></p>
    //                 : frase
    //         }
    //     </div>
    // )
}