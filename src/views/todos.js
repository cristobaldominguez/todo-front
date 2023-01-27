import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Todo from '../components/Todo'
import useFetch from '../hooks/useFetch'

function Todos() {
  const { id } = useParams()
  const { get } = useFetch()
  const [todos, setTodos] = useState([])
  const [board, setBoard] = useState({})

  useEffect(() => {
    (async () => {
      const { data: current_board } = await get({ url: `/boards/${id}` })
      const { data: board_todos } = await get({ url: `/boards/${id}/todos` })
      setBoard(current_board)
      setTodos(board_todos)
    })()
    // eslint-disable-next-line
  }, [])

  return <>
    <h2 className="mx-auto max-w-3xl px-6 my-8 text-2xl font-bold text-indigo-600 dark:text-indigo-500 flex">
      <i className={`icon-${board.icon}`}></i>
      {board.name}
    </h2>
    <section id="tasks" className="my-12 mx-auto max-w-3xl px-6">
      {todos.map(todo => <Todo key={todo.id} {...todo} />)}
    </section>
  </>
}

export default Todos
