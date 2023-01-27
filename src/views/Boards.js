import { useState, useEffect } from 'react'
import Board from '../components/Board'
import useFetch from '../hooks/useFetch'

function Boards() {
  const [boards, setBoards] = useState([])
  const { get } = useFetch()

  useEffect(() => {
    (async () => {
      const { data } = await get({ url: '/boards' })
      setBoards(data)
    })()
    // eslint-disable-next-line
  }, [])

  return <div className="flex flex-col">
    <h2 className="my-8 text-2xl font-bold text-indigo-600 dark:text-indigo-500">Boards</h2>
    <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      { boards.map(board => <Board key={board.id} {...board} />) }
    </ul>
  </div>
}

export default Boards
