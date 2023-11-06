import './App.css'
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage.tsx'
import BurujProject from './components/projectPage/BurujProject.tsx'
import NewsPage from './components/NewsPage.tsx'
import ContactPage from './components/ContactPage.tsx'
import CareersPage from './components/CareersPage.tsx'
import ConstructionUpdates from './components/ConstructionUpdates.tsx'
import BurujUpdates from './components/constructionPage/BurujUpdates.tsx'
import FutureUpdates from './components/constructionPage/FutureUpdates.tsx'
import LavidaUpdates from './components/constructionPage/LavidaUpdates.tsx'
import MadinatyUpdates from './components/constructionPage/MadinatyUpdates.tsx'
import BaytiUpdates from './components/constructionPage/BaytiUpdates.tsx'
import CommercialPage from './components/CommercialPage.tsx'
import BaytiMall from './components/commercialPage/BaytiMall.tsx'
import AboutPage from './components/AboutPage.tsx'
import LavidaProject from './components/projectPage/LavidaProject.tsx'
import BaytiProject from './components/projectPage/BaytiProject.tsx'
import MadinatyProject from './components/projectPage/MadinatyProject.tsx'
import FutureProject from './components/projectPage/FutureProject.tsx'
import HadeerTowers from './components/projectPage/HadeerTowers.tsx'
import SorouhTowers from './components/projectPage/SorouhTowers.tsx'
import ImageGallery from './components/ImageGallery.tsx'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/buruj' element={<BurujProject />}/>
      <Route path='/lavida' element={<LavidaProject />}/>
      <Route path='/bayti' element={<BaytiProject />}/>
      <Route path='/madinaty' element={<MadinatyProject />}/>
      <Route path='/future-city' element={<FutureProject />}/>
      <Route path='/hadeer-towers' element={<HadeerTowers />}/>
      <Route path='/sorouh-towers' element={<SorouhTowers />}/>
      <Route path='/news' element={<NewsPage />}/>
      <Route path='/contact' element={<ContactPage />}/>
      <Route path='/careers' element={<CareersPage />}/>
      <Route path='/construction' element={<ConstructionUpdates />}/>
      <Route path='/buruj-updates' element={<BurujUpdates />}/>
      <Route path='/future-updates' element={<FutureUpdates />}/>
      <Route path='/lavida-updates' element={<LavidaUpdates />}/>
      <Route path='/madinaty-updates' element={<MadinatyUpdates />}/>
      <Route path='/bayti-updates' element={<BaytiUpdates />}/>
      <Route path='/commercial' element={<CommercialPage />}/>
      <Route path='/bayti-mall' element={<BaytiMall />}/>
      <Route path='/about-us' element={<AboutPage />}/>
      <Route path='/image-gallery' element={<ImageGallery />}/>

    </Routes>
     {/* <Slideshow /> */}
    </>
  )
}

export default App
