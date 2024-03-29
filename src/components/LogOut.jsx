import logoLogout from '../assets/LogOut.png';
import { useNavigate } from 'react-router-dom';

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
            console.log(data.message);
            Swal.fire({
                title: 'Success!',
                text: 'Logout berhasil.',
                icon: 'success'
            });
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
    const navigate = useNavigate();

    const handleLogout = async () => {
        // await logout();
        localStorage.removeItem('token');

        navigate('/login');
    };

    return (
        <div className='px-6 py-3 flex items-center'>
            <button onClick={() => document.getElementById('modal_logout').showModal()} className="flex">
                <img src={logoLogout} alt="" className='w-6' />
                <h1 className='my-auto ml-2 text-xs'>Log Out</h1>
            </button>
            <dialog id="modal_logout" className="modal outline-none backdrop-blur-md">
                <div className="modal-box outline-none">
                    <form>
                        <h3 className="font-bold text-3xl flex justify-center pb-5">Are you sure you want to logout ??</h3> {/* Display the dynamic title */}
                        <div className="modal-action flex justify-between">
                            <button type='button' className="btn" onClick={handleLogout}>Yes</button>
                            <button className="btn" onClick={() => document.getElementById('modal_logout').close()}>No</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default LogoutButton;
