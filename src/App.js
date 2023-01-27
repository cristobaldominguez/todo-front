import { Routes, Route } from 'react-router-dom'

import './assets/css/App.css'
import NavBar from './components/navbar'
import Notifications from './components/Notifications'

// Views
import Home from './views/home'
import Todos from './views/todos'
import Login from './views/Login'
import SignUp from './views/Signup'
// Providers
import AuthProvider from './providers/AuthProvider'
import NotificationProvider from './providers/NotificationProvider'

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
    <NotificationProvider>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signout" element={<Login />} />
    </NotificationProvider>
  )
}

export default App
