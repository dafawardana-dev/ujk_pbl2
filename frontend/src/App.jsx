import  React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DaftarSiswa from './components/DaftarSiswa.jsx'
import TambahData from './components/TambahData.jsx'
import EditData from './components/EditData.jsx'


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<DaftarSiswa/>} />
        <Route path='/tambah' element={<TambahData/>} />
        <Route path='/edit/:id' element={<EditData/>} />
      </Routes>
     </BrowserRouter>
    </>
 
  )
}

export default App
