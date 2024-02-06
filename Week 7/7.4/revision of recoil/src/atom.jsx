import {atom, selector} from "recoil";

export const notificationsAtom = atom({
    key:"networkAtom",
    default: {
        network: 0,
        jobs: 0,
        notifications: 0,
        messaging:0
    }
});


export const totalNotificationsSelector = selector({
    key: 'allNotifications',
    get:({get})=>{
        return get(notificationsAtom.network)+
        get(notificationsAtom.jobs)+
        get(notificationsAtom.notifications)+
        get(notificationsAtom.messaging);
    }
})
