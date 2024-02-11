import ButtonSignIn from "../components/ButtonSignIn";
import InputLogin from "../components/InputLogin";

function LoginAdmin() {
    return (
        <div className="py-24 drop-shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 min-h-screen">
            <div className="container">
                <form className="w-72 mx-auto bg-gray-300 p-5 rounded-badge" style={{ height: '350px' }}>
                    <h1 className="flex justify-center font-bold text-xl pt-4">Welcome Back</h1>
                    <div className="py-7">
                        <InputLogin name="username" label="Username" placeholder="Isikan username.." />
                        <InputLogin type="password" name="password" label="Password" placeholder="Isikan password.." />
                    </div>
                    <ButtonSignIn />
                </form>
            </div>
        </div>
    );
}

export default LoginAdmin;
