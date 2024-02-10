import { NavLink } from "react-router-dom";
import Logo from "../components/Logo.jsx"
import LogOut from "../components/LogOut.jsx"
import Searchbar from "../components/Searchbar.jsx"

export default function Navbar() {
  return (
    <header className="bg-white drop-shadow-sm w-full h-14 flex justify-between items-center">
      <Logo />
      <Searchbar />
      <LogOut />
    </header>
  );
}
