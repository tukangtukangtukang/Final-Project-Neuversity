import Logo from "../components/Logo.jsx"
import LogOut from "../components/LogOut.jsx"
import Searchbar from "../components/Searchbar.jsx"

export default function Navbar() {
  return (
    <header className="container bg-white drop-shadow-sm w-full h-14 flex justify-between items-center relative">
      <Logo />
      <Searchbar />
      <LogOut />
    </header>
  );
}
