import { Link } from "react-router-dom";
import { SiVaultwarden } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4 text-white flex justify-around font-[Montserrat] font-extralight text-md sticky top-0 z-20">
      <ul className="flex gap-6 items-center">
        <Link to="/" className="flex items-center gap-2 mr-3">
          <SiVaultwarden style={{ width: "80px", height: "80px" }} />
          <h1 className="text-2xl font-medium">Vaultive</h1>
        </Link>
        <button className="mt-2 relative underline-hover cursor-pointer">
          About
        </button>
        <button className="mt-2 relative underline-hover cursor-pointer">
          How it works
        </button>
        <button className="mt-2 relative underline-hover cursor-pointer">
          FAQ
        </button>
        <Link to="/chat">Chat</Link>
        {/* <li className="mt-2">
          <Link to="/Profile" className="relative underline-hover">
            Profile
          </Link>
        </li> */}
      </ul>
      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/Login" className="relative underline-hover">
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/Register"
            className="border-2 border-purple-800 rounded-3xl px-5 py-2 hover:bg-purple-700"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
