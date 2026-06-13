import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GATracker() {
  const location = useLocation();

  useEffect(() => {
    if ((window as any).gtag) {
      (window as any).gtag("config", "G-4GRR3BXB4C", {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);

  return null;
}