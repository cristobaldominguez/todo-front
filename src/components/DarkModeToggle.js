import useDarkMode from '../hooks/useDarkMode'

function DarkModeToggle({ children }) {
  const { dark_mode, setDarkMode } = useDarkMode()

  const darkModeHandler = (e) => {
    setDarkMode(!dark_mode)
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" onChange={darkModeHandler} checked={dark_mode} className="sr-only peer" />
      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
      { children }
    </label>
  )
}

export default DarkModeToggle
