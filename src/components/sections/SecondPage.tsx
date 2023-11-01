import { Button } from "../ui/button"
import linkLogo from "../../assets/FU-04.jpg"

const SecondPage = () => {
  return (
    <div className="w-full h-screen pt-16 bg-white text-black flex justify-center align-middle light">
      {/* <div className="second-page-link w-1/3 h-1/2">
        <h1 className="regular">Resedential Projects</h1>
        <Button className="bg-teal-700">See More</Button>
      </div>
      <div className="second-page-link w-1/3 h-1/2">
        <h1 className="regular">Commercial Projects</h1>
        <Button className="bg-teal-700">See More</Button>
      </div>
      <div className="second-page-link w-1/3 h-1/2">
        <h1 className="regular">Current Offers</h1>
        <Button className="bg-teal-700">See More</Button>
      </div> */}
      {/* <div className="link-cont h-1/2 w-1/3 flex flex-col justify-center items-center">
        <img src={linkLogo} alt="" />
        <h1 className="regular text-black text-center">Resedential Projects</h1>
        <Button className="bg-teal-700 m-auto hover:text-black">See More</Button>
      </div>
      <div className="link-cont h-1/2 w-1/3 flex flex-col justify-center items-center">
        <img src={linkLogo} alt="" />
        <h1 className="regular text-black text-center">Resedential Projects</h1>
        <Button className="bg-teal-700 m-auto hover:text-black">See More</Button>
      </div> */}
      <div className="link-cont h-3/4 w-1/3 flex flex-col justify-center items-center">
        <div className="link-img"></div>
        <h1 className="regular text-center">Resedential Projects</h1>
        <p className="w-3/4 m-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, animi.</p>
        <Button className="bg-teal-700 text-white hover:text-black">See More</Button>
      </div>
      <div className="link-cont h-3/4 w-1/3 flex flex-col justify-center items-center">
        <div className="link-img"></div>
        <h1 className="regular text-center">Commercial Projects</h1>
        <p className="w-3/4 m-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, animi.</p>
        <Button className="bg-teal-700 text-white hover:text-black">See More</Button>
      </div>
      <div className="link-cont h-3/4 w-1/3 flex flex-col justify-center items-center">
        <div className="link-img"></div>
        <h1 className="regular text-center">Current Offers</h1>
        <p className="w-3/4 m-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, animi.</p>
        <Button className="bg-teal-700 text-white hover:text-black">See More</Button>
      </div>
      </div>
  )
}

export default SecondPage