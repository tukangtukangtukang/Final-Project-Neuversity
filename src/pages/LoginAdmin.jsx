import ButtonSignIn from "../components/ButtonSignIn";
import PasswordLoginAdmin from "../components/PasswordLoginAdmin";
import UsernameLoginAdmin from "../components/UsernameLoginAdmin";

function LoginAdmin() {
    return (
        <div className="py-16 drop-shadow-2xl">
            <form className="lg:w-80 mx-auto bg-gray-300 p-5 rounded-badge" style={{ height: '400px' }}>
                <h1 className="flex justify-center font-bold text-xl pt-4">Welcome Back</h1>
                <div className="py-8">
                    <UsernameLoginAdmin />
                    <PasswordLoginAdmin />
                </div>
                <ButtonSignIn />
            </form>
        </div>
    );
}

export default LoginAdmin;
