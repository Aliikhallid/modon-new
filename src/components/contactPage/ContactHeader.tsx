import { Button } from "../ui/button"

const ContactHeader = () => {
  return (
    <div className="contact-page w-full flex flex-col justify-center items-center">
       <div className="contact0 h-1/5 w-full bg-primary-color"></div>
      <div className="cont-cont h-screen w-full flex">
      <div className="contact1 h-full w-1/2"></div>
      <div className="contact2 h-full w-1/2 bg-primary-color flex flex-col justify-center items-center regular text-white">
        <h1 className="regular text-6xl contact-header text-white">Contact Modon</h1>
        <form action="" className="w-full flex flex-col justify-center items-center">
          <div className="input-con w-full flex flex-col justify-center items-center m-3">
          <label htmlFor="name" className="text-xl m-1">Name</label>
          <input type="text" className="h-10 w-2/3 bg-slate-200 rounded text-primary-color regular text-xl" />
          </div>
          <div className="input-con w-full flex flex-col justify-center items-center m-3">
          <label htmlFor="e-mail" className="text-xl m-1">E-Mail</label>
          <input type="text" className="h-10 w-2/3 bg-slate-200 rounded text-primary-color regular text-xl" />
          </div>
          <div className="input-con w-full flex justify-center items-center m-3">
            <div className="flex flex-col w-full justify-center items-center">
          <label htmlFor="e-mail" className="text-xl m-1">Subject</label>
          <input type="text" className="h-10 w-1/2 bg-slate-200 rounded text-primary-color regular text-xl" />
            </div>
            <div className="flex flex-col w-full justify-center items-center">
          <label htmlFor="e-mail" className="text-xl m-1">Phone</label>
          <input type="text" className="h-10 w-1/2 bg-slate-200 rounded text-primary-color regular text-xl" />
            </div>
          </div>
          <div className="input-con w-full flex flex-col justify-center items-center m-3">
          <label htmlFor="name" className="text-xl m-1">Message</label>
          <input type="text" className="h-40 w-3/4 bg-slate-200 rounded text-primary-color regular text-xl" />
          </div>
         <Button className="regular bg-white text-primary-color w-3/4 text-xl m-2 rounded hover:bg-transparent hover:text-white hover:border hover:border-white">Submit</Button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default ContactHeader