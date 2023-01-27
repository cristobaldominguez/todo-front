import { Link } from 'react-router-dom'
import humanizedTimeSpan from '../helpers/humanizedTimeSpan'

function Board({ id, name, icon, colour, edited, created }) {
  const link = `/boards/${id}`
  const date = edited ? `Edited ${humanizedTimeSpan(edited)}` : `Created ${humanizedTimeSpan(created)}`
  return <li>
    <Link to={link} className="flex items-start rounded-xl bg-white dark:bg-gray-700 p-4 shadow-lg border-solid border relative">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50 dark:bg-blue-300 text-blue-400">
        <i className={`icon-${icon} text-2xl dark:text-blue-600`}></i>
      </div>

      <div className="ml-4 dark:text-white">
        <h2 className="font-semibold">{name}</h2>
        <p className="mt-2 text-sm text-gray-500">{date}</p>
      </div>

      <div className="absolute top-2 right-1">
        <i className="icon-menu-vertical text-slate-500"></i>
      </div>
    </Link>
  </li>
}

export default Board
