/* eslint-disable react/prop-types */
import Box from "../Box"
import ListaConjugacoes from "../conjugacoes/ListaConjugacoes"

export default function ListaVerbos({ conteudo, categoria, idEmEdicao, setIdEmEdicao }) {

    return (conteudo.map((verbo, index) => {

        let dadosVerbo = Object.values(verbo)[0]

        return (
            <Box key={index} titulo={[dadosVerbo.verboId, dadosVerbo.verboPt]} categoria={categoria}>
                <ListaConjugacoes conteudo={dadosVerbo} idEmEdicao={idEmEdicao} setIdEmEdicao={setIdEmEdicao} />
            </Box>
        )
    }))

}