import Logo from "./Logo.jsx"
import LogOut from "./LogOut.jsx"
import Searchbar from "./Searchbar.jsx"

export default function NavbarAdmin() {
  return (
    <header className="container bg-white drop-shadow-sm w-full h-14 flex justify-between items-center relative">
      <Logo />
      <Searchbar />
      <LogOut />
    </header>
  );
}
