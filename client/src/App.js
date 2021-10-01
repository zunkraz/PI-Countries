//importaciones de componentes
import Inicio from './components/Inicio';
import Principal from './components/Principal';
import DetallePais from './components/DetallePais';
import './App.css';

//importaciones de librerias 
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//importaciones de redux


function App() {
  return (
    <Router>
       
        <Switch>
          <Route exact path ='/' component={Inicio} />
          <Route exact path ='/principal' component={Principal} />
          <Route exact path ='/:detallepais' component={DetallePais} />
        </Switch>
          
    </Router>
  );
}

export default App;
