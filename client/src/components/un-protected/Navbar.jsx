import { Link } from "react-router-dom";
import { navItems } from "../../assets/data";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-5">
      {navItems.map((navItem, index) => (
        <Link key={index} className="text-[17px] text-sans" to={navItem.path}>
          {navItem.content}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
