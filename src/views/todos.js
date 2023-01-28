import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Todo from '../components/Todo'
import useFetch from '../hooks/useFetch'
import SectionTitle from '../components/SectionTitle'
import PlusButton from '../components/PlusButton'

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
    setTodos([...todos, { id: 0, content: '', done: false, sort: todos.length }])
  }

  const createTodoHandler = async (todo) => {
    const { data: saved_todo } = await post({ url: `/boards/${board_id}/todos`, body: { ...todo, sort: todos.length } })
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

  const deleteTodoHandler = async (todo_id) => {
    const { data: deleted_todo } = await destroy({ url: `/todos/${todo_id}` })
    const new_todos = todos.filter((t) => t.id !== deleted_todo.id)

    setTodos([...new_todos])
  }

  return <>
    <SectionTitle icon={board.icon}>{board.name}</SectionTitle>
    <section className="todos">
      {todos.map(todo => <Todo key={todo.id} {...todo} createTodo={createTodoHandler} updateTodo={updateTodoHandler} deleteTodo={deleteTodoHandler} toggleDone={toggleDoneHandler} />)}
    </section>
    <PlusButton onClick={addTodoHandler} />
  </>
}

export default Todos
