/* eslint-disable react/prop-types */
import Box from "../Box"

export default function ListaGramatica({ conteudo }) {

    return (
        <div className="coluna">
            {conteudo.map((item, index) => {
                const { regra, conteudo, id } = item
                return (
                    <Box key={index} titulo={[regra]} categoria="regra" id={id}>
                        {conteudo}
                    </Box>
                )
            })}
        </div>
    )
}