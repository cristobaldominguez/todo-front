import { Routes, Route } from 'react-router-dom'

import './assets/css/App.css'
import NavBar from './components/navbar'

// Views
import Home from './views/home'
import Login from './views/login'
import SignUp from './views/signup'
import Todos from './views/todos'

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="mx-auto max-w-7xl px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos/:id" element={<Todos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<Login />} />
        </Routes>
        </div>
    </div>
  )
}

export default App
