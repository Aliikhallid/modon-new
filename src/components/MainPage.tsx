import Header from './sections/Header'
import ModonProps from './sections/ModonProps'
import ModonSlider from './sections/ModonSlider'
import LastPage from './sections/LastPage'
import Footer from './sections/Footer'
import SecondPage from './sections/SecondPage'
import { useLayoutEffect } from 'react'
import ImageSlider from './ImageSlider'
const MainPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <>
         <div className=' relative  h-screen flex items-center regular mt-10'>
    <ImageSlider imgUrls={["src/assets/ConstructionUpdates/Bayti/2018/July/0.webp","src/assets/ConstructionUpdates/Bayti/2018/July/1.webp","src/assets/ConstructionUpdates/Bayti/2018/July/2.webp"]}/>

    </div>

     <Header />
     <SecondPage />
     <ModonProps />
     <ModonSlider />
     <LastPage />
     <Footer />
    </>
  )
}

export default MainPage