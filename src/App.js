import { useState } from 'react';
import Cabecera from './components/Cabecera'; // hijos de App
import Listado from './components/Listado'; // hijos de App 

function App() {




  // Estado y el que edita ese Estado = contador y setContador
  const [count, setCount] = useState(0); 

  const adding = ()=> {
    setCount(count + 1)
  }


  return (
    <div className="App">
      <Cabecera bought = {count} />
      <Listado add = {adding} />
    </div>
  );
}

export default App;
