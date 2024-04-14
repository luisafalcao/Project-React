/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useForm, useFieldArray } from "react-hook-form";
import { inserirIdioma, inserirItem } from "../infra/basededados";
import "./Form.css"

export default function Form({ campos, idioma, textoBotao, categoria, textoSucesso, setDatabaseId, classes }) {
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
        defaultValues: {
            pronomes: [{ pronome: "" }],
            pessoasVerbais: { pessoasVerbais: "" }
        }
    });

    const { fields, append, remove } = useFieldArray(
        {
            name: 'pronomes',
            control
        },
        {
            name: 'pessoasVerbais',
            control
        }
    )

    async function enviarDados(dados) {
        let id
        if (categoria === "idiomas") {
            const idiomaNome = dados.idioma.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            id = await inserirIdioma(dados, idiomaNome);
        } else {
            let docName
            let colName

            if (categoria === "vocabulario") {
                docName = dados.palavraId.toLowerCase();
            } else if (categoria === "gramatica") {
                docName = dados.regra.toLowerCase();
            } else if (categoria === "verbos") {
                docName = dados.infinitivoId.toLowerCase()
            } else if (categoria === "conjugacoes") {
                docName = dados.tempoVerbal.toLowerCase()
                colName = dados.verboId.toLowerCase()
                console.log("docName: ", docName)
                console.log("colName: ", colName)
                console.log("dados: ", dados)
                console.log("dados.pessoasVerbais: ", dados.pessoasVerbais)
            } else if (categoria === "pronomes") {
                docName = dados.pronomeTipo.toLowerCase()
            }

            id = await inserirItem(idioma, categoria, dados, docName, colName)
        }

        setDatabaseId(id)
        abrirModal()
        reset();
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    function abrirModal() {
        setIsOpen(true);
    }

    function fecharModal() {
        setIsOpen(false);
    }

    return (
        <div className="form">

            <Modal
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0 ,0, 0.8)'
                    },
                    content: {
                        border: 'none',
                        background: '#ff4d80',
                        color: "white",
                        fontSize: "1.5rem",
                        borderRadius: '20px',
                        padding: '20px',
                        height: '30%',
                        width: '30%',
                        margin: "auto",
                        inset: "0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center"
                    }
                }}
                isOpen={modalIsOpen}
                onRequestClose={fecharModal}
                closeTimeoutMS={200}
            >
                <div>{textoSucesso}</div>
            </Modal>

            <form onSubmit={handleSubmit(enviarDados)} className={`${classes ? classes : ""}`}>
                {
                    campos.map((campo, index) => {
                        const { dinamico, name, type, maxLength, required, label, options, noLabel } = campo

                        if (dinamico) {
                            return (
                                <div key={index} className="form-group">
                                    {
                                        fields.map((field, index) => {
                                            return (
                                                <div key={field.id} className="botao-dinamico-wrapper">
                                                    <input type="text" placeholder={label} {...register(`${name}.${index}.${name}`, { required: required, maxLength: maxLength })} />
                                                    {
                                                        index > 0 && (
                                                            <button type="button" className="botao-dinamico" onClick={() => remove(index)}><FontAwesomeIcon className="home-icon" icon="fa-solid fa-minus" /></button>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                    <button type="button" className="botao-add" onClick={() => append({ name: '' })}><FontAwesomeIcon className="home-icon" icon="fa-solid fa-plus" /></button>
                                </div>
                            )
                        } else if (type === "textarea") {
                            return (
                                <div key={index} className="form-group">
                                    <label htmlFor={name}>{label}</label>
                                    <textarea id={name} cols="30" rows="10" {...register(name, { required: required, maxLength: maxLength })}></textarea>
                                </div>
                            )
                        } else if (type === "select") {
                            return (
                                <div key={index} className="form-group">
                                    <label htmlFor={name}>{label}</label>
                                    <select id={name} {...register(name, { required: required, maxLength: maxLength })}>
                                        {options.map((option, index) => (
                                            <option key={index} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            )
                        } else if (noLabel) {
                            return (
                                <div key={index} className={`form-group ${categoria === "conjugacoes" && "flex"}`}>
                                    <input placeholder={label} className={`${required && 'required'}`} type={type} {...register(name, { required: required, maxLength: maxLength })} />
                                </div>
                            )
                        } else {
                            return (
                                <div key={index} className="form-group">
                                    <label htmlFor={name}>{label}{required && name != "idioma" && <span>*</span>}</label>
                                    <input id={name} className={`${required && 'required'}`} type={type} {...register(name, { required: required, maxLength: maxLength })} />
                                    {errors[name] && errors[name].type === "required" && (
                                        <small className="erro">campo obrigatório</small>
                                    )}
                                </div>
                            )
                        }



                    })

                }
                <input type="submit" value={textoBotao} />
            </form>

            <div className="errors-container">
                {errors.nome?.message && (
                    <div>{errors.nome.message}</div>
                )}
                {errors.email?.message && (
                    <div>{errors.email.message}</div>
                )}
                {errors.nome?.message && (
                    <div>{errors.nome.message}</div>
                )}
            </div>
        </div>
    )
}