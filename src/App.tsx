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
import Nargis from './components/projectPage/Nargis.tsx'
import ViolaM from './components/projectPage/ViolaM.tsx'
import MadinatyApartments from './components/projectPage/MadinatyApartments.tsx'


function App() {
 
  return (
    <>
    {/* <HashRouter> */}
    <Routes>
      <Route path='/modon-new/' element={<MainPage />}/>
      <Route path='/modon-new/home/buruj' element={<BurujProject />}/>
      <Route path='/modon-new/buruj/hadeer-towers' element={<HadeerTowers />}/>
      <Route path='/modon-new/buruj/sorouh-towers' element={<SorouhTowers />}/>
      <Route path='/modon-new/lavida' element={<LavidaProject />}/>
      <Route path='/modon-new/bayti' element={<BaytiProject />}/>
      <Route path='/modon-new/bayti/jory' element={<Jory />}/>
      <Route path='/modon-new/bayti/lotus' element={<Lotus />}/>
      <Route path='/modon-new/bayti/narjis' element={<Narjis />}/>
      <Route path='/modon-new/bayti/viola' element={<Viola />}/>
      <Route path='/modon-new/bayti/yasmin' element={<Yasmin />}/>
      <Route path='/modon-new/madinaty' element={<MadinatyProject />}/>
      <Route path='/modon-new/madinaty/cadi' element={<Cadi />}/>
      <Route path='/modon-new/madinaty/gardenia' element={<Gardenia />}/>
      <Route path='/modon-new/madinaty/nargis' element={<Nargis />}/>
      <Route path='/modon-new/madinaty/viola' element={<ViolaM />}/>
      <Route path='/modon-new/madinaty/apartments' element={<MadinatyApartments />}/>
      <Route path='/modon-new/future-city' element={<FutureProject />}/>
      <Route path='/modon-new/news' element={<NewsPage />}/>
      <Route path='/modon-new/contact' element={<ContactPage />}/>
      <Route path='/modon-new/careers' element={<CareersPage />}/>
      <Route path='/modon-new/construction' element={<ConstructionUpdates />}/>
      <Route path='/modon-new/buruj-updates' element={<BurujUpdates />}/>
      <Route path='/modon-new/future-updates' element={<FutureUpdates />}/>
      <Route path='/modon-new/lavida-updates' element={<LavidaUpdates />}/>
      <Route path='/modon-new/madinaty-updates' element={<MadinatyUpdates />}/>
      <Route path='/modon-new/bayti-updates' element={<BaytiUpdates />}/>
      <Route path='/modon-new/commercial' element={<CommercialPage />}/>
      <Route path='/modon-new/bayti-mall' element={<BaytiMall />}/>
      <Route path='/modon-new/about-us' element={<AboutPage />}/>
      <Route path='/modon-new/image-gallery' element={<ImageGallery />}/>
      <Route path='/modon-new/video-gallery' element={<VideoGallery />}/>

    </Routes>
    {/* </HashRouter> */}
    </>
  )
}

export default App
