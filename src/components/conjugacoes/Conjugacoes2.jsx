import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ConjugContext } from "../../AppContext"

import NovoConteudo from "../NovoConteudo"
import Form from "../Form"
import ListaConjugacoes from "./ListaConjugacoes"

export default function Conjugacoes() {
    let { id } = useParams();
    const { setConjugacoesId } = useContext(ConjugContext);
    const categoria = "conjugacoes"

    return (
        <>
            <div className="container">
                <div className="coluna">
                    <ListaConjugacoes
                        categoria={categoria}
                        filtrarConjugacoes={false}
                    />
                </div>
                <div className="coluna">
                    <NovoConteudo label="Conjugação" margin="auto">
                        <Form
                            setDatabaseId={setConjugacoesId}
                            categoria={categoria}
                            idioma={id}
                            campos={[{
                                name: "verboId",
                                type: "text",
                                maxLength: 100,
                                required: true,
                                label: "Verbo (Idioma)",
                                noLabel: true,
                            }, {
                                name: "verboPt",
                                type: "text",
                                maxLength: 100,
                                required: true,
                                label: "Verbo (Português)",
                                noLabel: true,
                            }, {
                                name: "tempoVerbal",
                                type: "text",
                                maxLength: 100,
                                required: true,
                                label: "Tempo Verbal",
                                noLabel: true
                            },
                            {
                                dinamico: true,
                                name: "pessoasVerbais",
                                type: "text",
                                maxLength: 100,
                                required: false,
                                noLabel: true,
                            },
                            ]}
                            textoBotao="Adicionar"
                            textoSucesso="Nova conjugação com sucesso!"
                        />
                    </NovoConteudo>
                </div>
            </div>
        </>
    )
}