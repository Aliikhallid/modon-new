import './App.css'
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage.tsx'
import ProjectPage from './components/ProjectPage.tsx'
import NewsPage from './components/NewsPage.tsx'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/project' element={<ProjectPage />}/>
      <Route path='/news' element={<NewsPage />}/>
    </Routes>
     {/* <Slideshow /> */}
    </>
  )
}

export default App
