import './App.css';

import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Route from '../components/wrappers/Route'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Playground from '../pages/Playground'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} protected />
        <Route path="/login" exact component={Login} />
        <Route path="/playground" component={Playground} />
      </Switch>
    </Router>
  );
}

export default App;
