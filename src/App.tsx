import './App.css'
import {Routes, Route} from 'react-router-dom'
import Shadcn from './components/Shadcn.tsx'
import MainPage from './components/MainPage.tsx'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/shadcn' element={<Shadcn />}/>
    </Routes>
     {/* <Slideshow /> */}
    </>
  )
}

export default App
