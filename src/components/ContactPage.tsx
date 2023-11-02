import NavBar from "./NavBar"
import Footer from "./sections/Footer"
import ContactHeader from "./contactPage/ContactHeader"
import ContactMain from "./contactPage/ContactMain"

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <ContactHeader />
      <ContactMain />
      <Footer />
    </div>
  )
}

export default ContactPage