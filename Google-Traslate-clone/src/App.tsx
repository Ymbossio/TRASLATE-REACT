import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './hooks/useStore';


function App() {

  const {fromLanguaje, setFromLanguaje} = useStore()
  
  return (
    <div className='App'>
      <h1>Google Traslate Proyect</h1>
      <button onClick={()=>{
        setFromLanguaje('es')
      }}>Cambiar loading</button>
      {fromLanguaje}
    </div>
  )
}

export default App
