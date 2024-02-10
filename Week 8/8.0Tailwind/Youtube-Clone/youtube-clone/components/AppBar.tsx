import { Searchbar } from "./Searchbar"

export function Appbar() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding:'0 25px' }}>
            <div pl-30>Youtube Img</div>
            <Searchbar></Searchbar>
            <div pr-30>Sign Up</div>
        </div>
    )
}