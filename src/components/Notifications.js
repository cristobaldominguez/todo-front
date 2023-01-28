import useNotification from '../hooks/useNotification'
import Notification from './Notification'

function Notifications() {
  const { notifications } = useNotification()

  return <div className='fixed right-1/4 z-10'>
    {notifications && notifications.map((notification) => <Notification key={notification.id} {...notification} />)}
  </div>
}

export default Notifications
