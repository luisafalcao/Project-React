import "../pronomes/ListaPronomes.css"

/* eslint-disable react/prop-types */
export default function ListaPronomes({ conteudo }) {
    return (
        conteudo.map((item, index) => {
            const { pronomeTipo, pronomes, id } = item
            return (
                <ul key={index}>
                    <b>{pronomeTipo}</b>
                    {pronomes.map((item, index) => {
                        const { pronome } = item

                        return (
                            <li key={index}>{pronome}</li>
                        )
                    })}
                </ul>
            )
        })


    )
}