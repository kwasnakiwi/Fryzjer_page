import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Jeśli w URL jest hash (np. #b1), nie przewijaj na górę
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]); // Za każdym razem, gdy zmienia się location, strona przewinie się na górę, ale tylko jeśli nie ma hash

  return null;
}

export default ScrollToTop;
