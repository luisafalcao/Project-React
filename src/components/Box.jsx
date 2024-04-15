/* eslint-disable react/prop-types */
import { useCollapse } from "react-collapsed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deletarItem } from "../infra/basededados";
import "./Box.css"

export default function Box({ titulo, children, classes }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    function handleClick(e) {
        console.log(e.target.parentElement)
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
                    <button type="button" className="botao-dinamico box" onClick={handleClick}><FontAwesomeIcon className="home-icon" icon="fa-solid fa-minus" /></button>
                </div>
            </div>
        </div>

    )
}