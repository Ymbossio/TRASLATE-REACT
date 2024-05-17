import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Col , Row, Button, Form, Stack } from 'react-bootstrap';
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAJE } from './constants';
import { ArrowIcon } from './components/Icons';
import { LanguajeSelector } from './components/LanguajeSelector';
import { SectionType } from './types.d';
import { Textarea } from './components/TextArea';


function App() {

  const {fromLanguaje, setFromText, setResult, toLanguaje, fromText, result, interchangeLanguaje, setFromLanguaje, setToLanguaje} = useStore()
  
  return (
    <Container fluid>
      <h1>Google Traslate Proyect</h1>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguajeSelector 
            onChange={setFromLanguaje}
            type={SectionType.From}
            value={fromLanguaje} 
            />

            <Textarea
            placeholder='Introducir texto'
            type={SectionType.From}
            value={fromText}
            onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguaje === AUTO_LANGUAJE} onClick={interchangeLanguaje}><ArrowIcon /></Button>
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguajeSelector  
            onChange={setToLanguaje}
            type={SectionType.To}
            value={toLanguaje}
            />

            <Textarea
            placeholder='Traducción'
            type={SectionType.To}
            value={result}
            onChange={setResult}
            />
          </Stack>
        </Col>

      </Row>
    </Container>
  )
}

export default App
