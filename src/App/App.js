import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Playground from '../pages/Playground'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/playground" component={Playground} />
      </Switch>
    </Router>
  );
}

export default App;
