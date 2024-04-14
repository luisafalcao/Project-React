import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../infra/firebase'

export function logarUsuario(usuario, updateUsuario) {
    signInWithEmailAndPassword(auth, usuario.email, usuario.senha)
        .then((credenciais) => {
            updateUsuario((novoObjeto) => {
                novoObjeto["id"] = credenciais.user.uid
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode} = ${errorMessage}`);
            alert("Login Inválido")
        })
}

export function deslogarUsuario(usuario, updateUsuario) {
    signOut(auth)
        .then(() => {
            updateUsuario({ id: "", email: "", senha: "" })
        })
}

export function criarConta(usuario, updateUsuario) {
    createUserWithEmailAndPassword(auth, usuario.email, usuario.senha)
        .then((credenciais) => {
            updateUsuario((novoObjeto) => {
                novoObjeto["id"] = credenciais.user.uid
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert("Erro na criação da conta")
        })
}