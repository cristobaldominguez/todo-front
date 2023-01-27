import { useState } from 'react'

import AuthContext from '../context/AuthContext'
import getCurrentUser from '../helpers/user'
import { user_local_storage_key } from '../config'

const AuthProvider = ({ children }) => {
  
  const saved_user = JSON.parse(localStorage.getItem(user_local_storage_key)) || {}
  const [current_user, setUser] = useState(saved_user)

  const setUserHandler = (user = {}) => {
    const user_from_localstorage = getCurrentUser()

    if (user_from_localstorage && current_user.user) {
      localStorage.removeItem(user_local_storage_key)
      return setUser(null)
    }

    localStorage.setItem(user_local_storage_key, JSON.stringify(user))
    return setUser(user)
  }

  const auth_value = {
    user: current_user?.user || null,
    token: current_user?.accessToken,
    is_authenticated: !!current_user?.user?.id,
    setUser: setUserHandler,
  }

  return <AuthContext.Provider value={auth_value}>
    {children}
  </AuthContext.Provider>
}

export default AuthProvider
