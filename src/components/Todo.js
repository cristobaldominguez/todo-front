import { useState } from 'react'
import { Link } from 'react-router-dom'

function Todo({ id, content, done = false, sort, createTodo, updateTodo, deleteTodo, toggleDone }) {
  const [new_todo, setNewTodo] = useState({ id, content, done, sort })

  const contentHandleKeyUp = (e) => {
    setNewTodo({ ...new_todo, content: e.target.innerHTML })
  }

  const handleBlur = () => {
    if (!new_todo.id) return createTodo(new_todo)

    updateTodo(new_todo)
  }

  const onToggleDone = (e) => {
    e.preventDefault()
    const response = { ...new_todo, done: !new_todo.done }

    setNewTodo(response)
    toggleDone(response)
  }

  const styles = ['text-gray-700 dark:text-white', done && 'line-through', 'w-100'].join(' ')

  return <li data-sort={sort} data-todo={id} className="todos__todo">
  <div className="inline-flex items-center space-x-2">
    <Link onClick={onToggleDone} href="#"><i className={done ? 'text-gray-700 dark:text-white icon-checked-checkbox' : 'dark:text-white icon-not-checked-o'}></i></Link>
    <div className={styles} contentEditable="true" suppressContentEditableWarning={true} onKeyUp={contentHandleKeyUp} onBlur={handleBlur}>{ content }</div>
  </div>
  <Link href="#" onClick={e => deleteTodo(e, id)}>
    <i className="text-gray-700 dark:text-gray-400 icon-trash-can"></i>
  </Link>
</li>
}

export default Todo
