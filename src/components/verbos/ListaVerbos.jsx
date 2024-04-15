/* eslint-disable react/prop-types */
import Box from "../Box"
import ListaConjugacoes from "../conjugacoes/ListaConjugacoes"

export default function ListaVerbos({ conteudo, categoria }) {

    return (conteudo.map((verbo, index) => {
        const { verboId, verboPt, id, ...rest } = verbo;
        return (
            <Box key={index} titulo={[verboId, verboPt]} categoria={categoria}>
                <ListaConjugacoes conteudo={rest} />
            </Box>
        )
    }))

}