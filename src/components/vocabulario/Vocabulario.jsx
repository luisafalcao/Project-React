/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { listarItens } from "../../infra/basededados"
import "./Vocabulario.css"

import ListaVocabulario from "./ListaVocabulario"
import NovoConteudo from "../NovoConteudo"
import Form from "../Form"

export default function Vocabulario() {
    let { id } = useParams();

    const categoria = "vocabulario";

    const [vocabulario, setVocabulario] = useState([]);
    const [vocabularioId, setVocabularioId] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await listarItens(categoria, id);
            setVocabulario(data);
        }

        fetchData();
    }, [vocabularioId])

    return (
        <>
            <div className="container grid">
                <div className="coluna">
                    <ListaVocabulario conteudo={vocabulario} />
                </div>
                <div className="coluna">
                    <NovoConteudo label="Palavra">
                        <Form
                            setDatabaseId={setVocabularioId}
                            categoria={categoria}
                            idioma={id}
                            campos={[
                                {
                                    name: "palavraPt",
                                    type: "text",
                                    maxLength: 50,
                                    required: true,
                                    label: "Palavra (Português)"
                                },
                                {
                                    name: "palavraId",
                                    type: "text",
                                    maxLength: 50,
                                    required: true,
                                    label: "Palavra (Idioma)"
                                },
                                {
                                    name: "genero",
                                    type: "select",
                                    maxLength: 50,
                                    required: true,
                                    label: "Gênero",
                                    options: ["Masculino", "Feminino", "Neutro"]
                                },
                                {
                                    name: "classeGramatical",
                                    type: "text",
                                    maxLength: 50,
                                    required: false,
                                    label: "Classe Gramatical"
                                },
                            ]}
                            textoBotao="Adicionar"
                            textoSucesso="Vocabulário atualizado com sucesso!"
                        />
                    </NovoConteudo>
                </div>
            </div>
        </>
    )
}