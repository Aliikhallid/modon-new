import './App.css'
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage.tsx'
import ProjectPage from './components/ProjectPage.tsx'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/project' element={<ProjectPage />}/>
    </Routes>
     {/* <Slideshow /> */}
    </>
  )
}

export default App
