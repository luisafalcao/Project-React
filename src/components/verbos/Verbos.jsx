/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listarItens } from "../../infra/basededados";

import NovoConteudo from "../NovoConteudo";
import Form from "../Form";
import ListaVerbos from "./ListaVerbos";

export default function Verbos() {
    let { id } = useParams();

    const categoria = "verbos"

    const [verbos, setVerbos] = useState([]);
    const [verbosId, setVerbosId] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await listarItens(categoria, id, "essen")
            setVerbos(data)
        }

        fetchData()
    }, [verbosId])

    return (
        <>
            <div className="container grid">
                <div className="coluna">
                    <ListaVerbos conteudo={verbos} categoria={categoria} />
                </div>
                <div className="coluna">
                    <NovoConteudo label="Verbo">
                        <Form
                            setDatabaseId={setVerbosId}
                            categoria={categoria}
                            idioma={id}
                            campos={[
                                {
                                    name: "verboId",
                                    type: "text",
                                    maxLength: 100,
                                    required: true,
                                    label: "Infinitivo (Idioma)",
                                }, {
                                    name: "verboPt",
                                    type: "text",
                                    maxLength: 100,
                                    required: true,
                                    label: "Infinitivo (Português)",
                                }, {
                                    name: "tempoVerbal",
                                    type: "text",
                                    maxLength: 100,
                                    required: false,
                                    label: "Tempo Verbal",
                                },
                                {
                                    dinamico: true,
                                    name: "pessoasVerbais",
                                    type: "text",
                                    required: false,
                                    label: "Conjugações",
                                },
                            ]}
                            textoBotao="Adicionar"
                            textoSucesso="Verbo adicionado com sucesso!"
                        />
                    </NovoConteudo>
                </div>
            </div>
        </>
    )
}