import { Link, useNavigate } from "react-router-dom";
import { SiVaultwarden } from "react-icons/si";
import { AuthContext } from "../Providers/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const { authToken, setAuthToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthToken(null);
    localStorage.removeItem("jwt");
    localStorage.removeItem("decodedJwt");
  };

  const handleAbout = () => {
    navigate("/");

    setTimeout(() => {
      window.scrollTo({ top: 650, behavior: "smooth" });
    }, 50);
  };

  const handleHIW = () => {
    navigate("/");

    setTimeout(() => {
      window.scrollTo({ top: 1300, behavior: "smooth" });
    }, 50);
  };

  const handleFAQ = () => {
    navigate("/");

    setTimeout(() => {
      window.scrollTo({ top: 2000, behavior: "smooth" });
    }, 50);
  };

  return (
    <nav className="bg-gray-900 py-4 text-white flex justify-around font-[Montserrat] font-extralight text-md sticky top-0 z-20">
      <ul className="flex gap-6 items-center">
        <Link to="/" className="flex items-center gap-2 mr-3">
          <SiVaultwarden style={{ width: "80px", height: "80px" }} />
          <h1 className="text-2xl font-medium">Vaultive</h1>
        </Link>
        <button
          onClick={handleAbout}
          className="mt-2 relative underline-hover cursor-pointer"
        >
          About
        </button>
        <button
          onClick={handleHIW}
          className="mt-2 relative underline-hover cursor-pointer"
        >
          How it works
        </button>
        <button
          onClick={handleFAQ}
          className="mt-2 relative underline-hover cursor-pointer"
        >
          FAQ
        </button>
      </ul>
      <ul className="flex gap-6 items-center">
        {authToken ? (
          <>
            <li>
              <Link to="/Profile" className="relative underline-hover">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/chat" className="relative underline-hover">
                Chat
              </Link>
            </li>
            <button
              onClick={handleLogout}
              className="border-2 border-purple-800 rounded-3xl px-5 py-2 hover:bg-purple-700 cursor-pointer"
            >
              Logout
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
