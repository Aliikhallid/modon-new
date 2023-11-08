// import { useEffect, useLayoutEffect, useState } from "react";
import Footer from "./sections/Footer";
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
    <div className="bg-primary-multiply-color w-full h-fit flex flex-col justify-center items-center relative">
      <NavBar />
    <h1 className='regular text-5xl relative mt-40'>VIDEO GALLERY</h1>
    <div className="constructs flex">
      <div className="construct1 flex flex-col justify-center items-center m-5">
        <div className="buruj-btns">
         <Button className='m-2 upBtn' onClick={setCorp}>CORPORATE</Button>
         <Button className='m-2 upBtn' onClick={setEv}>EVENTS</Button>
         <Button className='m-2 upBtn' onClick={setPr}>PROJECTS</Button>
         <Button className='m-2 upBtn' onClick={setCu}>CONSTRUCTION UPDATES</Button>
        </div>
         <div className="flex flex-wrap justify-center gap-10 mt-5">
          <div className="flex">
         <iframe src={video} height={300} width={400}></iframe>
          </div>
          <div className="flex">
         <iframe src={video} height={300} width={400}></iframe>
          </div>
          <div className="flex">
         <iframe src={video} height={300} width={400}></iframe>
          </div>
          <div className="flex">
         <iframe src={video} height={300} width={400}></iframe>
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