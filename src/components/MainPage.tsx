import Header from './sections/Header'
import ModonProps from './sections/ModonProps'
import ModonSlider from './sections/ModonSlider'
import LastPage from './sections/LastPage'
import Footer from './sections/Footer'
import SecondPage from './sections/SecondPage'
const MainPage = () => {
  return (
    <>
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