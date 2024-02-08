import {atom, selector} from "recoil";
import axios from "axios";
export const notificationsAtom = atom({
    key:"networkAtom",
    default: selector({
        key:"networkAtomSelector",
        get: async()=>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
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
