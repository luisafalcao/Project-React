/* eslint-disable react/prop-types */
import Box from "../Box"

export default function ListaGramatica({ conteudo }) {

    return (
        <div className="coluna">
            {conteudo.length > 0 ?
                conteudo.map((item, index) => {
                    const { regra, conteudo, id } = item;
                    return (
                        <Box key={index} titulo={[regra]} categoria="regra" id={id}>
                            {conteudo}
                        </Box>
                    );
                })
                :
                <Box titulo={["Aqui..."]} categoria="regra" id="">
                    <p>...será o local das suas regras de gramática.</p>
                </Box>
            }
        </div>
    );
}