export default function LogOut() {
  return (
    <div className='px-6 py-3 flex items-center'>
      <a href="http://localhost:5173/login">
        <button className="flex">
          <img src="src\assets\LogOut.png" alt="" className='w-6' />
          <h1 className='my-auto ml-2 text-xs'>Log Out</h1>
        </button>
      </a>
    </div>
  )
}
