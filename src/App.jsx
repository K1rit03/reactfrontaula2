// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import './App.css'
import Componente1 from './components/Componente1'
import Componente2 from './components/Componente2'
import Componente3 from './components/Componente3'
import Cabecalho from './components/cabecalho'

function App() {
  
  const paragr = {
    color:'orange',
    backgroundColor: '#333'
  }

  return (
    <>
    
      
      
      
      <Cabecalho/>
      <Componente1/>
      <Componente2/>
      <Componente3/>
    
      
    </>
  )
}

export default App
