import { useEffect } from 'react'

import useNotification from '../hooks/useNotification'
import Notification from './Notification'

function Notifications() {
  const { notifications, setNotifications } = useNotification()

  useEffect(() => {
    setNotifications([
      { title: 'Bienvenido!', content: 'Por favor siéntate como en tu casa', icon: 'super-mario' }
    ])

    const timer1 = setTimeout(() => {
      setNotifications([
        { title: 'En Horabuena!', content: 'Agarra una cerveza, acomódate en el sillón!', icon: 'super-mario' }
      ])
    }, 2000)

    const timer2 = setTimeout(() => {
      setNotifications([
        { title: 'Bemvindo!', content: 'Y que empiece la función!', icon: 'super-mario' }
      ])
    }, 4500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
    // eslint-disable-next-line
  }, [])

  return <div className='fixed right-1/4 z-10'>
    {notifications && notifications.map((notification) => <Notification key={notification.id} {...notification} />)}
  </div>
}

export default Notifications
