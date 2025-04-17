// pages/_app.js
import '@/css/LandingPage.css';  // Move the global CSS import here
     // Add any other global styles
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
