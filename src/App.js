import { Routes, Route } from 'react-router-dom'

import './assets/css/App.css'
import NavBar from './components/navbar'

// Views
import Home from './views/home'
import Todos from './views/todos'
import Login from './views/Login'
import SignUp from './views/Signup'
// Providers
import AuthProvider from './providers/AuthProvider'
// Styles
import './assets/styles'

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="mx-auto max-w-7xl px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos/:id" element={<Todos />} />
        </Routes>
        </div>
    </div>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signout" element={<Login />} />
  )
}

export default App
