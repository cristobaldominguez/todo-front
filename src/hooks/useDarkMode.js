import { useContext } from 'react'
import DarkModeContext from '../context/DarkModeContext'

function useDarkMode() {
  return useContext(DarkModeContext)
}

export default useDarkMode
