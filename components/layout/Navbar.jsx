import React, { useLayoutEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const hasWindow = () => {
  return typeof window !== 'undefined';
};

export default function Navbar() {
  if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
  }
  const [isMobile, setIsMobile] = useState(false);
  const mobileDevice = useMediaQuery({ maxWidth: 999 });

  useLayoutEffect(() => {
    return mobileDevice && hasWindow ? setIsMobile(true) : setIsMobile(false);
  }, [mobileDevice]);

  return <>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</>;
}
