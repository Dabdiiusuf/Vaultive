import { Link } from "react-router-dom";
import { SiVaultwarden } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  const d = new Date().getFullYear();

  return (
    <div className="bg-gray-900 w-full h-[220px] flex text-white justify-evenly border-t-1 border-gray-800">
      <ul className="border-r-1 w-full border-gray-800 h-full block relative">
        <Link
          to="/"
          className="flex items-center gap-2 mr-3 absolute top-0 p-10"
        >
          <SiVaultwarden style={{ width: "80px", height: "80px" }} />
          <h1 className="text-2xl font-medium">Vaultive</h1>
        </Link>
        <div className="absolute bottom-3 left-0 pl-10 font-thin">
          <p>Vaultive &copy; {d}</p>
        </div>
      </ul>
      <ul className="border-r-1 border-gray-800 h-full w-full p-10 font-thin flex flex-col gap-4 mt-2 relative">
        <p className="font-medium">Legal</p>
        <li className="">
          <Link to="/TermsOfUse" className="relative underline-hover">
            Terms of Use
          </Link>
        </li>
        <li className="">
          <Link to="/PrivacyPolicy" className="relative underline-hover">
            Privacy Policy
          </Link>
        </li>
      </ul>
      <ul className="border-r-1 border-gray-800 h-full w-full p-10 font-thin flex flex-col gap-4 mt-2">
        <p className="font-medium">Follow Us</p>
        <Link
          to="https://www.linkedin.com/in/danielabdinuriusuf/"
          target="_blank"
          className="flex gap-4"
        >
          <FaLinkedin size={20} color="white" />
          LinkedIn
        </Link>
        <Link
          to="https://github.com/Dabdiiusuf"
          target="_blank"
          className="flex gap-4"
        >
          <FaGithubSquare size={20} color="white" />
          Github
        </Link>
      </ul>
    </div>
  );
};

export default Footer;
