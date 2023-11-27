import { useEffect } from "react";
import ImageSlider from "./ImageSlider";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface ImageSliderOverlayProps {
  imgUrls: string[];
  className?: string;
  selectedImage?: number;
  imgText?: string[];
  setSelectedImageIndex: React.Dispatch<React.SetStateAction<number | null>>;
}
export default function ImageSliderOverlay({
  imgUrls,
  selectedImage = 0,
  setSelectedImageIndex,
  imgText=[""]
}: ImageSliderOverlayProps) {
  const nav = document.getElementById("nav");

  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "hidden";
    }

    if (nav) {
      nav.style.display = "none";
      console.log("hi")
    }

    return () => {
      if (body) {
        body.style.overflow = "auto";
      }
    };


  }, []);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (event.target === event.currentTarget){
         setSelectedImageIndex(null);
        if(nav)
         nav.style.display = "flex";
    }
  };
  return (
    <div
      onClick={handleClick}
      className="fixed top-0 left-0 w-full h-screen flex bg-black bg-opacity-80 justify-center items-center"
    >
      <ImageSlider imgUrls={imgUrls} imgOverText={imgText} selectedImage={selectedImage} />
      <Button
      variant="ghost"
      size="icon"
        className="absolute top-4 right-4"
        onClick={(event) => {
          event.stopPropagation();
          setSelectedImageIndex(null); 
          if (nav) nav.style.display = "flex";
        }}
      >
        <X size={24} />
      </Button>

    </div>
  );
}
