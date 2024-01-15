import FormLogin from "./components/FormLogin"
import PrivateContent from "./components/PrivateContent"
import PublicContent from "./components/PublicContent"
import React, { useState } from "react"

function App() {
  // const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState({ nome: "", email: "", telefone: "", cep: "", emprego: "" })

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("nome", useState(name))
  
  }

  return (
    <>
      {isAuth ?
        <PrivateContent user={user} setIsAuth={setIsAuth} />
        :
        <PublicContent>

          {/* Coloque o componente FormLogin aqui */}
          <div className="Form">
            <form onSubmit={handleSubmit}>
              <label forHtml="nome">
                Nome:
                <input type ="text" name ="nome" />
              </label>
              <label forHtml="email">
                E-mail:
                <input type="text" name="email" />
              </label>
              <label forHtml="telefone">
                Telefone:
                <input type="text" name="telefone" />
              </label>
              <label forHtml="cep">
                CEP:
                <input type="text" name="cep" />
              </label>
              <label forHtml="emprego">
                Emprego:
                <input type="text" name="emprego" />
              </label>
              <button>Criar Usuário</button>
            </form>
          </div>


        </PublicContent>}

    </>
  )
}

export default App
