import { useState, useEffect } from "react";
import { useCollapse } from "react-collapsed";
import Form from "../components/Form";
import ListaIdiomas from "../components/ListaIdiomas";
import Card from "../components/Card";
import { listarItens } from "../infra/basededados";
import logo from '../assets/idiomas_inverso.svg'

export default function Home() {
    const { getCollapseProps, getToggleProps } = useCollapse()
    const categoria = "idiomas"

    const [idiomas, setIdiomas] = useState([]);
    const [idiomaId, setIdiomaId] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await listarItens(categoria);
            setIdiomas(data);
        }

        fetchData();
    }, [idiomaId]);

    return (
        <div className="home-page">
            <div className="cards">
                <Card>
                    <img src={logo} className="logo" alt="Logo"  {...getToggleProps()} />
                    <Form {...getCollapseProps()}
                        setDatabaseId={setIdiomaId}
                        categoria={categoria}
                        campos={[
                            {
                                name: "idioma",
                                type: "text",
                                maxLength: 20,
                                required: true
                            }
                        ]}
                        textoBotao="Adicionar"
                        textoSucesso="Idioma adicionado com sucesso!"
                        classes="inverso"
                    />
                </Card>
                <ListaIdiomas conteudo={idiomas} />
            </div>
        </div>

    )
}