import { Button } from "../ui/button"
import modonLogo from '../../assets/Modon-White.png'
import { Label } from "@radix-ui/react-label"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select"
import { Textarea } from "../ui/textarea"
import { Checkbox } from "@radix-ui/react-checkbox"

const ContactHeader = () => {
  return (
    <div className="contact-page w-full flex flex-col justify-center items-center">
       <div className="contact0 h-60 w-full bg-primary-multiply-color flex justify-center items-center">
    <img src={modonLogo} alt="MODON" height={120} width={120}/>
       </div>
      <div className="cont-cont h-screen w-full flex">
      <div className="contact1 h-full w-1/2"></div>
      <div className="contact2 h-full w-1/2 bg-primary-multiply-color flex flex-col justify-center items-center regular text-white">
        <h1 className="regular text-6xl flex contact-header text-white mb-3">GET IN TOUCH</h1>
        <form className="flex flex-col justify-start gap-5 py-4 light w-3/4">
              <div className="flex flex-col justify-start gap-2">
                <Label htmlFor="fullname" className="regular">FULL NAME</Label>
                <Input id="fullname" className="h-14" placeholder="Enter Full Name" required />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <Label htmlFor="email" className="regular">EMAIL ADDRESS</Label>
                <Input id="fullname" className="h-14" placeholder="Enter Your Email" required />
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
              <div className="flex flex-col justify-start gap-2">
                <Label htmlFor="msg" className="regular">YOUR MESSAGE</Label>
                <Textarea id="msg" className="h-32" placeholder="Enter Your message" />
              </div>
              <div className="flex justify-start gap-2">
                  <Checkbox value=""/>
                <Label htmlFor="email">Keep me updated on news and offers.</Label>
              </div>
              <Button type="submit" className="w-full regular">SUBMIT</Button>

            </form>
      </div>
      </div>
    </div>
  )
}

export default ContactHeader