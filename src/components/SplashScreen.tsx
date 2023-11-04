import React, { useEffect } from 'react';
import GIF from '../assets/Bayti-logo.webp';
import anime from 'animejs';

export default function SplashScreen() {
    const animate = () => {
        const loader = anime.timeline({
        })
        loader.add({
            targets: "#logo",
            delay: 0,
            scale: 1,
            duration: 800,
            easing: "easeInOutExpo"
        }).add({
            targets: "#logo",
            delay: 0,
            scale: 1.25,
            duration: 800,
            easing: "easeInOutExpo"
        }).add({
            targets: "#logo",
            delay: 0,
            scale: 1,
            duration: 800,
            easing: "easeInOutExpo"
        }).add({
            targets: "#logo",
            delay: 0,
            scale: 1.25,
            duration: 800,
            easing: "easeInOutExpo"
        })
        
    }

  useEffect(() => {
    console.log("Here")
    animate(); // Start the animation when the component mounts
  }, []);

  return (
    <div className='w-full h-full bg-white flex flex-col justify-center gap-0 items-center fixed'>
      <img id="logo" src={GIF} alt="Logo" />
    </div>
  )
}
