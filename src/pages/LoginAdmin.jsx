import ButtonSignIn from "../components/ButtonSignIn";
import InputLogin from "../components/InputLogin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';

function LoginAdmin() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        };

        fetch("https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json/jwt-auth/v1/token", config)
            .then(response => response.json())
            .then(e => {
                console.log(e);

                if (e.errors) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        showConfirmButton: false,
                        timer: 1500,
                        text: e.errors.message[0]
                    });
                } else {
                    // set localstorage for token
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Success',
                        showConfirmButton: true,
                        confirmButtonText: 'OK',
                        allowOutsideClick: false, // Prevent dismissing the modal by clicking outside
                    }).then((result) => {
                        localStorage.setItem('token', e.token);
                        if (result.isConfirmed) {
                            navigate('/admin'); // Navigate to /admin when the user clicks OK
                        }
                    });
                }
            });
        event.preventDefault();
    }

    return (
        <div className="py-24 drop-shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 min-h-screen">
            <div className="container">
                <form onSubmit={handleSubmit} className="w-72 mx-auto bg-gray-300 p-5 rounded-badge" style={{ height: '350px' }}>
                    <h1 className="flex justify-center font-bold text-xl pt-4">Welcome Back</h1>
                    <div className="py-7">
                        <InputLogin name="username" label="Username" placeholder="Isikan username.." value={username} onInput={(event) => setUsername(event.target.value)} />
                        {/* event.target.value untuk dapetin value dari input */}
                        <InputLogin name="password" label="Password" placeholder="Isikan password.." type="password" value={password} onInput={(event) => setPassword(event.target.value)} />
                    </div>
                    <ButtonSignIn />
                </form>
            </div>
        </div>
    );
}

export default LoginAdmin;
