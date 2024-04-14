/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ConjugContext } from "../../AppContext"
import DataTable from "react-data-table-component"
import "./ListaConjugacoes.css"
import NoDataComponent from "../NoDataComponent";

export default function ListaConjugacoes({ conteudo, titulo }) {
    let { id } = useParams();
    const { pronomesConjug } = useContext(ConjugContext);

    let tempoVerbal;
    let conjugacoes;

    for (var tempo in conteudo) {
        tempoVerbal = conteudo[tempo].tempoVerbal
        conjugacoes = conteudo[tempo].pessoasVerbais

    }

    conjugacoes = {
        tempo: { tempoVerbal: tempoVerbal },
        ...conjugacoes,
    }

    let dataArray = Object.values(conjugacoes)

    console.log(dataArray)
    const [headerCol, ...rest] = dataArray
    console.log(headerCol)

    let pronomesArray = pronomesConjug.current


    // let noBorder = {
    //     fontSize: "1rem",
    //     fontWeight: "400",
    //     backgroundColor: "transparent",
    //     padding: "1rem",
    // }

    // let blueBorder = {
    //     fontSize: "1rem",
    //     fontWeight: "400",
    //     backgroundColor: "transparent",
    //     padding: "1rem",
    //     borderBottom: "2px solid #002ec9",
    //     borderTop: "2px solid #002ec9",
    // }

    let customStyles = {
        table: {
            style: {
                backgroundColor: "transparent",
            }
        },
        headCells: {
            style: {
                paddingLeft: '2rem',
                paddingRight: '1rem',
                fontSize: '1rem',
                color: "#ff4d80",
            },
        },
        headRow: {
            style: {
                backgroundColor: "transparent",
                borderBottom: "none"
            }
        },
        noData: {
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: "#002ec9",
                backgroundColor: "transparent",
            },
        },
        pagination: {
            style: {
                color: "#002ec9",
                backgroundColor: "transparent",
                fontSize: '13px',
                minHeight: '56px',
                borderTopStyle: 'none',
            }
        }
    }

    const paginationComponentOptions = {
        rowsPerPageText: 'Verbos por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',

    };

    // let data = filtrarConjugacoes ? dadosFiltrados : dados

    // let dataHeader = pronomesConjug.current

    // let headers = dataHeader.map((item, index) => {
    //     return {
    //         name: item.pronome,
    //         selector: row => row[`pessoasVerbais${index + 1}`],
    //     }
    // })

    // const data = [
    //     {
    //         tempoVerbal: "presente",
    //         pronome: "eu",
    //         pronome2: "tu"
    //     },
    //     {
    //         tempoVerbal: "passado",
    //         pronome: "ele",
    //         pronome2: "ela"
    //     },
    //     {
    //         tempoVerbal: "futuro",
    //         pronome: "ele",
    //         pronome2: "ela"
    //     },
    // ]

    const colunaPrincipal = [{
        name: "Tempo Verbal",
        selector: row => row.tempoVerbal,
        sortable: true,
        // center: true,
    }]


    // const customColumns = pronomesArray.map((header, index) => ({
    //     name: header.pronome,
    //     selector: "", // No data field associated with the custom header
    //     cell: row => <div>{row[`customData${index + 1}`]}</div>, // Render function for the custom header
    // }));


    // const outrasColunas = pronomesArray.map(item => {
    //     let conjugacao = item.pronome
    //     return {
    //         name: conjugacao,
    //         selector: "",
    //         sortable: true,
    //         // center: true
    //     }
    // });


    // const data = conteudoArray.flatMap(item => {
    //     const tempoVerbal = item.tempoVerbal;
    //     const pronomeProperties = Object.keys(item.pessoasVerbais).map((key, index) => ({ [`pronome${index + 1}`]: item.pessoasVerbais[key].pessoa }));
    //     const mergedPronomes = Object.assign({}, ...pronomeProperties);

    //     return { tempoVerbal, ...mergedPronomes };
    // });

    // const colunas = colunaPrincipal.concat(outrasColunas)

    function handleRowSelect(selectedRows) {
        // console.log(selectedRows[0]?.id)
    }

    // return (
    //     <DataTable
    //         columns={colunas}
    //         data={data}
    //         responsive
    //         theme="default"
    //         customStyles={customStyles}
    //         selectableRows
    //         selectableRowsHighlight
    //         selectableRowsSingle
    //         onSelectedRowsChange={handleRowSelect}
    //         pagination
    //         paginationComponentOptions={paginationComponentOptions}
    //     // noDataComponent={<NoDataComponent verbo={verbo} frase="Nenhum tempo verbal a exibir" filtrarConjugacoes={filtrarConjugacoes} />}
    //     />
    // )
}