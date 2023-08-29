import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Hidenavbarfooter = ({ children }) => {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(false);
  useEffect(() => {
    if (location.pathname === "/Sign-in") {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
  }, [location]);
  return <div> {showNavBar && children} </div>;
};
export default Hidenavbarfooter;
