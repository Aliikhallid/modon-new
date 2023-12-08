import NavBar from "./NavBar"
import Footer from './Footer/Footer'
import ContactHeader from "./contactPage/ContactHeader"
// import ContactMain from "./contactPage/ContactMain"
import { useLayoutEffect } from "react"

const ContactPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div>
      <NavBar />
      <ContactHeader />
      {/* <ContactMain /> */}
      <Footer />
    </div>
  )
}

export default ContactPage