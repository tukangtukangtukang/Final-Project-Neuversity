import logoLogout from '../assets/LogOut.png';

async function logout() {
  const endpoint = 'https://api-fe-batch5.neuversity.id/api/admin/logout';
  const options = {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json', // Atur sesuai dengan jenis konten yang sesuai
          // Jika diperlukan, Anda dapat menambahkan header lain di sini
      },
      // Jika diperlukan, Anda dapat menambahkan body di sini
  };

  try {
      const res = await fetch(endpoint, options);
      const data = await res.json(); // Mengambil data dari respons

      if (res.ok) {
          console.log(data.message); // Menampilkan pesan dari respons
          // Tambahkan kode lain yang ingin Anda jalankan setelah logout berhasil
      } else {
          console.error(data.message); // Menampilkan pesan dari respons jika logout gagal
          // Tambahkan kode lain yang ingin Anda jalankan jika logout gagal
      }
  } catch (error) {
      console.error('Terjadi kesalahan:', error);
      // Tangani kesalahan jika terjadi kesalahan selama permintaan
  }
}


function LogoutButton() {
    const handleLogout = async () => {
        await logout();
        // Setelah logout berhasil, Anda dapat menambahkan kode lain yang ingin dieksekusi di sini
        // Misalnya, redirect ke halaman login
        window.location.href = 'http://localhost:5173/login';
    };

    return (
        <div className='px-6 py-3 flex items-center'>
            <button onClick={handleLogout} className="flex">
                <img src={logoLogout} alt="" className='w-6' />
                <h1 className='my-auto ml-2 text-xs'>Log Out</h1>
            </button>
        </div>
    );
}

export default LogoutButton;
