import './styles.css';
import { Card } from "../../components/Card";


function Home() {
 function handleNameChange(name) {
    console.log(name);
 }

  return (
    <div className='container'>
      <h1>Lista de Presença</h1>
      
        <input type="text" placeholder='Digite o nome...'/>
      <div className='input-border'></div>
      
      <button type='button'>Adicionar</button>
      <Card name="Roberta" time="09:35:18" />
      <Card name="Rodrigo" time="10:10:58" />
      <Card name="Ana" time="10:15:12" />
      
    </div>
  )
}

export default Home
