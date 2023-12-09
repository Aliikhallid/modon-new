import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import './i18n.tsx';
import { BrowserRouter } from 'react-router-dom';
import SplashScreen from './components/SplashScreen.tsx';
// import Lenis from '@studio-freight/lenis'


function RootComponent() {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowApp(true);
    }, 3000); // 3 seconds
  }, []);
  useEffect(() => {
    const cursorDot = document.querySelectorAll<HTMLElement>('.cursor-dot')[0];
    const cursorOutline = document.querySelector('.cursor-outline');
    window.addEventListener('mousemove', function(e) {
     const posX = e.clientX;
     const posY = e.clientY;
     const targetElement = e.target as Element;
     const isHover = targetElement!.tagName.toLowerCase() === 'a' ||targetElement!.tagName.toLowerCase() === 'button' || targetElement!.tagName.toLowerCase().includes('select')|| targetElement!.tagName.toLowerCase().includes('link') || targetElement!.tagName.toLowerCase().includes('nav')||targetElement!.tagName.toLowerCase().includes('input')||targetElement!.tagName.toLowerCase().includes('menu') ||targetElement!.tagName.toLowerCase().includes('checkbox')|| targetElement!.classList.contains("clickable")|| targetElement!.classList.contains("cursor-pointer");
     if (isHover) {
      cursorOutline!.classList.add("cursor-hover")
    } else {
      cursorOutline!.classList.remove("cursor-hover")

    }
     cursorDot.style.left = `${posX}px`;
     cursorDot.style.top = `${posY}px`;
    
    cursorOutline?.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, {duration: 1000, fill: "forwards", });
    })
  
  })

  return showApp ? (
    <App />
  ) : (
    <SplashScreen />
  );
}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<SplashScreen />}>
        <RootComponent />
        <div className="cursor-dot z-50"></div>
        <div className="cursor-outline z-50">
        </div>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
