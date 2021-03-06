//importaciones de componentes
import Inicio from './components/Inicio';
import Principal from './components/Principal';
import Actividad from './components/Actividad';
import PaisBuscado from './components/PaisBuscado';
import './App.css';

//importaciones de librerias 
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'




function App() {
  return (
    <Router>
       
        <Switch>
          <Route exact path ='/' component={Inicio} />
          <Route exact path ='/principal' component={Principal} />
          <Route  exact path ='/principal/:id' render={({match})=><PaisBuscado id={match.params.id}/>}/>
          <Route exact path ='/actividad' component={Actividad} />
        </Switch>
          
    </Router>
  );
}

export default App;
