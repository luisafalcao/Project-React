/* eslint-disable react/prop-types */
import { useCollapse } from "react-collapsed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Box.css"

export default function Box({ idioma, titulo, categoria, children, classes, handleDeletar, idEmEdicao, tempoVerbal }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    function handleClick() {
        handleDeletar(idioma, categoria, titulo[0], idEmEdicao, tempoVerbal)
    }

    return (
        <div className={`box ${classes}`}>
            <div className="box-header" {...getToggleProps()}>
                {classes === "mini" ?
                    <h4>{titulo[0]}</h4> :
                    <h3>{titulo[0]}</h3>
                }
                <h3 className="italico">{titulo[1]}</h3>
                {isExpanded ?
                    <FontAwesomeIcon className="collapse-icon" icon="fa-solid fa-chevron-up" /> :
                    <FontAwesomeIcon className="collapse-icon" icon="fa-solid fa-chevron-down" />
                }
            </div>
            <div className="box-body" {...getCollapseProps()}>
                <div className="wrapper">
                    {children}
                    {/* <button type="button" className="botao-dinamico box" onClick={handleClick}><FontAwesomeIcon className="home-icon" icon="fa-solid fa-minus" /></button> */}
                </div>
            </div>
        </div>

    )
}