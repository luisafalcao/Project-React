/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { listarItens } from "../../infra/basededados"
import { PronomesContext } from "../../AppContext"

import NovoConteudo from "../NovoConteudo"
import Form from "../Form"
import ListaGramatica from "./ListaGramatica"
import ListaPronomes from "../pronomes/ListaPronomes"
import Card from "../Card"

export default function Gramatica() {
    const { id } = useParams();
    const { pronomes, setPronomes, pronomesId, setPronomesId } = useContext(PronomesContext);

    const categoria = "gramatica";

    const [gramatica, setGramatica] = useState([]);
    const [gramaticaId, setGramaticaId] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await listarItens(categoria, id);
            setGramatica(data)
        }

        fetchData()
    }, [gramaticaId])

    useEffect(() => {
        async function fetchData() {
            const data = await listarItens("pronomes", id);
            setPronomes(data)
        }

        fetchData()
    }, [pronomesId])

    return (
        <>
            <div className="container grid">
                <div className="coluna">
                    <ListaGramatica conteudo={gramatica} />
                    <Card>
                        <h4 className="titulo-lista">Pronomes</h4>
                        <ListaPronomes conteudo={pronomes}></ListaPronomes>
                    </Card>
                </div>
                <div className="coluna">
                    <NovoConteudo label="Regra">
                        <Form
                            setDatabaseId={setGramaticaId}
                            categoria={categoria}
                            idioma={id}
                            campos={[
                                {
                                    name: "regra",
                                    type: "text",
                                    maxLength: 100,
                                    required: true,
                                    label: "Regra"
                                },
                                {
                                    name: "conteudo",
                                    type: "textarea",
                                    maxLength: 256,
                                    required: false,
                                    label: "Conteúdo"
                                },
                            ]}
                            textoBotao="Adicionar"
                            textoSucesso="Regra adicionada com sucesso!"
                        />
                    </NovoConteudo>
                    <NovoConteudo label="Pronome">
                        <Form
                            setDatabaseId={setPronomesId}
                            categoria="pronomes"
                            idioma={id}
                            campos={[
                                {
                                    name: "pronomeTipo",
                                    type: "text",
                                    maxLength: 10,
                                    required: true,
                                    label: "Tipo de Pronome",
                                },
                                {
                                    dinamico: true,
                                    name: "pronomes",
                                    type: "text",
                                    maxLength: 10,
                                    required: false,
                                    label: "Pronomes",
                                }
                            ]}
                            textoBotao="Adicionar"
                            textoSucesso="Pronome adicionado com sucesso!"
                        />
                    </NovoConteudo>
                </div>
            </div>
        </>
    )
}