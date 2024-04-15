/* eslint-disable react/prop-types */
import Box from "../Box"
import ListaConjugacoes from "../conjugacoes/ListaConjugacoes"
import { deletarItem } from "../../infra/basededados";

export default function ListaVerbos({ idioma, conteudo, categoria, idEmEdicao, setIdEmEdicao }) {

    async function handleDeletar(idioma, categoria, verboId, idSelecionado, fieldToDelete) {
        await deletarItem(idioma, categoria, verboId, idSelecionado, fieldToDelete)
        setIdEmEdicao("")
    }

    return (
        conteudo.length > 0 ?
            conteudo.map((verbo, index) => {

                let dadosVerbo = Object.values(verbo)

                return (
                    <Box key={index} idioma={idioma} titulo={[dadosVerbo[0].verboId, dadosVerbo[0].verboPt]} categoria={categoria} tempoVerbal={dadosVerbo.tempoVerbal} handleDeletar={handleDeletar} setIdEmEdicao={setIdEmEdicao}>
                        <ListaConjugacoes idioma={idioma} categoria={categoria} conteudo={dadosVerbo} idEmEdicao={idEmEdicao} setIdEmEdicao={setIdEmEdicao} />
                    </Box>
                )
            }) :
            <Box titulo={["Adicione novos verbos..."]}>
                <p>...e suas conjugações aqui.</p>
            </Box>
    )

}

