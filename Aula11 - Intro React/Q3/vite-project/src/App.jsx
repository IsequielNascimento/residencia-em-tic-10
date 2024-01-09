import Header from './components/Header'
import Card from './components/Card'
import avatar from "./assets/irede.png"



const arrayPost = [
  {
  id:1,
  name: "Ceverino",
  avatar:avatar,
  totalLike: 12,
  description: "Tô não",
  comment: "De fato",
},
]

function App(props) {


  return (
    <>
   
    <Header/>
    <Card/>
    
    </>
  )
}

export default App
