
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import TopHeader from "./Header/TopHeader";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

const Layout = () => {
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
