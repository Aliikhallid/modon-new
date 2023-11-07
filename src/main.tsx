import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';
import './i18n.tsx';
import { HashRouter } from 'react-router-dom';
import SplashScreen from './components/SplashScreen.tsx';

function RootComponent() {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowApp(true);
    }, 3000); // 3 seconds
  }, []);

  return showApp ? (
    <App />
  ) : (
    <SplashScreen />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<SplashScreen />}>
        <RootComponent />
      </Suspense>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
