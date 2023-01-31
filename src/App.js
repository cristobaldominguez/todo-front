import { Routes, Route } from 'react-router-dom'

// Components
import { PrivateRoutes } from './components/PrivateRoutes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Notifications from './components/Notifications'

// Views
import Home from './views/Home'
import Boards from './views/Boards'
import Todos from './views/Todos'
import Profile from './views/Profile'
import Login from './views/Login'
import SignUp from './views/Signup'
import NotFound from './views/NotFound'

// Hooks
// Context
// Services

// Providers
import AuthProvider from './providers/AuthProvider'
import NotificationProvider from './providers/NotificationProvider'
import DarkModeProvider from './providers/DarkModeProvider'

// Styles
import './assets/styles'

function App() {
  return (
    <NotificationProvider>
      <AuthProvider>
        <DarkModeProvider>
          <NavBar />
          <Notifications />
          <div className="mx-auto max-w-7xl px-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signout" element={<Login />} />

              {/* ProtectedRoutes */}
              <Route element={<PrivateRoutes />}>
                <Route exact path="/boards" element={<Boards />} />
                <Route path="/boards/:id" element={<Todos />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
              {/* /ProtectedRoutes */}

              <Route path="*" element={<NotFound />} />
            </Routes>
            </div>
          <Footer />
        </DarkModeProvider>
      </AuthProvider>
    </NotificationProvider>
  )
}

export default App
