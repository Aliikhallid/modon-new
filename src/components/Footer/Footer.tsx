import { Button } from "../ui/button";
import ItemsContainer from "./ItemContainer";
import SocialIcons from "./Social";

const Footer = () => {
  return (
    <footer className="bg-primary-multiply-color text-white">
      <div className="bg-gray-200 h-fit py-5 gap-5 w-full flex flex-wrap justify-around items-center">
        <h1 className="bold md:text-3xl text-2xl text-slate-400"><span className="text-primary-color">Stay Informed</span> with our <br />latest updates.</h1>
        <div className="newsletter flex justify-center items-center">
          <input type="email" placeholder="Enter your email.." className="md:p-2 p-1 bg-slate-400 placeholder:text-white rounded-tl rounded-bl" />
          <Button className="md:h-10 h-8 rounded-tr rounded-br">Submit</Button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="flex flex-wrap justify-around items-center h-24 text-gray-400 bg-primary-multiply-color text-sm"
      >
        <span className="transition-all duration-500 hover:text-white">© 2023 MODON. All rights reserved.</span>
        <span className="transition-all duration-500 hover:text-white">Terms · Privacy Policy</span>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;