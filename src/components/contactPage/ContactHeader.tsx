import { Button } from "../ui/button"
import { Label } from "@radix-ui/react-label"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"
import { Textarea } from "../ui/textarea"
import { Checkbox } from "@radix-ui/react-checkbox"
import { SewingPinFilledIcon } from "@radix-ui/react-icons"

const ContactHeader = () => {
  return (
    <div className="contact-page w-full h-fit flex flex-col justify-center items-center">
       <div className="contact0 relative h-[90vh] bg-primary-multiply-color w-full flex flex-col justify-center items-center">
    {/* <img src={modonLogo} alt="MODON" height={120} width={120}/> */}
    <h1 className="regular md:text-2xl text-lg">Get in Touch</h1>
    <h1 className="bold text-5xl m-3">Contact Us</h1>
    <p className="light text-center md:text-lg text-sm">Please feel free to get in touch with our Customer support<br /> team for any request or inquiry.</p>
       </div>
      <div className="cont-cont h-fit w-full flex bg-white text-primary-color">
      <div className="contact2 h-[140vh] w-full flex flex-col justify-center items-center regular">
        <h1 className="regular md:text-3xl text-2xl flex contact-header text-primary-color mb-3 z-10">WE'D LOVE TO HEAR FROM YOU</h1>
          <form className="flex flex-col justify-start gap-5 py-4 light w-3/4">
            <div className="flex md:flex-row flex-col justify-start gap-5 py-4 light">
             <div className="flex flex-col justify-start gap-5 md:w-1/2 w-full">
              <div className="flex flex-col justify-start gap-2">
                <Label htmlFor="fullname" className="regular">FULL NAME</Label>
                <Input id="fullname" className="h-14" placeholder="Enter Full Name" required />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <Label htmlFor="email" className="regular">E-MAIL</Label>
                <Input id="email" className="h-14" placeholder="Enter E-Mail" required />
              </div>
              <div className="flex flex-col justify-start gap-2 relative">
                <Label htmlFor="email" className="regular">PHONE NUMBER</Label>
                <div className="grid grid-cols-3 gap-4">
                  <Select required>
                    <SelectTrigger className="border h-14">
                      <SelectValue placeholder="Select Code" />
                    </SelectTrigger>
                    <SelectContent className="relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                      <SelectItem value="+20" className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 bg-white text-primary-color">+20</SelectItem>
                      <SelectItem value="+971" className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 bg-white text-primary-color">+971</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="phonenumber"
                    placeholder="Enter Your Phone Number"
                    required
                    className="col-span-2 h-14"
                  />
                </div>
                </div>
          </div>
          <div className="flex flex-col justify-start gap-5 md:w-1/2 w-full">
          <div className="flex flex-col justify-start gap-2 md:h-full h-40">
                <Label htmlFor="message" className="regular">Message</Label>
                <Textarea id="message" className="h-full" placeholder="Enter Your Message..." required />
              </div>
          </div>
            </div>
            <h1 className="flex justify-center items-center gap-2">
            <Checkbox className="bg-primary-color h-4 w-4" />
            Accept Receiving Emails about Modon News & Offers
            </h1>
              <Button type="submit" className="md:w-1/2 w-full m-auto regular my-5">SUBMIT</Button>
            </form>
            <h1 className="bold text-2xl">Come Visit Us</h1>
            <SewingPinFilledIcon color="#06316c" className="m-3" height={20} width={20} />
            <p className="light md:m-0 m-5 text-center">Al-Maamoun. Al Nisour Square, Near to Baghdad Tower, Iraq</p>
            <p className="light">07700300004</p>
            <div className="h-0.5 w-10 m-5 bg-primary-color"></div>
            <p className="light">info@modoniq.com</p>
            <p className="light">agents@modoniq.com</p>
      </div>
      </div>
    </div>
  )
}

export default ContactHeader