import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlayView from './views/PlayView';
import WelcomeView from './views/WelcomeView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/play' component={PlayView} />
        <Route path='/' component={WelcomeView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
