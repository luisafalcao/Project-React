/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ConjugContext } from "../../AppContext"
import DataTable from "react-data-table-component"
import { listarConjugacoes } from "../../infra/basededados";
import "./ListaConjugacoes.css"
import NoDataComponent from "../NoDataComponent";

export default function ListaConjugacoes({ verbo, filtrarConjugacoes }) {
    let { id } = useParams();
    const { conjugacoesId, pronomesConjug } = useContext(ConjugContext);

    let [dadosFiltrados, setDadosFiltrados] = useState([])
    let [dados, setDados] = useState([])

    useEffect(() => {
        async function fetchData() {
            let data
            if (filtrarConjugacoes) {
                data = await listarConjugacoes(id, verbo)
                setDadosFiltrados(data[1])
            } else {
                data = await listarConjugacoes(id, verbo)
                setDados(data[0])
            }
        }

        fetchData()
    }, [conjugacoesId])


    let noBorder = {
        fontSize: "1rem",
        fontWeight: "400",
        backgroundColor: "transparent",
        padding: "1rem",
    }

    let blueBorder = {
        fontSize: "1rem",
        fontWeight: "400",
        backgroundColor: "transparent",
        padding: "1rem",
        borderBottom: "2px solid #002ec9",
        borderTop: "2px solid #002ec9",
    }

    let customStyles = {
        table: {
            style: {
                backgroundColor: "transparent",
            }
        },
        rows: {
            style: filtrarConjugacoes ? noBorder : blueBorder
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

    let data = filtrarConjugacoes ? dadosFiltrados : dados

    let dataHeader = pronomesConjug.current

    let headers = dataHeader.map((item, index) => {
        return {
            name: item.pronome,
            selector: row => row[`pessoasVerbais${index + 1}`],
        }
    })

    const colunaPrincipal = [
        {
            name: "Verbo",
            selector: row => row.verboId,
            sortable: true,
            width: "fit-content"
        },
    ]

    const colunas = colunaPrincipal.concat(headers)

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
            noDataComponent={<NoDataComponent verbo={verbo} frase="Nenhum tempo verbal a exibir" filtrarConjugacoes={filtrarConjugacoes} />}
        />
    )
}