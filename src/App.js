import React from 'react';
import logo from './assets/images/profile.jpg';
import './assets/css/App.css';

//Importar Componentes
import DatosFooter from './components/DatosFooter';

function HolaMundo(nombre, edad) {
  var presentacion = (
    <div>
      <h2>Hola, soy {nombre}...</h2>
      <h3>¿A qué me dedico?</h3>
      <small>Soy Desarrollador Web con 3 años de experiencia...<br/> utilizo <strong>HTML5</strong>, <strong>jQuery</strong>, <strong>PHP</strong> y <strong>MySQL</strong> para mis proyectos.<br/> <br/>
       Abajo te dejo mis datos por si deseas contratarme</small>
    </div>
  );
  return presentacion;
}

function App() {
  var nombre = "Noé Muñoz";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Img-Profile" alt="profile" />
        {HolaMundo(nombre)}
        <section className="componentes">
        <br/>
          <DatosFooter />

        </section>
      </header>
    </div>
  );
}

export default App;
