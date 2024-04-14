import { useEffect, useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Layout.css"
import Navbar from "../components/Navbar";
import { listarItens } from "../infra/basededados";
import { ConjugContext, PronomesContext } from "../AppContext";

export default function Idioma() {
    const { id } = useParams();

    const [conjugacoes, setConjugacoes] = useState([]);
    const [conjugacoesId, setConjugacoesId] = useState("");

    const [pronomes, setPronomes] = useState([]);
    const [pronomesId, setPronomesId] = useState("");
    const pronomesConjug = useRef([{ pronome: "1ª pessoa do singular" }, { pronome: "2ª pessoa do singular" }, { pronome: "3ª pessoa do singular" }, { pronome: "1ª pessoa do plural" }, { pronome: "2ª pessoa do plural" }, { pronome: "3ª pessoa do plural" }]);

    useEffect(() => {
        async function fetchData() {
            let dataPronomes = await listarItens("pronomes", id);
            let pronomesPessoais = dataPronomes.filter((item) => {
                return item.pronomeTipo === 'Pessoal'
            })[0].pronomes

            if (pronomesPessoais) {
                pronomesConjug.current = pronomesPessoais
            }

        }

        fetchData()
    }, [pronomesId])

    return (
        <>
            <div className="nav-wrapper">
                <Navbar idiomaSelecionado={id} />
            </div>

            <ConjugContext.Provider value={{ conjugacoes, setConjugacoes, conjugacoesId, setConjugacoesId, pronomesConjug }}>
                <PronomesContext.Provider value={{ pronomes, setPronomes, pronomesId, setPronomesId }}>
                    <Outlet />
                </PronomesContext.Provider>
            </ConjugContext.Provider>
        </>
    );
}