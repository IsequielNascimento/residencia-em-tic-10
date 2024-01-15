import { Input } from "postcss";
import { useState } from "react"


export default function Form() {


    return (
        <>
            <form action="post">
                <label htmlFor="" className="flex items-start flex-col">
                    <Name />
                </label>
                <label htmlFor="">
                    <Age />
                </label>
                <label htmlFor="">
                    <Address />
                </label>
                <Cep />
                <Phone />


            </form>

        </>
    )
}

function Name() {
    const [name, setName] = useState("");
    function handleName(e) {
        setName(e.tagert.value)
    }


    return (
        <>
            <p>Name: </p>
            <input type="text" placeholder="Digite seu nome"
                onClick={() => handleName}

            />
        </>
    )

}

function Age() {
    const [age, setAge] = useState(0)

    return (
        <>
            <p>Idade: </p>
            <input type="text" placeholder="Insira sua idade"
                onClick={() => handleAge}
            />
        </>
    )
}

function Address() {
    const [adress, setAdress] = useState("")

    return (
        <>
            <p>Endereço: </p>
            <input type="text" placeholder="Insira o seu endereço"
                onClick={() => handleAddress}

            />
        </>
    )
}

function Cep() {
    const [cep, setCep] = useState("")

    return (
        <>
            <p>Endereço: </p>
            <input type="text" placeholder="Insira o seu CEP"
                onClick={() => handleCep}
            />
        </>
    )
}
function Phone() {
    const [phone, setPhone] = useStat("")
    return (
        <>
            <label htmlFor="">Phone:
                <input type="text" placeholder="passa o zap" />
            </label>
        </>
    )
}