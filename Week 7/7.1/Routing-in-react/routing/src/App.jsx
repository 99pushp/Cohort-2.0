import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { Messagecomp } from "./pages/messages"
import { Landingcomp } from "./pages/landing"
function App() {
  return (
    <>
    <BrowserRouter>
    <Topbar></Topbar> 
    <Routes>
      <Route path='/Messages' element={<Messagecomp/>} />
      <Route path='/' element={<Landingcomp/>} />
    </Routes>
    </BrowserRouter>
   </>
  )
}
//the use navigate should be inside the BrowserRouter tags
function Topbar(){
  const navigate = useNavigate();
  return(<div>
    <button onClick={()=>{navigate('/Messages')}}>Go to Messages</button>
    <button onClick={()=>{navigate('/')}}>Go to Landing page</button>
  </div>)
}

export default App
