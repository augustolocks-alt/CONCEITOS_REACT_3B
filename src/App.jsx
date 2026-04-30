import { useState } from 'react'
import './App.css'

function App() {
const [tela,setTela1] = useState('login') 

 const renderiarTela = () => {
  if (tela === 'login') {
  return 'login'
  } else if (tela ==='cadastro') {
  return 'cadastro'
  }
}
const trocarTela = (pagina)=>{
tela = pagina
}
return (
  <>
        <h1>dead cell</h1>
      <button onClick={trocarTela('login')}>login</button>
      <button onClick={trpacarTela('cadastro')}>cadastro</button>
      {renderizarTela()}
    </>
  )
}

export default App
