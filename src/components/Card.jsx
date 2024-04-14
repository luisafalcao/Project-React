/* eslint-disable react/prop-types */
import "./Card.css"

export default function Card({ tipo, children, classes }) {
    return (
        <div className={`card ${tipo === "form" && "form"} ${classes && `${classes} row`}`}>
            {children}
        </div>
    )
}