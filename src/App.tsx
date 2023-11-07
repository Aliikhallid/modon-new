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
import VideoGallery from './components/VideoGallery.tsx'
import Jory from './components/projectPage/Jory.tsx'
import Lotus from './components/projectPage/Lotus.tsx'
import Narjis from './components/projectPage/Narjis.tsx'
import Viola from './components/projectPage/Viola.tsx'
import Yasmin from './components/projectPage/Yasmin.tsx'
import Cadi from './components/projectPage/Cadi.tsx'
import Gardenia from './components/projectPage/Gardenia.tsx'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />}/>
      <Route path='/buruj' element={<BurujProject />}/>
      <Route path='/buruj/hadeer-towers' element={<HadeerTowers />}/>
      <Route path='/buruj/sorouh-towers' element={<SorouhTowers />}/>
      <Route path='/lavida' element={<LavidaProject />}/>
      <Route path='/bayti' element={<BaytiProject />}/>
      <Route path='/bayti/jory' element={<Jory />}/>
      <Route path='/bayti/lotus' element={<Lotus />}/>
      <Route path='/bayti/narjis' element={<Narjis />}/>
      <Route path='/bayti/viola' element={<Viola />}/>
      <Route path='/bayti/yasmin' element={<Yasmin />}/>
      <Route path='/madinaty' element={<MadinatyProject />}/>
      <Route path='/madinaty/cadi' element={<Cadi />}/>
      <Route path='/madinaty/gardenia' element={<Gardenia />}/>
      <Route path='/future-city' element={<FutureProject />}/>
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
      <Route path='/video-gallery' element={<VideoGallery />}/>

    </Routes>
     {/* <Slideshow /> */}
    </>
  )
}

export default App
