/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ConjugContext } from "../../AppContext"
import Box from "../Box"
import ListaConjugacoes from "../conjugacoes/ListaConjugacoes"

export default function ListaVerbos({ conteudo, categoria }) {
    const { conjugacoesId } = useContext(ConjugContext);

    return (conteudo.map((verbo, index) => {
        const { infinitivoId, infinitivoPt } = verbo;

        return (
            <Box key={index} titulo={[infinitivoId, infinitivoPt]} categoria={categoria}>
                <ListaConjugacoes verbo={infinitivoId} filtrarConjugacoes={true} conjugacoesId={conjugacoesId} />
            </Box>
        )
    }))

}