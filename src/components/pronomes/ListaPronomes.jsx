import "../pronomes/ListaPronomes.css"

/* eslint-disable react/prop-types */
export default function ListaPronomes({ conteudo }) {
    return (
        conteudo.length > 0 ?
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
            }) :
            <p> Aqui ficarão os pronomes que você adicionar.</p>


    )
}