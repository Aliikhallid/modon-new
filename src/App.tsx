import './App.css'
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage.tsx'
import ProjectPage from './components/ProjectPage.tsx'
import NewsPage from './components/NewsPage.tsx'
import ContactPage from './components/ContactPage.tsx'
import CareersPage from './components/CareersPage.tsx'
import ConstructionUpdates from './components/ConstructionUpdates.tsx'
import BurujUpdates from './components/constructionPage/BurujUpdates.tsx'
import FutureUpdates from './components/constructionPage/FutureUpdates.tsx'
import LavidaUpdates from './components/constructionPage/LavidaUpdates.tsx'
import MadinatyUpdates from './components/constructionPage/MadinatyUpdates.tsx'
import BaytiUpdates from './components/constructionPage/BaytiUpdates.tsx'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/project' element={<ProjectPage />}/>
      <Route path='/news' element={<NewsPage />}/>
      <Route path='/contact' element={<ContactPage />}/>
      <Route path='/careers' element={<CareersPage />}/>
      <Route path='/construction' element={<ConstructionUpdates />}/>
      <Route path='/buruj-updates' element={<BurujUpdates />}/>
      <Route path='/future-updates' element={<FutureUpdates />}/>
      <Route path='/lavida-updates' element={<LavidaUpdates />}/>
      <Route path='/madinaty-updates' element={<MadinatyUpdates />}/>
      <Route path='/bayti-updates' element={<BaytiUpdates />}/>
    </Routes>
     {/* <Slideshow /> */}
    </>
  )
}

export default App
