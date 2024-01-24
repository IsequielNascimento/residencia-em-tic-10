import { useState } from "react"

export default function CriarContato() {

    const [user, setUser] = useState({ nome: "", telefone: "" })

    const handleUser = (event) => {
        setUser((preview) => ({
            ...preview,
            [event.target.name]: event.target.value
            
        }))
        console.log(user)

    }
    return (
        <section id="campoCriarContato" className="flex gap-2 flex-wrap justify-center pt-2 border items-center ">
            <div className="flex flex-col gap-2 py-4 px-2 ">    
                <label className="flex gap-2 items-center justify-between" >
                    Nome:
                    <input placeholder="Digite o nome completo" className="px-2 py-1 border rounded-md"  type="text" name="nome" value={user.nome} onChange={(event) => handleUser(event)}x/>
                </label>
                <label className="flex gap-2 items-center">
                    Telefone:
                    <input placeholder="Digite o nome completo" className="px-2 py-1 border rounded-md" type="text" name="telefone" value={user.telefone} onChange={(event) => handleUser(event)}/>
                </label>
            </div>
            
            <button className="border-2 border-black rounded-md px-4 bg-emerald-600 text-white w-32 h-20"> Adicionar Contato</button>
        </section>
    )
}