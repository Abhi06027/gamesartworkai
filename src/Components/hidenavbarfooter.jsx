import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Hidenavbarfooter = ({ children }) => {
  const location = useLocation();
  const [showNavbarFooter, setShowNavBar] = useState(false);
  useEffect(() => {
    const excludedPaths = ["/Sign-in", "/create"];
    setShowNavBar(!excludedPaths.includes(location.pathname));
  }, [location]);
  return (
    <div>
      {showNavbarFooter && <Header />}
      {children}
      {showNavbarFooter && <Footer />}
    </div>
  );
};

export default Hidenavbarfooter;
