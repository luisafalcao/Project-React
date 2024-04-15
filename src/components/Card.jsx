/* eslint-disable react/prop-types */
import "./Card.css"

export default function Card({ tipo, children, classes, categoria }) {
    return (
        <div className={`card ${tipo === "form" && "form"} ${classes && `${classes} row`}`}>
            {categoria === "pronomes" ? (
                <>
                    <h4 className="titulo-lista">Pronomes</h4>
                    <div className="wrapper">
                        {children}
                    </div>
                </>
            ) : (
                <>
                    {children}
                </>
            )}
        </div>
    )
}