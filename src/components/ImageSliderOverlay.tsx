import { useEffect } from "react";
import ImageSlider from "./ImageSlider";

interface ImageSliderOverlayProps {
  imgUrls: string[];
  className?: string;
  selectedImage?: number;
  setSelectedImageIndex: React.Dispatch<React.SetStateAction<number | null>>;
}
export default function ImageSliderOverlay({
  imgUrls,
  selectedImage = 0,
  setSelectedImageIndex,
}: ImageSliderOverlayProps) {
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) {
      body.style.overflow = "hidden";
    }

    return () => {
      if (body) {
        body.style.overflow = "auto";
      }
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (event.target === event.currentTarget)
         setSelectedImageIndex(null);
  };
  return (
    <div
      onClick={handleClick}
      className="absolute top-0 left-0 w-screen h-screen flex bg-black bg-opacity-80 justify-center items-center"
    >
      <ImageSlider imgUrls={imgUrls} selectedImage={selectedImage} />
    </div>
  );
}
