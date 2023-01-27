import { useEffect } from 'react'

function Todo({ content, done = false, sort }) {
  const styles = ['text-gray-700 dark:text-white', done && 'line-through'].join(' ')

  useEffect(() => {
    // console.log({ content, done, sort })
  }, [content, done, sort])

  return <li id="task" data-sort={sort} className="flex justify-between items-center border-b border-slate-200 dark:border-b-slate-700 last:border-b-0 py-3 border-l-4 border-l-transparent">
  <div className="inline-flex items-center space-x-2">
    <div><i className={done ? 'text-gray-700 dark:text-white icon-checked-checkbox' : 'dark:text-white icon-not-checked-o'}></i></div>
    <div className={styles}>{ content }</div>
  </div>
  <div>
    <i className="text-gray-700 dark:text-gray-400 icon-trash-can"></i>
  </div>
</li>
}

export default Todo
