import Box from "../Box"
import "../gramatica/Gramatica.css"

/* eslint-disable react/prop-types */
export default function ListaPronomes({ conteudo }) {
    return (

        <div className="coluna">
            <h4 className="titulo-lista">Pronomes</h4>
            {
                conteudo.map((item, index) => {
                    const { pronomeTipo, pronomes, id } = item
                    return (
                        <Box key={index} titulo={[pronomeTipo]} categoria="pronome" id={id} classes="mini">
                            <ul>
                                {pronomes.map((item, index) => {
                                    const { pronome } = item

                                    return (
                                        <li key={index}>{pronome}</li>
                                    )
                                })}
                            </ul>
                        </Box>)
                })
            }
        </div>

    )
}