import React from 'react'
import Adicao from './components/adicao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import Subtracao from './components/Subtracao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Adicao num1={2} num2={2}/>

      <Subtracao num1={2} num2={2} />

      <Multiplicacao num1={2} num2={2} />

      <Divisao num1={2} num2={2} />

      <PrecisoEstudar disciplina="Front End Avançado" />

    </div>
  )
}

export default App