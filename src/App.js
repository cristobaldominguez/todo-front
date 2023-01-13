import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/css/App.css'
import NavBar from './components/navbar'

// Views
import Home from './views/home'
import SignIn from './views/signin'
import SignUp from './views/signup'
import Todos from './views/todos'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <div className="mx-auto max-w-7xl px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos/:id" element={<Todos />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signout" element={<SignIn />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
