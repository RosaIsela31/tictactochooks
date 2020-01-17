import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import './App.css';
import Navbar from './components/navbar';
// import Turn from './components/turn/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/navbar' component={Navbar} />
        {/* <Route path='/turn' component={Turn} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
