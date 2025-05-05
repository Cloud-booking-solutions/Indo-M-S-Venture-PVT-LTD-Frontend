
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-white py-4">
      <div className="container mx-auto flex justify-center">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </header>
  );
};

export default Header;
