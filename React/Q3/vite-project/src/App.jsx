import Header from './components/Header'
// import Card from './components/Card'
// import avatar from "./assets/irede.png"
import Form from './components/Form'
import CardFood from './components/CardFood'



// const posts = [
//   {
//     id: 1, user: "Fulano de Tal", content: "Conteúdo do meu post", avatar: "path avatar", since: "12 h", likes: 12, comments: [
//       { id: 1, content: "Que legal esse post" },
//       { id: 2, content: "Muito bom esse curso" }
//     ],
//     banner: "./src/assets/banner.png"
//   },
//   {
//     id: 2, user: "Sicrano", content: "Conteúdo do meu post", avatar: "path avatar", since: "1 h", likes: 0, comments: [
//       { id: 1, content: "muito ruim esse post" },
//       { id: 2, content: "Muito bom esse curso" }
//     ],
//     banner: "./path da imagem"
//   }
// ]
/*  */
function App(props) {


  return (
    <>

      <Header />
      <CardFood/>
      {/* <Card /> */}
      {/* <Form/> */}

    </>
  )
}

export default App
