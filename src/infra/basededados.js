import { collection, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

// inserir idioma (documento)
// export async function inserirIdioma(dados, idioma) {
//     const docRef = await setDoc(doc(db, "idiomas", idioma), dados)
//     return docRef;
// }

// inserir documentos dentro das coleções (gramática, vocabulário, verbos, pronomes, conjugações) / inserir documentos com subcoleções (verbo + conjugação)
export async function inserirItem(idioma, colecao, dados, docName, colName) { //idioma = frances; colecao = vocabulario; dados = inputs; docName = regra/palavraId/infinitivoId/pronomeTipo/tempoVerbal
    console.log("idioma: ", idioma)
    console.log("colecao: ", colecao)
    console.log("docName: ", docName)
    const docRef =
        colecao === "idiomas" ?
            await setDoc(doc(db, "idiomas", idioma), dados) : //inserir idioma
            colecao === "verbos" ?
                await setDoc(doc(db, "idiomas", idioma, colecao, docName), { [colName]: dados, verboId: dados.verboId, verboPt: dados.verboPt }, { merge: true }) : //inserir verbo
                await setDoc(doc(db, "idiomas", idioma, colecao, docName), dados); //inserir outros
    return docRef;
}

// listar itens na página
export async function listarItens(colecao, idioma) {
    let docRef;

    docRef =
        colecao === "idiomas" ?
            collection(db, "idiomas") :
            collection(db, "idiomas", idioma, colecao)

    let retorno;

    await getDocs(docRef)
        .then((QuerySnapshot) => {
            retorno = QuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        })

    return retorno
}

// deletar itens
export async function deletarItem() {
    await deleteDoc(doc(db, "idiomas", "DC"));
}

// export async function listarIdiomas(colecao) {
//     let retorno;
//     await getDocs(collection(db, colecao))
//         .then((QuerySnapshot) => {
//             retorno = QuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//         });
//     return retorno
// }

export async function listarConjugacoes() {

}


// export async function inserirItem(novosDados, idioma, categoria, subColecaoNome) {
//     if (categoria === "conjugacoes") {
//         const verbosRef = collection(db, "idiomas", idioma, "verbos")
//         const verbos = []
//         let retorno

//         // criar array dos verbos que já existem
//         await getDocs(verbosRef)
//             .then((QuerySnapshot) => {
//                 retorno = QuerySnapshot.docs.map(doc => {
//                     verbos.push(doc.data())
//                 })
//                 return retorno
//             })

//         let verboExiste = verbos.find(item => item.infinitivoPt === novosDados.verboPt)

//         if (!verboExiste) {
//             let novoVerbo = { infinitivoPt: novosDados.verboPt, infinitivoId: novosDados.verboId }
//             await setDoc(doc(db, "idiomas", idioma, "verbos", novoVerbo.infinitivoId.toLowerCase()), novoVerbo) //(db, idiomas > {lingua selecionada} > {tipo (vocabulario, gramatica, verbo)} > {nome do item}), {palavra/regra/verbo adicinado}
//         }

//         inserirConjugacao(idioma, subColecaoNome, novosDados.verboId, novosDados)
//     } else {
//         await setDoc(doc(db, "idiomas", idioma, categoria, subColecaoNome), novosDados) //(db, idiomas > {lingua selecionada} > {tipo (vocabulario, gramatica, verbo)} > {nome do item}), {palavra/regra/verbo adicinado}
//     }

// }

// export async function inserirConjugacao(idioma, subColecaoNome, verbo, novosDados) {
//     const docRef = doc(db, 'idiomas', idioma, 'conjugacoes', subColecaoNome); // Reference to the subcollection
//     const colecaoRef = collection(docRef, verbo); // Reference to the document within the subcollection
//     await setDoc(colecaoRef, novosDados, { merge: true });
// }


// export async function listarItens(databaseNome, id) {
//     let retorno;
//     await getDocs(collection(db, "idiomas", id, databaseNome))
//         .then((QuerySnapshot) => {
//             retorno = QuerySnapshot.docs.map(doc => {
//                 return {
//                     ...doc.data(),
//                     id: doc.id
//                 }
//             })
//         })
//     return retorno
// }

// export async function listarConjugacoes(id, verbo) {
//     const verbos = []

//     await getDocs(collection(db, "idiomas", id, "conjugacoes", "passado", "passado"))
//         .then((QuerySnapshot) => {
//             QuerySnapshot.docs.map(doc => {
//                 verbos.push(doc.data())
//             })
//         })

//     await getDocs(collection(db, "idiomas", id, "conjugacoes", "presente", "presente"))
//         .then((QuerySnapshot) => {
//             QuerySnapshot.docs.map(doc => {
//                 verbos.push(doc.data())
//             })
//         })

//     await getDocs(collection(db, "idiomas", id, "conjugacoes", "futuro", "futuro"))
//         .then((QuerySnapshot) => {
//             QuerySnapshot.docs.map(doc => {
//                 verbos.push(doc.data())
//             })
//         })

//     const verbosFiltrados = verbos.filter(item => item.verboId === verbo)
//     return [verbos, verbosFiltrados]
// }

