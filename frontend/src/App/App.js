import './App.css';

import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Route from '../components/wrappers/Route'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Playground from '../pages/Playground'
import Settings from '../pages/Settings'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} protected />
        <Route path="/sign:mode" exact component={Login} />
        <Route path="/playground/:id" component={Playground} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
}

export default App;
