import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './notification.module.css'
import { notification_types as types } from '../notificationTypes'
import useNotification from '../hooks/useNotification'

const Notification = ({ id, type = 'info', title, content, timer = {} }) => {
  const { removeNotification } = useNotification()

  useEffect(() => {
    // console.log(id)
    timer[id] = setTimeout(() => {
      removeNotification(id)
    }, 3500)

    return () => clearTimeout(timer[id])
    // eslint-disable-next-line
  }, [removeNotification])

  const closeNotificationHandler = (e) => {
    e.preventDefault()
    removeNotification(id)
  }

  const notification_type = types[type]
  const notification_classes = `${styles[type]} relative overflow-hidden shadow-lg rounded-lg bg-white dark:bg-gray-800 border-solid border max-w-sm mx-auto m-4 p-4 text-gray-700 dark:text-white dark:border-gray-700 flex flex-row`
  const icon_classes = `icon-${notification_type.icon} ${notification_type.colors.light.text} ${notification_type.colors.dark.text} text-lg`

  return (
    <div className={notification_classes}>
      <div className="pr-3"><i className={icon_classes}></i></div>
      <div className="grow">
        <div className="text-sm pb-2 font-semibold">{title}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400 flex-auto tracking-tight">{content}</div>
      </div>
      <Link href="#" onClick={closeNotificationHandler} className="">
        <svg className="fill-current text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
          <path
            className="heroicon-ui"
            d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
          />
        </svg>
      </Link>
    </div>
  )
}

export default Notification
