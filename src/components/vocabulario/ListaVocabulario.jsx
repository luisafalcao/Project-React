/* eslint-disable react/prop-types */
export default function ListaVocabulario({ conteudo }) {

    return (
        conteudo.length > 0 ?
            conteudo.map((item, index) => {
                const { palavraPt, palavraId, genero, classeGramatical } = item
                return (
                    <div key={index} className="box box-header">
                        <h3 key={index}>{palavraId} <span className="palavra-pt">= {palavraPt}</span></h3>
                        <p>{classeGramatical} | {genero}</p>
                    </div>
                )
            }) :
            <div className="box box-header">
                <p> Aqui ficará uma lista do seu vocabulário.</p>
            </div>
    )
}