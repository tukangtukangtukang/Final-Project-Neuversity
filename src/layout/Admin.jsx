import NavbarAdmin from "../components/NavbarAdmin"
import Footer from "../components/Footer"
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { checkAuth } from "../utils/fetchData";


export default function Admin({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  async function checkLogin() {
    const isLogin = await checkAuth();
    if (!isLogin) {
      navigate('/login');
    }
  }

  // check auth user, akan dijalankan setiap kali path berubah
  useEffect(() => {
    checkLogin()
    console.log(location.pathname)
  }, [location.pathname]);

  return (
    <>
      <NavbarAdmin />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
