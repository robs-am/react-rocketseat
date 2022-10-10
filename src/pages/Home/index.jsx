import React, {useState} from 'react'
import './styles.css';
import { Card } from "../../components/Card";


function Home() {
 const [studentName, setStudentName] = useState();

  return (
    <div className='container'>
      <h1>Nome: {studentName}</h1>
      
        <input 
        type="text" 
        placeholder='Digite o nome...'
        onChange={e => setStudentName(e.target.value)}
        />
      <div className='input-border'></div>

      <button type='button'>Adicionar</button>
      <Card name="Roberta" time="09:35:18" />
      <Card name="Rodrigo" time="10:10:58" />
      <Card name="Ana" time="10:15:12" />
      
    </div>
  )
}

export default Home
