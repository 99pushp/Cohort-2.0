import { useEffect } from 'react'
import './App.css'
import { useRecoilState, useRecoilValue } from 'recoil'
import { notificationsAtom, totalNotificationsSelector } from './atom'
import axios from 'axios'

function App() {

  const [notificationCount, setNotificationsCount] = useRecoilState(notificationsAtom);
  const totalNotifications = useRecoilValue(totalNotificationsSelector);

  return (
    <>
    
     <button>Home</button>

     <button>My network ({notificationCount.network >=99 ? "99+" :notificationCount.network })</button>
     <button>Jobs ({notificationCount.jobs >=99 ? "99+" :notificationCount.jobs})</button>
     <button>Messaging ({notificationCount.messaging >=99 ? "99+" :notificationCount.messaging})</button>
     <button>Notifications ({notificationCount.notifications >=99 ? "99+" :notificationCount.notifications})</button>

     <button>Me ({totalNotifications})</button>
    </>
  )
}

export default App;
