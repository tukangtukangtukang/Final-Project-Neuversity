import logo from '../assets/aviatortoro.jpg'

export default function Logo() {
  return (
    <div className="flex items-center px-3 py-3">
      <img
        src={logo}
        alt=""
        className="w-12 h-12 rounded-full"
      />
      <h1 className="my-auto ml-2 text-xs">Tukang</h1>
    </div>
  );
}
