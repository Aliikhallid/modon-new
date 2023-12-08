// import { useEffect, useLayoutEffect, useState } from "react";
import Footer from './Footer/Footer';
import { Button } from "./ui/button";
import NavBar from "./NavBar";
import { useState } from "react";

const VideoGallery = () => {
  // const [imagePaths, setImagePaths] = useState<string[]>([]);
//   useLayoutEffect(() => {
//     window.scrollTo(0, 0)
// });
function goBack() {
  window.history.back();
}
const [video, setVideo] = useState("https://www.youtube.com/watch?v=iYM2zFP3Zn0");
const setCorp = () => {
   setVideo("https://www.youtube.com/watch?v=iYM2zFP3Zn0")
}
const setEv = () => {
   setVideo("https://www.youtube.com/watch?v=iv0eQJMYvV4&t=1s")
}
const setPr = () => {
   setVideo("https://www.youtube.com/watch?v=VEYwtjcTg3c")
}
const setCu = () => {
   setVideo("https://www.youtube.com/watch?v=VEYwtjcTg3c")
}

  // useEffect(()=>{
  //   handleButtonClick("BA",20)
  // },[])
  return (
    <div className="bg-white w-full h-fit flex flex-col justify-center items-center relative">
      <NavBar />
      <div className="ob h-40 w-full bg-primary-color"></div>
    <h1 className='regular text-5xl relative mt-20 text-primary-color'>VIDEO GALLERY</h1>
    <div className="constructs flex">
      <div className="construct1 flex flex-col justify-center items-center m-5">
        <div className="buruj-btns">
         <Button className='m-2 upBtn md:w-max w-full' onClick={setCorp}>CORPORATE</Button>
         <Button className='m-2 upBtn md:w-max w-full' onClick={setEv}>EVENTS</Button>
         <Button className='m-2 upBtn md:w-max w-full' onClick={setPr}>PROJECTS</Button>
         <Button className='m-2 upBtn md:w-max w-full' onClick={setCu}>CONSTRUCTION UPDATES</Button>
        </div>
         <div className="flex w-full flex-wrap justify-center items-center gap-10 mt-5">
          <div className="flex">
         <iframe src={video} height={300} className="w-full"></iframe>
          </div>
          <div className="flex">
         <iframe src={video} height={300} className="w-full"></iframe>
          </div>
          <div className="flex">
         <iframe src={video} height={300} className="w-full"></iframe>
          </div>
          <div className="flex">
         <iframe src={video} height={300} className="w-full"></iframe>
          </div>
         </div>
        <Button onClick={goBack} className='hover-black w-40 mt-4 upBtn'>Previous Page</Button>
         </div>
         </div>
         <Footer />
         </div> 
  )
}

export default VideoGallery