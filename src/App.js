import './App.css';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './Source/Router/AllRoutes';
import Navbar from './Source/Components/Navbar';
import Ads from './Source/Components/Ads';
import store from './Source/Redux/Store';

function App() {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
    <Provider store={store} >
        <Navbar />
      <div className='App' style={{height:'100%'}}  >
        <AllRoutes />
        <Ads />
      </div>
    </Provider>
      </BrowserRouter>
    
  );
}

export default App;
