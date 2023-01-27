import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import NotificationContext from '../context/NotificationContext'

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  function setNotificationsHandler(new_notifications = []) {
    const notifications_with_id = new_notifications.map(notification => ({id: uuid(), ...notification}))
    setNotifications(prev => ([...notifications_with_id, ...prev ]))
  }

  function removeNotificationsHandler(id) {
    const filtered_notifications = notifications.filter(notification => notification.id !== id)
    setNotifications(filtered_notifications)
  }

  const notification_value = {
    notifications,
    setNotifications: setNotificationsHandler,
    removeNotification: removeNotificationsHandler
  }

  return <NotificationContext.Provider value={notification_value}>
    {children}
  </NotificationContext.Provider>
}

export default NotificationProvider
