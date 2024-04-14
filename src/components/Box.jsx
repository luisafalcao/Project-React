/* eslint-disable react/prop-types */
import { useCollapse } from "react-collapsed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Box.css"

export default function Box({ titulo, categoria, children, classes }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <div className={`box ${classes}`}>

            <div className="box-header" {...getToggleProps()}>
                {categoria === "verbos" ?
                    <>
                        <h3>{titulo[0]}</h3>
                        <h3 className="italico">{titulo[1]}</h3>
                    </>
                    :
                    classes === "mini" ?
                        <h4>{titulo[0]}</h4> :
                        <h3>{titulo[0]}</h3>

                }
                {isExpanded ?
                    <FontAwesomeIcon className="collapse-icon" icon="fa-solid fa-chevron-up" /> :
                    <FontAwesomeIcon className="collapse-icon" icon="fa-solid fa-chevron-down" />
                }
            </div>

            <div className="box-body" {...getCollapseProps()}>
                <div className="wrapper">
                    {children}
                </div>
            </div>

        </div>
    )
}