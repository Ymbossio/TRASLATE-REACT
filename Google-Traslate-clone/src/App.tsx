import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Col , Row, Button } from 'react-bootstrap';
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAJE } from './constants';
import { ArrowIcon } from './components/Icons';
import { LanguajeSelector } from './components/LanguajeSelector';

function App() {

  const {fromLanguaje, toLanguaje, interchangeLanguaje, setFromLanguaje, setToLanguaje} = useStore()
  
  return (
    <Container fluid>
      <h1>Google Traslate Proyect</h1>

      <Row>
        <Col>
          <LanguajeSelector onChange={setFromLanguaje}/>
          {fromLanguaje}
        </Col>

        <Col>
          <Button variant='link' disabled={fromLanguaje === AUTO_LANGUAJE} onClick={interchangeLanguaje}><ArrowIcon /></Button>
        </Col>

        <Col>
          <LanguajeSelector  onChange={setToLanguaje}/>
          {toLanguaje}
        </Col>

      </Row>
    </Container>
  )
}

export default App
