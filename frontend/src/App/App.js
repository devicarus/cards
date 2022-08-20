import './App.css';

import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Dashboard from '../components/Dashboard'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Playground from '../pages/Playground'
import Settings from '../pages/Settings'
import Create from '../pages/Create'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign:mode" exact element={<Login/>} />
        <Route path="/playground/:id" element={<Protected><Playground/></Protected>} />
        <Route path="/" element={<Protected><Dashboard/></Protected>}>
          <Route index exact element={<Home/>} />
          <Route path="settings" exact element={<Settings/>} />
          <Route path="create" exact element={<Create/>} />
        </Route>
      </Routes>
    </Router>
  );
}

function Protected({children}) {
  const token = useSelector(state => state.user.token)

  if (token) 
    return children
  else
    return <Navigate to="/signin" replace />
}

export default App;
