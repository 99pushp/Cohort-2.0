import { RecoilRoot, useRecoilValue } from 'recoil';
import { notificationsAtom, totalNotificationsSelector } from './atom';

function App() {
  const notificationCount = useRecoilValue(notificationsAtom);
  const totalNotifications = useRecoilValue(totalNotificationsSelector);

  return (
    <RecoilRoot>
      <button>Home</button>

      <button>My network ({notificationCount && notificationCount.network >= 99 ? "99+" : notificationCount && notificationCount.network })</button>
      <button>Jobs ({notificationCount && notificationCount.jobs >= 99 ? "99+" : notificationCount && notificationCount.jobs})</button>
      <button>Messaging ({notificationCount && notificationCount.messaging >= 99 ? "99+" : notificationCount && notificationCount.messaging})</button>
      <button>Notifications ({notificationCount && notificationCount.notifications >= 99 ? "99+" : notificationCount && notificationCount.notifications})</button>

      <button>Me ({totalNotifications})</button>
      </RecoilRoot>
  );
}

export default App;
