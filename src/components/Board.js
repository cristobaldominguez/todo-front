import { Link } from 'react-router-dom'
import humanizedTimeSpan from '../helpers/humanizedTimeSpan'

import board_colors from '../helpers/board_colours'

function Board({ id, name, icon, colour = 'blue', edited, created }) {
  const link = `/boards/${id}`
  const date = edited ? `Edited ${humanizedTimeSpan(edited)}` : `Created ${humanizedTimeSpan(created)}`
  const colours = board_colors[colour].container

  return <li>
    <Link to={link} className="flex items-start rounded-xl bg-white border-gray-200 dark:bg-gray-700 dark:border-gray-600 p-4 shadow-lg border-solid border relative">
      <div className={`flex h-14 w-14 items-center justify-center rounded-full border-2 ${colours}`}>
        <i className={`icon-${icon} text-2xl `}></i>
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
