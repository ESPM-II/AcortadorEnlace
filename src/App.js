import './App.css';
import AcortadorEnlaces from './modulos/AcortadorEnlaces';
import Fondo from './modulos/Fondo';
import Resultado from './modulos/Resultado';
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <AcortadorEnlaces setInputValue={setInputValue} />
      <Fondo />
      <Resultado inputValue={inputValue} />
    </div>
  );
}

export default App;
