import './App.css'
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage.tsx'
import ProjectPage from './components/ProjectPage.tsx'
import NewsPage from './components/NewsPage.tsx'
import ContactPage from './components/ContactPage.tsx'
import CareersPage from './components/CareersPage.tsx'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/project' element={<ProjectPage />}/>
      <Route path='/news' element={<NewsPage />}/>
      <Route path='/contact' element={<ContactPage />}/>
      <Route path='/careers' element={<CareersPage />}/>
    </Routes>
     {/* <Slideshow /> */}
    </>
  )
}

export default App
