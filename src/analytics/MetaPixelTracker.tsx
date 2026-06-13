import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MetaPixelTracker() {
  const location = useLocation();

  useEffect(() => {
    if ((window as any).fbq) {
      (window as any).fbq("track", "PageView");
    }
  }, [location.pathname]);

  return null;
}