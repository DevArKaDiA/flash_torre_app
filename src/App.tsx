// import { render } from '@testing-library/react';

import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import React from 'react';


import WelcomeSearch from './Components/Screens/Welcome';
import SkillsScreen from "./Components/Screens/Skills";

import './App.scss';
import DevType from "./Components/Screens/DevType";
import Dialog from "./Components/dialog";
import { connect } from "react-redux";
import userState from "./interfaces/userState";
import JobTime from "./Components/Screens/JobTime";


class App extends React.Component{
  render(){
    return(      
      <Router>        
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
            <Dialog/>
          </Route>
          <Route path="/skills">
            <SkillsScreen />
          </Route>
          <Route path="/type">
            <DevType/>
          </Route>
          <Route path="/jobTime">
            <JobTime/>
          </Route>
        </Switch>        
      </Router>      
    );
  }
}

export default App;
