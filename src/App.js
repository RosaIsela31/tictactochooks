import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlayView from './views/PlayView';
// import Turn from './components/turn/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={PlayView} />
        {/* <Route path='/turn' component={Turn} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
