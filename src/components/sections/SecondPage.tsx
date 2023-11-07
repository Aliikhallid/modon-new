import { Button } from "../ui/button"
import { Link } from "react-router-dom"
const SecondPage = () => {
  return (
    <div className="w-full h-fit pt-16 bg-white text-black flex flex-wrap justify-center light">
      <div className="link-cont m-5 flex flex-col justify-center items-center animate-fade-up animate-duration-1000 animate-delay-500 ">
        <div className="link-img"></div>
        <h1 className="regular text-center">Resedential Projects</h1>
        <p className="w-3/4 m-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, animi.</p>
       <Link to='/construction'><Button className="bg-primary-color text-white hover:text-primary-color">See More</Button></Link>
      </div>
      <div className="link-cont m-5 flex flex-col justify-center items-center animate-fade-up animate-duration-1000 animate-delay-500 ">
        <div className="link-img"></div>
        <h1 className="regular text-center">Commercial Projects</h1>
        <p className="w-3/4 m-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, animi.</p>
        <Link to='/commercial'><Button className="bg-primary-color text-white hover:text-primary-color">See More</Button></Link>
      </div>
      <div className="link-cont m-5 flex flex-col justify-center items-center animate-fade-up animate-duration-1000 animate-delay-500 ">
        <div className="link-img"></div>
        <h1 className="regular text-center">Current Offers</h1>
        <p className="w-3/4 m-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, animi.</p>
        <Button className="bg-primary-color text-white hover:text-primary-color">See More</Button>
      </div>
      </div>
  )
}

export default SecondPage