/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ConjugContext } from "../../AppContext"
import DataTable from "react-data-table-component"
import "./ListaConjugacoes.css"
import NoDataComponent from "../NoDataComponent";

export default function ListaConjugacoes({ conteudo }) {
    const { pronomesConjugRef } = useContext(ConjugContext);

    let tempoVerbal;
    let pessoasVerbais;

    for (var tempo in conteudo) {
        tempoVerbal = conteudo[tempo].tempoVerbal
        pessoasVerbais = conteudo[tempo].pessoasVerbais
    }

    let conjugacoes = {
        tempo: { tempoVerbal: tempoVerbal },
        ...pessoasVerbais,
    }

    let dataArray = Object.values(conjugacoes).reverse()

    const [headerCol, ...restArray] = dataArray

    let pronomesArray = pronomesConjugRef.current

    const outrasColunas = pronomesArray.map(pronome => (
        {
            name: Object.values(pronome)[0],
            selector: row => row[Object.values(pronome)[0]]
        }
    ))

    const colunaPrincipal = [
        {
            name: "Tempo Verbal",
            selector: row => row.tempoVerbal,
        }
    ]

    const colunas = colunaPrincipal.concat(outrasColunas)

    let dataConjugacoes = {
        tempoVerbal: headerCol.tempoVerbal,
        center: true,
    };

    for (let i = 0; i < pronomesArray.length; i++) {
        const pronoun = pronomesArray[i].pronome;
        const verbForm = restArray[i]?.pessoaVerbal;

        dataConjugacoes = {
            ...dataConjugacoes,
            [pronoun]: verbForm
        }
    }

    let data = [dataConjugacoes]

    let customStyles = {
        table: {
            style: {
                backgroundColor: "transparent",
            }
        },
        row: {
            style: {
                backgroundColor: "transparent",
            }
        },
        cell: {
            style: {
                justifyContent: "center"
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


    function handleRowSelect(selectedRows) {
        // console.log(selectedRows[0]?.id)
    }

    return (
        <DataTable
            columns={colunas}
            data={data}
            responsive
            theme="default"
            customStyles={customStyles}
            selectableRows
            selectableRowsHighlight
            selectableRowsSingle
            onSelectedRowsChange={handleRowSelect}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            noDataComponent={<NoDataComponent />}
        />
    )
}