import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import './i18n.tsx';
import { BrowserRouter } from 'react-router-dom';
import SplashScreen from './components/SplashScreen.tsx';

function RootComponent() {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowApp(true);
    }, 3000); // 3 seconds
  }, []);
  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    window.addEventListener('mousemove', function(e) {
     const posX = e.clientX;
     const posY = e.clientY;
     
     cursorDot.style.left = `${posX}px`;
     cursorDot.style.top = `${posY}px`;
    
    //  cursorOutline.style.left = `${posX}px`;
    //  cursorOutline.style.top = `${posY}px`;
    cursorOutline?.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, {duration: 500, fill: "forwards", });
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
        <div className="cursor-outline z-50"></div>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
