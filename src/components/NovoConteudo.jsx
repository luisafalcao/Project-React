/* eslint-disable react/prop-types */
import { useCollapse } from "react-collapsed";
import "./NovoConteudo.css"

export default function NovoConteudo({ children, label, margin }) {
    const { getCollapseProps, getToggleProps } = useCollapse()

    return (
        <div className={`add-conteudo ${margin === "auto" && "margin-auto"}`}>
            <div className="header" {...getToggleProps()}>Adicionar {label}</div>
            <div className="body" {...getCollapseProps()}>
                {children}
            </div>
        </div>
    )
}