import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signin from './Signin'
import Upload from './Upload'
import Uploaded from './Uploaded'
import Outlett from './Outlett'
import Dashboard from './Dashboard'




function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}></Route>
        <Route path='/upload' element={<Upload/>}></Route>
        <Route path='/uploaded' element={<Uploaded/>}></Route>
        <Route path='/layout' element={<Outlett/>}>
        <Route index element={<Dashboard/>} />
        <Route path="upload" element={<Upload/>} />
        <Route path='upload/uploaded' element={<Uploaded/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
  
  )
}

export default App
