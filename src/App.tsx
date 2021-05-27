import { render } from '@testing-library/react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import React from 'react';


import WelcomeSearch from './Components/Screens/Welcome';

import './App.scss';




class App extends React.Component{
  constructor(props: {}){
    super(props);

  }

  render(){
    return(
      <div>
        <Router>
          <div>
            {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}
            <Switch>
              <Route exact path="/">
                <WelcomeSearch/>
              </Route>
              <Route path="/about">
                <About />
              </Route>              
            </Switch>
          </div>
        </Router>    
      </div>      
    );
  }
}

function About(){
  return(
    <h1>HOLA MUNDO</h1>
  );
}

export default App;
