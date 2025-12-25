import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

interface ScrollPositions {
  [pathname: string]: number;
}

const scrollPositions: ScrollPositions = {};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType(); // "POP" = back/forward
  const isInitialRender = useRef(false);

  useEffect(() => {
    if (!isInitialRender.current) {
      // Skip initial render
      isInitialRender.current = true;
      return;
    }

    if (navigationType === "POP") {
      // Back/forward navigation: restore previous scroll
      window.scrollTo({
        top: scrollPositions[pathname] || 0,
        behavior: "auto", // instant scroll
      });
    } else {
      // Normal navigation: scroll to top smoothly
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }

    // Save scroll position when leaving this route
    return () => {
      scrollPositions[pathname] = window.scrollY;
    };
  }, [pathname, navigationType]);

  return null;
};

export default ScrollToTop;
