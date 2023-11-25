import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Dot } from "lucide-react";

interface ImageSliderProps {
  imgUrls: string[];
  imgOverText?: string[];
  className?: string;
  selectedImage?:number
}
export default function ImageSlider({
  imgUrls,
  imgOverText = [""],
  className = "",
  selectedImage = 0
}: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(selectedImage);

  function prevImg() {
    setImageIndex((i) => {
      if (i === 0) return imgUrls.length - 1;
      return i - 1;
    });
  }

  function nextImg() {
    setImageIndex((i) => {
      if (i === imgUrls.length - 1) return 0;
      return i + 1;
    });
  }

  function gotoImage(index: number) {
    setImageIndex(index);
  }

  return (
    <div
      className={`${className} max-w-[1000px] h-[600px] w-full m-auto py-16 px-4 relative group`}
    >
      <div
        style={{ backgroundImage: `url(${imgUrls[imageIndex]})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        <div className="flex flex-col items-start justify-end rounded-md z-20 regular text-primary h-full">
{        imgOverText[0]!=="" &&  <div className="bg-white p-5 w-fit m-4 rounded">
            {imgOverText[imageIndex]}
          </div>}
        </div>
      </div>
      <div className="hidden  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowBigLeft className="clickable" onClick={prevImg} size={30} />
      </div>
      <div className="hidden  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowBigRight className="clickable" onClick={nextImg} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {(() => {
          const dots = [];
          for (let slideIndex = 0; slideIndex < imgUrls.length; slideIndex++) {
            dots.push(
              <div
                key={slideIndex}
                onClick={() => gotoImage(slideIndex)}
                className="text-2xl cursor-pointer clickable"
              >
                <Dot
                className="clickable"
                  size={44}
                  color={`${slideIndex === imageIndex ? "#06316c" : "#d3d3d3"}`}
                  strokeWidth={3}
                />
              </div>
            );
          }
          return dots;
        })()}
      </div>
    </div>
  );
}
