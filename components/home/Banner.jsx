import React, { useLayoutEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopBanner from './DesktopBanner';
import MobileBanner from './MobileBanner';

const hasWindow = () => {
  return typeof window !== 'undefined';
};

export default function Banner() {
  if (typeof document === 'undefined') {
    React.useLayoutEffect = React.useEffect;
  }
  const [isMobile, setIsMobile] = useState(false);
  const mobileDevice = useMediaQuery({ maxWidth: 999 });

  useLayoutEffect(() => {
    return mobileDevice && hasWindow ? setIsMobile(true) : setIsMobile(false);
  }, [mobileDevice]);

  return <>{isMobile ? <MobileBanner /> : <DesktopBanner />}</>;
}
