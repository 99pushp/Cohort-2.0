//defining a atom similar to usestate
//defining a state variable 
import {atom} from "recoil"

export const countAtom = atom({
    key:"countAtom",
    default: 0
});