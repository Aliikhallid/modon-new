import  { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight, Dot } from 'lucide-react';

interface ImageSliderProps{
    imgUrls: string[];
    className?:string;
}
export default function ImageSlider({imgUrls, className=''}:ImageSliderProps) {
    const [imageIndex,setImageIndex] = useState(0);

    function prevImg(){
       setImageIndex(i =>{
        if (i === 0) return imgUrls.length-1;
        return i-1;
       }) 
    }

    function nextImg(){
        setImageIndex(i =>{
         if (i === imgUrls.length - 1) return 0;
         return i+1;
        }) 
     }

     function gotoImage(index:number){
        setImageIndex(index);
    } 
     
  return (
<div className={`${className} max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group`}>
      <div
        style={{ backgroundImage: `url(${imgUrls[imageIndex]})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ArrowBigLeft onClick={prevImg} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ArrowBigRight onClick={nextImg} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {imgUrls.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => gotoImage(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <Dot />
          </div>
        ))}
      </div>
    </div>
  )
}
