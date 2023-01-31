import { useEffect, useState } from 'react'

import useAuth from '../hooks/useAuth'
import useFetch from '../hooks/useFetch'

import DarkModeContext from '../context/DarkModeContext'
import { dark_mode_local_storage_key } from '../config'
import DarkModeService from '../services/DarkModeService'

const DarkModeProvider = ({ children }) => {
  const { put } = useFetch()
  const { user } = useAuth()
  
  const saved_dark_mode = JSON.parse(localStorage.getItem(dark_mode_local_storage_key))
  const user_dark_mode = saved_dark_mode || user?.dark_mode || false
  const [dark_mode, setDarkMode] = useState(user_dark_mode)

  useEffect(() => {
    if (!user) return

    localStorage.setItem(dark_mode_local_storage_key, dark_mode)
    DarkModeService(dark_mode)
  })

  const setDarkModeHandler = async (value) => {
    setDarkMode(value)

    if (!user) return

    localStorage.setItem(dark_mode_local_storage_key, value)
    DarkModeService(dark_mode)
    await put({ url: `/users/${user.id}`, body: { dark_mode } })
  }

  const dark_mode_value = { 
    dark_mode,
    setDarkMode: setDarkModeHandler
  }

  return <DarkModeContext.Provider value={dark_mode_value}>
    {children}
  </DarkModeContext.Provider>
}

export default DarkModeProvider
