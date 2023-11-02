import { EnvelopeOpenIcon, MobileIcon, SewingPinFilledIcon } from "@radix-ui/react-icons"
import NavBar from "./NavBar"
import { Button } from "./ui/button"

const ContactPage = () => {
  return (
    <div className="contact-page w-full flex flex-col justify-center items-center">
      <NavBar />
      <div className="contact0 h-1/4 w-full bg-slate-400"></div>
      <div className="cont-cont h-screen w-full flex">
      <div className="contact1 h-full w-1/2"></div>
      <div className="contact2 h-full w-1/2 bg-slate-400 flex flex-col justify-center items-center regular text-black">
        <h1 className="regular text-6xl contact-header">Contact Modon</h1>
        <form action="" className="w-full flex flex-col justify-center items-center">
          <div className="input-con w-full flex flex-col justify-center items-center m-3">
          <label htmlFor="name" className="text-xl mx-2">Name</label>
          <input type="text" className="h-10 w-2/3 bg-slate-200 rounded-full" />
          </div>
          <div className="input-con w-full flex flex-col justify-center items-center m-3">
          <label htmlFor="e-mail" className="text-xl mx-2">E-Mail</label>
          <input type="text" className="h-10 w-2/3 bg-slate-200 rounded-full" />
          </div>
          <div className="input-con w-full flex justify-center items-center m-3">
            <div className="flex flex-col w-full justify-center items-center">
          <label htmlFor="e-mail" className="text-xl mx-2">Subject</label>
          <input type="text" className="h-10 w-1/2 bg-slate-200 rounded-full" />
            </div>
            <div className="flex flex-col w-full justify-center items-center">
          <label htmlFor="e-mail" className="text-xl mx-2">Phone</label>
          <input type="text" className="h-10 w-1/2 bg-slate-200 rounded-full" />
            </div>
          </div>
          <div className="input-con w-full flex flex-col justify-center items-center m-3">
          <label htmlFor="name" className="text-xl mx-2">Message</label>
          <input type="text" className="h-40 w-3/4 bg-slate-200 rounded-full" />
          </div>
         <Button className="regular bg-[#1e162e] text-white w-3/4 text-xl m-2 rounded">Submit</Button>
        </form>
      </div>
      </div>
      <div className="w-full flex">
        <div className="map w-1/2">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22738.800608238977!2d44.25978260745961!3d33.26440190239908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1559d764b9df63e3%3A0x42b43a07bb92d281!2sBuruj%20Residential%20Project!5e0!3m2!1sen!2seg!4v1698885424232!5m2!1sen!2seg" width="674.5" height="400" className="border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="map2 w-1/2 bg-slate-400 text-black flex flex-col gap-5 justify-center items-center">
          <div className="map-element text-center flex flex-col justify-center items-center">
            <SewingPinFilledIcon color="black" height={20} width={20} />
          <h1 className="text-3xl regular">Our Location</h1>
          <p className="light">Al-Maamoun. Al Nisour Square,
Near to Baghdad Tower, Iraq</p>
          </div>
          <div className="map-element text-center flex flex-col justify-center items-center">
            <MobileIcon color="black" height={20} width={20} />
          <h1 className="text-3xl regular">Call Support</h1>
          <p className="light">6001</p>
          <p className="light">0770 0300 004</p>
          </div>
          <div className="map-element text-center flex flex-col justify-center items-center">
          <EnvelopeOpenIcon color="black" height={20} width={20} />
          <h1 className="text-3xl regular">E-Mail Us</h1>
          <p className="light">Info@Modoniq.com</p>
          <p className="light">Agents@Modoniq.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage