import React, { useLayoutEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopGallery from './DesktopGallery';
import MobileGallery from './MobileGallery';

const hasWindow = () => {
  return typeof window !== 'undefined';
};

export default function Gallery() {
  if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
  }
  const [isMobile, setIsMobile] = useState(false);
  const mobileDevice = useMediaQuery({ maxWidth: 999 });

  useLayoutEffect(() => {
    return mobileDevice && hasWindow ? setIsMobile(true) : setIsMobile(false);
  }, [mobileDevice]);

  return <>{isMobile ? <MobileGallery /> : <DesktopGallery />}</>;
}
