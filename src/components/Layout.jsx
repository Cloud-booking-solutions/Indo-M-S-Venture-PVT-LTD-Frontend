import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header/Header";
import TopHeader from "./Header/TopHeader";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
  
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <TopHeader />
      <Header />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
