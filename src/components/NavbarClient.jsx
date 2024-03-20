import Logo from "./Logo.jsx"
import LogOut from "./LogOut.jsx"
import Searchbar from "./Searchbar.jsx"

export default function NavbarClient() {
  return (
    <header className=" bg-white drop-shadow-sm relative">
      <div className="container w-full grid grid-cols-3 items-center">
        <Logo />
        <Searchbar className="w-full" />
      </div>
    </header>
  );
}
