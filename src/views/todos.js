import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import Todo from '../components/Todo'
import useFetch from '../hooks/useFetch'

function Todos() {
  const { id: board_id } = useParams()
  const { get, post, put, delete: destroy } = useFetch()
  const [todos, setTodos] = useState([])
  const [board, setBoard] = useState({})

  useEffect(() => {
    (async () => {
      const { data: current_board } = await get({ url: `/boards/${board_id}` })
      const { data: board_todos } = await get({ url: `/boards/${board_id}/todos` })
      setBoard(current_board)
      setTodos(board_todos)
    })()
    // eslint-disable-next-line
  }, [])

  const addTodoHandler = (e) => {
    e.preventDefault()
    const new_todo = { id: 0, content: '', done: false, sort: todos.length }

    setTodos([...todos, new_todo])
  }

  const createTodoHandler = async (todo) => {
    const create_todo = { ...todo, sort: todos.length }
    const { data: saved_todo } = await post({ url: `/boards/${board_id}/todos`, body: create_todo })
    const todo_index = todos.findIndex((t) => t.content === saved_todo.content)
    todos.splice(todo_index, 1, saved_todo)

    setTodos([...todos])
  }

  const updateTodoHandler = async (todo) => {
    const { data: saved_todo } = await put({ url: `/todos/${todo.id}`, body: todo })
    const todo_index = todos.findIndex((t) => t.id === todo.id)
    todos[todo_index] = {...todos[todo_index], ...saved_todo }
  
    setTodos([...todos])
  }

  const toggleDoneHandler = async ({ id, done }) => {
    const { data: saved_todo } = await put({ url: `/todos/${id}`, body: { done } })
    const todo_index = todos.findIndex((t) => t.id === saved_todo.id)
    todos.splice(todo_index, 1, saved_todo)

    setTodos([...todos])
  }

  const deleteTodoHandler = async (e, todo_id) => {
    e.preventDefault()
    const { data: deleted_todo } = await destroy({ url: `/todos/${todo_id}` })
    const new_todos = todos.filter((t) => t.id !== deleted_todo.id)

    setTodos([...new_todos])
  }

  return <>
    <h2 className="mx-auto max-w-3xl px-6 my-8 text-2xl font-bold text-indigo-600 dark:text-indigo-500 flex">
      <i className={`icon-${board.icon}`}></i>
      {board.name}
    </h2>
    <section className="todos">
      {todos.map(todo => <Todo key={todo.id} {...todo} createTodo={createTodoHandler} updateTodo={updateTodoHandler} deleteTodo={deleteTodoHandler} toggleDone={toggleDoneHandler} />)}
    </section>
    <Link href="#" className="todos__plus" onClick={addTodoHandler}>
      <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="options__plus-btn">
        <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path>
      </svg>
    </Link>
  </>
}

export default Todos
