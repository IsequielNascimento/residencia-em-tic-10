import { useState } from "react";

export default function Formulario() {
    const [user, setUser] = useState({ nome: "", email: "", telefone: "", cep: "", emprego: "" })


    console.log(user)

    const handleForm = (event) => {
        event.preventDefault()
        console.log(user)

    }
    const handleUser = (event) => {
        setUser((preview) => ({
            ...preview,
            [event.target.name]: event.target.value
        }))

    }

    return (
        <>
            <form action="" onSubmit={handleForm}>
                <label htmlFor="nome">
                    Nome:
                    <input type="text" name="nome" value={user.nome} onChange={(event) => handleUser(event)} />
                </label>
                <label htmlFor="email">
                    E-mail:
                    <input type="email" name="email" value={user.email} onChange={(event) => handleUser(event)} />
                </label>
                <label htmlFor="telefone">
                    Telefone:
                    <input type="text" name="telefone" value={user.telefone} onChange={(event) => handleUser(event)} />
                </label>
                <label htmlFor="cep">
                    CEP:
                    <input type="text" name="cep" value={user.cep} onChange={(event) => handleUser(event)} />
                </label>
                <label htmlFor="emprego">
                    Emprego:
                    <input type="text" name="emprego" value={user.emprego} onChange={(event) => handleUser(event)} />
                </label>

            </form>
        </>
    )
}