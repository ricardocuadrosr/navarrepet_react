import React, { useEffect, useState } from 'react'

const LandbotComponent = () => {
    const [myLandbot, setMyLandbot] = useState(null);

    const initLandbot = () => {
        if (!myLandbot) {
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.async = true;
          script.addEventListener('load', () => {
            setMyLandbot(
              new window.Landbot.Popup({
                configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2535065-A7R7IGBC75T9HC4F/index.json',
              })
            );
          });
          script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
          const firstScript = document.getElementsByTagName('script')[0];
          firstScript.parentNode.insertBefore(script, firstScript);
        }
      };
    
      useEffect(() => {
        const handleMouseOver = () => initLandbot();
        const handleTouchStart = () => initLandbot();
    
        window.addEventListener('mouseover', handleMouseOver, { once: true });
        window.addEventListener('touchstart', handleTouchStart, { once: true });
    
        // Cleanup event listeners on component unmount
        return () => {
          window.removeEventListener('mouseover', handleMouseOver);
          window.removeEventListener('touchstart', handleTouchStart);
        };
      }, [myLandbot]);
    
      return null;
}

export default LandbotComponent
