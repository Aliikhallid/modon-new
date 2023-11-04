import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useTranslation } from "react-i18next";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
const Enquire = ({addNow = false, v = "outline", enqq = false}) => {
  let enq = '';
  if(enqq) {
    enq = 'w-full'
  } else {
    enq = ''
  }
  const { t } = useTranslation();
  return (
    <div>
      <Dialog>
          <DialogTrigger asChild>
            {addNow ? <Button className={enq} variant={v}>{t("enquire-now")}</Button> : <Button className={enq} variant={v}>{t("enquire_string")}</Button>}
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>GET IN TOUCH</DialogTitle>
            </DialogHeader>
            <form className="flex flex-col justify-start gap-5 py-4 light">
              <div className="flex flex-col justify-start gap-2">
                <Label htmlFor="fullname">FULL NAME</Label>
                <Input id="fullname" placeholder="Enter Full Name" required />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <Label htmlFor="email">EMAIL ADDRESS</Label>
                <Input id="fullname" placeholder="Enter Your Email" required />
              </div>
              <div className="flex flex-col justify-start gap-2">
                <Label htmlFor="email">PHONE NUMBER</Label>
                <div className="grid grid-cols-3 gap-4">
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Code" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+20">+20</SelectItem>
                      <SelectItem value="+971">+971</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="phonenumber"
                    placeholder="Enter Your Phone Number"
                    required
                    className="col-span-2"
                  />
                </div>

              </div>
              <div className="flex flex-col justify-start gap-2">
                <Label htmlFor="msg">YOUR MESSAGE</Label>
                <Textarea id="msg" placeholder="Enter Your message" />
              </div>
              <div className="flex justify-start gap-2">
                  <Checkbox value=""/>
                <Label htmlFor="email">Keep me updated on news and offers.</Label>
              </div>
              <Button type="submit" className="w-full">SUBMIT</Button>

            </form>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default Enquire